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

import { Span } from "opentracing";
import { tests } from './_/init-tests';
import {
    removeProps,
    TONAddressStringVariant
} from '../src/modules/TONContractsModule';
import { TONOutputEncoding } from '../src/modules/TONCryptoModule';


import type {
    TONContractLoadResult,
} from '../types';
import { binariesVersion } from './_/binaries';
import { TONClientError } from "../src/TONClient";


const WalletContractPackage = tests.loadPackage('WalletContract');
const HelloContractPackage = tests.loadPackage('Hello');
const SubscriptionContractPackage = tests.loadPackage('Subscription');
const SetCodePackage = tests.loadPackage('Setcode');
const SetCode2Package = tests.loadPackage('Setcode2');
const EventsPackage = tests.loadPackage('Events');


beforeAll(tests.init);
afterAll(tests.done);

const walletKeys = {
    public: 'fb98b2541ba805648f25eb469dd4766fcdde03a2cfe6fb41d8c1571c29407ca3',
    secret: '7bfe77bbd3ad57ada9ed323da83504723e3af7cd3ba68b02d3c8335f75e0a24e',
};

const walletAddress = '0:adb63a228837e478c7edf5fe3f0b5d12183e1f22246b67712b99ec538d6c5357';

test('removeProps', () => {
    const params = {
        keyPair: {
            public: 'public',
            secret: 'secret',
        },
        foo: {
            bar: 'bar',
            baz: 'baz',
        }
    };
    const reduced = removeProps(params, ['keyPair.secret', 'foo.bar']);
    expect(reduced)
        .toEqual({
            keyPair: {
                public: 'public'
            },
            foo: {
                baz: 'baz'
            }
        });
});

test('basic', async () => {
    const version = await tests.client.config.getVersion();
    expect(version).toEqual(binariesVersion);
    console.log(`Client uses expected binaries version: ${version}`);
});

test('load', async () => {
    const { contracts } = tests.client;
    await tests.client.trace('tests.contracts.load', async (span: Span) => {
        const contract = await contracts.load({
            address: '0:0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF',
            includeImage: false,
        }, span);
        expect(contract.id)
            .toBeNull();
        expect(contract.balanceGrams)
            .toBeNull();

        await tests.get_grams_from_giver(walletAddress, undefined, span);

        const w: TONContractLoadResult = await contracts.load({
            address: walletAddress,
            includeImage: false,
        }, span);
        expect(w.id)
            .toEqual(walletAddress);
        expect(Number.parseInt(w.balanceGrams || ''))
            .toBeGreaterThan(0);

    });
});

