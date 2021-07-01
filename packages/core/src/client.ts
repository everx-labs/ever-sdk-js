/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 *
 */

import {
    AbiModule,
    BocModule,
    ClientConfig,
    ClientModule,
    CryptoModule,
    NetModule,
    ProcessingModule,
    TvmModule,
    UtilsModule,
} from "./modules";
import {
    BinaryLibrary,
    getBridge,
    ResponseHandler,
    useLibrary,
} from "./bin";
import { TonClientError } from "./errors";

export class TonClient {
    private static _defaultConfig: ClientConfig = {};
    private static _default: TonClient | null = null;

    static set default(client: TonClient) {
        this._default = client;
    }

    static get default(): TonClient {
        if (this._default === null) {
            this._default = new TonClient(this._defaultConfig);
        }
        return this._default;
    }

    static set defaultConfig(config: ClientConfig) {
        this._defaultConfig = config;
    }

    static get defaultConfig(): ClientConfig {
        return this._defaultConfig;
    }

    readonly client: ClientModule;
    readonly crypto: CryptoModule;
    readonly abi: AbiModule;
    readonly boc: BocModule;
    readonly processing: ProcessingModule;
    readonly utils: UtilsModule;
    readonly net: NetModule;
    readonly tvm: TvmModule;
    private readonly config: ClientConfig;
    private context: number | null = null;

    constructor(config?: ClientConfig) {
        this.config = config ?? {};
        this.client = new ClientModule(this);
        this.crypto = new CryptoModule(this);
        this.abi = new AbiModule(this);
        this.boc = new BocModule(this);
        this.processing = new ProcessingModule(this);
        this.utils = new UtilsModule(this);
        this.net = new NetModule(this);
        this.tvm = new TvmModule(this);
    }

    static useBinaryLibrary(loader: () => Promise<BinaryLibrary>) {
        useLibrary(loader);
    }

    static toKey(d: string): string {
        return toHex(d, 256);
    }

    static toHash64(d: string): string {
        return toHex(d, 64);
    }

    static toHash128(d: string): string {
        return toHex(d, 128);
    }

    static toHash256(d: string): string {
        return toHex(d, 256);
    }

    static toHash512(d: string): string {
        return toHex(d, 512);
    }

    static toHex(dec: string, bits: number = 0): string {
        return toHex(dec, bits);
    }

    close() {
        const context = this.context;
        if (context !== null) {
            this.context = null;
            getBridge().destroyContext(context);
        }
    }

    async resolveError(functionName: string, params: any, err: TonClientError): Promise<TonClientError> {
        if (err.code !== 23 || !(err.data?.suggest_use_helper_for)) {
            return err;
        }
        try {
            const [modName, funcName] = functionName.split(".");
            const api = (await this.client.get_api_reference()).api;
            
            const allTypesArray = api.modules.reduce((accumulator: any, element: any) => accumulator.concat(element.types), []);
            const allTypesDict: { [name: string]: any } = {};
            allTypesArray.forEach((element: any) => allTypesDict[element.name] = element);

            const module = api.modules.find((x: any) => x.name === modName);
            const func = module.functions.find((x: any) => x.name === funcName);
            const param = func.params[1];

            // If there is only context param (or AppObject second param), there is nothing to analyze
            if (!param || param.generic_name == "AppObject") {
                return err;
            }

            const paramTypeInfo = allTypesDict[param.ref_name];
            walkParameters(paramTypeInfo, params, "");

            function walkParameters(valueTypeInfo: any, value: any, path: string) {
                switch (valueTypeInfo.type) {
                    case "Array":
                        if (Array.isArray(value)) {
                            value.forEach(v => walkParameters(valueTypeInfo.array_item, v, `${path}[i]`));
                        }
                        break;
                    case "Struct":
                        valueTypeInfo.struct_fields.forEach((sf: any) => walkParameters(sf, value[sf.name], path ? `${path}.${sf.name}` : sf.name));
                        break;
                    case "Optional":
                        if (value) {
                            walkParameters(valueTypeInfo.optional_inner, value, path);
                        }
                        break;
                    case "Ref":
                        if (valueTypeInfo.ref_name != "Value" &&
                            valueTypeInfo.ref_name != "API" &&
                            valueTypeInfo.ref_name != "AbiParam") {

                            walkParameters(allTypesDict[valueTypeInfo.ref_name], value, path);
                        }
                        break;
                    case "EnumOfTypes":
                        if (valueTypeInfo.enum_types.some((et: any) => et.name == value.type)) {
                            return;
                        }

                        let parameterName = valueTypeInfo.name.toLowerCase();
                        let helperFunctions: string[] = [];
                        valueTypeInfo.enum_types.forEach((et: any) => helperFunctions.push(parameterName + et.name));

                        err.message = `Consider using one of the helper methods (${helperFunctions.join(", ")}) for the \"${path}\" parameter\n` + err.message;
                        break;
                    default:
                        break;
                }
            }
        } catch (e) {
            err.message = e;
        }
        return err;
    }

