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

import { 
    Abi,
    abiContract,
    AbiErrorCode,
    ParamsOfEncodeMessage,
    ResultOfProcessMessage,
    ResultOfRunTvm,
    signerKeys,
    TonClient,
    TvmErrorCode,
} from "@eversdk/core";

import { Account } from "../account";
import { ContractPackage, contracts } from "../contracts";
import { expect, test } from "../jest";
import { ABIVersions, runner } from "../runner";

test.each(ABIVersions)("Test hello contract from docs.ton.dev (ABI v%i)", async (abiVersion) => {
    const {
        abi,
        processing,
        tvm,
    } = runner.getClient();

    const helloAccount = await runner.getAccount(contracts.Hello, abiVersion);
    const helloAccountAddress = await helloAccount.getAddress();
    await runner.deploy(helloAccount);

    const { transaction } = await processing.process_message({
        send_events: false,
        message_encode_params: {
            address: helloAccountAddress,
            abi: helloAccount.abi,
            call_set: {
                function_name: "touch",
            },
            signer: helloAccount.signer,
        }
    });
    helloAccount.setMinExpectedLt(transaction["lt"]);

    const localResult1 = await run_tvm(helloAccount, "sayHello");
    const localResult2 = await run_tvm(helloAccount, "sayHello");

    expect(localResult1.decoded?.output?.value0)
        .toBeTruthy();

    expect(localResult1.decoded?.output?.value0)
        .toEqual(localResult2.decoded?.output?.value0);

    // end of test, start of local functions

    async function run_tvm(account: Account, function_name: string) {
        const encodeResult = await abi.encode_message({
            abi: account.abi,
            address: await account.getAddress(),
            call_set: {
                function_name,
            },
            signer: account.signer,
        });

        return await tvm.run_tvm({
            abi: account.abi,
            account: await account.boc(),
            message: encodeResult.message,
        })
    }
});

test.each(ABIVersions)("Run aborted transaction (ABI v%i)", async (abiVersion) => {
    const {
        processing,
    } = runner.getClient();

    const walletAccount = await runner.getAccount(contracts.WalletContract, abiVersion);
    const walletAccountAddress = await walletAccount.getAddress();
    await runner.deploy(walletAccount);

    try {
        await processing.process_message({
            send_events: false,
            message_encode_params: {
                address: walletAccountAddress,
                abi: walletAccount.abi,
                call_set: {
                    function_name: "sendTransaction",
                    input: {
                        dest: "0:0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF",
                        value: 0,
                        bounce: false,
                    },
                },
                signer: walletAccount.signer,
            }
        });
    } catch (error: any) {
        expect(error.code).toEqual(TvmErrorCode.ContractExecutionError);
        expect(error.data.phase).toEqual("computeVm");
        expect(error.data.transaction_id).toBeTruthy();
        expect(error.data.exit_code).toEqual(101);
    }

    try {
        await processing.process_message({
            send_events: false,
            message_encode_params: {
                address: walletAccountAddress,
                abi: walletAccount.abi,
                call_set: {
                    function_name: "sendTransaction",
                    input: {},
                },
                signer: walletAccount.signer,
            }
        });
    } catch (error: any) {
        expect(error.code).toEqual(AbiErrorCode.EncodeRunMessageFailed);
    }
});

