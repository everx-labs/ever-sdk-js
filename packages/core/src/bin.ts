import { TonClientError } from "./errors";
import { ClientConfig } from "./modules";

export type ResponseHandler = (params: any, responseType: number) => void;

type TypedParams = Record<string, unknown>;
type ResultOrError =
    | { result: any }
    | {
    error: {
        message: string,
        code: number,
        data?: any,
    }
}

export interface BinaryLibraryBase {
    getLibName(): Promise<string>,

    createContext(configJson: string): Promise<string>,

    destroyContext(context: number): void,
}

export interface BinaryLibrary extends BinaryLibraryBase {
    setResponseHandler(
        handler?: (
            requestId: number,
            paramsJson: string,
            responseType: ResponseType,
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
            params: TypedParams,
            responseType: ResponseType,
            finished: boolean,
        ) => void,
    ): void;

    sendRequestParams(
        context: number,
        requestId: number,
        functionName: string,
        functionParams: TypedParams,
    ): void;
}

export interface SyncBinaryLibraryBase {
    getLibName(): string;

    createContext(configJson: string): string;

    destroyContext(context: number): void;
}

export interface SyncBinaryLibrary extends SyncBinaryLibraryBase {
    setResponseHandler(
        handler?: (
            requestId: number,
            paramsJson: string,
            responseType: ResponseType,
            finished: boolean,
        ) => void,
    ): void;

    sendRequest(
        context: number,
        requestId: number,
        functionName: string,
        functionParamsJson: string,
    ): void;

    requestSync(
        context: number,
        functionName: string,
        functionParamsJson: string,
    ): string;
}

export interface SyncBinaryLibraryWithParams extends SyncBinaryLibraryBase {
    setResponseParamsHandler(
        handler?: (
            requestId: number,
            params: TypedParams,
            responseType: ResponseType,
            finished: boolean,
        ) => void,
    ): void;

    sendRequestParams(
        context: number,
        requestId: number,
        functionName: string,
        functionParams: TypedParams,
    ): void;

    requestParamsSync(
        context: number,
        functionName: string,
        functionParams?: TypedParams,
    ): ResultOrError | undefined;
}

export enum ResponseType {
    Success = 0,
    Error = 1,
    Nop = 2,
    AppRequest = 3,
    AppNotify = 4,
    Custom = 100,
}

let bridge: BinaryBridge | undefined = undefined;

export function getBridge(): BinaryBridge {
    if (!bridge) {
        throw new TonClientError(1, "TON Client binary bridge isn't set.");
    }
    return bridge;
}

type IBinaryLibrary = BinaryLibrary | BinaryLibraryWithParams | SyncBinaryLibrary | SyncBinaryLibraryWithParams;
type BinaryLoader = () => Promise<IBinaryLibrary> | IBinaryLibrary;

export function useLibrary(loader: BinaryLoader) {
    bridge = new BinaryBridge(loader);
}

type LibraryBinding = {
    library?: BinaryLibraryWithParams,
    syncLibrary?: SyncBinaryLibraryWithParams,
}

function resolveBinding(library: IBinaryLibrary): LibraryBinding {
    if ("requestParamsSync" in library) {
        return {syncLibrary: library};
    }
    if ("requestSync" in library) {
        return {syncLibrary: new SyncBinaryLibraryAdapter(library)};
    }
    if ("sendRequestParams" in library) {
        return {library};
    } else {
        return {library: new BinaryLibraryAdapter(library as BinaryLibrary)};
    }
}

export class BinaryBridge {
    private loading: LoadingPromise[] | undefined = undefined;
    private loadError: Error | undefined = undefined;
    private binding: LibraryBinding | undefined = undefined;
    private requests = new Map<number, Request>();
    private nextRequestId: number = 1;
    private contextCount: number = 0;
    private responseHandlerAssigned = false;

