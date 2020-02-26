// @flow

import { Span, Tracer } from "opentracing";
import { TONClient } from '../../src/TONClient';
import type {
    TONConfigData,
    TONContractABI,
    TONContractDeployParams,
    TONContractDeployResult,
    TONContractPackage,
    TONKeyPairData
} from '../../types';
import { ensureBinaries } from './binaries';
import { deploy_with_giver, get_grams_from_giver, readGiverKeys, get_giver_address } from './giver';
import { initTracer as initJaegerTracer } from 'jaeger-client';

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
const fs = require('fs');
const path = require('path');

export function loadPackage(name: string): TONContractPackage {
    const contract = {};
    contract.abi = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), '__tests__', 'contracts', `${name}.abi.json`), 'utf8'));
    contract.imageBase64 = fs.readFileSync(path.resolve(process.cwd(), '__tests__', 'contracts', `${name}.tvc`)).toString('base64');
    return contract;
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

async function createClient(config: { accessKey?: string }): Promise<TONClient> {
    return TONClient.create(Object.assign({}, tests.config, config));
}

async function done() {
    console.time('Test contract self destruct time:');
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
            console.log(`Self destruct error: ${e}`);
            // ignore exception
        }
    }
    console.timeEnd('Test contracts self destruct time:');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await tests.client.close();
}

function createJaegerTracer(endpoint: string): ?Tracer {
    if (!endpoint) {
        return null;
    }
    return initJaegerTracer({
        serviceName: 'ton-client-js',
        sampler: {
            type: 'const',
            param: 1,
        },
        reporter: {
            collectorEndpoint: endpoint,
            logSpans: true,
        },
    }, {
        logger: {
            info(msg) {
                console.log('INFO ', msg);
            },
            error(msg) {
                console.log('ERROR', msg);
            },
        },
    });
}

export const tests: {
    config: TONConfigData,
    createClient(config: { accessKey?: string }): Promise<TONClient>,
    client: TONClient,
    init(): Promise<void>,
    done(): Promise<void>,
    get_grams_from_giver(account: string, amount?: number, parentSpan?: Span): Promise<void>,
    deploy_with_giver(params: TONContractDeployParams, parentSpan?: Span): Promise<TONContractDeployResult>,
    deployedContracts: Array<TONContractDeployedParams>,
    get_giver_address(): string,
    nodeSe: boolean,
    loadPackage(name: string): TONContractPackage,
} = {
    config: {
        defaultWorkchain: 0,
        servers: serversConfig,
        log_verbose: false,
        tracer: createJaegerTracer(''),
        transactionTimeout: 40_000,
        accessKey: 'bypass',
    },
    createClient,
    client: new TONClient(),
    init,
    done,
    get_grams_from_giver,
    deploy_with_giver,
    deployedContracts: [],
    get_giver_address,
    nodeSe,
    loadPackage,
};
