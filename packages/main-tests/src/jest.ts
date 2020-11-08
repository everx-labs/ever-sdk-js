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

import jCircus from 'jest-circus';
import jExpect from 'expect';
import {addEventHandler as jAddEventHandler} from 'jest-circus/build/state';
import jRun from 'jest-circus/build/run';
import {Buffer as buffer} from 'buffer';
import bigInt from 'big-integer';

declare function BigInt(v: any): any;

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

if (!global.BigInt) {
    (global as any).BigInt = bigInt;
}
if (!global.Buffer) {
    global.Buffer = buffer;
}


//TODO:
// jest.test.each = (variants: any[]) => (title: string, fn: Global.It) => variants.forEach((v) => {
//     jest.test(title.replace(/%i/g, v), () => fn(v));
// });
//

jest.setTimeout(200000);


(jest as any).expect = (received: any) => {
    const wrapped = defaultExpect(received);
    if (isBigInt(received)) {
        Object.entries(bigIntMatchers).forEach(([name, fn]) => {
            (wrapped as any)[name] = (...args: any[]) => (fn as MatcherFn)(received, ...args);
        });
    }
    return wrapped;
};

export function isBigInt(a: any) {
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

export const bigIntMatchers = {
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
    },
};
export const defaultExpect = jExpect;
export type MatcherFn = (...args: any[]) => any;

export declare function setTimeout(fn: () => void, ms: number): void;

export const test = jest.test;
export const expect = jest.expect;
