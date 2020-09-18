/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */

// @flow

import { Span } from 'opentracing';
import { removeProps, TONAddressStringVariant } from '../src/modules/TONContractsModule';
import { TONOutputEncoding } from '../src/modules/TONCryptoModule';
import {
    TONClient,
} from '../src/TONClient';

import {
    TONContractExitCode,
    TONErrorCode,
    TONErrorSource,
} from '../src/TONClientError';


import type { TONContractLoadResult } from '../types';
import { ABIVersions, nodeSe, tests } from './_/init-tests';

const loadPackage = {
    checkInitParams: tests.packageLoader('CheckInitParams'),
    wallet: tests.packageLoader('WalletContract'),
    hello: tests.packageLoader('Hello'),
    subscription: tests.packageLoader('Subscription'),
    setCode: tests.packageLoader('Setcode'),
    setCode2: tests.packageLoader('Setcode2'),
    events: tests.packageLoader('Events'),
    sensor: tests.packageLoader('Sensor'),
};

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
        },
    };
    const reduced = removeProps(params, ['keyPair.secret', 'foo.bar']);
    expect(reduced)
        .toEqual({
            keyPair: {
                public: 'public',
            },
            foo: {
                baz: 'baz',
            },
        });
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
        expect(Number(w.balanceGrams || ''))
            .toBeGreaterThan(0);
    });
});


test('out of sync', async () => {
    const cfg = tests.client.config.data;
    const saveOutOfSyncThreshold = cfg.outOfSyncThreshold;
    cfg.outOfSyncThreshold = -1;
    try {
        await expectError(
            TONErrorCode.CLOCK_OUT_OF_SYNC,
            TONErrorSource.CLIENT,
            async () => {
                await tests.get_grams_from_giver(walletAddress);
            },
        );
    } finally {
        cfg.outOfSyncThreshold = saveOutOfSyncThreshold;
    }
});


test.each(ABIVersions)('Test hello contract from docs.ton.dev (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    const helloKeys = await crypto.ed25519Keypair();
    const helloPackage = await loadPackage.hello(abiVersion);
    const contractData = await tests.deploy_with_giver({
        package: helloPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    const response = await contracts.run({
        address: contractData.address,
        abi: helloPackage.abi,
        functionName: 'touch',
        input: {},
        keyPair: helloKeys,
    });

    const localResponse = await contracts.runLocal({
        address: contractData.address,
        abi: helloPackage.abi,
        functionName: 'sayHello',
        input: {},
        keyPair: helloKeys,
    });

    const localResponse2 = await contracts.runLocal({
        address: contractData.address,
        abi: helloPackage.abi,
        functionName: 'sayHello',
        input: {},
        keyPair: helloKeys,
    });
    expect(localResponse.output.value0)
        .toEqual((localResponse2.output.value0));
});

test.each(ABIVersions)('Run aborted transaction (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    await tests.client.trace('tests.contracts.run-aborted-transaction', async (span: Span) => {
        const keys = await crypto.ed25519Keypair();
        const walletPackage = await loadPackage.wallet(abiVersion);
        const address = await tests.deploy_with_giver({
            package: walletPackage,
            constructorParams: {},
            keyPair: keys,
        }, span);

        try {
            await contracts.run({
                address: address.address,
                abi: walletPackage.abi,
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
                .toEqual(TONErrorSource.NODE);
            expect(error.code)
                .toEqual(TONErrorCode.CONTRACT_EXECUTION_FAILED);
            expect(error.data.phase)
                .toEqual('computeVm');
            expect(error.data.transaction_id)
                .toBeTruthy();
            expect(error.data.exit_code)
                .toEqual(101);
        }

        try {
            await contracts.run({
                address: address.address,
                abi: walletPackage.abi,
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
        }
    });
});

test.each(ABIVersions)('filterOutput (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();
    const eventsPackage = await loadPackage.events(abiVersion);
    const deployed = await tests.deploy_with_giver({
        package: eventsPackage,
        constructorParams: {},
        keyPair: keys,
    });

    await contracts.run({
        address: deployed.address,
        functionName: 'emitValue',
        abi: eventsPackage.abi,
        input: { id: '0' },
        keyPair: keys,
    });

    const resultReturn = await contracts.run({
        address: deployed.address,
        functionName: 'returnValue',
        abi: eventsPackage.abi,
        input: { id: '0' },
        keyPair: keys,
    });
    expect(JSON.stringify(resultReturn.output))
        .toEqual('{"value0":"0x0"}');

    // const graph = await tests.client.queries.transactions.waitFor({
    //     filter: { id: { eq: resultReturn.transaction.id} },
    //     result: `id in_message { id
    //          dst_transaction { id out_messages { id src_transaction { id } } } }`,
    // });
    // expect(graph.in_message.dst_transaction.id).toEqual(graph.id);
    // expect(graph.in_message.dst_transaction.out_messages[0].src_transaction.id)
    //      .toEqual(graph.id);
});

test('External Signing on ABI v1', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const eventsPackage = await loadPackage.events(1);
    eventsPackage.abi.setTime = false;

    const deployParams = {
        package: eventsPackage,
        constructorParams: {},
        keyPair: keys,
    };
    const unsignedMessage = await contracts.createUnsignedDeployMessage(deployParams);
    const signKey = await crypto.naclSignKeypairFromSecretKey(keys.secret);
    let signBytesBase64 = await crypto.naclSignDetached({
        base64: unsignedMessage.signParams.bytesToSignBase64,
    }, signKey.secret, TONOutputEncoding.Base64);
    const signed = await contracts.createSignedDeployMessage({
        signBytesBase64,
        unsignedMessage,
        publicKeyHex: keys.public,
    });

    const message = await contracts.createDeployMessage(deployParams);
    expect(signed.message.messageBodyBase64)
        .toEqual(message.message.messageBodyBase64);

    const unsignedRunMessage = await contracts.createUnsignedRunMessage({
        address: message.address,
        abi: eventsPackage.abi,
        functionName: 'returnValue',
        input: { id: '0' },
        keyPair: keys,
    });
    signBytesBase64 = await crypto.naclSignDetached({
        base64: unsignedRunMessage.signParams.bytesToSignBase64,
    }, signKey.secret, TONOutputEncoding.Base64);

    const signedRunMessage = await contracts.createSignedRunMessage({
        unsignedMessage: unsignedRunMessage,
        signBytesBase64,
        publicKeyHex: keys.public,
    });
    const runMessage = await contracts.createRunMessage({
        address: message.address,
        abi: eventsPackage.abi,
        functionName: 'returnValue',
        input: { id: '0' },
        keyPair: keys,
    });

    expect(signedRunMessage.message.messageBodyBase64)
        .toEqual(runMessage.message.messageBodyBase64);
});

