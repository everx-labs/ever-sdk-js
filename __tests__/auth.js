/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */

// @flow

import type {
    QTransaction,
    TONClient,
    TONContractDeployResult, TONContractRunLocalParams,
    TONContractRunParams,
    TONContractRunResult,
    TONKeyPairData
} from '../types';
import { tests } from './_/init-tests';


beforeAll(tests.init);
afterAll(tests.done);

const accountKeys: TONKeyPairData = {
    public: '05fe74606e1b0d01188303f8dc80671e21fabb8735df052f97a0b9c6659bd373',
    secret: '7ad5917b5e499890cc930a895d53d2c2044b217e203b6245e5daa715e200e84d',
};

declare function fail(message: string): void;

async function expectError(code: number, source: string, f) {
    try {
        await f();
        fail(`Expected error with code:${code} source: ${source}`);
    } catch (error) {
        expect({ code: error.code, source: error.source }).toEqual({ code, source });
    }
}

test.skip('Unauthorized', async () => {
    let client;
    await expectError(401, 'graphql', async () => {
        client = await tests.createClient({ accessKey: '' });
        await client.queries.accounts.query({}, 'id', undefined, 1);
    });
    await expectError(401, 'graphql', async () => {
        client = await tests.createClient({ accessKey: 'Foo' });
        await client.queries.accounts.query({}, 'id', undefined, 1);
    });
});


// not implemented yet
test.skip('Register Access Keys', async () => {
    const fooKey = 'FooFooFoo';
    const managementClient = await tests.createClient({ accessKey: 'bypass' });
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: fooKey }],
        accountKeys,
    });
    const client = await tests.createClient({ accessKey: fooKey });
    const accounts = (await client.queries.accounts.query({}, 'id', undefined, 10));
    await managementClient.revokeAccessKeys({
        account: 'bypass',
        keys: [fooKey],
        accountKeys,
    });
    await expectError(401, 'graphql', async () => {
        await client.queries.accounts.query({}, 'id', undefined, 1);
    });
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: fooKey, restrictToAccounts: [accounts[0].id] }],
        accountKeys
    });
    const restrictedAccounts = (await client.queries.accounts.query({}, 'id', undefined, 10));
    expect(restrictedAccounts.length)
        .toEqual(1);
    expect(restrictedAccounts[0])
        .toEqual(accounts[0]);
    const restrictedBlocks = (await client.queries.blocks.query(
        {},
        'id',
        undefined,
        10,
    ));
    expect(restrictedBlocks.length)
        .toEqual(0);
    const restrictedTransactions = (await client.queries.transactions.query(
        {},
        'id account_addr',
        undefined,
        10,
    ));
    restrictedTransactions.forEach((tr: QTransaction) => {
        expect(tr.account_addr)
            .toEqual(accounts[0].id);
    });
    const restrictedMessages = (await client.queries.messages.query(
        {},
        'id src dst',
        undefined,
        10,
    ));
    restrictedMessages.forEach((msg) => {
        expect(msg.src === accounts[0].id || msg.dst === accounts[0].id)
            .toBeTruthy();
    });
});

