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

type TONContractUnsignedMessage = {
    unsignedBytesBase64: string,
    bytesToSignBase64: string,
}

type TONContractMessage = {
    messageId: string,
    messageIdBase64: string,
    messageBodyBase64: string,
}

type TONContractUnsignedDeployMessage = {
    address: string,
    signParams: TONContractUnsignedMessage,
}

type TONContractUnsignedRunMessage = {
    abi: TONContractABI,
    functionName: string,
    signParams: TONContractUnsignedMessage,
}

type TONContractDeployMessage = {
    address: string,
    message: TONContractMessage;
}

type TONContractRunMessage = {
    abi: TONContractABI,
    functionName: string,
    message: TONContractMessage;
}

type TONContractCreateSignedMessageParams = {
    unsignedBytesBase64: string,
    signBytesBase64: string,
    publicKeyHex: string,
}

type TONContractCreateSignedDeployMessageParams = {
    address: string,
    createSignedParams: TONContractCreateSignedMessageParams,
}

type TONContractCreateSignedRunMessageParams = {
    abi: TONContractABI,
    functionName: string,
    createSignedParams: TONContractCreateSignedMessageParams,
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


    // Facade functions

    async deploy(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        return this.internalDeployJs(params);
    }


    async run(params: TONContractRunParams): Promise<TONContractRunResult> {
        return this.internalRunJs(params);
    }

    async runLocal(params: TONContractLocalRunParams): Promise<TONContractRunResult> {

        return this.internalRunLocalJs(params);
    }

    // Message creation

    async createDeployMessage(params: TONContractDeployParams): Promise<TONContractDeployMessage> {
        const message: {
            address: string,
            messageId: string,
            messageIdBase64: string,
            messageBodyBase64: string,

        } = await this.requestLibrary('contracts.deploy.message', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
        });
        return {
            message: {
                messageId: message.messageId,
                messageIdBase64: message.messageIdBase64,
                messageBodyBase64: message.messageBodyBase64,
            },
            address: message.address
        }
    }


    async createRunMessage(params: TONContractRunParams): Promise<TONContractRunMessage> {
        const message = await this.requestLibrary('contracts.run.message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
        return {
            abi: params.abi,
            functionName: params.functionName,
            message
        }
    }

    async createUnsignedDeployMessage(params: TONContractDeployParams): Promise<TONContractUnsignedDeployMessage> {
        const result: {
            encoded: TONContractUnsignedMessage,
            addressHex: string,
        } = await this.requestLibrary('contracts.deploy.encode_unsigned_message', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            imageBase64: params.package.imageBase64,
            publicKeyHex: params.keyPair.public,
        });
        return {
            address: result.addressHex,
            signParams: result.encoded,
        }
    }


    async createUnsignedRunMessage(params: TONContractRunParams): Promise<TONContractUnsignedRunMessage> {
        const signParams = await this.requestLibrary('contracts.run.encode_unsigned_message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
        });
        return {
            abi: params.abi,
            functionName: params.functionName,
            signParams,
        }
    }


    async createSignedMessage(params: TONContractCreateSignedMessageParams): Promise<TONContractMessage> {
        return this.requestLibrary('contracts.encode_message_with_sign', params);
    }


    async createSignedDeployMessage(
        params: TONContractCreateSignedDeployMessageParams
    ): Promise<TONContractDeployMessage> {
        const message = await this.createSignedMessage(params.createSignedParams);
        return {
            address: params.address,
            message
        }
    }


    async createSignedRunMessage(
        params: TONContractCreateSignedRunMessageParams
    ): Promise<TONContractRunMessage> {
        const message = await this.createSignedMessage(params.createSignedParams);
        return {
            abi: params.abi,
            functionName: params.functionName,
            message
        }
    }

    // Message parsing

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

    // Message processing

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


    async processMessage(message: TONContractMessage, resultFields: string): Promise<QTransaction> {
        await this.sendMessage(message);
        return this.queries.transactions.waitFor({
            id: { eq: message.messageId },
            status: { in: ['Preliminary', 'Proposed', 'Finalized'] },
        }, resultFields);
    }


    async processDeployMessage(params: TONContractDeployMessage): Promise<TONContractDeployResult> {
        const transaction = await this.processMessage(
            params.message,
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
            address: params.address,
            alreadyDeployed: false,
        };
    }


    async processRunMessage(params: TONContractRunMessage): Promise<TONContractRunResult> {
        const transaction = await this.processMessage(
            params.message,
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

    // Internals

    async internalDeployNative(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        return this.requestLibrary('contracts.deploy', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
        });
    }


    async internalRunNative(params: TONContractRunParams): Promise<TONContractRunResult> {
        return await this.requestLibrary('contracts.run', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }


    async internalDeployJs(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        const message = await this.createDeployMessage(params);
        return this.processDeployMessage(message);
    }


    async internalRunJs(params: TONContractRunParams): Promise<TONContractRunResult> {
        const message = await this.createRunMessage(params);
        return this.processRunMessage(message);
    }


    async internalRunLocalJs(params: TONContractLocalRunParams): Promise<TONContractRunResult> {
        function removeTypeName(obj: any) {
            if (obj.__typename) {
                delete obj.__typename;
            }
            Object.values(obj).forEach((value) => {
                if (!!value && typeof value === 'object') {
                    removeTypeName(value);
                }
            });
        }

        const accounts = await this.queries.accounts.query(
            { id: { eq: params.address } },
            `
            addr {
                ...on MsgAddressIntAddrNoneVariant {
                    AddrNone {
                        None
                    }
                }
                ...on MsgAddressIntAddrStdVariant {
                    AddrStd {
                        workchain_id
                        address
                    }
                }
                ...on MsgAddressIntAddrVarVariant {
                    AddrVar {
                        workchain_id
                        address
                    }
                }
            }
            storage {
                state {
                    ...on AccountStorageStateAccountActiveVariant {
                        AccountActive {
                            code
                            data
                        }
                    }
                }
            }
            `
        );
        removeTypeName(accounts[0]);
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
