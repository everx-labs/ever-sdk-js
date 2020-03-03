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
import { TONModule } from '../TONModule';
import { Tracer } from 'opentracing';
import { tracer as noopTracer } from "opentracing/lib/noop";

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
        const parts = URLParts.parse(url);
        parts.protocol = parts.protocol || baseParts.protocol;
        parts.host = parts.host || baseParts.host;
        return parts.toString();
    }

    static fix(url: string, fixParts: (parts: URLParts) => void): string {
        const parts = URLParts.parse(url);
        fixParts(parts);
        return parts.toString();
    }


    static appendPath(url: string, path: string): string {
        return URLParts.fix(url, (parts) => {
            parts.path = `${parts.path}/${path}`;
        });
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

function resolveServer(server: string): string {
    return URLParts.fix(server, (parts) => {
        if (parts.protocol === '') {
            parts.protocol = 'https://';
        }
    });
}

function replacePrefix(s, prefix, newPrefix) {
    return `${newPrefix}${s.substr(prefix.length)}`;
}

const defaultServer = 'http://localhost';

export default class TONConfigModule extends TONModule {
    data: ?TONConfigData;
    tracer: Tracer;


    setData(data: TONConfigData) {
        this.data = data || {
            servers: [defaultServer],
        };
        const server = resolveServer(data.servers[0] || defaultServer);
        this._queriesHttpUrl = resolveServer(URLParts.appendPath(server, '/graphql'));
        const queriesWsServer = this._queriesHttpUrl.startsWith('https://')
            ? replacePrefix(this._queriesHttpUrl, 'https://', 'wss://')
            : replacePrefix(this._queriesHttpUrl, 'http://', 'ws://');

        this._queriesWsUrl = resolveServer(queriesWsServer);
        this.tracer = data.tracer || noopTracer;
    }

    log(...args: any[]) {
        const profile = (this._profileStart || 0) != 0;
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

    queriesHttpUrl(): string {
        return this._queriesHttpUrl;
    }

    queriesWsUrl(): string {
        return this._queriesWsUrl;
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
        this._logVerbose = (this.data && this.data.log_verbose) || false;
        if (this._logVerbose) {
            this.startProfile();
        }
    }

    _logVerbose: boolean;

    _queriesHttpUrl: string;

    _queriesWsUrl: string;

    _profileStart: number;

    _profilePrev: number;
}

TONConfigModule.moduleName = 'TONConfigModule';
