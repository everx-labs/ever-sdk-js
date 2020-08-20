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

import { decodeMessage, encodeOutput } from '../src/modules/crypto-box';
import TONCryptoModule, { TONMnemonicDictionary, TONOutputEncoding } from '../src/modules/TONCryptoModule';
import type { TONEncryptionBox } from '../types';
import { tests } from './_/init-tests';

beforeAll(tests.init);
afterAll(tests.done);

export class DummyEncryptionBox implements TONEncryptionBox {
    getPublicKey() {
        return Promise.resolve('');
    }

    encrypt(message, outputEncoding) {
        return Promise.resolve(encodeOutput(decodeMessage(message), outputEncoding));
    }

    decrypt(message, outputEncoding) {
        return Promise.resolve(encodeOutput(decodeMessage(message), outputEncoding));
    }
}

// const naclSecret = '56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e';
// const naclSign = 'fb0cfe40eea5d6c960652e6ceb904da8a72ee2fcf6e05089cf835203179ff65bb48c57ecf31dcfcd26510bea67e64f3e6898b7c58300dc14338254268cade10354657374204d657373616765';
test('Crypto Box', async () => {
    const crypto: TONCryptoModule = tests.client.crypto;

    const seedPhrase = 'abandon math mimic master filter design carbon crystal rookie group knife young';
    const keys = await crypto.mnemonicDeriveSignKeys({
        phrase: seedPhrase,
        path: 'm',
        dictionary: TONMnemonicDictionary.ENGLISH,
        wordCount: 12,
    })
    console.log('>>> 1', keys);
    const naclSecret = `${keys.secret}${keys.public}`;
    const expectedSign = 'f0494632062619389589fea0d5be9d8287c7ff8ebac77c297cef3be0c7aba4e856e46460467889757070a29fd1cb641d81069b5cf48aa936447a7fc466197904';

    // nacl sign

    const message = { text: 'Test Message' };
    const sign = await crypto.naclSignDetached(message, naclSecret);
    expect(sign).toEqual(expectedSign);

    const cryptoBox = await crypto.getCryptoBox({
        encryptedSeedPhrase: { text: seedPhrase },
        seedPhraseEncryptionBox: new DummyEncryptionBox(),

    });
    const signingBox = await cryptoBox.getSigningBox({
        hdPath: 'm',
    });
    expect(await signingBox.sign(message, TONOutputEncoding.Hex))
        .toEqual(expectedSign);

    // // nacl box
    //
    // const encrypted1 = await crypto.naclBox({
    //     message: { text: 'Test Message' },
    //     nonce: 'cd7f99924bf422544046e83595dd5803f17536f5c9a11746',
    //     theirPublicKey: 'c4e2d9fe6a6baf8d1812b799856ef2a306291be7a7024837ad33a8530db79c6b',
    //     secretKey: 'd9b9dc5033fb416134e5d2107fdbacab5aadb297cb82dbdcd137d663bac59f7f',
    // });
    // expect(encrypted1).toEqual('962e17103e24c7fa63436a9d3f4791d9dfcadf4b8df78be83400f1c0');
    //
    // const decrypted1 = await crypto.naclBoxOpen({
    //     message: { hex: '962e17103e24c7fa63436a9d3f4791d9dfcadf4b8df78be83400f1c0' },
    //     nonce: 'cd7f99924bf422544046e83595dd5803f17536f5c9a11746',
    //     theirPublicKey: 'c4e2d9fe6a6baf8d1812b799856ef2a306291be7a7024837ad33a8530db79c6b',
    //     secretKey: 'd9b9dc5033fb416134e5d2107fdbacab5aadb297cb82dbdcd137d663bac59f7f',
    //     outputEncoding: TONOutputEncoding.Text,
    // });
    // expect(decrypted1).toEqual('Test Message');
    //
    // // nacl secret box
    //
    // const encrypted2 = await crypto.naclSecretBox({
    //     message: { text: 'Test Message' },
    //     nonce: '2a33564717595ebe53d91a785b9e068aba625c8453a76e45',
    //     key: '8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8',
    // });
    // expect(encrypted2).toEqual('24bede8ca59ed8a5e6aec9ece35c9f5e8405d2dfc2d50f111b2cd0d8');
    //
    // const decrypted2 = await crypto.naclSecretBoxOpen({
    //     message: { hex: '24bede8ca59ed8a5e6aec9ece35c9f5e8405d2dfc2d50f111b2cd0d8' },
    //     nonce: '2a33564717595ebe53d91a785b9e068aba625c8453a76e45',
    //     key: '8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8',
    //     outputEncoding: TONOutputEncoding.Text,
    // });
    // expect(decrypted2).toEqual('Test Message');
    //
    // const e = await crypto.naclSecretBox({
    //     message: { text: 'Text with \' and \" and : {}' },
    //     nonce: '2a33564717595ebe53d91a785b9e068aba625c8453a76e45',
    //     key: '8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8',
    //     outputEncoding: TONOutputEncoding.Base64,
    // });
    // const d = await crypto.naclSecretBoxOpen({
    //     message: { base64: e },
    //     nonce: '2a33564717595ebe53d91a785b9e068aba625c8453a76e45',
    //     key: '8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8',
    //     outputEncoding: TONOutputEncoding.Text,
    // });

});

