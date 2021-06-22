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

import {runner} from "../runner";
import {
    expect,
    test,
} from "../jest";
import {
    AppEncryptionBox,
    EncryptionBoxHandle,
    EncryptionBoxInfo,
} from "@tonclient/core";

const mnemonicWordCount = [12, 15, 18, 21, 24];
const mnemonicDictionary = [1, 2, 3, 4, 5, 6, 7, 8];

function text2base64(text: string): string {
    return Buffer.from(text, "utf8").toString("base64");
}

function base642text(base64: string): string {
    return Buffer.from(base64, "base64").toString("utf8");
}

test("crypto - encrypt large blocks", async () => {
    const client = runner.getClient();
    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();

    async function testBuffer() {
        const nonce = Buffer.from((await client.crypto.generate_random_bytes({length: 24})).bytes, "base64").toString("hex");
        const decrypted = (await client.crypto.generate_random_bytes({length: 100000000})).bytes;
        const encrypted = (await client.crypto.nacl_box({
            decrypted: decrypted,
            secret: ourKeys.secret,
            their_public: theirKeys.public,
            nonce,
        })).encrypted;
        const decrypted2 = (await client.crypto.nacl_box_open({
            encrypted,
            secret: theirKeys.secret,
            their_public: ourKeys.public,
            nonce,
        })).decrypted;
        expect(decrypted2).toEqual(decrypted);
    }

    await Promise.all([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(_ => testBuffer()));
});

test("crypto", async () => {
    const crypto = runner.getClient().crypto;

    // Math

    const result1 = await crypto.factorize({composite: "17ED48941A08F981"});
    expect(result1.factors[0]).toEqual("494C553B");
    expect(result1.factors[1]).toEqual("53911073");

    const result2 = await crypto.modular_power({
        base: "0123456789ABCDEF",
        exponent: "0123",
        modulus: "01234567",
    });
    expect(result2.modular_power).toEqual("63bfdf");

    // random

    const result3 = await crypto.generate_random_bytes({length: 32});
    expect(result3.bytes.length).toEqual(44);

    // ed25519

    const result5 = await crypto.generate_random_sign_keys();
    expect(result5.public.length).toEqual(64);
    expect(result5.secret.length).toEqual(64);
    expect(result5.public).not.toEqual(result5.secret);

    // sha

    const hex1 = await crypto.sha512({
        data: text2base64("Message to hash with sha 512"),
    });
    expect(hex1.hash)
        .toEqual(
            "2616a44e0da827f0244e93c2b0b914223737a6129bc938b8edf2780ac9482960baa9b7c7cdb11457c1cebd5ae77e295ed94577f32d4c963dc35482991442daa5");
    const hex2 = await crypto.sha256({
        data: text2base64("Message to hash with sha 256"),
    });
    expect(hex2.hash).toEqual("16fd057308dd358d5a9b3ba2de766b2dfd5e308478fc1f7ba5988db2493852f5");


    // scrypt

    let result6 = await crypto.scrypt({
        password: text2base64("Test Password"),
        salt: text2base64("Test Salt"),
        log_n: 10,
        r: 8,
        p: 16,
        dk_len: 64,
    });
    expect(result6.key)
        .toEqual(
            "52e7fcf91356eca55fc5d52f16f5d777e3521f54e3c570c9bbb7df58fc15add73994e5db42be368de7ebed93c9d4f21f9be7cc453358d734b04a057d0ed3626d");

    // nacl keys

    const result7 = await crypto.nacl_box_keypair();
    expect(result7.public.length).toEqual(64);
    expect(result7.secret.length).toEqual(64);
    expect(result7.public).not.toEqual(result7.secret);

    const result8 = await crypto.nacl_box_keypair_from_secret_key({secret: "e207b5966fb2c5be1b71ed94ea813202706ab84253bdf4dc55232f82a1caf0d4"});
    expect(result8.public)
        .toEqual("a53b003d3ffc1e159355cb37332d67fc235a7feb6381e36c803274074dc3933a");

    const result10 = await crypto.nacl_sign_keypair_from_secret_key({secret: "8fb4f2d256e57138fb310b0a6dac5bbc4bee09eb4821223a720e5b8e1f3dd674"});
    expect(result10.public)
        .toEqual("aa5533618573860a7e1bf19f34bd292871710ed5b2eafa0dcdbb33405f2231c6");

    // nacl box

    const encrypted1 = await crypto.nacl_box({
        decrypted: text2base64("Test Message"),
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        their_public: "c4e2d9fe6a6baf8d1812b799856ef2a306291be7a7024837ad33a8530db79c6b",
        secret: "d9b9dc5033fb416134e5d2107fdbacab5aadb297cb82dbdcd137d663bac59f7f",
    });
    expect(encrypted1.encrypted).toEqual("li4XED4kx/pjQ2qdP0eR2d/K30uN94voNADxwA==");

    const decrypted1 = await crypto.nacl_box_open({
        encrypted: "li4XED4kx/pjQ2qdP0eR2d/K30uN94voNADxwA==",
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        their_public: "c4e2d9fe6a6baf8d1812b799856ef2a306291be7a7024837ad33a8530db79c6b",
        secret: "d9b9dc5033fb416134e5d2107fdbacab5aadb297cb82dbdcd137d663bac59f7f",
    });
    expect(base642text(decrypted1.decrypted)).toEqual("Test Message");

    // nacl secret box

    const encrypted2 = await crypto.nacl_secret_box({
        decrypted: text2base64("Test Message"),
        nonce: "2a33564717595ebe53d91a785b9e068aba625c8453a76e45",
        key: "8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8",
    });
    expect(encrypted2.encrypted).toEqual("JL7ejKWe2KXmrsns41yfXoQF0t/C1Q8RGyzQ2A==");

    const decrypted2 = await crypto.nacl_secret_box_open({
        encrypted: "JL7ejKWe2KXmrsns41yfXoQF0t/C1Q8RGyzQ2A==",
        nonce: "2a33564717595ebe53d91a785b9e068aba625c8453a76e45",
        key: "8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8",
    });
    expect(base642text(decrypted2.decrypted)).toEqual("Test Message");

    const e = await crypto.nacl_secret_box({
        decrypted: text2base64("Text with ' and \" and : {}"),
        nonce: "2a33564717595ebe53d91a785b9e068aba625c8453a76e45",
        key: "8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8",
    });
    const d = await crypto.nacl_secret_box_open({
        encrypted: e.encrypted,
        nonce: "2a33564717595ebe53d91a785b9e068aba625c8453a76e45",
        key: "8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8",
    });
    expect(d.decrypted).toEqual("VGV4dCB3aXRoICcgYW5kICIgYW5kIDoge30=");
    expect(base642text(d.decrypted)).toEqual("Text with ' and \" and : {}");

    // nacl sign
    const signed = await crypto.nacl_sign({
        unsigned: text2base64("Test Message"),
        secret: "56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
    });
    expect(signed.signed)
        .toEqual(
            "+wz+QO6l1slgZS5s65BNqKcu4vz24FCJz4NSAxef9lu0jFfs8x3PzSZRC+pn5k8+aJi3xYMA3BQzglQmjK3hA1Rlc3QgTWVzc2FnZQ==");

    const original = await crypto.nacl_sign_open({
        signed: "+wz+QO6l1slgZS5s65BNqKcu4vz24FCJz4NSAxef9lu0jFfs8x3PzSZRC+pn5k8+aJi3xYMA3BQzglQmjK3hA1Rlc3QgTWVzc2FnZQ==",
        public: "1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
    });
    expect(base642text(original.unsigned)).toEqual("Test Message");

    const sign = await crypto.nacl_sign_detached({
        unsigned: text2base64("Test Message"),
        secret: "56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
    });
    expect(sign.signature)
        .toEqual(
            "fb0cfe40eea5d6c960652e6ceb904da8a72ee2fcf6e05089cf835203179ff65bb48c57ecf31dcfcd26510bea67e64f3e6898b7c58300dc14338254268cade103");

    // Mnemonic

    const mnemonicWords = await crypto.mnemonic_words({});
    expect(mnemonicWords.words.split(" ").length).toEqual(2048);

    for (const dictionary of mnemonicDictionary) {
        for (const word_count of mnemonicWordCount) {
            expect((await crypto.mnemonic_from_random({
                dictionary,
                word_count,
            })).phrase.split(" ").length).toEqual(word_count);
        }
    }
    expect((await crypto.mnemonic_from_entropy({
        entropy: "00112233445566778899AABBCCDDEEFF",
        dictionary: 1,
        word_count: 12,
    })).phrase)
        .toEqual("abandon math mimic master filter design carbon crystal rookie group knife young");

    for (const dictionary of mnemonicDictionary) {
        for (const word_count of mnemonicWordCount) {
            expect((await crypto.mnemonic_verify({
                dictionary,
                word_count,
                phrase: (await crypto.mnemonic_from_random({
                    dictionary,
                    word_count,
                })).phrase,
            })).valid).toBeTruthy();
        }
    }

    expect((await crypto.mnemonic_verify({phrase: "one two"})).valid).toBeFalsy();

    const keys = await crypto.mnemonic_derive_sign_keys({
        phrase: "unit follow zone decline glare flower crisp vocal adapt magic much mesh cherry teach mechanic rain float vicious solution assume hedgehog rail sort chuckle",
        dictionary: 0,
        word_count: 24,
    });
    const ton_public = await crypto.convert_public_key_to_ton_safe_format({public_key: keys.public});
    expect(ton_public.ton_public_key).toEqual("PuYTvCuf__YXhp-4jv3TXTHL0iK65ImwxG0RGrYc1sP3H4KS");
    let phrase = await crypto.mnemonic_from_random({});
    expect(phrase.phrase.split(" ").length).toEqual(12);
    phrase = await crypto.mnemonic_from_random({
        dictionary: 0,
        word_count: 12,
    });
    expect(phrase.phrase.split(" ").length).toEqual(12);
    phrase = await crypto.mnemonic_from_random({
        dictionary: 1,
        word_count: 12,
    });
    expect(phrase.phrase.split(" ").length).toEqual(12);
    const entropy = "2199ebe996f14d9e4e2595113ad1e627";
    const phrase2 = await crypto.mnemonic_from_entropy({entropy});
    const public2 = (await crypto.mnemonic_derive_sign_keys({phrase: phrase2.phrase})).public;
    const ton_public2 = await crypto.convert_public_key_to_ton_safe_format({public_key: public2});
    expect(ton_public2.ton_public_key).toEqual("PuZdw_KyXIzo8IksTrERN3_WoAoYTyK7OvM-yaLk711sUIB3");

    // HDKeys

    const master = await crypto.hdkey_xprv_from_mnemonic({
        dictionary: 1,
        word_count: 12,
        phrase: "abuse boss fly battle rubber wasp afraid hamster guide essence vibrant tattoo",
    });
    expect(master.xprv)
        .toEqual(
            "xprv9s21ZrQH143K25JhKqEwvJW7QAiVvkmi4WRenBZanA6kxHKtKAQQKwZG65kCyW5jWJ8NY9e3GkRoistUjjcpHNsGBUv94istDPXvqGNuWpC");
    expect((await crypto.hdkey_secret_from_xprv({xprv: master.xprv})).secret)
        .toEqual("0c91e53128fa4d67589d63a6c44049c1068ec28a63069a55ca3de30c57f8b365");
    expect((await crypto.hdkey_public_from_xprv({xprv: master.xprv})).public)
        .toEqual("7b70008d0c40992283d488b1046739cf827afeabf647a5f07c4ad1e7e45a6f89");

    const child = await crypto.hdkey_derive_from_xprv({
        xprv: master.xprv,
        child_index: 0,
        hardened: false,
    });
    expect(child.xprv)
        .toEqual(
            "xprv9uZwtSeoKf1swgAkVVCEUmC2at6t7MCJoHnBbn1MWJZyxQ4cySkVXPyNh7zjf9VjsP4vEHDDD2a6R35cHubg4WpzXRzniYiy8aJh1gNnBKv");
    expect((await crypto.hdkey_secret_from_xprv({xprv: child.xprv})).secret)
        .toEqual("518afc6489b61d4b738ee9ad9092815fa014ffa6e9a280fa17f84d95f31adb91");
    expect((await crypto.hdkey_public_from_xprv({xprv: child.xprv})).public)
        .toEqual("b45e1297a5e767341a6eaaac9e20f8ccd7556a0106298316f1272e461b6fbe98");

    const second = await crypto.hdkey_derive_from_xprv_path({
        xprv: master.xprv,
        path: "m/44'/60'/0'/0'",
    });
    expect(second.xprv)
        .toEqual(
            "xprvA1KNMo63UcGjmDF1bX39Cw2BXGUwrwMjeD5qvQ3tA3qS3mZQkGtpf4DHq8FDLKAvAjXsYGLHDP2dVzLu9ycta8PXLuSYib2T3vzLf3brVgZ");
    expect((await crypto.hdkey_secret_from_xprv({xprv: second.xprv})).secret)
        .toEqual("1c566ade41169763b155761406d3cef08b29b31cf8014f51be08c0cb4e67c5e1");
    expect((await crypto.hdkey_public_from_xprv({xprv: second.xprv})).public)
        .toEqual("302a832bad9e5c9906422a82c28b39ae465dcd60178480f7309e183ee34b5e83");

    // NaCl ex

    const A = await crypto.generate_random_sign_keys();
    const B = await crypto.generate_random_sign_keys();

    const AP = (await crypto.nacl_box_keypair_from_secret_key({secret: A.secret})).public;
    const BP = (await crypto.nacl_box_keypair_from_secret_key({secret: B.secret})).public;

    const encrypted = await crypto.nacl_box({
        secret: A.secret,
        their_public: BP,
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        decrypted: "AQID",
    });

    const decryptedA = await crypto.nacl_box_open({
        secret: A.secret,
        their_public: BP,
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        encrypted: encrypted.encrypted,
    });

    const decryptedB = await crypto.nacl_box_open({
        secret: B.secret,
        their_public: AP,
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        encrypted: encrypted.encrypted,
    });

    expect(decryptedA.decrypted).toEqual("AQID");
    expect(decryptedB.decrypted).toEqual("AQID");
});

test("external encryption box", async () => {
    const client = runner.getClient();

    const encryption_box: AppEncryptionBox = {
        get_info: async () => {
            return {
                info: {
                    algorithm: "duplicator",
                }
            };
        },
        encrypt: async (params) => {
            return {
                data: params.data + params.data,
            };
        },
        decrypt: async (params) => {
            return {
                data: params.data.substr(0, params.data.length / 2),
            }
        }

    };

    const handle: EncryptionBoxHandle = (await client.crypto.register_encryption_box(encryption_box)).handle;

    const info: EncryptionBoxInfo = (await client.crypto.encryption_box_get_info({
        encryption_box: handle,
    })).info;

    expect(info.algorithm).toEqual("duplicator");

    const encrypted: string = (await client.crypto.encryption_box_encrypt({
        encryption_box: handle,
        data: "12345",
    })).data;

    expect(encrypted).toEqual("1234512345");

    const decrypted: string = (await client.crypto.encryption_box_decrypt({
        encryption_box: handle,
        data: encrypted,
    })).data;

    expect(decrypted).toEqual("12345");
});