    async request(
        functionName: string,
        functionParams: any,
        responseHandler?: ResponseHandler,
    ): Promise<any> {
        let context: number;
        if (this.context !== null) {
            context = this.context;
        } else {
            context = await getBridge().createContext(this.config);
            this.context = context;
        }
        
        return getBridge()
            .request(context, functionName, functionParams, responseHandler ?? (() => {}))
            .catch(async (reason) => {
                throw await this.resolveError(functionName, functionParams, reason);
            });
    }

    async resolve_app_request(app_request_id: number | null, result: any): Promise<void> {
        if (app_request_id) {
            await this.client.resolve_app_request({
                app_request_id,
                result: {
                    type: "Ok",
                    result,
                },
            });
        }
    }

    async reject_app_request(app_request_id: number | null, error: any): Promise<void> {
        if (app_request_id) {
            await this.client.resolve_app_request({
                app_request_id,
                result: {
                    type: "Error",
                    text: error.message,
                },
            });
        }
    }
}

// Converts value to hex
function toHex(value: any, bits: number): string {
    let hex: string;
    if (typeof value === "number" || typeof value === "bigint") {
        hex = value.toString(16);
    } else if (typeof value === "string") {
        if (value.startsWith("0x")) {
            hex = value.substr(2);
        } else {
            hex = decToHex(value);
        }
    } else {
        hex = value.toString();
    }
    let len = bits / 4;
    while (hex.length > len && hex.startsWith("0")) {
        hex = hex.substr(1);
    }
    return hex.padStart(len, "0");
}

function decToHex(dec: string): string {
    let bigNum: number[] = [];
    for (let i = 0; i < dec.length; i += 1) {
        const d = (dec.codePointAt(i) ?? 0) - 48;
        const mul8 = shl(bigNum, 3);
        const mul2 = shl(bigNum, 1);
        const mul10 = add(mul8, mul2);
        bigNum = add(mul10, [d]);
    }
    let hex = "";
    for (let i = bigNum.length - 1; i >= 0; i -= 1) {
        hex += bigNum[i].toString(16).padStart(4, "0");
    }
    return hex;
}

function shl(bigNum: number[], bits: number): number[] {
    let rest = 0;
    const result: number[] = [];
    for (let i = 0; i < bigNum.length; i += 1) {
        let v = (bigNum[i] << bits) + rest;
        result.push(v & 0xFFFF);
        rest = (v >> 16) & 0xFFFF;
    }
    if (rest > 0) {
        result.push(rest);
    }
    return result;
}

function add(a: number[], b: number[]): number[] {
    let rest = 0;
    const result: number[] = [];
    const len = Math.max(a.length, b.length);
    for (let i = 0; i < len; i += 1) {
        let v = (i < a.length ? a[i] : 0) + (i < b.length ? b[i] : 0) + rest;
        result.push(v & 0xFFFF);
        rest = (v >> 16) & 0xFFFF;
    }
    if (rest > 0) {
        result.push(rest);
    }
    return result;
}

