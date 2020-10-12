// @flow

import { Span } from "opentracing";
import {
    QAccountType,
    TONAddressStringVariant,
    QTransactionProcessingStatus,
    QMessageType
} from '../../src/modules/TONContractsModule';
import type {
    TONContractDeployParams,
    TONContractDeployResult,
    TONContractRunParams,
    TONContractRunResult,
    TONContractABI,
    TONKeyPairData
} from '../../types';
import { nodeSe, tests } from './init-tests';
import {
    findGiverKeys,
    writeGiverKeys
} from "./testing-platform";

export async function readGiverKeys() {
    const keys = await findGiverKeys();
    if (keys) {
        giverWalletKeys = keys;
        console.log('Use provided giver keys.');
    } else {
        console.log('Custom giver keys not provided. Use default');
    }

    giverWalletAddressHex = await getGiverAddress();
    giverWalletAddressBase64 = (await tests.client.contracts.convertAddress({
        address: giverWalletAddressHex,
        convertTo: TONAddressStringVariant.Base64,
        base64Params: {
            test: false,
            bounce: false,
            url: false
        }
    })).address;
    if (!nodeSe) {
        console.log(`Giver address: ${giverWalletAddressHex} (${giverWalletAddressBase64})`);
    }
}

async function generateGiverKeys() {
    await writeGiverKeys(await tests.client.crypto.ed25519Keypair());
}

async function getGiverAddress(): Promise<string> {
    return (await tests.client.contracts.createDeployMessage({
        package: GiverWalletPackage,
        constructorParams: {},
        keyPair: giverWalletKeys,
    })).address;
}

const nodeSeGiverAddress = '0:841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94';
const nodeSeGiverAbi =
    {
        'ABI version': 1,
        'functions': [
            {
                'name': 'constructor',
                'inputs': [],
                'outputs': []
            },
            {
                'name': 'sendGrams',
                'inputs': [
                    {
                        'name': 'dest',
                        'type': 'address'
                    },
                    {
                        'name': 'amount',
                        'type': 'uint64'
                    }
                ],
                'outputs': []
            }
        ],
        'events': [],
        'data': []
    };
