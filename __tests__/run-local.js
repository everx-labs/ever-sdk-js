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

beforeAll(tests.init);
afterAll(tests.done);

const Package = {
    abi: {
        "ABI version": 0,
        "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "_scale", "type": "uint8" }
            ],
            "outputs": []
        }, {
            "name": "get_scale",
            "inputs": [],
            "outputs": [
                { "name": "value0", "type": "uint8" }
            ]
        }, {
            "name": "set_quote",
            "inputs": [
                { "name": "currency_pair_id", "type": "uint256" },
                { "name": "timestamp", "type": "uint256" },
                { "name": "price", "type": "uint256" }
            ],
            "outputs": []
        }, {
            "name": "get_quote",
            "inputs": [
                { "name": "currency_pair_id", "type": "uint256" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint256" },
                { "name": "value1", "type": "uint256" }
            ]
        }]
    },
    imageBase64: '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',
};


test("RunLocal", async () => {
    const ton = tests.client;
    const keys = await ton.crypto.ed25519Keypair();
    console.log(`Keys: ${JSON.stringify(keys)}`);

    // Deploy custom contract
    const deployMessage = await ton.contracts.createDeployMessage({
        package: Package,
        constructorParams: {
            _scale: 8,
        },
        keyPair: keys,
    });
    await get_grams_from_giver(deployMessage.address);

    const { address: packageAddress } = (await ton.contracts.deploy({
        package: Package,
        constructorParams: {
            _scale: 8,
        },
        keyPair: keys,
    }));

    console.log(`Contract address: ${packageAddress}`);

    // Call method
    const setQuoteResponse = await ton.contracts.run({
        address: packageAddress,
        abi: Package.abi,
        functionName: 'set_quote',
        input: {
            currency_pair_id: 1,
            timestamp: 2,
            price: 3,
        },
        keyPair: keys,
    });

    console.log(setQuoteResponse);

    // Get the returned value with run
    const getQuoteRunResponse = await ton.contracts.run({
        address: packageAddress,
        abi: Package.abi,
        functionName: 'get_quote',
        input: {
            currency_pair_id: 1,
        },
        keyPair: keys,
    });

    console.log(`Get quote (run): ${JSON.stringify(getQuoteRunResponse)}`);

    // Get the returned value with runLocal
    const getQuoteRunLocalResponse = await ton.contracts.runLocal({
        address: packageAddress,
        abi: Package.abi,
        functionName: 'get_quote',
        input: {
            currency_pair_id: 1,
        },
        keyPair: keys,
    });

    console.log(`Get quote (runLocal): ${JSON.stringify(getQuoteRunLocalResponse)}`);

});
