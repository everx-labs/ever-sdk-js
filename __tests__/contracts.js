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
import { TONOutputEncoding } from "../src/modules/TONCryptoModule";
import { WalletContractPackage } from './contracts/WalletContract';
import { tests } from "./init-tests";

const nodeSe = true;

const nodeSeGiverAddress = 'ce709b5bfca589eb621b5a5786d0b562761144ac48f59e0b0d35ad0973bcdb86';
const nodeSeGiverAbi =
{
    "ABI version": 0,
    "functions": [{
        "name": "constructor",
        "inputs": [],
        "outputs": []
    }, {
        "name": "sendGrams",
        "inputs": [
            {"name":"dest","type":"uint256"},
            {"name":"amount","type":"uint64"}
        ],
        "outputs": []
    }]
};

const giverWalletAddressBase64 = 'UQCpkp34PRahe90/XlZ7QTLrrmkF9wruThldO9kd//N0uR1q';
const giverWalletAddressHex = 'a9929df83d16a17bdd3f5e567b4132ebae6905f70aee4e195d3bd91dfff374b9';

const giverWalletKeys = {
    public: '2245e4f44af8af6bbd15c4a53eb67a8f211d541ddc7c197f74d7830dba6d27fe',
    secret: 'd542f44146f169c6726c8cf70e4cbb3d33d8d842a4afd799ac122c5808d81ba3',
};

