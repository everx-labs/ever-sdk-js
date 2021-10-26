/*
 * Copyright 2018-2021 TON DEV SOLUTIONS LTD.
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

import { test } from "../jest";
import { 
    TonClient,
} from "@tonclient/core";

test("proofs: proof_block_data", async () => {
    const client = new TonClient({
        network: {
            server_address: 'main.ton.dev',
        },
    })

    const block = (await client.net.query_collection({
        collection: "blocks",
        result: "id workchain_id shard seq_no prev_ref{seq_no root_hash}",
        filter: {
            id: {
                eq: "66b20c56426146693f6477938b48bfcde6775d3d3d4af64146839a6e92f1efd3",
            },
        },
        limit: 1,
    })).result[0];

    await client.proofs.proof_block_data({
        block: block,
    });
});
