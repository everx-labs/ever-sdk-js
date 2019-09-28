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
import { WalletContractPackage } from './contracts/WalletContract';
import { tests } from "./init-tests";

beforeAll(tests.init);
afterAll(tests.done);

const richAddress = '0000000000000000000000000000000000000000000000000000000000000000';

const walletKeys = {
    public: 'fb98b2541ba805648f25eb469dd4766fcdde03a2cfe6fb41d8c1571c29407ca3',
    secret: '7bfe77bbd3ad57ada9ed323da83504723e3af7cd3ba68b02d3c8335f75e0a24e',
};

const walletAddress = 'adb63a228837e478c7edf5fe3f0b5d12183e1f22246b67712b99ec538d6c5357';

test('load', async () => {
    const { contracts } = tests.client;
    const rich = await contracts.load({
        address: richAddress,
        includeImage: false,
    });
    expect(rich.id).toEqual(richAddress);

    const contract = await contracts.load({
        address: '0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF',
        includeImage: false,
    });
    expect(contract.id).toBeNull();
    expect(contract.balanceGrams).toBeNull();

    const w = await contracts.load({
        address: walletAddress,
        includeImage: false,
    });
    expect(w.id).toEqual(walletAddress);
    expect(Number.parseInt(w.balanceGrams)).toBeGreaterThan(0);
});

test('deploy', async () => {
    const { contracts } = tests.client;
    const deployed = await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });
    expect(deployed.address).toEqual(walletAddress);
});

test('deploy_new', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();
    await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });
});

test('test', async () => {
    const { contracts } = tests.client;
    await contracts.sendGrams({
        fromAccount: richAddress,
        toAccount: walletAddress,
        amount: 100,
    });
});

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

