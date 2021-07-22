import type { BinaryLibraryWithParams } from './index.d';

export function libReactNativeJsi(): Promise<BinaryLibraryWithParams> {
  const tonClientJsiModule = (global as any).tonClientJsiModule;
  return Promise.resolve({
    setResponseParamsHandler(
      handler: (
        requestId: number,
        params: any,
        responseType: number,
        finished: boolean
      ) => void
    ): void {
      tonClientJsiModule.setResponseParamsHandler(handler);
    },
    createContext(configJson: string): Promise<string> {
      return new Promise((resolve) => {
        tonClientJsiModule.createContext(configJson, resolve);
      });
    },
    destroyContext(context: number): void {
      tonClientJsiModule.destroyContext(context);
    },
    sendRequestParams(
      context: number,
      requestId: number,
      functionName: string,
      functionParams: any
    ): void {
      tonClientJsiModule.sendRequestParams(
        context,
        requestId,
        functionName,
        functionParams
      );
    },
  });
}

function __createBlob(blobId: string, offset: number, size: number): Blob {
  const BlobManager = require('react-native/Libraries/Blob/BlobManager'); // memoized
  return BlobManager.createFromOptions({ blobId, offset, size });
}

(global as any).__createBlob = __createBlob;
