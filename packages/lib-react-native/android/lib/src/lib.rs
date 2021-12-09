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

extern crate jni;
extern crate ton_client;
#[macro_use]
extern crate lazy_static;

use self::ton_client::{create_context, destroy_context, request, ContextHandle};

use jni::objects::{GlobalRef, JClass, JObject, JString, JValue};
use jni::sys::{jlong, jstring};
use jni::JNIEnv;
use std::sync::Mutex;

struct JniResponseHandler {
    jvm: jni::JavaVM,
    handler: GlobalRef,
}

lazy_static! {
    static ref JNI_RESPONSE_HANDLER: Mutex<Option<JniResponseHandler>> = Mutex::new(None);
}

#[allow(non_snake_case)]
#[no_mangle]
pub unsafe extern "C" fn Java_tonlabs_tonclient_TonClientJsonInterface_createContext(
    env: JNIEnv,
    _class: JClass,
    config_json: JString,
) -> jstring {
    let result = if let Ok(config_json) = env.get_string(config_json) {
        create_context(config_json.into())
    } else {
        r#"{ "error": { "message": "Can't convert config json" } }"#.into()
    };
    env.new_string(result)
        .expect("Couldn't create java string!")
        .into_inner()
}

#[allow(non_snake_case)]
#[no_mangle]
pub unsafe extern "C" fn Java_tonlabs_tonclient_TonClientJsonInterface_destroyContext(
    _env: JNIEnv,
    _class: JClass,
    context: jlong,
) {
    destroy_context(context as ContextHandle)
}

#[allow(non_snake_case)]
#[no_mangle]
pub unsafe extern "C" fn Java_tonlabs_tonclient_TonClientJsonInterface_setResponseHandler(
    env: JNIEnv,
    _class: JClass,
    handler: JObject,
) {
    *JNI_RESPONSE_HANDLER.lock().unwrap() = None;
    if handler.is_null() {
        return;
    }
    if let Ok(jvm) = env.get_java_vm() {
        if let Ok(handler) = env.new_global_ref(handler) {
            *JNI_RESPONSE_HANDLER.lock().unwrap() = Some(JniResponseHandler { jvm, handler })
        }
    }
}

fn response_handler(request_id: u32, params_json: String, response_type: u32, finished: bool) {
    if let Some(ref handler) = *JNI_RESPONSE_HANDLER.lock().unwrap() {
        if let Ok(env) = handler.jvm.attach_current_thread() {
            if let Ok(params_json) = env.new_string(params_json) {
                let _ = env.call_method(
                    handler.handler.as_obj(),
                    "invoke",
                    "(JLjava/lang/String;JZ)V",
                    &[
                        JValue::from(request_id as i64),
                        JValue::from(JObject::from(params_json)),
                        JValue::from(response_type as i64),
                        JValue::from(finished),
                    ],
                );
            }
        }
    }
}

#[allow(non_snake_case)]
#[no_mangle]
pub unsafe extern "C" fn Java_tonlabs_tonclient_TonClientJsonInterface_sendRequest(
    env: JNIEnv,
    _class: JClass,
    context: jlong,
    request_id: jlong,
    function_name: JString,
    function_params_json: JString,
) {
    if let Ok(function_name) = env.get_string(function_name) {
        if let Ok(function_params_json) = env.get_string(function_params_json) {
            request(
                context as ContextHandle,
                function_name.into(),
                function_params_json.into(),
                request_id as u32,
                response_handler,
            );
        }
    }
}
