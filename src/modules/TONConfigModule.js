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
import type { TONConfigData } from "../../types";
import type { TONModuleContext } from "../TONModule";
import { TONModule } from '../TONModule';
import { Tracer } from 'opentracing';
import { tracer as noopTracer } from "opentracing/lib/noop";

const MAX_MESSAGE_TIMEOUT = 5 * 60000;
const DEFAULT_MESSAGE_RETRIES_COUNT = 10;
const DEFAULT_MESSAGE_EXPIRATION_TIMEOUT = 10000;
const DEFAULT_MESSAGE_EXPIRATION_GROW_FACTOR = 1.5;
const DEFAULT_MESSAGE_PROCESSING_TIMEOUT = 40000;
const DEFAULT_MESSAGE_PROCESSING_GROW_FACTOR = 1.5;
const DEFAULT_WAIT_FOR_TIMEOUT = 40000;

export class URLParts {
    static parse(url: string): URLParts {
        const protocolSeparatorPos = url.indexOf('://');
        const protocolEnd = protocolSeparatorPos >= 0 ? protocolSeparatorPos + 3 : 0;
        const questionPos = url.indexOf('?', protocolEnd);
        const queryStart = questionPos >= 0 ? questionPos + 1 : url.length;
        const pathEnd = questionPos >= 0 ? questionPos : url.length;
        const pathSeparatorPos = url.indexOf('/', protocolEnd);
        // eslint-disable-next-line no-nested-ternary
        const pathStart = pathSeparatorPos >= 0
            ? (pathSeparatorPos < pathEnd ? pathSeparatorPos : pathEnd)
            : (questionPos >= 0 ? questionPos : url.length);
        return new URLParts(
            url.substring(0, protocolEnd),
            url.substring(protocolEnd, pathStart),
            url.substring(pathStart, pathEnd),
            url.substring(queryStart),
        );
    }

    static resolveUrl(baseUrl: string, url: string): string {
        const baseParts = URLParts.parse(baseUrl);
        return URLParts.parse(url)
            .fixProtocol(x => x || baseParts.protocol)
            .fixHost(x => x || baseParts.host)
            .toString();
    }

    fixProtocol(fix: (p: string) => string): URLParts {
        this.protocol = fix(this.protocol);
        return this;
    }

    fixHost(fix: (p: string) => string): URLParts {
        this.host = fix(this.host);
        return this;
    }

    fixPath(fix: (p: string) => string): URLParts {
        this.path = fix(this.path);
        return this;
    }

    fixQuery(fix: (q: string) => string): URLParts {
        this.query = fix(this.query);
        return this;
    }


    protocol: string;

    host: string;

    path: string;

    query: string;

    constructor(protocol: string, host: string, path: string, query: string) {
        this.protocol = protocol;
        this.host = host;
        this.path = path;
        this.query = query;
    }


    toString(): string {
        let { path } = this;
        while (path.indexOf('//') >= 0) {
            path = path.replace('//', '/');
        }
        if (path !== '' && !path.startsWith('/')) {
            path = `/${path}`;
        }
        return `${this.protocol}${this.host}${path}${this.query !== '' ? '?' : ''}${this.query}`;
    }
}

function resolveTimeout(
    timeout?: number,
    defaultTimeout: number,
    growFactor?: number,
    defaultGrowFactor: number,
    retryIndex?: number,
): number {
    const resolvedTimeout = timeout === 0 ? 0 : (timeout || defaultTimeout);
    const resolvedGrowFactor = growFactor || defaultGrowFactor;
    return Math.min(
        MAX_MESSAGE_TIMEOUT,
        resolvedTimeout * Math.pow(resolvedGrowFactor, retryIndex || 0)
    );
}

const defaultServer = 'http://localhost';

export default class TONConfigModule extends TONModule {
    data: TONConfigData;
    tracer: Tracer;

    constructor(context: TONModuleContext) {
        super(context);
        this.data = {
            servers: [defaultServer],
        }
    }

    setData(data: TONConfigData) {
        this.data = data || this.data;
        if (this.data.servers.length === 0) {
            this.data.servers.push(defaultServer);
        }
        this.tracer = data.tracer || noopTracer;
    }


    messageRetriesCount(): number {
        return this.data.messageRetriesCount || DEFAULT_MESSAGE_RETRIES_COUNT;
    }

    messageExpirationTimeout(retryIndex?: number): number {
        return resolveTimeout(
            this.data.messageExpirationTimeout,
            DEFAULT_MESSAGE_EXPIRATION_TIMEOUT,
            this.data.messageExpirationTimeoutGrowFactor,
            DEFAULT_MESSAGE_EXPIRATION_GROW_FACTOR,
            retryIndex,
        );
    }

    messageProcessingTimeout(retryIndex?: number): number {
        return resolveTimeout(
            this.data.messageProcessingTimeout,
            DEFAULT_MESSAGE_PROCESSING_TIMEOUT,
            this.data.messageProcessingTimeoutGrowFactor,
            DEFAULT_MESSAGE_PROCESSING_GROW_FACTOR,
            retryIndex,
        );
    }

    waitForTimeout(): number {
        return this.data.waitForTimeout || DEFAULT_WAIT_FOR_TIMEOUT;
    }

    log(...args: any[]) {
        const profile = (this._profileStart || 0) !== 0;
        if (profile) {
            const current = Date.now() / 1000;
            const timeString = `${String(current.toFixed(3))} ${
                String((current - this._profileStart).toFixed(3))} ${
                String((current - this._profilePrev).toFixed(3))}`;
            if (this._logVerbose) {
                console.log(`[${timeString}]\n`, ...args);
            } else {
                console.log(`[${timeString}]\n`, args[0]);
            }
            this._profilePrev = current;
        } else if (this._logVerbose) {
            console.log(`[${Date.now() / 1000}]`, ...args);
        }
    }

    startProfile() {
        this._profileStart = Date.now() / 1000;
        this._profilePrev = this._profileStart;
    }

    stopProfile() {
        this._profileStart = this._profilePrev = 0;
    }

    async getVersion(): Promise<string> {
        return this.requestCore('version');
    }


    async setup(): Promise<void> {
        if (this.data) {
            const coreConfig = Object.assign({}, this.data);
            delete coreConfig.tracer;
            await this.requestCore('setup', coreConfig);
        }
        this._logVerbose = this.data.log_verbose || false;
        if (this._logVerbose) {
            this.startProfile();
        }
    }

    _logVerbose: boolean;

    _profileStart: number;

    _profilePrev: number;
}

TONConfigModule.moduleName = 'TONConfigModule';
