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

export interface BinaryLibraryBase {
  getLibName(): Promise<string>;

  createContext(configJson: string): Promise<string>;

  destroyContext(context: number): void;
}

export interface BinaryLibraryWithParams extends BinaryLibraryBase {
  setResponseParamsHandler(
    handler?: (
      requestId: number,
      params: any,
      responseType: number,
      finished: boolean
    ) => void
  ): void;

  sendRequestParams(
    context: number,
    requestId: number,
    functionName: string,
    functionParams: any
  ): void;
}

export declare function libReactNativeJsi(): Promise<BinaryLibraryWithParams>;
