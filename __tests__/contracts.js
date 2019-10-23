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
import { SubscriptionContractPackage } from "./contracts/SubscriptionContract";

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
*/
test('decodeInputMessageBody', async () => {
    const { contracts } = tests.client;
    const body = 'te6ccgEBAgEAkQABWD/BEboAAAFt31a11CIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiAQDAVgroxdPfNhBVJLYXeA07DKQvKrlQ1qbP5gjuxdwkMO4hgjdYoA70MvP4p0RbEaOFzcdK1P8hBgssv0lBLMtjCPjvxPjSkA8JkCt/hjUCINRHrwCZtOYRLjk2PAdrwFpH';

    const result = await contracts.decodeInputMessageBody({
        abi: SubscriptionContractPackage.abi,
        bodyBase64: body
    });

    expect(result.function).toEqual('getSubscription');
    expect(result.output).toEqual({subscriptionId: "0x2222222222222222222222222222222222222222222222222222222222222222"});
});

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

const setCode1_package: TONContractPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "main",
                "inputs": [
                    {"name":"newcode","type":"cell"}
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
                ]
            },
            {
                "name": "getVersion",
                "inputs": [
                ],
                "outputs": [
                    {"name":"value0","type":"uint256"}
                ]
            },
            {
                "name": "constructor",
                "inputs": [
                ],
                "outputs": [
                ]
            }
        ],
        "events": [
        ],
        "data": [
        ]
    } ,
    imageBase64: "te6ccgECaAEAEBcAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAGQ/vgBc2VsZWN0b3L/AIn0BSHDAY4VgCD+/gFzZWxlY3Rvcl9qbXBfMPSgjhuAIPQN8rSAIP78AXNlbGVjdG9yX2ptcPSh8jPiBwEBwAgCASAOCQHk//79AW1haW5fZXh0ZXJuYWwhjlv+/AFnZXRfc3JjX2FkZHIg0CDTADJwvY4Y/v0BZ2V0X3NyY19hZGRyMHBwVRFfAtsw4CBy1yExINMAMiGAC9ch1wv//v0BZ2V0X3NyY19hZGRyMSEhVTFfBNsw2DEhCgH4jnX+/gFnZXRfbXNnX3B1YmtleSDHAo4W/v8BZ2V0X21zZ19wdWJrZXkxcDHbMODVIMcBjhf+/wFnZXRfbXNnX3B1YmtleTJwMTHbMOAggQIA1yHXC/8i+QEiIvkQ8qj+/wFnZXRfbXNnX3B1YmtleTMgA18D2zDYIscCswsBzJQi1DEz3iQiIo44/vkBc3RvcmVfc2lnbwAhb4wib4wjb4ztRyFvjO1E0PQFb4wg7Vf+/QFzdG9yZV9zaWdfZW5kXwXYIscBjhP+/AFtc2dfaXNfZW1wdHlfBtsw4CLTHzQj0z81IAwBeo6A2I4x+AD+/gFtYWluX2V4dGVybmFsMiQiVXFfCPFAAf7+AW1haW5fZXh0ZXJuYWwzXwjbMOCAfPLwXwgNAd7++wFyZXBsYXlfcHJvdHBwcO1E0CD0BDI0IIEAgNdFjhj++wFyZXBsYXlfaGF2ZSDTPzIzINM/MjKOFoIA6mAy/v4BcmVwbGF5X2hhdmVfbm/i/vwBcmVwbGF5X3Byb3QyIiW5JfgjgQPoqCSgubBZAgLeZw8BASAQAgEgKhECASAfEgIBIB4TAgEgFRQAm7jt5qyf38AubovsrS6NDK5L7GytjYQ6BDnmpDrpLjQXkyQuOegGRARZxlMkLjnoJkREWYZcX9/gLm6L7K0ujQyuS+xsrY2GBCBr4HtmEAIBWBsWAgEgGhcB6LPo5D3+/wFkZXBsb3lfY29udHIyXzDIIiRwjk/++AFidWlsZG1zZ8hyz0AhzwoAcc9A+CjPFoEEAM8LCiLPC/8j+gJxz0Bw+gJw+gKAQM9A+CPPCx/+/AFidWlsZG1zZ19lbmQgyQRfBNsw2NDPFnHPQSQhGAGejkn+/gFzdF9laXRoZXJfY2VsbCHQIc81IddJcaC8mSFxz0AyICLOMpkhcc9BMiIizDLi/v8Bc3RfZWl0aGVyX2NlbGwwIQNfA9sw2DEhIRkAzI5J/v4Bc3RfZWl0aGVyX2NlbGwh0CHPNSHXSXGgvJkhcc9AMiAizjKZIXHPQTIiIswy4v7/AXN0X2VpdGhlcl9jZWxsMCEDXwPbMNgx/v8BZGVwbG95X2NvbnRyMl8xIMlw+wBfBQAwstzVCf77AWdldF9iYWxhbmNl+CdvENswAem0Ek6H/3+AsjK4Nje8r7G3tzo5MLG6ZBGSuEcn/3wAsTq0tjI2ubPkOWegEOeFADjnoHwUZ4tAggBnhYURZ4X/kf0BOOegOH0BOH0BQCBnoHwR54WP/34AsTq0tjI2ubOvsrcyEGSCL4JtmGxoZ4s456CSkMAcAa6OSf7+AXN0X2VpdGhlcl9jZWxsIdAhzzUh10lxoLyZIXHPQDIgIs4ymSFxz0EyIiLMMuL+/wFzdF9laXRoZXJfY2VsbDAhA18D2zDYMcgjzwsfIs8XICIdALKOPP78AXN0b3JlX2VpdGhlciDPNSLPMXGgvJZxz0AhzxeVcc9BIc3i/v4Bc3RvcmVfZWl0aGVyXzAgMTHbMNgy/v8BZGVwbG95X2NvbnRyYWMwIclw+wBfBwDDu0aR6Z/v4BY2hhbmdlX2Fycl9sZW4hgCD0jpIxpJFw4iAivo4UjhEgIryzINwwpSAjgCD0WzAzcOafI26zmiMicaEkgCD0QzPe4v7+AWNoX2Fycl9sZW5fZW5kIgRfBNswgCASAlIAIBWCQhAfG3K+5i/gA/v0BbWFpbl9pbnRlcm5hbCGOW/78AWdldF9zcmNfYWRkciDQINMAMnC9jhj+/QFnZXRfc3JjX2FkZHIwcHBVEV8C2zDgIHLXITEg0wAyIYAL1yHXC//+/QFnZXRfc3JjX2FkZHIxISFVMV8E2zDYJCFwgIgHsjjj++QFzdG9yZV9zaWdvACFvjCJvjCNvjO1HIW+M7UTQ9AVvjCDtV/79AXN0b3JlX3NpZ19lbmRfBdgixwCOHSFwup+CEFx+4gdwIXBVYl8H2zDgcHBxVVJfBtsw4P7+AW1haW5faW50ZXJuYWwxItMfNCJxuiMANJ+CEBzMZBohIXBVcl8I2zDgIyFwVWJfB9swAI22NOrTSHXSSAivp0iItcBNCAkVTFfBNsw4CIh1xg0I9Q1JNFtNSDQICUlodcYMsgkzxYhzxYgydAxICfXATIgJFWBXwnbMIAIBICkmAgFuKCcASLNhVpH+/AFzZW5kX2V4dF9tc2cg+CX4KIIQZf/o5/ABcPsAMAC+sogtHv78AWdldF9zcmNfYWRkciDQINMAMnC9jhj+/QFnZXRfc3JjX2FkZHIwcHBVEV8C2zDgIHLXITEg0wAyIYAL1yHXC//+/QFnZXRfc3JjX2FkZHIxISFVMV8E2zAAebjzLhH/3yAubo3uTKvubSzt4AQt8YRN8YRt8Z2o5C3xnaiaHoCt8YQdqv/foC5uje5Mq+5tLOvsrcyL4LACASBLKwIBID4sAgEgNS0CASAyLgIBWDAvAKayDcEM/vgBYnVpbGRtc2fIcs9AIc8KAHHPQPgozxaBBADPCwoizwv/I/oCcc9AcPoCcPoCgEDPQPgjzwsf/vwBYnVpbGRtc2dfZW5kIMkEXwTbMAHms1OVZ/78AXNlbmRfaW50X21zZ8ghI3Gjjk/++AFidWlsZG1zZ8hyz0AhzwoAcc9A+CjPFoEEAM8LCiLPC/8j+gJxz0Bw+gJw+gKAQM9A+CPPCx/+/AFidWlsZG1zZ19lbmQgyQRfBNsw2NDPFnDPCwAjITEAjo48/vwBc3RvcmVfZWl0aGVyIM81Is8xcaC8lnHPQCHPF5Vxz0EhzeL+/gFzdG9yZV9laXRoZXJfMCAxMdsw2DEgyXD7AF8EAgFYNDMAfLJVviP++QFteV9wdWJrZXntRNAg9AQycCGAQPQO8uBkINP/MiHRbTL+/QFteV9wdWJrZXlfZW5kIARfBNswAHKyEwmn/vwBcHVzaHBkYzd0b2M07UTQ9AHI7UdvEgH0ACHPFiDJ7VT+/QFwdXNocGRjN3RvYzQwXwICASA7NgIBIDg3AD+1X6TY/36As7K6L7mytjMvsLIyOXwUQAXrkOuF/+2YQAIBIDo5AHizeTXo/vwBYmxkX3N0dF9udF8wyHLPQHHPQSLPFHHPQSHPFHHPQP78AWJsZF9zdHRfbnRfMSDJA18D2zAAXrLhKevUMIIQHSfnW/AByIIQaOEp64IQgAAAALHPCx/IIs8L/82CEJ9hVpHwAdswAgFYPTwAdLIu9+pwcO1E0CD0BDIzIIEAgNdFnyDSfzIyIHHXRZSAe/Lw3t7IIwH0ACLPC39xz0EhzxYgye1UXwQAlLP/6Of+/QFidWlsZF9leHRfbXNnyHPPCwEhzxZwzwsBIs8LP3DPCx9wzwsAIM81JM8xcaC8lnHPQCPPF5Vxz0EjzeIgyQRfBNswAgEgRj8CASBDQAIBakJBAEuxhDOL/fwC5srcyL7S3Oi+2ubOvmRARQQRMS0BBCD6pyrP4AK+BQANsP3EDmG2YQIDjWxFRAA7qeeT399ALmytzIvs7kwtrmQERJBCD6pyrP4AK+BwAFup8BbmEEIF/zRO3gA5EEIKtfAW8EIQAAAAFjnhY/kEWeF/+bBCE+wq0j4AO2YQAgFiSkcCAVhJSACjrmH6q/vwBZGVjb2RlX2FycmF5IMcBlyDUMiDQMjDeINMfMiH0BDMggCD0jpIxpJFw4iIhuvLgZP7/AWRlY29kZV9hcnJheV9vayEkVTFfBNswgDxr3ksH/v4BZ2V0X21zZ19wdWJrZXkgxwKOFv7/AWdldF9tc2dfcHVia2V5MXAx2zDg1SDHAY4X/v8BZ2V0X21zZ19wdWJrZXkycDEx2zDgIIECANch1wv/IvkBIiL5EPKo/v8BZ2V0X21zZ19wdWJrZXkzIANfA9swgCAs6/flv78AXN0b3JlX2VpdGhlciDPNSLPMXGgvJZxz0AhzxeVcc9BIc3i/v4Bc3RvcmVfZWl0aGVyXzAgMTHbMAIBIFpMAgEgUE0CAVhPTgB1tAnEiBDAEHpHSRjSSLhxOEcQEBFc2ZBuGBEQksAQegdImMvkOAFngOTocRATZxsYUjhzGBGCL4JtmEAALbSI8/pkEpFngZASkpL6IZoRgy+DbZhAAgEgWFECASBVUgIBIFRTAA6z+aJ2cdswADCyLgsA/v0BZ2V0X3JhbmRfc2VlZPgm2zABCbTIdCnAVgH+/v8BaW5zZXJ0X3B1YmtleV8wIdDIIdMAM8AAk3HPQJpxz0Eh0x8zzwsf4iHTADPAAJNxz0Cacc9BIdMBM88LAeIh0wAzwACTcc9AmHHPQSHUM88U4iHTADNxuvLgZHHPQcgjzwv/ItQ00CD0BDIicCKAQPRDMcghAfQAIMklzFcAZjUl0wA3wACVJHHPQDWbJHHPQTUl1DclzDXi/v8BaW5zZXJ0X3B1YmtleV85JMkIXwjbMAHnt6gART++wFyZXBsYXlfcHJvdHBwcO1E0CD0BDI0IIEAgNdFjhj++wFyZXBsYXlfaGF2ZSDTPzIzINM/MjKOFoIA6mAy/v4BcmVwbGF5X2hhdmVfbm/i/vwBcmVwbGF5X3Byb3QyIiW5JfgjgQPoqCSgubCBZAGSOKcgkAfQA/vwBcmVwbGF5X3Byb3QzJc8LPyLPCz8hzxYgye1UfwZfBtsw4HAFXwXbMAIBWGJbAgEgX1wCAUheXQAVsE/OtkH2COBjtmEADbGYyDRhtmECAVhhYABbsBBOef34Asrcxt7Iyr7C5OTC8kEAQekdJGNJIuHEQEeWPmZCR+gAZkQGvge2YQC3sH8NEf32AsLGvujkwtzmzMrlkOWegEWeFADjnoHwUZ4tAggBnhYUSZ4X/kf0BOOegOH0BOH0BQCBnoHwR54WPuWegEGSRfYB/f4Cwsa+6OTC3ObMyuS+ytzIvgsCASBkYwCFtCQAnUEIMxd79XgAmH9+ALg6ubQ4MjGbujexmnaiaHoA5Hajt4kA+gAQ54sQZPaqf36AuDq5tDgyMZu6N7GaGC+BQAIBSGZlAIuwm+0UQ66SQEV9OkRFrgBoQEiqYr4JtmHAREOuMGhHqGpJotpqQaBASktDrjBlkEmeLEOeLEGToGJAT64AZEBIqwK+E7ZhAAuwNjjPtmEAGyCELyvuYvwAdzwAdswg"
};

