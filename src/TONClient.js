/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */
// @flow

import {
    Tags, Span, SpanContext, FORMAT_TEXT_MAP,
} from 'opentracing';
import type {
    ITONClient,
    TONAccessKeysManagementParams,
    TONConfigData,
    TONContracts,
    TONCrypto, TONMessageProcessingState,
    TONQueries,
    TONRegisterAccessKeysParams,
    TONRevokeAccessKeysParams,
} from '../types';

import TONConfigModule from './modules/TONConfigModule';
import TONContractsModule from './modules/TONContractsModule';
import TONCryptoModule from './modules/TONCryptoModule';
/* eslint-disable class-methods-use-this, no-use-before-define */
import TONQueriesModule from './modules/TONQueriesModule';

import type {
    TONClientCoreLibrary,
    TONClientCoreBridge,
    TONModuleContext, TONClientInfo, TONErrorData,
} from './TONModule';
import { TONModule } from './TONModule';

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
    createLibrary: () => Promise<TONClientCoreLibrary>,
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
    _context: number;
    _coreBridge: ?TONClientCoreBridge;

    constructor() {
        this.modules = new Map();
        this.config = this.getModule(TONConfigModule);
        this.crypto = this.getModule(TONCryptoModule);
        this.contracts = this.getModule(TONContractsModule);
        this._queries = this.getModule(TONQueriesModule);
        this.queries = this._queries;
        this._context = 0;
        this._coreBridge = null;
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
        await this.getCoreBridge();
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
        const library = TONClient.coreLibrary;
        if (this._context > 0 && library !== null && library !== undefined) {
            const context = this._context;
            this._coreBridge = null;
            this._context = 0;
            await new Promise(resolve => library.coreDestroyContext(context, resolve));
        }
    }

    // TONModuleContext

    async completeErrorData(data?: { [string]: any }): Promise<TONErrorData> {
        return {
            ...data,
            core_version: await this.config.getVersion(),
            config_server: this.config.getConfigServer(),
            query_url: this._queries.getQueryUrl(),
        };
    }

    async tryCreateLibrary() {
        const platform = TONClient.clientPlatform;
        if (platform === null || platform === undefined) {
            return null;
        }
        TONClient.coreLibrary = await platform.createLibrary();
        return TONClient.coreLibrary;
    }

    async tryCreateCoreBridge() {
        const library = TONClient.coreLibrary || await this.tryCreateLibrary();
        if (!library) {
            return;
        }
        if (library.coreCreateContext) {
            this._context = await new Promise((resolve) => library.coreCreateContext(resolve));
            this._coreBridge = {
                request: (
                    method: string,
                    paramsJson: string,
                    onResult: (resultJson: string, errorJson: string) => void,
                ): void => {
                    if (TONClient.coreLibrary) {
                        TONClient.coreLibrary.coreRequest(
                            this._context,
                            method,
                            paramsJson,
                            onResult,
                        );
                    }
                },
            };
        } else {
            this._coreBridge = library;
        }
    }

    async getCoreBridge(): Promise<?TONClientCoreBridge> {
        if (!this._coreBridge) {
            await this.tryCreateCoreBridge();
        }
        return this._coreBridge;
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


    async _resolveSignedManagementAccessKey(
        params: TONAccessKeysManagementParams,
    ): Promise<string> {
        if (params.signedManagementAccessKey) {
            return params.signedManagementAccessKey;
        }
        const signKeys = params.accountKeys;
        if (signKeys) {
            const managementAccessKey = await this.getManagementAccessKey();
            return this.crypto.naclSign(
                { text: managementAccessKey },
                `${signKeys.secret}${signKeys.public}`,
                'Hex',
            );
        }
        return '';
    }

    async registerAccessKeys(
        params: TONRegisterAccessKeysParams,
    ): Promise<number> {
        const signedManagementAccessKey = await this._resolveSignedManagementAccessKey(params);
        const result = await this._queries.mutation(
            `mutation registerAccessKeys($account: String, $keys: [AccessKey], $signedManagementAccessKey: String) {
                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)
                }`, {
                account: params.account,
                keys: params.keys,
                signedManagementAccessKey,
            },
        );
        return result.data.registerAccessKeys;
    }

    async revokeAccessKeys(
        params: TONRevokeAccessKeysParams,
    ): Promise<number> {
        const signedManagementAccessKey = await this._resolveSignedManagementAccessKey(params);
        const result = await this._queries.mutation(
            `mutation revokeAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {
                    revokeAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)
                }`, {
                account: params.account,
                keys: params.keys,
                signedManagementAccessKey,
            },
        );
        return result.data.revokeAccessKeys;
    }

    startRootSpan(traceId: string, spanId: string, operationName: string): Span {
        const tracer = this.config.tracer;
        let span: ?Span = null;
        if (tracer._startInternalSpan) {
            try {
                const ctx = tracer.extract(FORMAT_TEXT_MAP, {
                    'uber-trace-id': `${traceId}:${spanId}:0:1`,
                });
                if (ctx) {
                    span = this.config.tracer._startInternalSpan(
                        ctx,
                        operationName,
                        Date.now(), // startTime
                        undefined, // userTags
                        {}, // internalTags
                        [], // references
                        false, // hasValidParent
                        false, // isRpcServer
                    );
                }
            } catch {
                // tracer can't create message span using private method,
                // so we are fallback to create span using regular method
            }
        }
        return span || tracer.startSpan(operationName);
    }

    async trace<T>(
        name: string,
        f: (span: Span) => Promise<T>,
        parentSpan?: (Span | SpanContext),
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
            span.log({
                event: 'failed',
                payload: error,
            });
            span.finish();
            throw error;
        }
    }

    // Internals

    static clientPlatform: ?TONClientPlatform = null;
    static coreLibrary: ?TONClientCoreLibrary = null;

    modules: Map<string, TONModule>;
}


