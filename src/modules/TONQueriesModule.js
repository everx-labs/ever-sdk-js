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

    async query(ql: string, variables: { [string]: any } = {}): Promise<any> {
        const mutation = gql([ql]);
        return this.graphQl(client => client.mutate({
            mutation,
            variables,
        }));
    }

    async graphQl(request: (client: ApolloClient) => Promise<any>): Promise<any> {
        const client = await this.ensureClient();
        try {
            return request(client);
        } catch (error) {
            const errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;
            if (errors) {
                throw TONClientError.queryFailed(errors);
            } else {
                throw error;
            }
        }
    }

    async ensureClient(): ApolloClient {
        if (this._client) {
            return this._client;
        }
        const { httpUrl, wsUrl, fetch, WebSocket } = await this.getClientConfig();
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
                new HttpLink({
                    uri: httpUrl,
                    fetch,
                }),
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
    }

    async query(filter: any, result: string, orderBy?: OrderBy[], limit?: number, timeout?: number): Promise<any> {
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
            variables.timeout = timeout / 1_000;
        }
        return (await this.module.query(ql, variables)).data[c];
    }

    subscribe(
        filter: any,
        result: string,
        onDocEvent: DocEvent,
        onError?: (err: Error) => void
    ): Subscription {
        const text = `subscription ${this.collectionName}($filter: ${this.typeName}Filter) {
        	${this.collectionName}(filter: $filter) { ${result} }
        }`;
        const query = gql([text]);
        let subscription = null;
        (async () => {
            try {
                const client = await this.module.ensureClient();
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
        const docs = await this.query(filter, result, undefined, undefined, timeout || 40_000);
        if (docs.length > 0) {
            return docs[0];
        }
        throw TONClientError.waitForTimeout();
    }
}

TONQueriesModule.moduleName = 'TONQueriesModule';
