/*
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
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

import { tests } from "./init-tests";

beforeAll(tests.init);
afterAll(tests.done);

test('basic', async () => {
	const client = tests.client;
	expect(await client.config.getVersion()).toEqual('0.11.0');
	try {
        await client.crypto.hdkeyXPrvDerivePath("???", "");
    } catch (error) {
	    expect(error.source).toEqual('sdk');
	    expect(error.code).toEqual(2018);
    }
});

