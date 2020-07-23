/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */

// @flow

import { tests } from './_/init-tests';


beforeAll(tests.init);
afterAll(tests.done);

declare function fail(message: string): void;

test('Force Close Half-open Connections', async () => {
    jest.setTimeout(1000000);
    const { queries } = tests.client;
    while (true) {
        const accounts = await queries.accounts.query({
            filter: { id: { eq: '1' } },
            result: 'id',
            timeout: 3000,
        });
        console.log('>>>', accounts);
    }
});
