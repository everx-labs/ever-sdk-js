//---

function core_response_handler(request_id, params, response_type, finished) {
    postMessage({
        type: 'response',
        requestId: request_id,
        params,
        responseType: response_type,
        finished,
    });
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
        core_request(
            message.context,
            message.functionName,
            message.functionParams,
            message.requestId,
        );
        break;
    }
};
