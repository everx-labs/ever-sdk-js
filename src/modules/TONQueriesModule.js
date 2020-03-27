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
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import gql from 'graphql-tag';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { setContext } from 'apollo-link-context';
import {
    FORMAT_TEXT_MAP, Tags, Span, SpanContext,
} from 'opentracing';
import type {
    TONQueries,
    TONQCollection,
    Subscription,
    TONQueryParams,
    TONSubscribeParams,
    TONWaitForParams,
} from '../../types';
import { TONClient, TONClientError } from '../TONClient';
import type { TONModuleContext } from '../TONModule';
import { TONModule } from '../TONModule';
import TONConfigModule, { URLParts } from './TONConfigModule';


export type Request = {
    id: string,
    body: string,
}

export type ServerInfo = {
    version: number,
    supportsOperationId: boolean,
};

export const MAX_TIMEOUT = 2147483647;

function resolveParams<T>(args: any[], requiredParamName: string, resolveArgs: () => T): T {
    return (args.length === 1) && (requiredParamName in args[0]) ? args[0] : resolveArgs();
}

type MulticastListener<Value> = {
    resolve: (value: Value) => void;
    reject: (error: Error) => void;
};

class MulticastPromise<Value> {
    listeners: MulticastListener<Value>[];
    onComplete: ?(() => void);

    constructor() {
        this.listeners = [];
        this.onComplete = null;
    }

    listen(): Promise<Value> {
        const listener: MulticastListener<Value> = {
            resolve: () => {
            },
            reject: () => {
            },
        };
        this.listeners.push(listener);
        return new Promise((resolve, reject) => {
            listener.resolve = resolve;
            listener.reject = reject;
        });
    }

    resolve(value: Value) {
        this.complete(listener => listener.resolve(value));
    }

    reject(error: Error) {
        this.complete(listener => listener.reject(error));
    }

    complete(completeListener: (listener: MulticastListener<Value>) => void) {
        const { listeners } = this;
        this.listeners = [];
        if (this.onComplete) {
            this.onComplete();
        }
        listeners.forEach(listener => completeListener(listener));
    }
}

function versionToNumber(s: string): number {
    const parts = `${s || ''}`.split('.')
        .map(x => Number(x))
        .slice(0, 3);
    while (parts.length < 3) {
        parts.push(0);
    }
    return parts[0] * 1000000 + parts[1] * 1000 + parts[2];
}

function resolveServerInfo(versionString: string | null | typeof undefined): ServerInfo {
    const version = versionToNumber(versionString || '0.24.4');
    return {
        version,
        supportsOperationId: version > 24004,
    };
}

export default class TONQueriesModule extends TONModule implements TONQueries {
    config: TONConfigModule;

    overrideWsUrl: ?string;
    graphqlClientCreation: ?MulticastPromise<ApolloClient>;
    operationIdPrefix: string;
    operationIdSuffix: number;
    serverInfo: ServerInfo;

    constructor(context: TONModuleContext) {
        super(context);
        this.graphqlClient = null;
        this.overrideWsUrl = null;
        this.graphqlClientCreation = null;
        this.operationIdPrefix = (Date.now() % 60000).toString(16);
        for (let i = 0; i < 10; i += 1) {
            this.operationIdPrefix =
                `${this.operationIdPrefix}${Math.round(Math.random() * 256)
                    .toString(16)}`;
        }
        this.operationIdSuffix = 1;
        this.serverInfo = resolveServerInfo();
    }

    async setup() {
        this.config = this.context.getModule(TONConfigModule);
        this.transactions = new TONQueriesModuleCollection(this, 'transactions');
        this.messages = new TONQueriesModuleCollection(this, 'messages');
        this.blocks = new TONQueriesModuleCollection(this, 'blocks');
        this.accounts = new TONQueriesModuleCollection(this, 'accounts');
    }

    async detectRedirect(fetch: any, sourceUrl: string): Promise<string> {
        const response = await fetch(sourceUrl);
        try {
            this.serverInfo = resolveServerInfo((await response.json()).data.info.version);
        } catch {
        }
        if (response.redirected === true) {
            return response.url;
        }
        if (response.redirected === false) {
            return '';
        }
        const sourceLocation = URLParts.parse(sourceUrl)
            .fixQuery(_ => '')
            .toString()
            .toLowerCase();
        const responseLocation = URLParts.parse(response.url)
            .fixQuery(_ => '')
            .toString()
            .toLowerCase();
        return responseLocation !== sourceLocation ? response.url : '';
    }

