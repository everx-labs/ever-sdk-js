/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
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
import {DeployerPackage} from './contracts/DeployerContract';
import {DeployeePackage} from './contracts/DeployeeContract';
import { tests } from './_/init-tests';

beforeAll(tests.init);
afterAll(tests.done);

test.skip('Deploy data', async () => {
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

test('Deploy from contract 1', async () => {
    const { contracts, crypto, queries } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployer = await tests.deploy_with_giver({
        package: DeployerPackage,
        constructorParams: {},
        keyPair: keys,
    });

    await contracts.run({
        address: deployer.address,
        functionName: 'setContract',
        abi: DeployerPackage.abi,
        input: {
            _contract: DeployeePackage.imageBase64,
        },
        keyPair: keys,
    });

    const constuctor_id = await contracts.getFunctionId({
        abi: DeployeePackage.abi,
        function: 'constructor',
        input: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy',
        abi: DeployerPackage.abi,
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
        abi: DeployeePackage.abi,
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
        package: DeployerPackage,
        constructorParams: {},
        keyPair: keys,
    });

    const code = await contracts.getCodeFromImage({
        imageBase64: DeployeePackage.imageBase64,
    });

    await contracts.run({
        address: deployer.address,
        functionName: 'setCode',
        abi: DeployerPackage.abi,
        input: {
            _code: code.codeBase64,
        },
        keyPair: keys,
    });

    const deployData = await contracts.getDeployData({
        abi: DeployeePackage.abi,
        initParams: {
            param1: 1,
            param2: 2,
        },
        publicKeyHex: keys.public,
    });

    const constuctor_id = await contracts.getFunctionId({
        abi: DeployeePackage.abi,
        function: 'constructor',
        input: true,
    });

    const addressResult = await contracts.run({
        address: deployer.address,
        functionName: 'deploy2',
        abi: DeployerPackage.abi,
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
        abi: DeployeePackage.abi,
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
        package: DeployerPackage,
        constructorParams: {},
        keyPair: keys,
    });

    const deployData: TONContractGetDeployDataResult = await contracts.getDeployData({
        abi: DeployeePackage.abi,
        imageBase64: DeployeePackage.imageBase64,
        publicKeyHex: keys.public,
    });

    const address = `0:${deployData.accountId || ''}`;

    const runBody = await contracts.createRunBody({
        abi: DeployeePackage.abi,
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
        abi: DeployerPackage.abi,
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
        abi: DeployeePackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result.output)
        .toEqual({
            value0: '0x1',
            value1: '0x2',
        });
});
