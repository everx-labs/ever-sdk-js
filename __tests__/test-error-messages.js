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

// @flow

import { WalletContractPackage } from './contracts/WalletContract';
import { tests } from './_/init-tests';

beforeAll(tests.init);
afterAll(tests.done);

test('Test SDK Errors 1-3', async () => {
    const { contracts, crypto } = tests.client;

    const keys = await crypto.ed25519Keypair();

    /* // TODO fix thrown TypeError: Cannot read property 'abi' of null && undefined
     try {
         await contracts.createDeployMessage({
             package: null,
             constructorParams: {},
             keyPair: keys,
         });
     } catch (error) {
         console.log(error);
          expect(error.source).toEqual('client');
          expect(error.code).toEqual(2);
     }
    try {
        await contracts.createDeployMessage({
            package: undefined,
            constructorParams: {},
            keyPair: keys,
        });
    } catch (error) {
        console.log(error);
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2);
    } */

    try {
        await contracts.createDeployMessage({
            package: 'wrongPackage',
            constructorParams: {},
            keyPair: keys,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid params: missing field \`abi\`');
    }


    /* // TODO TypeError: Cannot read property 'abi' of undefined

     try {
         await contracts.createDeployMessage({
             constructorParams: {},
             keyPair: keys,
         });
     } catch (error) {
         console.log(error);
         expect(error.source)
             .toEqual('client');
         expect(error.code)
             .toEqual(2);
         expect(error.data)
             .toBeNull();
         expect(error.message)
             .toMatch('Invalid params: missing field \`package\`');
     } */


    try {
        await contracts.createDeployMessage({
            package: WalletContractPackage,
            constructorParams: {},
            keyPair: null,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid params: invalid type: null, expected struct KeyPair');
    }

    try {
        await contracts.createDeployMessage({
            package: WalletContractPackage,
            constructorParams: {},
            keyPair: {},
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid params: missing field `public`');
    }
    try {
        await contracts.createDeployMessage({
            package: WalletContractPackage,
            constructorParams: {},
            keyPair: '',
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('invalid type: string "", expected struct KeyPair');
    }
});

test('Test SDK Errors > 2000', async () => {

    let wrongKeys = {
        'public': '',
        'secret': '6396991e831869ba7ca116767bdbceecc2d880146b34479a0063bdd8407fcc83'
    };
    try {
        await contracts.createDeployMessage({
            package: WalletContractPackage,
            constructorParams: {},
            keyPair: wrongKeys,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2001);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid secret key [PublicKey must be 32 bytes in length]: ');
    }


    wrongKeys = {
        'public': '6396991e831869ba7ca116767bdbceecc2d880146b34479a0063bdd8407fcc83',
        'secret': ''
    };
    try {
        await contracts.createDeployMessage({
            package: WalletContractPackage,
            constructorParams: {},
            keyPair: wrongKeys,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2002);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid secret key [SecretKey must be 32 bytes in length]');
    }

    wrongKeys = {
        'public': '/396991e831869ba7ca116767bdbceecc2d880146b34479a0063bdd8407fcc83',
        'secret': '*396991e831869ba7ca116767bdbceecc2d880146b34479a0063bdd8407fcc83'
    };
    try {
        await contracts.createDeployMessage({
            package: WalletContractPackage,
            constructorParams: {},
            keyPair: wrongKeys,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2003);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid key');
    }
    const abi = {
        'ABI version': 1,
        'functions': [
            {
                'name': 'constructor',
                'inputs': [],
                'outputs': []
            },
            {
                'name': 'touch',
                'inputs': [],
                'outputs': []
            },
            {
                'name': 'sayHello',
                'inputs': [],
                'outputs': [
                    {
                        'name': 'value0',
                        'type': 'uint32'
                    }
                ]
            }
        ],
        'events': [],
        'data': []
    };

});

test('Test SDK Errors 3000-3020', async () => {
    const body = '';
    try {
        await contracts.decodeOutputMessageBody({
            abi: WalletContractPackage.abi,
            bodyBase64: body,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(3005);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Decode run output failed:');
    }
    try {
        await contracts.decodeInputMessageBody({
            abi: WalletContractPackage.abi,
            bodyBase64: body,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(3006);
        expect(error.data)
            .toBeNull();
        // expect(error.message).toMatch('Decode run input failed: failed to fill whole buffer');
    }
});
