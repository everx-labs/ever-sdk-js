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

type Request = {
    resolve: (params: any) => void,
    reject: (error: any) => void,
    responseHandler?: ResponseHandler;
}

type LoadingPromise = {
    resolve: (library: BinaryLibrary) => void,
    reject: (error?: Error) => void,
}


let loading: LoadingPromise[] | null = null;
let loadError: Error | null = null;
let library: BinaryLibrary | null = null;
const requests = new Map<number, Request>();
let nextRequestId: number = 1;
let contextCount: number = 0;
let responseHandlerAssigned = false;

function checkResponseHandler() {
    const mustBeAssigned = (contextCount > 0) || (requests.size > 0);
    if (responseHandlerAssigned !== mustBeAssigned) {
        if (mustBeAssigned) {
            library?.setResponseHandler(handleLibraryResponse);
        } else {
            library?.setResponseHandler();
        }
        responseHandlerAssigned = mustBeAssigned;
    }
}

export function useLibrary(loader: () => Promise<BinaryLibrary>) {
    loading = [];
    loader().then((lib: BinaryLibrary, error?: Error) => {
        const saveLoading = loading;
        loading = null;
        if (lib) {
            library = lib;
            saveLoading?.forEach(x => x.resolve(lib));
        } else {
            loadError = error || null;
            saveLoading?.forEach(x => x.reject(error));
        }
    });

}

export async function createContext(config: ClientConfig): Promise<number> {
    const lib = library || await loadRequired();
    contextCount += 1;
    return parseResult(await lib.createContext(JSON.stringify(config)));
}

export function destroyContext(context: number) {
    contextCount = Math.max(contextCount - 1, 0);
    checkResponseHandler();
    library?.destroyContext(context);
}

export async function request<P, R>(
    context: number,
    functionName: string,
    functionParams: P,
    responseHandler?: ResponseHandler,
): Promise<R> {
    const lib = library || await loadRequired();
    return new Promise((resolve, reject) => {
        const request: Request = {
            resolve,
            reject,
            responseHandler,
        };
        const requestId = generateRequestId();
        requests.set(requestId, request);
        checkResponseHandler();
        const paramsJson = (functionParams === undefined) || (functionParams === null)
            ? ""
            : JSON.stringify(functionParams);
        lib.sendRequest(context, requestId, functionName, paramsJson);
    });
}

function loadRequired(): Promise<BinaryLibrary> {
    if (library !== null) {
        return Promise.resolve(library);
    }
    if (loadError !== null) {
        return Promise.reject(loadError);
    }
    if (loading === null) {
        return Promise.reject(new TonClientError(1, "TON Client binary library isn't set."));
    }
    return new Promise<BinaryLibrary>((resolve, reject) => {
        loading?.push({
            resolve,
            reject,
        });
    });
}


function generateRequestId(): number {
    const id = nextRequestId;
    do {
        nextRequestId += 1;
        if (nextRequestId >= Number.MAX_SAFE_INTEGER) {
            nextRequestId = 1;
        }
    } while (requests.has(nextRequestId));
    return id;
}

function handleLibraryResponse(
    requestId: number,
    paramsJson: string,
    responseType: number,
    finished: boolean,
) {
    const request = requests.get(requestId);
    if (!request) {
        return;
    }
    if (finished) {
        requests.delete(requestId);
        checkResponseHandler();
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


function parseResult(resultJson: string): any {
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
