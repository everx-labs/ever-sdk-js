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
 *
 */

// This file is just a template that used to generate index.js at npm installation stage

const workerScript = `//****************************************************************** WRAPPER BEGIN
let wasm;

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

let cachedBigInt64Memory0 = null;

function getBigInt64Memory0() {
    if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
    }
    return cachedBigInt64Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  \`\${val}\`;
    }
    if (type == 'string') {
        return \`"\${val}"\`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return \`Symbol(\${description})\`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return \`Function(\${name})\`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of \`val\`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return \`\${val.name}: \${val.message}\\n\${val.stack}\`;
    }
    // TODO we could test for more things here, like \`Set\`s and \`Map\`s.
    return className;
}

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                state.a = 0;

            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_50(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h64aa01124d82b7bc(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_53(arg0, arg1) {
    wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1543f5e0c9a3362a(arg0, arg1);
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_56(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5c6907c0780815e4(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_59(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4a01cccec9c7eb10(arg0, arg1);
}

function __wbg_adapter_62(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcc7ee8c84ba9c2e8(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {string} config_json
* @returns {string}
*/
function core_create_context(config_json) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.core_create_context(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

/**
* @param {number} context
*/
function core_destroy_context(context) {
    wasm.core_destroy_context(context);
}

/**
* @param {number} context
* @param {string} function_name
* @param {any} params
* @param {number} request_id
*/
function core_request(context, function_name, params, request_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.core_request(retptr, context, ptr0, len0, addHeapObject(params), request_id);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_new_15d3966e9981a196 = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_cf65c07de34b9a08 = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function(arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_newwithlength_0da6f12fbc1ab6eb = function(arg0) {
        const ret = new Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_17224bc548dd1d7b = function(arg0, arg1, arg2) {
        getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    };
    imports.wbg.__wbg_newwithu8arraysequence_fede89c6795cc33e = function() { return handleError(function (arg0) {
        const ret = new Blob(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_get_baf4855f9a986186 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof ArrayBuffer;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_new_537b7341ce90bb31 = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_keys_60443f4f867207f9 = function(arg0) {
        const ret = Object.keys(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_length_e498fbc24f9c1d4f = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_get_27fe3dac1c4d0224 = function(arg0, arg1) {
        const ret = getObject(arg0)[arg1 >>> 0];
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_new0_25059e40b1c02766 = function() {
        const ret = new Date();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getTime_7c59072d1651a3cf = function(arg0) {
        const ret = getObject(arg0).getTime();
        return ret;
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = getObject(arg0) == getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_is_bigint = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'bigint';
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbg_isSafeInteger_8c4789029e885159 = function(arg0) {
        const ret = Number.isSafeInteger(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
        const v = getObject(arg1);
        const ret = typeof(v) === 'bigint' ? v : undefined;
        getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbindgen_bigint_from_i64 = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
        const ret = getObject(arg0) === getObject(arg1);
        return ret;
    };
    imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
        const ret = BigInt.asUintN(64, arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_isArray_39d28997bf6b96b4 = function(arg0) {
        const ret = Array.isArray(getObject(arg0));
        return ret;
    };
    imports.wbg.__wbg_iterator_55f114446221aa5a = function() {
        const ret = Symbol.iterator;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_in = function(arg0, arg1) {
        const ret = getObject(arg0) in getObject(arg1);
        return ret;
    };
    imports.wbg.__wbg_entries_4e1315b774245952 = function(arg0) {
        const ret = Object.entries(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_is_null = function(arg0) {
        const ret = getObject(arg0) === null;
        return ret;
    };
    imports.wbg.__wbg_String_91fba7ded13ba54c = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_new_f9876326328f45ed = function() {
        const ret = new Object();
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_String_822113da33f674b2 = function(arg0, arg1) {
        const ret = String(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_coreresponsehandler_ea6834b642be48a5 = function(arg0, arg1, arg2, arg3) {
        core_response_handler(arg0 >>> 0, takeObject(arg1), arg2 >>> 0, arg3 !== 0);
    };
    imports.wbg.__wbg_message_a95c3ef248e4b57a = function(arg0) {
        const ret = getObject(arg0).message;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_b525de17f44a8943 = function() {
        const ret = new Array();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_f841cc6f2098f4b5 = function() {
        const ret = new Map();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_388c4c6422704173 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'string';
        return ret;
    };
    imports.wbg.__wbg_set_7c7d5c9ffac23f2f = function(arg0, arg1, arg2) {
        getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
    };
    imports.wbg.__wbg_transaction_6d097d62f550220d = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).transaction(getStringFromWasm0(arg1, arg2), takeObject(arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setoncomplete_f32167d3f84be687 = function(arg0, arg1) {
        getObject(arg0).oncomplete = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_7cbe775a0abc7a8e = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_setonabort_0e116e0f6f9fc3a6 = function(arg0, arg1) {
        getObject(arg0).onabort = getObject(arg1);
    };
    imports.wbg.__wbg_objectStore_cdc69f65ad4a71eb = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).objectStore(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_readyState_d9cf5eb3487e31d6 = function(arg0) {
        const ret = getObject(arg0).readyState;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_setonsuccess_925a7718d3f62bc1 = function(arg0, arg1) {
        getObject(arg0).onsuccess = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_019196fbce756cc0 = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_target_b629c177f9bee3da = function(arg0) {
        const ret = getObject(arg0).target;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = takeObject(arg0).original;
        if (obj.cnt-- == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_item_d5de7e3394624329 = function(arg0, arg1, arg2) {
        const ret = getObject(arg1).item(arg2 >>> 0);
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_result_3a1fef332bc47038 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).result;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_next_88560ec06a094dea = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).next();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_done_1ebec03bbd919843 = function(arg0) {
        const ret = getObject(arg0).done;
        return ret;
    };
    imports.wbg.__wbg_value_6ac8da5cc5b3efda = function(arg0) {
        const ret = getObject(arg0).value;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_call_95d1ea488d03e4e8 = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_next_b7d530c04fd8b217 = function(arg0) {
        const ret = getObject(arg0).next;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_e7c1f827057f6584 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_a09ec664e14b1b81 = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_87cbb8506fecf3a9 = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_c85a9259e621f3db = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_newnoargs_2b8b6bd7753c76ba = function(arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_17499e8aa4003ebd = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_27a2afe8ab42b09f = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_set_6aa458a4ebdb65cb = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_self_7eede1f4488bf346 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_crypto_c909fb428dcbddb6 = function(arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_msCrypto_511eefefbfc70ae4 = function(arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_static_accessor_MODULE_ef3aa2eb251158a5 = function() {
        const ret = module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_900d5c3984fe7703 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_307049345d0bd88c = function(arg0) {
        const ret = getObject(arg0).getRandomValues;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithlength_b56c882b57805732 = function(arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_randomFillSync_85b3f4c52c56c313 = function(arg0, arg1, arg2) {
        getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    };
    imports.wbg.__wbg_subarray_7526649b91a252a6 = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_getRandomValues_cd175915511f705e = function(arg0, arg1) {
        getObject(arg0).getRandomValues(getObject(arg1));
    };
    imports.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Uint8Array;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_clearTimeout_b2b8af0f044e02e9 = function(arg0, arg1) {
        getObject(arg0).clearTimeout(arg1);
    };
    imports.wbg.__wbg_getTimezoneOffset_2a6b27fb18493a56 = function(arg0) {
        const ret = getObject(arg0).getTimezoneOffset();
        return ret;
    };
    imports.wbg.__wbg_setTimeout_6609c9aa64f32bfc = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_newwithstrandinit_c45f0dc6da26fd03 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_headers_ab5251d2727ac41e = function(arg0) {
        const ret = getObject(arg0).headers;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_a5d34c36a1a4ebd1 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_fetch_465e8cb61a0f43ea = function(arg0, arg1) {
        const ret = getObject(arg0).fetch(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_instanceof_Response_fb3a4df648c1859b = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Response;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_text_f61464d781b099f0 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).text();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_status_d483a4ac847f380a = function(arg0) {
        const ret = getObject(arg0).status;
        return ret;
    };
    imports.wbg.__wbg_url_8ec2534cdfacb103 = function(arg0, arg1) {
        const ret = getObject(arg1).url;
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_setonupgradeneeded_8961be061344d04a = function(arg0, arg1) {
        getObject(arg0).onupgradeneeded = getObject(arg1);
    };
    imports.wbg.__wbg_setonblocked_78e53418c43a7090 = function(arg0, arg1) {
        getObject(arg0).onblocked = getObject(arg1);
    };
    imports.wbg.__wbg_new_8ad026ef33da9ab1 = function() { return handleError(function (arg0, arg1) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_newwithstr_09e6b7baeccb3a5f = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setonmessage_5ea7e452fd7a5544 = function(arg0, arg1) {
        getObject(arg0).onmessage = getObject(arg1);
    };
    imports.wbg.__wbg_setonopen_b91a933a10be7d48 = function(arg0, arg1) {
        getObject(arg0).onopen = getObject(arg1);
    };
    imports.wbg.__wbg_setonerror_a6a7413fc33449ef = function(arg0, arg1) {
        getObject(arg0).onerror = getObject(arg1);
    };
    imports.wbg.__wbg_close_546591d4b4350b36 = function() { return handleError(function (arg0) {
        getObject(arg0).close();
    }, arguments) };
    imports.wbg.__wbg_send_36f8bcb566f8afa0 = function() { return handleError(function (arg0, arg1, arg2) {
        getObject(arg0).send(getStringFromWasm0(arg1, arg2));
    }, arguments) };
    imports.wbg.__wbg_data_af909e5dfe73e68c = function(arg0) {
        const ret = getObject(arg0).data;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_message_f15effc8b20828e2 = function(arg0, arg1) {
        const ret = getObject(arg1).message;
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_delete_d2905418845867ae = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).delete(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_setonversionchange_fd71954420371ad8 = function(arg0, arg1) {
        getObject(arg0).onversionchange = getObject(arg1);
    };
    imports.wbg.__wbg_Window_5684341ff6dfe3ad = function(arg0) {
        const ret = getObject(arg0).Window;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_WorkerGlobalScope_e0447ffcae8bb272 = function(arg0) {
        const ret = getObject(arg0).WorkerGlobalScope;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_indexedDB_47544d523ac2a208 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).indexedDB;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_indexedDB_83385e4ce65e9054 = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).indexedDB;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_open_bd135117d9924392 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_get_18b8195859195e7e = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).get(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_stringify_029a979dfb73aa17 = function() { return handleError(function (arg0) {
        const ret = JSON.stringify(getObject(arg0));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_put_fdcda25ee2a99b60 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).put(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_objectStoreNames_f0884fed45ebc81c = function(arg0) {
        const ret = getObject(arg0).objectStoreNames;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_createObjectStore_ebb17df1a43fd925 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).createObjectStore(getStringFromWasm0(arg1, arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_Error_749a7378f4439ee0 = function(arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Error;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(getObject(arg1));
        const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg_then_f753623316e2873a = function(arg0, arg1, arg2) {
        const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_resolve_fd40f858d9db1a04 = function(arg0) {
        const ret = Promise.resolve(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_then_ec5db6d509eb475f = function(arg0, arg1) {
        const ret = getObject(arg0).then(getObject(arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_error_f64b8d41ed4d2fdc = function() { return handleError(function (arg0) {
        const ret = getObject(arg0).error;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_instanceof_Window_e266f02eee43b570 = function(arg0) {
        let result;
        try {
            result = true;
        } catch {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbindgen_closure_wrapper853 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 48, __wbg_adapter_50);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper861 = function(arg0, arg1, arg2) {
        const ret = makeClosure(arg0, arg1, 48, __wbg_adapter_53);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5116 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_56);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5120 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_59);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5124 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_62);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5129 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_56);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper5997 = function(arg0, arg1, arg2) {
        const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_56);
        return addHeapObject(ret);
    };

    return imports;
}

function initMemory(imports, maybe_memory) {

}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedBigInt64Memory0 = null;
    cachedFloat64Memory0 = null;
    cachedInt32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    const imports = getImports();

    initMemory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}


//****************************************************************** WRAPPER END

function replaceUndefinedWithNulls(value) {
    if (value === undefined) {
        return null;
    }
    if (value instanceof Blob) {
        return value;
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = replaceUndefinedWithNulls(value[key]);
        }
        return result;
    }
    return value;
};

function core_response_handler(request_id, params, response_type, finished) {
    postMessage({
        type: 'response',
        requestId: request_id,
        params: replaceUndefinedWithNulls(params),
        responseType: response_type,
        finished,
    });
}

async function replaceBlobsWithArrayBuffers(value) {
    if (value instanceof Blob) {
        return await value.arrayBuffer();
    }
    if (typeof value === "bigint") {
        if (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER) {
            return Number(value);
        } else {
            return value.toString();
        }
    }
    if (typeof value === "object" && value !== null) {
        const result = Array.isArray(value) ? [] : {};
        for (const key in value) {
            result[key] = await replaceBlobsWithArrayBuffers(value[key]);
        }
        return result;
    }
    return value;
}

self.onmessage = (e) => {
    const message = e.data;
    switch (message.type) {
    case 'init':
        (async () => {
            await init(message.wasmModule);
            postMessage({ type: 'init' });
        })();
        break;

    case 'createContext':
        postMessage({
            type: 'createContext',
            result: core_create_context(message.configJson),
            requestId: message.requestId,
        });
        break;

    case 'destroyContext':
        core_destroy_context(message.context);
        postMessage({
            type: 'destroyContext'
        });
        break;

    case 'request':
        (async () => {
            core_request(
                message.context,
                message.functionName,
                await replaceBlobsWithArrayBuffers(message.functionParams),
                message.requestId,
            );
        })();
        break;
    }
};
`;