test.skip('Run restricted contract', async () => {
    const fooKey = 'FooFooFoo';
    const barKey = 'BarBarBar';
    jest.setTimeout(100000);
    const managementClient = await tests.createClient({ accessKey: 'bypass' });

    const fooKeys = await managementClient.crypto.ed25519Keypair();
    const barKeys = await managementClient.crypto.ed25519Keypair();
    const helloPackage = await tests.packageLoader('Hello')(2);

    const fooDeploy = await managementClient.contracts.createDeployMessage({
        package: helloPackage,
        constructorParams: {},
        keyPair: fooKeys,
    });

    const barDeploy = await managementClient.contracts.createDeployMessage({
        package: helloPackage,
        constructorParams: {},
        keyPair: barKeys,
    });

    console.log('>>>', 'sponsoring foo...');
    await tests.get_grams_from_giver(fooDeploy.address, 1000000000);
    console.log('>>>', 'sponsoring bar...');
    await tests.get_grams_from_giver(barDeploy.address, 1000000000);

    console.log('>>>', 'registering access keys...');
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: fooKey, restrictToAccounts: [fooDeploy.address] }],
        accountKeys,
    });
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: barKey, restrictToAccounts: [barDeploy.address] }],
        accountKeys,
    });

    const fooClient: TONClient = await tests.createClient({ accessKey: fooKey });
    const barClient: TONClient = await tests.createClient({ accessKey: barKey });

    console.log('>>>', 'deploying bar using foo access...');
    await expectError(401, 'graphql', async () => {
        await fooClient.contracts.processDeployMessage(barDeploy);
    });
    console.log('>>>', 'deploying foo using bar access...');
    await expectError(401, 'graphql', async () => {
        await barClient.contracts.processDeployMessage(fooDeploy);
    });

    console.log('>>>', 'deploying foo...');
    const fooResponse: TONContractDeployResult = await fooClient.contracts.processDeployMessage(fooDeploy);
    expect(fooResponse.transaction?.status).toEqual(3);

    console.log('>>>', 'deploying bar...');
    const barResponse: TONContractDeployResult = await barClient.contracts.processDeployMessage(barDeploy);
    expect(barResponse.transaction?.status).toEqual(3);


    const testRun = async (address, keyPair, myClient, otherClient) => {
        const params: TONContractRunParams = {
            abi: helloPackage.abi,
            functionName: 'touch',
            input: {},
            address,
            keyPair,
        };
        await expectError(401, 'graphql', async () => {
            await otherClient.contracts.run(params);
        });
        const response: TONContractRunResult = await myClient.contracts.run(params);
        expect(response.transaction?.status).toEqual(3);

    };

    console.log('>>>', 'run...');
    await testRun(barDeploy.address, barKeys, barClient, fooClient);
    await testRun(fooDeploy.address, fooKeys, fooClient, barClient);


    const testRunLocal = async (address, keyPair, myClient, otherClient) => {
        const params: TONContractRunLocalParams = {
            abi: helloPackage.abi,
            functionName: 'touch',
            input: {},
            address,
            keyPair,
            waitParams: {
                timeout: 1000,
            },
        };
        await expectError(1003, 'client', async () => {
            await otherClient.contracts.runLocal(params);
        });
        const response: TONContractRunResult = await myClient.contracts.runLocal(params);
        expect(response.output).toBeNull();

    };

    console.log('>>>', 'run local...');
    await testRunLocal(barDeploy.address, barKeys, barClient, fooClient);
    await testRunLocal(fooDeploy.address, fooKeys, fooClient, barClient);
});


test.skip('Subscription restricted to accounts', async () => {
    const fooKey = 'FooFooFoo';
    const barKey = 'BarBarBar';
    const managementClient = await tests.createClient({ accessKey: 'bypass' });
    const giver = tests.get_giver_address();
    const accounts = (await managementClient.queries.accounts.query(
        { id: { notIn: [giver] } },
        'id',
        undefined,
        10
    )).map(x => x.id);
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: fooKey, restrictToAccounts: [accounts[0]] }],
        accountKeys
    });
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: barKey, restrictToAccounts: [accounts[1]] }],
        accountKeys
    });
    const client0 = await tests.createClient({ accessKey: fooKey });
    const client1 = await tests.createClient({ accessKey: barKey });
    const events0 = [];
    const events1 = [];
    client0.queries.transactions.subscribe({
        filter: {},
        result: 'id account_addr',
        onDocEvent(e, d) {
            events0.push(d);
        }
    });
    client1.queries.transactions.subscribe({
        filter: {},
        result: 'id account_addr',
        onDocEvent(e, d) {
            events1.push(d);
        }
    });
    await tests.get_grams_from_giver(accounts[0], 1000000000);
    await tests.get_grams_from_giver(accounts[1], 1000000000);
    await new Promise(resolve => setTimeout(resolve, 1000));
    for (const e of events0) {
        expect(e.account_addr).toEqual(accounts[0]);
    }
    for (const e of events1) {
        expect(e.account_addr).toEqual(accounts[1]);
    }
});