const setCode2_imageBase64 = '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';


test('testSetCode', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: setCode1_package,
        constructorParams: {},
        keyPair: keys,
    });

    await get_grams_from_giver(message.address);

    const deployed = await contracts.deploy({
        package: setCode1_package,
        constructorParams: {},
        keyPair: keys,
    });

    const version1 = await contracts.run({
        address: deployed.address,
        functionName: 'getVersion',
        abi: setCode1_package.abi,
        input: { },
        keyPair: keys,
    });

    const code = await contracts.getCodeFromImage({
        imageBase64: setCode2_imageBase64
    });

    const result = await contracts.run({
        address: deployed.address,
        functionName: 'main',
        abi: setCode1_package.abi,
        input: { newcode: code.codeBase64 },
        keyPair: keys,
    });

    const version2 = await contracts.run({
        address: deployed.address,
        functionName: 'getVersion',
        abi: setCode1_package.abi,
        input: { },
        keyPair: keys,
    });

    expect(version1).not.toEqual(version2);
});

test('testDeploy', async () => {
    const { contracts, crypto } = tests.client;

    const publicKey = '1111111111111111111111111111111111111111111111111111111111111111';
    const subscriptionAddess = '0x2222222222222222222222222222222222222222222222222222222222222222';

    const resultKey = await contracts.getDeployData({
        publicKeyHex: publicKey,
    });

    //console.log(resultKey);
    expect(resultKey).toEqual(
        {
            imageBase64: null,
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
            dataBase64: 'te6ccgEBBQEANQABAcABAgPPIAQCAQHeAwAD0CAAQdiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjA=='
        }
    );

    const resultInitKey = await contracts.getDeployData({
        abi: WalletContractPackage.abi,
        initParams: { subscription: subscriptionAddess },
        publicKeyHex: publicKey,
    });

    //console.log(resultInitKey);
    expect(resultInitKey).toEqual(
        {
            imageBase64: null,
            dataBase64: 'te6ccgEBBAEAUQABAcABAgPOYAMCAEO0pERERERERERERERERERERERERERERERERERERERERERQAEHYREREREREREREREREREREREREREREREREREREREREREY='
        }
    );

    const resultAll = await contracts.getDeployData({
        abi: WalletContractPackage.abi,
        initParams: { subscription: subscriptionAddess },
        imageBase64: WalletContractPackage.imageBase64,
        publicKeyHex: publicKey,
    });

    //console.log(resultAll);
    expect(resultAll).toEqual(
        {
            imageBase64: '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',
            dataBase64: 'te6ccgEBBwEAXgABAcABAgPOYAMCAEO0pERERERERERERERERERERERERERERERERERERERERERQAgFiBgQBAd4FAAPQIABB2IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiM'
        }
    );
});


test('testRunBody', async () => {
    const { contracts, crypto } = tests.client;

    const walletAddress = '0x2222222222222222222222222222222222222222222222222222222222222222';

    const result = await contracts.createRunBody({
        abi: SubscriptionContractPackage.abi,
        function: "constructor",
        params: {wallet: walletAddress},
        keyPair: walletKeys,
    });

    const parseResult = await contracts.decodeInputMessageBody({
        abi: SubscriptionContractPackage.abi,
        bodyBase64: result.bodyBase64,
    });

    expect(parseResult.function).toEqual('constructor');
    expect(parseResult.output).toEqual({wallet: walletAddress});

    const resultInternal = await contracts.createRunBody({
        abi: SubscriptionContractPackage.abi,
        function: "constructor",
        params: {wallet: walletAddress},
        internal: true,
    });

    const parseResultInternal = await contracts.decodeInputMessageBody({
        abi: SubscriptionContractPackage.abi,
        bodyBase64: resultInternal.bodyBase64,
        internal: true,
    });

    expect(parseResultInternal.function).toEqual('constructor');
    expect(parseResultInternal.output).toEqual({wallet: walletAddress});
});
