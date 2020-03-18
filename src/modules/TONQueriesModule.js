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

export const MAX_TIMEOUT = 2147483647;
export const DEFAULT_TIMEOUT = 40_000;

function findParams<T>(args: any[], requiredParamName: string): ?T {
    return (args.length === 1) && (requiredParamName in args[0]) ? args[0] : null;
}

export default class TONQueriesModule extends TONModule implements TONQueries {
    config: TONConfigModule;

    overrideWsUrl: ?string;

    constructor(context: TONModuleContext) {
        super(context);
        this.graphqlClient = null;
        this.overrideWsUrl = null;
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
        if (response.redirected === true) {
            return response.url;
        }
        if (response.redirected === false) {
            return '';
        }
        const sourceLocation = URLParts.fix(sourceUrl, (parts) => {
            parts.query = '';
        })
            .toLowerCase();
        const responseLocation = URLParts.fix(response.url, (parts) => {
            parts.query = '';
        })
            .toLowerCase();
        return responseLocation !== sourceLocation ? response.url : '';
    }

    async getClientConfig() {
        const { config } = this;
        const { clientPlatform } = TONClient;
        if (!config.data || !clientPlatform) {
            throw Error('TON Client does not configured');
        }
        let httpUrl = config.queriesHttpUrl();
        let wsUrl = config.queriesWsUrl();
        const { fetch } = clientPlatform;
        const redirected = await this.detectRedirect(
            fetch,
            `${httpUrl}?query=%7Binfo%7Bversion%7D%7D`,
        );
        if (redirected !== '') {
            const location = URLParts.fix(redirected, (parts) => {
                parts.query = '';
            });
            if (location) {
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
        };
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

    async graphqlClientRequired(parentSpan: Span): Promise<ApolloClient> {
        if (this.graphqlClient) {
            return this.graphqlClient;
        }
        await this.context.trace('setup client', async (span) => {
            return this.createGraphqlClient(span);
        }, parentSpan);
        return this.graphqlClient;
    }

    async createGraphqlClient(span: Span | SpanContext) {
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
            console.log('>>>', 'WebSocket Reconnected');
        });
        let detectingRedirection = false;
        subscriptionClient.onError(() => {
            console.log('>>>', 'WebSocket Error');
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
                        console.log('>>>', 'Client config changed');
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
                    console.log('>>>', err);
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
        const useHttp = true;
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
                fetch,
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
        this.typeName = `${collectionName[0].toUpperCase()}${collectionName.slice(1)}`;
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
        const params = findParams<TONQueryParams>(args, 'filter');
        const filter = params ? params.filter : args[0];
        const result: string = params ? params.result : (args[1]: any);
        const orderBy = params ? params.orderBy : args[2];
        const limit = params ? params.limit : args[3];
        const timeout = params ? params.timeout : (args[4]: any);
        const parentSpan = params ? params.parentSpan : args[5];
        return this.module.context.trace(`${this.collectionName}.query`, async (span) => {
            span.setTag('params', {
                filter,
                result,
                orderBy,
                limit,
                timeout,
            });
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
        const params = findParams<TONSubscribeParams>(args, 'filter');
        const filter = params ? params.filter : args[0];
        const result: string = params ? params.result : (args[1]: any);
        const onDocEvent = params ? params.onDocEvent : (args[2]: any);
        const onError = params ? params.onError : (args[3]: any);
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

    async waitFor(
        ...args
        /*
        filterOrParams: any | TONWaitForParams,
        result: string,
        timeout?: number,
        parentSpan?: (Span | SpanContext)
         */
    ): Promise<any> {
        const params = findParams<TONWaitForParams>(args, 'filter');
        const filter = params ? params.filter : args[0];
        const result: string = params ? params.result : (args[1]: any);
        const timeout = (params ? params.timeout : args[2]) || DEFAULT_TIMEOUT;
        const parentSpan = params ? params.parentSpan : args[3];
        const docs = await this.query({
            filter,
            result,
            timeout,
            parentSpan,
        });
        if (docs.length > 0) {
            return docs[0];
        }
        throw TONClientError.waitForTimeout();
    }
}

TONQueriesModule.moduleName = 'TONQueriesModule';
