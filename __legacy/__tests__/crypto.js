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

import TONCryptoModule, { TONMnemonicDictionary, TONOutputEncoding } from '../src/modules/TONCryptoModule';
import { tests } from './_/init-tests';

beforeAll(tests.init);
afterAll(tests.done);
const TONMnemonicWordCounts = [12, 15, 18, 21, 24];
test('crypto', async () => {
    const clientWithoutSetup = tests.newClient();
    const result0 = await clientWithoutSetup.crypto.factorize('17ED48941A08F981');
    expect(result0.a).toEqual('494C553B');
    expect(result0.b).toEqual('53911073');

    const crypto: TONCryptoModule = tests.client.crypto;

    // Math

    const result1 = await crypto.factorize('17ED48941A08F981');
    expect(result1.a).toEqual('494C553B');
    expect(result1.b).toEqual('53911073');

    const result2 = await crypto.modularPower('0123456789ABCDEF', '0123', '01234567');
    expect(result2).toEqual('63bfdf');

    // random

    const result3 = await crypto.randomGenerateBytes(32, TONOutputEncoding.Hex);
    expect(result3.length).toEqual(64);

    const resultHexUppercase = await crypto.randomGenerateBytes(32, TONOutputEncoding.HexUppercase);
    expect(resultHexUppercase.length).toEqual(64);

    const result4 = await crypto.randomGenerateBytes(32, TONOutputEncoding.Base64);
    expect(result4.length).toEqual(44);

    // ed25519

    const result5 = await crypto.ed25519Keypair();
    expect(result5.public.length).toEqual(64);
    expect(result5.secret.length).toEqual(64);
    expect(result5.public).not.toEqual(result5.secret);

    // sha

    const hex1 = await crypto.sha512({ text: 'Message to hash with sha 512' });
    expect(hex1)
        .toEqual(
            '2616a44e0da827f0244e93c2b0b914223737a6129bc938b8edf2780ac9482960baa9b7c7cdb11457c1cebd5ae77e295ed94577f32d4c963dc35482991442daa5');
    const hex2 = await crypto.sha256({ text: 'Message to hash with sha 256' });
    expect(hex2).toEqual('16fd057308dd358d5a9b3ba2de766b2dfd5e308478fc1f7ba5988db2493852f5');
    const hex3 = await crypto.sha256({ hex: '4d65737361676520746f206861736820776974682073686120323536' });
    expect(hex3).toEqual('16fd057308dd358d5a9b3ba2de766b2dfd5e308478fc1f7ba5988db2493852f5');
    const hex4 = await crypto.sha256({ base64: 'TWVzc2FnZSB0byBoYXNoIHdpdGggc2hhIDI1Ng==' });
    expect(hex4).toEqual('16fd057308dd358d5a9b3ba2de766b2dfd5e308478fc1f7ba5988db2493852f5');
    const base64 = await crypto.sha256({ text: 'Message to hash with sha 256' }, TONOutputEncoding.Base64);
    expect(base64).toEqual('Fv0FcwjdNY1amzui3nZrLf1eMIR4/B97pZiNskk4UvU=');

    // scrypt

    let result6 = await crypto.scrypt({
        password: { text: 'Test Password' },
        salt: { text: 'Test Salt' },
        logN: 10,
        r: 8,
        p: 16,
        dkLen: 64,
        outputEncoding: TONOutputEncoding.Hex,
    });
    expect(result6)
        .toEqual(
            '52e7fcf91356eca55fc5d52f16f5d777e3521f54e3c570c9bbb7df58fc15add73994e5db42be368de7ebed93c9d4f21f9be7cc453358d734b04a057d0ed3626d');

    // nacl keys

    const result7 = await crypto.naclBoxKeypair();
    expect(result7.public.length).toEqual(64);
    expect(result7.secret.length).toEqual(64);
    expect(result7.public).not.toEqual(result7.secret);

    const result8 = await crypto.naclBoxKeypairFromSecretKey(
        'e207b5966fb2c5be1b71ed94ea813202706ab84253bdf4dc55232f82a1caf0d4');
    expect(result8.public).toEqual('a53b003d3ffc1e159355cb37332d67fc235a7feb6381e36c803274074dc3933a');

    const result9 = await crypto.naclSignKeypair();
    expect(result9.public.length).toEqual(64);
    expect(result9.secret.length).toEqual(128);

    const result10 = await crypto.naclSignKeypairFromSecretKey(
        '8fb4f2d256e57138fb310b0a6dac5bbc4bee09eb4821223a720e5b8e1f3dd674');
    expect(result10.public).toEqual('aa5533618573860a7e1bf19f34bd292871710ed5b2eafa0dcdbb33405f2231c6');

    // nacl box

    const encrypted1 = await crypto.naclBox({
        message: { text: 'Test Message' },
        nonce: 'cd7f99924bf422544046e83595dd5803f17536f5c9a11746',
        theirPublicKey: 'c4e2d9fe6a6baf8d1812b799856ef2a306291be7a7024837ad33a8530db79c6b',
        secretKey: 'd9b9dc5033fb416134e5d2107fdbacab5aadb297cb82dbdcd137d663bac59f7f',
    });
    expect(encrypted1).toEqual('962e17103e24c7fa63436a9d3f4791d9dfcadf4b8df78be83400f1c0');

    const decrypted1 = await crypto.naclBoxOpen({
        message: { hex: '962e17103e24c7fa63436a9d3f4791d9dfcadf4b8df78be83400f1c0' },
        nonce: 'cd7f99924bf422544046e83595dd5803f17536f5c9a11746',
        theirPublicKey: 'c4e2d9fe6a6baf8d1812b799856ef2a306291be7a7024837ad33a8530db79c6b',
        secretKey: 'd9b9dc5033fb416134e5d2107fdbacab5aadb297cb82dbdcd137d663bac59f7f',
        outputEncoding: TONOutputEncoding.Text,
    });
    expect(decrypted1).toEqual('Test Message');

    // nacl secret box

    const encrypted2 = await crypto.naclSecretBox({
        message: { text: 'Test Message' },
        nonce: '2a33564717595ebe53d91a785b9e068aba625c8453a76e45',
        key: '8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8',
    });
    expect(encrypted2).toEqual('24bede8ca59ed8a5e6aec9ece35c9f5e8405d2dfc2d50f111b2cd0d8');

    const decrypted2 = await crypto.naclSecretBoxOpen({
        message: { hex: '24bede8ca59ed8a5e6aec9ece35c9f5e8405d2dfc2d50f111b2cd0d8' },
        nonce: '2a33564717595ebe53d91a785b9e068aba625c8453a76e45',
        key: '8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8',
        outputEncoding: TONOutputEncoding.Text,
    });
    expect(decrypted2).toEqual('Test Message');

    const e = await crypto.naclSecretBox({
        message: { text: 'Text with \' and \" and : {}' },
        nonce: '2a33564717595ebe53d91a785b9e068aba625c8453a76e45',
        key: '8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8',
        outputEncoding: TONOutputEncoding.Base64,
    });
    const d = await crypto.naclSecretBoxOpen({
        message: { base64: e },
        nonce: '2a33564717595ebe53d91a785b9e068aba625c8453a76e45',
        key: '8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8',
        outputEncoding: TONOutputEncoding.Text,
    });

    // nacl sign
    const signed = await crypto.naclSign(
        { text: 'Test Message' },
        '56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e',
    );
    expect(signed)
        .toEqual(
            'fb0cfe40eea5d6c960652e6ceb904da8a72ee2fcf6e05089cf835203179ff65bb48c57ecf31dcfcd26510bea67e64f3e6898b7c58300dc14338254268cade10354657374204d657373616765');

    const original = await crypto.naclSignOpen(
        { hex: 'fb0cfe40eea5d6c960652e6ceb904da8a72ee2fcf6e05089cf835203179ff65bb48c57ecf31dcfcd26510bea67e64f3e6898b7c58300dc14338254268cade10354657374204d657373616765' },
        '1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e',
        TONOutputEncoding.Text,
    );
    expect(original).toEqual('Test Message');

    const sign = await crypto.naclSignDetached(
        { text: 'Test Message' },
        '56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e',
    );
    expect(sign)
        .toEqual(
            'fb0cfe40eea5d6c960652e6ceb904da8a72ee2fcf6e05089cf835203179ff65bb48c57ecf31dcfcd26510bea67e64f3e6898b7c58300dc14338254268cade103');

    // Mnemonic

    const mnemonicWords = await crypto.mnemonicWords();
    expect(mnemonicWords.split(' ').length).toEqual(2048);

    for (const dictionary in TONMnemonicDictionary) {
        for (let i = 0; i < TONMnemonicWordCounts.length; i++) {
            expect((await crypto.mnemonicFromRandom({
                dictionary: TONMnemonicDictionary[dictionary],
                wordCount: TONMnemonicWordCounts[i],
            })).split(' ').length).toEqual(TONMnemonicWordCounts[i]);
        }
    }
    expect(await crypto.mnemonicFromEntropy({
        entropy: { hex: '00112233445566778899AABBCCDDEEFF' },
        dictionary: TONMnemonicDictionary.ENGLISH,
        wordCount: 12,
    })).toEqual('abandon math mimic master filter design carbon crystal rookie group knife young');

    for (const dictionary in TONMnemonicDictionary) {
        for (let i = 0; i < TONMnemonicWordCounts.length; i++) {
            expect(await crypto.mnemonicIsValid({
                dictionary: TONMnemonicDictionary[dictionary],
                wordCount: TONMnemonicWordCounts[i],
                phrase: await crypto.mnemonicFromRandom({
                    dictionary: TONMnemonicDictionary[dictionary],
                    wordCount: TONMnemonicWordCounts[i],
                }),
            })).toBeTruthy();
        }

    }

    expect(await crypto.mnemonicIsValid({ phrase: 'one two' })).toBeFalsy();

    const keys = await crypto.mnemonicDeriveSignKeys({
        phrase: 'unit follow zone decline glare flower crisp vocal adapt magic much mesh cherry teach mechanic rain float vicious solution assume hedgehog rail sort chuckle',
    });

    const ton_public = await crypto.publicKeyToString(keys.public);
    expect(ton_public).toEqual('PubDdJkMyss2qHywFuVP1vzww0TpsLxnRNnbifTCcu-XEgW0');


    let phrase = await crypto.mnemonicFromRandom();
    expect(phrase.split(' ').length).toEqual(24);


    phrase = await crypto.mnemonicFromRandom({ dictionary: 0, wordCount: 12 });
    expect(phrase.split(' ').length).toEqual(12);

    phrase = await crypto.mnemonicFromRandom({ dictionary: 1, wordCount: 12 });
    expect(phrase.split(' ').length).toEqual(12);


    const entropy = '2199ebe996f14d9e4e2595113ad1e6276bd05e2e147e16c8ab8ad5d47d13b44fcf';
    const phrase2 = await crypto.mnemonicFromEntropy({
        entropy: { hex: entropy },
    });
    const public2 = (await crypto.mnemonicDeriveSignKeys({
        phrase: phrase2,
    })).public;
    const ton_public2 = await crypto.publicKeyToString(public2);
    expect(ton_public2).toEqual('PuYGEX9Zreg-CX4Psz5dKehzW9qCs794oBVUKqqFO7aWAOTD');

    // HDKeys

    const master = await crypto.hdkeyXPrvFromMnemonic({
        dictionary: TONMnemonicDictionary.ENGLISH,
        wordCount: 12,
        phrase: 'abuse boss fly battle rubber wasp afraid hamster guide essence vibrant tattoo',
    });
    expect(master)
        .toEqual(
            'xprv9s21ZrQH143K25JhKqEwvJW7QAiVvkmi4WRenBZanA6kxHKtKAQQKwZG65kCyW5jWJ8NY9e3GkRoistUjjcpHNsGBUv94istDPXvqGNuWpC');
    expect(await crypto.hdkeyXPrvSecret(master))
        .toEqual('0c91e53128fa4d67589d63a6c44049c1068ec28a63069a55ca3de30c57f8b365');
    expect(await crypto.hdkeyXPrvPublic(master))
        .toEqual('02a8eb63085f73c33fa31b4d1134259406347284f8dab6fc68f4bf8c96f6c39b75');

    const child = await crypto.hdkeyXPrvDerive(master, 0, false, false);
    expect(child)
        .toEqual(
            'xprv9uZwtSeoKf1swgAkVVCEUmC2at6t7MCJoHnBbn1MWJZyxQ4cySkVXPyNh7zjf9VjsP4vEHDDD2a6R35cHubg4WpzXRzniYiy8aJh1gNnBKv');
    expect(await crypto.hdkeyXPrvSecret(child))
        .toEqual('518afc6489b61d4b738ee9ad9092815fa014ffa6e9a280fa17f84d95f31adb91');
    expect(await crypto.hdkeyXPrvPublic(child))
        .toEqual('027a598c7572dbb4fbb9663a0c805576babf7faa173a4288a48a52f6f427e12be1');

    const second = await crypto.hdkeyXPrvDerivePath(master, 'm/44\'/60\'/0\'/0\'', false);
    expect(second)
        .toEqual(
            'xprvA1KNMo63UcGjmDF1bX39Cw2BXGUwrwMjeD5qvQ3tA3qS3mZQkGtpf4DHq8FDLKAvAjXsYGLHDP2dVzLu9ycta8PXLuSYib2T3vzLf3brVgZ');
    expect(await crypto.hdkeyXPrvSecret(second))
        .toEqual('1c566ade41169763b155761406d3cef08b29b31cf8014f51be08c0cb4e67c5e1');
    expect(await crypto.hdkeyXPrvPublic(second))
        .toEqual('02a87d9764eedaacee45b0f777b5a242939b05fa06873bf511ca9a59cb46a5f526');

    // ChaCha20

    const key = '01'.repeat(32);
    const nonce = 'ff'.repeat(12);
    const encrypted = await crypto.chacha20({
        data: Buffer.from('Message').toString('base64'),
        key,
        nonce,
    });
    expect(encrypted.data).toEqual('w5QOGsJodQ==');
    const decrypted = await crypto.chacha20({
        data: encrypted.data,
        key,
        nonce,
    });
    expect(decrypted.data).toEqual('TWVzc2FnZQ==');
});

