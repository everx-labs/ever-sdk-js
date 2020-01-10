/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the
 * License at:
 *
 * http://www.ton.dev/licenses
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 */
// @flow

import type { TONConfigData } from "./modules/TONConfigModule";
import TONConfigModule from './modules/TONConfigModule';
import TONContractsModule from './modules/TONContractsModule';
import TONCryptoModule from './modules/TONCryptoModule';
/* eslint-disable class-methods-use-this, no-use-before-define */
import TONQueriesModule from "./modules/TONQueriesModule";

import type { TONClientLibrary, TONModuleContext, } from './TONModule';
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
    createLibrary: () => Promise<TONClientLibrary>,
};

/**
 * Main object provided functionality of the TON Client Library
 * Each instance of TONClient has own set of TON Client modules
 * and has own preconfigured client context
 */
export class TONClient implements TONModuleContext {
    static setLibrary(clientPlatform: TONClientPlatform) {
        TONClient.clientPlatform = clientPlatform;
    }


    // Public
    config: TONConfigModule;
    crypto: TONCryptoModule;
    contracts: TONContractsModule;
    queries: TONQueriesModule;

    constructor() {
        this.modules = new Map();
        this.config = this.getModule(TONConfigModule);
        this.crypto = this.getModule(TONCryptoModule);
        this.contracts = this.getModule(TONContractsModule);
        this.queries = this.getModule(TONQueriesModule);
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

    // Internals

    static clientPlatform: ?TONClientPlatform = null;
    static core: ?TONClientLibrary = null;

    modules: Map<string, TONModule>;
}

export class TONClientError {
    static source = {
        CLIENT: 'client',
        NODE: 'node'
    };
    static code = {
        CLIENT_DOES_NOT_CONFIGURED: 1000,
        SEND_NODE_REQUEST_FAILED: 1001,
        RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
        WAIT_FOR_TIMEOUT: 1003,
        INTERNAL_ERROR: 1004,
        QUERY_FAILED: 1005,
    };

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

    static internalError(message: string): TONClientError {
        return new TONClientError(
            `Internal error: ${message}`,
            TONClientError.code.INTERNAL_ERROR,
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
}

