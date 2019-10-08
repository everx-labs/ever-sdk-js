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

import type { TONContractPackage } from '../src/modules/TONContractsModule';
import { TONOutputEncoding } from "../src/modules/TONCryptoModule";
import { WalletContractPackage } from './contracts/WalletContract';
import { tests } from "./init-tests";

const giverDeployMsg = 'b5ee9c7241045301000000091e00035188019ce136b7f94b13d6c436b4af0da16ac4ec22895891eb3c161a6b5a12e779b70c11801590214db007020100000101c0030203cf2006040101de050003d0200041d80000000000000000000000000000000000000000000000000000000000000004017eff00f80089f40521c3018e158020fefe0173656c6563746f725f6a6d705f30f4a08e1b8020f40df2b48020fefc0173656c6563746f725f6a6d70f4a1f233e2080101c0090201200b0a0018ff8210d0a6aff0f001dcf0010202de520c0101300d020120290e0201201c0f0201201710020120161102016a131200a4b2e0784dfefe016765745f6d73675f7075626b65797021c7029670313171db308e2921d520c7019770045f0471db30e020810200821059b09094f0013321f901202225f91020f2a85f0470e2dc203131db300201201514003db10c31ef0421d9b9aa13e0024379e57840459193a10420ab7e793de002be050015b0fcdca6db91e80193daa90039b99b9aa13fdf602cecae8bec4c2d8c2dcc6cbda8ede20de2ede21b661002015819180073b6408f57bfbec0595b98dbd91959dc985b5cc81c2f6385882d80dde81e2a410808f2c0ccc848c89e2a33c04ccc255c08b2c0ccb8884c4c76cc200201201b1a00a1b4348f4cff7f00b1b430b733b2afb0b9392fb632b710c0107a474918d248b87110115f470a470890115e59906e18529011c0107a2d9819b8734f91b759cd119138d09240107a0b19ef7111022f826d984000efb45357f87f7e80b6b0b4b72fb2bc3a32b93730b610c1084c2d05c2780091c1087d703c26f80092638159ca126a189aef13939191c10806828f39f800926380c711ff7e00b6b9b3afb4b9afb2b6b83a3cb6e41090fa0064989076aa383838aac92f856d987012410808216251f8009090b82ac92f856d9840020120221d020120211e020120201f00bdb72bee62ffbf405b585a5b97da5b9d195c9b985b086084261682e13c004989889c20840341479cfc0048f1c02387485c2ea7e084171fb881dc085c155c97c236cc381c1c1c555897c1f6cc3808e0840410b128fc0048485c156097c276cc200091b634ead34875d24808afa74888b5c04d0809154c57c136cc38088875c60d08f50d49345b4d48340809496875c60cb20908738c4848738c4832740c4809f5c04c8809156057c276cc20001fb990214da610421f0fcdca7e003b6610020120282302015827240201202625005cb3615691fefc0173656e645f6578745f6d7367f8258210881607bdf001222222821065ffe8e7f0012070fb005f040048b3167d2e8101008210b0d3ab4df00180408210b0d3ab4df001308210f98618f7f001db300091b42d05c27f7e00b3b2ba2fb9b931afb0b2323910681069801910385eccb838382a912f81ed987010b8eb909910e980199169801a11c005c1082cd8484a78009111112aa92f836d98400019b902c0f7bda8ede20de31b6610020120402a020120352b020120302c0201202e2d009db754e559ffbf005cd95b9917da5b9d17db5cd9f21c8872c04c5c0872c00c5c0872c1cc488872ffcc4832740c6084220581ef7c007e08c9485c1c1c0a0a0a1c1c20841d23ac99bc00481c3ec017c22001edb723ac99bfbe00589d5a5b191b5cd9f21c0872c00c484872c00c488872c00c5c0872c00c48c8738c4908738c4809a08436408f57bc004c5c0872c00c4809e08436408f57bc004c480a208436408f57bc004c4a0872cfcc4a4872c7cc5c0872c00c4833cd4af5d25c6808486f265c08f2c00ccb08f38ce02f00348e107123cb0033c82d21ce3120c924cc3430e222c90d5f0ddb30020120343102012033320051b55fa4d8ff7e80b3b2ba2fb9b2b6332fb0b232394108440b03def800c005c1082cd8484a7800ed98400031b50968553876a3b788e87a02bc7a0749e9ffe8c8b8716d984000c3b77ffa39ffbf40589d5a5b1917d95e1d17db5cd9f21cc872c04c4848738c5c0872c04c488872cfcc5c0872c7cc5c0872c00c4833cd4935d25c6808486f265c08f2c00cc948f38ce3841c48f2c00cf20988738c483249330d0c3888b24197c1b6cc200201203f360201203c370201203b380201483a390049b184338bfdfc02e6cadcc8bed2dce8bedae6cebe64e04247024e210420faa72acfe002be05000db0fdc40e61b6610027b4d8484a1090eb909069ff99189001af81ed98400201203e3d003fb4df9e4f7f7d00b9b2b7322fb3b930b6b9b8109192c1083ea9cab3f800af81c00031b4ef31a7b8f6a3b788e87a02bc7a0749e9ffe8c8b8716d984000b7b8730fd55fdf802c8cac6dec8cabec2e4e4c2f2438e032e43a86641a06661bc43a6026640e375e5c0c845a63e6847e808430041e91d24634922e1c4464375e5c0c9fdfe02c8cac6dec8cabec2e4e4c2f2beded64444aac2be0fb66100201204841020120454202015844430075b409c48810c0107a474918d248b87138471010115cd9906e18111092c0107a074898cbe438016780e4e8711013671b185238731811822f826d98400039b488f3fa64129091e780989064e81890129292fa0b1a11832f836d984002012047460039b70b82c03fbf4059d95d17dc985b9917dcd959593b51dbc41bc5b6cc200031b7b7811e1cbb51dbc4743d015e3d03a4f4fff4645c38b6cc200201204e490201204b4a0067b6c209cf3fbf00595b98dbd91957d85c9c985e5c48f2c04cc860083d23a48c69245c38880932c7cd08893d000d08c117c136cc200201624d4c008fb09bed1443ae9240457d3a4445ae00684048aa62be09b661c04443ae306847a86a49a2da6a41a0404a4b43ae30659048439c6242439c624193a062404fae00644048ab02be13b6610031b085894641a60e6440e175e56e43a63e664442aa42be07b661020276514f01ffb00a3ce7fdfe02e6e8dee4cabee6d2cedcc2e8eae4cada42e044f102020104207223cfe9e0026244e244f102020104207223cfe9e0026246e444f102020104207223cfe9e0026248e644f102020104207223cfe9e002630420585c1601e0030421d9b9aa13e00390424396fe624193a0630420dd7e9363e00240e84cf102020150006a82103911e7f4f0013521752678f416352376267881010082103911e7f4f00135c82521f4003120c931ed4720226f8c3120ed575f0b0055b0e032244445ae306847a86a49a2da6a41a06a4847ae306d9046439c6242439c624193a04eaac2be0fb661001b20842f2bee62fc00773c0076cc20e7af7b3d';
const giverDeployMsgId = '641134d787db0c30809d62826b5ec343ed9ced58ccf83e5de55425494dd4acf9';

