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

//---WORKER_BEGIN
const workerScript = "";
//---WORKER_END

let options = null;

export function libWebSetup(libOptions) {
    options = libOptions;
}

function getLibName() {
    return Promise.resolve("web");
}

function debugLog(message) {
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
        const fetched = fetch((options && options.binaryURL) || "/eversdk.wasm");
        if (WebAssembly.compileStreaming) {
            debugLog("compileStreaming binary");
            return await WebAssembly.compileStreaming(fetched);
        }
        debugLog("compile binary");
        wasmModule = await WebAssembly.compile(await (await fetched).arrayBuffer());
    }
    await init(wasmModule);
    debugLog(`compile time ${Date.now() - startLoadTime}`);
}

function withSeparateWorker() {
    function debugLog(message) {
        if (options && options.debugLog) {
            options.debugLog(message);
        }
    }

    const workerBlob = new Blob(
        [workerScript],
        { type: "application/javascript" },
    );
    const workerUrl = URL.createObjectURL(workerBlob);
    const worker = new Worker(workerUrl);


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

    (async () => {
        worker.postMessage({
            type: "init",
            wasmModule: await loadModule(),
        });
    })();

    return Promise.resolve({
        getLibName,
        setResponseParamsHandler: (handler) => {
            responseHandler = handler;
        },
        createContext: (configJson) => {
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
        destroyContext: (context) => {
            worker.postMessage({
                type: "destroyContext",
                context,
            });
        },
        sendRequestParams: (context, requestId, functionName, functionParams) => {
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
//---WRAPPER
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

export function libWeb() {
    return options && options.disableSeparateWorker ? withoutSeparateWorker() : withSeparateWorker();
}
