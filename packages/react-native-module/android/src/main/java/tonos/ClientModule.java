package tonos;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class ClientModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public ClientModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        ClientJsonInterface.IResponseHandler responseHandler = new ClientJsonInterface.IResponseHandler() {
            private Callback callback;

            ClientJsonInterface.IResponseHandler init(Callback callback) {
                this.callback = callback;
                return this;
            }

            @Override
            public void invoke(int requestId, String paramsJson, int responseType, boolean finished) {
                this.callback.invoke(resultJson, errorJson);
            }
        }.init(this);
        ClientJsonInterface.setResponseHandler(responseHandler);
    }

    @Override
    public String getName() {
        return "TonosClientModule";
    }

    @ReactMethod
    public void setResponseHandler(String method, String paramsJson, Callback onResult) {

        ClientJsonInterface.IResponseHandler responseHandler = new TONSDKJsonApi.IResultHandler() {
            private Callback callback;

            TONSDKJsonApi.IResultHandler init(Callback callback) {
                this.callback = callback;
                return this;
            }

            @Override
            public void invoke(String resultJson, String errorJson, int flags) {
                this.callback.invoke(resultJson, errorJson);
            }
        }.init(onResult);
        TONSDKJsonApi.request(method, paramsJson, resultHandler);
    }

    @ReactMethod
    public void request(String method, String paramsJson, Callback onResult) {

        ClientJsonInterface.IResponseHandler responseHandler = new TONSDKJsonApi.IResultHandler() {
            private Callback callback;

            TONSDKJsonApi.IResultHandler init(Callback callback) {
                this.callback = callback;
                return this;
            }

            @Override
            public void invoke(String resultJson, String errorJson, int flags) {
                this.callback.invoke(resultJson, errorJson);
            }
        }.init(onResult);
        TONSDKJsonApi.request(method, paramsJson, resultHandler);
    }

    @ReactMethod
    public void coreCreateContext(Callback onResult) {
        int context = TONSDKJsonApi.createContext();
        if (onResult != null) {
            onResult.invoke(context);
        }
    }

    @ReactMethod
    public void coreDestroyContext(int context, Callback onComplete) {
        TONSDKJsonApi.destroyContext(context);
        if (onComplete != null) {
            onComplete.invoke();
        }
    }

    @ReactMethod
    public void coreRequest(int context, String method, String paramsJson, Callback onResult) {
        TONSDKJsonApi.IResultHandler resultHandler = new TONSDKJsonApi.IResultHandler() {
            private Callback callback;

            TONSDKJsonApi.IResultHandler init(Callback callback) {
                this.callback = callback;
                return this;
            }

            @Override
            public void invoke(String resultJson, String errorJson, int flags) {
                this.callback.invoke(resultJson, errorJson);
            }
        }.init(onResult);
        TONSDKJsonApi.jsonRequestAsync(context, method, paramsJson, resultHandler);
    }
}