const giverAddress = 'ce709b5bfca589eb621b5a5786d0b562761144ac48f59e0b0d35ad0973bcdb86';
const giverAbi =
{
    "ABI version": 0,
    "functions": [{
        "name": "constructor",
        "inputs": [],
        "outputs": []
    }, {
        "name": "sendGrams",
        "inputs": [
            {"name":"dest","type":"uint256"},
            {"name":"amount","type":"uint64"}
        ],
        "outputs": []
    }]
};

async function check_giver() {
    const ton = tests.client;
    const accounts = await ton.queries.accounts.query({
        id: { eq: giverAddress }
    }, `
        storage {
            state {
                ...on AccountStorageStateAccountActiveVariant {
                    AccountActive { split_depth } 
                }
            }
        }
    `);
    if ((accounts.length === 0) || !(accounts[0].storage.state.AccountActive)) {
        console.log('No giver. Deploy');
        const base64Msg = Buffer.from(giverDeployMsg, 'hex').toString('base64');
        const base64Id = Buffer.from(giverDeployMsgId, 'hex').toString('base64');

        const transaction = await ton.contracts.processMessage({
            messageId: giverDeployMsgId,
            messageIdBase64: base64Id,
            messageBodyBase64: base64Msg,
        },
        'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }',
        );
        const ordinary = transaction.description.Ordinary;
        if (ordinary.aborted) {
            throw {
                code: 3050,
                message: 'Deploy failed',
            };
        }
        console.log('Giver deployed');
    }
}

export default async function get_grams_from_giver(account) {
    const { contracts, queries } = tests.client;
    await check_giver();
    const result = await contracts.run({
        address: giverAddress,
        functionName: 'sendGrams',
        abi: giverAbi,
        input: {
            dest: `0x${account}`,
            amount: 10000000000
        },
        keyPair: null,
    });

    const wait = await queries.accounts.waitFor(
        {
            id: { eq: account },
            storage: {
                balance: {
                    Grams: { gt: "0" }
                }
            }
        },
		'id storage {balance {Grams}}'
    );
};

beforeAll(tests.init);
afterAll(tests.done);

const walletKeys = {
    public: 'fb98b2541ba805648f25eb469dd4766fcdde03a2cfe6fb41d8c1571c29407ca3',
    secret: '7bfe77bbd3ad57ada9ed323da83504723e3af7cd3ba68b02d3c8335f75e0a24e',
};

