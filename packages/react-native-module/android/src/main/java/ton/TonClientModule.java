package ton;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class TonClientModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public TonClientModule(final ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        TonClientJsonInterface.IResponseHandler responseHandler = new TonClientJsonInterface.IResponseHandler() {
            @Override
            public void invoke(long requestId, String paramsJson, int responseType, boolean finished) {

            }
        };
        TonClientJsonInterface.setResponseHandler(responseHandler);
    }

    @Override
    public String getName() {
        return "TonClientModule";
    }

    @ReactMethod
    public void sendRequest(long context, long requestId, String functionName, String functionParamsJson) {
        TonClientJsonInterface.sendRequest(context, requestId, functionName, functionParamsJson);
    }

    @ReactMethod
    public void createContext(String configJson, Callback onResult) {
        onResult.invoke(TonClientJsonInterface.createContext(configJson));
    }

    @ReactMethod
    public void destroyContext(long context) {
        TonClientJsonInterface.destroyContext(context);
    }
}
