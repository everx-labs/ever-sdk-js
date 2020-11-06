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
    ResultOfProcessMessage,
    TonClient,
} from '@ton-client/main';
import {abiContract} from '@ton-client/main';
import {
    ClientConfig,
    KeyPair,
    signerKeys,
    signerNone,
} from '@ton-client/main/dist';
// import jestMock from 'jest-mock';
import jExpect from 'expect';
import {addEventHandler as jAddEventHandler} from 'jest-circus/build/state';
import jRun from 'jest-circus/build/run';
import jCircus from 'jest-circus';

import {Buffer as buffer} from 'buffer';

// @ts-ignore
import {BigInteger as BigIntEmulated} from 'javascript-biginteger';

declare function BigInt(v: any): any;

declare const global: any;

if (!global.BigInt) {
    global.BigInt = BigIntEmulated;
}
if (!global.Buffer) {
    global.Buffer = buffer;
}

export const jest = {
    test: jCircus.test,
    expect: jExpect,
    afterAll: jCircus.afterAll,
    afterEach: jCircus.afterEach,
    beforeAll: jCircus.beforeAll,
    beforeEach: jCircus.beforeEach,
    addEventHandler: jAddEventHandler,
    run: jRun,
    setTimeout(timeout: number) {
        (global as any)[Symbol.for('TEST_TIMEOUT_SYMBOL')] = timeout;
    },
};


//TODO:
// jest.test.each = (variants: any[]) => (title: string, fn: Global.It) => variants.forEach((v) => {
//     jest.test(title.replace(/%i/g, v), () => fn(v));
// });
//

jest.setTimeout(200000);


function isBigInt(a: any) {
    return typeof a === 'bigint' || a instanceof BigInt;
}

function compareBigInt(a: any, b: any) {
    const bigA = BigInt(a);
    const bigB = BigInt(b);
    if (typeof bigA !== 'bigint') {
        return bigA.compare(bigB);
    }
    if (bigA < bigB) {
        return -1;
    }
    if (bigA > bigB) {
        return 1;
    }
    return 0;
}


const bigIntMatchers = {
    toBeGreaterThan(received: any, other: any) {
        return {
            pass: compareBigInt(received, other) > 0,
            message: () => `${received} must be greater than ${other}`,
        };
    },
    toBeGreaterThanOrEqual(received: any, other: any) {
        return {
            pass: compareBigInt(received, other) >= 0,
            message: () => `${received} must be greater than or equal to ${other}`,
        };
    },
    toBeLessThan(received: any, other: any) {
        return {
            pass: compareBigInt(received, other) < 0,
            message: () => `${received} must be less than ${other}`,
        };
    },
    toBeLessThanOrEqual(received: any, other: any) {
        return {
            pass: compareBigInt(received, other) <= 0,
            message: () => `${received} must be less than or equal to ${other}`,
        };
    },
    toEqual(received: any, other: any) {
        return {
            pass: compareBigInt(received, other) === 0,
            message: () => `${received} must be equal to ${other}`,
        };
    }, // toBe: null,
    // toBeCloseTo: null,
    // toBeDefined: null,
    // toBeFalsy: null,
    // toBeInstanceOf: null,
    // toBeNaN: null,
    // toBeNull: null,
    // toBeTruthy: null,
    // toBeUndefined: null,
    // toContain: null,
    // toContainEqual: null,
    // toHaveLength: null,
    // toHaveProperty: null,
    // toMatch: null,
    // toMatchObject: null,
    // lastCalledWith: null,
    // toBeCalled: null,
    // toBeCalledWith: null,
    // toHaveBeenCalled: null,
    // toHaveBeenCalledTimes: null,
    // toHaveBeenCalledWith: null,
    // toHaveBeenLastCalledWith: null,
    // toThrow: null,
    // toThrowError: null,
};
const defaultExpect = jExpect;
type MatcherFn = (...args: any[]) => any;

(jest as any).expect = (received: any) => {
    const wrapped = defaultExpect(received);
    if (isBigInt(received)) {
        Object.entries(bigIntMatchers).forEach(([name, fn]) => {
            (wrapped as any)[name] = (...args: any[]) => (fn as MatcherFn)(received, ...args);
        });
    }
    return wrapped;
};


export declare function setTimeout(fn: () => void, ms: number): void;

