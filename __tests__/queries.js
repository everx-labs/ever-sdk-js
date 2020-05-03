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

import {QTransactionProcessingStatus} from '../src/modules/TONContractsModule';
import {get_grams_from_giver} from './_/giver';
import {ABIVersions, tests} from './_/init-tests';

const WalletContractPackage = tests.loadPackage('WalletContract');

beforeAll(tests.init);
afterAll(tests.done);

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
    // expect(transaction[0].id).toEqual(
    // 'e19948d53c4fc8d405fbb8bde4af83039f37ce6bc9d0fc07bbd47a1cf59a8465'
    // );
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
    // expect(messages[0].header.ExtOutMsgInfo.created_at).toEqual(1562342740);
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
    const walletPackage = WalletContractPackage[abiVersion];
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
    const walletPackage = WalletContractPackage[abiVersion];
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


test('Aggregations', async () => {
    const testCollection = async (c, n) => {
        const tr = (await c.aggregate({
            filter: {},
            fields: [{ field: 'id', fn: 'COUNT' }],
        }))[0];
        expect(Number(tr)).toBeGreaterThanOrEqual(n);
    };
    const queries = tests.client.queries;
    await testCollection(queries.accounts, 1);
    await testCollection(queries.blocks, 1);
    await testCollection(queries.transactions, 1);
    await testCollection(queries.messages, 1);
    await testCollection(queries.blocks_signatures, 0);
});

