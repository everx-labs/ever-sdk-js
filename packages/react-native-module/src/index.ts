interface BinaryLibrary {
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

export function reactNativeModule(): Promise<BinaryLibrary> {
    return Promise.resolve({
        setResponseHandler(_handler) {
        },

        createContext(_configJson: string): Promise<string> {
            return Promise.resolve('');
        },

        destroyContext(_context: number): void {

        },

        sendRequest(
            _context: number,
            _requestId: number,
            _functionName: string,
            _functionParamsJson: string,
        ): void {

        },
    });
}
