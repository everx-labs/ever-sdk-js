import { NativeModules, NativeEventEmitter } from 'react-native'

export function reactNativeModule() {
    const module = NativeModules.TonClientModule;
    const moduleEmitter = new NativeEventEmitter(module);
    let subscription = null;
    return Promise.resolve({
        setResponseHandler(handler) {
            if (subscription) {
                subscription.remove();
                subscription = null;
            }
            if (handler) {
                subscription = moduleEmitter.addListener('Response', (data) => {
                    handler(data.requestId, data.paramsJson, data.responseType, data.finished);
                });
            }
        },
        createContext(configJson) {
            return new Promise(resolve => module.createContext(configJson, resolve));
        },
        destroyContext(context) {
            module.destroyContext(context);
        },
        sendRequest(context, requestId, functionName, functionParamsJson) {
            module.sendRequest(context, requestId, functionName, functionParamsJson);
        },
    });
}
