/*
 * Copyright 2018-2021 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 *
 */

import { runner } from '../runner';
import { test, expect } from '../jest';

test('Test versions compatibility', async () => {
    const client = runner.getClient().client;
    const version = (await client.version()).version;
    console.log(version);
    expect(version.split('.')[0]).toEqual('1');
});

test('client: Versions in client.get_api_reference() and client.version() should be equal', async () => {
    const client = runner.getClient().client;

    const api_reference_version = (await client.get_api_reference()).api.version;
    const version_version = (await client.version()).version;

    expect(api_reference_version).toEqual(version_version);
});

test("client: build_info", async () => {
    const client = runner.getClient().client;

    const build_info = await client.build_info();

    expect(build_info).not.toBeNull();
})