    constructor(loader: BinaryLoader) {
        const libraryOrPromise = loader();
        if (libraryOrPromise instanceof Promise) {
            this.loading = [];
            libraryOrPromise.then(
                (library: IBinaryLibrary) => {
                    const saveLoading = this.loading;
                    this.loading = undefined;
                    const binding = resolveBinding(library);
                    this.binding = binding;
                    saveLoading?.forEach((x) => x.resolve(binding));
                },
                (reason) => {
                    const saveLoading = this.loading;
                    this.loading = undefined;
                    this.loadError = reason ?? undefined;
                    saveLoading?.forEach((x) => x.reject(reason));
                },
            );
        } else {
            this.binding = resolveBinding(libraryOrPromise);
        }
    }

    private checkResponseHandler() {
        const mustBeAssigned = this.contextCount > 0 || this.requests.size > 0;
        if (this.responseHandlerAssigned !== mustBeAssigned) {
            if (this.binding) {
                const {library, syncLibrary} = this.binding;
                if (mustBeAssigned) {
                    const handler = (
                        requestId: number,
                        params: any,
                        responseType: ResponseType,
                        finished: boolean,
                    ) => this.handleLibraryResponse(
                        requestId,
                        params,
                        responseType,
                        finished,
                    );
                    (library ?? syncLibrary)?.setResponseParamsHandler(handler);
                } else {
                    (library ?? syncLibrary)?.setResponseParamsHandler();
                }
            }
            this.responseHandlerAssigned = mustBeAssigned;
        }
    }

    async getLibName(): Promise<string> {
        const {library, syncLibrary} = await this.bindingRequired();
        if (syncLibrary) {
            return syncLibrary.getLibName();
        }
        return await library!.getLibName();
    }

    getLibNameSync(): string {
        return this.syncLibraryRequired().getLibName();
    }

    async createContext(config: ClientConfig): Promise<number> {
        const {library, syncLibrary} = await this.bindingRequired();
        this.contextCount += 1;
        const configJson = JSON.stringify(config);
        const context = syncLibrary
            ? syncLibrary.createContext(configJson)
            : await library!.createContext(configJson);

        return BinaryBridge.parseResult(context);
    }

    createContextSync(config: ClientConfig): number {
        const library = this.syncLibraryRequired();
        this.contextCount += 1;
        const configJson = JSON.stringify(config);
        const context = library.createContext(configJson);
        return BinaryBridge.parseResult(context);
    }

    destroyContext(context: number) {
        this.contextCount = Math.max(this.contextCount - 1, 0);
        this.checkResponseHandler();
        if (this.binding) {
            (this.binding.library ?? this.binding.syncLibrary)?.destroyContext(context);
        }
    }

    async request<P, R>(
        context: number,
        functionName: string,
        functionParams: P,
        responseHandler?: ResponseHandler,
    ): Promise<R> {
        const {library, syncLibrary} = await this.bindingRequired();
        return new Promise((resolve, reject) => {
            const request: Request = {
                resolve,
                reject,
                responseHandler,
            };
            const requestId = this.generateRequestId();
            this.requests.set(requestId, request);
            this.checkResponseHandler();
            (library ?? syncLibrary)?.sendRequestParams(context, requestId, functionName, functionParams as TypedParams);
        });
    }

    requestSync<P, R>(
        context: number,
        functionName: string,
        functionParams: P,
    ): R {
        const library = this.syncLibraryRequired();
        return BinaryBridge.parseResultParams(
            library.requestParamsSync(context, functionName, functionParams as TypedParams) as ResultOrError,
        ) as R;
    }

    private bindingRequired(): Promise<LibraryBinding> {
        if (this.binding) {
            return Promise.resolve(this.binding);
        }
        if (this.loadError) {
            return Promise.reject(this.loadError);
        }
        if (this.loading === undefined) {
            return Promise.reject(
                new TonClientError(1, "TON Client binary library isn't set."),
            );
        }
        return new Promise((resolve, reject) => {
            this.loading?.push({
                resolve,
                reject,
            });
        });
    }

