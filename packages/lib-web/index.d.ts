/*
 * Copyright 2018-2020 TON Labs LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the
 * License at:
 *
 * http://www.ton.dev/licenses
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 */

interface BinaryLibrary {
    getLibName(): Promise<string>,
    setResponseParamsHandler(
        handler?: (
            requestId: number,
            params: any,
            responseType: number,
            finished: boolean,
        ) => void,
    ): void,

    createContext(configJson: string): Promise<string>,

    destroyContext(context: number): void,

    sendRequestParams(
        context: number,
        requestId: number,
        functionName: string,
        functionParams: any,
    ): void,
}

type LibWebOptions = {
    /**
     * Prints debug message.
     * @param message
     */
    debugLog?: (message: any) => void,
    /**
     * URL to `eversdk.wasm` module.
     * Default is "/eversdk.wasm"
     */
    binaryURL?: string,
    /**
     * Alternative WASM module loader.
     */
    loadModule?: () => Promise<WebAssembly.Module>,

    /// Run core in single thread mode.
    disableSeparateWorker?: boolean,
}

export declare function libWebSetup(libOptions?: LibWebOptions): void;

export declare function libWeb(): Promise<BinaryLibrary>;
