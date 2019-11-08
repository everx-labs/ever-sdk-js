/*
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
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

// @flow

import type { TONContractPackage } from '../src/modules/TONContractsModule';
import { TONAddressStringVariant } from '../src/modules/TONContractsModule';
import { TONOutputEncoding } from "../src/modules/TONCryptoModule";
import { WalletContractPackage } from './contracts/WalletContract';
import { tests } from "./init-tests";
import { SubscriptionContractPackage } from "./contracts/SubscriptionContract";


beforeAll(tests.init);
afterAll(tests.done);

const walletKeys = {
    public: 'fb98b2541ba805648f25eb469dd4766fcdde03a2cfe6fb41d8c1571c29407ca3',
    secret: '7bfe77bbd3ad57ada9ed323da83504723e3af7cd3ba68b02d3c8335f75e0a24e',
};

const walletAddress = '0:adb63a228837e478c7edf5fe3f0b5d12183e1f22246b67712b99ec538d6c5357';

test('load', async () => {
    const { contracts } = tests.client;
    const contract = await contracts.load({
        address: '0:0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF',
        includeImage: false,
    });
    expect(contract.id).toBeNull();
    expect(contract.balanceGrams).toBeNull();

    await tests.get_grams_from_giver(walletAddress);

    const w = await contracts.load({
        address: walletAddress,
        includeImage: false,
    });
    expect(w.id).toEqual(walletAddress);
    expect(Number.parseInt(w.balanceGrams)).toBeGreaterThan(0);
});

test('deploy_new', async () => {
    const { crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    await tests.deploy_with_giver({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });
});

test('Run aborted transaction', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const address =  await tests.deploy_with_giver({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });

    try {
        await contracts.run({
            address: address.address,
            abi: WalletContractPackage.abi,
            functionName: "sendTransaction",
            input: {
                dest: 0,
                value: 0,
                bounce: false
            },
            keyPair: keys
        });
    } catch (error) {
        const e = error;
        console.log(e);
        expect(error.source).toEqual('node');
        expect(error.code).toEqual(102);
        expect(error.message).toEqual('VM terminated with exception (102) at computeVm');
        expect(error.data.phase).toEqual('computeVm');
        expect(error.data.transaction_id).toBeTruthy();
    }

    try {
        await contracts.run({
            address: address.address,
            abi: WalletContractPackage.abi,
            functionName: "sendTransaction",
            input: {},
            keyPair: keys
        });
    } catch (error) {
        //console.log(error);
        expect(error.source).toEqual('client');
        expect(error.code).toEqual(3012);
        expect(error.data).toBeNull();
    }
});

/*
test('run', async () => {
    const { contracts } = tests.client;
    const result = await contracts.run({
        address: walletAddress,
        functionName: 'getVersion',
        abi: WalletContractPackage.abi,
        input: {},
        keyPair: walletKeys,
    });
    expect(JSON.stringify(result)).toEqual(`{"output":{"error":"-0x1","version":{"major":"0x0","minor":"0x1"}}}`);
});
*/
test('decodeInputMessageBody', async () => {
    const { contracts } = tests.client;
    const body = 'te6ccgEBAgEAkQABWD/BEboAAAFt31a11CIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiAQDAVgroxdPfNhBVJLYXeA07DKQvKrlQ1qbP5gjuxdwkMO4hgjdYoA70MvP4p0RbEaOFzcdK1P8hBgssv0lBLMtjCPjvxPjSkA8JkCt/hjUCINRHrwCZtOYRLjk2PAdrwFpH';

    const result = await contracts.decodeInputMessageBody({
        abi: SubscriptionContractPackage.abi,
        bodyBase64: body
    });

    expect(result.function).toEqual('getSubscription');
    expect(result.output).toEqual({subscriptionId: "0x2222222222222222222222222222222222222222222222222222222222222222"});
});

const events_package: TONContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                ],
                "outputs": [
                ]
            },
            {
                "name": "emitValue",
                "inputs": [
                    {"name":"id","type":"uint256"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "returnValue",
                "inputs": [
                    {"name":"id","type":"uint256"}
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
                ]
            }
        ],
        "events": [
            {
                "name": "EventThrown",
                "inputs": [
                    {"name":"id","type":"uint256"}
                ],
                "outputs": [
                ]
            }
        ],
        "data": [
        ]
    },
    imageBase64: "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"
};

test('filterOutput', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployed = await tests.deploy_with_giver({
        package: events_package,
        constructorParams: {},
        keyPair: keys,
    });

    const resultEmit = await contracts.run({
        address: deployed.address,
        functionName: 'emitValue',
        abi: events_package.abi,
        input: { id: "0" },
        keyPair: keys,
    });

    const resultReturn = await contracts.run({
        address: deployed.address,
        functionName: 'returnValue',
        abi: events_package.abi,
        input: { id: "0" },
        keyPair: keys,
    });
    expect(JSON.stringify(resultReturn.output)).toEqual(`{"value0":"0x0"}`);
});

test('External Signing', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    var contract_package = events_package;
    contract_package.abi["setTime"] = false;

    const deployParams = {
        package: contract_package,
        constructorParams: {},
        keyPair: keys,
    };
    const unsignedMessage = await contracts.createUnsignedDeployMessage(deployParams);
    const signKey = await crypto.naclSignKeypairFromSecretKey(keys.secret);
    const signBytesBase64 = await crypto.naclSignDetached({
        base64: unsignedMessage.signParams.bytesToSignBase64,
    }, signKey.secret, TONOutputEncoding.Base64);
    const signed = await contracts.createSignedDeployMessage({
        address: unsignedMessage.address,
        createSignedParams: {
            publicKeyHex: keys.public,
            signBytesBase64: signBytesBase64,
            unsignedBytesBase64: unsignedMessage.signParams.unsignedBytesBase64,
        }
    });

    const message = await contracts.createDeployMessage(deployParams);
    expect(signed.message.messageBodyBase64).toEqual(message.message.messageBodyBase64);
});