type LibDenoWasmOptions = {
    /**
     * Prints debug message.
     * @param message
     */
    debugLog?: (message: any) => void,
    /**
     * URL to `eversdk.wasm` module.
     * Default is "/eversdk.wasm"
     */
    binaryURL?: string,
    /**
     * Alternative WASM module loader.
     */
    loadModule?: () => Promise<WebAssembly.Module>,

    /// Run core in single thread mode.
    disableSeparateWorker?: boolean,
}

let options: LibDenoWasmOptions | null = null;

export function libDenoWasmSetup(libOptions?: LibDenoWasmOptions) {
    options = libOptions ?? null;
}

function getLibName() {
    return Promise.resolve("web");
}

function debugLog(message: unknown) {
    if (options && options.debugLog) {
        options.debugLog(message);
    }
}


async function loadModule() {
    const startLoadTime = Date.now();
    let wasmModule;
    if (options && options.loadModule) {
        wasmModule = await options.loadModule;
    } else {
        wasmModule = await new WebAssembly.Module(Deno.readFileSync("../eversdk.wasm"));
    }
    await init(wasmModule);
    debugLog(`compile time ${Date.now() - startLoadTime}`);
}

function withSeparateWorker() {
    function debugLog(message: unknown) {
        if (options && options.debugLog) {
            options.debugLog(message);
        }
    }

    const workerBlob = new Blob(
        [workerScript],
        {type: "application/javascript"},
    );
    const workerUrl = URL.createObjectURL(workerBlob);
    const worker = new Worker(workerUrl, {type: "module"});


    let nextCreateContextRequestId = 1;
    const createContextRequests = new Map();
    let initComplete = false;

    let responseHandler = null;

    worker.onmessage = (evt) => {
        const message = evt.data;
        switch (message.type) {
        case "init":
            initComplete = true;
            for (const [requestId, request] of createContextRequests.entries()) {
                worker.postMessage({
                    type: "createContext",
                    requestId,
                    configJson: request.configJson,
                });
            }
            break;
        case "createContext":
            const request = createContextRequests.get(message.requestId);
            if (request) {
                createContextRequests.delete(message.requestId);
                request.resolve(message.result);
            }
            break;
        case "destroyContext":
            break;
        case "response":
            if (responseHandler) {
                responseHandler(
                    message.requestId,
                    message.params,
                    message.responseType,
                    message.finished,
                );
            }
            break;
        }
    };

    worker.onerror = (evt) => {
        console.log(`Error from Web Worker: ${evt.message}`);
    };

    const wasmModule = new WebAssembly.Module(Deno.readFileSync("../eversdk.wasm"));
    worker.postMessage({
        type: "init",
        wasmModule,
    });

    return Promise.resolve({
        getLibName,
        setResponseParamsHandler: (handler) => {
            responseHandler = handler;
        },
        createContext: (configJson: string): Promise<string> => {
            return new Promise((resolve) => {
                const requestId = nextCreateContextRequestId;
                nextCreateContextRequestId += 1;
                createContextRequests.set(requestId, {
                    configJson,
                    resolve,
                });
                if (initComplete) {
                    worker.postMessage({
                        type: "createContext",
                        requestId,
                        configJson,
                    });
                }
            });
        },
        destroyContext: (context: number) => {
            worker.postMessage({
                type: "destroyContext",
                context,
            });
        },
        sendRequestParams: (context: number, requestId: number, functionName: string, functionParams: string) => {
            worker.postMessage({
                type: "request",
                context,
                requestId,
                functionName,
                functionParams,
            });
        },
    });
}

