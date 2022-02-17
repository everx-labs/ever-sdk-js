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

import { ABIVersions, runner } from "../runner";
import { expect, test } from "../jest";
import { contracts } from "../contracts";
import {
    AppSigningBox,
    KeyPair,
    ParamsOfEncodeMessage,
    Signer,
    signerSigningBox,
} from "@eversdk/core";

test("abi: encode_message", async () => {
    // arrange
    const {
        crypto,
        abi,
    } = runner.getClient();
    const events = await runner.getAccount(contracts.Events, 2);
    const keys: KeyPair = {
        public: "4c7c408ff1ddebb8d6405ee979c716a14fdd6cc08124107a61d3c25597099499",
        secret: "cc8929d635719612a9478b9cd17675a39cfad52d8959e8a177389b8c0b9122a7",
    };
    const time = 1599458364291 as any;
    const expire = 1599458404;

    const signing_box: AppSigningBox = {
        get_public_key: async () => {
            return {
                public_key: keys.public,
            };
        },
        sign: async (params) => {
            return {
                signature: (await crypto.sign({
                    keys,
                    unsigned: params.unsigned,
                })).signature,
            };
        },
    };

    const signer = signerSigningBox((await crypto.register_signing_box(signing_box)).handle);
    const deploy_params = async (signing: Signer): Promise<ParamsOfEncodeMessage> => ({
        abi: events.abi,
        address: await events.getAddress(),
        deploy_set: {
            tvc: events.getParamsOfDeployMessage().deploy_set?.tvc ?? "",
        },
        call_set: {
            function_name: "constructor",
            header: {
                pubkey: keys.public,
                time,
                expire,
            },
        },
        signer: signing,
    });

    // act
    const signed_with_box = await abi.encode_message(await deploy_params(signer));

    // assert
    expect(signed_with_box.message).toEqual("te6ccgECGAEAA6wAA0eIAAt9aqvShfTon7Lei1PVOhUEkEEZQkhDKPgNyzeTL6YSEbAHAgEA4bE5Gr3mWwDtlcEOWHr6slWoyQlpIWeYyw/00eKFGFkbAJMMFLWnu0mq4HSrPmktmzeeAboa4kxkFymCsRVt44dTHxAj/Hd67jWQF7peccWoU/dbMCBJBB6YdPCVZcJlJkAAAF0ZyXLg19VzGRotV8/gAQHAAwIDzyAGBAEB3gUAA9AgAEHaY+IEf47vXcayAvdLzji1Cn7rZgQJIIPTDp4SrLhMpMwCJv8A9KQgIsABkvSg4YrtU1gw9KEKCAEK9KQg9KEJAAACASANCwHI/38h7UTQINdJwgGOENP/0z/TANF/+GH4Zvhj+GKOGPQFcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AQwAao4e+EMhuSCfMCD4I4ED6KiCCBt3QKC53pL4Y+CANPI02NMfAfgjvPK50x8B8AH4R26S8jzeAgEgEw4CASAQDwC9uotV8/+EFujjXtRNAg10nCAY4Q0//TP9MA0X/4Yfhm+GP4Yo4Y9AVwAYBA9A7yvdcL//hicPhjcPhmf/hh4t74RvJzcfhm0fgA+ELIy//4Q88LP/hGzwsAye1Uf/hngCASASEQDluIAGtb8ILdHCfaiaGn/6Z/pgGi//DD8M3wx/DFvfSDK6mjofSBv6PwikDdJGDhvfCFdeXAyfABkZP2CEGRnwoRnRoIEB9AAAAAAAAAAAAAAAAAAIGeLZMCAQH2AGHwhZGX//CHnhZ/8I2eFgGT2qj/8M8ADFuZPCot8ILdHCfaiaGn/6Z/pgGi//DD8M3wx/DFva4b/yupo6Gn/7+j8AGRF7gAAAAAAAAAAAAAAAAhni2fA58jjyxi9EOeF/+S4/YAYfCFkZf/8IeeFn/wjZ4WAZPaqP/wzwAgFIFxQBCbi3xYJQFQH8+EFujhPtRNDT/9M/0wDRf/hh+Gb4Y/hi3tcN/5XU0dDT/9/R+ADIi9wAAAAAAAAAAAAAAAAQzxbPgc+Rx5YxeiHPC//JcfsAyIvcAAAAAAAAAAAAAAAAEM8Wz4HPklb4sEohzwv/yXH7ADD4QsjL//hDzws/+EbPCwDJ7VR/FgAE+GcActxwItDWAjHSADDcIccAkvI74CHXDR+S8jzhUxGS8jvhwQQighD////9vLGS8jzgAfAB+EdukvI83g==");
});

test.each(ABIVersions)("abi: encode_message_body -> decode_message_body (ABI v%i)", async (abiVersion) => {
    const abi = runner.getClient().abi;
    const subscriptionAccount = await runner.getAccount(contracts.Subscription, abiVersion);
    const walletAddress = "0:adb63a228837e478c7edf5fe3f0b5d12183e1f22246b67712b99ec538d6c5357";

    const encodeResult = await abi.encode_message_body({
        abi: subscriptionAccount.abi,
        call_set: {
            function_name: "constructor",
            input: { wallet: walletAddress },
        },
        signer: subscriptionAccount.signer,
        is_internal: false,
    });
    const decodeResult = await abi.decode_message_body({
        abi: subscriptionAccount.abi,
        body: encodeResult.body,
        is_internal: false,
    });

    expect(decodeResult.name).toEqual("constructor");
    expect(decodeResult.value).toEqual({ wallet: walletAddress });

    const encodeResultInternal = await abi.encode_message_body({
        abi: subscriptionAccount.abi,
        call_set: {
            function_name: "constructor",
            input: { wallet: walletAddress },
        },
        signer: subscriptionAccount.signer,
        is_internal: true,
    });
    const decodeResultInternal = await abi.decode_message_body({
        abi: subscriptionAccount.abi,
        body: encodeResultInternal.body,
        is_internal: true,
    });

    expect(decodeResultInternal.name).toEqual("constructor");
    expect(decodeResultInternal.value).toEqual({ wallet: walletAddress });
});

test.each(ABIVersions)("abi: encode_message -> decode_message (ABI v%i)", async (abiVersion) => {
    const abi = runner.getClient().abi;
    const walletAddress = "0:adb63a228837e478c7edf5fe3f0b5d12183e1f22246b67712b99ec538d6c5357";
    const subscriptionAccount = await runner.getAccount(contracts.Subscription, abiVersion, undefined, { wallet: walletAddress }, undefined);
    
    const encodeResult = await abi.encode_message({
        abi: subscriptionAccount.abi,
        address: await subscriptionAccount.getAddress(),
        call_set: {
            function_name: "constructor",
            input: { wallet: walletAddress },
        },
        signer: subscriptionAccount.signer,
    });
    const decodeResult = await abi.decode_message({
        abi: subscriptionAccount.abi,
        message: encodeResult.message,
    });

    expect(decodeResult.name).toEqual("constructor");
    expect(decodeResult.value).toEqual({ wallet: walletAddress });
});
