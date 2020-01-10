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
import { TONModule } from '../TONModule';

export type TONConfigData = {
    defaultWorkchain: ?number,
    servers: string[],
    requestsServer?: string,
    queriesServer?: string,
    queriesWsServer?: string,
    log_verbose?: boolean,
}

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
            url.substring(queryStart)
        )
    }

    static resolveUrl(baseUrl: string, url: string): string {
        const baseParts = URLParts.parse(baseUrl);
        const parts = URLParts.parse(url);
        parts.protocol = parts.protocol || baseParts.protocol;
        parts.host = parts.host || baseParts.host;
        return parts.toString();
    }

    static fix(url: string, fixParts: (parts: URLParts) => void): string {
        let parts = URLParts.parse(url);
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

function resolveServer(configured?: string, def: string): string {
    return URLParts.fix(configured || def, (parts) => {
        if (parts.protocol === '') {
            parts.protocol = 'https://';
        }
    });
}

function replacePrefix(s, prefix, newPrefix) {
    return `${newPrefix}${s.substr(prefix.length)}`;
}

const defaultServer = 'services.tonlabs.io';

export default class TONConfigModule extends TONModule {
    data: ?TONConfigData;


    setData(data: TONConfigData) {

        this.data = data || {
            servers: [defaultServer],
        };
        let server = resolveServer(data.servers[0], defaultServer);
        this._requestsUrl = resolveServer(data.requestsServer, URLParts.appendPath(server, '/topics/requests'));
        this._queriesHttpUrl = resolveServer(data.queriesServer, URLParts.appendPath(server, '/graphql'));
        const queriesWsServer = this._queriesHttpUrl.startsWith('https://')
            ? replacePrefix(this._queriesHttpUrl, "https://", "wss://")
            : replacePrefix(this._queriesHttpUrl, "http://", "ws://");

        this._queriesWsUrl = resolveServer(data.queriesWsServer, queriesWsServer);
    }

    log(...args: any[]) {
        if (this._logVerbose) {
            console.log(`[${Date.now()}]`, ...args);
        }
    }

    requestsUrl(): string {
        return this._requestsUrl;
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
            await this.requestCore('setup', this.data);
        }
        this._logVerbose = (this.data && this.data.log_verbose) || false;
    }

    _logVerbose: boolean;
    _requestsUrl: string;
    _queriesHttpUrl: string;
    _queriesWsUrl: string;
}

TONConfigModule.moduleName = 'TONConfigModule';
