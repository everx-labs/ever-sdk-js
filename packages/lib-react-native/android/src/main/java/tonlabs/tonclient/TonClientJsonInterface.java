package tonlabs.tonclient;

public class TonClientJsonInterface {
    static {
        System.loadLibrary("eversdk");
    }

    public interface IResponseHandler {
        void invoke(long requestId, String paramsJson, long responseType, boolean finished);
    }

    public static native String createContext(String configJson);
    public static native void destroyContext(long context);
    public static native void setResponseHandler(IResponseHandler handler);
    public static native void sendRequest(long context, long requestId, String functionName, String functionParamsJson);

}