test('Test hello contract from docs.ton.dev', async () => {
    const { contracts, crypto } = tests.client;
    const helloKeys = await crypto.ed25519Keypair();

    const contractData = await tests.deploy_with_giver({
        package: HelloContractPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    const response = await contracts.run({
        address: contractData.address,
        abi: HelloContractPackage.abi,
        functionName: 'touch',
        input: {},
        keyPair: helloKeys,
    });

    expect(response.transaction.status).toEqual(3);

    const localResponse = await contracts.runLocal({
        address: contractData.address,
        abi: HelloContractPackage.abi,
        functionName: 'sayHello',
        input: {},
        keyPair: helloKeys,
    });

    const localResponse2 = await contracts.runLocal({
        address: contractData.address,
        abi: HelloContractPackage.abi,
        functionName: 'sayHello',
        input: {},
        keyPair: helloKeys,
    });
    expect(localResponse.output.value0).toEqual((localResponse2.output.value0));
});

test('Run aborted transaction', async () => {
    const { contracts, crypto } = tests.client;
    await tests.client.trace('tests.contracts.run-aborted-transaction', async (span: Span) => {
        const keys = await crypto.ed25519Keypair();

        const address = await tests.deploy_with_giver({
            package: WalletContractPackage,
            constructorParams: {},
            keyPair: keys,
        }, span);

        try {
            await contracts.run({
                address: address.address,
                abi: WalletContractPackage.abi,
                functionName: 'sendTransaction',
                input: {
                    dest: '0:0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF',
                    value: 0,
                    bounce: false,
                },
                keyPair: keys,
            }, span);
        } catch (error) {
            expect(error.source)
                .toEqual('node');
            expect(error.code)
                .toEqual(101);
            expect(error.message)
                .toEqual('VM terminated with exception (101) at computeVm');
            expect(error.data.phase)
                .toEqual('computeVm');
            expect(error.data.transaction_id)
                .toBeTruthy();
        }

        try {
            await contracts.run({
                address: address.address,
                abi: WalletContractPackage.abi,
                functionName: 'sendTransaction',
                input: {},
                keyPair: keys,
            }, span);
        } catch (error) {
            // console.log(error);
            expect(error.source)
                .toEqual('client');
            expect(error.code)
                .toEqual(3012);
            expect(error.data)
                .toBeNull();
        }
    });
});

test('filterOutput', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployed = await tests.deploy_with_giver({
        package: EventsPackage,
        constructorParams: {},
        keyPair: keys,
    });

    await contracts.run({
        address: deployed.address,
        functionName: 'emitValue',
        abi: EventsPackage.abi,
        input: { id: '0' },
        keyPair: keys,
    });

    const resultReturn = await contracts.run({
        address: deployed.address,
        functionName: 'returnValue',
        abi: EventsPackage.abi,
        input: { id: '0' },
        keyPair: keys,
    });
    expect(JSON.stringify(resultReturn.output))
        .toEqual('{"value0":"0x0"}');
});

if(tests.abiVersion === 1)
test('External Signing on ABI v1', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const contractPackage = EventsPackage;
    contractPackage.abi.setTime = false;

    const deployParams = {
        package: contractPackage,
        constructorParams: {},
        keyPair: keys,
    };
    const unsignedMessage = await contracts.createUnsignedDeployMessage(deployParams);
    const signKey = await crypto.naclSignKeypairFromSecretKey(keys.secret);
    const signBytesBase64 = await crypto.naclSignDetached({
        base64: unsignedMessage.signParams.bytesToSignBase64,
    }, signKey.secret, TONOutputEncoding.Base64);
    const signed = await contracts.createSignedDeployMessage({
        signBytesBase64,
        unsignedMessage,
    });

    const message = await contracts.createDeployMessage(deployParams);
    expect(signed.message.messageBodyBase64)
        .toEqual(message.message.messageBodyBase64);
});

if(tests.abiVersion === 2)
test('External Signing on ABI v2', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const contractPackage = EventsPackage;

    const deployParams = {
        package: contractPackage,
        constructorHeader: {
            pubkey: keys.public,
            time: Date.now(),
            expire: Math.floor((Date.now() + 40_000) / 1000),
        },
        constructorParams: {},
        keyPair: keys,
    };
    const unsignedMessage = await contracts.createUnsignedDeployMessage(deployParams);
    const signKey = await crypto.naclSignKeypairFromSecretKey(keys.secret);
    const signBytesBase64 = await crypto.naclSignDetached({
        base64: unsignedMessage.signParams.bytesToSignBase64,
    }, signKey.secret, TONOutputEncoding.Base64);
    const signed = await contracts.createSignedDeployMessage({
        signBytesBase64,
        unsignedMessage,
    });

    const message = await contracts.createDeployMessage(deployParams);
    expect(signed.message.messageBodyBase64)
        .toEqual(message.message.messageBodyBase64);

    
});

// TODO return test when data[] will fix in compilers
test.skip('changeInitState', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const subscriptionAddress1 = '0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
    const subscriptionAddress2 = '0:fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321';

    const deployed1 = await tests.deploy_with_giver({
        package: WalletContractPackage,
        constructorParams: {},
        initParams: {
            subscription: subscriptionAddress1,
            owner: `0x${keys.public}`,
        },
        keyPair: keys,
    });

    const deployed2 = await tests.deploy_with_giver({
        package: WalletContractPackage,
        constructorParams: {},
        initParams: {
            subscription: subscriptionAddress2,
            owner: `0x${keys.public}`,
        },
        keyPair: keys,
    });

    expect(deployed1.address)
        .not
        .toEqual(deployed2.address);

    const result1 = await contracts.runLocal({
        address: deployed1.address,
        functionName: 'getSubscriptionAccount',
        abi: WalletContractPackage.abi,
        input: {},
        keyPair: keys,
    });

    const result2 = await contracts.runLocal({
        address: deployed2.address,
        functionName: 'getSubscriptionAccount',
        abi: WalletContractPackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result1.output)
        .toEqual({ value0: subscriptionAddress1 });
    expect(result2.output)
        .toEqual({ value0: subscriptionAddress2 });
});

