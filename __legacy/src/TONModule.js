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
/* eslint-disable class-methods-use-this, no-use-before-define, no-undef */

// Deprecated: TONClientCore v0.17.0
import { Span, SpanContext } from 'opentracing';
import { TONClientError } from './TONClientError';
import type { TONErrorData } from './TONClientError';

/**
 * TONClientCoreBridge
 * Minimalistic legacy interface to core library.
 * Old style cores did provide only this API.
 * For new style cores TONClient creates context bound wrapper with this interface.
 */
export interface TONClientCoreBridge {
    /**
     * Backward compatibility
     * @param method
     * @param paramsJson
     * @param onResult
     */
    request(
        method: string,
        paramsJson: string,
        onResult: (resultJson: string, errorJson: string) => void,
    ): void;
}

/**
 * TON Client Core API
 * Client Core performs client tasks through single JSON-based tunneling method called `coreRequest`
 * Every core request can be performed in two ways:
 * - async request with `coreRequest` method
 * Client is a stateful object. Each client state called a `context`.
 * So you must use following rules when working with a core:
 * - create a context object and receive context handle with `coreCreateContext`
 * - configure `context` with `config` invocation method
 * - pass context handle to `coreRequest`
 * - when you don't need context you must destroy it with `coreDestroyContext`
 */
export interface TONClientCoreLibrary extends TONClientCoreBridge {
    /**
     * Create new context and returns handle to it
     * @param {function} onContext
     */
    coreCreateContext(onContext: (context: number) => void): void;

    /**
     * Destroy context with specified handle
     * @param context
     * @param onComplete
     */
    coreDestroyContext(context: number, onComplete: () => void): void;

    /**
     * Post async request to core
     * @param {number} context
     * @param {string} method
     * @param {string} paramsJson
     * @param {function} onResult
     */
    coreRequest(
        context: number,
        method: string,
        paramsJson: string,
        onResult: (resultJson: string, errorJson: string) => void,
    ): void;
}

/**
 * Context in which modules are working
 * All module instances are bound to single context
 * and can communicate with sibling modules.
 * Context provides bounded modules with:
 * - access to common client core and preconfigured core context
 * - access to sibling modules (using a module class as an id)
 */
export interface TONModuleContext {
    getCoreBridge(): Promise<?TONClientCoreBridge>,

    completeErrorData(data?: { [string]: any }): Promise<TONErrorData>,

    getModule<T>(ModuleClass: typeof TONModule): T,

    serverTimeDelta(): Promise<number>,

    serverNow(): Promise<number>,

    startRootSpan(traceId: string, spanId: string, name: string): Span,

    trace<T>(
        name: string,
        f: (span: Span) => Promise<T>,
        parentSpan?: (Span | SpanContext),
    ): Promise<T>,
}

/**
 * TON Client module
 * Each module must provides a common constructor and a `setup` method.
 * Also each specific module provides specific set of methods.
 */
export class TONModule {
    static moduleName: string;

    /**
     * Context to which this module is bound
     */
    context: TONModuleContext;

    /**
     * Initialize module instance.
     * Note that module must not gets references to other modules here
     * (for this purpose there is a `setup` method).
     *
     * @param context
     */
    constructor(context: TONModuleContext) {
        this.context = context;
    }

    // Module

    /**
     * Performs necessary setup of this module.
     * The method is a safe place to get a references to other modules from the `context`.
     * @return {Promise<void>}
     */
    // eslint-disable-next-line no-empty-function
    async setup() {
    }

    async completeErrorData(data?: { [string]: any }): Promise<TONErrorData> {
        return this.context.completeErrorData(data);
    }

    /**
     * Requests a core for specified method and parameters.
     * @param {string} method Method name
     * @param {Object} params Method parameters will be stringified into JSON
     * @return {Promise<Object>}
     */
    async requestCore<Params, Result>(method: string, params?: Params): Promise<Result> {
        const coreBridge = await this.context.getCoreBridge();
        if (!coreBridge) {
            throw TONClientError.clientIsNotSetup();
        }
        return new Promise((resolve: (Result) => void, reject: (Error) => void) => {
            coreBridge.request(
                method,
                params !== undefined ? (JSON.stringify(params) || '') : '',
                (resultJson, errorJson) => {
                    if (errorJson) {
                        reject(JSON.parse(errorJson));
                    } else if (resultJson) {
                        resolve(JSON.parse(resultJson));
                    } else {
                        resolve(({}: any));
                    }
                },
            );
        });
    }
}
