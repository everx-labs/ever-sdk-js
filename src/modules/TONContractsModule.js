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
import { TONClient } from '../TONClient';
import TONConfigModule from './TONConfigModule';
import type { TONKeyPairData } from './TONCryptoModule';
import { TONModule } from '../TONModule';
import TONQueriesModule from './TONQueriesModule';

export type TONContractABIParameter = {
    name: string,
    type: string,
}

export type TONContractABIFunction = {
    name: string,
    signed?: boolean,
    inputs: TONContractABIParameter[],
    outputs: TONContractABIParameter[],
};

export type TONContractABI = {
    'ABI version': number,
    functions: TONContractABIFunction[],
};

export type TONContractPackage = {
    abi: TONContractABI,
    imageBase64: string,
}

type TONContractLoadParams = {
    address: string,
    includeImage: boolean,
}

type TONContractLoadResult = {
    id: ?string,
    balanceGrams: ?string,
    imageBase64: ?string,
}

type TONContractDeployParams = {
    package: TONContractPackage,
    constructorParams: any,
    keyPair: TONKeyPairData,
}

type TONContractDeployResult = {
    address: string,
    alreadyDeployed: boolean,
}

type TONContractRunParams = {
    address: string,
    abi: TONContractABI,
    functionName: string,
    input: any,
    keyPair: TONKeyPairData,
}

type TONContractLocalRunParams = {
    address: string,
    abi: TONContractABI,
    functionName: string,
    input: any,
    keyPair?: TONKeyPairData,
}

type TONContractDecodeRunOutputParams = {
    abi: TONContractABI,
    functionName: string,
    bodyBase64: string,
}

type TONContractDecodeMessageBodyParams = {
    abi: TONContractABI,
    bodyBase64: string,
}

type TONContractRunResult = {
    output: any,
}

type TONContractDecodeMessageBodyResult = {
    function: string,
    output: any,
}

type TONContractSendGramsParams = {
    fromAccount: string,
    toAccount: string,
    amount: number,
}

type TONContractMessage = {
    messageId: string,
    messageIdBase64: string,
    messageBodyBase64: string,
}

type TONContractDeployMessage = {
    address: string,
    messageId: string,
    messageIdBase64: string,
    messageBodyBase64: string,
}

type QTransaction = {
    id: string,
    description: {
        Ordinary: {
            aborted: boolean,
        }
    },
    status: string,
    out_msgs: string[],
}

type QAddrStd = {
    AddrStd: {
        workchain_id: number,
        address: string,
    }
}

type QAddr = 'AddrNone' | QAddrStd


type QMessage = {
    id: string,
    header: {
        ExtOutMsgInfo?: {
            src: QAddr,
            dst: QAddr,
            created_at: number,
        },
    },
    body: string,
    status: string,
}

export default class TONContractsModule extends TONModule {
    config: TONConfigModule;

    queries: TONQueriesModule;

    async setup(): Promise<*> {
        this.config = this.context.getModule(TONConfigModule);
        this.queries = this.context.getModule(TONQueriesModule);
    }

    async load(params: TONContractLoadParams): Promise<TONContractLoadResult> {
        const accounts: ?{
            storage: {
                balance: {
                    Grams: string
                }
            }
        }[] = await this.queries.accounts.query({
            id: { eq: params.address },
        }, 'storage { balance { Grams } }');
        if (accounts && accounts.length > 0) {
            return {
                id: params.address,
                balanceGrams: accounts[0].storage.balance.Grams,
                imageBase64: null,
            };
        }
        return {
            id: null,
            balanceGrams: null,
            imageBase64: null,
        };
    }


    async deploy(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        return this.deployJs(params);
    }


    async run(params: TONContractRunParams): Promise<TONContractRunResult> {
        return this.runJs(params);
    }

    async runLocal(params: TONContractLocalRunParams): Promise<TONContractRunResult> {

        return this.runLocalJs(params);
    }