let giverWalletAddressHex = '';
let giverWalletAddressBase64 = '';
let giverWalletKeys = {
    secret: '2245e4f44af8af6bbd15c4a53eb67a8f211d541ddc7c197f74d7830dba6d27fe',
    public: 'd542f44146f169c6726c8cf70e4cbb3d33d8d842a4afd799ac122c5808d81ba3',
};
const GiverWalletPackage = {
    abi: {
        "ABI version": 2,
        "header": ["time", "expire"],
        "functions": [
            {
                "name": "upgrade",
                "inputs": [
                    { "name": "newcode", "type": "cell" }
                ],
                "outputs": []
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    { "name": "dest", "type": "address" },
                    { "name": "value", "type": "uint128" },
                    { "name": "bounce", "type": "bool" }
                ],
                "outputs": []
            },
            {
                "name": "getMessages",
                "inputs": [],
                "outputs": [
                    {
                        "components": [{ "name": "hash", "type": "uint256" }, {
                            "name": "expireAt",
                            "type": "uint64"
                        }], "name": "messages", "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "events": []
    },
    imageBase64: 'te6ccgECGgEAA9sAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAfz/fyHtRNAg10nCAZ/T/9MA9AX4an/4Yfhm+GKOG/QFbfhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN4j+EL4RSBukjBw3rry4GUh0z/THzQx+CMhAb7yuSH5ACD4SoEBAPQOIJEx3rMLAE7y4Gb4ACH4SiIBVQHIyz9ZgQEA9EP4aiMEXwTTHwHwAfhHbpLyPN4CASASDQIBWBEOAQm46Jj8UA8B/vhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3tFwbW8C+EqBAQD0hpUB1ws/f5NwcHDikSCONyMjI28CbyLIIs8L/yHPCz8xMQFvIiGkA1mAIPRDbwI0IvhKgQEA9HyVAdcLP3+TcHBw4gI1MzHoXwPIghB3RMfighCAAAAAsc8LHyEQAKJvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZoEDmCLPMQG5lnHPQCHPF5Vxz0EhzeIgyXH7AFswwP+OEvhCyMv/+EbPCwD4SgH0AMntVN5/+GcAxbkWq+f/CC3Rxt2omgQa6ThAM/p/+mAegL8NT/8MPwzfDFHDfoCtvw1OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCNJeRnJuPwzcXwAaPwhZGX//CNnhYB8JQD6AGT2qj/8M8AIBIBUTAde7Fe+TX4QW6OEu1E0NP/0wD0Bfhqf/hh+Gb4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0SIiInPIcc8LASLPCgBzz0AkzxYj+gKAac9Acs9AIMki+wBfBfhKgQEA9IaVAdcLP3+TcHBw4pEggUAJKOLfgjIgG7n/hKIwEhAYEBAPRbMDH4at4i+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA18D+ELIy//4Rs8LAPhKAfQAye1Uf/hnAgEgFxYAx7jkYYdfCC3Rwl2omhp/+mAegL8NT/8MPwzfDFvamj8IXwikDdJGDhvXXlwMvwAfCFkZf/8I2eFgHwlAPoAZPaqfAeQfYIQaHaPdqn4ARh8IWRl//wjZ4WAfCUA+gBk9qo//DPACAtoZGAAtr4QsjL//hGzwsA+EoB9ADJ7VT4D/IAgAdacCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+S8jzhUxHAAJDgwQMighD////9vLGS8jzgAfAB+EdukvI83o',
};
const giverRequestAmount = 500_000_000;

async function check_giver(parentSpan?: Span) {
    const ton = tests.client;

    const accounts = await ton.queries.accounts.query({
            id: { eq: giverWalletAddressHex }
        },
        'acc_type balance',
        undefined,
        undefined,
        undefined,
        parentSpan);

    if (accounts.length === 0) {
        throw `Giver wallet does not exist. Send some grams to ${giverWalletAddressHex} (${giverWalletAddressBase64})`;
    }

    if (!(accounts[0]['balance']) ||
        //$FlowFixMe
        BigInt(accounts[0]['balance']) < giverRequestAmount) {
        throw `Giver has no money. Send some grams to ${giverWalletAddressHex} (${giverWalletAddressBase64})`;
    }

    if (accounts[0].acc_type !== QAccountType.active) {
        console.log('No giver. Deploy');

        await ton.contracts.deploy({
            package: GiverWalletPackage,
            constructorParams: {},
            keyPair: giverWalletKeys,
        }, parentSpan);

        console.log('Giver deployed');
    }
}

export async function get_grams_from_giver(
    account: string,
    amount: number = giverRequestAmount,
    parentSpan?: Span,
) {
    const { contracts, queries, config } = tests.client;

    return tests.client.trace('client-tests.get_grams_from_giver', async (span: Span) => {
        config.log("Giver. Start");
        console.time(`Get grams from giver to ${account}`);

        let params: TONContractRunParams;
        if (nodeSe) {
            params = {
                address: nodeSeGiverAddress,
                functionName: 'sendGrams',
                abi: nodeSeGiverAbi,
                input: {
                    dest: account,
                    amount
                },
            };
        } else {
            config.log("Giver. Before check");
            await check_giver(span);
            config.log("Giver. After check");
            params = {
                address: giverWalletAddressHex,
                functionName: 'sendTransaction',
                abi: GiverWalletPackage.abi,
                input: {
                    dest: account,
                    value: amount,
                    bounce: false
                },
                keyPair: giverWalletKeys,
            };
        }
        const result: TONContractRunResult = await contracts.run(params, span);
        for (const msg of (result.transaction.out_messages || [])) {
            if (msg.msg_type === QMessageType.internal) {
                config.log(`Giver. Wait for ${msg.id || "Empty ID"}`);
                await queries.transactions.waitFor(
                    {
                        in_msg: { eq: msg.id },
                        status: { eq: QTransactionProcessingStatus.finalized },
                    },
                    'lt',
                    undefined,
                    span
                );
            }
        }

        config.log("Giver. End");
        console.timeEnd(`Get grams from giver to ${account}`);
    }, parentSpan);
}

export async function deploy_with_giver(
    params: TONContractDeployParams,
    parentSpan?: Span,
): Promise<TONContractDeployResult> {
    const { contracts } = tests.client;
    return tests.client.trace('deploy_with_giver', async(span: Span) => {
        const address = (await contracts.getDeployData({
            ...params.package,
            initParams: params.initParams,
            publicKeyHex: params.keyPair.public,
            workchainId: params.workchainId
        })).address || "";
        await get_grams_from_giver(address, giverRequestAmount, span);
        console.log(`Deployed test contract address ${address}`);
        tests.deployedContracts.push({
            key: params.keyPair,
            address,
            abi: params.package.abi,
            giverAddress: nodeSe ? nodeSeGiverAddress : giverWalletAddressHex,
        });
        return contracts.deploy(params, span);
    }, parentSpan);
}

export function get_giver_address(): string {
    return nodeSe ? nodeSeGiverAddress : giverWalletAddressHex;
}

export function add_deployed_contract(key: TONKeyPairData, address: string, abi: TONContractABI) {
    tests.deployedContracts.push({
        key,
        address,
        abi,
        giverAddress: nodeSe ? nodeSeGiverAddress : giverWalletAddressHex,
    });
}
