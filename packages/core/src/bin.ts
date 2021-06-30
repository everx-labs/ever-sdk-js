import {TonClientError} from "./errors";
import {ClientConfig} from "./modules";

export type ResponseHandler = (params: any, responseType: number) => void;

export interface BinaryLibrary {
    setResponseHandler(
        handler?: (
            requestId: number,
            paramsJson: string,
            responseType: number,
            finished: boolean,
        ) => void,
    ): void,

    createContext(configJson: string): Promise<string>,

    destroyContext(context: number): void,

    sendRequest(
        context: number,
        requestId: number,
        functionName: string,
        functionParamsJson: string,
    ): void,
}

export enum ResponseType {
    Success = 0,
    Error = 1,
    Nop = 2,
    AppRequest = 3,
    AppNotify = 4,
    Custom = 100,
}


export interface BinaryBridge {
    createContext(config: ClientConfig): Promise<number>;

    destroyContext(context: number): void;

    request<P, R>(
        context: number,
        functionName: string,
        functionParams: P,
        responseHandler?: ResponseHandler,
    ): Promise<R>;
}

let bridge: BinaryBridge | null = null;

export function getBridge(): BinaryBridge {
    if (!bridge) {
        throw new TonClientError(1, "TON Client binary bridge isn't set.");
    }
    return bridge;
}

export function useLibrary(loader: (() => Promise<BinaryLibrary>) | BinaryBridge) {
    bridge = ("createContext" in loader) ? loader : new CommonBinaryBridge(loader);
}

export class CommonBinaryBridge implements BinaryBridge {
    private loading: LoadingPromise[] | null = null;
    private loadError: Error | null = null;
    private library: BinaryLibrary | null = null;
    private requests = new Map<number, Request>();
    private nextRequestId: number = 1;
    private contextCount: number = 0;
    private responseHandlerAssigned = false;

    constructor(loader: () => Promise<BinaryLibrary>) {
        this.loading = [];
        loader().then((lib: BinaryLibrary, error?: Error) => {
            const saveLoading = this.loading;
            this.loading = null;
            if (lib) {
                this.library = lib;
                saveLoading?.forEach(x => x.resolve(lib));
            } else {
                this.loadError = error || null;
                saveLoading?.forEach(x => x.reject(error));
            }
        });

    }

    private checkResponseHandler() {
        const mustBeAssigned = (this.contextCount > 0) || (this.requests.size > 0);
        if (this.responseHandlerAssigned !== mustBeAssigned) {
            if (mustBeAssigned) {
                this.library?.setResponseHandler((
                    requestId: number,
                    paramsJson: string,
                    responseType: number,
                    finished: boolean,
                ) => this.handleLibraryResponse(requestId, paramsJson, responseType, finished));
            } else {
                this.library?.setResponseHandler();
            }
            this.responseHandlerAssigned = mustBeAssigned;
        }
    }


    async createContext(config: ClientConfig): Promise<number> {
        const lib = this.library || await this.loadRequired();
        this.contextCount += 1;
        return CommonBinaryBridge.parseResult(await lib.createContext(JSON.stringify(config)));
    }

    destroyContext(context: number) {
        this.contextCount = Math.max(this.contextCount - 1, 0);
        this.checkResponseHandler();
        this.library?.destroyContext(context);
    }

    async request<P, R>(
        context: number,
        functionName: string,
        functionParams: P,
        responseHandler?: ResponseHandler,
    ): Promise<R> {
        const lib = this.library || await this.loadRequired();
        return new Promise((resolve, reject) => {
            const request: Request = {
                resolve,
                reject,
                responseHandler,
            };
            const requestId = this.generateRequestId();
            this.requests.set(requestId, request);
            this.checkResponseHandler();
            const paramsJson = (functionParams === undefined) || (functionParams === null)
                ? ""
                : JSON.stringify(functionParams, (_, value) => 
                    typeof value === 'bigint'
                    ? (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER
                        ? Number(value)
                        : value)
                    : value);
            lib.sendRequest(context, requestId, functionName, paramsJson);
        });
    }

    private loadRequired(): Promise<BinaryLibrary> {
        if (this.library !== null) {
            return Promise.resolve(this.library);
        }
        if (this.loadError !== null) {
            return Promise.reject(this.loadError);
        }
        if (this.loading === null) {
            return Promise.reject(new TonClientError(1, "TON Client binary library isn't set."));
        }
        return new Promise<BinaryLibrary>((resolve, reject) => {
            this.loading?.push({
                resolve,
                reject,
            });
        });
    }


    private generateRequestId(): number {
        const id = this.nextRequestId;
        do {
            this.nextRequestId += 1;
            if (this.nextRequestId >= Number.MAX_SAFE_INTEGER) {
                this.nextRequestId = 1;
            }
        } while (this.requests.has(this.nextRequestId));
        return id;
    }

    private handleLibraryResponse(
        requestId: number,
        paramsJson: string,
        responseType: number,
        finished: boolean,
    ) {
        const request = this.requests.get(requestId);
        if (!request) {
            return;
        }
        if (finished) {
            this.requests.delete(requestId);
            this.checkResponseHandler();
        }
        const params = paramsJson !== "" ? JSON.parse(paramsJson) : undefined;
        switch (responseType) {
        case ResponseType.Success:
            request.resolve(params);
            break;
        case ResponseType.Error:
            request.reject(params);
            break;
        default:
            const isAppObjectOrCustom = responseType === ResponseType.AppNotify
                || responseType === ResponseType.AppRequest
                || responseType >= ResponseType.Custom;
            if (isAppObjectOrCustom && request.responseHandler) {
                request.responseHandler(params, responseType);
            }
        }
    }


    private static parseResult(resultJson: string): any {
        const result: { result: any } | {
            error: {
                message: string,
                code: number,
                data?: any,
            }
        } = JSON.parse(resultJson);
        if ("error" in result) {
            throw new TonClientError(result.error.code, result.error.message, result.error.data);
        }
        return result.result;
    }

}

type Request = {
    resolve: (params: any) => void,
    reject: (error: any) => void,
    responseHandler?: ResponseHandler;
}

type LoadingPromise = {
    resolve: (library: BinaryLibrary) => void,
    reject: (error?: Error) => void,
}