const GiverWalletPackage = {
    abi: {
        "ABI version": 0,
        "functions": [{
            "name": "constructor",
            "inputs": [
            ],
            "outputs": [
            ]
        }, {
            "name": "sendTransaction",
            "inputs": [
                {"name":"dest","type":"uint256"},
                {"name":"value","type":"uint128"},
                {"name":"bounce","type":"bool"}
            ],
            "outputs": [
            ]
        }, {
            "name": "setSubscriptionAccount",
            "inputs": [
                {"name":"addr","type":"uint256"}
            ],
            "outputs": [
            ]
        }, {
            "name": "getSubscriptionAccount",
            "inputs": [
            ],
            "outputs": [
                {"name":"value0","type":"uint256"}
            ]
        }]
    },
    imageBase64: 'te6ccgECYwEAC48AAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAGU/vgBc2VsZWN0b3L/APgAifQFIcMBjhWAIP7+AXNlbGVjdG9yX2ptcF8w9KCOG4Ag9A3ytIAg/vwBc2VsZWN0b3Jfam1w9KHyM+IHAQHACAIBIAoJABj/ghDQpq/w8AHc8AECAt5iCwEBIAwCASAoDQIBIBsOAgEgGA8CASAXEAIBIBYRAgEgExIAObSlygH/foC5srcyMrkvuDqxNbK89qO3iLeIbZhAAgFYFRQAV7FVCkv9/gLm6L7CxNK+3L7G3tzm6OWQQPGegmMEIVkCFNpDlj5iQZOgY7ZhAKOxwPCb/fwCzsrovtrmzr7g6sTWyvLgQ44FLOBiYuO2YRxSQ6pBjgMu4Ai+COO2YcBBAgQBBCCzYSEp4AJmQ/ICQERL8iBB5VC+COHFuEBiY7ZhADG2dvdKYBl7UTQ9AWAQPQOk9P/0ZFw4tswgADG5m5qhP99gLOyui+xMLYwtzGy/BO3iG2YQAgFqGhkAobQ0j0z/fwCxtDC3M7KvsLk5L7YytxDAEHpHSRjSSLhxEBFfRwpHCJARXlmQbhhSkBHAEHotmBm4c0+Rt1nNEZE40JJAEHoLGe9xEQIvgm2YQAD7tFNX+H9+gLawtLcvsrw6Mrk3MLYQwQhMLQXCeACqgJgYkMEIfXA8JvgAkWOBWcoRahiZ7xKSkZHBCAaCjzn4AJFjgMcS/34Atrmzr7S5r7K2uDo8tuQQkPoAGJBkmJB2qjg4OKq5L4RtmHARQQgIIWJR+ACQkLgquS+EbZhAAgEgJRwCASAkHQIBICEeAgFqIB8A3bGMhA8EIfqXKAfgAwDJ2omh6AsAgegdJ6f/oyLhxXUAy9qJoegLAIHoHSen/6Mi4cTha/97BCCjvMaf4AMAy9qJoegLAIHoHSen/6Mi4cV1YWPlwMhC4XpG4Wv/e2HlwMxEREThBCA0fw0R4AK+BwDBsV9zF/36AtrC0ty+0tzoyuTcwthDBCEwtBcJ4AKqAmBKSkThBCAaCjzn4AJFjgEcOkLhdT8EILj9xA7gQuCqxL4PtmHA4ODiqqS+DbZhwEUEICCFiUfgAkJC4KrkvhG2YQIBICMiAK216vw9/3+AsjK4Nje8r7G3tzo5MLG6ZDg4OBITODhBCCxNL0Z4AJBoEWcZELjnoJkQksEIFhx4DXgAmUEIfdVCkvgAkRDBCBYceA14AJmRZJA4fYAvg8AAkbRp1aaQ66SQEV9OkRFrgJoQEiqYr4JtmHAREOuMGhHqGpJotpqQaBASktDrjBlkEhDnGJCQ5xiQZOgYkBPrgJkQEirAr4TtmEAAcbmQIU2uPaiaHoDyLbvwCB6B3loPbjkZYBk6Dj2omh6A8i278AgegtkegBk9qoYQQgrTfTD+ADtmEAIBbicmAFG1sKtI/34AubK3Mi+yvDovtrmz/BL8FBEREUEIMv/0c/gAkDh9gC+CQACRtC0Fwn9+ALOyui+5uTGvsLIyORBoEGmAGRA4Xsy4ODgqkS+B7ZhwELjrkJkQ6YAZkWmAGhHABcEILNhISngAkRERKqkvg22YQAIBIEQpAgEgNSoCASAuKwIBIC0sAIG3VOVZ/78AXNlbmRfaW50X21zZ8hwcHAkJnFwghBYml6M8AEg0CLOMnAiywAyISWCECw48BrwATIhySBw+wBfB4AB9t5VviP++QFteV9wdWJrZXntRNAg9AQycCGAQPQO8uBkINP/MiHRbTL+/QFteV9wdWJrZXlfZW5kIARfBNswgAgEgMi8CAVgxMABEsr9Jsf79AWdldF9zZWxmX2FkZHL4KIALghBZsJCU8AHbMABashuG2TCCEPHb3SnwAchwzwsHghBsG4bZzwsfyCLPC//NydCCEJ9hVpHwAdswAgFYNDMANLI47GqBAQCCELDTq03wATCCEBigu/PwAdswAMKz/+jn/v0BYnVpbGRfZXh0X21zZ8hzIcsBMSEhzjFwIcsBMSIhyz8xcCHLHzFwIcsAMSDPNSTXSXGgISG8mXAjywAzJSPOM44QcSPLADPIJiHOMSDJJMw0MOIiyQZfBtswAgEgQzYCASA+NwIBIDs4AgFIOjkASbGEM4v9/ALmytzIvtLc6L7a5s6+ZOBCRwJOIQQg+qcqz+ACvgUADbD9xA5htmECAUg9PAAhsWEhKEJDrkJkQ6f+ZmJjtmEAv7E0vRnwUfBGSQQgE+1TKeACQaH98ALE6tLYyNrmz5DgQ5YAYkpDlgBiTEOWAGLgQ5YAYkhDnGJCQ5xiQFP0BGLgQ5YAYkBV9ARiQFf0BGJWQ5Z+YkZDlj5iQZIYvhm2YQIBIEI/AgEgQUAAdrKb6YeCEP1LlAPwAcjL/8nQgGTtRND0BYBA9BbI9ADJ7VRwtf/Iy//J0IBl7UTQ9AWAQPQWyPQAye1UAD6zvzye/voBc2VuZF9ncmFtc3AhIyWCEH1TlWfwAV8DAD+07zGn/38As7K6L7a5s6+5srcyMrl2o7eIt4ja/+2YQAC5uHMP1V/fgCyMrG3sjKvsLk5MLyQ44DLkOoZkGgZmG8Q6YCZkDjdeXAyEWmPmhH6AhqQQBB6R0kY0ki4cREQ3XlwMn9/gLIysbeyMq+wuTkwvK+3tZCTKqivg22YQAgEgU0UCASBLRgIBWEhHAHW0CcSIEMAQekdJGNJIuHE4RxAQEVzZkG4YERCSwBB6B0iYy+Q4AWeA5OhxEBNnGxhSOHMYEYIvgm2YQAIBSEpJADewI8/pkEpCR54CYkGToGJASkpL6CxoRgy+DbZhAFuwa7cJAgIBBCFhp1ab4AMCAQEEIWGnVpvgAuMEICKb7RXgAmEEIXuMhA/gA7ZhAgEgUkwCASBQTQIDihhPTgBzqR4DX9+ALm6N7kyr7K0ujQyuRDnmpDrpLjQEJDeTLgSZYAaERJnGk04kmWAGhESZ4sacRGCL4JtmEAAvqcFgH9+gLOyui+5MLcyL7mysrJ8E22YQAf+0yHQpkOhkOBFpj5oRZY+ZEWmAGhiQEWWAGRA43UwRaYCaEWWAmW8RaYAaGJARZYAZEDjdTRFqGhBoEeeLGZhvEWmAGhiQEWWAGRA43XlwMjhkGJIQ5f+YkGToEmobaBB6AhkROBFAIHoLGOQaEBJ6ABoTaYAcGpITZYAbEjjdQFEAJpom1Dgg0CfPFjcw3iXJCV8J2zAAPbe3gR4/v8BZ2V0X21zZ19iYWxhbmNl7UdvEW8S2zCACASBdVAIBIFpVAgFIWVYCASBYVwBlsBBOef34Asrcxt7Iyr7C5OTC8uJHlgJmQwBB6R0kY0ki4cRASZY+aERJ6ABoRgi+CbZhAIOwfw0R/fYCwsa+6OTC3ObMyuWQ4ODgTFBO4QQgsTS9GeACQaBFnGTgRZYAZZGToERDBCBYceA14AJmRZJAS/YAvhEAdLKgu/OCEP1LlAPwAYBk7UTQ9AWAQPQOk9P/0ZFw4rry4GQgyMv/ydCAZe1E0PQFgED0Fsj0AMntVDACAWJcWwCPsJvtFEOukkBFfTpERa4AaEBIqmK+CbZhwERDrjBoR6hqSaLaakGgQEpLQ64wZZBIQ5xiQkOcYkGToGJAT64AZEBIqwK+E7ZhADGwhYlGQaYOZEDhdeVuQ6Y+ZkRCqkK+B7ZhAgFYYV4CAUhgXwCHsAo85/3+Aubo3uTKvubSztzC6Orkyt4AQETfGGJARt8YYkBI3xhj2o5ARN8YYkHar/38Aubo3uTKvubSzty+ytzIvg0AVbDgMiRERa4waEeoakmi2mpBoGpIR64wbZBGQ5xiQkOcYkGToE6qwr4PtmEAXbT7VMp/fgCmubOgsjIktzovmJhkORDlgJi4EOWAGLgQ5YOYkJDl/5iQZJiY7ZhAABsghC8r7mL8AHc8AHbMIA==',
};


