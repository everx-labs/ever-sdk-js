// @flow

import { TONClient } from '../../src/TONClient';
import type { TONConfigData, TONContractDeployParams, TONContractDeployResult } from '../../types';
import { ensureBinaries } from './binaries';
import { deploy_with_giver, get_grams_from_giver, readGiverKeys } from './giver';

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


jest.setTimeout(200_000);

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
    // await generateGiverKeys(tests.client);
    await readGiverKeys();
}

async function done() {
    await tests.client.close();
}


export const tests: {
    config: TONConfigData,
    client: TONClient,
    init(): Promise<void>,
    done(): Promise<void>,
    get_grams_from_giver(account: string): Promise<void>,
    deploy_with_giver(params: TONContractDeployParams): Promise<TONContractDeployResult>,
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
    nodeSe
};
