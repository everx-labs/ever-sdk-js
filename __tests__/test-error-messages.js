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
import { TONMnemonicDictionary } from '../src/modules/TONCryptoModule';

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
            //$FlowFixMe
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

    try {
        await contracts.createDeployMessage({
            package: WalletContractPackage,
            constructorParams: {},
            //$FlowFixMe
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
            //$FlowFixMe
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
            //$FlowFixMe
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
    const { contracts, crypto } = tests.client;
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
       /* expect(error.message)
            .toMatch('Invalid public key [PublicKey must be 32 bytes in length]');*/
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
    try {
        await crypto.factorize('');
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2007);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid factorize challenge: cannot parse integer from empty string');
    }
    try {
        await crypto.factorize('       ');
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2007);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid factorize challenge: invalid digit found in string');
    }
    try {
        await crypto.hdkeyXPrvDerivePath('???', '', true);
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2018);
    }
    try {
        await crypto.mnemonicFromRandom({
            //$FlowFixMe
            dictionary: 255,
            wordCount: 12,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2022);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid mnemonic dictionary');
    }

    for (const dict in TONMnemonicDictionary) {
        try {
            await crypto.mnemonicFromRandom({
                dictionary: TONMnemonicDictionary[dict],
            //$FlowFixMe
                wordCount: 1,
            });
        } catch (error) {
            if (TONMnemonicDictionary[dict] !== TONMnemonicDictionary.TON) {
                expect(error.source)
                    .toEqual('client');
                expect(error.code)
                    .toEqual(2023);
                expect(error.data)
                    .toBeNull();
                expect(error.message)
                    .toMatch('Invalid mnemonic word count');
            }
        }
    }
});

test('Test SDK Errors 3000-3020', async () => {
    const { contracts } = tests.client;
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
