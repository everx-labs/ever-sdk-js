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

import { test } from "../jest";
import { 
    TonClient,
} from "@eversdk/core";

test("proofs: proof_block_data", async () => {
    const client = new TonClient({
        network: {
            endpoints: [`https://mainnet.evercloud.dev/${process.env.EVERCLOUD_AUTH_PROJECT}/graphql`],
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

test("proofs: proof_transaction_data", async () => {
    const client = new TonClient({
        network: {
            endpoints: [`https://mainnet.evercloud.dev/${process.env.EVERCLOUD_AUTH_PROJECT}/graphql`],
        },
    })

    const transaction = (await client.net.query_collection({
        collection: "transactions",
        result: "id block_id boc action {total_action_fees total_fwd_fees} balance_delta(format:DEC)",
        filter: {
            id: {
                eq: "0c7e395e8eb14c173d2dde7189200f28787a05df1fa188b19224f6e19a439dc6",
            },
        },
        limit: 1,
    })).result[0];

    await client.proofs.proof_transaction_data({
        transaction: transaction,
    });
});

test("proofs: proof_message_data", async () => {
    const client = new TonClient({
        network: {
            endpoints: [`https://mainnet.evercloud.dev/${process.env.EVERCLOUD_AUTH_PROJECT}/graphql`],
        },
    })

    const message = (await client.net.query_collection({
        collection: "messages",
        result: "id boc body code_hash value",
        filter: {
            id: {
                eq: "420cefa19e4daf01ebe5db21c1ece04eee8bb457ca76680385c70b652596887f",
            },
        },
        limit: 1,
    })).result[0];

    await client.proofs.proof_message_data({
        message: message,
    });
});
