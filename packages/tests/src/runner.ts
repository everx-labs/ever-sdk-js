/*
 * Copyright 2018-2020 TON Labs LTD.
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

import {
    abiContract,
    ClientConfig,
    ResultOfProcessMessage,
    Signer,
    signerKeys,
    TonClient,
} from "@eversdk/core";

import {
    getDefaultGiverAddress,
    getDefaultGiverContract,
    getDefaultGiverKeys,
    getEnv,
    giverRequestAmount,
} from "./givers";
import { jest } from "./jest";
import { Account } from "./account";
import { ContractPackage } from "./contracts";
import { TestEntry } from "jest-circus";

function resolveConfig(): ClientConfig {
    return {
        abi: {
            message_expiration_timeout: 5000,
            message_expiration_timeout_grow_factor: 1,
        },
        network: {
            message_retries_count: 10,
            endpoints: [`${process.env.TON_NETWORK_ADDRESS || "http://localhost"}`],
        },
    };
}

export type TestRunnerLog = (...args: any[]) => void;

export type TestRunnerOptions = {
    filter?: (test: TestEntry) => boolean,
    log?: TestRunnerLog,
}

export class TestsRunner {
    static setTimeout: (f: () => void, ms: number) => void = () => {
    };
    static log: (...args: any[]) => void = (..._args: any[]) => {
    };
    static exit: (code: number) => void = (_code) => {
    };
    config = resolveConfig();

    private client: TonClient | null = null;
    private giver: Account | null = null;
    private deployedAccounts: Account[] = [];

    static async run(
        onStateChange: (state: TestsRunningState) => void,
        options?: TestRunnerOptions | TestRunnerLog,
    ) {
        const resolvedOptions: TestRunnerOptions =
            options === undefined
                ? {}
                : (typeof options === "function" ? {
                    log: options,
                } : options);

        function errorToJson(error: any) {
            const json: { [key: string]: any } = {};
            Object.entries(error).forEach(([key, value]) => {
                json[key] = value;
            });
            if (error.message && !json.message) {
                json.message = error.message;
            }
            if (Object.keys(json).length === 0) {
                json.message = error.toString();
            }
            return json;
        }

        const log = resolvedOptions.log ?? TestsRunner.log;
        try {
            jest.setTimeout(300000);
            const client = runner.getClient();

            const state: TestsRunningState = {
                version: (await client.client.version()).version,
                passed: 0,
                failed: 0,
                finished: false,
            };
            onStateChange(state);

            jest.addEventHandler((event: any) => {
                if (event.name === "test_start") {
                    log(`[TEST_START] ${JSON.stringify({
                        name: event.test.name,
                    })}`);
                } else if (event.name === "test_success") {
                    state.passed += 1;
                    log(`[TEST_SUCCESS] ${JSON.stringify({
                        name: event.test.name,
                    })}`);
                } else if (event.name === "test_failure") {
                    state.failed += 1;
                    log(`[TEST_FAILURE] ${JSON.stringify({
                        name: event.test.name,
                        errors: event.test.errors && event.test.errors.map(errorToJson),
                    })}`);
                } else {
                    return;
                }
                onStateChange(state);
            });
            onStateChange(state);
            const testFilter = resolvedOptions.filter;
            if (testFilter) {
                const { rootDescribeBlock } = jest.getState();
                rootDescribeBlock.tests = rootDescribeBlock.tests.filter(testFilter);
            }

            const results = await jest.run();
            results.forEach((result) => {
                result.errors = result.errors.map((e) => {
                    return e.toString().replace(/\n\s+at\s+.*/gi, "");
                });
            });
            log(`[TEST_COMPLETE] ${JSON.stringify(results)}`);
            state.finished = true;
            onStateChange(state);
        } catch (error) {
            log(">>>", error);
        }
    }

    getClient(): TonClient {
        if (!this.client) {
            this.client = new TonClient(this.config);
        }
        return this.client;
    }

    async getGiver(): Promise<Account> {
        if (this.giver) {
            return this.giver;
        }
        const client = this.getClient();
        const giverContract = getDefaultGiverContract(getEnv("EVERCLOUD_GIVER_TYPE") ?? "v2");
        const giverKeys = await getDefaultGiverKeys(client);
        const giver = new Account(
            client,
            abiContract(giverContract.abi),
            signerKeys(giverKeys),
            await getDefaultGiverAddress(client, giverKeys, giverContract),
        );
        this.giver = giver;
        const accounts = (await client.net.query_collection({
            collection: "accounts",
            filter: {
                id: { eq: await giver.getAddress() },
            },
            result: "acc_type balance",
        })).result;

        if (accounts.length === 0) {
            throw new Error(`Giver wallet does not exist. Send some grams to ${await giver.getAddress()}`);
        }
        const account = accounts[0];
        if (!account.balance || Number(account.balance) < giverRequestAmount) {
            throw new Error(`Giver has no money. Send some grams to ${await giver.getAddress()}`);
        }
        if (account.acc_type !== 1) {
            throw new Error(`Giver has not deployed.`);
        }
        return giver;
    }

    async getAccount(
        packages: { [abiVersion: number]: ContractPackage },
        abiVersion: any,
        signer?: Signer,
        initFunctionInput?: any,
        initData?: any,
    ): Promise<Account> {
        const pkg: ContractPackage | undefined = packages[Number(abiVersion) as ABIVersion];
        if (!pkg) {
            throw new Error(`Missing required contract with ABI v${abiVersion}`);
        }
        return new Account(
            this.getClient(),
            abiContract(pkg.abi),
            signer ?? signerKeys(await this.getClient().crypto.generate_random_sign_keys())
            , {
                tvc: pkg.tvc,
                initFunctionName: "constructor",
                initFunctionInput,
                initData,
            },
        );
    }

    async sendGramsTo(account: string, amount: number = giverRequestAmount): Promise<void> {
        let result: ResultOfProcessMessage;
        const giver = await this.getGiver();
        result = await giver.run("sendTransaction", {
            dest: account,
            value: amount,
            bounce: false,
        });
        await this.waitFor(giver.client, "accounts", "id", account);
        await this.waitForMessageProcessed(giver.client, result.transaction.in_msg);
        for (const boc of result.out_messages) {
            const msg = (await giver.client.boc.parse_message({ boc })).parsed;
            if (msg.msg_type === 0) {
                await this.waitForMessageProcessed(giver.client, msg.id);
            }
        }
    }

    private async waitForMessageProcessed(client: TonClient, message: string) {
        await this.waitFor(client, "transactions", "in_msg", message);
        await this.waitFor(client, "messages", "id", message);
    }

    private async waitFor(client: TonClient, collection: string, field: string, value: string) {
        await client.net.wait_for_collection({
            collection,
            filter: {
                [field]: { eq: value },
            },
            result: "id",
        });
    }

    async deploy(account: Account): Promise<void> {
        await this.sendGramsTo(await account.getAddress(), giverRequestAmount);
        this.deployedAccounts.push(account);
        await account.deploy();
    }

    async done() {
        const giver = this.giver;
        if (giver) {
            for (const account of runner.deployedAccounts) {
                try {
                    await account.run("sendAllMoney", { dest_addr: await giver.getAddress() });
                } catch (e) {
                    // ignore exception
                }
            }
            await new Promise(resolve => TestsRunner.setTimeout(resolve as any, 1000));
        }
        if (this.client) {
            this.client.close();
        }
    }
}

export const runner = new TestsRunner();
export const ABIVersions = [1, 2];
export type ABIVersion = 1 | 2;

export type TestsRunningState = {
    version: string,
    passed: number,
    failed: number,
    finished: boolean,
}

export const zeroRunningState: TestsRunningState = {
    version: "",
    passed: 0,
    failed: 0,
    finished: false,
};
