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
}

type TONContractDeployParams = {
    package: TONContractPackage,
    constructorParams: any,
    initParams?: any,
    keyPair: TONKeyPairData,
    workchainId?: number,
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
    transaction: QTransaction
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

type QCurrencyCollection = {
    grams: string,
}

const QMessageProcessing = {
    unknown: 0,
    queued: 1,
    processing: 2,
    preliminary: 3,
    proposed: 4,
    finalized: 5,
    refused: 6,
    transiting: 7,
};

const QTransactionProcessing = {
    unknown: 0,
    preliminary: 1,
    proposed: 2,
    finalized: 3,
    refused: 4,
};

const QAccountType = {
    uninit: 0,
    active: 1,
    frozen: 2
};

const QAccountStatusChange = {
    unchanged: 0,
    frozen: 1,
    deleted: 2,
};

type QAccount = {
    acc_type: number,
    addr: string,
    last_paid: string,
    due_payment: string,
    last_trans_lt: string,
    balance: QCurrencyCollection,
    split_depth: number,
    tick: boolean,
    tock: boolean,
    code: string,
    data: string,
    library: string,

}

const QTransactionType = {
    ordinary: 0,
    storage: 1,
    tick: 2,
    tock: 3,
    splitPrepare: 4,
    splitInstall: 5,
    mergePrepare: 6,
    mergeInstall: 7
};

const QComputeType = {
    skipped: 0,
    vm: 1,
};

const QSkippedReason = {
    noState: 0,
    badState: 1,
    noGas: 2,
};

export const TONAddressStringTypes = {
    AccountId: 'AccountId',
    Hex: 'Hex',
    Base64: 'Base64',
};

type TONContractAddressBase64Params = {
    url: boolean,
    test: boolean,
    bounce: boolean,
}

type TONContractConvertAddressParams = {
    address: string,
    convertTo: TONAddressStringTypes,
    base64Params?: TONContractAddressBase64Params,
}

type TONContractConvertAddressResult = {
    address: string,
}

type QTransaction = {
    id: string,
    tr_type: number,
    status: number,
    block_id: string,
    aborted: boolean,
    now: number,
    storage: {
        status_change: number,
    },
    compute: {
        type: number,
        success: boolean,
        exit_code: number,
        skipped_reason: number,
    },
    action: {
        valid: boolean,
        no_funds: boolean,
        success: boolean,
        result_code: number,
    };
    out_msgs: string[],
}

const QMessageType = {
    internal: 0,
    extIn: 1,
    extOut: 2
};

type QMessage = {
    id: string,
    msg_type: number,
    status: number,
    src: string,
    dst: string,
    created_at: number,
    body: string,
}

export default class TONContractsModule extends TONModule {
    config: TONConfigModule;

    queries: TONQueriesModule;

    async setup(): Promise<*> {
        this.config = this.context.getModule(TONConfigModule);
        this.queries = this.context.getModule(TONQueriesModule);
    }

    async load(params: TONContractLoadParams): Promise<TONContractLoadResult> {
        const accounts: QAccount[] = await this.queries.accounts.query({
            id: { eq: params.address },
        }, 'balance { grams }');
        if (accounts && accounts.length > 0) {
            return {
                id: params.address,
                balanceGrams: accounts[0].balance.grams,
            };
        }
        return {
            id: null,
            balanceGrams: null,
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
            workchainId: params.workchainId,
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
            workchainId: params.workchainId,
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
        this.config.log('request posted');
        if (response.status !== 200) {
            throw TONClientError.sendNodeRequestFailed(await response.text());
        }
    }


    async processMessage(message: TONContractMessage, resultFields: string): Promise<QTransaction> {
        let transaction: ?QTransaction = null;
        let retry = true;
        while (retry) {
            retry = false;
            await this.sendMessage(message);
            try {
                transaction = await this.queries.transactions.waitFor({
                    in_msg: { eq: message.messageId },
                    status: { eq: QTransactionProcessing.finalized },
                }, resultFields, 10_000);
            } catch (error) {
                if (error.code && error.code === TONClientError.code.WAIT_FOR_TIMEOUT) {
                    this.config.log('Timeout, retrying...');
                    retry = true;
                } else {
                    throw error;
                }
            }
        }
        if (!transaction) {
            throw TONClientError.internalError('transaction is null');
        }
        this.config.log('transaction received', {
            id: message.messageId,
            block_id: transaction.block_id,
            now: `${new Date(transaction.now * 1000).toISOString()} (${transaction.now})`,
        });
        return transaction;
    }


    async processDeployMessage(params: TONContractDeployMessage): Promise<TONContractDeployResult> {
        this.config.log('processDeployMessage', params);
        const transaction = await this.processMessage(
            params.message,
            transactionDetails,
        );
        await checkTransaction(transaction);
        await this.queries.accounts.waitFor({
            id: { eq: params.address },
            acc_type: { eq: QAccountType.active }
        }, 'id');
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
            return { output: null, transaction };
        }
        const externalMessages: QMessage[] = (await Promise.all(outputMessageIds.map((id) => {
            return this.queries.messages.waitFor(
                {
                    id: { eq: id },
                    status: { eq: QMessageProcessing.finalized },
                },
                'body msg_type',
            );
        }))).filter((x: QMessage) => {
            return x.msg_type === QMessageType.extOut;
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
        return {
            output: resultOutput ? resultOutput.output : null,
            transaction
        };
    }

    // Address processing

    async convertAddress(params: TONContractConvertAddressParams): Promise<TONContractConvertAddressResult> {
        return this.requestLibrary('contracts.address.convert', params);
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

        const account = await this.queries.accounts.waitFor({
                id: { eq: params.address },
                acc_type: { eq: QAccountType.active },
            },
            'code data'
        );

        removeTypeName(account);
        return this.requestLibrary('contracts.run.local', {
            address: params.address,
            account,
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
    if (!transaction.aborted) {
        return;
    }

    function nodeError(message: string, code: number, phase: string) {
        return new TONClientError(
            `${message} (${code}) at ${phase}`,
            code,
            TONClientError.source.NODE,
            {
                phase,
                transaction_id: transaction.id
            })
    }

    const storage = transaction.storage;
    if (storage) {
        const status = storage.status_change;
        if (status === QAccountStatusChange.frozen) {
            throw nodeError(
                'Account was frozen due storage phase',
                TONClientStorageStatus.frozen,
                TONClientTransactionPhase.storage
            );
        }
        if (status === QAccountStatusChange.deleted) {
            throw nodeError(
                'Account was deleted due storage phase',
                TONClientStorageStatus.deleted,
                TONClientTransactionPhase.storage
            );
        }
    }

    const compute = transaction.compute;
    if (compute) {
        if (compute.type === QComputeType.skipped) {
            const reason = compute.skipped_reason;
            if (reason === QSkippedReason.noState) {
                throw nodeError(
                    'Account has no code and data',
                    TONClientComputeSkippedStatus.noState,
                    TONClientTransactionPhase.computeSkipped
                );
            }
            if (reason === QSkippedReason.badState) {
                throw nodeError(
                    'Account has bad state: frozen or deleted',
                    TONClientComputeSkippedStatus.badState,
                    TONClientTransactionPhase.computeSkipped
                );
            }
            if (reason === QSkippedReason.noGas) {
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
        if (compute.type === QComputeType.vm) {
            if (!compute.success) {
                throw nodeError(
                    'VM terminated with exception',
                    compute.exit_code,
                    TONClientTransactionPhase.computeVm
                );
            }
        }
    }

    const action = transaction.action;
    if (action) {
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
    tr_type
    status
    out_msgs
    block_id
    now
    aborted
    storage {
        status_change
    }
    compute {
        type
        skipped_reason
        success
        exit_code
    }
    action {
        success
        valid
        result_code
        no_funds
  	}    
   `;
