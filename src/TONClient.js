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
    TONCrypto,
    TONQueries,
    TONRegisterAccessKeysParams,
    TONRevokeAccessKeysParams,
} from '../types';

import TONConfigModule from './modules/TONConfigModule';
import TONContractsModule from './modules/TONContractsModule';
import TONCryptoModule from './modules/TONCryptoModule';
/* eslint-disable class-methods-use-this, no-use-before-define */
import TONQueriesModule from './modules/TONQueriesModule';
import type { TONErrorData } from './TONClientError';

import type {
    TONClientCoreLibrary,
    TONClientCoreBridge,
    TONModuleContext,
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
