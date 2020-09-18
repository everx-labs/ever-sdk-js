/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */

// @flow

import type { TONClient } from '../types';
import { tests } from './_/init-tests';

const loadPackage = {
    hello: tests.packageLoader('Hello'),
};

beforeAll(tests.init);
afterAll(tests.done);

test('Context isolation', async () => {
    const createClient = async (messageExpirationTimeout: number): Promise<TONClient> => {
        return tests.createClient({
            servers: ['net.ton.dev'],
            messageExpirationTimeout,
        });
    };
    const foo = await createClient(1000);
    const bar = await createClient(10000);
    const helloPackage = await loadPackage.hello(2);
    const helloKeys = (await foo.crypto.ed25519Keypair());
    const address = (await foo.contracts.createDeployMessage({
        package: helloPackage,
        constructorParams: {},
        keyPair: helloKeys,
    })).address;

    const fooMsg = await foo.contracts.createRunMessage({
        address,
        abi: helloPackage.abi,
        functionName: 'touch',
        input: {},
        keyPair: helloKeys,
    });
    const barMsg = await bar.contracts.createRunMessage({
        address,
        abi: helloPackage.abi,
        functionName: 'touch',
        input: {},
        keyPair: helloKeys,
    });
    const expireDiff = (barMsg.message.expire || 0) - (fooMsg.message.expire || 0);
    expect(expireDiff)
        .toBeGreaterThan(5);
});
