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

import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
// @flow
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import gql from 'graphql-tag';
import { TONClient } from '../TONClient';
import type { TONModuleContext } from '../TONModule';
import { TONModule } from '../TONModule';
import TONConfigModule from './TONConfigModule';

type Subscription = {
    unsubscribe: () => void
}

const unionsScheme = {
    "data": {
        "__schema": {
            "types": [{
                "kind": "UNION",
                "name": "MessageHeader",
                "possibleTypes": [{ "name": "MessageHeaderIntMsgInfoVariant" }, { "name": "MessageHeaderExtInMsgInfoVariant" }, { "name": "MessageHeaderExtOutMsgInfoVariant" }]
            }, {
                "kind": "UNION",
                "name": "MsgAddressInt",
                "possibleTypes": [{ "name": "MsgAddressIntAddrNoneVariant" }, { "name": "MsgAddressIntAddrStdVariant" }, { "name": "MsgAddressIntAddrVarVariant" }]
            }, {
                "kind": "UNION",
                "name": "MsgAddressExt",
                "possibleTypes": [{ "name": "MsgAddressExtAddrNoneVariant" }, { "name": "MsgAddressExtAddrExternVariant" }]
            }, {
                "kind": "UNION",
                "name": "InMsg",
                "possibleTypes": [{ "name": "InMsgExternalVariant" }, { "name": "InMsgIHRVariant" }, { "name": "InMsgImmediatellyVariant" }, { "name": "InMsgFinalVariant" }, { "name": "InMsgTransitVariant" }, { "name": "InMsgDiscardedFinalVariant" }, { "name": "InMsgDiscardedTransitVariant" }]
            }, {
                "kind": "UNION",
                "name": "IntermediateAddress",
                "possibleTypes": [{ "name": "IntermediateAddressRegularVariant" }, { "name": "IntermediateAddressSimpleVariant" }, { "name": "IntermediateAddressExtVariant" }]
            }, {
                "kind": "UNION",
                "name": "OutMsg",
                "possibleTypes": [{ "name": "OutMsgNoneVariant" }, { "name": "OutMsgExternalVariant" }, { "name": "OutMsgImmediatelyVariant" }, { "name": "OutMsgOutMsgNewVariant" }, { "name": "OutMsgTransitVariant" }, { "name": "OutMsgDequeueVariant" }, { "name": "OutMsgTransitRequiredVariant" }]
            }, {
                "kind": "UNION",
                "name": "AccountStorageState",
                "possibleTypes": [{ "name": "AccountStorageStateAccountUninitVariant" }, { "name": "AccountStorageStateAccountActiveVariant" }, { "name": "AccountStorageStateAccountFrozenVariant" }]
            }, {
                "kind": "UNION",
                "name": "TransactionDescription",
                "possibleTypes": [{ "name": "TransactionDescriptionOrdinaryVariant" }, { "name": "TransactionDescriptionStorageVariant" }, { "name": "TransactionDescriptionTickTockVariant" }, { "name": "TransactionDescriptionSplitPrepareVariant" }, { "name": "TransactionDescriptionSplitInstallVariant" }, { "name": "TransactionDescriptionMergePrepareVariant" }, { "name": "TransactionDescriptionMergeInstallVariant" }]
            }, {
                "kind": "UNION",
                "name": "TrComputePhase",
                "possibleTypes": [{ "name": "TrComputePhaseSkippedVariant" }, { "name": "TrComputePhaseVmVariant" }]
            }, {
                "kind": "UNION",
                "name": "TrBouncePhase",
                "possibleTypes": [{ "name": "TrBouncePhaseNegfundsVariant" }, { "name": "TrBouncePhaseNofundsVariant" }, { "name": "TrBouncePhaseOkVariant" }]
            }]
        }
    }
};

export default class TONQueriesModule extends TONModule {
    constructor(context: TONModuleContext) {
        super(context);
        this._client = null;
    }

    async setup() {
        this.transactions = new TONQCollection(this, 'transactions');
        this.messages = new TONQCollection(this, 'messages');
        this.blocks = new TONQCollection(this, 'blocks');
        this.accounts = new TONQCollection(this, 'accounts');
    }

    ensureClient(): ApolloClient {
        if (this._client) {
            return this._client;
        }
        const config: TONConfigModule = this.context.getModule(TONConfigModule);
        const configData = config.data;
        const { clientPlatform } = TONClient;
        if (!configData || !clientPlatform) {
            throw Error('TON SDK does not configured');
        }
        const fragmentMatcher = new IntrospectionFragmentMatcher({
            introspectionQueryResultData: unionsScheme.data
        });

        const cache = new InMemoryCache({ fragmentMatcher });

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

        this._client = new ApolloClient({
            cache,
            link,
            defaultOptions,
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

    async select(query: string, bindVars: {}) {
        const gqlQuery = gql([`query select($query: String!, $bindVarsJson: String!) {
            select(query: $query, bindVarsJson: $bindVarsJson)
        }`]);
        const client = this.ensureClient();
        return JSON.parse((await client.query({
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

    client: ApolloClient;
}


type DocEvent = (changeType: string, doc: any) => void;

type OrderBy = {
    path: string,
    sort: 'ASC' | 'DESC'
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


    async query(filter: any, result: string, orderBy?: OrderBy[], limit?: number): Promise<any> {
        const c = this.collectionName;
        const t = this.typeName;
        const ql = `query ${c}($filter: ${t}Filter, $orderBy: [QueryOrderBy], $limit: Int) {
            ${c}(filter: $filter, orderBy: $orderBy, limit: $limit) { ${result} }
        }`;
        const query = gql([ql]);
        const client = this.module.ensureClient();
        return (await client.query({
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
        const client = this.module.ensureClient();
        const observable = client.subscribe({
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
