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

import { TONAddressStringVariant } from '../src/modules/TONContractsModule';
import { SubscriptionContractPackage } from './contracts/SubscriptionContract';
import { WalletContractPackage } from "./contracts/WalletContract";

import { tests } from "./_/init-tests";

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
                    {"name":"goal","type":"bytes"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "transfer",
                "inputs": [
                    {"name":"to","type":"address"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "getGoal",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"bytes"}
                ]
            },
            {
                "name": "getTargetAmount",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint64"}
                ]
            }
        ],
        "events": [
        ],
        "data": [
            {"key":100,"name":"targetGoal","type":"bytes"},
            {"key":101,"name":"targetAmount","type":"uint64"}
        ]
    },
    imageBase64: 'te6ccgECMQEABt0AAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIo/wAgwAH0pCBYkvSg4YrtU1gw9KAbBwEK9KQg9KEIAgPNQBQJAgFiDQoCAUgMCwAHDDbMIAAnIBl7UdvEoBA9A6T0z/RkXDi2zCACASARDgIBIBAPABkgGTtR28SgED0a9swgAGE8BmAZe1HbxKAQPQOk9M/0ZFw4rzy4GUggGXtR28SgED0DpPTP9GRcOJwgQCA8AowgAgEgExIAiTtR28RbxDIy/+AZu1HbxKAQPRD7UcBb1LtVyHIyz+AZe1HbxKAQPRD7UcBb1LtVyCAZO1HbxKAQPRvMO1HAW9S7VdfAoADVP77AWRlY29kZV9hZGRyIPpAMvpCIG8QIHK6IXO6sfLgfSFvEW7y4H3IdM8LAiJvEs8KByJvEyJyupYjbxMizjKfIYEBACLXSaHPQDIgIs4y4v78AWRlY29kZV9hZGRyMCHJ0CVVQV8F2zCACASAaFQIBIBcWACmz/fYCzsrovsTC2MLcxsvwTt4htmECASAZGAA11/fgC5srcyL7K8Oi+2ubOQfBL8FHgIOH2AGEAI3X9+gLE6tLYyL7K8Oi+2ubPkOeeFgJDnizhnhYCRZ4WfuGeFj7hnhYAQZ5qSZ5i40F5LOOegEeeLyrjnoJHm8RBkgi+CbZhAClpX99gLCxr7o5MLc5szK5ZDlnoBFnhQA456B8FGeLEmeLEf0BOOegOH0BOH0BQCBnoHwR54WPuWegEGSRfYB/f4Cwsa+6OTC3ObMyuS+ytzIvgsACASAiHAHg//79AW1haW5fZXh0ZXJuYWwhjln+/AFnZXRfc3JjX2FkZHIg0CDTADJwvY4a/v0BZ2V0X3NyY19hZGRyMHDIydBVEV8C2zDgIHLXITEg0wAyIfpAM/79AWdldF9zcmNfYWRkcjEhIVUxXwTbMNgxIR0B+I51/v4BZ2V0X21zZ19wdWJrZXkgxwKOFv7/AWdldF9tc2dfcHVia2V5MXAx2zDg1SDHAY4X/v8BZ2V0X21zZ19wdWJrZXkycDEx2zDgIIECANch1wv/IvkBIiL5EPKo/v8BZ2V0X21zZ19wdWJrZXkzIANfA9sw2CLHArMeAcyUItQxM94kIiKOOP75AXN0b3JlX3NpZ28AIW+MIm+MI2+M7Uchb4ztRND0BW+MIO1X/v0Bc3RvcmVfc2lnX2VuZF8F2CLHAY4T/vwBbXNnX2lzX2VtcHR5XwbbMOAi0x80I9M/NSAfAXaOgNiOL/7+AW1haW5fZXh0ZXJuYWwyJCJVcV8I8UAB/v4BbWFpbl9leHRlcm5hbDNfCNsw4IB88vBfCCAB/v77AXJlcGxheV9wcm90cHBw7UTQIPQEMjQggQCA10WaINM/MjMg0z8yMpaCCBt3QDLiIiW5JfgjgQPoqCSgubCOKcgkAfQAJc8LPyLPCz8hzxYgye1U/vwBcmVwbGF5X3Byb3QyfwZfBtsw4P78AXJlcGxheV9wcm90M3AFXwUhAATbMAIBICgjAgFIJyQCAVgmJQAPtD9xA5htmEAAQbSRXi+YeBJkQQgskV4vwQhAAAAAWOeFj5DnhZ/4Cm2YQAA/uevhMqYeBHkQQgnr4TKwQhAAAAAWOeFj5DningKbZhACAUgsKQEJuHv3hvAqAf7+/QFjb25zdHJfcHJvdF8wcHCCCBt3QO1E0CD0BDI0IIEAgNdFjhQg0j8yMyDSPzIyIHHXRZSAe/Lw3t7IJAH0ACPPCz8izws/cc9BIc8WIMntVP79AWNvbnN0cl9wcm90XzFfBfgA0z/UMPAh/vwBcHVzaHBkYzd0b2M07UTQKwBK9AHI7UdvEgH0ACHPFiDJ7VT+/QFwdXNocGRjN3RvYzQwXwLbMAIBIC4tAFG3tvsKu1HbxFvEIBm7UdvEoBA9A6T0//RkXDiuvLgZPgA8CAw8CLbMIAHi2/79AW1haW5faW50ZXJuYWwhjln+/AFnZXRfc3JjX2FkZHIg0CDTADJwvY4a/v0BZ2V0X3NyY19hZGRyMHDIydBVEV8C2zDgIHLXITEg0wAyIfpAM/79AWdldF9zcmNfYWRkcjEhIVUxXwTbMNgkIXAvAeqOOP75AXN0b3JlX3NpZ28AIW+MIm+MI2+M7Uchb4ztRND0BW+MIO1X/v0Bc3RvcmVfc2lnX2VuZF8F2CLHAI4cIXC6jhIighBcfuIHVVFfBvFAAV8G2zDgXwbbMOD+/gFtYWluX2ludGVybmFsMSLTHzQicbowADaeIIAlVWFfB/FAAV8H2zDgIyFVYV8H8UABXwc=',
};

const stringToHex = (string) => {
    return Buffer.from(string).toString('hex');
};

const arrayToString = (array) => {
    return Buffer.from(array).toString();
};

const piggyBankParams = {
    amount: 123,
    goal: stringToHex('Some goal'),
};

test('piggyBank', async () => {
    const {crypto, contracts} = tests.client;
    // Learn dAppID
    const dAppID = '1001'; // Let's assume it's our dApp ID
    // Generate key pair
    const keys = await crypto.ed25519Keypair();
    // console.log('[PiggyBank] Wallet keys:', keys);
    // Deploy wallet
    const walletAddress = (await tests.deploy_with_giver({
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
    const piggyBankAddress = (await tests.deploy_with_giver({
        package: PiggyBankPackage,
        constructorParams: piggyBankParams,
        keyPair: keys,
    })).address;
    console.log('[PiggyBank] Piggy Bank address:', piggyBankAddress);

    // Deploy subscription
    const subscriptionParams = { wallet: `${walletAddress}` };
    const subscriptionAddress = (await tests.deploy_with_giver({
        package: SubscriptionContractPackage,
        constructorParams: subscriptionParams,
        keyPair: keys,
    })).address;
    console.log('[PiggyBank] Subscription address:', subscriptionAddress);

    // Set subscription account in the wallet
    const setSubscriptionInput = { addr: `${subscriptionAddress}` };
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
        to: `${piggyBankAddress}`,
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
