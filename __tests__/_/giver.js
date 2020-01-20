// @flow

import {
    QAccountType,
    TONAddressStringVariant,
    QTransactionProcessingStatus
} from '../../src/modules/TONContractsModule';
import type {
    TONContractDeployParams,
    TONContractDeployResult,
    TONContractRunParams,
    TONContractRunResult
} from '../../types';
import { nodeSe, tests } from './init-tests';

const os = require('os');
const fs = require('fs');
const path = require('path');

export async function readGiverKeys() {
    try {
        let keysPath = path.resolve(os.homedir(), 'giverKeys.json');
        giverWalletKeys = JSON.parse(fs.readFileSync(keysPath, 'utf8'));
        console.log('Use giver keys from ', keysPath);
    } catch (error) {
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
        'ABI version': 1,
        'functions': [
            {
                'name': 'constructor',
                'inputs': [],
                'outputs': []
            },
            {
                'name': 'sendTransaction',
                'inputs': [
                    {
                        'name': 'dest',
                        'type': 'address'
                    },
                    {
                        'name': 'value',
                        'type': 'uint128'
                    },
                    {
                        'name': 'bounce',
                        'type': 'bool'
                    }
                ],
                'outputs': []
            }
        ],
        'events': [],
        'data': [
            {
                'key': 100,
                'name': 'owner',
                'type': 'uint256'
            }
        ]
    },
    imageBase64: 'te6ccgECJQEABd8AAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIo/wAgwAH0pCBYkvSg4YrtU1gw9KATBwEK9KQg9KEIAgPNQBAJAgHODQoCASAMCwAHDDbMIAAnCFwvCLwGbmw8uBmIiIicfAKXwOACASAPDgA1O1HbxFvEMjL/4Bk7UdvEoBA9EPtRwFvUu1XgANU/vsBZGVjb2RlX2FkZHIg+kAy+kIgbxAgcrohc7qx8uB9IW8RbvLgfch0zwsCIm8SzwoHIm8TInK6liNvEyLOMp8hgQEAItdJoc9AMiAizjLi/vwBZGVjb2RlX2FkZHIwIcnQJVVBXwXbMIAIBIBIRACuk/32As7K6L7EwtjC3MbL8E7eIbZhAAKWlf32AsLGvujkwtzmzMrlkOWegEWeFADjnoHwUZ4sSZ4sR/QE456A4fQE4fQFAIGegfBHnhY+5Z6AQZJF9gH9/gLCxr7o5MLc5szK5L7K3Mi+CwAIBIBoUAeD//v0BbWFpbl9leHRlcm5hbCGOWf78AWdldF9zcmNfYWRkciDQINMAMnC9jhr+/QFnZXRfc3JjX2FkZHIwcMjJ0FURXwLbMOAgctchMSDTADIh+kAz/v0BZ2V0X3NyY19hZGRyMSEhVTFfBNsw2DEhFQH4jnX+/gFnZXRfbXNnX3B1YmtleSDHAo4W/v8BZ2V0X21zZ19wdWJrZXkxcDHbMODVIMcBjhf+/wFnZXRfbXNnX3B1YmtleTJwMTHbMOAggQIA1yHXC/8i+QEiIvkQ8qj+/wFnZXRfbXNnX3B1YmtleTMgA18D2zDYIscCsxYBzJQi1DEz3iQiIo44/vkBc3RvcmVfc2lnbwAhb4wib4wjb4ztRyFvjO1E0PQFb4wg7Vf+/QFzdG9yZV9zaWdfZW5kXwXYIscBjhP+/AFtc2dfaXNfZW1wdHlfBtsw4CLTHzQj0z81IBcBdo6A2I4v/v4BbWFpbl9leHRlcm5hbDIkIlVxXwjxQAH+/gFtYWluX2V4dGVybmFsM18I2zDggHzy8F8IGAH+/vsBcmVwbGF5X3Byb3RwcHDtRNAg9AQyNCCBAIDXRZog0z8yMyDTPzIyloIIG3dAMuIiJbkl+COBA+ioJKC5sI4pyCQB9AAlzws/Is8LPyHPFiDJ7VT+/AFyZXBsYXlfcHJvdDJ/Bl8G2zDg/vwBcmVwbGF5X3Byb3QzcAVfBRkABNswAgEgHhsCAnMdHAAPtD9xA5htmEAAw7QaZuz2o7eIt4hAMnajt4lAIHoHSen/6Mi4cV15cDJ8AHgQab/pABh4EX9+ALg6ubQ4MjGbujexmnaiaHoA5Hajt4kA+gAQ54sQZPaqf36AuDq5tDgyMZu6N7GaGC+BbZhAAgFIIh8BCbiJACdQIAH+/v0BY29uc3RyX3Byb3RfMHBwgggbd0DtRNAg9AQyNCCBAIDXRY4UINI/MjMg0j8yMiBx10WUgHvy8N7eyCQB9AAjzws/Is8LP3HPQSHPFiDJ7VT+/QFjb25zdHJfcHJvdF8xXwX4ADDwIf78AXB1c2hwZGM3dG9jNO1E0PQByCEARO1HbxIB9AAhzxYgye1U/v0BcHVzaHBkYzd0b2M0MF8C2zAB4tz+/QFtYWluX2ludGVybmFsIY5Z/vwBZ2V0X3NyY19hZGRyINAg0wAycL2OGv79AWdldF9zcmNfYWRkcjBwyMnQVRFfAtsw4CBy1yExINMAMiH6QDP+/QFnZXRfc3JjX2FkZHIxISFVMV8E2zDYJCFwIwHqjjj++QFzdG9yZV9zaWdvACFvjCJvjCNvjO1HIW+M7UTQ9AVvjCDtV/79AXN0b3JlX3NpZ19lbmRfBdgixwCOHCFwuo4SIoIQXH7iB1VRXwbxQAFfBtsw4F8G2zDg/v4BbWFpbl9pbnRlcm5hbDEi0x80InG6JAA2niCAI1VhXwfxQAFfB9sw4CMhVWFfB/FAAV8H',
};
const giverRequestAmount = 500_000_000;

async function check_giver() {
    const ton = tests.client;

    const accounts = await ton.queries.accounts.query({
            id: { eq: giverWalletAddressHex }
        },
        'acc_type balance');

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
        });

        console.log('Giver deployed');
    }
}

export async function get_grams_from_giver(account: string, amount: number = giverRequestAmount) {
    const { contracts, queries } = tests.client;

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
        await check_giver();
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
    const result: TONContractRunResult = await contracts.run(params);
    for (const msg of (result.transaction.out_msgs || [])) {
        await queries.transactions.waitFor(
            {
                in_msg: { eq: msg },
                status: { eq: QTransactionProcessingStatus.finalized },
            },
            'lt',
        );
    }
}

export async function deploy_with_giver(params: TONContractDeployParams): Promise<TONContractDeployResult> {
    const { contracts } = tests.client;

    const message = await contracts.createDeployMessage(params);
    await get_grams_from_giver(message.address);
    console.log(`Deployed test contract address ${message.address}`);
    tests.deployedContracts.push({
        key: params.keyPair,
        address: message.address,
        abi: params.package.abi,
        giverAddress: nodeSe ? nodeSeGiverAddress : giverWalletAddressHex,
    });
    return contracts.deploy(params);
}

export function get_giver_address(): string {
    return giverWalletAddressHex;
}
