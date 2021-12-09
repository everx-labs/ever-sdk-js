/*
 * Copyright 2018-2020 TON Labs LTD.
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
import buffer from "buffer";
import big_integer from "big-integer";

if (!global.window) {
    global.window = {};
}

if (!global.Buffer) {
    global.Buffer = buffer.Buffer;
}

if (typeof BigInt === "undefined") {
    global.BigInt = function (...args) {
        const result = big_integer(...args);
        const saveToJSON = result.toJSON;
        result.toJSON = function () {
            const n = this.toJSNumber();
            if (n < Number.MAX_SAFE_INTEGER && n > Number.MIN_SAFE_INTEGER) {
                return n;
            }
            return saveToJSON.apply(result);
        };
        return result;
    };
}

if (!global.process) {
    global.process = {};
}

if (global.process.version === undefined) {
    global.process.version = "";
}

if (global.process.stdout === undefined) {
    global.process.stdout = {
        isTTY: false,
    };
}

if (global.process.env === undefined) {
    global.process.env = {};
}

global.process.env.TON_NETWORK_ADDRESS = "http://localhost";

export default function () {
}
