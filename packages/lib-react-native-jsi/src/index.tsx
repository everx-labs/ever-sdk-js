import type { BinaryLibrary } from './index.d';

export function libReactNativeJsi(): Promise<BinaryLibrary> {
  const tonClientJsiModule = (global as any).tonClientJsiModule;
  return Promise.resolve({
    setResponseHandler(
      responseHandler: (
        requestId: number,
        paramsJson: string,
        responseType: number,
        finished: boolean
      ) => void
    ): void {
      tonClientJsiModule.setResponseHandler(responseHandler);
    },
    createContext(configJson: string): Promise<string> {
      return new Promise((resolve) => {
        tonClientJsiModule.createContext(configJson, resolve);
      });
    },
    destroyContext(context: number): void {
      tonClientJsiModule.destroyContext(context);
    },
    sendRequest(
      context: number,
      requestId: number,
      functionName: string,
      functionParamsJson: string
    ): void {
      tonClientJsiModule.sendRequest(
        context,
        requestId,
        functionName,
        functionParamsJson
      );
    },
  });
}
