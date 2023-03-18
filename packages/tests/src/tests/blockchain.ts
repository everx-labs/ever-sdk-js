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
import { giverRequestAmount } from "../givers";

test("blockchain: query - Transactions", async () => {
    const net = runner.getClient().net;
    const query = `
        query {
            blockchain {
                transactions(
                    last:3
                ){
                    edges {
                        node {
                            id
                            now
                        }
                        cursor
                    }
                    pageInfo{
                        startCursor
                        hasPreviousPage
                    }
                }
            }
        }
    `
    const response = await net.query({ query })
    expect(response.result.data.blockchain.transactions.edges).toHaveLength(3);
});

test.each(ABIVersions)("blockchain: query - Messages", async (abiVersion) => {
    const net = runner.getClient().net;
    const wallet = await runner.getAccount(contracts.WalletContract, abiVersion);
    const walletAccountAddress = await wallet.getAddress()
    await runner.sendGramsTo(walletAccountAddress);
    const giverAccountAddress = await (await runner.getGiver()).getAddress()
    const transfers = await net.query({query: `
        query {
            blockchain {
                account(address:"${walletAccountAddress}"){
                    messages(last:1 allow_latest_inconsistent_data:true){
                        edges {
                            node {
                                src
                                hash
                            }
                            cursor
                        }
                        pageInfo{
                            startCursor
                            hasPreviousPage
                        }
                    }
                }
            }
        }
    `})
    expect(transfers.result.data.blockchain.account.messages.edges[0].node.src).toEqual(giverAccountAddress);

    const transferMessageHash = transfers.result.data.blockchain.account.messages.edges[0].node.hash
    const query = `
        query {
            blockchain {
                message(hash:"${transferMessageHash}"){
                    src
                    dst
                }
            }
        }
    `
    const response = await net.query({ query })
    expect(response.result.data.blockchain.message.src).toEqual(giverAccountAddress);
    expect(response.result.data.blockchain.message.dst).toEqual(walletAccountAddress);
});

test.each(ABIVersions)("blockchain: query - Transaction", async (abiVersion) => {
    const net = runner.getClient().net;
    const wallet = await runner.getAccount(contracts.WalletContract, abiVersion);
    const walletAccountAddress = await wallet.getAddress()
    const EVERS = Math.round( Math.random() * (giverRequestAmount - giverRequestAmount / 10) + giverRequestAmount / 10 );
    await runner.sendGramsTo(walletAccountAddress, EVERS);
    const transfers = await net.query({query: `
        query {
            blockchain {
                account(address:"${walletAccountAddress}"){
                    transactions(last:1 allow_latest_inconsistent_data:true){
                        edges {
                            node {
                                hash
                                balance_delta
                            }
                            cursor
                        }
                        pageInfo{
                            startCursor
                            hasPreviousPage
                        }
                    }
                }
            }
        }
    `})
    expect(BigInt(transfers.result.data.blockchain.account.transactions.edges[0].node.balance_delta)).toEqual(BigInt(EVERS));

    const transferTransactionHash = transfers.result.data.blockchain.account.transactions.edges[0].node.hash
    const query = `
        query {
            blockchain {
                transaction(hash:"${transferTransactionHash}"){
                    balance_delta
                }
            }
        }
    `
    const response = await net.query({ query })
    expect(BigInt(response.result.data.blockchain.transaction.balance_delta)).toEqual(BigInt(EVERS));
});

test("blockchain: query - Block", async () => {
    const net = runner.getClient().net;
    const query = `
        query {
            blockchain {
                block_by_seq_no(workchain:0, thread:"8000000000000000", seq_no:1) {
                    id
                    status_name
                    hash
                }
            }
        }
    `
    const response = await net.query({ query })

    expect(response.result.data.blockchain.block_by_seq_no.status_name).toEqual("Finalized");

    const res = await net.query({
        query: `
            query MyQuery($hash: String!) {
                blockchain {
                    block(hash:$hash) {
                        seq_no
                    }
                }
            }
        `,
        variables: response.result.data.blockchain.block_by_seq_no
    })

    expect(res.result.data.blockchain.block.seq_no).toEqual(1);
});

test("blockchain: query - Blocks", async () => {
    const net = runner.getClient().net;
    const query = `
        query{
            blockchain {
                blocks(
                    last:1
                    workchain:0
                ) {
                edges {
                    node {
                        hash
                    }
                    cursor
                }
                pageInfo{
                    startCursor
                    hasPreviousPage
                }
                }
            }
        }
    `
    const response = await net.query({ query })

    expect(response.result.data.blockchain.blocks.edges).toHaveLength(1);
});

test("blockchain: query - Account", async () => {
    const net = runner.getClient().net;
    const variables = {
        // this address works on se & main
        address: "0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415",
    }
    const query = `
        query MyQuery($address: String!) {
            blockchain {
                account(address: $address) {
                    info {
                        id
                        balance
                    }
                }
            }
        }
    `
    const response = await net.query({ query, variables })

    expect(BigInt(response.result.data.blockchain.account.info.balance)).toBeGreaterThan(0);
});