test('Should correctly perform aggregation queries for Account, Block, Transaction numeric fields', async () => {
    const testCollection = async (c, field) => {
        const tr = (await c.aggregate({
            filter: {},
            fields: [
                { field, fn: 'MIN' },
                { field, fn: 'MAX' },
                { field, fn: 'SUM' },
                { field, fn: 'AVERAGE' },
            ],
        }));
        console.log(`${field}:`);
        console.log(Number(tr[0]));
        console.log(Number(tr[1]));
        console.log(Number(tr[2]));
        console.log(Number(tr[3]));
        expect(Number(tr[0])).toBeDefined();
        expect(Number(tr[1])).toBeDefined();
        expect(Number(tr[2])).toBeDefined();
        expect(Number(tr[3])).toBeDefined();
    };
    const queries = tests.client.queries;
    await testCollection(queries.accounts, 'workchain_id');
    //await testCollection(queries.accounts, 'acc_type');
    await testCollection(queries.accounts, 'last_paid');
    await testCollection(queries.accounts, 'due_payment');
    await testCollection(queries.accounts, 'last_trans_lt');
    await testCollection(queries.accounts, 'balance');
    await testCollection(queries.accounts, 'balance_other.currency');
    await testCollection(queries.accounts, 'split_depth');
    //  await testCollection(queries.blocks, 'status');
    await testCollection(queries.blocks, 'global_id');
    await testCollection(queries.blocks, 'seq_no');
    await testCollection(queries.blocks, 'gen_utime');
    await testCollection(queries.blocks, 'gen_catchain_seqno');
    await testCollection(queries.blocks, 'flags');
    await testCollection(queries.blocks, 'master_ref.end_lt');
    await testCollection(queries.blocks, 'master_ref.seq_no');
    await testCollection(queries.blocks, 'prev_ref.end_lt');
    await testCollection(queries.blocks, 'prev_ref.seq_no');
    await testCollection(queries.blocks, 'prev_alt_ref.end_lt');
    await testCollection(queries.blocks, 'prev_alt_ref.seq_no');
    await testCollection(queries.blocks, 'prev_vert_ref.end_lt');
    await testCollection(queries.blocks, 'prev_vert_ref.seq_no');
    await testCollection(queries.blocks, 'prev_vert_alt_ref.end_lt');
    await testCollection(queries.blocks, 'prev_vert_alt_ref.seq_no');
    await testCollection(queries.blocks, 'version');
    await testCollection(queries.blocks, 'gen_validator_list_hash_short');
    await testCollection(queries.blocks, 'vert_seq_no');
    await testCollection(queries.blocks, 'start_lt');
    await testCollection(queries.blocks, 'end_lt');
    await testCollection(queries.blocks, 'workchain_id');
    await testCollection(queries.blocks, 'min_ref_mc_seqno');
    await testCollection(queries.blocks, 'prev_key_block_seqno');
    await testCollection(queries.blocks, 'gen_software_version');

    await testCollection(queries.blocks, 'value_flow.to_next_blk');
    await testCollection(queries.blocks, 'value_flow.to_next_blk_other.currency');
    await testCollection(queries.blocks, 'value_flow.to_next_blk_other.value');
    await testCollection(queries.blocks, 'value_flow.exported');
    await testCollection(queries.blocks, 'value_flow.exported_other.currency');
    await testCollection(queries.blocks, 'value_flow.exported_other.value');
    await testCollection(queries.blocks, 'value_flow.fees_collected');
    await testCollection(queries.blocks, 'value_flow.fees_collected_other.currency');
    await testCollection(queries.blocks, 'value_flow.fees_collected_other.value');
    await testCollection(queries.blocks, 'value_flow.created');
    await testCollection(queries.blocks, 'value_flow.created_other.currency');
    await testCollection(queries.blocks, 'value_flow.created_other.value');
    await testCollection(queries.blocks, 'value_flow.imported');
    await testCollection(queries.blocks, 'value_flow.imported_other.currency');
    await testCollection(queries.blocks, 'value_flow.imported_other.value');
    await testCollection(queries.blocks, 'value_flow.from_prev_blk');
    await testCollection(queries.blocks, 'value_flow.from_prev_blk_other.currency');
    await testCollection(queries.blocks, 'value_flow.from_prev_blk_other.value');
    await testCollection(queries.blocks, 'value_flow.minted');
    await testCollection(queries.blocks, 'value_flow.minted_other.currency');
    await testCollection(queries.blocks, 'value_flow.minted_other.value');
    await testCollection(queries.blocks, 'value_flow.fees_imported');
    await testCollection(queries.blocks, 'value_flow.fees_imported_other.currency');
    await testCollection(queries.blocks, 'value_flow.fees_imported_other.value');

    //await testCollection(queries.blocks, 'in_msg_descr.msg_type');
    await testCollection(queries.blocks, 'in_msg_descr.ihr_fee');
    await testCollection(queries.blocks, 'in_msg_descr.in_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'in_msg_descr.fwd_fee');
    await testCollection(queries.blocks, 'in_msg_descr.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'in_msg_descr.transit_fee');
    // await testCollection(queries.blocks, 'out_msg_descr.msg_type');
    await testCollection(queries.blocks, 'out_msg_descr.out_msg.fwd_fee_remaining');
    // await testCollection(queries.blocks, 'out_msg_descr.reimport.msg_type');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.ihr_fee');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.in_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.fwd_fee');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.transit_fee');
    // await testCollection(queries.blocks, 'out_msg_descr.imported.msg_type');
    await testCollection(queries.blocks, 'out_msg_descr.imported.ihr_fee');
    await testCollection(queries.blocks, 'out_msg_descr.imported.in_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.imported.fwd_fee');
    await testCollection(queries.blocks, 'out_msg_descr.imported.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.imported.transit_fee');
    await testCollection(queries.blocks, 'out_msg_descr.import_block_lt');
    await testCollection(queries.blocks, 'out_msg_descr.next_workchain');
    await testCollection(queries.blocks, 'out_msg_descr.next_addr_pfx');


    // TODO not collected
    /* await testCollection(queries.blocks, 'account_blocks.transactions.lt');
     await testCollection(queries.blocks, 'account_blocks.transactions.total_fees');
     await testCollection(queries.blocks, 'account_blocks.transactions.total_fees_other.currency');
     await testCollection(queries.blocks, 'account_blocks.transactions.total_fees_other.value');
     await testCollection(queries.blocks, 'account_blocks.tr_count');*/

    await testCollection(queries.blocks, 'state_update.new_depth');
    await testCollection(queries.blocks, 'state_update.old_depth');

    await testCollection(queries.blocks, 'master.min_shard_gen_utime');
    await testCollection(queries.blocks, 'master.max_shard_gen_utime');
    await testCollection(queries.blocks, 'master.shard_hashes.workchain_id');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.seq_no');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.start_lt');

    await testCollection(queries.blocks, 'master.shard_hashes.descr.end_lt');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.flags');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.next_catchain_seqno');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.min_ref_mc_seqno');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.gen_utime');
    //await testCollection(queries.blocks, 'master.shard_hashes.descr.split_type');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.split');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.fees_collected');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.fees_collected_other.currency');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.fees_collected_other.value');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.funds_created');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.funds_created_other.currency');
    await testCollection(queries.blocks, 'master.shard_hashes.descr.funds_created_other.value');

    await testCollection(queries.blocks, 'master.shard_fees.workchain_id');
    await testCollection(queries.blocks, 'master.shard_fees.fees');
    await testCollection(queries.blocks, 'master.shard_fees.fees_other.currency');
    await testCollection(queries.blocks, 'master.shard_fees.fees_other.value');
    //  await testCollection(queries.blocks, 'master.recover_create_msg.msg_type');
    await testCollection(queries.blocks, 'master.recover_create_msg.ihr_fee');
    await testCollection(queries.blocks, 'master.recover_create_msg.in_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'master.recover_create_msg.fwd_fee');
    await testCollection(queries.blocks, 'master.recover_create_msg.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'master.recover_create_msg.transit_fee');


    await testCollection(queries.blocks, 'master.config.p7.currency');
    await testCollection(queries.blocks, 'master.config.p8.version');
    await testCollection(queries.blocks, 'master.config.p9');
    await testCollection(queries.blocks, 'master.config.p10');
    // todo config

    await testCollection(queries.blocks_signatures, 'gen_utime');
    await testCollection(queries.blocks_signatures, 'seq_no');
    await testCollection(queries.blocks_signatures, 'workchain_id');
    await testCollection(queries.blocks_signatures, 'validator_list_hash_short');
    await testCollection(queries.blocks_signatures, 'catchain_seqno');
    await testCollection(queries.blocks_signatures, 'sig_weight');


    //await testCollection(queries.messages, 'msg_type');
    // await testCollection(queries.messages, 'status');

    await testCollection(queries.messages, 'split_depth');
    await testCollection(queries.messages, 'src_workchain_id');
    await testCollection(queries.messages, 'dst_workchain_id');
    await testCollection(queries.messages, 'created_lt');
    await testCollection(queries.messages, 'created_at');
    await testCollection(queries.messages, 'ihr_fee');
    await testCollection(queries.messages, 'fwd_fee');
    await testCollection(queries.messages, 'import_fee');
    await testCollection(queries.messages, 'value');
    await testCollection(queries.messages, 'value_other.currency');
    await testCollection(queries.messages, 'value_other.value');

    // todo uncomment after fix
    /*await testCollection(queries.messages, 'src_transaction.workchain_id');
    await testCollection(queries.messages, 'src_transaction.lt');
    await testCollection(queries.messages, 'src_transaction.prev_trans_lt');
    await testCollection(queries.messages, 'src_transaction.now');
    await testCollection(queries.messages, 'src_transaction.outmsg_cnt');
    await testCollection(queries.messages, 'src_transaction.orig_status');
    await testCollection(queries.messages, 'src_transaction.end_status');
    await testCollection(queries.messages, 'src_transaction.in_message.split_depth');*/

    await testCollection(queries.transactions, 'lt');
    await testCollection(queries.transactions, 'prev_trans_lt');
    await testCollection(queries.transactions, 'now');
    await testCollection(queries.transactions, 'outmsg_cnt');
    await testCollection(queries.transactions, 'storage.storage_fees_collected');
    await testCollection(queries.transactions, 'storage.storage_fees_due');
    await testCollection(queries.transactions, 'compute.gas_fees');
    // await testCollection(queries.transactions, 'compute.gas_used');
    // await testCollection(queries.transactions, 'compute.gas_limit');
    await testCollection(queries.transactions, 'compute.gas_credit');
    await testCollection(queries.transactions, 'compute.mode');
    await testCollection(queries.transactions, 'compute.exit_code');
    await testCollection(queries.transactions, 'compute.exit_arg');
    await testCollection(queries.transactions, 'compute.vm_steps');
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
    const subscription = queries.accounts.subscribe({}, 'id code data', (e, doc) => {
        console.log(doc.id);
    });
    await new Promise(resolve => setTimeout(resolve, 1_000_000));
    subscription.unsubscribe();
});
