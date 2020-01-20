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

/* eslint-disable no-bitwise */

import { tests } from "./_/init-tests";
import { SubscriptionContractPackage } from "./contracts/SubscriptionContract";
import { exportAllDeclaration } from "@babel/types";

beforeAll(tests.init);
afterAll(tests.done);

test("RunLocal", async () => {
    const ton = tests.client;
    const keys = await ton.crypto.ed25519Keypair();
    console.log(`Keys: ${JSON.stringify(keys)}`);

    const walletAddress = '0:2222222222222222222222222222222222222222222222222222222222222222';

    // Deploy custom contract
    const { address: packageAddress } = (await tests.deploy_with_giver({
        package: SubscriptionContractPackage,
        constructorParams: {
            wallet: walletAddress,
        },
        keyPair: keys,
    }));

    console.log(`Contract address: ${packageAddress}`);

    // Get the returned value with runLocal
    const runLocalResponse = await ton.contracts.runLocal({
        address: packageAddress,
        abi: SubscriptionContractPackage.abi,
        functionName: 'getWallet',
        input: {},
        keyPair: keys,
    });

    console.log(`Get (runLocal): ${JSON.stringify(runLocalResponse)}`);

    expect(runLocalResponse.output).toEqual({
            value0: "0:2222222222222222222222222222222222222222222222222222222222222222"
    });
});
