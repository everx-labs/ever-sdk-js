/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
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
    TONQueryAggregateParams,
} from '../../types';
import { TONClient } from '../TONClient';
import { emptyTONErrorData, TONClientError, TONErrorCode } from '../TONClientError';
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
    supportsAggregations: boolean,
    supportsTime: boolean,
    timeDelta: ?number,
};


type GraphQLClientConfig = {
    httpUrl: string,
    wsUrl: string,
    fetch: any,
    WebSocket: any,
};

// Keep-alive timeout used to support keep-alive connection checking:
// - Every 1 minute server sends GQL_CONNECTION_KEEP_ALIVE message.
// - Every 2 minutes client checks that GQL_CONNECTION_KEEP_ALIVE message was received
//   within last 2 minutes.
// - If client hadn't received keep alive message during last 2 minutes
//   it closes connection and goes to reconnect.
const KEEP_ALIVE_TIMEOUT = 2 * 60000;

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
        supportsAggregations: version >= 25000,
        supportsTime: version >= 26003,
        timeDelta: null,
    };
}

function abortableFetch(fetch) {
    return (input, options) => {
        return new Promise((resolve, reject) => {
            const queryTimeout: number | typeof undefined = options.queryTimeout;
            let fetchOptions = options;
            if (queryTimeout) {
                const controller = global.AbortController ? new global.AbortController() : null;
                if (controller) {
                    fetchOptions = {
                        ...options,
                        signal: controller.signal,
                    };
                }
                setTimeout(() => {
                    reject(TONClientError.queryForciblyAborted(emptyTONErrorData));
                    if (controller) {
                        controller.abort();
                    }
                }, queryTimeout);
            }
            fetch(input, fetchOptions).then(resolve, reject);
        });
    };
}


export default class TONQueriesModule extends TONModule implements TONQueries {
    transactions: TONQCollection;
    messages: TONQCollection;
    blocks: TONQCollection;
    accounts: TONQCollection;
    blocks_signatures: TONQCollection;

    config: TONConfigModule;

    graphqlClientCreation: ?MulticastPromise<ApolloClient>;
    graphqlClient: ?ApolloClient;
    graphqlClientConfig: ?GraphQLClientConfig;
    wsLink: ?WebSocketLink;
    httpLink: ?HttpLink;

    overrideWsUrl: ?string;
    operationIdPrefix: string;
    operationIdSuffix: number;
    serverInfo: ServerInfo;
    activeQueriesRejects: ((any) => void)[];

    constructor(context: TONModuleContext) {
        super(context);
        this.graphqlClient = null;
        this.graphqlClientCreation = null;
        this.graphqlClientConfig = null;
        this.wsLink = null;
        this.httpLink = null;
        this.overrideWsUrl = null;
        this.operationIdPrefix = (Date.now() % 60000).toString(16);
        for (let i = 0; i < 10; i += 1) {
            const randomPart = Math.round(Math.random() * 256).toString(16);
            this.operationIdPrefix = `${this.operationIdPrefix}${randomPart}`;
        }
        this.operationIdSuffix = 1;
        this.serverInfo = resolveServerInfo();
        this.activeQueriesRejects = [];
    }

    registerQueryReject(reject: (any) => void) {
        this.activeQueriesRejects.push(reject);
    }

    unregisterQueryReject(reject: (any) => void) {
        const index = this.activeQueriesRejects.indexOf(reject);
        if (index >= 0) {
            this.activeQueriesRejects.splice(index, 1);
        }
    }

    rejectActiveQueries() {
        const rejects = this.activeQueriesRejects;
        this.activeQueriesRejects = [];
        const err = TONClientError.queryForciblyAborted({});
        rejects.forEach((reject) => {
            try {
                reject(err);
            } catch {
            }
        })
    }

    async setup() {
        this.config = this.context.getModule(TONConfigModule);
        this.transactions = new TONQueriesModuleCollection(this, 'transactions', 'Transaction');
        this.messages = new TONQueriesModuleCollection(this, 'messages', 'Message');
        this.blocks = new TONQueriesModuleCollection(this, 'blocks', 'Block');
        this.accounts = new TONQueriesModuleCollection(this, 'accounts', 'Account');
        this.blocks_signatures =
            new TONQueriesModuleCollection(this, 'blocks_signatures', 'BlockSignatures');
    }

    getQueryUrl(): string {
        return this.graphqlClientConfig?.httpUrl || '';
    }

    async detectRedirect(fetch: any, sourceUrl: string): Promise<string> {
        const response = await fetch(sourceUrl);
        try {
            const responseText = await response.text();
            const responseJson = JSON.parse(responseText);
            this.serverInfo = resolveServerInfo(responseJson.data.info.version);
        } catch {
        }
        if (response.redirected === true) {
            return response.url;
        }
        if (response.redirected === false) {
            return '';
        }
        const sourceLocation = URLParts.parse(sourceUrl)
            .fixQuery(() => '')
            .toString()
            .toLowerCase();
        const responseLocation = URLParts.parse(response.url)
            .fixQuery(() => '')
            .toString()
            .toLowerCase();
        return responseLocation !== sourceLocation ? response.url : '';
    }

