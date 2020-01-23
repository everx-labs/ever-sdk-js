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

import { QTransactionProcessingStatus } from "../src/modules/TONContractsModule";
import { get_grams_from_giver } from "./_/giver";
import { WalletContractPackage } from "./contracts/WalletContract";
import { tests } from "./_/init-tests";

beforeAll(tests.init);
afterAll(tests.done);

test('Specialized', async () => {
    const queries = tests.client.queries;
    let count = await queries.getAccountsCount();
    expect(count).toBeGreaterThan(10);
    count = await queries.getTransactionsCount();
    expect(count).toBeGreaterThan(10);
    const totalBalance = BigInt(await queries.getAccountsTotalBalance());
    expect(totalBalance > BigInt(10)).toBeTruthy();
});

test('Transaction List', async () => {
    const queries = tests.client.queries;
    const transaction = await queries.transactions.query({
        id: { eq: 'e19948d53c4fc8d405fbb8bde4af83039f37ce6bc9d0fc07bbd47a1cf59a8465' },
        status: { in: [QTransactionProcessingStatus.proposed, QTransactionProcessingStatus.finalized] }
    }, 'id now status', [], 1);
    // expect(transaction[0].id).toEqual('e19948d53c4fc8d405fbb8bde4af83039f37ce6bc9d0fc07bbd47a1cf59a8465');
});

test('All Accounts', async () => {
    const queries = tests.client.queries;
    const docs = await queries.accounts.query({}, 'id balance');
    expect(docs.length).toBeGreaterThan(0);
});

test('Message', async () => {
    const queries = tests.client.queries;
    const messages = await queries.messages.query({
        id: { eq: '3a8e38b419a452fe7a0073e71c083f926055d0f249485ab9f8ca6e9825c20b8c' }
    }, 'body created_at');
    // expect(messages[0].header.ExtOutMsgInfo.created_at).toEqual(1562342740);
});

test('Ranges', async () => {
    const queries = tests.client.queries;
    const messages = await queries.messages.query(
        { created_at: { gt: 1562342740 }, },
        'body created_at');
    expect(messages[0].created_at).toBeGreaterThan(1562342740);
});

test('Wait For', async () => {
    const queries = tests.client.queries;
    const data = await queries.transactions.waitFor({
        now: { gt: 1563449 },
    }, 'id status');
    expect(data.status).toEqual(QTransactionProcessingStatus.finalized);
});

const transactionWithAddresses = `
    id
    account_addr
    in_message { dst src value }
`;

test("Subscribe for transactions with addresses", async () => {
    const { contracts, queries, crypto } = tests.client;
    const walletKeys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });

    console.log('>>>', `Subscribe to transactions on [${message.address}]...`);
    const transactions = [];
    const subscription = (await queries.transactions.subscribe({
        in_msg: { eq: message.message.messageId }
    }, 'id', (e, d) => {
        console.log('>>> Subscription triggered', d);
        transactions.push(d);
    }));

    console.log('>>>', 'Paying...');
    await get_grams_from_giver(message.address);

    console.log('>>>', 'Deploying...');
    await contracts.processDeployMessage(message);
    console.log('>>>', 'Waiting...');
    await new Promise(resolve => setTimeout(resolve, 1_000));
    subscription.unsubscribe();
    expect(transactions.length).toBeGreaterThan(0);
});

test("Subscribe for messages", async () => {
    const { contracts, queries, crypto } = tests.client;
    const docs = [];
    const subscription = (await queries.messages.subscribe({
        src: { eq: '1' }
    }, 'id', (e, doc) => {
        docs.push(doc);
    }));

    const walletKeys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });

    await get_grams_from_giver(message.address);

    await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });
    subscription.unsubscribe();
    expect(docs.length).toEqual(0);
});

test("Transactions with addresses", async () => {
    const queries = tests.client.queries;
    const tr = (await queries.transactions.query({}, transactionWithAddresses))[0];
    expect(tr).toBeTruthy();
});


test("Subscribe for failed server", async () => {
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

test('Check shard_hashes greater then 0', async () => {
    const queryResult = (await tests.client.queries.blocks.query({}, shardHashesQuery));
    expect(queryResult.length)
        .toBeGreaterThan(0);
});


test("Subscribe for accounts", async () => {
    // const { queries } = tests.client;
    // const subscriptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => queries.accounts.subscribe({}, 'id code data', (e, doc) => {
    //     console.log(i, doc.id);
    // }));
    // await new Promise(resolve => setTimeout(resolve, 1000_000));
    // subscriptions.forEach(x => x.unsubscribe());
});

