import {TonClientCoreBridge, TonClientError, TonClientResponseHandler, TonClientResponseType} from "./index";

function coreResponseHandler(requestId: number, paramsJson: string, responseType: TonClientResponseType, finished: boolean) {
    Bridge.loaded?.handleResponse(requestId, paramsJson, responseType, finished);
}

type Request = {
    resolve: (params: any) => void,
    reject: (error: any) => void,
    responseHandler?: TonClientResponseHandler;
}

type BridgePromise = {
    resolve: (bridge: Bridge) => void,
    reject: (error?: Error) => void,
}

export class Bridge {
    static loading: BridgePromise[] | null = null;
    static loadError: Error | null = null;
    static loaded: Bridge | null = null;

    core: TonClientCoreBridge;
    requests: Map<number, Request>;
    nextRequestId: number;

    static load(loader: () => Promise<TonClientCoreBridge>) {
        loader().then((coreBridge: TonClientCoreBridge, error?: Error) => {
            const loading = this.loading;
            this.loading = null;
            if (coreBridge) {
                const loaded = new Bridge(coreBridge);
                this.loaded = loaded;
                loading?.forEach(x => x.resolve(loaded));
            } else {
                this.loadError = error || null;
                loading?.forEach(x => x.reject(error));
            }
        })

    }

    static required(): Promise<Bridge> {
        if (this.loaded !== null) {
            return Promise.resolve(this.loaded);
        }
        if (this.loadError !== null) {
            return Promise.reject(this.loadError);
        }
        if (this.loading === null) {
            throw new TonClientError(1, "TON Client core bridge isn't set.")
        }
        const loading = this.loading;
        return new Promise<Bridge>((resolve, reject) => {
            loading.push({
                resolve, reject
            });

        });
    }


    constructor(bridge: TonClientCoreBridge) {
        this.core = bridge;
        bridge.setResponseHandler(coreResponseHandler);
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
        } while (!this.requests.has(this.nextRequestId));
        return id;
    }

    async request<P, R>(
        context: number,
        functionName: string,
        functionParams: P,
        responseHandler: TonClientResponseHandler
    ): Promise<R> {
        return new Promise((resolve, reject) => {
            const request: Request = {
                resolve,
                reject,
                responseHandler,
            }
            const requestId = this.generateRequestId();
            this.requests.set(requestId, request)
            this.core.sendRequest(context, requestId, functionName, JSON.stringify(functionParams));

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

