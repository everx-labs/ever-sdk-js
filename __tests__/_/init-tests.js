// @flow

import { TONClient } from '../../src/TONClient';
import type {
    TONConfigData,
    TONContractABI,
    TONContractDeployParams,
    TONContractDeployResult,
    TONKeyPairData
} from '../../types';
import { ensureBinaries } from './binaries';
import { deploy_with_giver, get_grams_from_giver, readGiverKeys, get_giver_address } from './giver';

require('dotenv').config();
const fetch = require('node-fetch');
const WebSocket = require('websocket');

export const nodeSe = !!process.env.USE_NODE_SE
    && process.env.USE_NODE_SE.toLowerCase() !== 'false'
    && process.env.USE_NODE_SE !== '0';

if (!process.env.TON_NETWORK_ADDRESS) {
    throw new Error('Servers list is not specified');
}
const serversConfig = process.env.TON_NETWORK_ADDRESS.replace(/ /gi, '').split(',');

export type TONContractDeployedParams = {
    address: string,
    key: TONKeyPairData,
    abi: TONContractABI,
    giverAddress: string
}


async function init() {
    await ensureBinaries();

    //$FlowFixMe
    const library = require('../tonclient.node');
    TONClient.setLibrary({
        fetch,
        WebSocket: WebSocket.w3cwebsocket,
        createLibrary: () => {
            return Promise.resolve(library);
        },
    });
    const client: TONClient = await TONClient.create(tests.config);
    tests.client = client;
    console.log('[Init] Created client is connected to: ', client.config.data && client.config.data.servers);
    await readGiverKeys();
}

async function done() {
    console.time('Test contract selfdestruct time:');
    for (const contract of tests.deployedContracts) {
        console.log(`Self destruct contract with address ${contract.address}`);
        try {
            const message = await tests.client.contracts.createRunMessage({
                address: contract.address,
                functionName: 'sendAllMoney',
                abi: contract.abi,
                input: { dest_addr: contract.giverAddress },
                keyPair: contract.key,
            });
            await tests.client.contracts.sendMessage(message.message);
        } catch (e) {
            console.log(`Selfdestruct error: ${e}`);
            // ignore exception
        }
    }
    console.timeEnd('Test contracts selfdestruct time:');
    await tests.client.close();
}

export const tests: {
    config: TONConfigData,
    client: TONClient,
    init(): Promise<void>,
    done(): Promise<void>,
    get_grams_from_giver(account: string, amount?: number): Promise<void>,
    deploy_with_giver(params: TONContractDeployParams): Promise<TONContractDeployResult>,
    deployedContracts: Array<TONContractDeployedParams>,
    get_giver_address(): string,
    nodeSe: bool,
} = {
    config: {
        defaultWorkchain: 0,
        servers: serversConfig,
        log_verbose: false,
    },
    client: new TONClient(),
    init,
    done,
    get_grams_from_giver,
    deploy_with_giver,
    deployedContracts: [],
    get_giver_address,
    nodeSe,
};
