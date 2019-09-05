// @flow
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import gql from 'graphql-tag';
import TONConfigModule from './TONConfigModule';
import { TONClient } from '../TONClient';
import { TONModule } from '../TONModule';
import type { TONModuleContext } from '../TONModule';

type Subscription = {
    unsubscribe: () => void
}

export default class TONQueriesModule extends TONModule {
    constructor(context: TONModuleContext) {
        super(context);
    }

    async setup() {
        const config: TONConfigModule = this.context.getModule(TONConfigModule);
        const configData = config.data;
        const { clientPlatform } = TONClient;
        if (!configData || !clientPlatform) {
            throw Error('TON SDK does not configured');
        }
        const cache = new InMemoryCache();

        const httpLink = new HttpLink({
            uri: config.queriesHttpUrl(),
            fetch: clientPlatform.fetch,
        });

        const wsLink = new WebSocketLink({
            uri: config.queriesWsUrl(),
            options: {
                reconnect: true,
            },
            webSocketImpl: clientPlatform.WebSocket,
        });

        const link = split(
            ({ query }) => {
                const definition = getMainDefinition(query);
                return (
                    definition.kind === 'OperationDefinition'
                    && definition.operation === 'subscription'
                );
            },
            wsLink,
            httpLink,
        );

        const defaultOptions = {
            watchQuery: {
                fetchPolicy: 'no-cache',
            },
            query: {
                fetchPolicy: 'no-cache',
            },
        };

        const client = new ApolloClient({
            cache,
            link,
            defaultOptions,
        });
        this.client = client;
        this.transactions = new TONQCollection(client, 'transactions');
        this.messages = new TONQCollection(client, 'messages');
        this.blocks = new TONQCollection(client, 'blocks');
        this.accounts = new TONQCollection(client, 'accounts');
    }

    async close() {
        this.client.stop();
    }

    async select(query: string, bindVars: {}) {
        const gqlQuery = gql([`query select($query: String!, $bindVarsJson: String!) {
            select(query: $query, bindVarsJson: $bindVarsJson)
        }`]);
        return JSON.parse((await this.client.query({
            query: gqlQuery,
            variables: {
                query,
                bindVarsJson: JSON.stringify(bindVars),
            },
        })).data.select);
    }

    transactions: TONQCollection;

    messages: TONQCollection;

    blocks: TONQCollection;

    accounts: TONQCollection;

    client: any;
}


type DocEvent = (changeType: string, doc: any) => void;

type OrderBy = {
    path: string,
    sort: 'ASC' | 'DESC'
}

class TONQCollection {
    client: any;

    collectionName: string;
    typeName: string;

    constructor(client: any, collectionName: string) {
        this.client = client;
        this.collectionName = collectionName;
        this.typeName = collectionName.substr(0, 1).toUpperCase() +
            collectionName.substr(1, collectionName.length - 2);
    }


    async query(filter: any, result: string, orderBy?: OrderBy[], limit?: number): Promise<any> {
        const c = this.collectionName;
        const t = this.typeName;
        const ql = `query ${c}($filter: ${t}Filter, $orderBy: [QueryOrderBy], $limit: Int) {
            ${c}(filter: $filter, orderBy: $orderBy, limit: $limit) { ${result} }
        }`;
        const query = gql([ql]);
        return (await this.client.query({
            query,
            variables: {
                filter,
                orderBy,
                limit
            },
        })).data[c];
    }


    subscribe(filter: any, result: string, onDocEvent: DocEvent): Subscription {
        const text = `subscription ${this.collectionName}($filter: ${this.typeName}Filter) {
        	${this.collectionName}(filter: $filter) { ${result} }
        }`;
        const query = gql([text]);
        const observable = this.client.subscribe({
            query,
            variables: {
                filter,
            },
        });
        const subscription = observable.subscribe({
            next: (message) => {
                onDocEvent('insert/update', message.data[this.collectionName]);
            },
        });
        return {
            unsubscribe: () => {
                subscription.unsubscribe();
            },
        };
    }

    async waitFor(filter: any, result: string): Promise<any> {
        const existing = await this.query(filter, result);
        if (existing.length > 0) {
            return existing[0];
        }
        return new Promise((resolve) => {
            let subscription: any = null;
            let interval: any = null;
            const doResolve = (doc) => {
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                }
                if (subscription) {
                    subscription.unsubscribe();
                    subscription = null;
                    resolve(doc);
                }
            };
            subscription = this.subscribe(filter, result, (change, doc) => {
                doResolve(doc);
            });
            interval = setInterval(() => {
                (async () => {
                    const existing = await this.query(filter, result);
                    if (existing.length > 0) {
                        doResolve(existing[0]);
                    }
                })();
            }, 1000);
        });
    }
}

TONQueriesModule.moduleName = 'TONQueriesModule';
