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

extern crate jni;
extern crate ton_client;

use self::ton_client::{
    create_context, destroy_context, request, request_sync, ContextHandle, ResponseHandler,
    ResponseType,
};

use jni::objects::{GlobalRef, JClass, JObject, JString, JValue};
use jni::sys::jint;
use jni::JNIEnv;

struct JniResponseHandler {
    jvm: jni::JavaVM,
    handler: GlobalRef,
}

impl JniResponseHandler {
    fn new(env: JNIEnv, handler: JObject) -> Self {
        Self {
            jvm: env.get_java_vm().unwrap(),
            handler: env.new_global_ref(handler).unwrap(),
        }
    }

    fn invoke(&self, request_id: u32, params_json: String, response_type: u32, finished: bool) {
        let env = self.jvm.attach_current_thread().unwrap();
        let handler = self.handler.as_obj();
        let java_request_id = JValue::Int(request_id as i32);
        let java_params_json = java_value(&env, params_json);
        let java_request_id = JValue::Int(response_type as i32);
        let java_flags = JValue::Bool(if finished { 1 } else { 0 });
        env.call_method(
            handler,
            "invoke",
            "(I;Ljava/lang/String;Ljava/lang/String;I)V",
            &[java_request_id, java_params_json, java_response_type, java_finished],
        )
        .unwrap();
    }
}

struct JniBridge {
    response_handler: Option<JniResponseHandler>,
}

impl JniBridge {
    fn new() -> Self {
        Self {
            response_handler: None
        }
    }
}

lazy_static! {
    static ref BRIDGE: Mutex<JniBridge> = Mutex::new(JniBridge::new());
}

fn java_value<'a>(env: &JNIEnv<'a>, from: String) -> jni::objects::JValue<'a> {
    JValue::Object(env.new_string(from.as_str()).unwrap().into())
}

fn rust_string(env: &JNIEnv, from: JString) -> String {
    env.get_string(from).unwrap().into()
}

#[allow(non_snake_case)]
#[no_mangle]
pub unsafe extern "C" fn Java_tonos_ClientJsonInterface_createContext(
    env: JNIEnv,
    _class: JClass,
    config_json: JString,
) -> JString {
    create_context(rust_string(&env, config_json)).into()
}

#[allow(non_snake_case)]
#[no_mangle]
pub unsafe extern "C" fn Java_tonos_ClientJsonInterface_destroyContext(
    _env: JNIEnv,
    _class: JClass,
    context: jint,
) {
    destroy_context(context as ContextHandle)
}

#[allow(non_snake_case)]
#[no_mangle]
pub unsafe extern "C" fn Java_tonos_ClientJsonInterface_setResponseHandler(
    env: JNIEnv,
    _class: JClass,
    response_handler: JObject,
) {
    BRIDGE.lock().
}

#[allow(non_snake_case)]
#[no_mangle]
pub unsafe extern "C" fn Java_tonos_ClientJsonInterface_request(
    env: JNIEnv,
    _class: JClass,
    context: jint,
    method: JString,
    params_json: JString,
) {
    request(
        context as InteropContext,
        rust_string(&env, method),
        rust_string(&env, params_json),
    );
}