test('External Signing on ABI v2', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();
    const eventsPackage = await loadPackage.events(2);
    const deployParams = {
        package: eventsPackage,
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
    let signBytesBase64 = await crypto.naclSignDetached({
        base64: unsignedMessage.signParams.bytesToSignBase64,
    }, signKey.secret, TONOutputEncoding.Base64);

    const signed = await contracts.createSignedDeployMessage({
        signBytesBase64,
        unsignedMessage,
    });

    const message = await contracts.createDeployMessage(deployParams);
    expect(signed.message.messageBodyBase64)
        .toEqual(message.message.messageBodyBase64);


    const messageParams = {
        address: message.address,
        abi: eventsPackage.abi,
        functionName: 'returnValue',
        header: {
            pubkey: keys.public,
            time: Date.now(),
        },
        input: { id: '0' },
        keyPair: keys,
    };

    const unsignedRunMessage = await contracts.createUnsignedRunMessage(messageParams);
    signBytesBase64 = await crypto.naclSignDetached({
        base64: unsignedRunMessage.signParams.bytesToSignBase64,
    }, signKey.secret, TONOutputEncoding.Base64);
    const signedRunMessage = await contracts.createSignedRunMessage({
        unsignedMessage: unsignedRunMessage,
        signBytesBase64,
    });
    const runMessage = await contracts.createRunMessage(messageParams);

    expect(signedRunMessage).toEqual(runMessage);
});