const walletAddress = 'adb63a228837e478c7edf5fe3f0b5d12183e1f22246b67712b99ec538d6c5357';

test('load', async () => {
    const { contracts } = tests.client;
    const rich = await contracts.load({
        address: giverAddress,
        includeImage: false,
    });
    expect(rich.id).toEqual(giverAddress);

    const contract = await contracts.load({
        address: '0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF',
        includeImage: false,
    });
    expect(contract.id).toBeNull();
    expect(contract.balanceGrams).toBeNull();

    const w = await contracts.load({
        address: walletAddress,
        includeImage: false,
    });
    expect(w.id).toEqual(walletAddress);
    expect(Number.parseInt(w.balanceGrams)).toBeGreaterThan(0);
});

test('deploy', async () => {
    const { contracts } = tests.client;

    await get_grams_from_giver(walletAddress);

    const deployed = await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: walletKeys,
    });
    expect(deployed.address).toEqual(walletAddress);
});

test('deploy_new', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });

    await get_grams_from_giver(message.address);

    await contracts.deploy({
        package: WalletContractPackage,
        constructorParams: {},
        keyPair: keys,
    });
});

test('run', async () => {
    const { contracts } = tests.client;
    const result = await contracts.run({
        address: walletAddress,
        functionName: 'getVersion',
        abi: WalletContractPackage.abi,
        input: {},
        keyPair: walletKeys,
    });
    expect(JSON.stringify(result)).toEqual(`{"output":{"error":"-0x1","version":{"major":"0x0","minor":"0x1"}}}`);
});

test('decodeInputMessageBody', async () => {
    const { contracts } = tests.client;
    const body = 'te6ccoEBAgEAcwARcwEbACfvUIcBgJTr3AOCAGABAMDr2GubWXYR6wuk6WFn4btjW3w+DbidhSrKArHbqCaunLGN9LwAbQFT9kyOpN6DR6DJbuKkvC94KwJgan7xeTUHS89H/vKbWZbzZEHu4euhqvQE2I9aW+PNdn2BKZJXlA4=';

    const result = await contracts.decodeInputMessageBody({
        abi: WalletContractPackage.abi,
        bodyBase64: body
    });

    expect(result.function).toEqual('createLimit');
    expect(result.output).toEqual({ type: "0x1", value: "0x3b9aca00", meta: "x01" });
});

const events_package: TONContractPackage = {
    abi: {
        'ABI version': 0,
        functions: [{
            name: 'constructor',
            inputs: [],
            outputs: []
        }, {
            name: 'emitValue',
            inputs: [
                { name: 'id', type: 'uint256' }
            ],
            outputs: []
        }, {
            name: 'returnValue',
            inputs: [
                { name: 'id', type: 'uint256' }
            ],
            outputs: [
                { name: 'value0', type: 'uint256' }
            ]
        }],
        events: [{
            name: 'EventThrown',
            inputs: [
                { name: 'id', type: 'uint256' }
            ]
        }]
    },
    imageBase64: "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"
};

test('filterOutput', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();

    const message = await contracts.createDeployMessage({
        package: events_package,
        constructorParams: {},
        keyPair: keys,
    });

    await get_grams_from_giver(message.address);

    const deployed = await contracts.deploy({
        package: events_package,
        constructorParams: {},
        keyPair: keys,
    });

    const resultEmit = await contracts.run({
        address: deployed.address,
        functionName: 'emitValue',
        abi: events_package.abi,
        input: { id: "0" },
        keyPair: keys,
    });

    const resultReturn = await contracts.run({
        address: deployed.address,
        functionName: 'returnValue',
        abi: events_package.abi,
        input: { id: "0" },
        keyPair: keys,
    });
    expect(JSON.stringify(resultReturn)).toEqual(`{"output":{"value0":"0x0"}}`);
});

test('External Signing', async () => {
    const { contracts, crypto } = tests.client;
    const keys = await crypto.ed25519Keypair();
    const deployParams = {
        package: events_package,
        constructorParams: {},
        keyPair: keys,
    };
    const unsignedMessage = await contracts.createUnsignedDeployMessage(deployParams);
    const signKey = await crypto.naclSignKeypairFromSecretKey(keys.secret);
    const signBytesBase64 = await crypto.naclSignDetached({
        base64: unsignedMessage.signParams.bytesToSignBase64,
    }, signKey.secret, TONOutputEncoding.Base64);
    const signed = await contracts.createSignedDeployMessage({
        address: unsignedMessage.address,
        createSignedParams: {
            publicKeyHex: keys.public,
            signBytesBase64: signBytesBase64,
            unsignedBytesBase64: unsignedMessage.signParams.unsignedBytesBase64,
        }
    });

    const message = await contracts.createDeployMessage(deployParams);
    expect(signed.message.messageBodyBase64).toEqual(message.message.messageBodyBase64);
});
