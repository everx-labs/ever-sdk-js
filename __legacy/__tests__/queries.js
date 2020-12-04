/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */
import { QTransactionProcessingStatus } from '../src/modules/TONContractsModule';
import { TONErrorCode } from '../src/TONClientError';
import { get_grams_from_giver } from './_/giver';
import { ABIVersions, tests } from './_/init-tests';

const loadPackage = {
    wallet: tests.packageLoader('WalletContract'),
};

beforeAll(tests.init);
afterAll(tests.done);

test('Close websocket during request', async () => {
    const queries = tests.client.queries;
    tests.client.config.data.networkTimeout = 1000;
    const interval = setInterval(() => {
        try {
            queries.wsLink.subscriptionClient.client.close();
        } catch (error) {
            console.log('>>>', error);
        }
    }, 500);
    try {
        await queries.accounts.query({
            filter: { id: { eq: '1' } },
            result: 'id',
            timeout: 10000,
        });
        clearInterval(interval);
        fail('Query must be forcibly aborted');
    } catch (error) {
        clearInterval(interval);
        expect(error.code).toEqual(TONErrorCode.QUERY_FORCIBLY_ABORTED);
    }
});

test.skip('(not test) Debug network errors during wait for', async () => {
    const queries = tests.client.queries;
    const accounts = await queries.accounts.waitFor({
        filter: { id: { eq: '3333' } },
        result: 'id',
        timeout: 10000,
    });
    console.log('>>>', accounts);
});

test('Specialized', async () => {
    const queries = tests.client.queries;
    let count = await queries.getAccountsCount();
    expect(count)
        .toBeGreaterThan(10);
    count = await queries.getTransactionsCount();
    expect(count)
        .toBeGreaterThan(10);
    const totalBalance = BigInt(await queries.getAccountsTotalBalance());
    expect(totalBalance > BigInt(10))
        .toBeTruthy();
});

// Skipped explicitly due to no expect
test.skip('Transaction List', async () => {
    const queries = tests.client.queries;
    const transaction = await queries.transactions.query({
        filter: {
            id: { eq: 'e19948d53c4fc8d405fbb8bde4af83039f37ce6bc9d0fc07bbd47a1cf59a8465' },
            status: {
                in: [
                    QTransactionProcessingStatus.proposed,
                    QTransactionProcessingStatus.finalized,
                ],
            },
        },
        result: 'id now status',
        limit: 1,
    });
    expect(transaction[0].id)
        .toEqual('e19948d53c4fc8d405fbb8bde4af83039f37ce6bc9d0fc07bbd47a1cf59a8465');
});

test('Block signatures', async () => {
    const queries = tests.client.queries;
    const signatures = await queries.blocks_signatures.query({
        filter: {},
        result: 'id',
        limit: 1,
    });
    expect(signatures.length)
        .toBeGreaterThanOrEqual(0);
});

test('All Accounts', async () => {
    const queries = tests.client.queries;
    const docs = await queries.accounts.query({
        filter: {},
        result: 'id balance',
    });
    expect(docs.length)
        .toBeGreaterThan(0);
});

// Skipped explicitly due to no expect
test.skip('Message', async () => {
    const queries = tests.client.queries;
    const messages = await queries.messages.query({
        filter: {
            id: { eq: '3a8e38b419a452fe7a0073e71c083f926055d0f249485ab9f8ca6e9825c20b8c' },
        },
        result: 'body created_at',
    });
    expect(messages[0].header.ExtOutMsgInfo.created_at)
        .toEqual(1562342740);
});

test('Ranges', async () => {
    const queries = tests.client.queries;
    const messages = await queries.messages.query({
        filter: { created_at: { gt: 1562342740 } },
        result: 'body created_at',
    });
    expect(messages[0].created_at)
        .toBeGreaterThan(1562342740);
});

test('Wait For', async () => {
    const queries = tests.client.queries;
    const data = await queries.transactions.waitFor({
        filter: {
            now: { gt: 1563449 },
        },
        result: 'id status',
    });
    expect(data.status)
        .toEqual(QTransactionProcessingStatus.finalized);
});

const transactionWithAddresses = `
    id
    account_addr
    in_message { dst src value }
`;

test.each(ABIVersions)('Subscribe for transactions with addresses (ABIv%i)', async (abiVersion) => {
    const { contracts, queries, crypto } = tests.client;
    const walletPackage = await loadPackage.wallet(abiVersion);
    const walletKeys = await crypto.ed25519Keypair();

    const deployData = await contracts.getDeployData({
        ...walletPackage,
        publicKeyHex: walletKeys.public,
    });

    console.log('>>>', 'Paying...');
    await get_grams_from_giver(deployData.address);

    const message = await contracts.createDeployMessage({
        package: walletPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });

    console.log('>>>', `Subscribe to transactions on [${message.address}]...`);
    const transactions = [];
    const subscription = (await queries.transactions.subscribe({
        filter: {
            account_addr: { eq: message.address },
        },
        result: 'id',
        onDocEvent(e, d) {
            console.log('>>> Subscription triggered', d);
            transactions.push(d);
        },
    }));

    console.log('>>>', 'Deploying...');
    await contracts.processDeployMessage(message);
    console.log('>>>', 'Waiting...');
    await new Promise(resolve => setTimeout(resolve, 1_000));
    subscription.unsubscribe();
    expect(transactions.length)
        .toBeGreaterThan(0);
});

test.each(ABIVersions)('Subscribe for messages (ABI v%i)', async (abiVersion) => {
    const { contracts, queries, crypto } = tests.client;
    const walletPackage = await loadPackage.wallet(abiVersion);
    const docs = [];
    const subscription = (await queries.messages.subscribe({
        filter: {
            src: { eq: '1' },
        },
        result: 'id',
        onDocEvent(e, doc) {
            docs.push(doc);
        },
    }));

    const walletKeys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: walletPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });

    await get_grams_from_giver(message.address);

    await contracts.deploy({
        package: walletPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });
    subscription.unsubscribe();
    expect(docs.length)
        .toEqual(0);
});

test('Transactions with addresses', async () => {
    const queries = tests.client.queries;
    const tr = (await queries.transactions.query({
        filter: {},
        result: transactionWithAddresses,
    }))[0];
    expect(tr)
        .toBeTruthy();
});

// Skipped explicitly as disabled
test.skip('Subscribe for failed server', async () => {
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
    const queryResult = (await tests.client.queries.blocks.query({
        filter: {},
        result: shardHashesQuery,
    }));
    expect(queryResult.length)
        .toBeGreaterThan(0);
});

// Skipped explicitly as disabled
test.skip('Subscribe for accounts', async () => {
    // const { queries } = tests.client;
    // const subscriptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //  .map(i => queries.accounts.subscribe({}, 'id code data', (e, doc) => {
    //     console.log(i, doc.id);
    // }));
    // await new Promise(resolve => setTimeout(resolve, 1000_000));
    // subscriptions.forEach(x => x.unsubscribe());
});


// Skipped explicitly as disabled
test.skip('Long time subscription', async () => {
    jest.setTimeout(1000000);
    const { queries } = tests.client;
    const subscription = queries.accounts.subscribe({}, 'id code_hash data_hash', (e, doc) => {
        console.log(doc.id);
    });
    await new Promise(resolve => setTimeout(resolve, 1_000_000));
    subscription.unsubscribe();
});
