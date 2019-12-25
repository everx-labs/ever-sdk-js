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
import { tests } from './_/init-tests';

beforeAll(tests.init);
afterAll(tests.done);

test('Deploy data', async () => {
    const { contracts } = tests.client;

    const publicKey = '1111111111111111111111111111111111111111111111111111111111111111';
    const subscriptionAddess = '0:2222222222222222222222222222222222222222222222222222222222222222';

    const resultKey = await contracts.getDeployData({
        publicKeyHex: publicKey,
    });

    // console.log(resultKey);
    expect(resultKey)
        .toEqual(
            {
                imageBase64: null,
                accountId: null,
                dataBase64: 'te6ccgEBAgEAKAABAcABAEPQBERERERERERERERERERERERERERERERERERERERERERg',
            },
        );

    const resultImageKey = await contracts.getDeployData({
        imageBase64: WalletContractPackage.imageBase64,
        publicKeyHex: publicKey,
    });

    // console.log(resultImageKey);
    expect(resultImageKey)
        .toEqual(
            {
                imageBase64: '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',
                accountId: 'efd31b70c381a77ab69ef9b8f67bdf07cd57849e6c1e5cafca4d8b78a1c9ea47',
                dataBase64: 'te6ccgEBBQEANQABAcABAgPPIAQCAQHeAwAD0CAAQdiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjA==',
            },
        );

    const resultInitKey = await contracts.getDeployData({
        abi: WalletContractPackage.abi,
        initParams: {
            subscription: subscriptionAddess,
            owner: `0x${publicKey}`,
        },
        publicKeyHex: publicKey,
    });

    // console.log(resultInitKey);
    expect(resultInitKey)
        .toEqual(
            {
                imageBase64: null,
                accountId: null,
                dataBase64: 'te6ccgEBBgEAegABAcABAgPOYAUCAgOsoAQDAEMgAREREREREREREREREREREREREREREREREREREREREREUAEEERERERERERERERERERERERERERERERERERERERERERGAAQdhERERERERERERERERERERERERERERERERERERERERERg==',
            },
        );

    const resultAll = await contracts.getDeployData({
        abi: WalletContractPackage.abi,
        initParams: {
            subscription: subscriptionAddess,
            owner: `0x${publicKey}`,
        },
        imageBase64: WalletContractPackage.imageBase64,
        publicKeyHex: publicKey,
    });


    expect(resultAll)
        .toEqual(
            {
                imageBase64: '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',
                accountId: 'ac43582c425a82f98e47e449e646099aa15d20cb6f73926658d73706812a4c3d',
                dataBase64: 'te6ccgEBCQEAhwABAcABAgPOYAUCAgOsoAQDAEMgAREREREREREREREREREREREREREREREREREREREREREUAEEERERERERERERERERERERERERERERERERERERERERERGACAWIIBgEB3gcAA9AgAEHYiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIw=',
            },
        );
});

const deployer_package: TONContractPackage = {
    abi: {
        'ABI version': 1,
        functions: [
            {
                name: 'setContract',
                inputs: [
                    {
                        name: '_contract',
                        type: 'cell',
                    },
                ],
                outputs: [],
            },
            {
                name: 'deploy',
                inputs: [
                    {
                        name: 'pubkey',
                        type: 'uint256',
                    },
                    {
                        name: 'gram',
                        type: 'uint128',
                    },
                    {
                        name: 'constuctor_id',
                        type: 'uint256',
                    },
                    {
                        name: 'constuctor_param0',
                        type: 'uint32',
                    },
                    {
                        name: 'constuctor_param1',
                        type: 'uint256',
                    },
                ],
                outputs: [
                    {
                        name: 'value0',
                        type: 'address',
                    },
                ],
            },
            {
                name: 'setCode',
                inputs: [
                    {
                        name: '_code',
                        type: 'cell',
                    },
                ],
                outputs: [],
            },
            {
                name: 'deploy2',
                inputs: [
                    {
                        name: 'data',
                        type: 'cell',
                    },
                    {
                        name: 'gram',
                        type: 'uint128',
                    },
                    {
                        name: 'constuctor_id',
                        type: 'uint256',
                    },
                    {
                        name: 'constuctor_param0',
                        type: 'uint32',
                    },
                    {
                        name: 'constuctor_param1',
                        type: 'uint256',
                    },
                ],
                outputs: [
                    {
                        name: 'value0',
                        type: 'address',
                    },
                ],
            },
            {
                name: 'deploy3',
                inputs: [
                    {
                        name: 'contr',
                        type: 'cell',
                    },
                    {
                        name: 'addr',
                        type: 'address',
                    },
                    {
                        name: 'grams',
                        type: 'uint128',
                    },
                    {
                        name: 'payload',
                        type: 'cell',
                    },
                ],
                outputs: [
                    {
                        name: 'value0',
                        type: 'address',
                    },
                ],
            },
            {
                name: 'constructor',
                inputs: [],
                outputs: [],
            },
        ],
        events: [],
        data: [],
    },
    imageBase64: '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',
};

const deployee_package: TONContractPackage = {
    abi: {
        'ABI version': 1,
        functions: [
            {
                name: 'constructor',
                inputs: [
                    {
                        name: '_param1',
                        type: 'uint32',
                    },
                    {
                        name: '_param2',
                        type: 'uint256',
                    },
                ],
                outputs: [],
            },
            {
                name: 'get',
                inputs: [],
                outputs: [
                    {
                        name: 'value0',
                        type: 'uint32',
                    },
                    {
                        name: 'value1',
                        type: 'uint256',
                    },
                ],
            },
        ],
        events: [],
        data: [
            {
                key: 100,
                name: 'param1',
                type: 'uint32',
            },
            {
                key: 101,
                name: 'param2',
                type: 'uint256',
            },
        ],
    },
    imageBase64: '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',
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

    const address = addressResult.output.value0;

    await queries.accounts.waitFor({
        id: { eq: address },
        balance: { gt: '0' },
    }, 'id balance');

    const result = await contracts.run({
        address,
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output)
        .toEqual({
            value0: '0x1',
            value1: '0x2',
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
        imageBase64: deployee_package.imageBase64,
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
            param2: 2,
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

    const address = addressResult.output.value0;

    await queries.accounts.waitFor(
        {
            id: { eq: address },
            balance: { gt: '0' },
        },
        'id balance',
    );

    const result = await contracts.run({
        address,
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output)
        .toEqual({
            value0: '0x1',
            value1: '0x2',
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

    const address = `0:${deployData.accountId || ''}`;

    const runBody = await contracts.createRunBody({
        abi: deployee_package.abi,
        function: 'constructor',
        params: {
            _param1: 1,
            _param2: 2,
        },
        internal: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy3',
        abi: deployer_package.abi,
        input: {
            contr: deployData.imageBase64,
            addr: address,
            grams: 300000000,
            payload: runBody.bodyBase64,
        },
        keyPair: keys,
    });

    expect(addressResult.output.value0)
        .toEqual(address);

    await queries.accounts.waitFor(
        {
            id: { eq: address },
            balance: { gt: '0' },
        },
        'id balance',
    );

    const result = await contracts.run({
        address,
        functionName: 'get',
        abi: deployee_package.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output)
        .toEqual({
            value0: '0x1',
            value1: '0x2',
        });
});