test('Should change InitState of contract', async () => {
    jest.setTimeout(2000000);
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();
    const walletPackage = await loadPackage.checkInitParams(2);

    const initParams1 = {
        addressVariable: '0:fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321',
        uintVariable: '0x0',
        booleanVariable: true,
        bytesVariable: await crypto.randomGenerateBytes(32, TONOutputEncoding.Hex),
    };

    const initParams2 = {
        addressVariable: '0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        uintVariable: '0xffffffff',
        booleanVariable: false,
        bytesVariable: await crypto.randomGenerateBytes(64, TONOutputEncoding.Hex),
    };
    const deployed1 = await tests.deploy_with_giver({
        package: walletPackage,
        constructorParams: {},
        initParams: initParams1,
        keyPair: keys,
    });

    const deployed2 = await tests.deploy_with_giver({
        package: walletPackage,
        constructorParams: {},
        initParams: initParams2,
        keyPair: keys,
    });

    expect(deployed1.address)
        .not
        .toEqual(deployed2.address);

    let result1 = await contracts.runLocal({
        address: deployed1.address,
        functionName: 'getAddressVariable',
        abi: walletPackage.abi,
        input: {},
        keyPair: keys,
    });

    let result2 = await contracts.runLocal({
        address: deployed2.address,
        functionName: 'getAddressVariable',
        abi: walletPackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result1.output)
        .toEqual({ value0: initParams1.addressVariable });
    expect(result2.output)
        .toEqual({ value0: initParams2.addressVariable });

    result1 = await contracts.runLocal({
        address: deployed1.address,
        functionName: 'getUintVariable',
        abi: walletPackage.abi,
        input: {},
        keyPair: keys,
    });

    result2 = await contracts.runLocal({
        address: deployed2.address,
        functionName: 'getUintVariable',
        abi: walletPackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result1.output)
        .toEqual({ value0: initParams1.uintVariable });
    expect(result2.output)
        .toEqual({ value0: initParams2.uintVariable });


    result1 = await contracts.runLocal({
        address: deployed1.address,
        functionName: 'getBooleanVariable',
        abi: walletPackage.abi,
        input: {},
        keyPair: keys,
    });

    result2 = await contracts.runLocal({
        address: deployed2.address,
        functionName: 'getBooleanVariable',
        abi: walletPackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result1.output)
        .toEqual({ value0: initParams1.booleanVariable });
    expect(result2.output)
        .toEqual({ value0: initParams2.booleanVariable });

    result1 = await contracts.runLocal({
        address: deployed1.address,
        functionName: 'getBytesVariable',
        abi: walletPackage.abi,
        input: {},
        keyPair: keys,
    });

    result2 = await contracts.runLocal({
        address: deployed2.address,
        functionName: 'getBytesVariable',
        abi: walletPackage.abi,
        input: {},
        keyPair: keys,
    });

    expect(result1.output)
        .toEqual({ value0: initParams1.bytesVariable });
    expect(result2.output)
        .toEqual({ value0: initParams2.bytesVariable });
});

test.each(ABIVersions)('testSetCode (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const setCodePackage = await loadPackage.setCode(abiVersion);
    const setCode2Package = await loadPackage.setCode2(abiVersion);

    const deployed = await tests.deploy_with_giver({
        package: setCodePackage,
        constructorParams: {},
        keyPair: keys,
    });

    const version1 = await contracts.run({
        address: deployed.address,
        functionName: 'getVersion',
        abi: setCodePackage.abi,
        input: {},
        keyPair: keys,
    });
    expect(version1.output.value0)
        .toEqual('0x1');
    const code = await contracts.getCodeFromImage({
        imageBase64: setCode2Package.imageBase64,
    });
    await contracts.run({
        address: deployed.address,
        functionName: 'main',
        abi: setCodePackage.abi,
        input: { newcode: code.codeBase64 },
        keyPair: keys,
    });
    const newVersion = await contracts.run({
        address: deployed.address,
        functionName: 'getNewVersion',
        abi: setCode2Package.abi,
        input: {},
        keyPair: keys,
    });

    expect(newVersion.output.value0)
        .toEqual('0x2');
});

test.each(ABIVersions)('testRunBody (ABI v%i)', async (abiVersion) => {
    const { contracts } = tests.client;

    const subscriptionPackage = await loadPackage.subscription(abiVersion);
    const result = await contracts.createRunBody({
        abi: subscriptionPackage.abi,
        function: 'constructor',
        params: { wallet: walletAddress },
        keyPair: walletKeys,
    });

    const parseResult = await contracts.decodeInputMessageBody({
        abi: subscriptionPackage.abi,
        bodyBase64: result.bodyBase64,
    });

    expect(parseResult.function)
        .toEqual('constructor');
    expect(parseResult.output)
        .toEqual({ wallet: walletAddress });

    const resultInternal = await contracts.createRunBody({
        abi: subscriptionPackage.abi,
        function: 'constructor',
        params: { wallet: walletAddress },
        internal: true,
    });

    const parseResultInternal = await contracts.decodeInputMessageBody({
        abi: subscriptionPackage.abi,
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

// test.each(ABIVersions)('calc gas fee', async (abiVersion) => {
//     const { contracts, crypto, queries } = tests.client;
//     if (tests.nodeSe) {
//         console.log('[calc gas fee] Skip test on Node SE');
//         return;
//     }
//     const keys = await crypto.ed25519Keypair();
//
//     const walletPackage = WalletContractPackage[abiVersion];
//
//     // calculate fees for deploying the contract
//     const deployMessage = await contracts.createDeployMessage({
//         package: walletPackage,
//         constructorParams: {},
//         keyPair: keys,
//     });
//
//     const deployFees = await contracts.calcDeployFees({
//         package: walletPackage,
//         constructorParams: {},
//         keyPair: keys,
//         newAccount: true,
//     });
//
//     // use fees to get needed grams value from giver
//     const targetBalance = 500000000;
//
//     await tests.get_grams_from_giver(
//         deployMessage.address,
//         targetBalance + Number(deployFees.fees.totalAccountFees),
//     );
//
//     // deploy the contract
//     const deployed = await contracts.processDeployMessage(deployMessage);
//
//     const deployTransaction = (await queries.transactions.query(
//         {
//             in_msg: { eq: deployMessage.message.messageId },
//         },
//         'storage {storage_fees_collected}',
//     ))[0];
//
//     const originalBalance = (await queries.accounts.waitFor(
//         {
//             id: { eq: deployed.address },
//             code: { gt: '' },
//         },
//         'balance',
//     )).balance;
//
//     // giver sends message with IHR enabled and ihr_fee is added to target account balance
//     const ihrFee = 1500000;
//
//     // check that balance after deploy is the one we expected (except increased storage fee)
//     expect(Number(originalBalance))
//         .toEqual(
//             targetBalance
//             + ihrFee
//             + Number(deployFees.fees.storageFee)
//             - Number(deployTransaction.storage.storage_fees_collected),
//         );
//
//     // get fees for transaction to calculate possible send value
//     const runMessage = await contracts.createRunMessage({
//         address: deployed.address,
//         functionName: 'sendTransaction',
//         abi: walletPackage.abi,
//         input: {
//             dest: tests.get_giver_address(),
//             value: originalBalance,
//             bounce: false,
//         },
//         keyPair: keys,
//     });
//
//     const testFees = await contracts.calcMsgProcessFees({
//         address: deployed.address,
//         message: runMessage.message,
//         emulateBalance: true,
//     });
//
//     // send almost all balance with reserve for increased storage fee
//     const reserveValue = 100;
//     const sendValue = Number(originalBalance)
//         - Number(testFees.fees.totalAccountFees)
//         - Number(reserveValue);
//
//     // calculate fees for transaction with actual parameters
//     const calcFees = await contracts.calcRunFees({
//         address: deployed.address,
//         functionName: 'sendTransaction',
//         abi: walletPackage.abi,
//         input: {
//             dest: tests.get_giver_address(),
//             value: sendValue,
//             bounce: false,
//         },
//         keyPair: keys,
//     });
//
//     // perform real transaction
//     const resultNet = await contracts.run({
//         address: deployed.address,
//         functionName: 'sendTransaction',
//         abi: walletPackage.abi,
//         input: {
//             dest: tests.get_giver_address(),
//             value: sendValue,
//             bounce: false,
//         },
//         keyPair: keys,
//     });
//
//     const endBalance = (await queries.accounts.waitFor(
//         {
//             id: { eq: deployed.address },
//             balance: { lt: originalBalance },
//         },
//         'balance',
//     )).balance;
//
//     // check that we send almost all balance without reserved value
//     expect(Number(endBalance) < Number(reserveValue))
//         .toBeTruthy();
//
//     const transaction = await queries.transactions.query(
//         {
//             id: { eq: resultNet.transaction.id },
//         },
//         'storage {storage_fees_collected} compute {gas_fees} action {total_fwd_fees} total_fees',
//     );
//
//     // check actual fees
//     expect(calcFees.fees.gasFee)
//         .toEqual(transaction[0].compute.gas_fees);
//     // expect(localResult.fees.storageFee)
//     //.toEqual(transaction[0].storage.storage_fees_collected);
//     expect(calcFees.fees.outMsgsFwdFee)
//         .toEqual(transaction[0].action.total_fwd_fees);
//     // check all fees (with storage fee from real transaction) gives right result
//     expect(
//         Number(calcFees.fees.gasFee)
//         + Number(calcFees.fees.outMsgsFwdFee)
//         + Number(calcFees.fees.inMsgFwdFee)
//         + Number(transaction[0].storage.storage_fees_collected),
//     )
//         .toEqual(Number(originalBalance) - Number(sendValue) - Number(endBalance));
//
//     expect(Number(calcFees.fees.totalOutput) === sendValue)
//         .toBeTruthy();
// });

test('test boc hash', async () => {
    const { contracts } = tests.client;
    const bocBase64 = 'te6ccgEBAgEAxgABwYgAti0S4VOMe6uIVNX3nuDd7KSO13EsFEXDsUVaKRzBgdQCwaZuyAAAC3iWFUwMAK22OiKIN+R4x+31/j8LXRIYPh8iJGtncSuZ7FONbFNXAAAAAAAAAAAAAAAAAA9CQEABAMD3EJkJ6DsPCkGnV5lMTt6LIPRS7ViXPZjHMhJizNODUeKekStEXEUgmHS2vmokCRRUpsUhmwgFmkWaCatqe4wIlcBqp0PR+QAN1kt1SY8QavS350RCNNfeZ+ommI9hgd8=';
    const hash = 'adff1e7fd60632bb572b1afe0c2e569d8c68b1169994c48bc1ed92b3515c3b4e';

    const result = await contracts.getBocHash({ bocBase64 });

    expect(result.hash)
        .toEqual(hash);
});

test.each(ABIVersions)('test send boc (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const walletPackage = await loadPackage.wallet(abiVersion);
    const address = (await contracts.createDeployMessage({
        package: walletPackage,
        constructorParams: {},
        keyPair: keys,
    })).address;

    await tests.get_grams_from_giver(address);

    // create new message - to set new expire
    const message = await contracts.createDeployMessage({
        package: walletPackage,
        constructorParams: {},
        keyPair: keys,
    });

    // send message without id - it should be computed inside
    await contracts.processDeployMessage({
        message: {
            address: message.address,
            messageBodyBase64: message.message.messageBodyBase64,
            expire: message.message.expire,
        },
        address: message.address,
    });
});

test.each(ABIVersions)('test deploy lags (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto, config } = tests.client;
    config.startProfile();

    config.log('Start');
    const keys = await crypto.ed25519Keypair();
    const walletPackage = await loadPackage.wallet(abiVersion);
    const message = await contracts.createDeployMessage({
        package: walletPackage,
        constructorParams: {},
        keyPair: keys,
    });

    config.log('Before giver');

    await tests.get_grams_from_giver(message.address);

    config.log('After giver');

    await contracts.deploy({
        package: walletPackage,
        constructorParams: {},
        keyPair: keys,
    });

    config.log('After deploy');
    config.stopProfile();
});

declare function fail(message: string): void;

async function expectError(code: number, source: string, f) {
    try {
        await f();
        fail(`Expected error with code:${code} source: ${source}`);
    } catch (error) {
        expect({
            code: error.code,
            source: error.source,
        })
            .toEqual({
                code,
                source,
            });
    }
}

test('Test expire', async () => {
    const { contracts, crypto, queries } = tests.client;

    const helloKeys = await crypto.ed25519Keypair();
    const helloPackage = await loadPackage.hello(2);

    const contractData = await tests.deploy_with_giver({
        package: helloPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    const ltDeploy = (await queries.accounts.query(
        {
            id: { eq: contractData.address },
        },
        'last_trans_lt',
    ))[0].last_trans_lt;

    await contracts.run({
        address: contractData.address,
        abi: helloPackage.abi,
        functionName: 'touch',
        input: {},
        keyPair: helloKeys,
    });

    const ltRun = (await queries.accounts.query(
        {
            id: { eq: contractData.address },
        },
        'last_trans_lt',
    ))[0].last_trans_lt;

    expect(ltRun)
        .not
        .toEqual(ltDeploy);

    // to check message expiration we have to make some trick with `expire` value, because
    // SDK can not send already expired message

    // we create expired message
    const runMsg = await contracts.createRunMessage({
        address: contractData.address,
        abi: helloPackage.abi,
        functionName: 'touch',
        header: {
            expire: Math.floor(Date.now() / 1000) - 1,
        },
        input: {},
        keyPair: helloKeys,
    });
    // and then change `expire` to correct value in order to send it properly
    runMsg.message.expire = Math.floor(Date.now() / 1000) + 10;

    // no retries client
    const client = await TONClient.create({
        ...tests.config,
        messageRetriesCount: 0,
    });

    // SDK will wait for message processing using modified `expire` value,
    // but message was created already expired so contract won't accept it
    try {
        await client.contracts.processRunMessage(runMsg);
        fail('error expected');
    } catch (error) {
        expect(error)
            .toMatchObject({
                code: TONErrorCode.CONTRACT_EXECUTION_FAILED,
                data: {
                    exit_code: TONContractExitCode.MESSAGE_EXPIRED,
                },
            });
    }

    // TODO: uncomment it when node se will work like a regular node
    if (!nodeSe) {
        try {
            await client.contracts.processRunMessage(runMsg);
            fail('error expected');
        } catch (error) {
            expect(error)
                .toMatchObject({
                    code: TONErrorCode.MESSAGE_ALREADY_EXPIRED,
                    source: TONErrorSource.CLIENT,
                });
        }

        // check that expired message wasn't processed by the contract
        const ltExpire = (await queries.accounts.query(
            {
                id: { eq: contractData.address },
            },
            'last_trans_lt',
        ))[0].last_trans_lt;

        expect(ltExpire)
            .toEqual(ltRun);
    }
});

test('Test expire retries', async () => {
    const helloPackage = await loadPackage.hello(2);

    const helloKeys = await tests.client.crypto.ed25519Keypair();

    const contractData = await tests.deploy_with_giver({
        package: helloPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    const client = await TONClient.create({
        ...tests.config,
        messageExpirationTimeout: 5000,
        messageExpirationTimeoutGrowFactor: 1.1,
    });
    let completed = 0;
    const run = async () => {
        const result = await client.contracts.run({
            address: contractData.address,
            abi: helloPackage.abi,
            functionName: 'touch',
            input: {},
            keyPair: helloKeys,
        });
        console.log(`>>> run complete ${++completed}`);
        return result;
    };
    const runs = [];
    for (let i = 0; i < 10; i += 1) {
        runs.push(run());
    }
    await Promise.all(runs);
});

test.each(ABIVersions)('test parse message (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;

    const keys = await crypto.ed25519Keypair();
    const walletPackage = await loadPackage.wallet(abiVersion);
    const message = await contracts.createDeployMessage({
        package: walletPackage,
        constructorParams: {},
        keyPair: keys,
    });

    const parsedMsg = await contracts.parseMessage({
        bocBase64: message.message.messageBodyBase64,
    });

    expect(parsedMsg.dst)
        .toEqual(message.address);
});

test.each(ABIVersions)('Check deployed (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    const helloKeys = await crypto.ed25519Keypair();

    const helloPackage = await loadPackage.hello(abiVersion);
    const deployed = await tests.deploy_with_giver({
        package: helloPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    expect(deployed.alreadyDeployed)
        .toBeFalsy();

    const checked = await contracts.deploy({
        package: helloPackage,
        constructorParams: {},
        keyPair: helloKeys,
    });

    expect(checked.alreadyDeployed)
        .toBeTruthy();
});


test('Signing', async () => {
    const sensorPackage = await loadPackage.sensor(2);
    const client = tests.client;
    const ownerKeys = await client.crypto.ed25519Keypair();
    const deployKeys = await client.crypto.ed25519Keypair();
    const time = Math.round((Date.now() + 10000) / 1000);

    const deployMessage = await client.contracts.createDeployMessage({
        package: sensorPackage,
        constructorHeader: { time },
        constructorParams: { ownerKey: `0x${ownerKeys.public}` },
        keyPair: deployKeys,
    });

    const futureAddress = deployMessage.address;
    await tests.get_grams_from_giver(futureAddress);
    const helloAddress = (await client.contracts.deploy({
        package: sensorPackage,
        constructorParams: { ownerKey: `0x${ownerKeys.public}` },
        keyPair: deployKeys,
    })).address;


    await client.contracts.run({
        address: helloAddress,
        abi: sensorPackage.abi,
        functionName: 'setData',
        input: {
            input: 8,
        },
        keyPair: ownerKeys,
    });
});

