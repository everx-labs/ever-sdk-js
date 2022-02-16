/*
 * Copyright 2018-2021 TON Labs LTD.
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
    AppEncryptionBox,
    EncryptionBoxHandle,
    EncryptionBoxInfo,
} from "@eversdk/core";
import { expect, test } from "../jest";

import { runner } from "../runner";

function text2base64(text: string): string {
    return Buffer.from(text, "utf8").toString("base64");
}

// The "//-----" partitions are derived from TON-SDK/ton_client/src/crypto file structure

test("crypto - encrypt large blocks", async () => {
    const client = runner.getClient();
    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();

    async function testBuffer() {
        const nonce = Buffer.from((await client.crypto.generate_random_bytes({length: 24})).bytes, "base64").toString("hex");
        const decrypted = (await client.crypto.generate_random_bytes({
            // FIXME: length: 100000000, // 100 MB to many timeout
            length: 1000000, // 1 MB
            // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
            response_binary_type: 'blob'
        })).bytes;
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

        if (typeof decrypted2 === 'string') {
            expect(decrypted2).toEqual(decrypted);
        } else {
            // Blob
            const hash = (await client.crypto.sha512({
                data: decrypted,
                // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
                response_binary_type: 'base64'
            })).hash;
            const hash2 = (await client.crypto.sha512({
                data: decrypted2,
                // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
                response_binary_type: 'base64'
            })).hash;
            expect(hash).toEqual(hash2);
        }
    }

    await Promise.all([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(_ => testBuffer()));
});

test("crypto: factorize", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.factorize({composite: "17ED48941A08F981"});

    expect(result.factors.length).toEqual(2);
    expect(result.factors[0]).toEqual("494C553B");
    expect(result.factors[1]).toEqual("53911073");
});

test("crypto: modular_power", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.modular_power({
        base: "0123456789ABCDEF",
        exponent: "0123",
        modulus: "01234567",
    });

    expect(result.modular_power).toEqual("63bfdf");
});

test("crypto: ton_crc16", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.ton_crc16({
        data: "RWFzdGVyIGVnZw==",
    });

    expect(result.crc).toEqual(4743);
});

test("crypto: generate_random_bytes", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.generate_random_bytes({length: 32});
    const result2 = await crypto.generate_random_bytes({length: 32});

    expect(result.bytes.length).toEqual(44);
    expect(result2.bytes.length).toEqual(44);
    expect(result).not.toEqual(result2);
});


// ------------------------- keys -------------------------

test("crypto: convert_public_key_to_ton_safe_format", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.convert_public_key_to_ton_safe_format({
        public_key: "5329c056c33e3a2a787bf2ae4c2afda87e4231898a5438e0cfd7a06dc4fac067",
    });

    expect(result.ton_public_key).toEqual("PuZTKcBWwz46Knh78q5MKv2ofkIxiYpUOODP16BtxPrAZ_ed");
});

test("crypto: generate_random_sign_keys", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.generate_random_sign_keys();
    const result2 = await crypto.generate_random_sign_keys();

    expect(result.public.length).toEqual(64);
    expect(result.secret.length).toEqual(64);
    expect(result.public).not.toEqual(result.secret);

    expect(result2.public.length).toEqual(64);
    expect(result2.secret.length).toEqual(64);
    expect(result2.public).not.toEqual(result2.secret);

    expect(result.public).not.toEqual(result2.public);
    expect(result.secret).not.toEqual(result2.secret);
});

test("crypto: sign", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.sign({
        keys: {
            public: "bb3e649a4675cdb579803820a97dcba9594f1a1aefa7cb2b4da844ca9d32d348",
            secret: "52ae9e942cda06326de0905dea4d2c9c2fc7674f3fbd96495a5e92d099fc2507",
        },
        unsigned: "RWFzdGVyIGVnZw==",
    });

    expect(result).toEqual({
        signed: "aTRQ4/TbSVcFHB096JpAxZOLwHjs3Sdf07gVVxPsV6csr/ChRoY48Ue9Z5eHzyRxwZZbHl6SYXwgTh0HI1HqB0Vhc3RlciBlZ2c=",
        signature: "693450e3f4db4957051c1d3de89a40c5938bc078ecdd275fd3b8155713ec57a72caff0a1468638f147bd679787cf2471c1965b1e5e92617c204e1d072351ea07",
    });
});

test("crypto: verify_signature", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.verify_signature({
        public: "bb3e649a4675cdb579803820a97dcba9594f1a1aefa7cb2b4da844ca9d32d348",
        signed: "aTRQ4/TbSVcFHB096JpAxZOLwHjs3Sdf07gVVxPsV6csr/ChRoY48Ue9Z5eHzyRxwZZbHl6SYXwgTh0HI1HqB0Vhc3RlciBlZ2c=",
    });

    expect(result.unsigned).toEqual("RWFzdGVyIGVnZw==");
});


// ------------------------- hash -------------------------

test("crypto: sha256", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.sha256({
        data: text2base64("Message to hash with sha 256"),
    });
    expect(result.hash).toEqual("16fd057308dd358d5a9b3ba2de766b2dfd5e308478fc1f7ba5988db2493852f5");

});

test("crypto: sha512", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.sha512({
        data: text2base64("Message to hash with sha 512"),
    });
    expect(result.hash)
        .toEqual(
            "2616a44e0da827f0244e93c2b0b914223737a6129bc938b8edf2780ac9482960baa9b7c7cdb11457c1cebd5ae77e295ed94577f32d4c963dc35482991442daa5");
});


// ------------------------- scrypt -------------------------

test("crypto: scrypt", async () => {
    const crypto = runner.getClient().crypto;

    let result = await crypto.scrypt({
        password: text2base64("Test Password"),
        salt: text2base64("Test Salt"),
        log_n: 10,
        r: 8,
        p: 16,
        dk_len: 64,
    });

    expect(result.key)
        .toEqual(
            "52e7fcf91356eca55fc5d52f16f5d777e3521f54e3c570c9bbb7df58fc15add73994e5db42be368de7ebed93c9d4f21f9be7cc453358d734b04a057d0ed3626d");

});


// ------------------------- nacl -------------------------

test("crypto: nacl_sign_keypair_from_secret_key", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_sign_keypair_from_secret_key({
        secret: "56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f",
    });

    expect(result).toEqual({
        public: "1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
        secret: "56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
    });
});

test("crypto: nacl_sign", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_sign({
        unsigned: text2base64("Test Message"),
        secret: "56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
    });

    expect(result.signed).toEqual("+wz+QO6l1slgZS5s65BNqKcu4vz24FCJz4NSAxef9lu0jFfs8x3PzSZRC+pn5k8+aJi3xYMA3BQzglQmjK3hA1Rlc3QgTWVzc2FnZQ==");
});

test("crypto: nacl_sign_open", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_sign_open({
        signed: "+wz+QO6l1slgZS5s65BNqKcu4vz24FCJz4NSAxef9lu0jFfs8x3PzSZRC+pn5k8+aJi3xYMA3BQzglQmjK3hA1Rlc3QgTWVzc2FnZQ==",
        public: "1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
    });

    expect(result.unsigned).toEqual(text2base64("Test Message"));
});

test("crypto: nacl_sign_detached", async () => {
    const crypto = runner.getClient().crypto;

    const sign = await crypto.nacl_sign_detached({
        unsigned: text2base64("Test Message"),
        secret: "56b6a77093d6fdf14e593f36275d872d75de5b341942376b2a08759f3cbae78f1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
    });

    expect(sign.signature)
        .toEqual(
            "fb0cfe40eea5d6c960652e6ceb904da8a72ee2fcf6e05089cf835203179ff65bb48c57ecf31dcfcd26510bea67e64f3e6898b7c58300dc14338254268cade103");
});

test("crypto: nacl_sign_detached_verify success", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_sign_detached_verify({
        public: "1869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
        signature: "fb0cfe40eea5d6c960652e6ceb904da8a72ee2fcf6e05089cf835203179ff65bb48c57ecf31dcfcd26510bea67e64f3e6898b7c58300dc14338254268cade103",
        unsigned: text2base64("Test Message"),
    });

    expect(result.succeeded).toBeTruthy();
});

test("crypto: nacl_sign_detached_verify failure", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_sign_detached_verify({
        public: "2869b7ef29d58026217e9cf163cbfbd0de889bdf1bf4daebf5433a312f5b8d6e",
        signature: "fb0cfe40eea5d6c960652e6ceb904da8a72ee2fcf6e05089cf835203179ff65bb48c57ecf31dcfcd26510bea67e64f3e6898b7c58300dc14338254268cade103",
        unsigned: text2base64("Test Message")
    });

    expect(result.succeeded).toBeFalsy();
});

test("crypto: nacl_box_keypair", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_box_keypair();
    const result2 = await crypto.nacl_box_keypair();

    expect(result.public.length).toEqual(64);
    expect(result.secret.length).toEqual(64);
    expect(result.public)
        .toEqual(
            (await crypto.nacl_box_keypair_from_secret_key({ secret: result.secret })).public);

    expect(result2.public.length).toEqual(64);
    expect(result2.secret.length).toEqual(64);
    expect(result2.public)
        .toEqual(
            (await crypto.nacl_box_keypair_from_secret_key({ secret: result2.secret })).public);

    expect(result.public).not.toEqual(result2.public);
    expect(result.secret).not.toEqual(result2.secret);
});

test("crypto: nacl_box_keypair_from_secret_key", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_box_keypair_from_secret_key({ secret: "e207b5966fb2c5be1b71ed94ea813202706ab84253bdf4dc55232f82a1caf0d4" });

    expect(result).toEqual({
        public: "a53b003d3ffc1e159355cb37332d67fc235a7feb6381e36c803274074dc3933a",
        secret: "e207b5966fb2c5be1b71ed94ea813202706ab84253bdf4dc55232f82a1caf0d4",
    });
});

test("crypto: nacl_box", async () => {
    const crypto = runner.getClient().crypto;

    const encrypted1 = await crypto.nacl_box({
        decrypted: text2base64("Test Message"),
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        their_public: "c4e2d9fe6a6baf8d1812b799856ef2a306291be7a7024837ad33a8530db79c6b",
        secret: "d9b9dc5033fb416134e5d2107fdbacab5aadb297cb82dbdcd137d663bac59f7f",
    });

    expect(encrypted1.encrypted).toEqual("li4XED4kx/pjQ2qdP0eR2d/K30uN94voNADxwA==");
});

test("crypto: nacl_box_open", async () => {
    const crypto = runner.getClient().crypto;

    const keysA = await crypto.nacl_box_keypair();
    const keysB = await crypto.nacl_box_keypair();

    const encrypted = await crypto.nacl_box({
        secret: keysA.secret,
        their_public: keysB.public,
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        decrypted: "AQID",
    });

    const decryptedA = await crypto.nacl_box_open({
        secret: keysA.secret,
        their_public: keysB.public,
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        encrypted: encrypted.encrypted,
    });

    const decryptedB = await crypto.nacl_box_open({
        secret: keysB.secret,
        their_public: keysA.public,
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        encrypted: encrypted.encrypted,
    });

    expect(decryptedA.decrypted).toEqual("AQID");
    expect(decryptedB.decrypted).toEqual("AQID");
});

test("crypto: nacl_secret_box", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_secret_box({
        decrypted: text2base64("Test Message"),
        nonce: "2a33564717595ebe53d91a785b9e068aba625c8453a76e45",
        key: "8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8",
    });

    expect(result.encrypted).toEqual("JL7ejKWe2KXmrsns41yfXoQF0t/C1Q8RGyzQ2A==");
});

test("crypto: nacl_secret_box_open", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.nacl_box_open({
        encrypted: "li4XED4kx/pjQ2qdP0eR2d/K30uN94voNADxwA==",
        nonce: "cd7f99924bf422544046e83595dd5803f17536f5c9a11746",
        their_public: "c4e2d9fe6a6baf8d1812b799856ef2a306291be7a7024837ad33a8530db79c6b",
        secret: "d9b9dc5033fb416134e5d2107fdbacab5aadb297cb82dbdcd137d663bac59f7f",
    });

    expect(result.decrypted).toEqual(text2base64("Test Message"));
});

test("crypto: nacl_secret_box and nacl_secret_box_open with ' and \" and : {} in the text", async () => {
    const crypto = runner.getClient().crypto;

    const box = await crypto.nacl_secret_box({
        decrypted: text2base64("Text with ' and \" and : {}"),
        nonce: "2a33564717595ebe53d91a785b9e068aba625c8453a76e45",
        key: "8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8",
    });
    const result = await crypto.nacl_secret_box_open({
        encrypted: box.encrypted,
        nonce: "2a33564717595ebe53d91a785b9e068aba625c8453a76e45",
        key: "8f68445b4e78c000fe4d6b7fc826879c1e63e3118379219a754ae66327764bd8",
    });

    expect(result.decrypted).toEqual("VGV4dCB3aXRoICcgYW5kICIgYW5kIDoge30=");
    expect(result.decrypted).toEqual(text2base64("Text with ' and \" and : {}"));
});


// ------------------------- mnemonic -------------------------

test("crypto: mnemonic_words", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.mnemonic_words({});

    expect(result.words.split(" ").length).toEqual(2048);
    expect(result.words)
        .toEqual(
            "abandon ability able about above absent absorb abstract absurd abuse access accident account accuse achieve acid acoustic acquire across " +
            "act action actor actress actual adapt add addict address adjust admit adult advance advice aerobic affair afford afraid again age agent " +
            "agree ahead aim air airport aisle alarm album alcohol alert alien all alley allow almost alone alpha already also alter always amateur " +
            "amazing among amount amused analyst anchor ancient anger angle angry animal ankle announce annual another answer antenna antique anxiety " +
            "any apart apology appear apple approve april arch arctic area arena argue arm armed armor army around arrange arrest arrive arrow art " +
            "artefact artist artwork ask aspect assault asset assist assume asthma athlete atom attack attend attitude attract auction audit august " +
            "aunt author auto autumn average avocado avoid awake aware away awesome awful awkward axis baby bachelor bacon badge bag balance balcony " +
            "ball bamboo banana banner bar barely bargain barrel base basic basket battle beach bean beauty because become beef before begin behave " +
            "behind believe below belt bench benefit best betray better between beyond bicycle bid bike bind biology bird birth bitter black blade " +
            "blame blanket blast bleak bless blind blood blossom blouse blue blur blush board boat body boil bomb bone bonus book boost border boring " +
            "borrow boss bottom bounce box boy bracket brain brand brass brave bread breeze brick bridge brief bright bring brisk broccoli broken " +
            "bronze broom brother brown brush bubble buddy budget buffalo build bulb bulk bullet bundle bunker burden burger burst bus business busy " +
            "butter buyer buzz cabbage cabin cable cactus cage cake call calm camera camp can canal cancel candy cannon canoe canvas canyon capable " +
            "capital captain car carbon card cargo carpet carry cart case cash casino castle casual cat catalog catch category cattle caught cause " +
            "caution cave ceiling celery cement census century cereal certain chair chalk champion change chaos chapter charge chase chat cheap check " +
            "cheese chef cherry chest chicken chief child chimney choice choose chronic chuckle chunk churn cigar cinnamon circle citizen city civil " +
            "claim clap clarify claw clay clean clerk clever click client cliff climb clinic clip clock clog close cloth cloud clown club clump " +
            "cluster clutch coach coast coconut code coffee coil coin collect color column combine come comfort comic common company concert conduct " +
            "confirm congress connect consider control convince cook cool copper copy coral core corn correct cost cotton couch country couple course " +
            "cousin cover coyote crack cradle craft cram crane crash crater crawl crazy cream credit creek crew cricket crime crisp critic crop cross " +
            "crouch crowd crucial cruel cruise crumble crunch crush cry crystal cube culture cup cupboard curious current curtain curve cushion " +
            "custom cute cycle dad damage damp dance danger daring dash daughter dawn day deal debate debris decade december decide decline decorate " +
            "decrease deer defense define defy degree delay deliver demand demise denial dentist deny depart depend deposit depth deputy derive " +
            "describe desert design desk despair destroy detail detect develop device devote diagram dial diamond diary dice diesel diet differ " +
            "digital dignity dilemma dinner dinosaur direct dirt disagree discover disease dish dismiss disorder display distance divert divide " +
            "divorce dizzy doctor document dog doll dolphin domain donate donkey donor door dose double dove draft dragon drama drastic draw dream " +
            "dress drift drill drink drip drive drop drum dry duck dumb dune during dust dutch duty dwarf dynamic eager eagle early earn earth easily " +
            "east easy echo ecology economy edge edit educate effort egg eight either elbow elder electric elegant element elephant elevator elite " +
            "else embark embody embrace emerge emotion employ empower empty enable enact end endless endorse enemy energy enforce engage engine " +
            "enhance enjoy enlist enough enrich enroll ensure enter entire entry envelope episode equal equip era erase erode erosion error erupt " +
            "escape essay essence estate eternal ethics evidence evil evoke evolve exact example excess exchange excite exclude excuse execute " +
            "exercise exhaust exhibit exile exist exit exotic expand expect expire explain expose express extend extra eye eyebrow fabric face " +
            "faculty fade faint faith fall false fame family famous fan fancy fantasy farm fashion fat fatal father fatigue fault favorite feature " +
            "february federal fee feed feel female fence festival fetch fever few fiber fiction field figure file film filter final find fine finger " +
            "finish fire firm first fiscal fish fit fitness fix flag flame flash flat flavor flee flight flip float flock floor flower fluid flush " +
            "fly foam focus fog foil fold follow food foot force forest forget fork fortune forum forward fossil foster found fox fragile frame " +
            "frequent fresh friend fringe frog front frost frown frozen fruit fuel fun funny furnace fury future gadget gain galaxy gallery game gap " +
            "garage garbage garden garlic garment gas gasp gate gather gauge gaze general genius genre gentle genuine gesture ghost giant gift giggle " +
            "ginger giraffe girl give glad glance glare glass glide glimpse globe gloom glory glove glow glue goat goddess gold good goose gorilla " +
            "gospel gossip govern gown grab grace grain grant grape grass gravity great green grid grief grit grocery group grow grunt guard guess " +
            "guide guilt guitar gun gym habit hair half hammer hamster hand happy harbor hard harsh harvest hat have hawk hazard head health heart " +
            "heavy hedgehog height hello helmet help hen hero hidden high hill hint hip hire history hobby hockey hold hole holiday hollow home honey " +
            "hood hope horn horror horse hospital host hotel hour hover hub huge human humble humor hundred hungry hunt hurdle hurry hurt husband " +
            "hybrid ice icon idea identify idle ignore ill illegal illness image imitate immense immune impact impose improve impulse inch include " +
            "income increase index indicate indoor industry infant inflict inform inhale inherit initial inject injury inmate inner innocent input " +
            "inquiry insane insect inside inspire install intact interest into invest invite involve iron island isolate issue item ivory jacket " +
            "jaguar jar jazz jealous jeans jelly jewel job join joke journey joy judge juice jump jungle junior junk just kangaroo keen keep ketchup " +
            "key kick kid kidney kind kingdom kiss kit kitchen kite kitten kiwi knee knife knock know lab label labor ladder lady lake lamp language " +
            "laptop large later latin laugh laundry lava law lawn lawsuit layer lazy leader leaf learn leave lecture left leg legal legend leisure " +
            "lemon lend length lens leopard lesson letter level liar liberty library license life lift light like limb limit link lion liquid list " +
            "little live lizard load loan lobster local lock logic lonely long loop lottery loud lounge love loyal lucky luggage lumber lunar lunch " +
            "luxury lyrics machine mad magic magnet maid mail main major make mammal man manage mandate mango mansion manual maple marble march " +
            "margin marine market marriage mask mass master match material math matrix matter maximum maze meadow mean measure meat mechanic medal " +
            "media melody melt member memory mention menu mercy merge merit merry mesh message metal method middle midnight milk million mimic mind " +
            "minimum minor minute miracle mirror misery miss mistake mix mixed mixture mobile model modify mom moment monitor monkey monster month " +
            "moon moral more morning mosquito mother motion motor mountain mouse move movie much muffin mule multiply muscle museum mushroom music " +
            "must mutual myself mystery myth naive name napkin narrow nasty nation nature near neck need negative neglect neither nephew nerve nest " +
            "net network neutral never news next nice night noble noise nominee noodle normal north nose notable note nothing notice novel now " +
            "nuclear number nurse nut oak obey object oblige obscure observe obtain obvious occur ocean october odor off offer office often oil okay " +
            "old olive olympic omit once one onion online only open opera opinion oppose option orange orbit orchard order ordinary organ orient " +
            "original orphan ostrich other outdoor outer output outside oval oven over own owner oxygen oyster ozone pact paddle page pair palace " +
            "palm panda panel panic panther paper parade parent park parrot party pass patch path patient patrol pattern pause pave payment peace " +
            "peanut pear peasant pelican pen penalty pencil people pepper perfect permit person pet phone photo phrase physical piano picnic picture " +
            "piece pig pigeon pill pilot pink pioneer pipe pistol pitch pizza place planet plastic plate play please pledge pluck plug plunge poem " +
            "poet point polar pole police pond pony pool popular portion position possible post potato pottery poverty powder power practice praise " +
            "predict prefer prepare present pretty prevent price pride primary print priority prison private prize problem process produce profit " +
            "program project promote proof property prosper protect proud provide public pudding pull pulp pulse pumpkin punch pupil puppy purchase " +
            "purity purpose purse push put puzzle pyramid quality quantum quarter question quick quit quiz quote rabbit raccoon race rack radar radio " +
            "rail rain raise rally ramp ranch random range rapid rare rate rather raven raw razor ready real reason rebel rebuild recall receive " +
            "recipe record recycle reduce reflect reform refuse region regret regular reject relax release relief rely remain remember remind remove " +
            "render renew rent reopen repair repeat replace report require rescue resemble resist resource response result retire retreat return " +
            "reunion reveal review reward rhythm rib ribbon rice rich ride ridge rifle right rigid ring riot ripple risk ritual rival river road " +
            "roast robot robust rocket romance roof rookie room rose rotate rough round route royal rubber rude rug rule run runway rural sad saddle " +
            "sadness safe sail salad salmon salon salt salute same sample sand satisfy satoshi sauce sausage save say scale scan scare scatter scene " +
            "scheme school science scissors scorpion scout scrap screen script scrub sea search season seat second secret section security seed seek " +
            "segment select sell seminar senior sense sentence series service session settle setup seven shadow shaft shallow share shed shell " +
            "sheriff shield shift shine ship shiver shock shoe shoot shop short shoulder shove shrimp shrug shuffle shy sibling sick side siege sight " +
            "sign silent silk silly silver similar simple since sing siren sister situate six size skate sketch ski skill skin skirt skull slab slam " +
            "sleep slender slice slide slight slim slogan slot slow slush small smart smile smoke smooth snack snake snap sniff snow soap soccer " +
            "social sock soda soft solar soldier solid solution solve someone song soon sorry sort soul sound soup source south space spare spatial " +
            "spawn speak special speed spell spend sphere spice spider spike spin spirit split spoil sponsor spoon sport spot spray spread spring spy " +
            "square squeeze squirrel stable stadium staff stage stairs stamp stand start state stay steak steel stem step stereo stick still sting " +
            "stock stomach stone stool story stove strategy street strike strong struggle student stuff stumble style subject submit subway success " +
            "such sudden suffer sugar suggest suit summer sun sunny sunset super supply supreme sure surface surge surprise surround survey suspect " +
            "sustain swallow swamp swap swarm swear sweet swift swim swing switch sword symbol symptom syrup system table tackle tag tail talent talk " +
            "tank tape target task taste tattoo taxi teach team tell ten tenant tennis tent term test text thank that theme then theory there they " +
            "thing this thought three thrive throw thumb thunder ticket tide tiger tilt timber time tiny tip tired tissue title toast tobacco today " +
            "toddler toe together toilet token tomato tomorrow tone tongue tonight tool tooth top topic topple torch tornado tortoise toss total " +
            "tourist toward tower town toy track trade traffic tragic train transfer trap trash travel tray treat tree trend trial tribe trick " +
            "trigger trim trip trophy trouble truck true truly trumpet trust truth try tube tuition tumble tuna tunnel turkey turn turtle twelve " +
            "twenty twice twin twist two type typical ugly umbrella unable unaware uncle uncover under undo unfair unfold unhappy uniform unique unit " +
            "universe unknown unlock until unusual unveil update upgrade uphold upon upper upset urban urge usage use used useful useless usual " +
            "utility vacant vacuum vague valid valley valve van vanish vapor various vast vault vehicle velvet vendor venture venue verb verify " +
            "version very vessel veteran viable vibrant vicious victory video view village vintage violin virtual virus visa visit visual vital vivid " +
            "vocal voice void volcano volume vote voyage wage wagon wait walk wall walnut want warfare warm warrior wash wasp waste water wave way " +
            "wealth weapon wear weasel weather web wedding weekend weird welcome west wet whale what wheat wheel when where whip whisper wide width " +
            "wife wild will win window wine wing wink winner winter wire wisdom wise wish witness wolf woman wonder wood wool word work world worry " +
            "worth wrap wreck wrestle wrist write wrong yard year yellow you young youth zebra zero zone zoo");
});

const mnemonicWordCount = [12, 15, 18, 21, 24];
const mnemonicDictionary = [0, 1, 2, 3, 4, 5, 6, 7, 8];

test("crypto: mnemonic_from_random", async () => {
    const crypto = runner.getClient().crypto;

    let phrase = await crypto.mnemonic_from_random({});
    expect(phrase.phrase.split(" ").length).toEqual(12);

    for (const dictionary of mnemonicDictionary) {
        for (const word_count of mnemonicWordCount) {
            expect((await crypto.mnemonic_from_random({
                dictionary,
                word_count,
            })).phrase.split(" ").length).toEqual(word_count);
        }
    }
});

test("crypto: mnemonic_from_entropy", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.mnemonic_from_entropy({
        entropy: "00112233445566778899AABBCCDDEEFF",
        dictionary: 1,
        word_count: 12,
    });

    expect(result.phrase)
        .toEqual("abandon math mimic master filter design carbon crystal rookie group knife young");
});

test("crypto: mnemonic_verify", async () => {
    const crypto = runner.getClient().crypto;

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

    expect((await crypto.mnemonic_verify({ phrase: "one two" })).valid).toBeFalsy();
});

test("crypto: mnemonic_derive_sign_keys", async () => {
    const crypto = runner.getClient().crypto;

    const keys = await crypto.mnemonic_derive_sign_keys({
        phrase: "unit follow zone decline glare flower crisp vocal adapt magic much mesh cherry teach mechanic rain float vicious solution assume hedgehog rail sort chuckle",
        dictionary: 0,
        word_count: 24,
    });

    expect(keys).toEqual({
        public: "13bc2b9ffff617869fb88efdd35d31cbd222bae489b0c46d111ab61cd6c3f71f",
        secret: "a32820391c3fc73ad9d145f9b269f7d93c93dd91ec70f1930b616e63db0ae7ff"
    });
});

test("crypto: entropy->mnemonic->ton_public_key test", async () => {
    const crypto = runner.getClient().crypto;

    const entropy = "2199ebe996f14d9e4e2595113ad1e627";
    const phrase = await crypto.mnemonic_from_entropy({ entropy });
    const public2 = (await crypto.mnemonic_derive_sign_keys({ phrase: phrase.phrase })).public;
    const ton_public = await crypto.convert_public_key_to_ton_safe_format({ public_key: public2 });

    expect(ton_public.ton_public_key).toEqual("PuZdw_KyXIzo8IksTrERN3_WoAoYTyK7OvM-yaLk711sUIB3");
});


// ------------------------- hdkey -------------------------

test("crypto: hdkey_xprv_from_mnemonic", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.hdkey_xprv_from_mnemonic({
        dictionary: 1,
        word_count: 12,
        phrase: "abuse boss fly battle rubber wasp afraid hamster guide essence vibrant tattoo",
    });

    expect(result.xprv)
        .toEqual(
            "xprv9s21ZrQH143K25JhKqEwvJW7QAiVvkmi4WRenBZanA6kxHKtKAQQKwZG65kCyW5jWJ8NY9e3GkRoistUjjcpHNsGBUv94istDPXvqGNuWpC");
});

test("crypto: hdkey_secret_from_xprv", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.hdkey_secret_from_xprv({
        xprv: "xprv9s21ZrQH143K25JhKqEwvJW7QAiVvkmi4WRenBZanA6kxHKtKAQQKwZG65kCyW5jWJ8NY9e3GkRoistUjjcpHNsGBUv94istDPXvqGNuWpC",
    });

    expect(result.secret).toEqual("0c91e53128fa4d67589d63a6c44049c1068ec28a63069a55ca3de30c57f8b365");
});

test("crypto: hdkey_public_from_xprv", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.hdkey_public_from_xprv({
        xprv: "xprv9s21ZrQH143K25JhKqEwvJW7QAiVvkmi4WRenBZanA6kxHKtKAQQKwZG65kCyW5jWJ8NY9e3GkRoistUjjcpHNsGBUv94istDPXvqGNuWpC",
    });

    expect(result.public).toEqual("7b70008d0c40992283d488b1046739cf827afeabf647a5f07c4ad1e7e45a6f89");
});


test("crypto: hdkey_derive_from_xprv", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.hdkey_derive_from_xprv({
        xprv: "xprv9s21ZrQH143K25JhKqEwvJW7QAiVvkmi4WRenBZanA6kxHKtKAQQKwZG65kCyW5jWJ8NY9e3GkRoistUjjcpHNsGBUv94istDPXvqGNuWpC",
        child_index: 0,
        hardened: false,
    });

    expect(result.xprv)
        .toEqual(
            "xprv9uZwtSeoKf1swgAkVVCEUmC2at6t7MCJoHnBbn1MWJZyxQ4cySkVXPyNh7zjf9VjsP4vEHDDD2a6R35cHubg4WpzXRzniYiy8aJh1gNnBKv");

    expect((await crypto.hdkey_secret_from_xprv({xprv: result.xprv})).secret)
        .toEqual("518afc6489b61d4b738ee9ad9092815fa014ffa6e9a280fa17f84d95f31adb91");
    expect((await crypto.hdkey_public_from_xprv({xprv: result.xprv})).public)
        .toEqual("b45e1297a5e767341a6eaaac9e20f8ccd7556a0106298316f1272e461b6fbe98");

});

test("crypto: hdkey_derive_from_xprv_path", async () => {
    const crypto = runner.getClient().crypto;

    const result = await crypto.hdkey_derive_from_xprv_path({
        xprv: "xprv9s21ZrQH143K25JhKqEwvJW7QAiVvkmi4WRenBZanA6kxHKtKAQQKwZG65kCyW5jWJ8NY9e3GkRoistUjjcpHNsGBUv94istDPXvqGNuWpC",
        path: "m/44'/60'/0'/0'",
    });

    expect(result.xprv)
        .toEqual(
            "xprvA1KNMo63UcGjmDF1bX39Cw2BXGUwrwMjeD5qvQ3tA3qS3mZQkGtpf4DHq8FDLKAvAjXsYGLHDP2dVzLu9ycta8PXLuSYib2T3vzLf3brVgZ");

    expect((await crypto.hdkey_secret_from_xprv({xprv: result.xprv})).secret)
        .toEqual("1c566ade41169763b155761406d3cef08b29b31cf8014f51be08c0cb4e67c5e1");
    expect((await crypto.hdkey_public_from_xprv({xprv: result.xprv})).public)
        .toEqual("302a832bad9e5c9906422a82c28b39ae465dcd60178480f7309e183ee34b5e83");

});


// ------------------------- encryption -------------------------

test("crypto: chacha20", async () => {
    const crypto = runner.getClient().crypto;
    const params = {
        key: "01".repeat(32),
        nonce: "ff".repeat(12),
        data: text2base64("Message"),
    };

    const encrypted = await crypto.chacha20(params);
    const decrypted = await crypto.chacha20({ ...params, data: encrypted.data });

    expect(encrypted.data).toEqual("w5QOGsJodQ==");
    expect(decrypted.data).toEqual(text2base64("Message"));
});


// ------------------------- boxes -------------------------

test("crypto: signing_box default", async () => {
    const crypto = runner.getClient().crypto;
    const keys = {
        public: "0335e912a6dc50b5727d332aa389d2aeff86c7b7ae5b6483bb0e425f41ee42c0",
        secret: "6d33449a8b5aeff942789ea69574e8254a52688a3f570590933177b8cbe2b82c",
    };

    const signing_box = await crypto.get_signing_box(keys);

    const getPublicKeyResult = await crypto.signing_box_get_public_key(signing_box);
    expect(getPublicKeyResult.pubkey).toEqual(keys.public);

    const signResult = await crypto.signing_box_sign({ signing_box: signing_box.handle, unsigned: "" });
    expect(signResult.signature)
        .toEqual(
            "b254a6c54f48790b039bb5621950a11ca9cfc681d685ed019e6826fdbea3ad21c0e92f667d8270b2ba27fcb5fb57991a2c3bb9ced69fc6893aa1e22bd694fa0c");
});

test("crypto: signing_box custom", async () => {
    const crypto = runner.getClient().crypto;
    const keys = {
        public: "0335e912a6dc50b5727d332aa389d2aeff86c7b7ae5b6483bb0e425f41ee42c0",
        secret: "6d33449a8b5aeff942789ea69574e8254a52688a3f570590933177b8cbe2b82c",
    };

    const signing_box = await crypto.register_signing_box({
        get_public_key: () => Promise.resolve({ public_key: keys.public }),
        sign: async (params) => await crypto.sign({ keys, unsigned: params.unsigned }),
    });

    const getPublicKeyResult = await crypto.signing_box_get_public_key(signing_box);
    expect(getPublicKeyResult.pubkey).toEqual(keys.public);

    const signResult = await crypto.signing_box_sign({ signing_box: signing_box.handle, unsigned: text2base64("abc") });
    expect(signResult.signature).toEqual((await crypto.sign({keys, unsigned: text2base64("abc") })).signature);
});

test("crypto: external encryption box (register_encryption_box, encryption_box_get_info, encryption_box_encrypt, encryption_box_decrypt)", async () => {
    const crypto = runner.getClient().crypto;

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

    const handle: EncryptionBoxHandle = (await crypto.register_encryption_box(encryption_box)).handle;

    const info: EncryptionBoxInfo = (await crypto.encryption_box_get_info({
        encryption_box: handle,
    })).info;

    expect(info.algorithm).toEqual("duplicator");

    const encrypted: string = (await crypto.encryption_box_encrypt({
        encryption_box: handle,
        data: "12345",
    })).data;

    expect(encrypted).toEqual("1234512345");

    const decrypted: string = (await crypto.encryption_box_decrypt({
        encryption_box: handle,
        data: encrypted,
    })).data;

    expect(decrypted).toEqual("12345");
});

// ------------------------- ---- -------------------------

// Intentionally disabled (was created for react-native, shouldn't go to the master branch)
test.skip("crypto: encrypt large blocks", async () => {
    const client = runner.getClient();
    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();

    async function testBuffer() {
        const nonce = Buffer.from((await client.crypto.generate_random_bytes({length: 24})).bytes, "base64").toString("hex");
        const decrypted = (await client.crypto.generate_random_bytes({
            length: 100000000, // 100 MB
            // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
            response_binary_type: 'blob'
        })).bytes;
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

        if (typeof decrypted2 === 'string') {
            expect(decrypted2).toEqual(decrypted);
        } else {
            // Blob
            const hash = (await client.crypto.sha512({
                data: decrypted,
                // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
                response_binary_type: 'base64'
            })).hash;
            const hash2 = (await client.crypto.sha512({
                data: decrypted2,
                // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
                response_binary_type: 'base64'
            })).hash;
            expect(hash).toEqual(hash2);
        }
    }

    await Promise.all([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(_ => testBuffer()));
});
