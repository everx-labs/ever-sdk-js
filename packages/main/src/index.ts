import {TonCryptoModule} from "./crypto";
import {TonNetModule} from "./net";
import {BinaryLibrary} from "./bin";
import {TonClientConfig} from "./client";

export enum TonClientResponseType {
    Success = 0,
    Error = 1,
    Custom = 100,
}

export type TonClientResponseHandler = (params: any, responseType: TonClientResponseType) => void;

export interface TonClientBinaryLibrary {
    setResponseHandler(
        handler: (
            requestId: number,
            paramsJson: string,
            responseType: TonClientResponseType,
            finished: boolean
        ) => void
    ): void,

    createContext(configJson: string): Promise<string>,

    destroyContext(context: number): void,

    sendRequest(context: number, requestId: number, functionName: string, functionParamsJson: string): void,
}

export class TonClient {
    private context: number | null = null;
    private readonly config: TonClientConfig;

    crypto: TonCryptoModule;
    net: TonNetModule;

    static useBinaryLibrary(loader: () => Promise<TonClientBinaryLibrary>) {
        BinaryLibrary.load(loader);
    }

    constructor(config: TonClientConfig) {
        this.config = config;
        this.crypto = new TonCryptoModule(this);
        this.net = new TonNetModule(this);
    }

    close() {
        if (this.context !== null) {
            BinaryLibrary.destroyContext(this.context);
            this.context = null;
        }
    }

    async request(
        functionName: string,
        functionParams: any,
        responseHandler?: TonClientResponseHandler
    ): Promise<any> {
        let context: number;
        if (this.context !== null) {
            context = this.context;
        } else {
            context = await BinaryLibrary.createContext(this.config);
            this.context = context;
        }
        return BinaryLibrary.request(context, functionName, functionParams, responseHandler);
    }
}

export class TonClientError extends Error {
    code: number;
    data?: any;

    constructor(code: number, message: string, data?: any) {
        super(message);
        this.code = code;
        this.data = data;
    }
}
