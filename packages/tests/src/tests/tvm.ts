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

import { ABIVersions, runner } from "../runner";
import { expect, test } from "../jest";
import { contracts } from "../contracts";

import {
    ELECTOR_ADDRESS,
    ELECTOR_ACCOUNT,
    ELECTOR_PARTICIPANT_LIST_AS_PLAIN_LIST,
    ELECTOR_PARTICIPANT_LIST_AS_TUPLE_LIST,
} from "./tvm_consts";

test("tvm: run_get", async () => {
    const tvm = runner.getClient().tvm;

    const tuple_participant_list = await tvm.run_get({
        account: ELECTOR_ACCOUNT,
        function_name: "participant_list",
    });

    expect(tuple_participant_list.output)
        .toEqual(JSON.parse(ELECTOR_PARTICIPANT_LIST_AS_TUPLE_LIST));

    const plain_participant_list = await tvm.run_get({
        account: ELECTOR_ACCOUNT,
        function_name: "participant_list",
        tuple_list_as_array: true,
    });

    expect(plain_participant_list.output)
        .toEqual(JSON.parse(ELECTOR_PARTICIPANT_LIST_AS_PLAIN_LIST));

    const result_with_input = await tvm.run_get({
        account: ELECTOR_ACCOUNT,
        input: `0x${ELECTOR_ADDRESS.split(':')[1]}`,
        function_name: "compute_returned_stake",
    });

    expect(result_with_input.output[0]).toEqual("0");

    const resultPastElectionsId = await tvm.run_get({
        account: ELECTOR_ACCOUNT,
        function_name: "past_elections",
    });

    const pastElectionsId = resultPastElectionsId.output[0][0][0];
    expect(pastElectionsId).toEqual("1588268660");
});

function replaceBigIntsWithNonZeroFlags(fees: { [key: string]: any }) {
    Array.from(Object.entries(fees))
        .forEach(([key, value]) => {
            const s = (value || "").toString();
            fees[key] = s !== "" && s !== "0" && s !== "0x0";
        });
}

test.each(ABIVersions)("tvm: run_tvm and run_executor (ABIv%i)", async (abiVersion) => {
    const {
        abi,
        processing,
        tvm,
     } = runner.getClient();
    
    const walletAddress = "0:2222222222222222222222222222222222222222222222222222222222222222";
    const subscriptionAccount = await runner.getAccount(contracts.Subscription, abiVersion, undefined, { wallet: walletAddress });
    const accountAddress = await subscriptionAccount.getAddress();
    await runner.deploy(subscriptionAccount);

    const getWalletMessage = await abi.encode_message({
        address: accountAddress,
        abi: subscriptionAccount.abi,
        call_set: {
            function_name: "getWallet",
            input: {},
        },
        signer: subscriptionAccount.signer,
    });

    const getWalletResult = await tvm.run_tvm({
        account: await subscriptionAccount.boc(),
        message: getWalletMessage.message,
        abi: subscriptionAccount.abi,
    });

    expect(getWalletResult.decoded?.output).toEqual({
        value0: "0:2222222222222222222222222222222222222222222222222222222222222222",
    });

    const subscriptionParams = {
        subscriptionId: "0x1111111111111111111111111111111111111111111111111111111111111111",
        pubkey: "0x2222222222222222222222222222222222222222222222222222222222222222",
        to: "0:3333333333333333333333333333333333333333333333333333333333333333",
        value: "0x123",
        period: "0x456",
    };
    
    const subscribeMessage = await abi.encode_message({
        address: accountAddress,
        abi: subscriptionAccount.abi,
        call_set: {
            function_name: "subscribe",
            input: subscriptionParams,
        },
        signer: subscriptionAccount.signer,
    });

    const subscribeResult = await tvm.run_executor({
        account: {
            type: "Account",
            boc: await subscriptionAccount.boc(),
        },
        abi: subscriptionAccount.abi,
        message: subscribeMessage.message,
        return_updated_account: true,
    });

    replaceBigIntsWithNonZeroFlags(subscribeResult.fees);
    expect(subscribeResult).toEqual(expect.objectContaining({
        decoded: expect.objectContaining({
            output: null,
        }),
        fees: expect.objectContaining({
            in_msg_fwd_fee: true,
            gas_fee: true,
            out_msgs_fwd_fee: false,
            total_account_fees: true,
            total_output: false,
        }),
        transaction: expect.objectContaining({
            account_addr: accountAddress,
        }),
    }));
    
    const getSubscriptionMessage = await abi.encode_message({
        address: accountAddress,
        abi: subscriptionAccount.abi,
        call_set: {
            function_name: "getSubscription",
            input: {
                subscriptionId: subscriptionParams.subscriptionId,
            },
        },
        signer: subscriptionAccount.signer,
    });

    const getSubscriptionResult = await tvm.run_tvm({
        account: subscribeResult.account,
        abi: subscriptionAccount.abi,
        message: getSubscriptionMessage.message,
    });

    expect(getSubscriptionResult.decoded?.output?.value0?.pubkey)
        .toEqual(subscriptionParams.pubkey);

    const pubkey2 = "0x3333333333333333333333333333333333333333333333333333333333333333";
    const { transaction } = await processing.process_message({
        message_encode_params: {
            address: accountAddress,
            abi: subscriptionAccount.abi,
            signer: subscriptionAccount.signer,
            call_set: {
                function_name: "subscribe",
                input: { ...subscriptionParams, pubkey: pubkey2 },
            },
        },
        send_events: false,
    });
    subscriptionAccount.setMinExpectedLt(transaction["lt"]);

    const getSubscriptionMessage2 = await abi.encode_message({
        address: accountAddress,
        abi: subscriptionAccount.abi,
        call_set: {
            function_name: "getSubscription",
            input: {
                subscriptionId: subscriptionParams.subscriptionId,
            },
        },
        signer: subscriptionAccount.signer,
    });

    subscriptionAccount.dropCachedData();
    const getSubscriptionResult2 = await tvm.run_tvm({
        account: await subscriptionAccount.boc(),
        abi: subscriptionAccount.abi,
        message: getSubscriptionMessage2.message,
    });

    expect(getSubscriptionResult2.decoded?.output?.value0?.pubkey)
        .toEqual(pubkey2);
});
