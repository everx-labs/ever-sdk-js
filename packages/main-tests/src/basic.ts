/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */

import {
    expect,
    test,
    tests,
} from './tests';

test('Test versions compatibility', async () => {
    const client = tests.getClient();
    const version = (await client.client.version()).version;
    expect(version.split('.')[0]).toEqual('1');
});

