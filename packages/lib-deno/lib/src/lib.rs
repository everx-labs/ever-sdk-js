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
use std::sync::Mutex;

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

struct Callback {
    callback: Option<DenoResponseCallback>,
    id: u32,
    locked_ids: Vec<u32>,
}

impl Callback {
    fn new() -> Self {
        Self {
            callback: None,
            id: 0,
            locked_ids: Vec::new(),
        }
    }

    fn lock(&mut self) -> Option<(DenoResponseCallback, u32)> {
        if let Some(callback) = self.callback {
            self.locked_ids.push(self.id);
            Some((callback, self.id))
        } else {
            None
        }
    }

    fn unlock(&mut self, id: u32) {
        if let Some(i) = self.find_index_of_locked_id(id) {
            self.locked_ids.remove(i);
        }
    }

    fn find_index_of_locked_id(&mut self, id: u32) -> Option<usize> {
        for i in (0..self.locked_ids.len()).rev() {
            if self.locked_ids[i] == id {
                return Some(i);
            }
        }
        None
    }

    fn set(&mut self, callback: Option<DenoResponseCallback>) -> u32 {
        if callback.is_some() {
            self.id = self.id.overflowing_add(1).0;
        }
        self.callback = callback;
        self.id
    }
}

lazy_static! {
    static ref CALLBACK: Mutex<Callback> = Mutex::new(Callback::new());
}

fn lock_callback() -> Option<(DenoResponseCallback, u32)> {
    CALLBACK.lock().unwrap().lock()
}

fn unlock_callback(id: u32) {
    CALLBACK.lock().unwrap().unlock(id);
}

fn deno_response_handler(request_id: u32, params_json: String, response_type: u32, finished: bool) {
    if let Some((callback, id)) = lock_callback() {
        callback(
            request_id,
            out_string(params_json.clone()),
            response_type,
            finished,
        );
        unlock_callback(id);
    }
}

#[no_mangle]
pub unsafe extern "C" fn deno_set_response_callback(callback: DenoResponseCallback) -> u32 {
    CALLBACK.lock().unwrap().set(Some(callback))
}

#[no_mangle]
pub unsafe extern "C" fn deno_clear_response_callback() {
    CALLBACK.lock().unwrap().set(None);
}

#[no_mangle]
pub unsafe extern "C" fn deno_response_callback_is_locked(id: u32) -> bool {
    CALLBACK
        .lock()
        .unwrap()
        .find_index_of_locked_id(id)
        .is_some()
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
