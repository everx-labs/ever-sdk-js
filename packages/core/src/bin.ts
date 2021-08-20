import { TonClientError } from "./errors";
import { ClientConfig } from "./modules";

export type ResponseHandler = (params: any, responseType: number) => void;

export interface BinaryLibraryBase {
    createContext(configJson: string): Promise<string>,

    destroyContext(context: number): void,

}

export interface BinaryLibrary extends BinaryLibraryBase {
    setResponseHandler(
        handler?: (
            requestId: number,
            paramsJson: string,
            responseType: number,
            finished: boolean,
        ) => void,
    ): void,

    sendRequest(
        context: number,
        requestId: number,
        functionName: string,
        functionParamsJson: string,
    ): void,
}

export interface BinaryLibraryWithParams extends BinaryLibraryBase {
    setResponseParamsHandler(
        handler?: (
            requestId: number,
            params: any,
            responseType: number,
            finished: boolean,
        ) => void,
    ): void,

    sendRequestParams(
        context: number,
        requestId: number,
        functionName: string,
        functionParams: any,
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

let bridge: BinaryBridge | undefined = undefined;

export function getBridge(): BinaryBridge {
    if (!bridge) {
        throw new TonClientError(1, "TON Client binary bridge isn't set.");
    }
    return bridge;
}

export function useLibrary(loader: (() => Promise<BinaryLibrary | BinaryLibraryWithParams>) | BinaryBridge) {
    if ("createContext" in loader) {
        bridge = loader;
    } else {
        bridge = new CommonBinaryBridge(loader);
    }
}

class BinaryLibraryAdapter implements BinaryLibraryWithParams {
    constructor(private library: BinaryLibrary) {
    }

    setResponseParamsHandler(handler?: (requestId: number, params: any, responseType: number, finished: boolean) => void) {
        if (handler === undefined) {
            this.library.setResponseHandler(undefined);
        } else {
            this.library.setResponseHandler((
                    requestId: number,
                    paramsJson: string,
                    responseType: number,
                    finished: boolean,
                ) => handler(
                    requestId,
                    paramsJson !== "" ? JSON.parse(paramsJson) : undefined,
                    responseType,
                    finished),
            );
        }
    }

    sendRequestParams(context: number, requestId: number, functionName: string, functionParams: any) {
        const paramsJson = (functionParams === undefined) || (functionParams === null)
            ? ""
            : JSON.stringify(functionParams, (_, value) =>
                typeof value === "bigint"
                    ? (value < Number.MAX_SAFE_INTEGER && value > Number.MIN_SAFE_INTEGER
                        ? Number(value)
                        : value.toString())
                    : value);
        this.library.sendRequest(context, requestId, functionName, paramsJson);
    }

    createContext(configJson: string): Promise<string> {
        return this.library.createContext(configJson);
    }

    destroyContext(context: number) {
        this.library.destroyContext(context);
    }
}

export class CommonBinaryBridge implements BinaryBridge {
    private loading: LoadingPromise[] | undefined = undefined;
    private loadError: Error | undefined = undefined;
    private library: BinaryLibraryWithParams | undefined = undefined;
    private requests = new Map<number, Request>();
    private nextRequestId: number = 1;
    private contextCount: number = 0;
    private responseHandlerAssigned = false;

    constructor(loader: () => Promise<BinaryLibrary | BinaryLibraryWithParams>) {
        this.loading = [];
        loader().then((library: BinaryLibrary | BinaryLibraryWithParams, error?: Error) => {
            const saveLoading = this.loading;
            this.loading = undefined;
            if (library) {
                let libraryWithParams = "setResponseParamsHandler" in library
                    ? library
                    : new BinaryLibraryAdapter(library);
                this.library = libraryWithParams;
                saveLoading?.forEach(x => x.resolve(libraryWithParams));
            } else {
                this.loadError = error ?? undefined;
                saveLoading?.forEach(x => x.reject(error));
            }
        });

    }

    private checkResponseHandler() {
        const mustBeAssigned = (this.contextCount > 0) || (this.requests.size > 0);
        if (this.responseHandlerAssigned !== mustBeAssigned) {
            if (mustBeAssigned) {
                this.library?.setResponseParamsHandler((
                    requestId: number,
                    params: any,
                    responseType: number,
                    finished: boolean,
                ) => this.handleLibraryResponse(requestId, params, responseType, finished));
            } else {
                this.library?.setResponseParamsHandler();
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
        const lib = this.library ?? await this.loadRequired();
        return new Promise((resolve, reject) => {
            const request: Request = {
                resolve,
                reject,
                responseHandler,
            };
            const requestId = this.generateRequestId();
            this.requests.set(requestId, request);
            this.checkResponseHandler();
            lib.sendRequestParams(context, requestId, functionName, functionParams);
        });
    }

    private loadRequired(): Promise<BinaryLibraryWithParams> {
        if (this.library !== undefined) {
            return Promise.resolve(this.library);
        }
        if (this.loadError !== undefined) {
            return Promise.reject(this.loadError);
        }
        if (this.loading === undefined) {
            return Promise.reject(new TonClientError(1, "TON Client binary library isn't set."));
        }
        return new Promise<BinaryLibraryWithParams>((resolve, reject) => {
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
        params: any,
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
    resolve: (library: BinaryLibraryWithParams) => void,
    reject: (error?: Error) => void,
}


