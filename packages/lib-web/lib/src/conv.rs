use js_sys::Error;
use js_sys::{Array, ArrayBuffer, Object, Reflect, Uint8Array};
use serde_json::Value;
use wasm_bindgen::{prelude::*, JsCast};
use web_sys::Blob;

extern crate base64;

use crate::ser::Serializer;
use crate::RequestOptions;
use serde::ser::Serialize;

type Path = Vec<String>;
type Blobs = Vec<(Path, Vec<u8>)>;

#[inline(always)]
fn js_to_serde_value(obj: JsValue) -> Result<Value, Error> {
    serde_wasm_bindgen::from_value(obj).map_err(|err| Error::new(&err.to_string()[..]))
}

#[inline(always)]
fn serde_to_js_value(value: &Value) -> Result<JsValue, Error> {
    // NOTE: Currently serde_wasm_bindgen always converts `serde_json::Null` into `JsValue::UNDEFINED`.
    // Because of that, we need to replace `undefined` with `null` in `worker-template.js`.
    let serializer = Serializer::json_compatible();
    value
        .serialize(&serializer)
        .map_err(|err| Error::new(&err.to_string()[..]))
}

#[inline(always)]
fn json_str_to_serde_value(s: &str) -> Result<Value, Error> {
    serde_json::from_str(s).map_err(|err| Error::new(&err.to_string()[..]))
}

#[inline(always)]
fn serde_value_to_json_string(value: &Value) -> String {
    value.to_string()
}

fn make_blob(bytes: &[u8]) -> Result<Blob, Error> {
    let ta = unsafe { Uint8Array::view(bytes) };
    let arr = Array::new_with_length(1);
    arr.set(0, JsValue::from(ta));
    Blob::new_with_u8_array_sequence(&arr).map_err(|_| Error::new("Cannot make blob"))
}

fn read_array_buffer(ab: &JsValue) -> Vec<u8> {
    Uint8Array::new(ab).to_vec()
}

fn replace_strings_with_placeholders(
    value: &mut Value,
    function_name: &String,
) -> Result<Blobs, Error> {
    let mut blobs: Blobs = vec![];
    replace_strings_with_placeholders_recursive(value, function_name, &vec![], &mut blobs)?;
    Ok(blobs)
}

fn replace_strings_with_placeholders_recursive(
    value: &mut Value,
    function_name: &String,
    path: &Path,
    blobs: &mut Blobs,
) -> Result<(), Error> {
    match value {
        Value::Object(obj) => {
            for (key, value) in obj.iter_mut() {
                let mut newpath = path.clone();
                newpath.push(key.clone());
                replace_strings_with_placeholders_recursive(value, function_name, &newpath, blobs)?
            }
        }
        Value::String(s) if is_field_binary(function_name, path) => {
            let bytes = base64::decode(s).map_err(|err| Error::new(&err.to_string()[..]))?;
            blobs.push((path.clone(), bytes));
            *value = Value::Null;
        }
        _ => (),
    }
    Ok(())
}

fn is_field_binary(function_name: &String, path: &Path) -> bool {
    // TODO: load response params types from API specification
    !(function_name == "crypto.sign" && path.join(".") == "signature")
}

fn replace_placeholders_with_blobs(root: &JsValue, blobs: &Blobs) -> Result<(), Error> {
    for (path, bytes) in blobs.iter() {
        replace_placeholder_with_blob(root, path, bytes)?
    }
    Ok(())
}

fn replace_placeholder_with_blob(
    root: &JsValue,
    path: &[String],
    bytes: &[u8],
) -> Result<(), Error> {
    match path {
        [head] => {
            let key = head.into();
            let blob = make_blob(bytes)?;
            match Reflect::set(&root, &key, &blob) {
                Ok(true) => Ok(()),
                _ => Err(Error::new("Cannot set object property")),
            }
        }
        [head, ..] => {
            let key = head.into();
            let child = Reflect::get(&root, &key)?;
            replace_placeholder_with_blob(&child, &path[1..], bytes)
        }
        [] => Err(Error::new("Empty path")),
    }
}

