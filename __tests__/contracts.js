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
import { tests, nodeSe } from "./init-tests";

const nodeSeGiverAddress = 'a46af093b38fcae390e9af5104a93e22e82c29bcb35bf88160e4478417028884';
const nodeSeGiverAbi =
{
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
			"name": "sendGrams",
			"inputs": [
				{"name":"dest","type":"uint256"},
				{"name":"amount","type":"uint64"}
			],
			"outputs": [
			]
		}
	],
	"events": [
	],
	"data": [
	]
};

const giverWalletAddressBase64 = 'UQC7oawjsBAYgInWIBDdsA1ZTADw4hd5Tz8rU6gYlOxxRrJ6';
const giverWalletAddressHex = 'BBA1AC23B010188089D62010DDB00D594C00F0E217794F3F2B53A81894EC7146';

const giverWalletKeys = {
    secret: '2245e4f44af8af6bbd15c4a53eb67a8f211d541ddc7c197f74d7830dba6d27fe',
    public: 'd542f44146f169c6726c8cf70e4cbb3d33d8d842a4afd799ac122c5808d81ba3',
};

const GiverWalletPackage = {
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
                "name": "sendTransaction",
                "inputs": [
                    {"name":"dest","type":"uint256"},
                    {"name":"value","type":"uint128"},
                    {"name":"bounce","type":"bool"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "setSubscriptionAccount",
                "inputs": [
                    {"name":"addr","type":"uint256"}
                ],
                "outputs": [
                ]
            },
            {
                "name": "getSubscriptionAccount",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
                ]
            }
        ],
        "events": [
        ],
        "data": [
        ]
    },
    imageBase64: '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',
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
    },
    `
        storage {
            balance { Grams }
            state {
                ...on AccountStorageStateAccountActiveVariant {
                    AccountActive { split_depth } 
                }
            }
        }
    `);

    if (accounts.length === 0) {
        throw "Giver wallet does not exist. Send some grams to " + giverWalletAddressBase64 + " (" + deployMsg.address + ")"
    }

    if (!(accounts[0]["storage"]["balance"]["Grams"]) ||
        parseInt(accounts[0]["storage"]["balance"]["Grams"], 10) < 500000000)
    {
        throw "Giver has no money. Send some grams to " + giverWalletAddressBase64 + " (" + deployMsg.address + ")"
    }

    if (!(accounts[0].storage.state.AccountActive)) {
        console.log('No giver. Deploy');

        await ton.contracts.deploy({
            package: GiverWalletPackage,
            constructorParams: {},
            keyPair: giverWalletKeys,
        });

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
                amount: 500000000
            },
            keyPair: null,
        });
    } else {
        await check_giver();
        const result = await contracts.run({
            address: giverWalletAddressHex,
            functionName: 'sendTransaction',
            abi: GiverWalletPackage.abi,
            input: {
                dest: `0x${account}`,
                value: 500000000,
                bounce: false
            },
            keyPair: giverWalletKeys,
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

test('Run aborted transaction', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });

    await get_grams_from_giver(message.address);

    const address = await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });

    try {
        await contracts.run({
            address: message.address,
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
        console.log(error);
        expect(error.source).toEqual('node');
        expect(error.code).toEqual(102);
        expect(error.message).toEqual('VM terminated with exception');
        expect(error.data.phase).toEqual('computeVm');
        expect(error.data.transaction_id).toBeTruthy();
    }

    /*TODO: uncomment when rust ton-client library will support detailed errors.
    try {
        await contracts.run({
            address: message.address,
            abi: WalletContractPackage.abi,
            functionName: "sendTransaction",
            input: {},
            keyPair: keys
        });
    } catch (error) {
        console.log(error);
        expect(error.source).toEqual('client');
        expect(error.code).toEqual(3012);
        expect(error.data).toBeNull();
    }
    */
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

    const message1 = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        initParams: { subscription: subscriptionAddess1 },
        keyPair: keys,
    });

    const message2 = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        initParams: { subscription: subscriptionAddess2 },
        keyPair: keys,
    });

    expect(message1.address).not.toEqual(message2.address);

    await get_grams_from_giver(message1.address);
    await get_grams_from_giver(message2.address);

    const deployed1 = await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        initParams: { subscription: subscriptionAddess1 },
        keyPair: keys,
    });

    const deployed2 = await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        initParams: { subscription: subscriptionAddess2 },
        keyPair: keys,
    });

    expect(deployed1.address).toEqual(message1.address);
    expect(deployed2.address).toEqual(message2.address);

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

    expect(result1).toEqual({output: { value0: subscriptionAddess1 }});
    expect(result2).toEqual({output: { value0: subscriptionAddess2 }});
});