    async getClientConfig(): Promise<GraphQLClientConfig> {
        const config = this.config;
        const clientPlatform = TONClient.clientPlatform;
        if (!clientPlatform) {
            throw Error('TON Client does not configured');
        }
        const fetch = clientPlatform.fetch;

        function getConfigForServer(server: string): GraphQLClientConfig {
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
            const clientConfig = getConfigForServer(server);
            try {
                // eslint-disable-next-line no-await-in-loop
                // noinspection SpellCheckingInspection
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
                if(config._errLogVerbose) console.log(`[getClientConfig] for server "${server}" failed`, {
                    message: error.message || error.toString(),
                    data: {
                        http_url: clientConfig.httpUrl,
                        ws_url: clientConfig.wsUrl,
                    },
                });
            }
        }
        return getConfigForServer(config.data.servers[0]);
    }

    async getServerInfo(span?: Span | SpanContext): Promise<ServerInfo> {
        await this.graphqlClientRequired(span);
        return this.serverInfo;
    }

    async serverTimeDelta(span?: Span | SpanContext): Promise<number> {
        const serverInfo = await this.getServerInfo(span);
        const clientConfig = this.graphqlClientConfig;
        if (clientConfig && serverInfo.supportsTime && serverInfo.timeDelta === null) {
            try {
                const start = Date.now();
                // noinspection SpellCheckingInspection
                const response = await clientConfig.fetch(`${clientConfig.httpUrl}?query=%7Binfo%7Btime%7D%7D`);
                const end = Date.now();
                const responseData = await response.json();
                const serverTime = responseData.data.info.time;
                serverInfo.timeDelta = Math.round(serverTime - (start + (end - start) / 2));
            } catch (error) {
                if(config._errLogVerbose) console.log('>>>', error);
            }
        }
        return serverInfo.timeDelta || 0;
    }

    async serverNow(span?: Span | SpanContext): Promise<number> {
        const timeDelta = await this.serverTimeDelta(span);
        return Date.now() + timeDelta;
    }

