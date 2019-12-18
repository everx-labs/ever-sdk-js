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
import TONConfigModule from './TONConfigModule';

import { setContext } from 'apollo-link-context';
const { Tags, FORMAT_HTTP_HEADERS, FORMAT_TEXT_MAP } = require('opentracing');

type Subscription = {
    unsubscribe: () => void
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

    async getClientConfig(root_span) {
        const span = await this.tracer.startSpan('TONQueriesModule.js:getClientConfig',{
            childOf: await root_span.context()
        });
        await span.setTag(Tags.SPAN_KIND, 'client');
        const config = this.config;
        const { clientPlatform } = TONClient;
        if (!config.data || !clientPlatform) {
            await span.log({
                'event': 'exit function',
                'value': 'throw exception'
            });
            await span.finish();
            throw Error('TON Client does not configured');
        }
        let httpUrl = config.queriesHttpUrl();
        let wsUrl = config.queriesWsUrl();
        const fetch = clientPlatform.fetch;
        const response = await fetch(httpUrl, {
            redirect: 'manual'
        });
        await span.log({
            'event': 'response',
            'value': response
        });
        if (response.status === 308) {
            const location = response.headers.get('Location');
            if (!!location) {
                httpUrl = location;
                wsUrl = location
                    .replace(/^https:\/\//gi, 'wss://')
                    .replace(/^http:\/\//gi, 'ws://');
            }
        }
        await span.finish();
        return {
            httpUrl,
            wsUrl,
            fetch,
            WebSocket: clientPlatform.WebSocket,
        }
    }

    async ensureClient(root_span: any): ApolloClient {
        const cspan = await this.tracer.startSpan('TONQuriesModule.js:ensureClient', {
            childOf: await root_span.context()
        });
        await cspan.setTag(Tags.SPAN_KIND, 'client');
        if (this._client) {
            await cspan.finish();
            return this._client;
        }
        const { httpUrl, wsUrl, fetch, WebSocket } = await this.getClientConfig(cspan);
        const jaegerLink = await setContext((_, req) => {
            req.headers = {};
            this.tracer.inject(cspan, FORMAT_TEXT_MAP, req.headers);
            return {
                headers: req.headers
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
                new WebSocketLink(new SubscriptionClient(
                    wsUrl,
                    {
                        reconnect: true
                    },
                    WebSocket
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
        await cspan.finish();
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
        console.log('This object:', this);
    }

    async query(filter: any, result: string, orderBy?: OrderBy[], limit?: number): Promise<any> {
        const span = await this.tracer.startSpan('TONQueriesModule.js:query');
        await span.setTag(Tags.SPAN_KIND, 'client');
        const c = this.collectionName;
        const t = this.typeName;
        const ql = `query ${c}($filter: ${t}Filter, $orderBy: [QueryOrderBy], $limit: Int) {
            ${c}(filter: $filter, orderBy: $orderBy, limit: $limit) { ${result} }
        }`;
        const query = gql([ql]);
        span.log({
            'event': 'new query',
            'value': query
        });
        const client = await this.module.ensureClient(span);
        try {
            const res = (await client.query({
                query,
                variables: {
                    filter,
                    orderBy,
                    limit
                },
            })).data[c];
            await span.log({
                'event': 'query response',
                'value': res
            });
            await span.setTag(Tags.HTTP_STATUS_CODE, 200)
            await span.finish();
            return res;
        } catch (error) {
            await span.setTag(Tags.ERROR, true)
            await span.finish();
            const errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;
            if (errors) {
                throw TONClientError.queryFailed(errors);
            } else {
                throw error;
            }
        }
    }

    subscribe(
        filter: any,
        result: string,
        onDocEvent: DocEvent,
        onError?: (err: Error) => void
    ): Subscription {
        const span = this.tracer.startSpan('TONQueriesModule.js:subscribe');
        span.setTag(Tags.SPAN_KIND, 'client');
        const text = `subscription ${this.collectionName}($filter: ${this.typeName}Filter) {
        	${this.collectionName}(filter: $filter) { ${result} }
        }`;
        const query = gql([text]);
        let subscription = null;
        (async () => {
            try {
                const client = this.module.ensureClient(span);
                const observable = client.subscribe({
                    query,
                    variables: {
                        filter,
                    },
                });
                subscription = observable.subscribe((message) => {
                    onDocEvent('insert/update', message.data[this.collectionName]);
                });
                span.setTag(Tags.HTTP_STATUS_CODE, 200)
                span.finish();
            } catch (error) {
                span.setTag(Tags.ERROR, true)
                span.finish();
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
                }
            },
        };
    }

    async waitFor(filter: any, result: string, timeout?: number): Promise<any> {
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
    }
}

TONQueriesModule.moduleName = 'TONQueriesModule';
