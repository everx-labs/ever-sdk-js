package tonos;

public class ClientJsonInterface {
    static {
        System.loadLibrary("tonosclient");
    }

    public interface IResponseHandler {
        void invoke(int requestId, String paramsJson, int responseType, boolean finished);
    }

    public static native Strong createContext(configJson: String);
    public static native void destroyContext(int context);
    public static native void setResponseHandler(IResponseHandler handler);
    public static native void request(int requestId, String functionName, String functionParamsJson);

}
