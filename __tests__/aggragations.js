/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */
import { nodeSe, tests } from './_/init-tests';

beforeAll(tests.init);
afterAll(tests.done);

test('Aggregations', async () => {
    const testCollection = async (c, n) => {
        const tr = (await c.aggregate({
            filter: {},
            fields: [{
                field: 'id',
                fn: 'COUNT',
            }],
        }))[0];
        expect(Number(tr))
            .toBeGreaterThanOrEqual(n);
    };
    const queries = tests.client.queries;
    await testCollection(queries.accounts, 1);
    await testCollection(queries.blocks, 1);
    await testCollection(queries.transactions, 1);
    await testCollection(queries.messages, 1);
    await testCollection(queries.blocks_signatures, 0);
});
const testCollection = async (c, field) => {
    const tr = (await c.aggregate({
        filter: {},
        fields: [
            {
                field,
                fn: 'MIN',
            },
            {
                field,
                fn: 'MAX',
            },
            {
                field,
                fn: 'SUM',
            },
            {
                field,
                fn: 'AVERAGE',
            },
        ],
    }));
    expect(Number(tr[0]))
        .toBeDefined();
    expect(Number(tr[1]))
        .toBeDefined();
    expect(Number(tr[2]))
        .toBeDefined();
    expect(Number(tr[3]))
        .toBeDefined();
    console.log(`${field}: MIN ${Number(tr[0])} MAX ${Number(tr[1])} SUM ${Number(tr[2])} AVERAGE ${Number(tr[3])}`);
};
test('Aggregations: Account numeric fields', async () => {
    const queries = tests.client.queries;
    await testCollection(queries.accounts, 'workchain_id');
    await testCollection(queries.accounts, 'last_paid');
    await testCollection(queries.accounts, 'due_payment');
    await testCollection(queries.accounts, 'last_trans_lt');
    await testCollection(queries.accounts, 'balance');
    await testCollection(queries.accounts, 'balance_other.currency');
    await testCollection(queries.accounts, 'split_depth');
});

test('Aggregations: Block numeric fields', async () => {
    const queries = tests.client.queries;
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
});

test('Aggregations: Block value_flow numeric fields', async () => {
    const queries = tests.client.queries;
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
});