test.each(ABIVersions)("External signing on ABI v%i", async (abiVersion) => {
    const {
        abi,
        crypto,
    } = runner.getClient();
    
    const keys = await crypto.generate_random_sign_keys();
    const eventsAccount = await runner.getAccount(contracts.Events, abiVersion);
    const eventsAccountAddress = await eventsAccount.getAddress();
    const deployParams = {
        ...eventsAccount.getParamsOfDeployMessage(),
        call_set: {
            function_name: "constructor",
            header: {
                pubkey: keys.public,
                time: BigInt(1599458364291),
                expire: 1599458404,
            }
        }
    }
    
    const unsignedDeployMessage = await abi.encode_message({
        ...deployParams,
        signer: {
            type: "External",
            public_key: keys.public,
        },
    });
    const signResult = await crypto.sign({
        keys,
        unsigned: unsignedDeployMessage.data_to_sign!,
    });
    const signedDeployMessage = await abi.attach_signature({
        abi: deployParams.abi,
        message: unsignedDeployMessage.message,
        public_key: keys.public,
        signature: signResult.signature,
    });

    const signedDeployMessage2 = await abi.encode_message({
        ...deployParams,
        signer: {
            type: "Keys",
            keys
        },
    });

    expect(signedDeployMessage.message)
        .toEqual(signedDeployMessage2.message);
    
    const runMessageParams = {
        address: eventsAccountAddress,
        abi: eventsAccount.abi,
        call_set: {
            function_name: "returnValue",
            input: { id: "0" },
            header: {
                pubkey: keys.public,
                time: BigInt(Date.now()),
                expire: Math.round(Date.now() / 1000) + 100,
            }
        },
    };

    const unsignedRunMessage = await abi.encode_message({
        ...runMessageParams,
        signer: {
            type: "External",
            public_key: keys.public,
        },
    });
    const signRunMessageResult = await crypto.sign({
        keys,
        unsigned: unsignedRunMessage.data_to_sign!,
    });
    const signedRunMessage = await abi.attach_signature({
        abi: runMessageParams.abi,
        message: unsignedRunMessage.message,
        public_key: keys.public,
        signature: signRunMessageResult.signature,
    });
    const signedRunMessage2 = await abi.encode_message({
        ...runMessageParams,
        signer: {
            type: "Keys",
            keys
        },
    });

    expect(signedRunMessage.message)
        .toEqual(signedRunMessage2.message);
});

test("Test CheckInitParams contract double deployment with different init data", async () => {
    const {
        abi,
        tvm,
    } = runner.getClient();

    const initData1 = {
        addressVariable: "0:fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321",
        uintVariable: "0x0",
        booleanVariable: true,
        bytesVariable: await generateRandomBytesInHex(32),
    };
    const checkInitParamsAccount1 = await runner.getAccount(contracts.CheckInitParams, 2, undefined, undefined, initData1);
    const checkInitParamsAccount1Address = await checkInitParamsAccount1.getAddress();
    await runner.deploy(checkInitParamsAccount1);
    checkInitParamsAccount1.dropCachedData();

    const initData2 = {
        addressVariable: "0:1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        uintVariable: "0xffffffff",
        booleanVariable: false,
        bytesVariable: await generateRandomBytesInHex(64),
    };
    const checkInitParamsAccount2 = await runner.getAccount(contracts.CheckInitParams, 2, undefined, undefined, initData2);
    const checkInitParamsAccount2Address = await checkInitParamsAccount2.getAddress();
    await runner.deploy(checkInitParamsAccount2);

    expect(checkInitParamsAccount1Address)
        .not.toEqual(checkInitParamsAccount2Address); 


    const addressResult1 = await run_tvm(checkInitParamsAccount1, "getAddressVariable");    
    const addressResult2 = await run_tvm(checkInitParamsAccount2, "getAddressVariable");
    
    expect(addressResult1.decoded?.output).toEqual({
        value0: initData1.addressVariable,
    });
    expect(addressResult2.decoded?.output).toEqual({
        value0: initData2.addressVariable,
    });


    const uintResult1 = await run_tvm(checkInitParamsAccount1, "getUintVariable");
    const uintResult2 = await run_tvm(checkInitParamsAccount2, "getUintVariable");
    
    expect(uintResult1.decoded?.output).toEqual({
        value0: "0x" + TonClient.toHex(initData1.uintVariable, 256),
    });
    expect(uintResult2.decoded?.output).toEqual({
        value0: "0x" + TonClient.toHex(initData2.uintVariable, 256),
    });
    

    const booleanResult1 = await run_tvm(checkInitParamsAccount1, "getBooleanVariable");
    const booleanResult2 = await run_tvm(checkInitParamsAccount2, "getBooleanVariable");
    
    expect(booleanResult1.decoded?.output).toEqual({
        value0: initData1.booleanVariable,
    });
    expect(booleanResult2.decoded?.output).toEqual({
        value0: initData2.booleanVariable,
    });


    const bytesResult1 = await run_tvm(checkInitParamsAccount1, "getBytesVariable");
    const bytesResult2 = await run_tvm(checkInitParamsAccount2, "getBytesVariable");
    
    expect(bytesResult1.decoded?.output).toEqual({
        value0: initData1.bytesVariable,
    });
    expect(bytesResult2.decoded?.output).toEqual({
        value0: initData2.bytesVariable,
    });


    // end of test, start of local functions

    async function generateRandomBytesInHex(length: number): Promise<string> {
        const randomBytesInBase64 =
            await runner.getClient()
                .crypto.generate_random_bytes({
                    length,
                });

        return Buffer.from(randomBytesInBase64.bytes, "base64").toString("hex");
    }

    async function run_tvm(account: Account, function_name: string): Promise<ResultOfRunTvm> {
        return await tvm.run_tvm({
            abi: account.abi,
            account: await account.boc(),
            message: (await abi.encode_message({
                abi: account.abi,
                address: await account.getAddress(),
                signer: account.signer,
                call_set: {
                    function_name,
                }
            })).message,
        });
    }
});

