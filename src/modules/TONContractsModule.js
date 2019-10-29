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
import { TONClient, TONClientError } from '../TONClient';
import { TONModule } from '../TONModule';
import TONConfigModule from './TONConfigModule';
import type { TONKeyPairData } from './TONCryptoModule';
import TONQueriesModule from './TONQueriesModule';

export type TONContractABIParameter = {
    name: string,
    type: string,
}

export type TONContractABIDataItem = {
    key: number,
    name: string,
    type: string,
}

export type TONContractABIFunction = {
    name: string,
    inputs: TONContractABIParameter[],
    outputs: TONContractABIParameter[],
};

export type TONContractABIEvent = {
    name: string,
    inputs: TONContractABIParameter[],
};

export type TONContractABI = {
    'ABI version': number,
    setTime?: boolean,
    functions: TONContractABIFunction[],
    events: TONContractABIEvent[],
    data: TONContractABIDataItem[],
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
    initParams?: any,
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
    internal?: boolean,
}

type TONContractDecodeMessageBodyParams = {
    abi: TONContractABI,
    bodyBase64: string,
    internal?: boolean,
}

type TONContractRunResult = {
    output: any,
}

type TONContractDecodeMessageBodyResult = {
    function: string,
    output: any,
}

type TONContractGetDeployDataParams = {
    abi?: TONContractABI,
    initParams?: any,
    imageBase64?: string,
    publicKeyHex: string,
}


type TONContractGetDeployDataResult = {
    imageBase64?: string,
    accountId?: string,
    dataBase64: string,
}

type TONContractGetCodeFromImageParams = {
    imageBase64: string,
}

type TONContractGetCodeFromImageResult = {
    codeBase64: string,
}

type TONContractCreateRunBodyParams = {
    abi: TONContractABI,
    function: string,
    params: any,
    internal?: boolean,
    keyPair?: TONKeyPairData,
}

type TONContractCreateRunBodyResult = {
    bodyBase64: string,
}

type TONContractGetFunctionIdParams = {
    abi: TONContractABI,
    function: string,
    input: boolean,
}

type TONContractGetFunctionIdResult = {
    id: number,
}

