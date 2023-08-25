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

extern crate lazy_static;
extern crate libc;
extern crate ton_client;
use lazy_static::lazy_static;
use std::ffi::{CStr, CString};
use std::os::raw::c_char;
use std::sync::RwLock;

pub use ton_client::{create_context, destroy_context, request, request_sync};

fn in_string(s: *const c_char) -> String {
    if s.is_null() {
        String::default()
    } else {
        unsafe { CStr::from_ptr(s).to_str().unwrap_or_default().to_string() }
    }
}

fn out_string(s: String) -> *const c_char {
    CString::new(s).unwrap().into_raw()
}

#[no_mangle]
pub unsafe extern "C" fn deno_create_context(config: *const c_char) -> *const c_char {
    CString::new(create_context(in_string(config)))
        .unwrap()
        .into_raw()
}

#[no_mangle]
pub unsafe extern "C" fn deno_destroy_context(context: u32) {
    destroy_context(context)
}

pub type DenoResponseCallback =
    extern "C" fn(id: u32, params_json: *const c_char, response_type: u32, finished: bool);

lazy_static! {
    static ref DENO_RESPONSE_CALLBACK: RwLock<Option<DenoResponseCallback>> = RwLock::new(None);
}

fn deno_response_handler(request_id: u32, params_json: String, response_type: u32, finished: bool) {
    let callback = { *DENO_RESPONSE_CALLBACK.read().unwrap() };
    if let Some(callback) = callback {
        callback(request_id, out_string(params_json), response_type, finished)
    }
}

#[no_mangle]
pub unsafe extern "C" fn deno_set_response_callback(callback: DenoResponseCallback) {
    *DENO_RESPONSE_CALLBACK.write().unwrap() = Some(callback);
}

#[no_mangle]
pub unsafe extern "C" fn deno_clear_response_callback() {
    *DENO_RESPONSE_CALLBACK.write().unwrap() = None;
}

#[no_mangle]
pub unsafe extern "C" fn deno_request(
    context: u32,
    function_name: *const c_char,
    params_json: *const c_char,
    id: u32,
) {
    request(
        context,
        in_string(function_name),
        in_string(params_json),
        id,
        deno_response_handler,
    )
}

#[no_mangle]
pub unsafe extern "C" fn deno_request_sync(
    context: u32,
    function_name: *const c_char,
    params_json: *const c_char,
) -> *const c_char {
    out_string(request_sync(
        context,
        in_string(function_name),
        in_string(params_json),
    ))
}

#[no_mangle]
pub unsafe extern "C" fn deno_free_string(s: *mut c_char) {
    unsafe {
        let _ = CString::from_raw(s);
    }
}