test.each(ABIVersions)("Test SetCode contracts (ABI v%i)", async (abiVersion) => {
    const {
        boc,
        processing,
    } = runner.getClient();

    const setCodeAccount = await runner.getAccount(contracts.Setcode, abiVersion);
    const setCode2ContractPackage = getContractPackage(contracts.Setcode2, abiVersion);
    await runner.deploy(setCodeAccount);

    const version1 = await run(setCodeAccount, setCodeAccount.abi, "getVersion");
    expect (version1.decoded?.output?.value0)
        .toEqual("0x0000000000000000000000000000000000000000000000000000000000000001");

    await run(setCodeAccount, setCodeAccount.abi, "main", { newcode: (await boc.get_code_from_tvc({ tvc: setCode2ContractPackage.tvc })).code });

    const version2 = await run(setCodeAccount, abiContract(setCode2ContractPackage.abi), "getNewVersion");
    expect (version2.decoded?.output?.value0)
        .toEqual("0x0000000000000000000000000000000000000000000000000000000000000002");

    // end of test, start of local functions

    function getContractPackage(packages: { [abiVersion: number]: ContractPackage }, abiVersion: any): ContractPackage {
        const pkg: ContractPackage | undefined = packages[Number(abiVersion)];
        if (!pkg) {
            throw new Error(`Missing required contract with ABI v${abiVersion}`);
        }
        return pkg;
    }

    async function run(account: Account, abi: Abi, function_name: string, input?: any): Promise<ResultOfProcessMessage> {
        return await processing.process_message({
            message_encode_params: {
                abi: abi,
                signer: account.signer,
                address: await account.getAddress(),
                call_set: {
                    function_name,
                    input,
                },
            },
            send_events: false,
        });
    }
});

test("Test expire retries", async () => {
    const processing = runner.getClient().processing;

    const helloAccount = await runner.getAccount(contracts.MultiTouch, 2);
    const helloAccountAddress = await helloAccount.getAddress();
    await runner.deploy(helloAccount);

    const run = async (seqno: number) => {
        const startTime = new Date().valueOf();
        const result = await processing.process_message({
            message_encode_params: {
                abi: helloAccount.abi,
                signer: helloAccount.signer,
                address: helloAccountAddress,
                call_set: {
                    function_name: "touch",
                    input: {
                        seqno
                    }
                }
            },
            send_events: false,
        });
        const endTime = new Date().valueOf();
        console.log(`>>> run complete seq_no:${seqno} in ${endTime - startTime}ms`);
        return result;
    };
    const runs = [];
    for (let i = 0; i < 10;) {
        runs.push(run(++i));
    }
    await Promise.all(runs);
});

