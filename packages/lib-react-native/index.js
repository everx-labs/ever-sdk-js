import { NativeModules, NativeEventEmitter } from 'react-native'

export function libReactNative() {
    const lib = NativeModules.TonClientModule;
    const libEmitter = new NativeEventEmitter(lib);
    let subscription = null;
    return Promise.resolve({
        getLibName() {
            return Promise.resolve("react-native");
        },
        setResponseHandler(handler) {
            if (subscription) {
                subscription.remove();
                subscription = null;
            }
            if (handler) {
                subscription = libEmitter.addListener('Response', (data) => {
                    handler(data.requestId, data.paramsJson, data.responseType, data.finished);
                });
            }
        },
        createContext(configJson) {
            return new Promise(resolve => lib.createContext(configJson, resolve));
        },
        destroyContext(context) {
            lib.destroyContext(context);
        },
        sendRequest(context, requestId, functionName, functionParamsJson) {
            lib.sendRequest(context, requestId, functionName, functionParamsJson);
        },
    });
}