test('changeInitState', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const subscriptionAddess1 = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
    const subscriptionAddess2 = '0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321';

    const deployed1 = await tests.deploy_with_giver({
        package: WalletContractPackage,
        constructorParams: {},
        initParams: { subscription: subscriptionAddess1 },
        keyPair: keys,
    });

    const deployed2 = await tests.deploy_with_giver({
        package: WalletContractPackage,
        constructorParams: {},
        initParams: { subscription: subscriptionAddess2 },
        keyPair: keys,
    });

    expect(deployed1.address).not.toEqual(deployed2.address);

    const result1 = await contracts.run({
        address: deployed1.address,
        functionName: 'getSubscriptionAccount',
        abi: WalletContractPackage.abi,
        input: { },
        keyPair: keys,
    });

    const result2 = await contracts.run({
        address: deployed2.address,
        functionName: 'getSubscriptionAccount',
        abi: WalletContractPackage.abi,
        input: { },
        keyPair: keys,
    });

    expect(result1.output).toEqual({ value0: subscriptionAddess1 });
    expect(result2.output).toEqual({ value0: subscriptionAddess2 });
});

const setCode1_package: TONContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "main",
                "inputs": [
                    {"name":"newcode","type":"cell"}
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
                ]
            },
            {
                "name": "getVersion",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
                ]
            },
            {
                "name": "constructor",
                "inputs": [
                ],
                "outputs": [
                ]
            }
        ],
        "events": [
        ],
        "data": [
        ]
    } ,
    imageBase64: "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"
};

const setCode2_imageBase64 = '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';


test('testSetCode', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployed = await tests.deploy_with_giver({
        package: setCode1_package,
        constructorParams: {},
        keyPair: keys,
    });

    const version1 = await contracts.run({
        address: deployed.address,
        functionName: 'getVersion',
        abi: setCode1_package.abi,
        input: { },
        keyPair: keys,
    });

    const code = await contracts.getCodeFromImage({
        imageBase64: setCode2_imageBase64
    });

    const result = await contracts.run({
        address: deployed.address,
        functionName: 'main',
        abi: setCode1_package.abi,
        input: { newcode: code.codeBase64 },
        keyPair: keys,
    });

    const version2 = await contracts.run({
        address: deployed.address,
        functionName: 'getVersion',
        abi: setCode1_package.abi,
        input: { },
        keyPair: keys,
    });

    expect(version1).not.toEqual(version2);
});

test('testRunBody', async () => {
    const { contracts, crypto } = tests.client;

    const walletAddress = '0x2222222222222222222222222222222222222222222222222222222222222222';

    const result = await contracts.createRunBody({
        abi: SubscriptionContractPackage.abi,
        function: "constructor",
        params: {wallet: walletAddress},
        keyPair: walletKeys,
    });

    const parseResult = await contracts.decodeInputMessageBody({
        abi: SubscriptionContractPackage.abi,
        bodyBase64: result.bodyBase64,
    });

    expect(parseResult.function).toEqual('constructor');
    expect(parseResult.output).toEqual({wallet: walletAddress});

    const resultInternal = await contracts.createRunBody({
        abi: SubscriptionContractPackage.abi,
        function: "constructor",
        params: {wallet: walletAddress},
        internal: true,
    });

    const parseResultInternal = await contracts.decodeInputMessageBody({
        abi: SubscriptionContractPackage.abi,
        bodyBase64: resultInternal.bodyBase64,
        internal: true,
    });

    expect(parseResultInternal.function).toEqual('constructor');
    expect(parseResultInternal.output).toEqual({wallet: walletAddress});
});

test('Address conversion', async () => {
    const { contracts } = tests.client;

    const accountId = "fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260";
    const hex = "-1:fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260";
    const hexWorkchain0 = "0:fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260";
    const base64 = "Uf/8uRo6OBbQ97jCx2EIuKm8Wmt6Vb15+KsQHFLbKSMiYG+9";
    const base64_url = "kf_8uRo6OBbQ97jCx2EIuKm8Wmt6Vb15-KsQHFLbKSMiYIny";

    var convertedAddress = await contracts.convertAddress({
        address: accountId,
        convertTo: TONAddressStringVariant.Hex
    });
    expect(convertedAddress.address).toEqual(hexWorkchain0);

    convertedAddress = await contracts.convertAddress({
        address: hex,
        convertTo: TONAddressStringVariant.AccountId
    });
    expect(convertedAddress.address).toEqual(accountId);

    convertedAddress = await contracts.convertAddress({
        address: hex,
        convertTo: TONAddressStringVariant.Base64,
        base64Params: {
            test: false,
            bounce: false,
            url: false
        }
    });
    expect(convertedAddress.address).toEqual(base64);

    convertedAddress = await contracts.convertAddress({
        address: base64,
        convertTo: TONAddressStringVariant.Base64,
        base64Params: {
            test: true,
            bounce: true,
            url: true
        }
    });
    expect(convertedAddress.address).toEqual(base64_url);

    convertedAddress = await contracts.convertAddress({
        address: base64_url,
        convertTo: TONAddressStringVariant.Hex
    });
    expect(convertedAddress.address).toEqual(hex);
});