test("Signing", async () => {
    const {
        abi,
        crypto,
        processing,
    } = runner.getClient();

    const ownerKeys = await crypto.generate_random_sign_keys();
    const deployKeys = await crypto.generate_random_sign_keys();
    const time = Math.round((Date.now() + 10000) / 1000);
    
    const sensorAccountAbi = abiContract(contracts.Sensor[2].abi);
    const sensorAccountTvc = contracts.Sensor[2].tvc;
    const paramsOfDeployMessage: ParamsOfEncodeMessage = {
        abi: sensorAccountAbi,
        signer: signerKeys(deployKeys),
        deploy_set: {
            tvc: sensorAccountTvc,
        },
        call_set: {
            function_name: "constructor",
            input: { ownerKey: `0x${ownerKeys.public}` },
            header: {
                time: BigInt(time),
            }
        },
    };

    const futureAddress = (await abi.encode_message(paramsOfDeployMessage)).address;
    await runner.sendGramsTo(futureAddress);

    const deployResult = await processing.process_message({
        message_encode_params: {
            ...paramsOfDeployMessage,
            call_set: {
                function_name: "constructor",
                input: { ownerKey: `0x${ownerKeys.public}` },
                // without header
            },
        },
        send_events: false,
    });
    const helloAddress: string = deployResult.transaction.account_addr;
    
    await processing.process_message({
        message_encode_params: {
            address: helloAddress,
            abi: sensorAccountAbi,
            call_set: {
                function_name: "setData",
                input: {
                    input: 8,
                },
            },
            signer: signerKeys(ownerKeys),
        },
        send_events: false,
    });
});

test("initCodeHash", async () => {
    // contracts from sol2tvm/tests3/net_test_suite3.py/test27
    // https://github.com/tonlabs/sol2tvm/pull/1424
    const {
        abi,
        boc,
        processing,
        tvm,
    } = runner.getClient();

    const abiModule = abi;
    const abiVersion = 2;
    const account = await runner.getAccount(contracts.InitCodeHashOld, abiVersion);
    const actualCodeHash = `0x${(await boc.decode_state_init({ state_init: contracts.InitCodeHashOld[abiVersion].tvc })).code_hash}`;
    await runner.deploy(account);

    await run(
        account,
        abiContract(contracts.InitCodeHashOld[abiVersion].abi),
        "fix_baga",
        {
            newCode: (await boc.get_code_from_tvc({ tvc: contracts.InitCodeHash[abiVersion].tvc })).code
        }
    );
    const externalResult = await run(
        account,
        abiContract(contracts.InitCodeHash[abiVersion].abi),
        "f"
    );
    const executorResult = await run_executor(account, abiContract(contracts.InitCodeHash[abiVersion].abi), "f");
    const localResult = await run_tvm(account, abiContract(contracts.InitCodeHash[abiVersion].abi), "f");

    account.dropCachedData();

    expect(localResult.decoded?.output?.value0).toEqual(actualCodeHash);
    expect(executorResult.decoded?.output?.value0).toEqual(actualCodeHash);
    expect(externalResult.decoded?.output?.value0).toEqual(actualCodeHash);

    // end of test, start of local functions

    async function run_executor(account: Account, abi: Abi, function_name: string) {
        const encodeResult = await abiModule.encode_message({
            abi,
            address: await account.getAddress(),
            call_set: {
                function_name,
            },
            signer: account.signer,
        });

        return await tvm.run_executor({
            account: {
                type: "Account",
                boc: await account.boc(),
            },
            abi,
            message: encodeResult.message,
            return_updated_account: false,
        });
    }

    async function run_tvm(account: Account, abi: Abi, function_name: string) {
        const encodeResult = await abiModule.encode_message({
            abi,
            address: await account.getAddress(),
            call_set: {
                function_name,
            },
            signer: account.signer,
        });

        return await tvm.run_tvm({
            abi,
            account: await account.boc(),
            message: encodeResult.message,
        })
    }

    async function run(account: Account, abi: Abi, function_name: string, input?: any): Promise<ResultOfProcessMessage> {
        const result = await processing.process_message({
            message_encode_params: {
                abi: abi,
                signer: account.signer,
                address: await account.getAddress(),
                call_set: {
                    function_name,
                    input,
                },
            },
            send_events: false,
        });
        account.setMinExpectedLt(result.transaction["lt"]);
        return result;
    }
});
