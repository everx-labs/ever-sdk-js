// @flow

import { Span } from 'opentracing';
import { TONClient } from '../../src/TONClient';
import type {
    TONConfigData,
    TONContractABI,
    TONContractDeployParams,
    TONContractDeployResult,
    TONContractPackage,
    TONKeyPairData,
} from '../../types';

import {
    createJaegerTracer,
    initTONClient,
    loadContractPackage,
    env,
} from './testing-platform';

import {
    deploy_with_giver,
    get_grams_from_giver,
    readGiverKeys,
    get_giver_address,
    add_deployed_contract,
} from './giver';


export const nodeSe = !!env.USE_NODE_SE
    && env.USE_NODE_SE.toLowerCase() !== 'false'
    && env.USE_NODE_SE !== '0';

if (!env.TON_NETWORK_ADDRESS) {
    throw new Error('Servers list is not specified');
}
const serversConfig = env.TON_NETWORK_ADDRESS.replace(/ /gi, '').split(',');

export type TONContractDeployedParams = {
    address: string,
    key: TONKeyPairData,
    abi: TONContractABI,
    giverAddress: string
}

export type PackageLoader = (version: number) => Promise<TONContractPackage>;

export const ABIVersions = [1, 2];

const _loadedPackages = new Map();

export function packageLoader(name: string): PackageLoader {
    return async (version: number): Promise<TONContractPackage> => {
        const key = `${name}_${version}`;
        const existing = _loadedPackages.get(key);
        if (existing) {
            return existing;
        }
        const loaded = await loadContractPackage(name, version);
        _loadedPackages.set(key, loaded);
        return loaded;
    };
}

async function init() {
    await initTONClient(TONClient);
    const client: TONClient = await TONClient.create(tests.config);
    tests.client = client;
    console.log(
        `[Init] Created client is connected to: ${JSON.stringify(client.config.data && client.config.data.servers)}`,
    );
    await readGiverKeys();
}

function newClient(): TONClient {
    return new TONClient();
}

async function createClient(config: { accessKey?: string }): Promise<TONClient> {
    return TONClient.create({
        ...tests.config,
        ...(config: any),
    });
}

async function done() {
    console.time('Test contracts self destruct time:');
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
            console.log(`Self destruct error: ${JSON.stringify(e)}`);
            // ignore exception
        }
    }
    console.timeEnd('Test contracts self destruct time:');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await tests.client.close();
}


export const tests: {
    config: TONConfigData,
    newClient(): TONClient,
    createClient(config: { accessKey?: string }): Promise<TONClient>,
    client: TONClient,
    init(): Promise<void>,
    done(): Promise<void>,
    get_grams_from_giver(account: string, amount?: number, parentSpan?: Span): Promise<void>,
    deploy_with_giver(
        params: TONContractDeployParams,
        parentSpan?: Span,
    ): Promise<TONContractDeployResult>,
    add_deployed_contract(key: TONKeyPairData, address: string, abi: TONContractABI): void,
    deployedContracts: Array<TONContractDeployedParams>,
    get_giver_address(): string,
    nodeSe: boolean,
    packageLoader(name: string): PackageLoader,
} = {
    config: {
        defaultWorkchain: 0,
        servers: serversConfig,
        messageExpirationTimeout: 10000,
        log_verbose: false,
        err_log_verbose: true,
        useWebSocketForQueries: true,
        tracer: createJaegerTracer(''),
        accessKey: 'bypass',
    },
    newClient,
    createClient,
    client: new TONClient(),
    init,
    done,
    get_grams_from_giver,
    deploy_with_giver,
    add_deployed_contract,
    deployedContracts: [],
    get_giver_address,
    nodeSe,
    packageLoader,
};
