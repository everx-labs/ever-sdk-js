// @flow

import { QAccountType, TONAddressStringVariant } from "../../src/modules/TONContractsModule";
import type { TONContractDeployParams, TONContractDeployResult } from "../../types";
import { nodeSe, tests } from "./init-tests";
const os = require('os');
const fs = require('fs');
const path = require('path');

export async function readGiverKeys() {
    try {
        giverWalletKeys = JSON.parse(fs.readFileSync(path.resolve(os.homedir(), 'giverKeys.json'), 'utf8'));
        giverWalletAddressHex = await getGiverAddress();
        console.log("Use custom giver keys:\n", giverWalletKeys);
        console.log("Giver address: " + giverWalletAddressHex);
    } catch (error) {
        console.log("Custom giver keys not provided. Use default");
    }
}

async function generateGiverKeys() {
    const keys = await tests.client.crypto.ed25519Keypair();
    fs.writeFileSync(path.resolve(os.homedir(), 'giverKeys.json'), JSON.stringify(keys));
}

async function getGiverAddress(): Promise<string> {
    return (await tests.client.contracts.createDeployMessage({
        package: GiverWalletPackage,
        constructorParams: {},
        keyPair: giverWalletKeys,
    })).address;
}

const nodeSeGiverAddress = '0:a46af093b38fcae390e9af5104a93e22e82c29bcb35bf88160e4478417028884';
const nodeSeGiverAbi =
    {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "sendGrams",
                "inputs": [
                    { "name": "dest", "type": "uint256" },
                    { "name": "amount", "type": "uint64" }
                ],
                "outputs": []
            }
        ],
        "events": [],
        "data": []
    };
let giverWalletAddressHex = nodeSe
    ? '0:a46af093b38fcae390e9af5104a93e22e82c29bcb35bf88160e4478417028884'
    : '0:bba1ac23b010188089d62010ddb00d594c00f0e217794f3f2b53a81894ec7146';
let giverWalletKeys = {
    secret: '2245e4f44af8af6bbd15c4a53eb67a8f211d541ddc7c197f74d7830dba6d27fe',
    public: 'd542f44146f169c6726c8cf70e4cbb3d33d8d842a4afd799ac122c5808d81ba3',
};
const GiverWalletPackage = {
    abi: {
        "ABI version": 1,
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    { "name": "dest", "type": "uint256" },
                    { "name": "value", "type": "uint128" },
                    { "name": "bounce", "type": "bool" }
                ],
                "outputs": []
            },
            {
                "name": "setSubscriptionAccount",
                "inputs": [
                    { "name": "addr", "type": "uint256" }
                ],
                "outputs": []
            },
            {
                "name": "getSubscriptionAccount",
                "inputs": [],
                "outputs": [
                    { "name": "value0", "type": "uint256" }
                ]
            }
        ],
        "events": [],
        "data": []
    },
    imageBase64: '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',
};
const giverRequestAmount = 500000000;

async function check_giver() {
    const ton = tests.client;

    const accounts = await ton.queries.accounts.query({
            id: { eq: giverWalletAddressHex }
        },
        'acc_type balance');

    if (accounts.length === 0) {
        throw "Giver wallet does not exist. Send some grams to " + giverWalletAddressHex
    }

    if (!(accounts[0]["balance"]) ||
        parseInt(accounts[0]["balance"]) < giverRequestAmount) {
        throw "Giver has no money. Send some grams to " + giverWalletAddressHex
    }

    if (!(accounts[0].acc_type !== QAccountType.active)) {
        console.log('No giver. Deploy');

        await ton.contracts.deploy({
            package: GiverWalletPackage,
            constructorParams: {},
            keyPair: giverWalletKeys,
        });

        console.log('Giver deployed');
    }
}

export async function get_grams_from_giver(account: string) {
    const { contracts, queries } = tests.client;

    const accountId = await contracts.convertAddress({
        address: account,
        convertTo: TONAddressStringVariant.AccountId
    });

    if (nodeSe) {
        await contracts.run({
            address: nodeSeGiverAddress,
            functionName: 'sendGrams',
            abi: nodeSeGiverAbi,
            input: {
                dest: `0x${accountId.address}`,
                amount: giverRequestAmount
            },
        });
    } else {
        await check_giver();
        await contracts.run({
            address: giverWalletAddressHex,
            functionName: 'sendTransaction',
            abi: GiverWalletPackage.abi,
            input: {
                dest: `0x${accountId.address}`,
                value: giverRequestAmount,
                bounce: false
            },
            keyPair: giverWalletKeys,
        });
    }


    await queries.accounts.waitFor(
        {
            id: { eq: account },
            balance: { gt: '0' }
        },
        'id balance'
    );
}

export async function deploy_with_giver(params: TONContractDeployParams): Promise<TONContractDeployResult> {
    const { contracts } = tests.client;

    const message = await contracts.createDeployMessage(params);
    await get_grams_from_giver(message.address);
    return contracts.deploy(params);
}