test('Aggregations: Block in_msg_descr numeric fields', async () => {
    const queries = tests.client.queries;
    await testCollection(queries.blocks, 'in_msg_descr.ihr_fee');
    await testCollection(queries.blocks, 'in_msg_descr.in_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'in_msg_descr.fwd_fee');
    await testCollection(queries.blocks, 'in_msg_descr.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'in_msg_descr.transit_fee');
    await testCollection(queries.blocks, 'out_msg_descr.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.ihr_fee');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.in_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.fwd_fee');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.reimport.transit_fee');
    await testCollection(queries.blocks, 'out_msg_descr.imported.ihr_fee');
    await testCollection(queries.blocks, 'out_msg_descr.imported.in_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.imported.fwd_fee');
    await testCollection(queries.blocks, 'out_msg_descr.imported.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'out_msg_descr.imported.transit_fee');
    await testCollection(queries.blocks, 'out_msg_descr.import_block_lt');
    await testCollection(queries.blocks, 'out_msg_descr.next_workchain');
    await testCollection(queries.blocks, 'out_msg_descr.next_addr_pfx');
});

test('Aggregations: Block account_blocks & state_update numeric fields', async () => {
    const queries = tests.client.queries;
    await testCollection(queries.blocks, 'account_blocks.transactions.lt');
    await testCollection(queries.blocks, 'account_blocks.transactions.total_fees');
    await testCollection(queries.blocks, 'account_blocks.transactions.total_fees_other.currency');
    await testCollection(queries.blocks, 'account_blocks.transactions.total_fees_other.value');
    await testCollection(queries.blocks, 'account_blocks.tr_count');

    await testCollection(queries.blocks, 'state_update.new_depth');
    await testCollection(queries.blocks, 'state_update.old_depth');
});

test('Aggregations: Block master numeric fields', async () => {
    const queries = tests.client.queries;
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
    await testCollection(queries.blocks, 'master.recover_create_msg.ihr_fee');
    await testCollection(queries.blocks, 'master.recover_create_msg.in_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'master.recover_create_msg.fwd_fee');
    await testCollection(queries.blocks, 'master.recover_create_msg.out_msg.fwd_fee_remaining');
    await testCollection(queries.blocks, 'master.recover_create_msg.transit_fee');


    await testCollection(queries.blocks, 'master.config.p7.currency');
    await testCollection(queries.blocks, 'master.config.p8.version');
    await testCollection(queries.blocks, 'master.config.p9');
    await testCollection(queries.blocks, 'master.config.p10');
});

test('Aggregations: Blocks_signatures numeric fields', async () => {
    const queries = tests.client.queries;
    await testCollection(queries.blocks_signatures, 'gen_utime');
    await testCollection(queries.blocks_signatures, 'seq_no');
    await testCollection(queries.blocks_signatures, 'workchain_id');
    await testCollection(queries.blocks_signatures, 'validator_list_hash_short');
    await testCollection(queries.blocks_signatures, 'catchain_seqno');
    await testCollection(queries.blocks_signatures, 'sig_weight');
});

test('Aggregations: Messages numeric fields', async () => {
    const queries = tests.client.queries;
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
});

test('Should correctly perform aggregation queries for transactions numeric fields', async () => {
    const queries = tests.client.queries;
    await testCollection(queries.transactions, 'lt');
    await testCollection(queries.transactions, 'prev_trans_lt');
    await testCollection(queries.transactions, 'now');
    await testCollection(queries.transactions, 'outmsg_cnt');
    await testCollection(queries.transactions, 'storage.storage_fees_collected');
    await testCollection(queries.transactions, 'storage.storage_fees_due');
    await testCollection(queries.transactions, 'compute.gas_fees');
    await testCollection(queries.transactions, 'compute.gas_used');
    await testCollection(queries.transactions, 'compute.gas_limit');
    await testCollection(queries.transactions, 'compute.gas_credit');
    await testCollection(queries.transactions, 'compute.mode');
    await testCollection(queries.transactions, 'compute.exit_code');
    await testCollection(queries.transactions, 'compute.exit_arg');
    await testCollection(queries.transactions, 'compute.vm_steps');
});


test('Should return data about validator set', async () => {
    if (nodeSe) {
        console.log('Should return data about validator set');
        return;
    }
    // test https://docs.ton.dev/86757ecb2/p/978847-get-config
    const result = await tests.client.queries.blocks.query({
        filter: {},
        orderBy: [{
            path: 'seq_no',
            direction: 'DESC',
        }],
        limit: 1,
        result: 'prev_key_block_seqno',
    });
    expect(result.length)
        .toEqual(1);
    const seq_no = result[0].prev_key_block_seqno;
    expect(seq_no)
        .toBeGreaterThanOrEqual(0);

    // no masterblock before first election and seq_no = 0
    if (seq_no > 0) {
        const config = await tests.client.queries.blocks.query({
            filter: {
                seq_no: { eq: seq_no },
                workchain_id: { eq: -1 },
            },
            result: 'master { config { p15 { validators_elected_for elections_start_before elections_end_before stake_held_for } p16 { max_validators max_main_validators min_validators } p17 { min_stake max_stake min_total_stake max_stake_factor } p34 { utime_since utime_until total total_weight list { public_key adnl_addr weight } } } }',
        });
        expect(config.length)
            .toEqual(1);
        const p15ConfigParams = config[0].master.config.p15;
        expect(p15ConfigParams.validators_elected_for)
            .toBeGreaterThan(0);
        expect(p15ConfigParams.elections_start_before)
            .toBeGreaterThan(0);
        expect(p15ConfigParams.elections_end_before)
            .toBeGreaterThan(0);
        expect(p15ConfigParams.stake_held_for)
            .toBeGreaterThan(0);

        const p16ConfigParams = config[0].master.config.p16;
        expect(BigInt(p16ConfigParams.max_validators))
            .toBeGreaterThan(BigInt(p16ConfigParams.min_validators));
        expect(BigInt(p16ConfigParams.max_validators))
            .toBeGreaterThanOrEqual(p16ConfigParams.max_main_validators);

        const p17ConfigParams = config[0].master.config.p17;
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

        const validatorSetList = config[0].master.config.p34.list;
        const p34ConfigParams = config[0].master.config.p34;
        expect(p34ConfigParams.total)
            .toEqual(validatorSetList.length);
        let weight = 0n;
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
