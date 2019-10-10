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

import { WalletContractPackage } from "./contracts/WalletContract";
import { tests } from "./init-tests";
import get_grams_from_giver from './contracts';

beforeAll(tests.init);
afterAll(tests.done);

test('Transaction List', async () => {
    const queries = tests.client.queries;
    const transaction = await queries.transactions.query({
        id: { eq: 'e19948d53c4fc8d405fbb8bde4af83039f37ce6bc9d0fc07bbd47a1cf59a8465' },
        status: { in: ["Preliminary", "Proposed", "Finalized"] }
    }, 'id now status', [], 1);
    // expect(transaction[0].id).toEqual('e19948d53c4fc8d405fbb8bde4af83039f37ce6bc9d0fc07bbd47a1cf59a8465');
});

test('All Accounts', async () => {
    const queries = tests.client.queries;
    const docs = await queries.accounts.query({}, 'id storage { balance { Grams } }');
});

test('Message', async () => {
    const queries = tests.client.queries;
    const messages = await queries.messages.query({
        id: { eq: '3a8e38b419a452fe7a0073e71c083f926055d0f249485ab9f8ca6e9825c20b8c' }
    }, 'body header { ...on MessageHeaderExtOutMsgInfoVariant { ExtOutMsgInfo { created_at } } }');
    // expect(messages[0].header.ExtOutMsgInfo.created_at).toEqual(1562342740);
});

test('Ranges', async () => {
    const queries = tests.client.queries;
    const messages = await queries.messages.query({
        header: { ExtOutMsgInfo: { created_at: { gt: 1562342740 } } },
    }, 'body header { ...on MessageHeaderExtOutMsgInfoVariant { ExtOutMsgInfo { created_at } } }');
    expect(messages[0].header.ExtOutMsgInfo.created_at).toBeGreaterThan(1562342740);
});

test('Wait For', async () => {
    const queries = tests.client.queries;
    const data = await queries.transactions.waitFor({
        now: { gt: 1563449 },
    }, 'id status');
    expect(data.status).toEqual('Finalized');
});

const transactionWithAddresses = `
    id
    account_addr
    in_message {
      header {
        ...on MessageHeaderExtOutMsgInfoVariant {
          ExtOutMsgInfo {
            dst {
              ...on MsgAddressExtAddrNoneVariant { AddrNone { None } }
              ...on MsgAddressExtAddrExternVariant { AddrExtern { AddrExtern } }
            }
          }
        }
        ...on MessageHeaderExtInMsgInfoVariant {
          ExtInMsgInfo {
            src {
              ...on MsgAddressExtAddrExternVariant { AddrExtern { AddrExtern } }
              ...on MsgAddressExtAddrNoneVariant { AddrNone { None } }
            }
          }
        }
        ...on MessageHeaderIntMsgInfoVariant {
          IntMsgInfo {
            value { Grams }
            src {
              ...on MsgAddressIntAddrVarVariant { AddrVar { address } }
              ...on MsgAddressIntAddrStdVariant { AddrStd { address } }
              ...on MsgAddressIntAddrNoneVariant { AddrNone { None } }
            }
          }
        }
      }
    }
`;

test("Subscribe for transactions with addresses", async () => {
    const { contracts, queries } = tests.client;
    const transactions = [];
    const subscription = (await queries.transactions.subscribe({}, transactionWithAddresses, (e, d) => {
        transactions.push(d);
    }));

    const walletKeys = {
        public: 'fb98b2541ba805648f25eb469dd4766fcdde03a2cfe6fb41d8c1571c29407ca3',
        secret: '7bfe77bbd3ad57ada9ed323da83504723e3af7cd3ba68b02d3c8335f75e0a24e',
    };

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });

    await get_grams_from_giver(message.address);

    await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });
    subscription.unsubscribe();
    expect(transactions.length).toBeGreaterThan(0);
});

test("Subscribe for messages", async () => {
    const { contracts, queries } = tests.client;
    const docs = [];
    const subscription = (await queries.messages.subscribe({
        header: {
            ExtOutMsgInfo: {
                src: {
                    AddrStd: {
                        address: {
                            eq: '1',
                        },
                    },
                },
            },
        },
    }, 'id', (e, doc) => {
        docs.push(doc);
    }));

    const walletKeys = {
        public: 'fb98b2541ba805648f25eb469dd4766fcdde03a2cfe6fb41d8c1571c29407ca3',
        secret: '7bfe77bbd3ad57ada9ed323da83504723e3af7cd3ba68b02d3c8335f75e0a24e',
    };
    await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });
    subscription.unsubscribe();
    expect(docs.length).toEqual(0);
});

test("Transactions with addresses", async () => {
    const queries = tests.client.queries;
    const tr = (await queries.transactions.query({}, transactionWithAddresses))[0];
    expect(tr).toBeTruthy();
});

