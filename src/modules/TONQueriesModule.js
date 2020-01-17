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

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { split } from "apollo-link";
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import gql from 'graphql-tag';
import { SubscriptionClient } from "subscriptions-transport-ws";
import { TONClient, TONClientError } from '../TONClient';
import type { TONModuleContext } from '../TONModule';
import { TONModule } from '../TONModule';
import TONConfigModule, { URLParts } from './TONConfigModule';

import { setContext } from 'apollo-link-context';
const { Tags, FORMAT_HTTP_HEADERS, FORMAT_BINARY, FORMAT_TEXT_MAP } = require('opentracing');

type Subscription = {
    unsubscribe: () => void
}

export type Request = {
    id: string,
    body: string,
}

export default class TONQueriesModule extends TONModule {
    config: TONConfigModule;
    overrideWsUrl: ?string;

    constructor(context: TONModuleContext) {
        super(context);
        this._client = null;
        this.overrideWsUrl = null;
    }

    async setup() {
        this.config = this.context.getModule(TONConfigModule);
        this.transactions = new TONQCollection(this, 'transactions');
        this.messages = new TONQCollection(this, 'messages');
        this.blocks = new TONQCollection(this, 'blocks');
        this.accounts = new TONQCollection(this, 'accounts');
        this.tracer = this.config.tracer;
        console.log('Using config:', this.config);
    }

    async getClientConfig() {
        const config = this.config;
        const { clientPlatform } = TONClient;
        if (!config.data || !clientPlatform) {
            throw Error('TON Client does not configured');
        }
        let httpUrl = config.queriesHttpUrl();
        let wsUrl = config.queriesWsUrl();
        const fetch = clientPlatform.fetch;
        const response = await fetch(`${httpUrl}?query=%7Binfo%7Bversion%7D%7D`);
        if (response.redirected) {
            const location = URLParts.fix(response.url, parts => parts.query = '');
            if (!!location) {
                httpUrl = location;
                wsUrl = location
                    .replace(/^https:\/\//gi, 'wss://')
                    .replace(/^http:\/\//gi, 'ws://');
            }
        }
        return {
            httpUrl,
            wsUrl,
            fetch,
            WebSocket: clientPlatform.WebSocket,
        }
    }

    async getAccountsCount(): Promise<number> {
        const result = await this.query('query{getAccountsCount}');
        return result.data.getAccountsCount;
    }

    async getTransactionsCount(): Promise<number> {
        const result = await this.query('query{getTransactionsCount}');
        return result.data.getTransactionsCount;
    }

    async getAccountsTotalBalance(): Promise<string> {
        const result = await this.query('query{getAccountsTotalBalance}');
        return result.data.getAccountsTotalBalance;
    }

    async postRequests(requests: Request[]): Promise<void> {
        return this.mutation(`mutation postRequests($requests: [Request]) {
            postRequests(requests: $requests)
        }`, {
            requests,
        });
    }

    async mutation(ql: string, variables: { [string]: any } = {}): Promise<any> {
        const mutation = gql([ql]);
        return this.graphQl(client => client.mutate({
            mutation,
            variables,
        }));
    }

    async query(ql: string, variables: { [string]: any } = {}, rootSpan: any): Promise<any> {
        const span = await this.tracer.startSpan('TONQueriesModule.js:query', { childOf: await rootSpan.context() });
        const mutation = gql([ql]);
        await span.log({
            event: 'query mutation',
            value: mutation
        });
        const res = this.graphQl(client => client.mutate({
            mutation,
            variables,
        }), span);
        await span.finish();
        return res;
    }

    async graphQl(request: (client: ApolloClient) => Promise<any>, rootSpan: any): Promise<any> {
        const span = await this.tracer.startSpan('TONQueriesModule.js:graphQl', { childOf: await rootSpan.context() });
        const client = await this.ensureClient(span);
        try {
            const r = request(client);
            await span.finish();
            return r;
        } catch (error) {
            const errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;
            if (errors) {
                await span.log({
                    event: 'query failed',
                    value: errors
                });
                await span.finish();
                throw TONClientError.queryFailed(errors);
            } else {
                await span.finish();
                throw error;
            }
        }
    }

    async ensureClient(rootSpan: any): ApolloClient {
        const span = await this.tracer.startSpan('TONQueriesModule.js:ensureClient', { childOf: await rootSpan.context() });
        if (this._client) {
            await span.finish();
            return this._client;
        }

        const { httpUrl, wsUrl, fetch, WebSocket } = await this.getClientConfig();
        const jaegerLink = await setContext((_, req) => {
            req.headers = {};
            this.tracer.inject(span, FORMAT_TEXT_MAP, req.headers);
            return {
                headers: req.headers,
            };
        });
        this._client = new ApolloClient({
            cache: new InMemoryCache({}),
            link: split(
                ({ query }) => {
                    const definition = getMainDefinition(query);
                    return (
                        definition.kind === 'OperationDefinition'
                        && definition.operation === 'subscription'
                    );
                },
                new WebSocketLink(jaegerLink.concat(new SubscriptionClient(
                    wsUrl,
                    {
                        reconnect: true
                    },
                    WebSocket
                ))),
                jaegerLink.concat(new HttpLink({
                    uri: httpUrl,
                    fetch,
                })),
            ),
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'no-cache',
                },
                query: {
                    fetchPolicy: 'no-cache',
                },
            }
        });
        await span.finish();
        return this._client;
    }