    async getClientConfig() {
        const config = this.config;
        const clientPlatform = TONClient.clientPlatform;
        if (!clientPlatform) {
            throw Error('TON Client does not configured');
        }
        const fetch = clientPlatform.fetch;

        function getConfigForServer(server: string) {
            const httpParts = URLParts.parse(server)
                .fixProtocol(x => (x === 'http://' ? x : 'https://'))
                .fixPath(x => `${x}/graphql`);
            const http = httpParts.toString();
            const ws = httpParts
                .fixProtocol(x => (x === 'http://' ? 'ws://' : 'wss://'))
                .toString();
            return {
                httpUrl: http,
                wsUrl: ws,
                fetch: clientPlatform.fetch,
                WebSocket: clientPlatform.WebSocket,
            };
        }

        for (const server of config.data.servers) {
            try {
                const clientConfig = getConfigForServer(server);
                // eslint-disable-next-line no-await-in-loop
                const redirected = await this.detectRedirect(
                    fetch,
                    `${clientConfig.httpUrl}?query=%7Binfo%7Bversion%7D%7D`,
                );
                if (redirected !== '') {
                    const httpParts = URLParts.parse(redirected)
                        .fixQuery(_ => '');
                    clientConfig.httpUrl = httpParts.toString();
                    clientConfig.wsUrl = httpParts
                        .fixProtocol(x => (x === 'http://' ? 'ws://' : 'wss://'))
                        .toString();
                }
                return clientConfig;
            } catch (error) {
                console.log(`[getClientConfig] for server "${server}" failed`, error);
            }
        }
        return getConfigForServer(config.data.servers[0]);
    }

    async getServerInfo(span?: Span | SpanContext): Promise<ServerInfo> {
        await this.graphqlClientRequired(span);
        return this.serverInfo;
    }

    generateOperationId(): string {
        this.operationIdSuffix += 1;
        return `${this.operationIdPrefix}${this.operationIdSuffix.toString(16)}`;
    }

    async finishOperations(operationIds: string[]) {
        if (operationIds.length === 0) {
            return;
        }
        if (!(await this.getServerInfo()).supportsOperationId) {
            return;
        }
        await this.graphqlMutation(`mutation finishOperations($operationIds: [String]) {
                finishOperations(operationIds: $operationIds)
            }`, {
            operationIds,
        });
    }

    async getAccountsCount(parentSpan?: (Span | SpanContext)): Promise<number> {
        const result = await this.query('query{getAccountsCount}', undefined, parentSpan);
        return result.data.getAccountsCount;
    }

    async getTransactionsCount(parentSpan?: (Span | SpanContext)): Promise<number> {
        const result = await this.query('query{getTransactionsCount}', undefined, parentSpan);
        return result.data.getTransactionsCount;
    }

    async getAccountsTotalBalance(parentSpan?: (Span | SpanContext)): Promise<string> {
        const result = await this.query('query{getAccountsTotalBalance}', undefined, parentSpan);
        return result.data.getAccountsTotalBalance;
    }

    async postRequests(requests: Request[], parentSpan?: (Span | SpanContext)): Promise<any> {
        return this.context.trace('queries.postRequests', async (span) => {
            return this.graphqlMutation(`mutation postRequests($requests: [Request]) {
                postRequests(requests: $requests)
            }`, {
                requests,
            }, span);
        }, parentSpan);
    }

    async mutation(
        ql: string,
        variables: { [string]: any } = {},
        parentSpan?: (Span | SpanContext),
    ): Promise<any> {
        return this.context.trace('queries.mutation', async (span: Span) => {
            span.setTag('params', {
                mutation: ql,
                variables,
            });
            return this.graphqlMutation(ql, variables, span);
        }, parentSpan);
    }

    async query(
        ql: string,
        variables: { [string]: any } = {},
        parentSpan?: (Span | SpanContext),
    ): Promise<any> {
        return this.context.trace('queries.query', async (span: Span) => {
            span.setTag('params', {
                query: ql,
                variables,
            });
            return this.graphqlQuery(ql, variables, span);
        }, parentSpan);
    }

    async graphqlMutation(ql: string, variables: { [string]: any } = {}, span: Span): Promise<any> {
        const mutation = gql([ql]);
        return this.graphQl((client) => client.mutate({
            mutation,
            variables,
            context: {
                traceSpan: span,
            },
        }));
    }

    async graphqlQuery(ql: string, variables: { [string]: any } = {}, span: Span): Promise<any> {
        const query = gql([ql]);
        return this.graphQl((client) => client.query({
            query,
            variables,
            context: {
                traceSpan: span,
            },
        }), span);
    }