async function check_giver() {
    const ton = tests.client;

    const deployMsg = await ton.contracts.createDeployMessage({
        package: GiverWalletPackage,
        constructorParams: {},
        keyPair: giverWalletKeys,
    });

    const accounts = await ton.queries.accounts.query({
        id: { eq: deployMsg.address }
    }, `
        storage {
            state {
                balance { Grams }
                ...on AccountStorageStateAccountActiveVariant {
                    AccountActive { split_depth } 
                }
            }
        }
    `);

    if (accounts.length === 0) {
        throw "Giver wallet does not exist. Send some grams to" + giverWalletAddressBase64 + "(" + deployMsg.address + ")"
    }

    if (!(accounts[0]["storage"]["balance"]["Grams"]) || parseInt(accounts[0]["storage"]["balance"]["Grams"], 10) < 10000000000) {
        throw "Giver has no money. Send some grams to" + giverWalletAddressBase64 + "(" + deployMsg.address + ")"
    }

    if (!(accounts[0].storage.state.AccountActive)) {
        console.log('No giver. Deploy');
        const base64Msg = Buffer.from(giverDeployMsg, 'hex').toString('base64');

        const transaction = await ton.contracts.processMessage(
            deployMsg,
            'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }',
        );
        const ordinary = transaction.description.Ordinary;
        if (ordinary.aborted) {
            throw {
                code: 3050,
                message: 'Deploy failed',
            };
        }
        console.log('Giver deployed');
    }
}

