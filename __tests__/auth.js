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

import type { QTransaction, TONKeyPairData } from '../types';
import { tests } from './_/init-tests';


beforeAll(tests.init);
afterAll(tests.done);

const accountKeys: TONKeyPairData = {
    public: '05fe74606e1b0d01188303f8dc80671e21fabb8735df052f97a0b9c6659bd373',
    secret: '7ad5917b5e499890cc930a895d53d2c2044b217e203b6245e5daa715e200e84d',
};

test.skip('Unauthorized', async () => {
    let client;
    try {
        client = await tests.createClient({ accessKey: '' });
        await client.queries.accounts.query({}, 'id', undefined, 1);
    } catch (error) {
        expect(error.source)
            .toEqual('graphql');
        expect(error.code)
            .toEqual(401);
    }
    try {
        client = await tests.createClient({ accessKey: 'Foo' });
        await client.queries.accounts.query({}, 'id', undefined, 1);
    } catch (error) {
        expect(error.source)
            .toEqual('graphql');
        expect(error.code)
            .toEqual(401);
    }
});


// not implemented yet
test.skip('Register Access Keys', async () => {
    const managementClient = await tests.createClient({ accessKey: 'bypass' });
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: 'Foo' }],
        accountKeys,
    });
    const client = await tests.createClient({ accessKey: 'Foo' });
    const accounts = (await client.queries.accounts.query({}, 'id', undefined, 10));
    await managementClient.revokeAccessKeys({
        account: 'bypass',
        keys: ['Foo'],
        accountKeys,
    });
    try {
        await client.queries.accounts.query({}, 'id', undefined, 1);
    } catch (error) {
        expect(error.source)
            .toEqual('graphql');
        expect(error.code)
            .toEqual(401);
    }
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: 'Foo', restrictToAccounts: [accounts[0].id] }],
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

test.skip('Subscription restricted to accounts', async () => {
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
        keys: [{ key: 'Foo', restrictToAccounts: [accounts[0]] }],
        accountKeys
    });
    await managementClient.registerAccessKeys({
        account: 'bypass',
        keys: [{ key: 'Bar', restrictToAccounts: [accounts[1]] }],
        accountKeys
    });
    const client0 = await tests.createClient({ accessKey: 'Foo' });
    const client1 = await tests.createClient({ accessKey: 'Bar' });
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
