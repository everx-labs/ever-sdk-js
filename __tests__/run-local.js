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

import { tests } from "./init-tests";
import get_grams_from_giver from './contracts';
import { SubscriptionContractPackage } from "./contracts/SubscriptionContract";

beforeAll(tests.init);
afterAll(tests.done);

test("RunLocal", async () => {
    const ton = tests.client;
    const keys = await ton.crypto.ed25519Keypair();
    console.log(`Keys: ${JSON.stringify(keys)}`);

    const walletAddress = '0x2222222222222222222222222222222222222222222222222222222222222222';

    // Deploy custom contract
    const deployMessage = await ton.contracts.createDeployMessage({
        package: SubscriptionContractPackage,
        constructorParams: {
            wallet: walletAddress,
        },
        keyPair: keys,
    });
    await get_grams_from_giver(deployMessage.address);

    const { address: packageAddress } = (await ton.contracts.deploy({
        package: SubscriptionContractPackage,
        constructorParams: {
            wallet: walletAddress,
        },
        keyPair: keys,
    }));

    console.log(`Contract address: ${packageAddress}`);

    // Get the returned value with run
    const runResponse = await ton.contracts.run({
        address: packageAddress,
        abi: SubscriptionContractPackage.abi,
        functionName: 'getWallet',
        input: {},
        keyPair: keys,
    });

    console.log(`Get (run): ${JSON.stringify(runResponse)}`);

    // Get the returned value with runLocal
    const runLocalResponse = await ton.contracts.runLocal({
        address: packageAddress,
        abi: SubscriptionContractPackage.abi,
        functionName: 'getWallet',
        input: {},
        keyPair: keys,
    });

    console.log(`Get (runLocal): ${JSON.stringify(runResponse)}`);

    expect(runResponse).toEqual(runLocalResponse);
});
