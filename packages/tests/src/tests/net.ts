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

import {ABIVersions, runner} from "../runner";
import {expect, jest, test} from "../jest";
import {contracts} from "../contracts";

test("net", async () => {
    const net = runner.getClient().net;
    expect(net).not.toBeNull();
});

enum Collection {
    accounts = "accounts",
    messages = "messages",
    transactions = "transactions",
    blocks_signatures = "blocks_signatures",
    blocks = "blocks",
}

test("Block signatures", async () => {
    const net = runner.getClient().net;
    const signatures = await net.query_collection({
        collection: Collection.blocks_signatures,
        filter: {},
        result: "id",
        limit: 1,
    });
    expect(signatures.result.length).toBeGreaterThanOrEqual(0);
});

test("All Accounts", async () => {
    const net = runner.getClient().net;
    const docs = await net.query_collection({
        collection: Collection.accounts,
        filter: {},
        result: "id balance",
    });
    expect(docs.result.length).toBeGreaterThan(0);
});

// Skipped because of missing id
test.skip("Message", async () => {
    const net = runner.getClient().net;
    const messages = await net.query_collection({
        collection: Collection.messages,
        filter: {
            id: {eq: "3a8e38b419a452fe7a0073e71c083f926055d0f249485ab9f8ca6e9825c20b8c"},
        },
        result: "body created_at",
    });
    expect(messages.result[0].header.ExtOutMsgInfo.created_at).toEqual(1562342740);
});

test("Ranges", async () => {
    const net = runner.getClient().net;
    const messages = await net.query_collection({
        collection: Collection.messages,
        filter: {created_at: {gt: 1562342740}},
        result: "body created_at",
    });
    expect(messages.result[0].created_at).toBeGreaterThan(1562342740);
});

test("Wait For", async () => {
    const net = runner.getClient().net;
    const data = await net.wait_for_collection({
        collection: Collection.transactions,
        filter: {
            now: {gt: 1563449},
        },
        result: "id status",
    });
    expect(data.result.status).toEqual(3);
});

const transactionWithAddresses = `
    id
    account_addr
    in_message { dst src value }
`;

test.each(ABIVersions)("Subscribe for transactions with addresses (ABIv%i)", async (abiVersion) => {
    const {net} = runner.getClient();
    const wallet = await runner.getAccount(contracts.WalletContract, abiVersion);
    await runner.sendGramsTo(await wallet.getAddress());

    const transactions = [];
    const subscription = (await net.subscribe_collection({
            collection: Collection.transactions,
            filter: {
                account_addr: {eq: await wallet.getAddress()},
            },
            result: "id",
        },
        (d) => {
            transactions.push(d.result);
        })).handle;

    await wallet.deploy();
    await new Promise(resolve => setTimeout(resolve, 1_000));
    await net.unsubscribe({handle: subscription});
    expect(transactions.length).toBeGreaterThan(0);
});

test.each(ABIVersions)("Subscribe for messages (ABI v%i)", async (abiVersion) => {
    const {net} = runner.getClient();
    const docs = [];
    const subscription = (await net.subscribe_collection({
            collection: Collection.messages,
            filter: {
                src: {eq: "1"},
            },
            result: "id",
        },
        (evt) => {
            docs.push(evt.result);
        },
    )).handle;

    const wallet = await runner.getAccount(contracts.WalletContract, abiVersion);
    await runner.sendGramsTo(await wallet.getAddress());
    await wallet.deploy();
    await net.unsubscribe({handle: subscription});
    expect(docs.length).toEqual(0);
});


test("Transactions with addresses", async () => {
    const net = runner.getClient().net;
    const tr = (await net.query_collection({
        collection: Collection.transactions,
        filter: {},
        result: transactionWithAddresses,
    })).result[0];
    expect(tr).toBeTruthy();
});


// Skipped explicitly as disabled
test.skip("Subscribe for failed server", async () => {
    // const net = runner.getClient().net;
    // console.log('>>>', 'Subscribed');
    // tests.client.queries.accounts.subscribe(
    //     {
    //         id: { eq: "-1:3333333333333333333333333333333333333333333333333333333333333333" }
    //     },
    //     'id balance',
    //     (e, d) => {
    //         console.log('>>>', e, d);
    //     });
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 100_000);
    // })
});
const shardHashesQuery = `
    workchain_id
    master {
        shard_hashes {
          workchain_id
          shard
          descr {seq_no}
        }
    }
`;

test("Check shard_hashes greater then 0", async () => {
    const net = runner.getClient().net;
    const queryResult = await net.query_collection({
        collection: Collection.blocks,
        filter: {},
        result: shardHashesQuery,
    });
    expect(queryResult.result.length).toBeGreaterThan(0);
});

// Skipped explicitly as disabled
test.skip("Subscribe for accounts", async () => {
    // const net = runner.getClient().net;
    // const { queries } = tests.client;
    // const subscriptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //  .map(i => queries.accounts.subscribe({}, 'id code data', (e, doc) => {
    //     console.log(i, doc.id);
    // }));
    // await new Promise(resolve => setTimeout(resolve, 1000_000));
    // subscriptions.forEach(x => x.unsubscribe());
});


// Skipped explicitly as disabled
test.skip("Long time subscription", async () => {
    const net = runner.getClient().net;
    jest.setTimeout(1000000);
    const subscription = await net.subscribe_collection({
        collection: Collection.accounts,
        filter: {},
        result: "id code_hash data_hash",
    }, (doc) => {
        console.log(doc.id);
    });
    await new Promise(resolve => setTimeout(resolve, 1_000_000));
    await net.unsubscribe({handle: subscription.handle});
});