    async graphQl(request: (client: ApolloClient) => Promise<any>, span: Span): Promise<any> {
        const client = await this.graphqlClientRequired(span);
        try {
            return await request(client);
        } catch (error) {
            const gqlErr = error.graphQLErrors && error.graphQLErrors[0];
            if (gqlErr) {
                const clientErr = new Error(gqlErr.message);
                const gqlExc = (gqlErr.extensions && gqlErr.extensions.exception) || {};
                (clientErr: any).number = gqlExc.code || 0;
                (clientErr: any).code = gqlExc.code || 0;
                (clientErr: any).source = gqlExc.source || 'client';
                throw clientErr;
            }
            const errors = error
                && error.networkError
                && error.networkError.result
                && error.networkError.result.errors;
            if (errors) {
                throw TONClientError.queryFailed(errors);
            } else {
                throw error;
            }
        }
    }

    async graphqlClientRequired(parentSpan?: Span | SpanContext): Promise<ApolloClient> {
        if (this.graphqlClient) {
            return this.graphqlClient;
        }
        if (this.graphqlClientCreation) {
            await this.graphqlClientCreation.listen();
        } else {
            const creation = new MulticastPromise();
            this.graphqlClientCreation = creation;
            try {
                await this.context.trace('setup client', (span) => {
                    return this.createGraphqlClient(span);
                }, parentSpan);
                this.graphqlClientCreation = null;
                creation.resolve(this.graphqlClient);
            } catch (error) {
                this.graphqlClientCreation = null;
                creation.reject(error);
                throw error;
            }
        }
        return this.graphqlClient;
    }

    async createGraphqlClient(span: Span | SpanContext) {
        const useHttp = !this.config.data.useWebSocketForQueries;
        let clientConfig = await this.getClientConfig();
        let wsLink: ?WebSocketLink = null;
        let httpLink: ?HttpLink = null;

        const subsOptions = this.config.tracer.inject(span, FORMAT_TEXT_MAP, {});
        const subscriptionClient = new SubscriptionClient(
            clientConfig.wsUrl,
            {
                reconnect: true,
                connectionParams: () => ({
                    accessKey: this.config.data && this.config.data.accessKey,
                    headers: subsOptions,
                }),
            },
            clientConfig.WebSocket,
        );
        subscriptionClient.onReconnected(() => {
            console.log('[TONClient.queries]', 'WebSocket Reconnected');
        });
        let detectingRedirection = false;
        subscriptionClient.onError(() => {
            console.log('[TONClient.queries]', 'WebSocket Failed');
            if (detectingRedirection) {
                return;
            }
            (async () => {
                detectingRedirection = true;
                try {
                    const newConfig = await this.getClientConfig();
                    const configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl
                        || newConfig.wsUrl !== clientConfig.wsUrl;
                    if (configIsChanged) {
                        console.log('[TONClient.queries]', 'Client config changed');
                        clientConfig = newConfig;
                        subscriptionClient.url = newConfig.wsUrl;
                        if (wsLink) {
                            wsLink.url = newConfig.wsUrl;
                        }
                        if (httpLink) {
                            httpLink.uri = newConfig.httpUrl;
                        }
                    }
                } catch (err) {
                    console.log('[TONClient.queries] redirection detector failed', err);
                }
                detectingRedirection = false;
            })();
        });
        subscriptionClient.maxConnectTimeGenerator.duration = () => {
            return subscriptionClient.maxConnectTimeGenerator.max;
        };

        const tracerLink = await setContext((_, req) => {
            const resolvedSpan = (req && req.traceSpan) || span;
            req.headers = {};
            this.config.tracer.inject(resolvedSpan, FORMAT_TEXT_MAP, req.headers);
            const accessKey = this.config.data && this.config.data.accessKey;
            if (accessKey) {
                req.headers.accessKey = accessKey;
            }
            return {
                headers: req.headers,
            };
        });
        const wrapLink = (link: ApolloLink): ApolloLink => tracerLink.concat(link);
        const isSubscription = ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition'
                && definition.operation === 'subscription'
            );
        };
        wsLink = new WebSocketLink(subscriptionClient);
        httpLink = useHttp
            ? new HttpLink({
                uri: clientConfig.httpUrl,
                fetch: clientConfig.fetch,
            })
            : null;

        const link = httpLink
            ? split(isSubscription, wrapLink(wsLink), wrapLink(httpLink))
            : wrapLink(wsLink);
        this.graphqlClient = new ApolloClient({
            cache: new InMemoryCache({}),
            link,
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'no-cache',
                },
                query: {
                    fetchPolicy: 'no-cache',
                },
            },
        });
    }

    async close() {
        if (this.graphqlClient) {
            const client = this.graphqlClient;
            this.graphqlClient = null;
            client.stop();
            await client.clearStore();
        }
    }

    transactions: TONQCollection;

    messages: TONQCollection;

    blocks: TONQCollection;

    accounts: TONQCollection;

    graphqlClient: ApolloClient;
}