export default async function get_grams_from_giver(account) {
    const { contracts, queries } = tests.client;

    if (nodeSe) {
        const result = await contracts.run({
            address: nodeSeGiverAddress,
            functionName: 'sendGrams',
            abi: nodeSeGiverAbi,
            input: {
                dest: `0x${account}`,
                amount: 10000000000
            },
            keyPair: null,
        });
    } else {
        await check_giver();
        const result = await contracts.run({
            address: giverWalletAddressHex,
            functionName: 'sendGrams',
            abi: nodeSeGiverAbi,
            input: {
                dest: `0x${account}`,
                amount: 10000000000
            },
            keyPair: null,
        });
    }


    const wait = await queries.accounts.waitFor(
        {
            id: { eq: account },
            storage: {
                balance: {
                    Grams: { gt: "0" }
                }
            }
        },
		'id storage {balance {Grams}}'
    );
};

beforeAll(tests.init);
afterAll(tests.done);

const walletKeys = {
    public: 'fb98b2541ba805648f25eb469dd4766fcdde03a2cfe6fb41d8c1571c29407ca3',
    secret: '7bfe77bbd3ad57ada9ed323da83504723e3af7cd3ba68b02d3c8335f75e0a24e',
};

const walletAddress = 'adb63a228837e478c7edf5fe3f0b5d12183e1f22246b67712b99ec538d6c5357';

test('load', async () => {
    const { contracts } = tests.client;
    const contract = await contracts.load({
        address: '0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF',
        includeImage: false,
    });
    expect(contract.id).toBeNull();
    expect(contract.balanceGrams).toBeNull();

    await get_grams_from_giver(walletAddress);

    const w = await contracts.load({
        address: walletAddress,
        includeImage: false,
    });
    expect(w.id).toEqual(walletAddress);
    expect(Number.parseInt(w.balanceGrams)).toBeGreaterThan(0);
});

test('deploy_new', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });

    await get_grams_from_giver(message.address);

    await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });
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

test('decodeInputMessageBody', async () => {
    const { contracts } = tests.client;
    const body = 'te6ccoEBAgEAcwARcwEbACfvUIcBgJTr3AOCAGABAMDr2GubWXYR6wuk6WFn4btjW3w+DbidhSrKArHbqCaunLGN9LwAbQFT9kyOpN6DR6DJbuKkvC94KwJgan7xeTUHS89H/vKbWZbzZEHu4euhqvQE2I9aW+PNdn2BKZJXlA4=';

    const result = await contracts.decodeInputMessageBody({
        abi: WalletContractPackage.abi,
        bodyBase64: body
    });

    expect(result.function).toEqual('createLimit');
    expect(result.output).toEqual({ type: "0x1", value: "0x3b9aca00", meta: "x01" });
});
*/
const events_package: TONContractPackage = {
    abi: {
        'ABI version': 0,
        functions: [{
            name: 'constructor',
            inputs: [],
            outputs: []
        }, {
            name: 'emitValue',
            inputs: [
                { name: 'id', type: 'uint256' }
            ],
            outputs: []
        }, {
            name: 'returnValue',
            inputs: [
                { name: 'id', type: 'uint256' }
            ],
            outputs: [
                { name: 'value0', type: 'uint256' }
            ]
        }],
        events: [{
            name: 'EventThrown',
            inputs: [
                { name: 'id', type: 'uint256' }
            ]
        }]
    },
    imageBase64: "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"
};

test('filterOutput', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: events_package,
        constructorParams: {},
        keyPair: keys,
    });

    await get_grams_from_giver(message.address);

    const deployed = await contracts.deploy({
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
    expect(JSON.stringify(resultReturn)).toEqual(`{"output":{"value0":"0x0"}}`);
});

test('External Signing', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();
    const deployParams = {
        package: events_package,
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
