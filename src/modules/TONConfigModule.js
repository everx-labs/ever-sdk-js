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
import { TONModule } from '../TONModule';

export type TONConfigData = {
    defaultWorkchain: ?number,
    servers: string[],
    requestsServer?: string,
    queriesServer?: string,
    queriesWsServer?: string,
    log_verbose?: boolean,
}

type URLParts = {
    protocol: string,
    host: string,
    path: string,
    query: string
}

function parseUrl(url: string): URLParts {
    const protocolSeparatorPos = url.indexOf('://');
    const protocolEnd = protocolSeparatorPos >= 0 ? protocolSeparatorPos + 3 : 0;
    const questionPos = url.indexOf('?', protocolEnd);
    const queryStart = questionPos >= 0 ? questionPos + 1 : url.length;
    const pathEnd = questionPos >= 0 ? questionPos : url.length;
    const pathSeparatorPos = url.indexOf('/', protocolEnd);
    const pathStart = pathSeparatorPos >= 0
        ? (pathSeparatorPos < pathEnd ? pathSeparatorPos : pathEnd)
        : (questionPos >= 0 ? questionPos : url.length);
    return {
        protocol: url.substring(0, protocolEnd),
        host: url.substring(protocolEnd, pathStart),
        path: url.substring(pathStart, pathEnd),
        query: url.substring(queryStart),
    }
}

function combineUrl(parts: URLParts): string {
    let path = parts.path;
    while (path.indexOf('//') >= 0) {
        path = path.replace('//', '/');
    }
    if (path !== '' && !path.startsWith('/')) {
        path = `/${path}`;
    }
    return `${parts.protocol}${parts.host}${path}${parts.query !== '' ? '?' : ''}${parts.query}`;
}

function fixUrl(url, fixParts) {
    let parts = parseUrl(url);
    fixParts(parts);
    return combineUrl(parts);
}


function resolveServer(configured?: string, def: string): string {
    return fixUrl(configured || def, (parts) => {
        if (parts.protocol === '') {
            parts.protocol = 'https://';
        }
    });
}

function replacePrefix(s, prefix, newPrefix) {
    return `${newPrefix}${s.substr(prefix.length)}`;
}

function appendPath(url, path) {
    return fixUrl(url, (parts) => {
        parts.path = `${parts.path}/${path}`;
    });
}

const defaultServer = 'services.tonlabs.io';

export default class TONConfigModule extends TONModule {
    data: ?TONConfigData;


    setData(data: TONConfigData) {

        this.data = data || {
            servers: [defaultServer],
        };
        let server = resolveServer(data.servers[0], defaultServer);
        this._requestsUrl = resolveServer(data.requestsServer, appendPath(server, '/topics/requests'));
        this._queriesHttpUrl = resolveServer(data.queriesServer, appendPath(server, '/graphql'));
        const queriesWsServer = this._queriesHttpUrl.startsWith('https://')
            ? replacePrefix(this._queriesHttpUrl, "https://", "wss://")
            : replacePrefix(this._queriesHttpUrl, "http://", "ws://");

        this._queriesWsUrl = resolveServer(data.queriesWsServer, queriesWsServer);
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
        return this.requestLibrary('version');
    }


    async setup(): Promise<void> {
        if (this.data) {
            await this.requestLibrary('setup', this.data);
        }
    }

    _requestsUrl: string;
    _queriesHttpUrl: string;
    _queriesWsUrl: string;
}

TONConfigModule.moduleName = 'TONConfigModule';
