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

import jCircus from 'jest-circus';
import jExpect from 'expect';
import {addEventHandler as jAddEventHandler, getState as jGetState} from 'jest-circus/build/state';
import jRun from 'jest-circus/build/run';

declare const global: any;

const test = jCircus.test;
const expect = jExpect;
const afterAll = jCircus.afterAll;
const afterEach = jCircus.afterEach;
const beforeAll = jCircus.beforeAll;
const beforeEach = jCircus.beforeEach;
const addEventHandler = jAddEventHandler;
const run = jRun;
const setTimeout = (timeout: number) => {
    global[Symbol.for('TEST_TIMEOUT_SYMBOL')] = timeout;
};

test.each = variants => (title, fn) => variants.forEach((v) => {
    jest.test(title.replace(/%i/g, v), () => fn(v));
});


const jest = {
    test,
    expect,
    afterAll,
    afterEach,
    beforeAll,
    beforeEach,
    addEventHandler,
    run,
    setTimeout,
    getState: jGetState,
};

export {
    test,
    expect,
    afterAll,
    afterEach,
    beforeAll,
    beforeEach,
    addEventHandler,
    run,
    setTimeout,
    jest,
};

//TODO:
// jest.test.each = (variants: any[]) => (title: string, fn: Global.It) => variants.forEach((v) => {
//     jest.test(title.replace(/%i/g, v), () => fn(v));
// });
//

setTimeout(200000);

