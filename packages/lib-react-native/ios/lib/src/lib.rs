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

extern crate libc;
extern crate ever_client;

pub use ever_client::{
    tc_create_context, tc_destroy_context, tc_destroy_string, tc_read_string, tc_request,
    tc_request_sync, CResponseHandler, ContextHandle, ResponseType, StringData,
};