    async close() {
        if (this._client) {
            const client = this._client;
            this._client = null;
            client.stop();
            await client.clearStore();
        }
    }

    transactions: TONQCollection;

    messages: TONQCollection;

    blocks: TONQCollection;

    accounts: TONQCollection;

    _client: ApolloClient;
}


type DocEvent = (changeType: string, doc: any) => void;

type OrderBy = {
    path: string,
    direction: 'ASC' | 'DESC'
}

class TONQCollection {
    module: TONQueriesModule;

    collectionName: string;
    typeName: string;

    constructor(module: TONQueriesModule, collectionName: string) {
        this.module = module;
        this.collectionName = collectionName;
        this.typeName = collectionName.substr(0, 1).toUpperCase() +
            collectionName.substr(1, collectionName.length - 2);
        this.tracer = module.config.tracer;
    }

    async query(filter: any, result: string, orderBy?: OrderBy[], limit?: number, timeout?: number): Promise<any> {
        console.log('first query in');
        const span = await this.tracer.startSpan('TONQueriesModule.js:query main');
        await span.setTag(Tags.SPAN_KIND, 'client');

        const c = this.collectionName;
        const t = this.typeName;
        const r = (await this.module.query(
            `query ${c}($filter: ${t}Filter, $orderBy: [QueryOrderBy], $limit: Int, $timeout: Float) {
                    ${c}(filter: $filter, orderBy: $orderBy, limit: $limit, timeout: $timeout) { ${result} }
                }`, {
                filter,
                orderBy,
                limit,
                timeout
            }, span)).data[c];
        await span.finish();
        return r;
    }

    subscribe(
        filter: any,
        result: string,
        onDocEvent: DocEvent,
        onError?: (err: Error) => void
    ): Subscription {
        const span = this.tracer.startSpan('TONQueriesModule.js:subscribe ');
        span.setTag(Tags.SPAN_KIND, 'client');
        const text = `subscription ${this.collectionName}($filter: ${this.typeName}Filter) {
        	${this.collectionName}(filter: $filter) { ${result} }
        }`;
        const query = gql([text]);
        span.log({
            event: 'subscription',
            value: query
        });
        let subscription = null;
        (async () => {
            try {
                const client = await this.module.ensureClient(span);
                const observable = client.subscribe({
                    query,
                    variables: {
                        filter,
                    },
                });
                subscription = observable.subscribe((message) => {
                    onDocEvent('insert/update', message.data[this.collectionName]);
                });
            } catch (error) {
                if (onError) {
                    await span.log({
                        event: 'subscription failed',
                        value: error
                    });
                    onError(error);
                } else {
                    console.error('TON Client subscription error', error);
                }
            }
        })();
        span.finish();
        return {
            unsubscribe: () => {
                if (subscription) {
                    subscription.unsubscribe();
                }
            },
        };
    }

    async waitFor(filter: any, result: string, timeout?: number): Promise<any> {
        const docs = await this.query(filter, result, undefined, undefined, timeout || 5 * 60_000);
        if (docs.length > 0) {
            return docs[0];
        }
        throw TONClientError.waitForTimeout();
        /* TODO: below is a legacy code.
            When new model with server side wait for will have been tested enough we can get rid of this code.
        const config = this.module.config;
        const existing = await this.query(filter, result);
        if (existing.length > 0) {
            return existing[0];
        }
        return new Promise((resolve, reject) => {
            const forceCheckTimeout = 10_000;
            let subscription: any = null;
            let resolved: boolean = false;

            const doResolve = (doc) => {
                if (resolved) {
                    return;
                }
                resolved = true;
                if (subscription) {
                    subscription.unsubscribe();
                    subscription = null;
                }
                if (doc !== null) {
                    resolve(doc);
                } else {
                    reject(TONClientError.waitForTimeout())
                }
            };

            const forceCheck = () => {
                (async () => {
                    if (resolved) {
                        return;
                    }
                    config.log('waitFor.forceCheck', this.collectionName, filter);
                    const existing = await this.query(filter, result);
                    if (existing.length > 0) {
                        doResolve(existing[0]);
                    } else {
                        setTimeout(forceCheck, forceCheckTimeout);
                    }
                })();
            };

            const rejectOnTimeout = () => {
                if (!resolved) {
                    config.log('waitFor rejected on timeout', this.collectionName, filter);
                    doResolve(null);
                }
            };

            subscription = this.subscribe(filter, result, (change, doc) => {
                doResolve(doc);
            });
            setTimeout(forceCheck, forceCheckTimeout);
            if (timeout) {
                setTimeout(rejectOnTimeout, timeout);
            }
        });
         */
    }
}

TONQueriesModule.moduleName = 'TONQueriesModule';