function withoutSeparateWorker() {
//****************************************************************** WRAPPER BEGIN
    let wasm;

    const cachedTextDecoder = new TextDecoder("utf-8", {ignoreBOM: true, fatal: true});

    cachedTextDecoder.decode();

    let cachedUint8Memory0 = null;

    function getUint8Memory0() {
        if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
            cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8Memory0;
    }

    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }

    const heap = new Array(128).fill(undefined);

    heap.push(undefined, null, true, false);

    let heap_next = heap.length;

    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];

        heap[idx] = obj;
        return idx;
    }

    function getObject(idx) {
        return heap[idx];
    }

    function dropObject(idx) {
        if (idx < 132) return;
        heap[idx] = heap_next;
        heap_next = idx;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
    }

    let WASM_VECTOR_LEN = 0;

    const cachedTextEncoder = new TextEncoder("utf-8");

    const encodeString = (typeof cachedTextEncoder.encodeInto === "function"
        ? function (arg, view) {
            return cachedTextEncoder.encodeInto(arg, view);
        }
        : function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length,
            };
        });

    function passStringToWasm0(arg, malloc, realloc) {

        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length);
            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len);

        const mem = getUint8Memory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }

        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3);
            const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
            const ret = encodeString(arg, view);

            offset += ret.written;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    let cachedInt32Memory0 = null;

    function getInt32Memory0() {
        if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
            cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachedInt32Memory0;
    }

    let cachedFloat64Memory0 = null;

    function getFloat64Memory0() {
        if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
            cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
        }
        return cachedFloat64Memory0;
    }

    let cachedBigInt64Memory0 = null;

    function getBigInt64Memory0() {
        if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
            cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
        }
        return cachedBigInt64Memory0;
    }

    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == "number" || type == "boolean" || val == null) {
            return `${val}`;
        }
        if (type == "string") {
            return `"${val}"`;
        }
        if (type == "symbol") {
            const description = val.description;
            if (description == null) {
                return "Symbol";
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == "function") {
            const name = val.name;
            if (typeof name == "string" && name.length > 0) {
                return `Function(${name})`;
            } else {
                return "Function";
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = "[";
            if (length > 0) {
                debug += debugString(val[0]);
            }
            for (let i = 1; i < length; i++) {
                debug += ", " + debugString(val[i]);
            }
            debug += "]";
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == "Object") {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return "Object(" + JSON.stringify(val) + ")";
            } catch (_) {
                return "Object";
            }
        }
        // errors
        if (val instanceof Error) {
            return `${val.name}: ${val.message}\n${val.stack}`;
        }
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }

    function makeClosure(arg0, arg1, dtor, f) {
        const state = {a: arg0, b: arg1, cnt: 1, dtor};
        const real = (...args) => {
            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            try {
                return f(state.a, state.b, ...args);
            } finally {
                if (--state.cnt === 0) {
                    wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                    state.a = 0;

                }
            }
        };
        real.original = state;

        return real;
    }

    function __wbg_adapter_50(arg0, arg1, arg2) {
        wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h64aa01124d82b7bc(arg0, arg1, addHeapObject(arg2));
    }

    function __wbg_adapter_53(arg0, arg1) {
        wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1543f5e0c9a3362a(arg0, arg1);
    }

    function makeMutClosure(arg0, arg1, dtor, f) {
        const state = {a: arg0, b: arg1, cnt: 1, dtor};
        const real = (...args) => {
            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                if (--state.cnt === 0) {
                    wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

                } else {
                    state.a = a;
                }
            }
        };
        real.original = state;

        return real;
    }

    function __wbg_adapter_56(arg0, arg1, arg2) {
        wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5c6907c0780815e4(arg0, arg1, addHeapObject(arg2));
    }

    function __wbg_adapter_59(arg0, arg1) {
        wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4a01cccec9c7eb10(arg0, arg1);
    }

    function __wbg_adapter_62(arg0, arg1, arg2) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcc7ee8c84ba9c2e8(retptr, arg0, arg1, addHeapObject(arg2));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    /**
     * @param {string} config_json
     * @returns {string}
     */
    function core_create_context(config_json) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.core_create_context(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }

    /**
     * @param {number} context
     */
    function core_destroy_context(context) {
        wasm.core_destroy_context(context);
    }

    /**
     * @param {number} context
     * @param {string} function_name
     * @param {any} params
     * @param {number} request_id
     */
    function core_request(context, function_name, params, request_id) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            const ptr0 = passStringToWasm0(function_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            wasm.core_request(retptr, context, ptr0, len0, addHeapObject(params), request_id);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            if (r1) {
                throw takeObject(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    }

    function getArrayU8FromWasm0(ptr, len) {
        return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
    }

    async function load(module, imports) {
        if (typeof Response === "function" && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === "function") {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get("Content-Type") != "application/wasm") {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return {instance, module};

            } else {
                return instance;
            }
        }
    }

    function getImports() {
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbg_new_15d3966e9981a196 = function (arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
            const ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_memory = function () {
            const ret = wasm.memory;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_buffer_cf65c07de34b9a08 = function (arg0) {
            const ret = getObject(arg0).buffer;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function (arg0, arg1, arg2) {
            const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_object_drop_ref = function (arg0) {
            takeObject(arg0);
        };
        imports.wbg.__wbg_newwithlength_0da6f12fbc1ab6eb = function (arg0) {
            const ret = new Array(arg0 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_17224bc548dd1d7b = function (arg0, arg1, arg2) {
            getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
        };
        imports.wbg.__wbg_newwithu8arraysequence_fede89c6795cc33e = function () {
            return handleError(function (arg0) {
                const ret = new Blob(getObject(arg0));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_get_baf4855f9a986186 = function () {
            return handleError(function (arg0, arg1) {
                const ret = Reflect.get(getObject(arg0), getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065 = function (arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof ArrayBuffer;
            } catch {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbindgen_is_object = function (arg0) {
            const val = getObject(arg0);
            const ret = typeof (val) === "object" && val !== null;
            return ret;
        };
        imports.wbg.__wbg_new_537b7341ce90bb31 = function (arg0) {
            const ret = new Uint8Array(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_object_clone_ref = function (arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_keys_60443f4f867207f9 = function (arg0) {
            const ret = Object.keys(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_length_e498fbc24f9c1d4f = function (arg0) {
            const ret = getObject(arg0).length;
            return ret;
        };
        imports.wbg.__wbg_get_27fe3dac1c4d0224 = function (arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_string_get = function (arg0, arg1) {
            const obj = getObject(arg1);
            const ret = typeof (obj) === "string" ? obj : undefined;
            var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_new0_25059e40b1c02766 = function () {
            const ret = new Date();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_getTime_7c59072d1651a3cf = function (arg0) {
            const ret = getObject(arg0).getTime();
            return ret;
        };
        imports.wbg.__wbindgen_jsval_loose_eq = function (arg0, arg1) {
            const ret = getObject(arg0) == getObject(arg1);
            return ret;
        };
        imports.wbg.__wbindgen_boolean_get = function (arg0) {
            const v = getObject(arg0);
            const ret = typeof (v) === "boolean" ? (v ? 1 : 0) : 2;
            return ret;
        };
        imports.wbg.__wbindgen_is_bigint = function (arg0) {
            const ret = typeof (getObject(arg0)) === "bigint";
            return ret;
        };
        imports.wbg.__wbindgen_number_get = function (arg0, arg1) {
            const obj = getObject(arg1);
            const ret = typeof (obj) === "number" ? obj : undefined;
            getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
            getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
        };
        imports.wbg.__wbg_isSafeInteger_8c4789029e885159 = function (arg0) {
            const ret = Number.isSafeInteger(getObject(arg0));
            return ret;
        };
        imports.wbg.__wbindgen_bigint_get_as_i64 = function (arg0, arg1) {
            const v = getObject(arg1);
            const ret = typeof (v) === "bigint" ? v : undefined;
            getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
            getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
        };
        imports.wbg.__wbindgen_bigint_from_i64 = function (arg0) {
            const ret = arg0;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_jsval_eq = function (arg0, arg1) {
            const ret = getObject(arg0) === getObject(arg1);
            return ret;
        };
        imports.wbg.__wbindgen_bigint_from_u64 = function (arg0) {
            const ret = BigInt.asUintN(64, arg0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_error_new = function (arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_isArray_39d28997bf6b96b4 = function (arg0) {
            const ret = Array.isArray(getObject(arg0));
            return ret;
        };
        imports.wbg.__wbg_iterator_55f114446221aa5a = function () {
            const ret = Symbol.iterator;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_in = function (arg0, arg1) {
            const ret = getObject(arg0) in getObject(arg1);
            return ret;
        };
        imports.wbg.__wbg_entries_4e1315b774245952 = function (arg0) {
            const ret = Object.entries(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_is_undefined = function (arg0) {
            const ret = getObject(arg0) === undefined;
            return ret;
        };
        imports.wbg.__wbindgen_is_null = function (arg0) {
            const ret = getObject(arg0) === null;
            return ret;
        };
        imports.wbg.__wbg_String_91fba7ded13ba54c = function (arg0, arg1) {
            const ret = String(getObject(arg1));
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_new_f9876326328f45ed = function () {
            const ret = new Object();
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_number_new = function (arg0) {
            const ret = arg0;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_String_822113da33f674b2 = function (arg0, arg1) {
            const ret = String(getObject(arg1));
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_coreresponsehandler_ea6834b642be48a5 = function (arg0, arg1, arg2, arg3) {
            core_response_handler(arg0 >>> 0, takeObject(arg1), arg2 >>> 0, arg3 !== 0);
        };
        imports.wbg.__wbg_message_a95c3ef248e4b57a = function (arg0) {
            const ret = getObject(arg0).message;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_new_b525de17f44a8943 = function () {
            const ret = new Array();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_new_f841cc6f2098f4b5 = function () {
            const ret = new Map();
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_388c4c6422704173 = function (arg0, arg1, arg2) {
            const ret = getObject(arg0).set(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_is_string = function (arg0) {
            const ret = typeof (getObject(arg0)) === "string";
            return ret;
        };
        imports.wbg.__wbg_set_7c7d5c9ffac23f2f = function (arg0, arg1, arg2) {
            getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
        };
        imports.wbg.__wbg_transaction_6d097d62f550220d = function () {
            return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = getObject(arg0).transaction(getStringFromWasm0(arg1, arg2), takeObject(arg3));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_setoncomplete_f32167d3f84be687 = function (arg0, arg1) {
            getObject(arg0).oncomplete = getObject(arg1);
        };
        imports.wbg.__wbg_setonerror_7cbe775a0abc7a8e = function (arg0, arg1) {
            getObject(arg0).onerror = getObject(arg1);
        };
        imports.wbg.__wbg_setonabort_0e116e0f6f9fc3a6 = function (arg0, arg1) {
            getObject(arg0).onabort = getObject(arg1);
        };
        imports.wbg.__wbg_objectStore_cdc69f65ad4a71eb = function () {
            return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).objectStore(getStringFromWasm0(arg1, arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_readyState_d9cf5eb3487e31d6 = function (arg0) {
            const ret = getObject(arg0).readyState;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_setonsuccess_925a7718d3f62bc1 = function (arg0, arg1) {
            getObject(arg0).onsuccess = getObject(arg1);
        };
        imports.wbg.__wbg_setonerror_019196fbce756cc0 = function (arg0, arg1) {
            getObject(arg0).onerror = getObject(arg1);
        };
        imports.wbg.__wbg_target_b629c177f9bee3da = function (arg0) {
            const ret = getObject(arg0).target;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        };
        imports.wbg.__wbindgen_cb_drop = function (arg0) {
            const obj = takeObject(arg0).original;
            if (obj.cnt-- == 1) {
                obj.a = 0;
                return true;
            }
            const ret = false;
            return ret;
        };
        imports.wbg.__wbg_item_d5de7e3394624329 = function (arg0, arg1, arg2) {
            const ret = getObject(arg1).item(arg2 >>> 0);
            var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_result_3a1fef332bc47038 = function () {
            return handleError(function (arg0) {
                const ret = getObject(arg0).result;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_next_88560ec06a094dea = function () {
            return handleError(function (arg0) {
                const ret = getObject(arg0).next();
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_done_1ebec03bbd919843 = function (arg0) {
            const ret = getObject(arg0).done;
            return ret;
        };
        imports.wbg.__wbg_value_6ac8da5cc5b3efda = function (arg0) {
            const ret = getObject(arg0).value;
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_is_function = function (arg0) {
            const ret = typeof (getObject(arg0)) === "function";
            return ret;
        };
        imports.wbg.__wbg_call_95d1ea488d03e4e8 = function () {
            return handleError(function (arg0, arg1) {
                const ret = getObject(arg0).call(getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_next_b7d530c04fd8b217 = function (arg0) {
            const ret = getObject(arg0).next;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_self_e7c1f827057f6584 = function () {
            return handleError(function () {
                const ret = self.self;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_window_a09ec664e14b1b81 = function () {
            return handleError(function () {
                const ret = window.window;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_globalThis_87cbb8506fecf3a9 = function () {
            return handleError(function () {
                const ret = globalThis.globalThis;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_global_c85a9259e621f3db = function () {
            return handleError(function () {
                const ret = global.global;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_newnoargs_2b8b6bd7753c76ba = function (arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_17499e8aa4003ebd = function (arg0, arg1, arg2) {
            getObject(arg0).set(getObject(arg1), arg2 >>> 0);
        };
        imports.wbg.__wbg_length_27a2afe8ab42b09f = function (arg0) {
            const ret = getObject(arg0).length;
            return ret;
        };
        imports.wbg.__wbg_set_6aa458a4ebdb65cb = function () {
            return handleError(function (arg0, arg1, arg2) {
                const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
                return ret;
            }, arguments);
        };
        imports.wbg.__wbg_self_7eede1f4488bf346 = function () {
            return handleError(function () {
                const ret = self.self;
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_crypto_c909fb428dcbddb6 = function (arg0) {
            const ret = getObject(arg0).crypto;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_msCrypto_511eefefbfc70ae4 = function (arg0) {
            const ret = getObject(arg0).msCrypto;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_static_accessor_MODULE_ef3aa2eb251158a5 = function () {
            const ret = module;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_require_900d5c3984fe7703 = function (arg0, arg1, arg2) {
            const ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_getRandomValues_307049345d0bd88c = function (arg0) {
            const ret = getObject(arg0).getRandomValues;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_newwithlength_b56c882b57805732 = function (arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_randomFillSync_85b3f4c52c56c313 = function (arg0, arg1, arg2) {
            getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
        };
        imports.wbg.__wbg_subarray_7526649b91a252a6 = function (arg0, arg1, arg2) {
            const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_getRandomValues_cd175915511f705e = function (arg0, arg1) {
            getObject(arg0).getRandomValues(getObject(arg1));
        };
        imports.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca = function (arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Uint8Array;
            } catch {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_clearTimeout_b2b8af0f044e02e9 = function (arg0, arg1) {
            getObject(arg0).clearTimeout(arg1);
        };
        imports.wbg.__wbg_getTimezoneOffset_2a6b27fb18493a56 = function (arg0) {
            const ret = getObject(arg0).getTimezoneOffset();
            return ret;
        };
        imports.wbg.__wbg_setTimeout_6609c9aa64f32bfc = function () {
            return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
                return ret;
            }, arguments);
        };
        imports.wbg.__wbg_newwithstrandinit_c45f0dc6da26fd03 = function () {
            return handleError(function (arg0, arg1, arg2) {
                const ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_headers_ab5251d2727ac41e = function (arg0) {
            const ret = getObject(arg0).headers;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_set_a5d34c36a1a4ebd1 = function () {
            return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments);
        };
        imports.wbg.__wbg_fetch_465e8cb61a0f43ea = function (arg0, arg1) {
            const ret = getObject(arg0).fetch(getObject(arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_instanceof_Response_fb3a4df648c1859b = function (arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Response;
            } catch {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_text_f61464d781b099f0 = function () {
            return handleError(function (arg0) {
                const ret = getObject(arg0).text();
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_status_d483a4ac847f380a = function (arg0) {
            const ret = getObject(arg0).status;
            return ret;
        };
        imports.wbg.__wbg_url_8ec2534cdfacb103 = function (arg0, arg1) {
            const ret = getObject(arg1).url;
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_setonupgradeneeded_8961be061344d04a = function (arg0, arg1) {
            getObject(arg0).onupgradeneeded = getObject(arg1);
        };
        imports.wbg.__wbg_setonblocked_78e53418c43a7090 = function (arg0, arg1) {
            getObject(arg0).onblocked = getObject(arg1);
        };
        imports.wbg.__wbg_new_8ad026ef33da9ab1 = function () {
            return handleError(function (arg0, arg1) {
                const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_newwithstr_09e6b7baeccb3a5f = function () {
            return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = new WebSocket(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_setonmessage_5ea7e452fd7a5544 = function (arg0, arg1) {
            getObject(arg0).onmessage = getObject(arg1);
        };
        imports.wbg.__wbg_setonopen_b91a933a10be7d48 = function (arg0, arg1) {
            getObject(arg0).onopen = getObject(arg1);
        };
        imports.wbg.__wbg_setonerror_a6a7413fc33449ef = function (arg0, arg1) {
            getObject(arg0).onerror = getObject(arg1);
        };
        imports.wbg.__wbg_close_546591d4b4350b36 = function () {
            return handleError(function (arg0) {
                getObject(arg0).close();
            }, arguments);
        };
        imports.wbg.__wbg_send_36f8bcb566f8afa0 = function () {
            return handleError(function (arg0, arg1, arg2) {
                getObject(arg0).send(getStringFromWasm0(arg1, arg2));
            }, arguments);
        };
        imports.wbg.__wbg_data_af909e5dfe73e68c = function (arg0) {
            const ret = getObject(arg0).data;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_message_f15effc8b20828e2 = function (arg0, arg1) {
            const ret = getObject(arg1).message;
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbg_delete_d2905418845867ae = function () {
            return handleError(function (arg0, arg1) {
                const ret = getObject(arg0).delete(getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_setonversionchange_fd71954420371ad8 = function (arg0, arg1) {
            getObject(arg0).onversionchange = getObject(arg1);
        };
        imports.wbg.__wbg_Window_5684341ff6dfe3ad = function (arg0) {
            const ret = getObject(arg0).Window;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_WorkerGlobalScope_e0447ffcae8bb272 = function (arg0) {
            const ret = getObject(arg0).WorkerGlobalScope;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_indexedDB_47544d523ac2a208 = function () {
            return handleError(function (arg0) {
                const ret = getObject(arg0).indexedDB;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_indexedDB_83385e4ce65e9054 = function () {
            return handleError(function (arg0) {
                const ret = getObject(arg0).indexedDB;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_open_bd135117d9924392 = function () {
            return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).open(getStringFromWasm0(arg1, arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_get_18b8195859195e7e = function () {
            return handleError(function (arg0, arg1) {
                const ret = getObject(arg0).get(getObject(arg1));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_stringify_029a979dfb73aa17 = function () {
            return handleError(function (arg0) {
                const ret = JSON.stringify(getObject(arg0));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_put_fdcda25ee2a99b60 = function () {
            return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).put(getObject(arg1), getObject(arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_objectStoreNames_f0884fed45ebc81c = function (arg0) {
            const ret = getObject(arg0).objectStoreNames;
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_createObjectStore_ebb17df1a43fd925 = function () {
            return handleError(function (arg0, arg1, arg2) {
                const ret = getObject(arg0).createObjectStore(getStringFromWasm0(arg1, arg2));
                return addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_instanceof_Error_749a7378f4439ee0 = function (arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Error;
            } catch {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbindgen_debug_string = function (arg0, arg1) {
            const ret = debugString(getObject(arg1));
            const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            getInt32Memory0()[arg0 / 4 + 1] = len0;
            getInt32Memory0()[arg0 / 4 + 0] = ptr0;
        };
        imports.wbg.__wbindgen_throw = function (arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };
        imports.wbg.__wbg_then_f753623316e2873a = function (arg0, arg1, arg2) {
            const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_resolve_fd40f858d9db1a04 = function (arg0) {
            const ret = Promise.resolve(getObject(arg0));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_then_ec5db6d509eb475f = function (arg0, arg1) {
            const ret = getObject(arg0).then(getObject(arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbg_error_f64b8d41ed4d2fdc = function () {
            return handleError(function (arg0) {
                const ret = getObject(arg0).error;
                return isLikeNone(ret) ? 0 : addHeapObject(ret);
            }, arguments);
        };
        imports.wbg.__wbg_instanceof_Window_e266f02eee43b570 = function (arg0) {
            let result;
            try {
                result = true;
            } catch {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbindgen_closure_wrapper853 = function (arg0, arg1, arg2) {
            const ret = makeClosure(arg0, arg1, 48, __wbg_adapter_50);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper861 = function (arg0, arg1, arg2) {
            const ret = makeClosure(arg0, arg1, 48, __wbg_adapter_53);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper5116 = function (arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_56);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper5120 = function (arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_59);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper5124 = function (arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_62);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper5129 = function (arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_56);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_closure_wrapper5997 = function (arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 48, __wbg_adapter_56);
            return addHeapObject(ret);
        };

        return imports;
    }

    function initMemory(imports, maybe_memory) {

    }

    function finalizeInit(instance, module) {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;
        cachedBigInt64Memory0 = null;
        cachedFloat64Memory0 = null;
        cachedInt32Memory0 = null;
        cachedUint8Memory0 = null;


        return wasm;
    }

    function initSync(module) {
        const imports = getImports();

        initMemory(imports);

        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }

        const instance = new WebAssembly.Instance(module, imports);

        return finalizeInit(instance, module);
    }

    async function init(input) {
        if (typeof input === "undefined") {
        }
        const imports = getImports();
        initMemory(imports);

        const {instance, module} = await load(await input, imports);

        return finalizeInit(instance, module);
    }


//****************************************************************** WRAPPER END
    function replaceUndefinedWithNulls(value) {
        if (value === undefined) {
            return null;
        }
        if (value instanceof Blob) {
            return value;
        }
        if (typeof value === "object" && value !== null) {
            const result = Array.isArray(value) ? [] : {};
            for (const key in value) {
                result[key] = replaceUndefinedWithNulls(value[key]);
            }
            return result;
        }
        return value;
    }

    async function replaceBlobsWithArrayBuffers(value) {
        if (value instanceof Blob) {
            return await value.arrayBuffer();
        }
        if (typeof value === "bigint") {
            if (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER) {
                return Number(value);
            } else {
                return value.toString();
            }
        }
        if (typeof value === "object" && value !== null) {
            const result = Array.isArray(value) ? [] : {};
            for (const key in value) {
                result[key] = await replaceBlobsWithArrayBuffers(value[key]);
            }
            return result;
        }
        return value;
    }


    let deferredCreateContext = [];
    let responseHandler = null;

    function core_response_handler(request_id, params, response_type, finished) {
        if (responseHandler) {
            responseHandler(
                request_id,
                params,
                response_type,
                finished,
            );
        }
    }

    (async () => {
        await init(await loadModule());
        for (const createContext of deferredCreateContext) {
            createContext.resolve(core_create_context(createContext.configJson));
        }
        deferredCreateContext = null;
    })();

    return Promise.resolve({
        getLibName,
        setResponseParamsHandler: (handler) => {
            responseHandler = handler;
        },
        createContext: (configJson) => {
            return deferredCreateContext === null
                ? Promise.resolve(core_create_context(configJson))
                : new Promise((resolve) => {
                    deferredCreateContext.push({
                        configJson,
                        resolve,
                    });
                });
        },
        destroyContext: (context) => {
            core_destroy_context(context);
        },
        sendRequestParams: (context, requestId, functionName, functionParams) => {
            (async () => {
                core_request(
                    context,
                    functionName,
                    await replaceBlobsWithArrayBuffers(functionParams),
                    requestId,
                );
            })();
        },
    });

}

export function libDenoWasm() {
    return options && options.disableSeparateWorker ? withoutSeparateWorker() : withSeparateWorker();
}
