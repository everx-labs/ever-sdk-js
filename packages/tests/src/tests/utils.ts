/*
 * Copyright 2018-2021 TON DEV SOLUTIONS LTD.
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
} from "@tonclient/core";

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