type QTransaction = {
    id: string,
    description: {
        Ordinary: {
            aborted: boolean,
            storage_ph: {
                status_change: string;
            },
            compute_ph: {
                Vm: {
                    success: boolean;
                    exit_code: number;
                };
                Skipped: {
                    reason: string,
                };
            };
            action: {
                valid: boolean;
                no_funds: boolean;
                success: boolean;
                result_code: number;
            };
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
        this.config.log('createDeployMessage', params);
        const message: {
            address: string,
            messageId: string,
            messageIdBase64: string,
            messageBodyBase64: string,
        } = await this.requestLibrary('contracts.deploy.message', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            initParams: params.initParams,
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
        this.config.log('createRunMessage', params);
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
            initParams: params.initParams,
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

    async getCodeFromImage(
        params: TONContractGetCodeFromImageParams
    ): Promise<TONContractGetCodeFromImageResult> {
        return this.requestLibrary('contracts.image.code', params);
    }

    async getDeployData(
        params: TONContractGetDeployDataParams
    ): Promise<TONContractGetDeployDataResult> {
        return this.requestLibrary('contracts.deploy.data', params);
    }

    async createRunBody(
        params: TONContractCreateRunBodyParams
    ): Promise<TONContractCreateRunBodyResult> {
        return this.requestLibrary('contracts.run.body', params);
    }

    async getFunctionId(
        params: TONContractGetFunctionIdParams
    ): Promise<TONContractGetFunctionIdResult> {
        return this.requestLibrary('contracts.function.id', params);
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
            throw TONClientError.clientDoesNotConfigured();
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
            throw TONClientError.sendNodeRequestFailed(await response.text());
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
        this.config.log('processDeployMessage', params);
        const transaction = await this.processMessage(
            params.message,
            transactionDetails,
        );
        await checkTransaction(transaction);
        await this.queries.accounts.waitFor({
            addr: { AddrStd: { workchain_id: { eq: 0 }, address: { eq: params.address } } }
        }, `
            storage {
                state {
                    ...on AccountStorageStateAccountActiveVariant {
                        AccountActive { split_depth } 
                    }
                }
            }
        `);
        return {
            address: params.address,
            alreadyDeployed: false,
        };
    }


    async processRunMessage(params: TONContractRunMessage): Promise<TONContractRunResult> {
        this.config.log('processRunMessage', params);
        const transaction = await this.processMessage(
            params.message,
            transactionDetails,
        );
        await checkTransaction(transaction);
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
            initParams: params.initParams,
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
            storage {
                state {
                    ...on AccountStorageStateAccountActiveVariant {
                        AccountActive {
                            code
                            data
                        }
                    }
                    ...on AccountStorageStateAccountUninitVariant {
                        AccountUninit {
                            None
                        }
                    }
                }
            }
            `
        );
        if (accounts.length === 0) {
            throw TONClientError.runLocalAccountDoesNotExists(params.functionName, params.address);
        }
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

export const TONClientTransactionPhase = {
    storage: 'storage',
    computeSkipped: 'computeSkipped',
    computeVm: "computeVm",
    action: 'action',
    unknown: 'unknown'
};

export const TONClientComputeSkippedStatus = {
    noState: 0,
    badState: 1,
    noGas: 2
};

export const TONClientStorageStatus = {
    unchanged: 0,
    frozen: 1,
    deleted: 2
};

async function checkTransaction(transaction: QTransaction) {
    const ordinary = transaction.description.Ordinary;
    if (!ordinary.aborted) {
        return;
    }

    function nodeError(message: string, code: number, phase: string) {
        return new TONClientError(message, code, TONClientError.source.NODE, {
            phase,
            transaction_id: transaction.id
        })
    }

    if (ordinary.storage_ph) {
        const status = ordinary.storage_ph.status_change;
        if (status === "Frozen") {
            throw nodeError(
                'Account was frozen due storage phase',
                TONClientStorageStatus.frozen,
                TONClientTransactionPhase.storage
            );
        }
        if (status === "Deleted") {
            throw nodeError(
                'Account was deleted due storage phase',
                TONClientStorageStatus.deleted,
                TONClientTransactionPhase.storage
            );
        }
    }

    if (ordinary.compute_ph) {
        if (ordinary.compute_ph.Skipped) {
            const reason = ordinary.compute_ph.Skipped.reason;
            if (reason === 'NoState') {
                throw nodeError(
                    'Account has no code and data',
                    TONClientComputeSkippedStatus.noState,
                    TONClientTransactionPhase.computeSkipped
                );
            }
            if (reason === 'BadState') {
                throw nodeError(
                    'Account has bad state: frozen or deleted',
                    TONClientComputeSkippedStatus.badState,
                    TONClientTransactionPhase.computeSkipped
                );
            }
            if (reason === 'NoGas') {
                throw nodeError(
                    'No gas to execute VM',
                    TONClientComputeSkippedStatus.noGas,
                    TONClientTransactionPhase.computeSkipped
                );
            }
            throw nodeError(
                'Compute phase skipped by unknown reason',
                -1,
                TONClientTransactionPhase.computeSkipped
            );
        }
        if (ordinary.compute_ph.Vm) {
            const vm = ordinary.compute_ph.Vm;
            if (!vm.success) {
                throw nodeError(
                    'VM terminated with exception',
                    vm.exit_code,
                    TONClientTransactionPhase.computeVm
                );
            }
        }
    }

    if (ordinary.action) {
        const action = ordinary.action;
        if (!action.success) {
            throw nodeError(
                action.no_funds
                    ? 'Too low balance to send outbound message'
                    : (!action.valid ? 'Outbound message is invalid' : 'Action phase failed'),
                action.result_code,
                TONClientTransactionPhase.action
            );
        }
    }

    throw nodeError(
        'Transaction aborted',
        -1,
        TONClientTransactionPhase.unknown
    );
}

const transactionDetails = `
    id
    status
    out_msgs
    description {
    	...on TransactionDescriptionOrdinaryVariant {
        Ordinary {
          aborted
          storage_ph {
            status_change
          }
          compute_ph {
            ...on TrComputePhaseSkippedVariant {
              Skipped {reason}
            }
            ...on TrComputePhaseVmVariant {
              Vm {
                success
                exit_code
              }
            }
          }
          action {
            success
            valid
            result_code
            no_funds
          }
        }
      }
  	}    
   `;
