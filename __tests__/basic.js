/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */

import { tests } from './_/init-tests';
import { version } from '../package.json';

beforeAll(tests.init);
afterAll(tests.done);

test('Test versions compatibility', async () => {
    const ver_builtin = await tests.client.config.getVersion();
    expect(version.split('.')[0])
        .toEqual(ver_builtin.split('.')[0]);
    console.log(
        `Client version ${version} uses compatible binaries version: ${ver_builtin}`,
    );
});

