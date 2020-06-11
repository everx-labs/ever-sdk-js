/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */
// @flow

import {Tags, Span, SpanContext} from "opentracing";
import type {
    ITONClient,
    TONAccessKeysManagementParams,
    TONConfigData,
    TONContracts,
    TONCrypto,
    TONQueries,
    TONRegisterAccessKeysParams,
    TONRevokeAccessKeysParams,
} from "../types";

import TONConfigModule from './modules/TONConfigModule';
import TONContractsModule from './modules/TONContractsModule';
import TONCryptoModule from './modules/TONCryptoModule';
/* eslint-disable class-methods-use-this, no-use-before-define */
import TONQueriesModule from "./modules/TONQueriesModule";

import type {TONClientLibrary, TONModuleContext} from './TONModule';
import {TONModule} from './TONModule';

/**
 * JavaScript platform specific configuration
 */
type TONClientPlatform = {
    /**
     * Platform specific `fetch` function
     */
    fetch: any,
    /**
     * Platform specific `WebSocket` implementation
     * This implementation must conforms to W3C WebSocket
     */
    WebSocket: any,
    /**
     * Request creation of the client core
     */
    createLibrary: () => Promise<TONClientLibrary>,
};

/**
 * Main object provided functionality of the TON Client Library
 * Each instance of TONClient has own set of TON Client modules
 * and has own preconfigured client context
 */
export class TONClient implements TONModuleContext, ITONClient {
    static setLibrary(clientPlatform: TONClientPlatform) {
        TONClient.clientPlatform = clientPlatform;
    }


    // Public
    config: TONConfigModule;
    crypto: TONCrypto;
    contracts: TONContracts;
    queries: TONQueries;
    _queries: TONQueriesModule;

    constructor() {
        this.modules = new Map();
        this.config = this.getModule(TONConfigModule);
        this.crypto = this.getModule(TONCryptoModule);
        this.contracts = this.getModule(TONContractsModule);
        this._queries = this.getModule(TONQueriesModule);
        this.queries = this._queries;
    }

    /**
     * Convenient way to create configured instance of the TON Client
     * @param {TONConfigData} config
     * @return {Promise<TONClient>}
     */
    static async create(config: TONConfigData): Promise<TONClient> {
        const client = new TONClient();
        client.config.setData(config);
        await client.setup();
        return client;
    }

    /**
     * Set up the client instance
     * @return {Promise<void>}
     */
    async setup(): Promise<void> {
        if (!TONClient.core) {
            if (!TONClient.clientPlatform) {
                return;
            }
            TONClient.core = await TONClient.clientPlatform.createLibrary();
        }
        const modules: TONModule[] = [...this.modules.values()];
        for (const module of modules) {
            await module.setup();
        }
    }

    /**
     * Tear down this client instance.
     * Note that after you have called this method all future use of this instance will fail
     * @return {Promise<void>}
     */
    async close(): Promise<void> {
        await this.queries.close();
    }

    // TONModuleContext

    getCore(): ?TONClientLibrary {
        return TONClient.core;
    }

    getModule<T>(ModuleClass: typeof TONModule): T {
        const name = ModuleClass.moduleName;
        const existingModule = this.modules.get(name);
        if (existingModule) {
            return (existingModule: any);
        }
        const module = new ModuleClass(this);
        this.modules.set(name, module);
        return (module: any);
    }

    serverTimeDelta(): Promise<number> {
        return this._queries.serverTimeDelta();
    }

    serverNow(): Promise<number> {
        return this._queries.serverNow();
    }

    async getManagementAccessKey(): Promise<string> {
        const result = await this._queries.query('query{getManagementAccessKey}');
        return result.data.getManagementAccessKey;
    }


    async _resolveSignedManagementAccessKey(params: TONAccessKeysManagementParams): Promise<string> {
        if (params.signedManagementAccessKey) {
            return params.signedManagementAccessKey;
        }
        const signKeys = params.accountKeys;
        if (signKeys) {
            const managementAccessKey = await this.getManagementAccessKey();
            return this.crypto.naclSign(
                { text: managementAccessKey },
                `${signKeys.secret}${signKeys.public}`,
                'Hex');
        }
        return '';
    }

    async registerAccessKeys(
        params: TONRegisterAccessKeysParams
    ): Promise<number> {
        const signedManagementAccessKey = await this._resolveSignedManagementAccessKey(params);
        const result = await this._queries.mutation(
            `mutation registerAccessKeys($account: String, $keys: [AccessKey], $signedManagementAccessKey: String) {
                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)
                }`, {
                account: params.account,
                keys: params.keys,
                signedManagementAccessKey,
            });
        return result.data.registerAccessKeys;
    }

