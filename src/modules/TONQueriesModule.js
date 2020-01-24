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
import { JaegerTracer } from 'jaeger-client';
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
            const location = URLParts.fix(response.url, parts => {
                parts.query = ''
            });
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
        const span = await this.config.tracer.startSpan('TONQueriesModule.js:getAccountCount');
        const result = await this.query('query{getAccountsCount}');
        await span.finish();
        return result.data.getAccountsCount;
    }

    async getTransactionsCount(): Promise<number> {
        const span = await this.config.tracer.startSpan('TONQueriesModule.js:getTransactionCount');
        const result = await this.query('query{getTransactionsCount}', span);
        await span.log({
            event: 'query result',
            value: `${result}`
        });
        await span.finish();
        return result.data.getTransactionsCount;
    }

    async getAccountsTotalBalance(): Promise<string> {
        const span = await this.config.tracer.startSpan('TONQueriesModule.js:getAccountsTotalBalance');
        const result = await this.query('query{getAccountsTotalBalance}', span);
        await span.log({
            event: 'query result',
            value: `${result}`
        });
        await span.finish();
        return result.data.getAccountsTotalBalance;
    }

    async postRequests(requests: Request[], rootSpan: any): Promise<void> {
        const span = await this.config.tracer.startSpan('TONQueriesModule.js:postRequests', { childeOf: rootSpan });
        const mut = this.mutation(`mutation postRequests($requests: [Request]) {
            postRequests(requests: $requests)
        }`, {
            requests,
        }, span);
        await span.finish();
        return mut;
    }

    async mutation(ql: string, variables: { [string]: any } = {}, rootSpan: any): Promise<any> {
        const span = await this.config.tracer.startSpan('TONQueriesModule.js:mutation', { childOf: rootSpan });
        const mutation = gql([ql]);
        const result = this.graphQl(client => client.mutate({
            mutation,
            variables,
        }));
        await span.finish();
        return result;
    }

    async query(ql: string, variables: { [string]: any } = {}, rootSpan: any): Promise<any> {
        const span = await this.config.tracer.startSpan('TONQueriesModule.js:query', { childOf: await rootSpan.context() });
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
        const span = await this.config.tracer.startSpan('TONQueriesModule.js:graphQl', { childOf: await rootSpan.context() });
        const client = await this.ensureClient(span);
        try {
            const r = request(client);
            await span.finish();
            return r;
        } catch (error) {
            await span.log({
                event: 'query failed',
                value: `${error.message}`
            });
            const errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;
            if (errors) {
                await span.finish();
                throw TONClientError.queryFailed(errors);
            } else {
                await span.finish();
                throw error;
            }
        }
    }

    async ensureClient(rootSpan: any): ApolloClient {
        if (this._client) {
            return this._client;
        }

        const span = await this.config.tracer.startSpan('TONQueriesModule.js:ensureClient', { childOf: await rootSpan.context() });
        const { httpUrl, wsUrl, fetch, WebSocket } = await this.getClientConfig();
        const jaegerLink = await setContext((_, req) => {
            req.headers = {};
            this.config.tracer.inject(span, FORMAT_TEXT_MAP, req.headers);
            return {
                headers: req.headers,
            };
        });
        let subsOptions = this.config.tracer.inject(span, FORMAT_TEXT_MAP, {});
        await console.log(subsOptions);
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
                new WebSocketLink(new SubscriptionClient(
                    wsUrl,
                    {
                        reconnect: true,
                        connectionParams: () => ({
                            headers: subsOptions,
                        }),
                    },
                    WebSocket,
                )),
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
    tracer: JaegerTracer;

    constructor(module: TONQueriesModule, collectionName: string) {
        this.module = module;
        this.collectionName = collectionName;
        this.typeName = collectionName.substr(0, 1).toUpperCase() +
            collectionName.substr(1, collectionName.length - 2);
        this.tracer = this.module.config.tracer;
    }

    async query(filter: any, result: string, orderBy?: OrderBy[], limit?: number, timeout?: number, rootSpan: any): Promise<any> {
        const span = await this.tracer.startSpan('TONQueriesModule.js:query public',
            {childOf: await rootSpan.context()});
        await span.setTag(Tags.SPAN_KIND, 'client');

        const c = this.collectionName;
        const t = this.typeName;
        const ql = `query ${c}($filter: ${t}Filter, $orderBy: [QueryOrderBy], $limit: Int, $timeout: Float) {
            ${c}(filter: $filter, orderBy: $orderBy, limit: $limit, timeout: $timeout) { ${result} }
        }`;
        const variables: { [string]: any } = {
            filter,
            orderBy,
            limit,
        };
        if (timeout) {
            variables.timeout = timeout;
        }
        const r = (await this.module.query(ql, variables, span)).data[c];
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
                await span.log({
                    event: 'subscription failed',
                    value: error
                });
                if (onError) {
                    onError(error);
                } else {
                    console.error('TON Client subscription error', error);
                }
            }
        })();
        return {
            unsubscribe: () => {
                if (subscription) {
                    subscription.unsubscribe();
                    span.finish();
                }
            },
        };
    }

    async waitFor(filter: any, result: string, timeout?: number): Promise<any> {
        const span = await this.tracer.startSpan('TONQueriesModule.js:waitFor');
        await span.log({
            event: 'waitFor',
            value: `Filter: ${filter} \n Timeout: ${timeout !== undefined ? timeout : 'undefined'}`
        });
        const docs = await this.query(filter, result, undefined, undefined, timeout || 40_000, span);
        if (docs.length > 0) {
            await span.log({
                event: 'waitFor exit',
                value: `Docs.length - ${docs.length}`
            });
            await span.finish();
            return docs[0];
        }
        await span.log({
            event: 'waitFor timeout',
            value: 'exception'
        });
        await span.finish();
        throw TONClientError.waitForTimeout();
    }
}

TONQueriesModule.moduleName = 'TONQueriesModule';
