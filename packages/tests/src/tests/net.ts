/*
 * Copyright 2018-2021 TON Labs LTD.
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

import { AggregationFn, SortDirection } from "@eversdk/core";

import { ABIVersions, runner } from "../runner";
import { expect, jest, test } from "../jest";
import { contracts } from "../contracts";

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

test("net: query_collection - Block signatures", async () => {
    const net = runner.getClient().net;

    const signaturesQuery = await net.query_collection({
        collection: Collection.blocks_signatures,
        filter: {},
        result: "id",
        limit: 1,
    });

    expect(signaturesQuery.result.length).toBeGreaterThanOrEqual(0);
});

test("net: query_collection - Accounts", async () => {
    const net = runner.getClient().net;

    const accountsQuery = await net.query_collection({
        collection: Collection.accounts,
        filter: {},
        result: "id balance",
        limit: 1,
    });

    expect(accountsQuery.result.length).toBeGreaterThan(0);
});

test("net: query_collection - Messages", async () => {
    const net = runner.getClient().net;

    const messagesQuery = await net.query_collection({
        collection: Collection.messages,
        filter: {},
        result: "id",
        limit: 1,
    });

    expect(messagesQuery.result.length).toBeGreaterThan(0);
});

test("net: query_collection - Transactions", async () => {
    const net = runner.getClient().net;

    const transactionsQuery = await net.query_collection({
        collection: Collection.transactions,
        filter: {},
        result: "id",
        limit: 1,
    });
    
    expect(transactionsQuery.result.length).toBeGreaterThan(0);
});

test("net: query_collection - Blocks", async () => {
    const net = runner.getClient().net;

    const blocksQuery = await net.query_collection({
        collection: Collection.blocks,
        filter: {},
        result: "id",
        limit: 1,
    });
    
    expect(blocksQuery.result.length).toBeGreaterThan(0);
});

test("net: query_collection - Ranges", async () => {
    const net = runner.getClient().net;

    const messages = await net.query_collection({
        collection: Collection.messages,
        filter: {created_at: {gt: 1562342740}},
        result: "body created_at",
    });

    expect(messages.result[0].created_at).toBeGreaterThan(1562342740);
});

const testCountAggregation = async (collection: string, count: number) => {
    const net = runner.getClient().net;

    const result = await net.aggregate_collection({
        collection,
        filter: {},
        fields: [{
            field: "id",
            fn: AggregationFn.COUNT,
        }],
    });

    expect(Number(result.values[0])).toBeGreaterThanOrEqual(count);
};

test("net: aggregate_collection - count", async () => {
    await testCountAggregation(Collection.blocks_signatures, 0);
    await testCountAggregation(Collection.accounts, 1);
    await testCountAggregation(Collection.blocks, 1);
    await testCountAggregation(Collection.messages, 1);
    await testCountAggregation(Collection.transactions, 1);
});

const testAggregateFunctions = async (collection: string, field: string) => {
    const net = runner.getClient().net;

    const result = await net.aggregate_collection({
        collection,
        filter: {},
        fields: [
            {
                field,
                fn: AggregationFn.MIN,
            },
            {
                field,
                fn: AggregationFn.MAX,
            },
            {
                field,
                fn: AggregationFn.SUM,
            },
            {
                field,
                fn: AggregationFn.AVERAGE,
            },
        ],
    });

    expect(result.values[0]).toBeDefined();
    expect(result.values[1]).toBeDefined();
    expect(result.values[2]).toBeDefined();
    expect(result.values[3]).toBeDefined();
};

test("net: aggregate_collection - Account balance", async () => {
    await testAggregateFunctions(Collection.accounts, "balance");
});

test("net: wait_for_collection", async () => {
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

test.each(ABIVersions)("net: Subscribe (subscribe_collection) for transactions with addresses (ABIv%i)", async (abiVersion) => {
    const net = runner.getClient().net;
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

    // hack for Windows-assembled TON NODE SE
    // issue: https://github.com/tonlabs/tonos-se/issues/13
    await new Promise((resolve=>setTimeout(resolve, 5_000)));

    await wallet.deploy();
    await new Promise(resolve => setTimeout(resolve, 1_000));
    await net.unsubscribe({handle: subscription});

    expect(transactions.length).toBeGreaterThan(0);
});

// This is a filter test
test.each(ABIVersions)("net: Subscribe (subscribe_collection) for messages (ABI v%i)", async (abiVersion) => {
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
    await runner.deploy(wallet);
    await net.unsubscribe({handle: subscription});

    expect(docs.length).toEqual(0);
});


test("net: Query (query_collection) transactions with addresses", async () => {
    const net = runner.getClient().net;

    const queryResult = await net.query_collection({
        collection: Collection.transactions,
        filter: {},
        result: transactionWithAddresses,
    });

    expect(queryResult.result[0]).toBeTruthy();
});


// Skipped explicitly as disabled
test.skip("Subscribe for failed server", async () => {
    // const net = runner.getClient().net;
    // console.log(">>>", "Subscribed");
    // tests.client.queries.accounts.subscribe(
    //     {
    //         id: { eq: "-1:3333333333333333333333333333333333333333333333333333333333333333" }
    //     },
    //     "id balance",
    //     (e, d) => {
    //         console.log("">>>", e, d);
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

test("net: Check (query_collection) shard_hashes greater then 0", async () => {
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
    //  .map(i => queries.accounts.subscribe({}, "id code data", (e, doc) => {
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

test("net: Validator set", async () => {
    if (runner.config.network?.endpoints?.[0].startsWith("http://localhost")) {
        console.log("Skipping validator set test on localhost");
        return;
    }

    const net = runner.getClient().net;

    // test https://docs.ton.dev/86757ecb2/p/978847-get-config
    const result = await net.query_collection({
        collection: Collection.blocks,
        filter: {},
        order: [{
            path: "seq_no",
            direction: SortDirection.DESC,
        }],
        limit: 1,
        result: "prev_key_block_seqno",
    });
    expect(result.result.length)
        .toEqual(1);
    const seq_no = result.result[0].prev_key_block_seqno;
    expect(seq_no)
        .toBeGreaterThanOrEqual(0);

    // no masterblock before first election and seq_no = 0
    if (seq_no > 0) {
        const config = await net.query_collection({
            collection: Collection.blocks,
            filter: {
                seq_no: { eq: seq_no },
                workchain_id: { eq: -1 },
            },
            result: "master { config { p15 { validators_elected_for elections_start_before elections_end_before stake_held_for } p16 { max_validators max_main_validators min_validators } p17 { min_stake max_stake min_total_stake max_stake_factor } p34 { utime_since utime_until total total_weight list { public_key adnl_addr weight } } } }",
        });
        expect(config.result.length)
            .toEqual(1);
        const p15ConfigParams = config.result[0].master.config.p15;
        expect(p15ConfigParams.validators_elected_for)
            .toBeGreaterThan(0);
        expect(p15ConfigParams.elections_start_before)
            .toBeGreaterThan(0);
        expect(p15ConfigParams.elections_end_before)
            .toBeGreaterThan(0);
        expect(p15ConfigParams.stake_held_for)
            .toBeGreaterThan(0);

        const p16ConfigParams = config.result[0].master.config.p16;
        expect(BigInt(p16ConfigParams.max_validators))
            .toBeGreaterThan(BigInt(p16ConfigParams.min_validators));
        expect(BigInt(p16ConfigParams.max_validators))
            .toBeGreaterThanOrEqual(p16ConfigParams.max_main_validators);

        const p17ConfigParams = config.result[0].master.config.p17;
        expect(p17ConfigParams.min_stake)
            .toBeDefined();
        expect(p17ConfigParams.max_stake)
            .toBeDefined();
        expect(BigInt(p17ConfigParams.min_stake))
            .toBeLessThanOrEqual(BigInt(p17ConfigParams.max_stake));
        expect(BigInt(p17ConfigParams.min_total_stake))
            .toBeLessThanOrEqual(BigInt(p17ConfigParams.max_stake));
        expect(p17ConfigParams.min_total_stake)
            .toBeDefined();
        expect(p17ConfigParams.max_stake_factor)
            .toBeDefined();

        const validatorSetList = config.result[0].master.config.p34.list;
        const p34ConfigParams = config.result[0].master.config.p34;
        expect(p34ConfigParams.total)
            .toEqual(validatorSetList.length);
        let weight = BigInt(0);
        for (let i = 0; i < validatorSetList.length; i++) {
            expect(validatorSetList[i].adnl_addr)
                .toBeDefined();
            expect(validatorSetList[i].public_key)
                .toBeDefined();
            expect(validatorSetList[i].public_key.length)
                .toEqual(64);
            weight += BigInt(validatorSetList[i].weight);
        }
        expect(BigInt(p34ConfigParams.total_weight))
            .toEqual(weight);
    }
});