test('naclBox', async () => {
    const crypto = tests.client.crypto;
    const A = await crypto.ed25519Keypair();
    const B = await crypto.ed25519Keypair();

    const AP = (await crypto.naclBoxKeypairFromSecretKey(A.secret)).public;
    const BP = (await crypto.naclBoxKeypairFromSecretKey(B.secret)).public;

    const encrypted = await crypto.naclBox({
        secretKey: A.secret,
        theirPublicKey: BP,
        nonce: 'cd7f99924bf422544046e83595dd5803f17536f5c9a11746',
        message: { hex: '010203' },
        outputEncoding: 'Hex',
    });

    const decryptedA = await crypto.naclBoxOpen({
        secretKey: A.secret,
        theirPublicKey: BP,
        nonce: 'cd7f99924bf422544046e83595dd5803f17536f5c9a11746',
        message: { hex: encrypted },
        outputEncoding: 'Hex',
    });

    const decryptedB = await crypto.naclBoxOpen({
        secretKey: B.secret,
        theirPublicKey: AP,
        nonce: 'cd7f99924bf422544046e83595dd5803f17536f5c9a11746',
        message: { hex: encrypted },
        outputEncoding: 'Hex',
    });

    expect(decryptedA).toEqual('010203');
    expect(decryptedB).toEqual('010203');
});