class TONQueriesModuleCollection implements TONQCollection {
    module: TONQueriesModule;

    collectionName: string;

    typeName: string;

    constructor(module: TONQueriesModule, collectionName: string) {
        this.module = module;
        this.collectionName = collectionName;
        this.typeName = `${collectionName[0].toUpperCase()}${collectionName.slice(1, -1)}`;
    }

    async query(
        ...args
        /*
            filterOrParams: any | TONQueryParams,
            result: string,
            orderBy?: OrderBy[],
            limit?: number,
            timeout?: number,
            parentSpan?: (Span | SpanContext)
         */
    ): Promise<any> {
        const {
            filter,
            result,
            orderBy,
            limit,
            timeout,
            operationId,
            parentSpan,
        } = resolveParams<TONQueryParams>(args, 'filter', () => ({
            filter: args[0],
            result: (args[1]: any),
            orderBy: (args[2]: any),
            limit: (args[3]: any),
            timeout: (args[4]: any),
            parentSpan: args[5],
        }));
        return this.module.context.trace(`${this.collectionName}.query`, async (span) => {
            span.setTag('params', {
                filter,
                result,
                orderBy,
                limit,
                timeout,
                operationId: operationId,
            });
            const useOperationId = operationId && (await this.module.getServerInfo(span)).supportsOperationId;
            const c = this.collectionName;
            const t = this.typeName;
            const ql = `
            query ${c}(
                $filter: ${t}Filter,
                $orderBy: [QueryOrderBy], 
                $limit: Int, 
                $timeout: Float
                ${useOperationId ? ', $operationId: String' : ''}
             ) {
                ${c}(
                    filter: $filter, 
                    orderBy: $orderBy, 
                    limit: $limit, 
                    timeout: $timeout
                    ${useOperationId ? ', operationId: $operationId' : ''}
                ) { ${result} }
            }`;
            const variables: { [string]: any } = {
                filter,
                orderBy,
                limit,
            };
            if (useOperationId) {
                variables.operationId = operationId;
            }
            if (timeout) {
                variables.timeout = Math.min(MAX_TIMEOUT, timeout);
            }
            return (await this.module.graphqlQuery(ql, variables, span)).data[c];
        }, parentSpan);
    }

    subscribe(
        ...args
        /*
        filterOrParams: any | TONSubscribeParams,
        result?: string,
        onDocEvent?: DocEvent,
        onError?: (err: Error) => void
         */
    ): Subscription {
        const {
            filter,
            result,
            onDocEvent,
            onError,
        } = resolveParams<TONSubscribeParams>(args, 'filter', () => ({
            filter: args[0],
            result: (args[1]: any),
            onDocEvent: (args[2]: any),
            onError: (args[3]: any),
        }));
        const span = this.module.config.tracer.startSpan('TONQueriesModule.js:subscribe ');
        span.setTag(Tags.SPAN_KIND, 'client');
        const text = `subscription ${this.collectionName}($filter: ${this.typeName}Filter) {
            ${this.collectionName}(filter: $filter) { ${result} }
        }`;
        const query = gql([text]);
        let subscription = null;
        (async () => {
            try {
                const client = await this.module.graphqlClientRequired(span);
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
                span.log({
                    event: 'failed',
                    payload: error,
                });
                if (onError) {
                    onError(error);
                } else {
                    console.log('TON Client subscription error', error);
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

    async waitFor(
        ...args
        /*
        filterOrParams: any | TONWaitForParams,
        result: string,
        timeout?: number,
        parentSpan?: (Span | SpanContext)
         */
    ): Promise<any> {
        const {
            filter,
            result,
            timeout: paramsTimeout,
            parentSpan,
            operationId,
        } = resolveParams<TONWaitForParams>(args, 'filter', () => ({
            filter: args[0],
            result: (args[1]: any),
            timeout: (args[2]: any),
            parentSpan: args[3],
        }));
        const timeout = paramsTimeout || this.module.config.waitForTimeout();
        const docs = await this.query({
            filter,
            result,
            timeout,
            parentSpan,
            operationId: operationId,
        });
        if (docs.length > 0) {
            return docs[0];
        }
        throw TONClientError.waitForTimeout();
    }
}

TONQueriesModule.moduleName = 'TONQueriesModule';
