/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
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
    decodeMessage,
    DEFAULT_HD_PATH,
    DEFAULT_MNEMONIC_DICTIONARY,
    DEFAULT_MNEMONIC_WORD_COUNT,
    encodeOutput,
} from '../src/modules/crypto-box';
import TONCryptoModule, { TONMnemonicDictionary, TONOutputEncoding } from '../src/modules/TONCryptoModule';
import type { TONCryptoBoxParams, TONEncryptionBox } from '../types';
import { tests } from './_/init-tests';

beforeAll(tests.init);
afterAll(tests.done);

const loadPackage = {
    events: tests.packageLoader('Events'),
};

const dummyEncryptionBox: TONEncryptionBox = {
    getPublicKey() {
        return Promise.resolve('');
    },
    encrypt(message, outputEncoding) {
        return Promise.resolve(encodeOutput(decodeMessage(message), outputEncoding));
    },
    decrypt(message, outputEncoding) {
        return Promise.resolve(encodeOutput(decodeMessage(message), outputEncoding));
    },
};

const seedPhrase = 'abandon math mimic master filter design carbon crystal rookie group knife young';
// noinspection SpellCheckingInspection
const expectedSign = 'f0494632062619389589fea0d5be9d8287c7ff8ebac77c297cef3be0c7aba4e856e46460467889757070a29fd1cb641d81069b5cf48aa936447a7fc466197904';
const cryptoBoxParams: TONCryptoBoxParams = {
    encryptedSeedPhrase: { text: seedPhrase },
    seedPhraseEncryptionBox: dummyEncryptionBox,
};

test('Crypto Box Reuse', async () => {
    const crypto: TONCryptoModule = tests.client.crypto;
    const cryptoBox = await crypto.getCryptoBox(cryptoBoxParams);

    expect(cryptoBox).toBe(await crypto.getCryptoBox(cryptoBoxParams));
    expect(cryptoBox).not.toBe(await crypto.getCryptoBox({
        encryptedSeedPhrase: { text: 'abandon math mimic master filter design carbon crystal rookie group young knife' },
        seedPhraseEncryptionBox: dummyEncryptionBox,
    }));

    expect(await cryptoBox.getSigningBox({ hdPath: 'm' }))
        .toBe(await cryptoBox.getSigningBox({ hdPath: 'm' }));
    expect(await cryptoBox.getSigningBox({ hdPath: 'm' }))
        .not.toBe(await cryptoBox.getSigningBox({ hdPath: 'm/1' }));
});

test('Crypto Box Sign', async () => {
    const crypto: TONCryptoModule = tests.client.crypto;

    const keys = await crypto.mnemonicDeriveSignKeys({
        phrase: seedPhrase,
        path: 'm',
        dictionary: TONMnemonicDictionary.ENGLISH,
        wordCount: 12,
    });
    const naclSecret = `${keys.secret}${keys.public}`;

    // nacl sign

    const message = { text: 'Test Message' };
    const sign = await crypto.naclSignDetached(message, naclSecret);
    expect(sign).toEqual(expectedSign);

    // crypto box sign

    const cryptoBox = await crypto.getCryptoBox(cryptoBoxParams);
    const signingBox = await cryptoBox.getSigningBox({ hdPath: 'm' });
    expect(await signingBox.sign(message, TONOutputEncoding.Hex))
        .toEqual(expectedSign);
});

test('Crypto usage in TONCContractsModule', async () => {
    const { contracts, crypto } = tests.client;

    const eventsPackage = await loadPackage.events(1);
    eventsPackage.abi.setTime = false;

    const keyPair = await crypto.mnemonicDeriveSignKeys({
        phrase: seedPhrase,
        dictionary: DEFAULT_MNEMONIC_DICTIONARY,
        wordCount: DEFAULT_MNEMONIC_WORD_COUNT,
        path: DEFAULT_HD_PATH,
    });
    const cryptoBox = await crypto.getCryptoBox(cryptoBoxParams);
    const signingBox = await cryptoBox.getSigningBox();

    const deployMessageB = await contracts.createDeployMessage({
        package: eventsPackage,
        constructorParams: {},
        signingBox,
    });
    const deployMessageA = await contracts.createDeployMessage({
        package: eventsPackage,
        constructorParams: {},
        keyPair,
    });

    expect(deployMessageA).toEqual(deployMessageB);

    const runMessageA = await contracts.createRunMessage({
        address: deployMessageA.address,
        abi: eventsPackage.abi,
        functionName: 'returnValue',
        input: { id: '0' },
        signingBox,
    });

    const runMessageB = await contracts.createRunMessage({
        address: deployMessageA.address,
        abi: eventsPackage.abi,
        functionName: 'returnValue',
        input: { id: '0' },
        keyPair,
    });

    expect(runMessageA).toEqual(runMessageB);
});
