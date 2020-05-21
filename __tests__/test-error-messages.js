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

import {TONClientError} from "../src/TONClient";
import {ABIVersions, tests} from './_/init-tests';
import {TONMnemonicDictionary} from '../src/modules/TONCryptoModule';

const WalletContractPackage = tests.loadPackage('WalletContract');
const HelloContractPackage = tests.loadPackage('Hello');

jest.setTimeout(100000);

beforeAll(tests.init);
afterAll(tests.done);

async function expectError(code: number, source: string, message: ?string, f) {
    try {
        await f();
        //$FlowFixMe
        fail(`Expected error with code:${code} source: ${source}`);
    } catch (error) {
        expect({ code: error.code, source: error.source }).toEqual({ code, source });
        if (message) {
            expect(error.message).toMatch(message);
        }
    }
}

async function expectClientError(code: number, f) {
    return expectError(code, TONClientError.source.CLIENT, null, f);
}

test.each(ABIVersions)('Detailed errors (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    tests.client.config.data.waitForTimeout = 5000;
    const helloPackage = HelloContractPackage[abiVersion];

    let helloKeys = await crypto.ed25519Keypair();
    let helloAddress = (await contracts.createDeployMessage({
        package: helloPackage,
        constructorParams: {},
        keyPair: helloKeys,
    })).address;

    await expectClientError(TONClientError.code.ACCOUNT_MISSING, async () => {
        await contracts.deploy({
            package: helloPackage,
            constructorParams: {},
            keyPair: helloKeys,
        });
    });

    await tests.get_grams_from_giver(helloAddress, 10);
    await expectClientError(TONClientError.code.ACCOUNT_BALANCE_TOO_LOW, async () => {
        await contracts.deploy({
            package: helloPackage,
            constructorParams: {},
            keyPair: helloKeys,
        });
    });

    helloKeys = await crypto.ed25519Keypair();
    helloAddress = (await contracts.createDeployMessage({
        package: helloPackage,
        constructorParams: {},
        keyPair: helloKeys,
    })).address;

    await expectClientError(TONClientError.code.ACCOUNT_MISSING, async () => {
        await contracts.run({
            address: helloAddress,
            abi: helloPackage.abi,
            functionName: 'touch',
            input: {},
            keyPair: helloKeys,
        });
    });

    await tests.get_grams_from_giver(helloAddress, 10);
    await expectClientError(TONClientError.code.ACCOUNT_CODE_MISSING, async () => {
        await contracts.run({
            address: helloAddress,
            abi: helloPackage.abi,
            functionName: 'touch',
            input: {},
            keyPair: helloKeys,
        });
    });
});

test.each(ABIVersions)('Test SDK Errors 1-3 (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    const walletPackage = WalletContractPackage[abiVersion];
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
    }

    try {
        await contracts.createDeployMessage({
            //$FlowFixMe
            package: 'wrongPackage',
            constructorParams: {},
            keyPair: keys,
        });
    } catch (error) {
        console.log(JSON.stringify(error));
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid params: missing field \`abi\`');
    } */

    await expectError(2, 'client', 'Invalid params: invalid type: null, expected struct KeyPair', async () => {
        await contracts.createDeployMessage({
            package: walletPackage,
            constructorParams: {},
            //$FlowFixMe
            keyPair: null,
        });
    });

    await expectError(2, 'client', 'Invalid params: missing field `public`', async () => {
        await contracts.createDeployMessage({
            package: walletPackage,
            constructorParams: {},
            //$FlowFixMe
            keyPair: {},
        });
    });

    try {
        await contracts.createDeployMessage({
            package: walletPackage,
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

test.each(ABIVersions)('Test SDK Errors > 2000 (ABI v%i)', async (abiVersion) => {
    const { contracts, crypto } = tests.client;
    const walletPackage = WalletContractPackage[abiVersion];
    let wrongKeys = {
        'public': '',
        'secret': '6396991e831869ba7ca116767bdbceecc2d880146b34479a0063bdd8407fcc83'
    };
    try {
        await contracts.createDeployMessage({
            package: walletPackage,
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
            .toMatch('Invalid public key [PublicKey must be 32 bytes in length]');
    }


    wrongKeys = {
        'public': '6396991e831869ba7ca116767bdbceecc2d880146b34479a0063bdd8407fcc83',
        'secret': ''
    };
    try {
        await contracts.createDeployMessage({
            package: walletPackage,
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
            package: walletPackage,
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
        await crypto.mnemonicFromEntropy({
            entropy: { hex: '' },
            dictionary: TONMnemonicDictionary.ENGLISH,
        });
    } catch (error) {
        expect(error.source)
            .toEqual('client');
        expect(error.code)
            .toEqual(2016);
        expect(error.data)
            .toBeNull();
        expect(error.message)
            .toMatch('Invalid bip39 entropy:');
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

test.each(ABIVersions)('Test SDK Errors 3000-3020 (ABI v%i)', async (abiVersion) => {
    const { contracts } = tests.client;
    const walletPackage = WalletContractPackage[abiVersion];
    const body = '';
    try {
        await contracts.decodeOutputMessageBody({
            abi: walletPackage.abi,
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
            abi: walletPackage.abi,
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