    dropServerTimeDelta() {
        if (this.serverInfo) {
            this.serverInfo.timeDelta = null;
        }
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
        timeout?: number,
    ): Promise<any> {
        return this.context.trace('queries.query', async (span: Span) => {
            span.setTag('params', {
                query: ql,
                variables,
            });
            return this.graphqlQuery(ql, variables, span, timeout);
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

    static isNetworkError(error: any): boolean {
        if (error.code === TONErrorCode.QUERY_FORCIBLY_ABORTED) {
            return true;
        }
        const networkError = error.networkError;
        if (!networkError) {
            return false;
        }
        if ('errno' in networkError) {
            return true;
        }
        return !('response' in networkError || 'result' in networkError);
    }

    async graphqlQuery(
        ql: string,
        variables: { [string]: any } = {},
        span: Span,
        timeout?: number,
    ): Promise<any> {
        const query = gql([ql]);
        let nextTimeout = 100;
        const startTime = Date.now();
        let forceTerminateExtraTimeout = 5000;
        const forceTerminateTimeout = timeout || this.config.waitForTimeout();
        while (true) {
            try {
                const client = await this.graphqlClientRequired(span);
                const context: any = {
                    traceSpan: span,
                    fetchOptions: {
                        queryTimeout: Math.min(
                            forceTerminateTimeout + forceTerminateExtraTimeout,
                            MAX_TIMEOUT,
                        ),
                    },
                };
                return await new Promise((resolve, reject) => {
                    (async () => {
                        let isActual = true;
                        const doResolve = (result) => {
                            if (isActual) {
                                isActual = false;
                                resolve(result);
                            }
                        }
                        const doReject = (error) => {
                            if (isActual) {
                                isActual = false;
                                reject(error);
                            }
                        }
                        this.registerQueryReject(doReject);
                        try {
                            doResolve(await client.query({
                                query,
                                variables,
                                context,
                            }));
                        } catch (error) {
                            doReject(error);
                        } finally {
                            this.unregisterQueryReject(doReject);
                        }
                    })();
                });
            } catch (error) {
                const resolvedError = await this.resolveGraphQLError(error);
                if (TONQueriesModule.isNetworkError(resolvedError)
                    && !this.config.isNetworkTimeoutExpiredSince(startTime)) {
                    this.config.log(resolvedError);
                    const retryDelayTimeout = nextTimeout;
                    await new Promise(resolve => setTimeout(resolve, retryDelayTimeout));
                    if (nextTimeout < 3200) {
                        nextTimeout *= 2;
                    }
                    if (forceTerminateExtraTimeout < this.config.waitForTimeout()) {
                        forceTerminateExtraTimeout += 5000;
                    }
                } else {
                    throw resolvedError;
                }
            }
        }
    }

    async resolveGraphQLError(error: any) {
        const gqlErr = error.graphQLErrors && error.graphQLErrors[0];
        if (gqlErr) {
            const clientErr = new Error(gqlErr.message);
            const gqlExc = (gqlErr.extensions && gqlErr.extensions.exception) || {};
            (clientErr: any).number = gqlExc.code || 0;
            (clientErr: any).code = gqlExc.code || 0;
            (clientErr: any).source = gqlExc.source || 'client';
            return clientErr;
        }
        const errors = error
            && error.networkError
            && error.networkError.result
            && error.networkError.result.errors;
        if (errors) {
            return TONClientError.queryFailed(errors, await this.completeErrorData());
        }
        return error;
    }

    async graphQl(request: (client: ApolloClient) => Promise<any>, span: Span): Promise<any> {
        const client = await this.graphqlClientRequired(span);
        try {
            return await request(client);
        } catch (error) {
            throw await this.resolveGraphQLError(error);
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

        const subsOptions = this.config.tracer.inject(span, FORMAT_TEXT_MAP, {});
        const subscriptionClient: SubscriptionClient & { url: string } = new SubscriptionClient(
            clientConfig.wsUrl,
            {
                timeout: KEEP_ALIVE_TIMEOUT,
                reconnect: true,
                connectionParams: () => ({
                    accessKey: this.config.data && this.config.data.accessKey,
                    headers: subsOptions,
                }),
            },
            clientConfig.WebSocket,
        );
        subscriptionClient.onReconnected(() => {
            if(this.config._errLogVerbose) console.log('[TONClient.queries]', 'WebSocket Reconnected');
            this.rejectActiveQueries();
        });
        const guard = {
            detectingRedirection: false,
        };
        subscriptionClient.onError(() => {
            if(this.config._errLogVerbose) console.log('[TONClient.queries]', 'WebSocket Failed');
            if (guard.detectingRedirection) {
                return;
            }
            (async () => {
                guard.detectingRedirection = true;
                try {
                    const newConfig = await this.getClientConfig();
                    const configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl
                        || newConfig.wsUrl !== clientConfig.wsUrl;
                    if (configIsChanged) {
                        if(this.config._logVerbose) console.log('[TONClient.queries]', 'Client config changed');
                        clientConfig = newConfig;
                        this.graphqlClientConfig = clientConfig;
                        subscriptionClient.url = newConfig.wsUrl;
                        if (this.wsLink) {
                            this.wsLink.url = newConfig.wsUrl;
                        }
                        if (this.httpLink) {
                            this.httpLink.uri = newConfig.httpUrl;
                        }
                    }
                } catch (err) {
                    if(this.config._errLogVerbose) console.log('[TONClient.queries] redirection detector failed', err);
                }
                guard.detectingRedirection = false;
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

        this.wsLink = new WebSocketLink(subscriptionClient);
        this.httpLink = useHttp
            ? new HttpLink({
                uri: clientConfig.httpUrl,
                fetch: abortableFetch(clientConfig.fetch),
            })
            : null;
        const link = this.httpLink
            ? split(isSubscription, wrapLink(this.wsLink), wrapLink(this.httpLink))
            : wrapLink(this.wsLink);
        this.graphqlClientConfig = clientConfig;
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
}


class TONQueriesModuleCollection implements TONQCollection {
    module: TONQueriesModule;

    collectionName: string;

    typeName: string;

    constructor(
        module: TONQueriesModule,
        collectionName: string,
        typeName: string,
    ) {
        this.module = module;
        this.collectionName = collectionName;
        this.typeName = typeName;
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
                operationId,
            });
            const useOperationId = operationId
                && (await this.module.getServerInfo(span)).supportsOperationId;
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
            return (await this.module.graphqlQuery(ql, variables, span, timeout)).data[c];
        }, parentSpan);
    }

    async aggregate(
        params: TONQueryAggregateParams,
    ): Promise<string[]> {
        return this.module.context.trace(`${this.collectionName}.aggregate`, async (span) => {
            span.setTag('params', {
                filter: params.filter,
                fields: params.fields,
            });
            if (!(await this.module.getServerInfo(span)).supportsAggregations) {
                throw TONClientError.serverDoesntSupportAggregations(
                    await this.module.completeErrorData(),
                );
            }
            const t = this.typeName;
            const q = this.typeName.endsWith('s') ? `aggregate${t}` : `aggregate${t}s`;
            const ql = `
            query ${q}(
                $filter: ${t}Filter,
                $fields: [FieldAggregation] 
             ) {
                ${q}(
                    filter: $filter, 
                    fields: $fields 
                )
            }`;
            const variables: { [string]: any } = {
                filter: params.filter,
                fields: params.fields,
            };
            return (await this.module.graphqlQuery(ql, variables, span)).data[q];
        }, params.parentSpan);
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
                    if(config._errLogVerbose) console.log('TON Client subscription error', error);
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
            operationId,
        });
        if (docs.length > 0) {
            return docs[0];
        }
        throw TONClientError.waitForTimeout(await this.module.completeErrorData({
            collection: this.collectionName,
        }));
    }
}

TONQueriesModule.moduleName = 'TONQueriesModule';