    async createDeployMessage(params: TONContractDeployParams): Promise<TONContractDeployMessage> {
        return this.requestLibrary('contracts.deploy.message', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
        });
    }


    async createRunMessage(params: TONContractRunParams): Promise<TONContractMessage> {
        return this.requestLibrary('contracts.run.message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }

    async sendGrams(params: TONContractSendGramsParams): Promise<void> {
        const message = await this.createSendGramsMessage(params);
        const transaction = await this.processMessage(
            message,
            'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary{ aborted } } }',
        );
        if (transaction.description.Ordinary.aborted) {
            throw {
                code: 'ContractsSendGramsFailed',
                message: 'Send Grams Failed',
            };
        }
    }

    async createSendGramsMessage(params: TONContractSendGramsParams): Promise<TONContractMessage> {
        return this.requestLibrary('contracts.send.grams.message', params);
    }

    async decodeRunOutput(params: TONContractDecodeRunOutputParams): Promise<TONContractRunResult> {
        return this.requestLibrary('contracts.run.output', params);
    }

    async decodeInputMessageBody(
        params: TONContractDecodeMessageBodyParams,
    ): Promise<TONContractDecodeMessageBodyResult> {
        return this.requestLibrary('contracts.run.unknown.input', params);
    }

    async decodeOutputMessageBody(
        params: TONContractDecodeMessageBodyParams,
    ): Promise<TONContractDecodeMessageBodyResult> {
        return this.requestLibrary('contracts.run.unknown.output', params);
    }

    async sendMessage(params: TONContractMessage): Promise<void> {
        const { clientPlatform } = TONClient;
        if (!clientPlatform) {
            throw {
                code: 'ClientDoesNotConfigured',
                message: 'TON Client SDK does not configured',
            };
        }
        const { fetch } = clientPlatform;
        const url = this.config.requestsUrl();
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({
                records: [
                    {
                        key: params.messageIdBase64,
                        value: params.messageBodyBase64,
                    },
                ],
            }),
        });
        if (response.status !== 200) {
            throw {
                code: 3004,
                message: `Send node request failed: ${await response.text()}`,
            };
        }
    }

    async processMessage(
        params: TONContractMessage,
        resultFields: string,
    ): Promise<QTransaction> {
        await this.sendMessage(params);
        return this.queries.transactions.waitFor({
            id: { eq: params.messageId },
            status: { in: ['Preliminary', 'Proposed', 'Finalized'] },
        }, resultFields);
    }

    async deployNative(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        return this.requestLibrary('contracts.deploy', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
        });
    }


    async runNative(params: TONContractRunParams): Promise<TONContractRunResult> {
        return await this.requestLibrary('contracts.run', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }

    async deployJs(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        const message = await this.createDeployMessage(params);
        await this.sendGrams({
            fromAccount: '',
            toAccount: message.address,
            amount: 1000000000,
        });
        const transaction = await this.processMessage(
            message,
            'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }',
        );
        const ordinary = transaction.description.Ordinary;
        if (ordinary.aborted) {
            throw {
                code: 3050,
                message: 'Deploy failed',
            };
        }
        return {
            address: message.address,
            alreadyDeployed: false,
        };
    }


    async runJs(params: TONContractRunParams): Promise<TONContractRunResult> {
        const message = await this.createRunMessage(params);
        const transaction = await this.processMessage(
            message,
            'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } } out_msgs',
        );
        const ordinary = transaction.description.Ordinary;
        if (ordinary.aborted) {
            throw {
                code: 3040,
                message: 'Run failed',
            };
        }
        const outputMessageIds = transaction.out_msgs;
        if (!outputMessageIds || outputMessageIds.length === 0) {
            return { output: null };
        }
        const externalMessages: QMessage[] = (await Promise.all(outputMessageIds.map((id) => {
            return this.queries.messages.waitFor(
                {
                    id: { eq: id },
                    status: { in: ['Preliminary', 'Proposed', 'Finalized'] },
                },
                'body header { ...on MessageHeaderExtOutMsgInfoVariant { ExtOutMsgInfo { created_at } } }',
            );
        }))).filter((x: QMessage) => {
            return x.header && x.header.ExtOutMsgInfo;
        });
        const outputs = await Promise.all(externalMessages.map((x: QMessage) => {
            return this.decodeOutputMessageBody({
                abi: params.abi,
                bodyBase64: x.body,
            });
        }));
        const resultOutput = outputs.find((x: TONContractDecodeMessageBodyResult) => {
            return x.function.toLowerCase() === params.functionName.toLowerCase();
        });
        return resultOutput ? { output: resultOutput.output } : { output: null };
    }

    async runLocalJs(params: TONContractLocalRunParams): Promise<TONContractRunResult> {
        const accounts = await this.queries.select(
            'RETURN DOCUMENT("accounts/' + params.address + '")', {});

        return this.requestLibrary('contracts.run.local', {
            address: params.address,
            account: accounts[0],
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }
}

TONContractsModule.moduleName = 'TONContractsModule';