    async revokeAccessKeys(
        params: TONRevokeAccessKeysParams
    ): Promise<number> {
        const signedManagementAccessKey = await this._resolveSignedManagementAccessKey(params);
        const result = await this._queries.mutation(
            `mutation revokeAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {
                    revokeAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)
                }`, {
                account: params.account,
                keys: params.keys,
                signedManagementAccessKey,
            });
        return result.data.revokeAccessKeys;
    }

    async trace<T>(
        name: string,
        f: (span: Span) => Promise<T>,
        parentSpan?: (Span | SpanContext)
    ): Promise<T> {
        const span = this.config.tracer.startSpan(name, { childOf: parentSpan });
        try {
            span.setTag(Tags.SPAN_KIND, 'client');
            const result = await f(span);
            if (result !== undefined) {
                span.setTag('result', result);
            }
            span.finish();
            return result;
        } catch (error) {
            span.log({ event: 'failed', payload: error });
            span.finish();
            throw error;
        }
    }

    // Internals

    static clientPlatform: ?TONClientPlatform = null;
    static core: ?TONClientLibrary = null;

    modules: Map<string, TONModule>;
}


export const TONErrorSource = {
    CLIENT: 'client',
    NODE: 'node'
};

export const TONErrorCode = {
    CLIENT_DOES_NOT_CONFIGURED: 1000,
    SEND_NODE_REQUEST_FAILED: 1001,
    MESSAGE_ALREADY_EXPIRED: 1001,
    RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
    WAIT_FOR_TIMEOUT: 1003,
    INTERNAL_ERROR: 1004,
    QUERY_FAILED: 1005,
    MESSAGE_EXPIRED: 1006,
    SERVER_DOESNT_SUPPORT_AGGREGATIONS: 1007,
    INVALID_CONS: 1008,
    ADDRESS_REQUIRED_FOR_RUN_LOCAL: 1009,
    NETWORK_SILENT: 1010,
    TRANSACTION_LAG: 1011,
    TRANSACTION_WAIT_TIMEOUT: 1012,
    CLOCK_OUT_OF_SYNC: 1013,
    ACCOUNT_MISSING: 1014,
    ACCOUNT_CODE_MISSING: 1015,
    ACCOUNT_BALANCE_TOO_LOW: 1016,
    ACCOUNT_FROZEN_OR_DELETED: 1017,

    CONTRACT_EXECUTION_FAILED: 3025,

};

export const TONContractExitCode = {
    REPLAY_PROTECTION: 52,
    MESSAGE_EXPIRED: 57,
    NO_GAS: 13,
}

export class TONClientError {
    static source = TONErrorSource;
    static code = TONErrorCode;

    message: string;
    source: string;
    code: number;
    data: any;

    constructor(message: string, code: number, source: string, data?: any) {
        this.message = message;
        this.code = code;
        this.source = source;
        this.data = data;
    }

    static isClientError(error: any, code: number): boolean {
        return (error.source === TONClientError.source.CLIENT)
            && (error.code === code);
    }

    static isNodeError(error: any, code: number): boolean {
        return (error.source === TONClientError.source.NODE)
            && (error.code === code);
    }

    static isContractError(error: any, exitCode: number): boolean {
        return (error.source === TONClientError.source.NODE)
            && (error.code === TONClientError.code.CONTRACT_EXECUTION_FAILED)
            && (error.data && error.data.exit_code === exitCode);
    }

    static internalError(message: string): TONClientError {
        return new TONClientError(
            `Internal error: ${message}`,
            TONClientError.code.INTERNAL_ERROR,
            TONClientError.source.CLIENT,
        );
    }

    static invalidCons(): TONClientError {
        return new TONClientError(
            'Invalid CONS structure. Each CONS item must contains of two elements.',
            TONClientError.code.INVALID_CONS,
            TONClientError.source.CLIENT,
        );
    }

    static clientDoesNotConfigured(): TONClientError {
        return new TONClientError(
            'TON Client does not configured',
            TONClientError.code.CLIENT_DOES_NOT_CONFIGURED,
            TONClientError.source.CLIENT,
        );
    }

    static sendNodeRequestFailed(responseText: string): TONClientError {
        return new TONClientError(
            `Send node request failed: ${responseText}`,
            TONClientError.code.SEND_NODE_REQUEST_FAILED,
            TONClientError.source.CLIENT,
        );
    }

    static runLocalAccountDoesNotExists(functionName: string, address: string): TONClientError {
        return new TONClientError(
            `[${functionName}] run local failed: account [${address}] does not exists`,
            TONClientError.code.RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS,
            TONClientError.source.CLIENT,
        );
    }

    static waitForTimeout() {
        return new TONClientError(
            'Wait for operation rejected on timeout',
            TONClientError.code.WAIT_FOR_TIMEOUT,
            TONClientError.source.CLIENT,
        );
    }

