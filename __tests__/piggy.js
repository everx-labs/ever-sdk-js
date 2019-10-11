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

/* eslint-disable no-bitwise */

import { SubscriptionContractPackage } from './contracts/SubscriptionContract';
import { WalletContractPackage } from "./contracts/WalletContract";
import get_grams_from_giver from './contracts';

import { tests } from "./init-tests";

beforeAll(tests.init);
afterAll(tests.done);

const PiggyBankPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {"name":"amount","type":"uint64"},
                    {"name":"goal","type":"uint8[]"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "getGoal",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint8[]"}
                ]
            },
            {
                "name": "getTargetAmount",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint64"}
                ]
            },
            {
                "name": "transfer",
                "inputs": [
                    {"name":"to","type":"uint256"}
                ],
                "outputs": [
                ]
            }
        ],
        "events": [
        ],
        "data": [
            {"key":100,"name":"targetGoal","type":"uint8[]"},
            {"key":101,"name":"targetAmount","type":"uint64"}
        ]
    },
    imageBase64: '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',
};

const stringToArray = (string) => {
    return Array.from(new Uint8Array(Buffer.alloc(string.length, string).buffer));
};

const arrayToString = (array) => {
    return Buffer.from(array).toString();
};

const piggyBankParams = {
    amount: 123,
    goal: stringToArray('Some goal'),
};

test('piggyBank', async () => {
    const {crypto, contracts} = tests.client;
    // Learn dAppID
    const dAppID = '1001'; // Let's assume it's our dApp ID
    // Generate key pair
    const keys = await crypto.ed25519Keypair();
    // console.log('[PiggyBank] Wallet keys:', keys);
    // Deploy wallet
    const walletMessage = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys
    });
    await get_grams_from_giver(walletMessage.address);

    const walletAddress = (await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys
    })).address;
    // console.log('[PiggyBank] Wallet address:', walletAddress);
    // Get wallet version
    /*const version = await contracts.run({
        address: walletAddress,
        abi: WalletContractPackage.abi,
        functionName: 'getVersion',
        input: {},
        keyPair: keys,
    });*/
    // console.log('[PiggyBank] Wallet version:', version);

    // Deploy piggy bank
    const piggyMessage = await contracts.createDeployMessage({
        package: PiggyBankPackage,
        constructorParams: piggyBankParams,
        keyPair: keys,
    });
    await get_grams_from_giver(piggyMessage.address);

    const piggyBankAddress = (await contracts.deploy({
        package: PiggyBankPackage,
        constructorParams: piggyBankParams,
        keyPair: keys,
    })).address;
     console.log('[PiggyBank] Piggy Bank address:', piggyBankAddress);


    // Deploy subscription
    const subscriptionParams = { wallet: `0x${walletAddress}` };

    const subscriptionMessage = await contracts.createDeployMessage({
        package: SubscriptionContractPackage,
        constructorParams: subscriptionParams,
        keyPair: keys,
    });
    await get_grams_from_giver(subscriptionMessage.address);

    const subscriptionAddress = (await contracts.deploy({
        package: SubscriptionContractPackage,
        constructorParams: subscriptionParams,
        keyPair: keys,
    })).address;
     console.log('[PiggyBank] Subscription address:', subscriptionAddress);


    // Set subscription account in the wallet
    const setSubscriptionInput = { addr: `0x${subscriptionAddress}` };
    const setSubscriptionResponse = await contracts.run({
        address: walletAddress,
        abi: WalletContractPackage.abi,
        functionName: 'setSubscriptionAccount',
        input: setSubscriptionInput,
        keyPair: keys,
    });
     console.log('[PiggyBank] Set subscription response:', setSubscriptionResponse);


    const getSubscriptionResponse = await contracts.runLocal({
        address: walletAddress,
        abi: WalletContractPackage.abi,
        functionName: 'getSubscriptionAccount',
        input: {},
    });
    console.log('[PiggyBank] Get subscription response:', getSubscriptionResponse);


    // Call subscribe in subscription
    const subscriptionId = (await crypto.sha512({ text: dAppID })).slice(0, 64);
    // console.log('[PiggyBank] Subscription ID:', subscriptionId);
    const subscribeInput = {
        subscriptionId: `0x${subscriptionId}`,
        pubkey: `0x${keys.public}`,
        to: `0x${piggyBankAddress}`,
        value: 123,
        period: 1,
    };
    const subscribeResponse = await contracts.run({
        address: subscriptionAddress,
        abi: SubscriptionContractPackage.abi,
        functionName: 'subscribe',
        input: subscribeInput,
        keyPair: keys,
    });
    // console.log('[PiggyBank] Subscribe response:', subscribeResponse);
});