export const TONErrorSource = {
    CLIENT: 'client',
    NODE: 'node',
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

    // Contracts

    CONTRACT_EXECUTION_FAILED: 3025,

    // Queries

    QUERY_FORCIBLY_ABORTED: 4005,
};

export const TONContractExitCode = {
    REPLAY_PROTECTION: 52,
    MESSAGE_EXPIRED: 57,
    NO_GAS: 13,
};

export class TONClientError {
    static source = TONErrorSource;
    static code = TONErrorCode;

    message: string;
    source: string;
    code: number;
    data: TONErrorData;

    constructor(
        code: number,
        message: string,
        data: TONErrorData,
        source?: string,
    ) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.source = source || TONErrorSource.CLIENT;
    }

    static isClientError(error: any, code: number): boolean {
        return (error.source === TONErrorSource.CLIENT)
            && (error.code === code);
    }

    static isNodeError(error: any, code: number): boolean {
        return (error.source === TONErrorSource.NODE)
            && (error.code === code);
    }

    static isContractError(error: any, exitCode: number): boolean {
        return (error.source === TONErrorSource.NODE)
            && (error.code === TONErrorCode.CONTRACT_EXECUTION_FAILED)
            && (error.data && error.data.exit_code === exitCode);
    }

    static isOriginalContractError(error: any, exitCode: number): boolean {
        return TONClientError.isContractError(error, exitCode)
            && (!error.data?.original_error);
    }

    static isResolvedContractErrorAfterExpire(error: any, exitCode: number): boolean {
        return TONClientError.isContractError(error, exitCode)
            && (error.data && error.data.original_error
                && TONClientError.isMessageExpired(error.data.original_error));
    }

    static internalError(
        message: string,
        data: TONErrorData,
    ): TONClientError {
        return new TONClientError(
            TONErrorCode.INTERNAL_ERROR,
            `Internal error: ${message}`,
            data,
        );
    }

    static invalidCons(data: TONErrorData): TONClientError {
        return new TONClientError(
            TONErrorCode.INVALID_CONS,
            'Invalid CONS structure. Each CONS item must contains of two elements.',
            data,
        );
    }

    static clientDoesNotConfigured(data: TONErrorData): TONClientError {
        return new TONClientError(
            TONErrorCode.CLIENT_DOES_NOT_CONFIGURED,
            'TON Client isn\'t configured',
            data,
        );
    }

    static sendNodeRequestFailed(
        responseText: string,
        data: TONErrorData,
    ): TONClientError {
        return new TONClientError(
            TONErrorCode.SEND_NODE_REQUEST_FAILED,
            `Send node request failed: ${responseText}`,
            data,
        );
    }

    static runLocalAccountDoesNotExists(
        functionName: string,
        address: string,
        data: TONErrorData,
    ): TONClientError {
        return new TONClientError(
            TONErrorCode.RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS,
            `[${functionName}] run local failed: account [${address}] does not exists`,
            data,
        );
    }

    static waitForTimeout(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.WAIT_FOR_TIMEOUT,
            'Wait for operation rejected on timeout',
            data,
        );
    }

    static queryFailed(
        errors: Error[],
        data: TONErrorData,
    ) {
        return new TONClientError(
            TONErrorCode.QUERY_FAILED,
            `Query failed: ${errors.map(x => x.message || x.toString()).join('\n')}`,
            data,
        );
    }

    static formatTime(time: ?number): ?string {
        if (time) {
            return `${new Date(time * 1000).toISOString()} (${time})`;
        }
        return null;
    }

    static messageExpired(
        data: TONErrorData & {
            message_id: string,
            sending_time: number,
            expire?: number,
            block_time?: number,
            block_id?: string,
        },
    ) {
        return new TONClientError(
            TONErrorCode.MESSAGE_EXPIRED,
            'Message expired',
            {
                ...data,
                sending_time: TONClientError.formatTime(data.sending_time),
                expiration_time: TONClientError.formatTime(data.expire),
                block_time: TONClientError.formatTime(data.block_time),
            },
            TONErrorSource.CLIENT,
        );
    }

    static serverDoesntSupportAggregations(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.SERVER_DOESNT_SUPPORT_AGGREGATIONS,
            'Server doesn\'t support aggregations',
            data,
        );
    }

    static addressRequiredForRunLocal(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.ADDRESS_REQUIRED_FOR_RUN_LOCAL,
            'Address required for run local. You haven\'t specified contract code or data '
            + 'so address is required to load missing parts from network.',
            data,
        );
    }

    static networkSilent(
        data: TONErrorData & {
            message_id: string,
            sending_time: number,
            expire: number,
            timeout: number,
            block_id?: string,
            message_processing_state?: TONMessageProcessingState,
        },
    ) {
        return new TONClientError(
            TONErrorCode.NETWORK_SILENT,
            'Network silent: no blocks produced during timeout.',
            {
                ...data,
                sending_time: TONClientError.formatTime(data.sending_time),
                expiration_time: TONClientError.formatTime(data.expire),
            },
        );
    }

    static transactionWaitTimeout(
        data: TONErrorData & {
            message_id: string,
            sending_time: number,
            timeout: number,
            message_processing_state?: TONMessageProcessingState,
        },
    ) {
        return new TONClientError(
            TONErrorCode.TRANSACTION_WAIT_TIMEOUT,
            'Transaction did not produced during specified timeout',
            {
                ...data,
                sending_time: TONClientError.formatTime(data.sending_time),
            },
        );
    }

    static clockOutOfSync(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.CLOCK_OUT_OF_SYNC,
            'You local clock is out of sync with the server time. '
            + 'It is a critical condition for sending messages to the blockchain. '
            + 'Please sync you clock with the internet time.',
            data,
        );
    }

    static accountMissing(
        address: string,
        data: TONErrorData,
    ) {
        return new TONClientError(
            TONErrorCode.ACCOUNT_MISSING,
            `Account with address [${address}] doesn't exists. `
            + 'You have to prepaid this account to have a positive balance on them and then deploy '
            + 'a contract code for this account.'
            + 'See SDK documentation for detailed instructions.',
            data,
        );
    }

    static accountCodeMissing(
        address: string,
        balance: string,
        data: TONErrorData,
    ) {
        return new TONClientError(
            TONErrorCode.ACCOUNT_CODE_MISSING,
            `Account with address [${address}] exists but haven't a contract code yet. `
            + 'You have to ensure that an account has an enough balance for deploying '
            + 'a contract code and then deploy a contract code for this account. '
            + `Current account balance is [${balance}]. `
            + 'See SDK documentation for detailed instructions.',
            data,
        );
    }

    static accountBalanceTooLow(
        address: string,
        balance: string,
        data: TONErrorData,
    ) {
        return new TONClientError(
            TONErrorCode.ACCOUNT_BALANCE_TOO_LOW,
            `Account with address [${address}] has too low balance [${balance}]. `
            + 'You have to send some value to account balance from other contract '
            + '(e.g. Wallet contract). '
            + 'See SDK documentation for detailed instructions.',
            data,
        );
    }

    static noBlocks(
        workchain: number,
        data: TONErrorData,
    ) {
        const workchainName = workchain === -1 ? 'masterchain' : `workchain ${workchain}`;
        return new TONClientError(
            TONErrorCode.NETWORK_SILENT,
            `"No blocks for ${workchainName} found".`,
            data,
        );
    }

    static invalidBlockchain(
        message: string,
        data: TONErrorData,
    ) {
        return new TONClientError(TONErrorCode.NETWORK_SILENT, message, data);
    }

    static queryForciblyAborted(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.QUERY_FORCIBLY_ABORTED,
            'GraphQL query was forcibly aborted on timeout.',
            data,
        );
    }

    static isMessageExpired(error: any): boolean {
        return TONClientError.isClientError(error, TONErrorCode.MESSAGE_EXPIRED);
    }

    static isWaitForTimeout(error: any): boolean {
        return TONClientError.isClientError(error, TONErrorCode.WAIT_FOR_TIMEOUT);
    }
}