    static queryFailed(errors: Error[]) {
        return new TONClientError(
            `Query failed: ${errors.map(x => x.message || x.toString()).join('\n')}`,
            TONClientError.code.QUERY_FAILED,
            TONClientError.source.CLIENT,
        );
    }

    static formatTime(time: ?number): ?string {
        if (time) {
            return `${new Date(time * 1000).toISOString()} (${time})`;
        } else {
            return null;
        }
    }

    static messageExpired(data: { msgId: string, sendTime: number, expire: ?number, blockTime: ?number }) {
        return new TONClientError(
            'Message expired',
            TONClientError.code.MESSAGE_EXPIRED,
            TONClientError.source.CLIENT,
            {
                messageId: data.msgId,
                sendTime: TONClientError.formatTime(data.sendTime),
                expirationTime: TONClientError.formatTime(data.expire),
                blockTime: TONClientError.formatTime(data.blockTime),
            }
        );
    }

    static serverDoesntSupportAggregations() {
        return new TONClientError(
            'Server doesn\'t support aggregations',
            TONClientError.code.SERVER_DOESNT_SUPPORT_AGGREGATIONS,
            TONClientError.source.CLIENT,
        );
    }

    static addressRequiredForRunLocal() {
        return new TONClientError(
            `Address required for run local. You haven't specified contract code or data so address is required to load missing parts from network.`,
            TONClientError.code.ADDRESS_REQUIRED_FOR_RUN_LOCAL,
            TONClientError.source.CLIENT,
        );
    }

    static networkSilent(data: { msgId: string, sendTime: number, expire: number, timeout: number }) {
        return new TONClientError(
            'Network silent: no blocks produced during timeout.',
            TONClientError.code.NETWORK_SILENT,
            TONClientError.source.CLIENT,
            {
                messageId: data.msgId,
                sendTime: TONClientError.formatTime(data.sendTime),
                expirationTime: TONClientError.formatTime(data.expire),
                timeout: data.timeout,
            }
        );
    }

    static transactionLag(data: { msgId: string, blockId: string, transactionId: string, timeout: number }) {
        return new TONClientError(
            'Existing block transaction not found.',
            TONClientError.code.TRANSACTION_LAG,
            TONClientError.source.CLIENT,
            {
                messageId: data.msgId,
                blockId: data.blockId,
                transactionId: data.transactionId,
                timeout: data.timeout,
            }
        );
    }

    static transactionWaitTimeout(data: { msgId: string, sendTime: number, timeout: number }) {
        return new TONClientError(
            'Transaction did not produced during specified timeout',
            TONClientError.code.TRANSACTION_WAIT_TIMEOUT,
            TONClientError.source.CLIENT,
            {
                messageId: data.msgId,
                sendTime: TONClientError.formatTime(data.sendTime),
                timeout: data.timeout,
            }
        );
    }

    static clockOutOfSync() {
        return new TONClientError(
            'You local clock is out of sync with the server time. ' +
            'It is a critical condition for sending messages to the blockchain. ' +
            'Please sync you clock with the internet time.',
            TONClientError.code.CLOCK_OUT_OF_SYNC,
            TONClientError.source.CLIENT,
        );
    }

    static accountMissing(address: string) {
        return new TONClientError(
            `Account with address [${address}] doesn't exists. ` +
            'You have to prepaid this account to have a positive balance on them and then deploy a contract code for this account.' +
            'See SDK documentation for detailed instructions.',
            TONClientError.code.ACCOUNT_MISSING,
            TONClientError.source.CLIENT,
        );
    }

    static accountCodeMissing(address: string, balance: string) {
        return new TONClientError(
            `Account with address [${address}] exists but haven't a contract code yet. ` +
            'You have to ensure that an account has an enough balance for deploying a contract code and then deploy a contract code for this account. ' +
            `Current account balance is [${balance}]. ` +
            'See SDK documentation for detailed instructions.',
            TONClientError.code.ACCOUNT_CODE_MISSING,
            TONClientError.source.CLIENT,
        );
    }

    static accountBalanceTooLow(address: string, balance: string) {
        return new TONClientError(
            `Account with address [${address}] has too low balance [${balance}]. ` +
            'You have to send some value to account balance from other contract (e.g. Wallet contract). ' +
            'See SDK documentation for detailed instructions.',
            TONClientError.code.ACCOUNT_BALANCE_TOO_LOW,
            TONClientError.source.CLIENT,
        );
    }

    static isMessageExpired(error: any): boolean {
        return TONClientError.isClientError(error, TONClientError.code.MESSAGE_EXPIRED);
    }

    static isWaitForTimeout(error: any): boolean {
        return TONClientError.isClientError(error, TONClientError.code.WAIT_FOR_TIMEOUT);
    }
}
