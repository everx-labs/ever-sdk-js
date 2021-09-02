use js_sys::{Array, ArrayBuffer, Object, Reflect, Uint8Array};
use serde::ser::Serialize;
use serde_json::Value;
use wasm_bindgen::{prelude::*, JsCast};
use web_sys::Blob;

extern crate base64;

type Path = Vec<String>;
type Blobs = Vec<(Path, Vec<u8>)>;

#[inline(always)]
fn js_to_serde_value(obj: JsValue) -> Value {
    serde_wasm_bindgen::from_value(obj).unwrap()
}

#[inline(always)]
fn serde_to_js_value(value: &Value) -> JsValue {
    let serializer = serde_wasm_bindgen::Serializer::new().serialize_maps_as_objects(true);
    value.serialize(&serializer).unwrap()
}

#[inline(always)]
fn json_str_to_serde_value(s: &str) -> Value {
    serde_json::from_str(s).unwrap()
}

#[inline(always)]
fn serde_value_to_json_string(value: &Value) -> String {
    value.to_string()
}

fn make_blob(bytes: &[u8]) -> Blob {
    let ta = unsafe { Uint8Array::view(bytes) };
    let arr = Array::new_with_length(1);
    arr.set(0, JsValue::from(ta));
    Blob::new_with_u8_array_sequence(&arr).unwrap()
}

fn read_array_buffer(ab: &JsValue) -> Vec<u8> {
    let ta = Uint8Array::new(ab);
    let mut bytes: Vec<u8> = vec![0; ta.length() as usize];
    ta.copy_to(&mut bytes);
    bytes
}

fn replace_strings_with_placeholders(value: &mut Value) -> Blobs {
    let mut blobs: Blobs = vec![];
    replace_strings_with_placeholders_recursive(value, &vec![], &mut blobs);
    blobs
}

fn replace_strings_with_placeholders_recursive(value: &mut Value, path: &Path, blobs: &mut Blobs) {
    match value {
        Value::Object(obj) => {
            for (key, value) in obj.iter_mut() {
                let mut newpath = path.clone();
                newpath.push(key.clone());
                replace_strings_with_placeholders_recursive(value, &newpath, blobs)
            }
        }
        Value::String(s) => {
            let bytes = base64::decode(s).unwrap();
            blobs.push((path.clone(), bytes));
            *value = Value::Null
        }
        _ => (),
    }
}

fn replace_placeholders_with_blobs(root: &JsValue, blobs: &Blobs) {
    for (path, bytes) in blobs.iter() {
        replace_placeholder_with_blob(root, path, bytes);
    }
}

fn replace_placeholder_with_blob(root: &JsValue, path: &[String], bytes: &[u8]) {
    match path {
        [head] => {
            let key = head.into();
            let blob = make_blob(bytes);
            unsafe { Reflect::set(&root, &key, &blob) }.unwrap();
        }
        [head, ..] => {
            let key = head.into();
            let child = unsafe { Reflect::get(&root, &key) }.unwrap();
            replace_placeholder_with_blob(&child, &path[1..], bytes);
        }
        [] => panic!("Empty path"),
    }
}

pub fn parse(s: &str, return_blob: bool) -> JsValue {
    let mut value = json_str_to_serde_value(s);
    let blobs = if return_blob {
        replace_strings_with_placeholders(&mut value)
    } else {
        vec![]
    };
    let jsvalue = serde_to_js_value(&value);
    replace_placeholders_with_blobs(&jsvalue, &blobs);
    jsvalue
}

fn replace_array_buffers_with_placeholders(jsvalue: &JsValue) -> Blobs {
    let mut blobs: Blobs = vec![];
    replace_array_buffers_with_placeholders_recursive(jsvalue, &mut blobs, &vec![]);
    blobs
}

fn replace_array_buffers_with_placeholders_recursive(
    jsvalue: &JsValue,
    blobs: &mut Blobs,
    path: &Path,
) {
    if jsvalue.is_instance_of::<ArrayBuffer>() {
        // NOTE: don't need to replace ArrayBuffers with placeholders here
        // because `serde_wasm_bindgen::from_value` will automatically convert them to `{}`
        let bytes = read_array_buffer(&jsvalue);
        blobs.push((path.clone(), bytes));
    } else if jsvalue.is_object() {
        let obj = Object::from(jsvalue.clone());
        let keys: js_sys::Array = Object::keys(&obj);
        for key in keys.to_vec() {
            let child = unsafe { Reflect::get(&obj, &key) }.unwrap();
            let mut newpath = path.clone();
            newpath.push(key.as_string().unwrap());
            replace_array_buffers_with_placeholders_recursive(&child, blobs, &newpath);
        }
    }
}

fn replace_placeholders_with_strings(root: &mut Value, blobs: &Blobs) {
    for (path, bytes) in blobs.iter() {
        replace_placeholder_with_string(root, path, bytes);
    }
}

fn replace_placeholder_with_string(root: &mut Value, path: &[String], bytes: &[u8]) {
    match path {
        [] => {
            *root = base64::encode(bytes).into();
        }
        [key, ..] => {
            let obj = root.as_object_mut().unwrap();
            let child = obj.get_mut(key).unwrap();
            replace_placeholder_with_string(child, &path[1..], bytes);
        }
    }
}

fn determine_return_blob(obj: &JsValue, blobs: &Blobs) -> bool {
    // If `response_binary_type` request param is set to 'blob'
    // or there is any blob in the request params and `response_binary_type` is not set,
    // then all strings in the response params will be converted from base64 to raw binary JS Blobs
    let default = !blobs.is_empty();
    match unsafe { Reflect::get(&obj, &"response_binary_type".into()) } {
        Ok(value) => match value.as_string() {
            Some(string) => match string.as_str() {
                "blob" => true,
                "base64" => false,
                _ => default,
            },
            None => default,
        },
        _ => default,
    }
}

pub fn stringify(obj: JsValue) -> (String, bool) {
    if obj.is_undefined() || obj.is_null() {
        return ("".into(), false);
    }
    let blobs = replace_array_buffers_with_placeholders(&obj);
    let return_blob = determine_return_blob(&obj, &blobs);
    let mut value = js_to_serde_value(obj);
    replace_placeholders_with_strings(&mut value, &blobs);
    let string = serde_value_to_json_string(&value);
    (string, return_blob)
}