// noinspection SpellCheckingInspection
const givers = {
    v1: {
        address: '0:841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94',
        abi: abiContract({
            'ABI version': 1,
            'functions': [
                {
                    'name': 'constructor',
                    'inputs': [],
                    'outputs': [],
                }, {
                    'name': 'sendGrams',
                    'inputs': [
                        {
                            'name': 'dest',
                            'type': 'address',
                        }, {
                            'name': 'amount',
                            'type': 'uint64',
                        },
                    ],
                    'outputs': [],
                },
            ],
            'events': [],
            'data': [],
        }),
    },
    v2: {
        abi: abiContract({
            'ABI version': 2,
            'header': ['time', 'expire'],
            'functions': [
                {
                    'name': 'upgrade',
                    'inputs': [
                        {
                            'name': 'newcode',
                            'type': 'cell',
                        },
                    ],
                    'outputs': [],
                }, {
                    'name': 'sendTransaction',
                    'inputs': [
                        {
                            'name': 'dest',
                            'type': 'address',
                        }, {
                            'name': 'value',
                            'type': 'uint128',
                        }, {
                            'name': 'bounce',
                            'type': 'bool',
                        },
                    ],
                    'outputs': [],
                }, {
                    'name': 'getMessages',
                    'inputs': [],
                    'outputs': [
                        {
                            'components': [
                                {
                                    'name': 'hash',
                                    'type': 'uint256',
                                }, {
                                    'name': 'expireAt',
                                    'type': 'uint64',
                                },
                            ],
                            'name': 'messages',
                            'type': 'tuple[]',
                        },
                    ],
                }, {
                    'name': 'constructor',
                    'inputs': [],
                    'outputs': [],
                },
            ],
            'events': [],
        }),
        tvc: 'te6ccgECGgEAA9sAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAfz/fyHtRNAg10nCAZ/T/9MA9AX4an/4Yfhm+GKOG/QFbfhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN4j+EL4RSBukjBw3rry4GUh0z/THzQx+CMhAb7yuSH5ACD4SoEBAPQOIJEx3rMLAE7y4Gb4ACH4SiIBVQHIyz9ZgQEA9EP4aiMEXwTTHwHwAfhHbpLyPN4CASASDQIBWBEOAQm46Jj8UA8B/vhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3tFwbW8C+EqBAQD0hpUB1ws/f5NwcHDikSCONyMjI28CbyLIIs8L/yHPCz8xMQFvIiGkA1mAIPRDbwI0IvhKgQEA9HyVAdcLP3+TcHBw4gI1MzHoXwPIghB3RMfighCAAAAAsc8LHyEQAKJvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZoEDmCLPMQG5lnHPQCHPF5Vxz0EhzeIgyXH7AFswwP+OEvhCyMv/+EbPCwD4SgH0AMntVN5/+GcAxbkWq+f/CC3Rxt2omgQa6ThAM/p/+mAegL8NT/8MPwzfDFHDfoCtvw1OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCNJeRnJuPwzcXwAaPwhZGX//CNnhYB8JQD6AGT2qj/8M8AIBIBUTAde7Fe+TX4QW6OEu1E0NP/0wD0Bfhqf/hh+Gb4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0SIiInPIcc8LASLPCgBzz0AkzxYj+gKAac9Acs9AIMki+wBfBfhKgQEA9IaVAdcLP3+TcHBw4pEggUAJKOLfgjIgG7n/hKIwEhAYEBAPRbMDH4at4i+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA18D+ELIy//4Rs8LAPhKAfQAye1Uf/hnAgEgFxYAx7jkYYdfCC3Rwl2omhp/+mAegL8NT/8MPwzfDFvamj8IXwikDdJGDhvXXlwMvwAfCFkZf/8I2eFgHwlAPoAZPaqfAeQfYIQaHaPdqn4ARh8IWRl//wjZ4WAfCUA+gBk9qo//DPACAtoZGAAtr4QsjL//hGzwsA+EoB9ADJ7VT4D/IAgAdacCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+S8jzhUxHAAJDgwQMighD////9vLGS8jzgAfAB+EdukvI83o',
    },
};

const giverRequestAmount = 500_000_000;

export class TestEnv {
    useNodeSE: boolean = false;
    config: ClientConfig = {
        network: {server_address: 'http://localhost:8080'},
    };
    private client: TonClient | null = null;
    private giver: Account | null = null;
    private giverKeys?: KeyPair = undefined;
    private deployedAccounts: Account[] = [];

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
            for (const account of tests.deployedAccounts) {
                try {
                    await account.run('sendAllMoney', {dest_addr: giver.address});
                } catch (e) {
                    // ignore exception
                }
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        if (this.client) {
            await this.client.close();
        }
    }
}

export const ABIVersions = [1, 2];
export const tests = new TestEnv();

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

export async function startTests(
    onStateChange: (state: TestsRunningState) => void,
    optionLog?: (...args: any[]) => void,
) {
    const log = optionLog ?? console.log;
    try {
        jest.setTimeout(300000);
        const client = tests.getClient();

        const state: TestsRunningState = {
            version: (await client.client.version()).version,
            passed: 0,
            failed: 0,
            finished: false,
        };
        onStateChange(state);

        jest.addEventHandler((event: any) => {
            if (event.name === 'test_start') {
                log(`[TEST_START] ${JSON.stringify({
                    name: event.test.name,
                })}`);
            } else if (event.name === 'test_done') {
                if (event.test.errors.length === 0) {
                    state.passed = (state.passed ?? 0) + 1;
                    log(`[TEST_SUCCESS] ${JSON.stringify({
                        name: event.test.name,
                    })}`);
                } else {
                    state.failed = (state.failed ?? 0) + 1;
                    log(`[TEST_FAILURE] ${JSON.stringify({
                        name: event.test.name,
                        error: errorToJson(event.error),
                        errors: event.test.errors && event.test.errors.map(errorToJson),
                    })}`);

                }
            } else {
                return;
            }
            onStateChange(state);
        });
        onStateChange(state);
        const runResult = await jest.run();
        const results = {
            errors: runResult.unhandledErrors.map((error) => {
                return error.toString().replace(/\n\s+at\s+.*/gi, '');
            }),
            results: runResult.testResults,
        };
        log(`[TEST_COMPLETE] ${JSON.stringify(results)}`);
        state.finished = true;
        onStateChange(state);
    } catch (error) {
        log('>>>', error);
    }
}

jest.afterAll(async () => {
    await tests.done();
});

export const test = jest.test;
export const expect = jest.expect;
