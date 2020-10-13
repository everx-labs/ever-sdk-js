import {TonClientBinaryLibrary, TonClientError, TonClientResponseHandler, TonClientResponseType} from "./index";
import {TonClientConfig} from "./client";

function binLibResponseHandler(requestId: number, paramsJson: string, responseType: TonClientResponseType, finished: boolean) {
    BinaryLibrary.loaded?.handleResponse(requestId, paramsJson, responseType, finished);
}

type Request = {
    resolve: (params: any) => void,
    reject: (error: any) => void,
    responseHandler?: TonClientResponseHandler;
}

type LoadingPromise = {
    resolve: (binLib: BinaryLibrary) => void,
    reject: (error?: Error) => void,
}

export class BinaryLibrary {
    static loading: LoadingPromise[] | null = null;
    static loadError: Error | null = null;
    static loaded: BinaryLibrary | null = null;

    binaryLibrary: TonClientBinaryLibrary;
    requests: Map<number, Request>;
    nextRequestId: number;

    static load(loader: () => Promise<TonClientBinaryLibrary>) {
        this.loading = [];
        loader().then((binLib: TonClientBinaryLibrary, error?: Error) => {
            const loading = this.loading;
            this.loading = null;
            if (binLib) {
                const loaded = new BinaryLibrary(binLib);
                this.loaded = loaded;
                loading?.forEach(x => x.resolve(loaded));
            } else {
                this.loadError = error || null;
                loading?.forEach(x => x.reject(error));
            }
        })

    }

    static required(): Promise<BinaryLibrary> {
        if (this.loaded !== null) {
            return Promise.resolve(this.loaded);
        }
        if (this.loadError !== null) {
            return Promise.reject(this.loadError);
        }
        if (this.loading === null) {
            throw new TonClientError(1, "TON Client binary library isn't set.")
        }
        const loading = this.loading;
        return new Promise<BinaryLibrary>((resolve, reject) => {
            loading.push({
                resolve, reject
            });

        });
    }


    constructor(binLib: TonClientBinaryLibrary) {
        this.binaryLibrary = binLib;
        binLib.setResponseHandler(binLibResponseHandler);
        this.requests = new Map<number, Request>();
        this.nextRequestId = 1;
    }

    generateRequestId(): number {
        const id = this.nextRequestId;
        do {
            this.nextRequestId += 1;
            if (this.nextRequestId >= Number.MAX_SAFE_INTEGER) {
                this.nextRequestId = 1;
            }
        } while (this.requests.has(this.nextRequestId));
        return id;
    }

    static async createContext(config: TonClientConfig): Promise<number> {
        const binLib = await this.required();
        return unwrapBinLibResult(await binLib.binaryLibrary.createContext(JSON.stringify(config)));
    }

    static destroyContext(context: number) {
        if (this.loaded !== null) {
            this.loaded.binaryLibrary.destroyContext(context);
        }
    }

    static async request<P, R>(
        context: number,
        functionName: string,
        functionParams: P,
        responseHandler?: TonClientResponseHandler
    ): Promise<R> {
        const binLib = await this.required();
        return new Promise((resolve, reject) => {
            const request: Request = {
                resolve,
                reject,
                responseHandler,
            }
            const requestId = binLib.generateRequestId();
            binLib.requests.set(requestId, request)
            binLib.binaryLibrary.sendRequest(context, requestId, functionName, JSON.stringify(functionParams));

        });
    }

    handleResponse(
        requestId: number,
        paramsJson: string,
        responseType: TonClientResponseType,
        finished: boolean
    ) {
        const request = this.requests.get(requestId);
        if (!request) {
            return;
        }
        if (finished) {
            this.requests.delete(requestId);
        }
        const params = paramsJson !== '' ? JSON.parse(paramsJson) : undefined;
        switch (responseType) {
            case TonClientResponseType.Success:
                request.resolve(params);
                break;
            case TonClientResponseType.Error:
                request.reject(params);
                break;
            default:
                if (responseType >= TonClientResponseType.Custom && request.responseHandler) {
                    request.responseHandler(params, responseType);
                }
        }
    }
}

function unwrapBinLibResult(resultJson: string): any {
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