pub fn parse(s: &str, request_options: &RequestOptions) -> Result<JsValue, Error> {
    if s.is_empty() {
        // Empty string is not a valid JSON document, so it would cause a parse error.
        return Ok(Object::new().into());
    }

    let mut value = json_str_to_serde_value(s)?;
    let blobs = if request_options.return_blob {
        replace_strings_with_placeholders(&mut value, &request_options.function_name)?
    } else {
        vec![]
    };
    let jsvalue = serde_to_js_value(&value)?;
    replace_placeholders_with_blobs(&jsvalue, &blobs)?;
    Ok(jsvalue)
}

fn replace_array_buffers_with_placeholders(jsvalue: &JsValue) -> Result<Blobs, Error> {
    let mut blobs: Blobs = vec![];
    replace_array_buffers_with_placeholders_recursive(jsvalue, &mut blobs, &vec![])?;
    Ok(blobs)
}

fn replace_array_buffers_with_placeholders_recursive(
    jsvalue: &JsValue,
    blobs: &mut Blobs,
    path: &Path,
) -> Result<(), Error> {
    if jsvalue.is_instance_of::<ArrayBuffer>() {
        // NOTE: don't need to replace ArrayBuffers with placeholders here
        // because `serde_wasm_bindgen::from_value` will automatically convert them to `{}`
        let bytes = read_array_buffer(&jsvalue);
        blobs.push((path.clone(), bytes));
    } else if jsvalue.is_object() {
        let obj = Object::from(jsvalue.clone());
        let keys = Object::keys(&obj);
        for key in keys.to_vec() {
            let child = Reflect::get(&obj, &key)?;
            let mut newpath = path.clone();
            newpath.push(
                key.as_string()
                    .ok_or_else(|| Error::new("Key is not a string"))?,
            );
            replace_array_buffers_with_placeholders_recursive(&child, blobs, &newpath)?;
        }
    }
    Ok(())
}

fn replace_placeholders_with_strings(root: &mut Value, blobs: &Blobs) -> Result<(), Error> {
    for (path, bytes) in blobs.iter() {
        replace_placeholder_with_string(root, path, bytes)?
    }
    Ok(())
}

fn replace_placeholder_with_string(
    root: &mut Value,
    path: &[String],
    bytes: &[u8],
) -> Result<(), Error> {
    match path {
        [] => {
            *root = base64::encode(bytes).into();
            Ok(())
        }
        [key, ..] => {
            let obj = root
                .as_object_mut()
                .ok_or_else(|| Error::new("Value is not an object"))?;
            let child = obj
                .get_mut(key)
                .ok_or_else(|| Error::new("Key does not exist"))?;
            replace_placeholder_with_string(child, &path[1..], bytes)
        }
    }
}

fn determine_return_blob(obj: &JsValue, blobs: &Blobs) -> bool {
    // If `response_binary_type` request param is set to 'blob'
    // or there is any blob in the request params and `response_binary_type` is not set,
    // then all strings in the response params will be converted from base64 to raw binary JS Blobs
    // NOTE: This behaviour is to be changed later once TON SDK core uses binary type in the response params.
    let default = !blobs.is_empty();
    match Reflect::get(&obj, &"response_binary_type".into()) {
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

pub fn stringify(obj: JsValue) -> Result<(String, bool), Error> {
    if obj.is_undefined() || obj.is_null() {
        return Ok(("".into(), false));
    }

    let blobs = replace_array_buffers_with_placeholders(&obj)?;
    let return_blob = determine_return_blob(&obj, &blobs);
    let mut value = js_to_serde_value(obj)?;
    replace_placeholders_with_strings(&mut value, &blobs)?;
    let string = serde_value_to_json_string(&value);
    Ok((string, return_blob))
}
