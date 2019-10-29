/*
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
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

export class TONClientError extends Error {
    static source = {
        CLIENT: 'client',
        NODE: 'node'
    };
    static code = {
        CLIENT_DOES_NOT_CONFIGURED: 1000,
        SEND_NODE_REQUEST_FAILED: 1001,
        RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
        WAIT_FOR_TIMEOUT: 1003,
    };

    source: string;
    code: number;
    data: any;

    constructor(message: string, code: number, source: string, data?: any) {
        super(message);
        this.code = code;
        this.source = source;
        this.data = data;
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
}

class ModuleContext implements TONModuleContext {
    modules: Map<string, TONModule>;


    constructor() {
        this.modules = new Map();
    }

    optionalLibrary(): ?TONClientLibrary {
        return TONClient.library;
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
}


type TONClientPlatform = {
    fetch: any,
    WebSocket: any,
    createLibrary: () => Promise<TONClientLibrary>,
};

export class TONClient {
    static setLibrary(clientPlatform: TONClientPlatform) {
        TONClient.clientPlatform = clientPlatform;
    }


    // Public
    config: TONConfigModule;
    crypto: TONCryptoModule;
    contracts: TONContractsModule;
    queries: TONQueriesModule;


    constructor() {
        this.context = new ModuleContext();
        this.config = this.context.getModule(TONConfigModule);
        this.crypto = this.context.getModule(TONCryptoModule);
        this.contracts = this.context.getModule(TONContractsModule);
        this.queries = this.context.getModule(TONQueriesModule);
    }

    static async create(config: TONConfigData): Promise<TONClient> {
        const client = new TONClient();
        client.config.setData(config);
        await client.setup();
        return client;
    }

    async setup(): Promise<void> {
        if (!TONClient.library) {
            if (!TONClient.clientPlatform) {
                return;
            }
            TONClient.library = await TONClient.clientPlatform.createLibrary();
        }
        const modules: TONModule[] = [...this.context.modules.values()];
        for (const module of modules) {
            await module.setup();
        }
    }

    async close(): Promise<void> {
        await this.queries.close();
    }


    // Modules
    requiredModule<T>(ModuleClass: typeof TONModule): T {
        return this.context.getModule<T>(ModuleClass);
    }


    // Internals
    static clientPlatform: ?TONClientPlatform = null;
    static library: ?TONClientLibrary = null;

    context: ModuleContext;
}
