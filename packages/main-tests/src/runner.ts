/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
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
    Account,
    ClientConfig,
    KeyPair,
    ResultOfProcessMessage,
    signerKeys,
    signerNone,
    TonClient,
} from '@ton-client/main';

import {
    giverRequestAmount,
    givers,
} from './givers';
import {
    jest,
} from './jest';

export class TestsRunner {
    static setTimeout: (f: () => void, ms: number) => void = () => {
    };
    static log: (...args: any[]) => void = (..._args: any[]) => {
    }
    static exit: (code: number) => void = (_code) => {
    }
    useNodeSE: boolean = false;
    config: ClientConfig = {
        network: {server_address: 'http://localhost:8080'},
    };
    private client: TonClient | null = null;
    private giver: Account | null = null;
    private giverKeys?: KeyPair = undefined;
    private deployedAccounts: Account[] = [];

    static async run(
        onStateChange: (state: TestsRunningState) => void,
        optionLog?: (...args: any[]) => void,
    ) {
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

        const log = optionLog ?? TestsRunner.log;
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
                if (event.name === 'test_start') {
                    console.log(`[TEST_START] ${JSON.stringify({
                        name: event.test.name,
                    })}`);
                } else if (event.name === 'test_success') {
                    state.passed += 1;
                    console.log(`[TEST_SUCCESS] ${JSON.stringify({
                        name: event.test.name,
                    })}`);
                } else if (event.name === 'test_failure') {
                    state.failed += 1;
                    console.log(`[TEST_FAILURE] ${JSON.stringify({
                        name: event.test.name,
                        errors: event.test.errors && event.test.errors.map(errorToJson),
                    })}`);
                } else {
                    return;
                }
                onStateChange(state);
            });
            onStateChange(state);
            const results = await jest.run();
            results.forEach((result) => {
                result.errors = result.errors.map((e) => {
                    return e.toString().replace(/\n\s+at\s+.*/gi, '')
                });
            });
            log(`[TEST_COMPLETE] ${JSON.stringify(results)}`);
            state.finished = true;
            onStateChange(state);
        } catch (error) {
            log('>>>', error);
        }
    }

    configure(useNodeSE: boolean, config?: ClientConfig, giverKeys?: KeyPair) {
        this.useNodeSE = useNodeSE;
        if (giverKeys) {
            this.giverKeys = giverKeys;
        }
        if (config) {
            this.config = config;
        }
        this.client = null;
        this.giver = null;
        this.deployedAccounts = [];
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
        let giver: Account;
        if (this.useNodeSE) {
            giver = new Account(client, givers.v1.abi, givers.v1.address, signerNone());
        } else {
            giver = new Account(client, givers.v2.abi, '', signerKeys(this.giverKeys ?? {
                secret: '2245e4f44af8af6bbd15c4a53eb67a8f211d541ddc7c197f74d7830dba6d27fe',
                public: 'd542f44146f169c6726c8cf70e4cbb3d33d8d842a4afd799ac122c5808d81ba3',
            }));
            await giver.setDeployAddress(givers.v2.tvc);
        }
        this.giver = giver;
        const accounts = (await client.net.query_collection({
            collection: 'accounts',
            filter: {
                id: {eq: giver.address},
            },
            result: 'acc_type balance',
        })).result;

        if (accounts.length === 0) {
            throw `Giver wallet does not exist. Send some grams to ${giver.address}`;
        }
        const account = accounts[0];
        if (!account.balance || Number(account.balance) < giverRequestAmount) {
            throw `Giver has no money. Send some grams to ${giver.address}`;
        }

        if (account.acc_type !== 1) {
            await giver.deploy(givers.v2.tvc);
        }
        return giver;
    }

    async sendGramsTo(account: string, amount: number = giverRequestAmount): Promise<void> {
        let result: ResultOfProcessMessage;
        const giver = await this.getGiver();
        if (this.useNodeSE) {
            result = await giver.run('sendGrams', {
                dest: account,
                amount,
            });
        } else {
            result = await giver.run('sendTransaction', {
                dest: account,
                value: amount,
                bounce: false,
            });
        }
        for (const boc of result.out_messages) {
            const msg = (await giver.client.boc.parse_message({boc})).parsed;
            if (msg.body_type === 0) {
                await giver.client.net.wait_for_collection({
                    collection: 'transactions',
                    filter: {
                        in_msg: {eq: msg.id},
                    },
                    result: 'lt',
                });
            }
        }
    }

    async deploy(
        account: Account,
        tvc: string,
        constructorName?: string,
        constructorInput?: any,
    ): Promise<void> {
        await account.setDeployAddress(tvc, constructorName, constructorInput);
        await this.sendGramsTo(account.address, giverRequestAmount);
        this.deployedAccounts.push(account);
        await account.deploy(tvc, constructorName, constructorInput);
    }

    async done() {
        const giver = this.giver;
        if (giver) {
            for (const account of runner.deployedAccounts) {
                try {
                    await account.run('sendAllMoney', {dest_addr: giver.address});
                } catch (e) {
                    // ignore exception
                }
            }
            await new Promise(resolve => TestsRunner.setTimeout(resolve, 1000));
        }
        if (this.client) {
            await this.client.close();
        }
    }

}

export const runner = new TestsRunner();
export const ABIVersions = [1, 2];

export type TestsRunningState = {
    version: string,
    passed: number,
    failed: number,
    finished: boolean,
}

export const zeroRunningState: TestsRunningState = {
    version: '',
    passed: 0,
    failed: 0,
    finished: false,
};