test('testSetCode', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const deployed = await tests.deploy_with_giver({
        package: SetCodePackage,
        constructorParams: {},
        keyPair: keys,
    });

    const version1 = await contracts.run({
        address: deployed.address,
        functionName: 'getVersion',
        abi: SetCodePackage.abi,
        input: {},
        keyPair: keys,
    });
    expect(version1.output.value0).toEqual('0x1');
    const code = await contracts.getCodeFromImage({
        imageBase64: SetCode2Package.imageBase64,
    });
    await contracts.run({
        address: deployed.address,
        functionName: 'main',
        abi: SetCodePackage.abi,
        input: { newcode: code.codeBase64 },
        keyPair: keys,
    });
    const newVersion = await contracts.run({
        address: deployed.address,
        functionName: 'getNewVersion',
        abi: SetCode2Package.abi,
        input: {},
        keyPair: keys,
    });

    expect(newVersion.output.value0).toEqual('0x2');
});

test('testRunBody', async () => {
    const { contracts } = tests.client;

    const walletAddress = '0:2222222222222222222222222222222222222222222222222222222222222222';

    const result = await contracts.createRunBody({
        abi: SubscriptionContractPackage.abi,
        function: 'constructor',
        params: { wallet: walletAddress },
        keyPair: walletKeys,
    });

    const parseResult = await contracts.decodeInputMessageBody({
        abi: SubscriptionContractPackage.abi,
        bodyBase64: result.bodyBase64,
    });

    expect(parseResult.function)
        .toEqual('constructor');
    expect(parseResult.output)
        .toEqual({ wallet: walletAddress });

    const resultInternal = await contracts.createRunBody({
        abi: SubscriptionContractPackage.abi,
        function: 'constructor',
        params: { wallet: walletAddress },
        internal: true,
    });

    const parseResultInternal = await contracts.decodeInputMessageBody({
        abi: SubscriptionContractPackage.abi,
        bodyBase64: resultInternal.bodyBase64,
        internal: true,
    });

    expect(parseResultInternal.function)
        .toEqual('constructor');
    expect(parseResultInternal.output)
        .toEqual({ wallet: walletAddress });
});

test('Address conversion', async () => {
    const { contracts } = tests.client;

    const accountId = 'fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260';
    const hex = '-1:fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260';
    const hexWorkchain0 = '0:fcb91a3a3816d0f7b8c2c76108b8a9bc5a6b7a55bd79f8ab101c52db29232260';
    const base64 = 'Uf/8uRo6OBbQ97jCx2EIuKm8Wmt6Vb15+KsQHFLbKSMiYG+9';
    const base64Url = 'kf_8uRo6OBbQ97jCx2EIuKm8Wmt6Vb15-KsQHFLbKSMiYIny';

    let convertedAddress = await contracts.convertAddress({
        address: accountId,
        convertTo: TONAddressStringVariant.Hex,
    });
    expect(convertedAddress.address)
        .toEqual(hexWorkchain0);

    convertedAddress = await contracts.convertAddress({
        address: hex,
        convertTo: TONAddressStringVariant.AccountId,
    });
    expect(convertedAddress.address)
        .toEqual(accountId);

    convertedAddress = await contracts.convertAddress({
        address: hex,
        convertTo: TONAddressStringVariant.Base64,
        base64Params: {
            test: false,
            bounce: false,
            url: false,
        },
    });
    expect(convertedAddress.address)
        .toEqual(base64);

    convertedAddress = await contracts.convertAddress({
        address: base64,
        convertTo: TONAddressStringVariant.Base64,
        base64Params: {
            test: true,
            bounce: true,
            url: true,
        },
    });
    expect(convertedAddress.address)
        .toEqual(base64Url);

    convertedAddress = await contracts.convertAddress({
        address: base64Url,
        convertTo: TONAddressStringVariant.Hex,
    });
    expect(convertedAddress.address)
        .toEqual(hex);
});

