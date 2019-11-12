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


import type { TONContractGetDeployDataResult, TONContractPackage } from '../types';
import { WalletContractPackage } from './contracts/WalletContract';
import { tests } from "./_/init-tests";

declare function BigInt(a: any): any;

beforeAll(tests.init);
afterAll(tests.done);

test('Deploy data', async () => {
    const { contracts } = tests.client;

    const publicKey = '1111111111111111111111111111111111111111111111111111111111111111';
    const subscriptionAddess = '0:2222222222222222222222222222222222222222222222222222222222222222';

    const resultKey = await contracts.getDeployData({
        publicKeyHex: publicKey,
    });

    //console.log(resultKey);
    expect(resultKey).toEqual(
        {
            imageBase64: null,
            accountId: null,
            dataBase64: 'te6ccgEBAgEAKAABAcABAEPQBERERERERERERERERERERERERERERERERERERERERERg'
        }
    );

    const resultImageKey = await contracts.getDeployData({
        imageBase64: WalletContractPackage.imageBase64,
        publicKeyHex: publicKey,
    });

    //console.log(resultImageKey);
    expect(resultImageKey).toEqual(
        {
            imageBase64: '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',
            accountId: '16c81b0bc7d7773e02a5baed5e217459b896b066fb8f95aae1fd669ce72f36c5',
            dataBase64: 'te6ccgEBBQEANQABAcABAgPPIAQCAQHeAwAD0CAAQdiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjA=='
        }
    );

    const resultInitKey = await contracts.getDeployData({
        abi: WalletContractPackage.abi,
        initParams: {
            subscription: subscriptionAddess,
            owner: "0x" + publicKey
        },
        publicKeyHex: publicKey,
    });

    //console.log(resultInitKey);
    expect(resultInitKey).toEqual(
        {
            imageBase64: null,
            accountId: null,
            dataBase64: 'te6ccgEBBgEAegABAcABAgPOYAUCAgOsoAQDAEMgAREREREREREREREREREREREREREREREREREREREREREUAEEERERERERERERERERERERERERERERERERERERERERERGAAQdhERERERERERERERERERERERERERERERERERERERERERg=='
        }
    );

    const resultAll = await contracts.getDeployData({
        abi: WalletContractPackage.abi,
        initParams: {
            subscription: subscriptionAddess,
            owner: "0x" + publicKey
        },
        imageBase64: WalletContractPackage.imageBase64,
        publicKeyHex: publicKey,
    });

    //console.log(resultAll);
    expect(resultAll).toEqual(
        {
            imageBase64: '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',
            accountId: "6195d78a0aae01af3584df743d3b2b08ceeff2a4e624a39d5b67fe1da8f5eb26",
            dataBase64: 'te6ccgEBCQEAhwABAcABAgPOYAUCAgOsoAQDAEMgAREREREREREREREREREREREREREREREREREREREREREUAEEERERERERERERERERERERERERERERERERERERERERERGACAWIIBgEB3gcAA9AgAEHYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIw='
        }
    );
});

const deployer_package: TONContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "setContract",
                "inputs": [
                    { "name": "_contract", "type": "cell" }
                ],
                "outputs": []
            },
            {
                "name": "deploy",
                "inputs": [
                    { "name": "pubkey", "type": "uint256" },
                    { "name": "gram", "type": "uint128" },
                    { "name": "constuctor_id", "type": "uint256" },
                    { "name": "constuctor_param0", "type": "uint32" },
                    { "name": "constuctor_param1", "type": "uint256" }
                ],
                "outputs": [
                    { "name": "value0", "type": "uint256" }
                ]
            },
            {
                "name": "setCode",
                "inputs": [
                    { "name": "_code", "type": "cell" }
                ],
                "outputs": []
            },
            {
                "name": "deploy2",
                "inputs": [
                    { "name": "data", "type": "cell" },
                    { "name": "gram", "type": "uint128" },
                    { "name": "constuctor_id", "type": "uint256" },
                    { "name": "constuctor_param0", "type": "uint32" },
                    { "name": "constuctor_param1", "type": "uint256" }
                ],
                "outputs": [
                    { "name": "value0", "type": "uint256" }
                ]
            },
            {
                "name": "deploy3",
                "inputs": [
                    { "name": "contr", "type": "cell" },
                    { "name": "addr", "type": "uint256" },
                    { "name": "grams", "type": "uint128" },
                    { "name": "payload", "type": "cell" }
                ],
                "outputs": [
                    { "name": "value0", "type": "uint256" }
                ]
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "events": [],
        "data": []
    }
    ,
    imageBase64: "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"
};

