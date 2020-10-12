import {TonCryptoModule} from "./crypto";
import {TonNetModule} from "./net";
import {Bridge} from "./bridge";
import {TonClientConfig} from "./client";

export enum TonClientResponseType {
    Success = 0,
    Error = 1,
    Custom = 100,
}

export type TonClientResponseHandler = (params: any, responseType: TonClientResponseType) => void;

export interface TonClientCoreBridge {
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

    static setCoreBridgeLoader(loader: () => Promise<TonClientCoreBridge>) {
        Bridge.load(loader);
    }

    constructor(config: TonClientConfig) {
        this.config = config;
        this.crypto = new TonCryptoModule(this);
        this.net = new TonNetModule(this);
    }

    close() {
        if (this.context !== null && Bridge.loaded !== null) {
            Bridge.loaded.core.destroyContext(this.context);
            this.context = null;
        }
    }

    async request<P, R>(
        functionName: string,
        functionParams: P,
        responseHandler: TonClientResponseHandler
    ): Promise<R> {
        const bridge = await Bridge.required();
        let context: number;
        if (this.context !== null) {
            context = this.context;
        } else {
            context = unwrapCoreResult(await bridge.core.createContext(JSON.stringify(this.config)));
            this.context = context;
        }
        return bridge.request(context, functionName, functionParams, responseHandler);
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

// Internals

function unwrapCoreResult(resultJson: string): any {
    const result: { result: any } | {
        error: {
            message: string,
            code: number,
            data?: any,
        }
    } = JSON.parse(resultJson);
    if ('error' in result) {
        throw new TonClientError(result.error.code, result.error.message, result.error.data);
    }
    return result.result;
}


