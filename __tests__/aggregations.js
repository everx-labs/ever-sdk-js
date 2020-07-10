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
const testAggregateFunctions = async (c, field) => {
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
};
test('Aggregations: Account numeric fields', async () => {
    const queries = tests.client.queries;
    await testAggregateFunctions(queries.accounts, 'balance');
});

test('Validator set', async () => {
    if (nodeSe) {
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