const deployee_package: TONContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    { "name": "_param1", "type": "uint32" },
                    { "name": "_param2", "type": "uint256" }
                ],
                "outputs": []
            },
            {
                "name": "get",
                "inputs": [],
                "outputs": [
                    { "name": "value0", "type": "uint32" },
                    { "name": "value1", "type": "uint256" }
                ]
            }
        ],
        "events": [],
        "data": [
            { "key": 100, "name": "param1", "type": "uint32" },
            { "key": 101, "name": "param2", "type": "uint256" }
        ]
    },
    imageBase64: "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"
};

const addr = (s: string): string  => {
    let a = s.startsWith('0x') || s.startsWith('0X') ? s.substr(2) : s;
    a = `${'0'.repeat(64 - a.length)}${a}`;
    return a.includes(':') ? a : `0:${a}`;
};

test('Deploy from contract 1', async () => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployer = await tests.deploy_with_giver({
        package: deployer_package,
        constructorParams: {},
        keyPair: keys,
    });

    await contracts.run({
        address: deployer.address,
        functionName: 'setContract',
        abi: deployer_package.abi,
        input: {
            _contract: deployee_package.imageBase64,
        },
        keyPair: keys,
    });

    const constuctor_id = await contracts.getFunctionId({
        abi: deployee_package.abi,
        function: 'constructor',
        input: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy',
        abi: deployer_package.abi,
        input: {
            pubkey: `0x${keys.public}`,
            gram: 300000000,
            constuctor_id: constuctor_id.id,
            constuctor_param0: 1,
            constuctor_param1: 2,
        },
        keyPair: keys,
    });

    const address = addr(addressResult.output.value0);

    await queries.accounts.waitFor({
        id: { eq: address },
        balance: { gt: "0" }
    }, 'id balance');

    const result = await contracts.run({
        address: address,
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output).toEqual({
        value0: '0x1',
        value1: '0x2'
    });
});

test('Deploy from contract 2', async () => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployer = await tests.deploy_with_giver({
        package: deployer_package,
        constructorParams: {},
        keyPair: keys,
    });

    const code = await contracts.getCodeFromImage({
        imageBase64: deployee_package.imageBase64
    });

    await contracts.run({
        address: deployer.address,
        functionName: 'setCode',
        abi: deployer_package.abi,
        input: {
            _code: code.codeBase64,
        },
        keyPair: keys,
    });

    const deployData = await contracts.getDeployData({
        abi: deployee_package.abi,
        initParams: {
            param1: 1,
            param2: 2
        },
        publicKeyHex: keys.public,
    });

    const constuctor_id = await contracts.getFunctionId({
        abi: deployee_package.abi,
        function: 'constructor',
        input: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy2',
        abi: deployer_package.abi,
        input: {
            data: deployData.dataBase64,
            gram: 300000000,
            constuctor_id: constuctor_id.id,
            constuctor_param0: 1,
            constuctor_param1: 2,
        },
        keyPair: keys,
    });

    const address = addr(addressResult.output.value0);

    await queries.accounts.waitFor(
        {
            id: { eq: address },
            balance: { gt: "0" }
        },
        'id balance'
    );

    const result = await contracts.run({
        address: address,
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output).toEqual({
        value0: '0x1',
        value1: '0x2'
    });
});

test('Deploy from contract 3', async () => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployer = await tests.deploy_with_giver({
        package: deployer_package,
        constructorParams: {},
        keyPair: keys,
    });

    const deployData: TONContractGetDeployDataResult = await contracts.getDeployData({
        abi: deployee_package.abi,
        imageBase64: deployee_package.imageBase64,
        publicKeyHex: keys.public,
    });

    const runBody = await contracts.createRunBody({
        abi: deployee_package.abi,
        function: "constructor",
        params: {
            _param1: 1,
            _param2: 2
        },
        internal: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy3',
        abi: deployer_package.abi,
        input: {
            contr: deployData.imageBase64,
            addr: `0x${deployData.accountId || ''}`,
            grams: 300000000,
            payload: runBody.bodyBase64,
        },
        keyPair: keys,
    });

    const address = addr(addressResult.output.value0);

    expect(BigInt(addressResult.output.value0)).toEqual(BigInt(`0x${deployData.accountId || ''}`));

    await queries.accounts.waitFor(
        {
            id: { eq: address },
            balance: { gt: "0" }
        },
        'id balance'
    );

    const result = await contracts.run({
        address: deployData.accountId || '',
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output).toEqual({
        value0: '0x1',
        value1: '0x2'
    });
});