test('calc gas fee', async () => {
    const { contracts, crypto, queries } = tests.client;
    if (tests.nodeSe) {
        console.log('[calc gas fee] Skip test on Node SE');
        return;
    }
    const keys = await crypto.ed25519Keypair();

    // calculate fees for deploying the contract
    const deployMessage = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys
    });

    const deployFees = await contracts.calcDeployFees({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
        newAccount: true
    });

    // use fees to get needed grams value from giver
    const targetBalance = 500000000;

    await tests.get_grams_from_giver(
        deployMessage.address,
        targetBalance + Number(deployFees.fees.totalAccountFees));

    // deploy the contract
    const deployed = await contracts.processDeployMessage(deployMessage);

    const deployTransaction = (await queries.transactions.query({
            in_msg: { eq: deployMessage.message.messageId }
        },
        'storage {storage_fees_collected}'
    ))[0];

    const originalBalance = (await queries.accounts.waitFor({
            id: { eq: deployed.address },
            code: { gt: "" }
        },
        'balance'
    )).balance;

    // giver sends message with IHR enabled and ihr_fee is added to target account balance
    const ihrFee = 1500000;

    // check that balance after deploy is the one we expected (except increased storage fee)
    expect(Number(originalBalance))
        .toEqual(targetBalance + ihrFee + Number(deployFees.fees.storageFee) - Number(deployTransaction.storage.storage_fees_collected));

    // get fees for transaction to calculate possible send value
    const runMessage = await contracts.createRunMessage({
        address: deployed.address,
        functionName: 'sendTransaction',
        abi: WalletContractPackage.abi,
        input: {
            dest: tests.get_giver_address(),
            value: originalBalance,
            bounce: false
        },
        keyPair: keys
    });

    const testFees = await contracts.calcMsgProcessFees({
        address: deployed.address,
        message: runMessage.message,
        emulateBalance: true
    });

    // send almost all balance with reserve for increased storage fee
    const reserveValue = 100;
    const sendValue = Number(originalBalance) - Number(testFees.fees.totalAccountFees) - Number(reserveValue);

    // calculate fees for transaction with actual parameters
    const calcFees = await contracts.calcRunFees({
        address: deployed.address,
        functionName: 'sendTransaction',
        abi: WalletContractPackage.abi,
        input: {
            dest: tests.get_giver_address(),
            value: sendValue,
            bounce: false
        },
        keyPair: keys
    });

    // perform real transaction
    const resultNet = await contracts.run({
        address: deployed.address,
        functionName: 'sendTransaction',
        abi: WalletContractPackage.abi,
        input: {
            dest: tests.get_giver_address(),
            value: sendValue,
            bounce: false
        },
        keyPair: keys,
    });

    const endBalance = (await queries.accounts.waitFor({
            id: { eq: deployed.address },
            balance: { lt: originalBalance }
        },
        'balance'
    )).balance;

    // check that we send almost all balance without reserved value
    expect(Number(endBalance) < Number(reserveValue)).toBeTruthy();

    const transaction = await queries.transactions.query({
            id: { eq: resultNet.transaction.id }
        },
        'storage {storage_fees_collected} compute {gas_fees} action {total_fwd_fees} total_fees'
    );

    // check actual fees
    expect(calcFees.fees.gasFee).toEqual(transaction[0].compute.gas_fees);
    //expect(localResult.fees.storageFee).toEqual(transaction[0].storage.storage_fees_collected);
    expect(calcFees.fees.outMsgsFwdFee).toEqual(transaction[0].action.total_fwd_fees);
    // check all fees (with storage fee from real transaction) gives right result
    expect(
        Number(calcFees.fees.gasFee) +
        Number(calcFees.fees.outMsgsFwdFee) +
        Number(calcFees.fees.inMsgFwdFee) +
        Number(transaction[0].storage.storage_fees_collected)
    ).toEqual(Number(originalBalance) - Number(sendValue) - Number(endBalance));

    expect(Number(calcFees.fees.totalOutput) === sendValue).toBeTruthy();
});