    private syncLibraryRequired(): SyncBinaryLibraryWithParams {
        const library = this.binding?.syncLibrary;
        if (library) {
            return library;
        }
        throw new TonClientError(1, "TON Client binary library does not support sync calls.");
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
        responseType: ResponseType,
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
            const isAppObjectOrCustom =
                responseType === ResponseType.AppNotify ||
                responseType === ResponseType.AppRequest ||
                responseType >= ResponseType.Custom;
            if (isAppObjectOrCustom && request.responseHandler) {
                request.responseHandler(params, responseType);
            }
        }
    }

    private static parseResult(resultJson: string | undefined): any {
        if (resultJson === undefined) {
            return undefined;
        }
        return BinaryBridge.parseResultParams(JSON.parse(resultJson));
    }

    private static parseResultParams(result: ResultOrError | undefined): any {
        if (result === undefined) {
            return undefined;
        }
        if ("error" in result) {
            throw new TonClientError(
                result.error.code,
                result.error.message,
                result.error.data,
            );
        }
        return result.result;
    }
}

class BinaryLibraryAdapter implements BinaryLibraryWithParams {
    constructor(private library: BinaryLibrary) {
    }

    getLibName(): Promise<string> {
        return this.library.getLibName();
    }

    createContext(configJson: string): Promise<string> {
        return this.library.createContext(configJson);
    }

    destroyContext(context: number) {
        this.library.destroyContext(context);
    }

    setResponseParamsHandler(
        handler?: (
            requestId: number,
            params: any,
            responseType: ResponseType,
            finished: boolean,
        ) => void,
    ) {
        if (handler === undefined) {
            this.library.setResponseHandler(undefined);
        } else {
            this.library.setResponseHandler(responseParamsAdapter(handler));
        }
    }

    sendRequestParams(
        context: number,
        requestId: number,
        functionName: string,
        functionParams: TypedParams,
    ) {
        this.library.sendRequest(context, requestId, functionName, toJson(functionParams));
    }
}

class SyncBinaryLibraryAdapter implements SyncBinaryLibraryWithParams {
    constructor(private library: SyncBinaryLibrary) {
    }

    getLibName(): string {
        return this.library.getLibName();
    }

    createContext(configJson: string): string {
        return this.library.createContext(configJson);
    }

    destroyContext(context: number) {
        this.library.destroyContext(context);
    }

    setResponseParamsHandler(
        handler?: (
            requestId: number,
            params: any,
            responseType: ResponseType,
            finished: boolean,
        ) => void,
    ) {
        if (handler === undefined) {
            this.library.setResponseHandler(undefined);
        } else {
            this.library.setResponseHandler(responseParamsAdapter(handler));
        }
    }

    sendRequestParams(
        context: number,
        requestId: number,
        functionName: string,
        functionParams: TypedParams,
    ) {
        this.library.sendRequest(context, requestId, functionName, toJson(functionParams));
    }

    requestParamsSync(context: number, functionName: string, functionParams?: TypedParams): ResultOrError | undefined {
        return parseJson(this.library.requestSync(context, functionName, toJson(functionParams)));
    }
}

function responseParamsAdapter(
    handler: (
        requestId: number,
        params: any,
        responseType: ResponseType,
        finished: boolean,
    ) => void,
) {
    return (
        requestId: number,
        paramsJson: string,
        responseType: ResponseType,
        finished: boolean,
    ) => handler(
        requestId,
        parseJson(paramsJson),
        responseType,
        finished,
    );
}

function parseJson<T>(json: string): T | undefined {
    return json !== "" ? JSON.parse(json) : undefined;
}

function toJson<T>(params: T | undefined | null): string {
    return params === undefined || params === null
        ? ""
        : JSON.stringify(params, (_, value) =>
            typeof value === "bigint"
                ? value < Number.MAX_SAFE_INTEGER &&
                value > Number.MIN_SAFE_INTEGER
                    ? Number(value)
                    : value.toString()
                : value,
        );
}

type Request = {
    resolve: (params: any) => void;
    reject: (error: any) => void;
    responseHandler?: ResponseHandler;
};

type LoadingPromise = {
    resolve: (binding: LibraryBinding) => void;
    reject: (error?: Error) => void;
};

