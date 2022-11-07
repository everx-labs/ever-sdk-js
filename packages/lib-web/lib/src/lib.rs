/*
* Copyright 2018-2020 TON Labs LTD.
*
* Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
* this file except in compliance with the License.
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific TON DEV software governing permissions and
* limitations under the License.
*/

use js_sys::Error;
use std::collections::HashMap;
use std::sync::Mutex;
use ton_client::{create_context, destroy_context, request};
use wasm_bindgen::prelude::*;

mod conv;
mod ser;

use conv::{parse, stringify};

#[macro_use]
extern crate lazy_static;

lazy_static! {
    static ref REQUEST_OPTIONS: Mutex<HashMap<u32, RequestOptions>> = Mutex::new(HashMap::new()); // only active requests
}

#[derive(Clone)]
pub struct RequestOptions {
    function_name: String,
    return_blob: bool,
}

#[wasm_bindgen]
pub fn core_create_context(config_json: String) -> String {
    create_context(config_json)
}

#[wasm_bindgen]
pub fn core_destroy_context(context: u32) {
    destroy_context(context)
}

#[wasm_bindgen]
extern "C" {
    fn core_response_handler(request_id: u32, params: JsValue, response_type: u32, finished: bool);
}

fn response_handler(request_id: u32, params_json: String, response_type: u32, finished: bool) {
    let result: Result<_, Error> = (|| {
        let request_options = {
            let mut hashmap = REQUEST_OPTIONS
                .lock()
                .map_err(|err| Error::new(&err.to_string()[..]))?;
            if finished {
                hashmap.remove(&request_id)
            } else {
                hashmap.get(&request_id).cloned()
            }
            .ok_or_else(|| Error::new("Request options not found"))?
        };
        // TODO: ignore BOM
        // if (paramsJson.charCodeAt(0) === 0xFEFF) {
        //     paramsJson = paramsJson.substr(1);
        // }
        let params = parse(&params_json[..], &request_options)?;
        Ok(params)
    })();
    match result {
        Ok(params) => core_response_handler(request_id, params, response_type, finished),
        Err(error) => {
            let params = js_sys::Object::new();
            js_sys::Reflect::set(&params, &JsValue::from("code"), &JsValue::from(-1)).ok();
            js_sys::Reflect::set(
                &params,
                &JsValue::from("error"),
                &JsValue::from(error.message()),
            )
            .ok();
            core_response_handler(request_id, params.into(), 1, finished)
        }
    }
}

#[wasm_bindgen]
pub fn core_request(
    context: u32,
    function_name: String,
    params: JsValue,
    request_id: u32,
) -> Result<(), JsValue> {
    let (params_json, return_blob) = stringify(params)?;
    let request_options = RequestOptions {
        function_name: function_name.clone(),
        return_blob,
    };
    REQUEST_OPTIONS
        .lock()
        .map_err(|err| Error::new(&err.to_string()[..]))?
        .insert(request_id, request_options);
    request(
        context,
        function_name,
        params_json,
        request_id,
        response_handler,
    );
    Ok(())
}