test('test boc hash', async () => {
    const { contracts } = tests.client;
    const bocBase64 = "te6ccgEBAgEAxgABwYgAti0S4VOMe6uIVNX3nuDd7KSO13EsFEXDsUVaKRzBgdQCwaZuyAAAC3iWFUwMAK22OiKIN+R4x+31/j8LXRIYPh8iJGtncSuZ7FONbFNXAAAAAAAAAAAAAAAAAA9CQEABAMD3EJkJ6DsPCkGnV5lMTt6LIPRS7ViXPZjHMhJizNODUeKekStEXEUgmHS2vmokCRRUpsUhmwgFmkWaCatqe4wIlcBqp0PR+QAN1kt1SY8QavS350RCNNfeZ+ommI9hgd8=";
    const hash = "adff1e7fd60632bb572b1afe0c2e569d8c68b1169994c48bc1ed92b3515c3b4e";

    const result = await contracts.getBocHash({ bocBase64 });

    expect(result.hash).toEqual(hash);
});

test('test send boc', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });

    await tests.get_grams_from_giver(message.address);

    // send message without id - it should be computed inside
    await contracts.processDeployMessage({
        address: message.address,
        message: {
            messageBodyBase64: message.message.messageBodyBase64
        }
    });
});

test('test deploy lags', async () => {
    const { contracts, crypto, config } = tests.client;
    config.startProfile();

    config.log("Start");
    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });

    config.log("Before giver");

    await tests.get_grams_from_giver(message.address);

    config.log("After giver");

    // send message without id - it should be computed inside
    await contracts.processDeployMessage({
        address: message.address,
        message: {
            messageBodyBase64: message.message.messageBodyBase64
        }
    });

    config.log("After deploy");
    config.stopProfile();
});

declare function fail(message: string): void;

async function expectError(code: number, source: string, f) {
    try {
        await f();
        fail(`Expected error with code:${code} source: ${source}`);
    } catch (error) {
        expect({ code: error.code, source: error.source }).toEqual({ code, source });
    }
}

if (tests.abiVersion === 2)
test('Test expire', async () => {
    const {contracts, crypto, queries} = tests.client;
    const helloKeys = await crypto.ed25519Keypair();

    const contractData = await tests.deploy_with_giver({
        package: HelloContractPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    const ltDeploy = (await queries.accounts.query({
            id: { eq: contractData.address }
        },
        'last_trans_lt'
    ))[0].last_trans_lt;

    await contracts.run({
        address: contractData.address,
        abi: HelloContractPackage.abi,
        functionName: 'touch',
        input: {},
        keyPair: helloKeys,
    });

    const ltRun = (await queries.accounts.query({
            id: { eq: contractData.address }
        },
        'last_trans_lt'
    ))[0].last_trans_lt;

    expect(ltRun).not.toEqual(ltDeploy);

    // to check message expiration we have to make some trick with `expire` value, because
    // SDK can not send already expired message

    // we create expired message
    let runMsg = await contracts.createRunMessage({
        address: contractData.address,
        abi: HelloContractPackage.abi,
        functionName: 'touch',
        header: {
            expire: Math.floor(Date.now() / 1000) - 1
        },
        input: {},
        keyPair: helloKeys,
    });
    // and then change `expire` to correct value in order to send it properly
    runMsg.message.expire = Math.floor(Date.now() / 1000) + 10;

    // Node SE writes aborted transactions into DB, so error differs
    let expectedError = TONClientError.messageExpired();
    if (tests.nodeSe) {
        expectedError = {
            code: 57, // message expired code
            source: "node"
        }
    }

    // SDK will wait for message processing using modified `expire` value, but message was created
    // already expired so contract won't accept it
    await expectError(expectedError.code, expectedError.source,
        async () => contracts.processRunMessage(runMsg));

    // check that expired message wasn't processed by the contract
    const ltExpire = (await queries.accounts.query({
            id: { eq: contractData.address }
        },
        'last_trans_lt'
    ))[0].last_trans_lt;

    expect(ltExpire).toEqual(ltRun);
});

test('test parse message', async () => {
    const { contracts, crypto } = tests.client;

    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });

    const parsedMsg = await contracts.parseMessage({
        bocBase64: message.message.messageBodyBase64
    });

    expect(parsedMsg.dst).toEqual(message.address);
});

test('Check deployed', async () => {
    const { contracts, crypto } = tests.client;
    const helloKeys = await crypto.ed25519Keypair();

    const deployed = await tests.deploy_with_giver({
        package: HelloContractPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    expect(deployed.alreadyDeployed).toBeFalsy();

    const checked = await contracts.deploy({
        package: HelloContractPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    expect(checked.alreadyDeployed).toBeTruthy();
});
