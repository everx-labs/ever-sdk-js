/*
 * Copyright 2018-2021 TON Labs LTD.
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

import { ABIVersions, runner } from '../runner';
import { expect, test } from "../jest";
import { contracts } from '../contracts';

test("boc: get_boc_hash", async () => {
    const boc = runner.getClient().boc;
    const bocBase64 = "te6ccgEBAgEAxgABwYgAti0S4VOMe6uIVNX3nuDd7KSO13EsFEXDsUVaKRzBgdQCwaZuyAAAC3iWFUwMAK22OiKIN+R4x+31/j8LXRIYPh8iJGtncSuZ7FONbFNXAAAAAAAAAAAAAAAAAA9CQEABAMD3EJkJ6DsPCkGnV5lMTt6LIPRS7ViXPZjHMhJizNODUeKekStEXEUgmHS2vmokCRRUpsUhmwgFmkWaCatqe4wIlcBqp0PR+QAN1kt1SY8QavS350RCNNfeZ+ommI9hgd8=";
    const hash = "adff1e7fd60632bb572b1afe0c2e569d8c68b1169994c48bc1ed92b3515c3b4e";

    const result = await boc.get_boc_hash({ boc: bocBase64});

    expect(result.hash).toEqual(hash);
});

test.each(ABIVersions)("boc: parse_message (ABI v%i)", async (abiVersion) => {
    const {
        abi,
        boc,
    } = runner.getClient();

    const walletAccount = await runner.getAccount(contracts.WalletContract, abiVersion);
    const walletAccountAddress = await walletAccount.getAddress();
    await runner.deploy(walletAccount);

    const encodeResult = await abi.encode_message(walletAccount.getParamsOfDeployMessage());
    const parseResult = await boc.parse_message({
        boc: encodeResult.message
    });

    expect(parseResult.parsed.dst).toEqual(walletAccountAddress);
});
