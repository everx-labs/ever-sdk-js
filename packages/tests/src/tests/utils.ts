/*
 * Copyright 2018-2021 TON Labs LTD.
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

import { runner } from "../runner";
import { test, expect } from "../jest";
import { 
    addressStringFormatAccountId,
    addressStringFormatBase64,
    addressStringFormatHex
} from "@eversdk/core";

test("utils: convert_address", async () => {
    const {
        utils,
    } = runner.getClient();

    const accountId = "fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260";
    const hex = "-1:fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260";
    const hexWorkchain0 = "0:fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260";
    const base64 = "Uf/8uRo6OBbQ97jCx2EIuKm8Wmt6Vb15+KsQHFLbKSMiYG+9";
    const base64Url = "kf_8uRo6OBbQ97jCx2EIuKm8Wmt6Vb15-KsQHFLbKSMiYIny";

    let convertedAddress = await utils.convert_address({
        address: accountId,
        output_format: addressStringFormatHex(),
    });
    expect(convertedAddress.address).toEqual(hexWorkchain0);

    convertedAddress = await utils.convert_address({
        address: hex,
        output_format: addressStringFormatAccountId(),
    });
    expect(convertedAddress.address).toEqual(accountId);

    convertedAddress = await utils.convert_address({
        address: hex,
        output_format: addressStringFormatBase64(false, false, false),
    });
    expect(convertedAddress.address).toEqual(base64);

    convertedAddress = await utils.convert_address({
        address: base64,
        output_format: addressStringFormatBase64(true, true, true),
    });
    expect(convertedAddress.address).toEqual(base64Url);

    convertedAddress = await utils.convert_address({
        address: base64Url,
        output_format: addressStringFormatHex(),
    });
    expect(convertedAddress.address).toEqual(hex);
});

test("utils: compress_zstd zero", async () => {
    const {
        utils,
    } = runner.getClient();
    
    const zero = '';
    const c = await utils.compress_zstd({uncompressed: zero});
    const d = await utils.decompress_zstd({...c});

    expect(d.decompressed).toEqual(zero);
});

test("utils: compress_zstd big length", async () => {
    const {
        utils,
    } = runner.getClient();
    
    const length = 1024*1024; // 1Mb
    const randomBytesInBase64 = Buffer.from('foo bar 42'.repeat(length), "utf8").toString("base64");

    const cMin = await utils.compress_zstd({level: 1, uncompressed: randomBytesInBase64});
    const dMin = await utils.decompress_zstd({...cMin});

    const cMax = await utils.compress_zstd({level: 21, uncompressed: randomBytesInBase64});
    const dMax = await utils.decompress_zstd({...cMax});

    expect(dMin.decompressed).toEqual(randomBytesInBase64);
    expect(dMax.decompressed).toEqual(randomBytesInBase64);
});
