/*
* Copyright 2018-2020 TON DEV SOLUTIONS LTD.
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

use ton_client::{create_context, destroy_context, request};
use wasm_bindgen::prelude::*;

#[macro_use]
extern crate lazy_static;

use std::collections::HashMap;
use std::sync::Mutex;

lazy_static! {
    static ref HASHMAP: Mutex<HashMap<u32, bool>> = Mutex::new(HashMap::new());
}

mod conv;
use conv::{parse, stringify};

#[wasm_bindgen]
pub fn core_create_context(config_json: String) -> String {
    create_context(config_json)
}

#[wasm_bindgen]
pub fn core_destroy_context(context: u32) {
    destroy_context(context)
}

#[wasm_bindgen(js_namespace = tonclient)]
extern "C" {
    fn core_response_handler(request_id: u32, params: JsValue, response_type: u32, finished: bool);
}

fn response_handler(request_id: u32, params_json: String, response_type: u32, finished: bool) {
    // TODO: ignore BOM
    // if (paramsJson.charCodeAt(0) === 0xFEFF) {
    //     paramsJson = paramsJson.substr(1);
    // }
    let mut hashmap = HASHMAP.lock().unwrap();
    let return_blob = *hashmap.get(&request_id).unwrap();
    if finished {
        hashmap.remove(&request_id);
    }
    let params = parse(&params_json[..], return_blob);
    unsafe { core_response_handler(request_id, params, response_type, finished) };
}

#[wasm_bindgen]
pub fn core_request(context: u32, function_name: String, params: JsValue, request_id: u32) {
    let (params_json, return_blob) = stringify(params);
    let mut hashmap = HASHMAP.lock().unwrap();
    hashmap.insert(request_id, return_blob);
    request(
        context,
        function_name,
        params_json,
        request_id,
        response_handler,
    );
}
