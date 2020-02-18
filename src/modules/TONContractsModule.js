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

import { Span, SpanContext } from 'opentracing';
import type {
    QAccount,
    QMessage,
    QTransaction,
    TONContractAccountWaitParams,
    TONContractConvertAddressParams,
    TONContractConvertAddressResult,
    TONContractCreateRunBodyParams,
    TONContractCreateRunBodyResult,
    TONContractCreateSignedDeployMessageParams,
    TONContractCreateSignedMessageParams,
    TONContractCreateSignedRunMessageParams,
    TONContractDecodeMessageBodyParams,
    TONContractDecodeMessageBodyResult,
    TONContractDecodeRunOutputParams,
    TONContractDeployMessage,
    TONContractDeployParams,
    TONContractDeployResult,
    TONContractCalcDeployFeeParams,
    TONContractBoc,
    TONContractGetBocHashResult,
    TONContractGetCodeFromImageParams,
    TONContractGetCodeFromImageResult,
    TONContractGetDeployDataParams,
    TONContractGetDeployDataResult,
    TONContractGetFunctionIdParams,
    TONContractGetFunctionIdResult,
    TONContractLoadParams,
    TONContractLoadResult,
    TONContractCalcRunFeeParams,
    TONContractTransactionFees,
    TONContractCalcFeeResult,
    TONContractCalcMsgProcessingFeesParams,
    TONContractMessage,
    TONContractRunLocalParams,
    TONContractRunMessage,
    TONContractRunParams,
    TONContractRunResult,
    TONContracts,
    TONContractUnsignedDeployMessage,
    TONContractUnsignedMessage,
    TONContractUnsignedRunMessage,
} from '../../types';
import { TONClientError } from '../TONClient';
import { TONModule } from '../TONModule';
import TONConfigModule from './TONConfigModule';
import TONQueriesModule from './TONQueriesModule';

export const TONAddressStringVariant = {
    AccountId: 'AccountId',
    Hex: 'Hex',
    Base64: 'Base64',
};

export const TONClientTransactionPhase = {
    storage: 'storage',
    computeSkipped: 'computeSkipped',
    computeVm: 'computeVm',
    action: 'action',
    unknown: 'unknown',
};

export const TONClientComputeSkippedStatus = {
    noState: 0,
    badState: 1,
    noGas: 2,
};

export const TONClientStorageStatus = {
    unchanged: 0,
    frozen: 1,
    deleted: 2,
};

export const QInMsgType = {
    external: 0,
    ihr: 1,
    immediately: 2,
    final: 3,
    transit: 4,
    discardedFinal: 5,
    discardedTransit: 6,
};

export const QOutMsgType = {
    external: 0,
    immediately: 1,
    outMsgNew: 2,
    transit: 3,
    dequeueImmediately: 4,
    dequeue: 5,
    transitRequired: 6,
    none: -1,
};

export const QMessageType = {
    internal: 0,
    extIn: 1,
    extOut: 2,
};

export const QMessageProcessingStatus = {
    unknown: 0,
    queued: 1,
    processing: 2,
    preliminary: 3,
    proposed: 4,
    finalized: 5,
    refused: 6,
    transiting: 7,
};

export const QBlockProcessingStatus = {
    unknown: 0,
    proposed: 1,
    finalized: 2,
    refused: 3,
};

export const QSplitType = {
    none: 0,
    split: 2,
    merge: 3,
};

export const QAccountType = {
    uninit: 0,
    active: 1,
    frozen: 2,
};

export const QTransactionType = {
    ordinary: 0,
    storage: 1,
    tick: 2,
    tock: 3,
    splitPrepare: 4,
    splitInstall: 5,
    mergePrepare: 6,
    mergeInstall: 7,
};

export const QTransactionProcessingStatus = {
    unknown: 0,
    preliminary: 1,
    proposed: 2,
    finalized: 3,
    refused: 4,
};

export const QAccountStatus = {
    uninit: 0,
    active: 1,
    frozen: 2,
    nonExist: 3,
};

export const QAccountStatusChange = {
    unchanged: 0,
    frozen: 1,
    deleted: 2,
};

export const QComputeType = {
    skipped: 0,
    vm: 1,
};

export const QSkipReason = {
    noState: 0,
    badState: 1,
    noGas: 2,
};

export const QBounceType = {
    negFunds: 0,
    noFunds: 1,
    ok: 2,
};

function removeProps(obj: {}, path: string): {} {
    const dotPos = path.indexOf('.');
    if (dotPos < 0) {
        if (!(path in obj)) {
            return obj;
        }
        const clone = { ...obj };
        delete clone[path];
        return clone;
    }
    const name = path.substr(0, dotPos);
    const child = obj[name];
    if (child) {
        const reducedChild = removeProps(child, path.substr(dotPos + 1));
        return reducedChild === child ? obj : {
            ...obj,
            [name]: reducedChild,
        };
    }
    return obj;
}

export default class TONContractsModule extends TONModule implements TONContracts {
    config: TONConfigModule;

    queries: TONQueriesModule;

    async setup(): Promise<*> {
        this.config = this.context.getModule(TONConfigModule);
        this.queries = this.context.getModule(TONQueriesModule);
    }

    async load(
        params: TONContractLoadParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractLoadResult> {
        const accounts: QAccount[] = await this.queries.accounts.query({
            id: { eq: params.address },
        }, 'balance', undefined, undefined, undefined, parentSpan);
        if (accounts && accounts.length > 0) {
            return {
                id: params.address,
                balanceGrams: accounts[0].balance,
            };
        }
        return {
            id: null,
            balanceGrams: null,
        };
    }


    // Facade functions

    async deploy(
        params: TONContractDeployParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractDeployResult> {
        return this.context.trace('contracts.deploy', async (span: Span) => {
            span.setTag('params', removeProps(params, 'keyPair.secret'));
            return this.internalDeployJs(params, span);
        }, parentSpan);
    }


    async run(
        params: TONContractRunParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        return this.context.trace('contracts.run', async (span: Span) => {
            span.setTag('params', removeProps(params, 'keyPair.secret'));
            return this.internalRunJs(params, span);
        }, parentSpan);
    }

    async runLocal(
        params: TONContractRunLocalParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        return this.context.trace('contracts.runLocal', async (span: Span) => {
            span.setTag('params', removeProps(params, 'keyPair.secret'));
            return this.internalRunLocalJs(params, span);
        }, parentSpan);
    }

    // Message creation

    async createDeployMessage(params: TONContractDeployParams): Promise<TONContractDeployMessage> {
        this.config.log('createDeployMessage', params);
        const message: {
            address: string,
            messageId: string,
            messageBodyBase64: string,
        } = await this.requestCore('contracts.deploy.message', {
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
                messageBodyBase64: message.messageBodyBase64,
            },
            address: message.address,
        };
    }


    async createRunMessage(params: TONContractRunParams): Promise<TONContractRunMessage> {
        this.config.log('createRunMessage', params);
        const message = await this.requestCore('contracts.run.message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
        return {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            message,
        };
    }

    async createUnsignedDeployMessage(
        params: TONContractDeployParams,
    ): Promise<TONContractUnsignedDeployMessage> {
        const result: {
            encoded: TONContractUnsignedMessage,
            addressHex: string,
        } = await this.requestCore('contracts.deploy.encode_unsigned_message', {
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
        };
    }


    async createUnsignedRunMessage(params: TONContractRunParams): Promise<TONContractUnsignedRunMessage> {
        const signParams = await this.requestCore('contracts.run.encode_unsigned_message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
        });
        return {
            abi: params.abi,
            functionName: params.functionName,
            signParams,
        };
    }


    async createSignedMessage(params: TONContractCreateSignedMessageParams): Promise<TONContractMessage> {
        return this.requestCore('contracts.encode_message_with_sign', params);
    }


    async createSignedDeployMessage(
        params: TONContractCreateSignedDeployMessageParams,
    ): Promise<TONContractDeployMessage> {
        const message = await this.createSignedMessage(params.createSignedParams);
        return {
            address: params.address,
            message,
        };
    }


    async createSignedRunMessage(
        params: TONContractCreateSignedRunMessageParams,
    ): Promise<TONContractRunMessage> {
        const message = await this.createSignedMessage(params.createSignedParams);
        return {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            message,
        };
    }

    async getCodeFromImage(
        params: TONContractGetCodeFromImageParams,
    ): Promise<TONContractGetCodeFromImageResult> {
        return this.requestCore('contracts.image.code', params);
    }

    async getDeployData(
        params: TONContractGetDeployDataParams,
    ): Promise<TONContractGetDeployDataResult> {
        return this.requestCore('contracts.deploy.data', params);
    }

    async createRunBody(
        params: TONContractCreateRunBodyParams,
    ): Promise<TONContractCreateRunBodyResult> {
        return this.requestCore('contracts.run.body', params);
    }

    async getFunctionId(
        params: TONContractGetFunctionIdParams,
    ): Promise<TONContractGetFunctionIdResult> {
        return this.requestCore('contracts.function.id', params);
    }

    async getBocHash(
        params: TONContractBoc,
    ): Promise<TONContractGetBocHashResult> {
        return this.requestCore('contracts.boc.hash', params);
    }

    async parseMessage(
        params: TONContractBoc,
    ): Promise<QMessage> {
        return this.requestCore('contracts.parse.message', params);
    }

    // Message parsing

    async decodeRunOutput(params: TONContractDecodeRunOutputParams): Promise<TONContractRunResult> {
        return this.requestCore('contracts.run.output', params);
    }


    async decodeInputMessageBody(
        params: TONContractDecodeMessageBodyParams,
    ): Promise<TONContractDecodeMessageBodyResult> {
        return this.requestCore('contracts.run.unknown.input', params);
    }


    async decodeOutputMessageBody(
        params: TONContractDecodeMessageBodyParams,
    ): Promise<TONContractDecodeMessageBodyResult> {
        return this.requestCore('contracts.run.unknown.output', params);
    }

    // Message processing

    async sendMessage(
        params: TONContractMessage,
        parentSpan?: (Span | SpanContext),
    ): Promise<string> {
        const id = params.messageId ||
            (await this.getBocHash({
                bocBase64: params.messageBodyBase64,
            })).hash;
        const idBase64 = Buffer.from(id, 'hex')
            .toString('base64');
        await this.queries.postRequests([
            {
                id: idBase64,
                body: params.messageBodyBase64,
            },
        ], parentSpan);
        this.config.log('sendMessage. Request posted');
        return id;
    }


    async processMessage(
        message: TONContractMessage,
        resultFields: string,
        parentSpan?: (Span | SpanContext),
    ): Promise<QTransaction> {
        const messageId = await this.sendMessage(message, parentSpan);
        const transaction: QTransaction = await this.queries.transactions.waitFor({
            in_msg: { eq: messageId },
            status: { eq: QTransactionProcessingStatus.finalized },
        }, resultFields, 40_000, parentSpan);
        const transactionNow = transaction.now || 0;
        this.config.log('processMessage. transaction received', {
            id: transaction.id,
            block_id: transaction.block_id,
            now: `${new Date(transactionNow * 1000).toISOString()} (${transactionNow})`,
        });
        return transaction;
    }


    async processDeployMessage(
        params: TONContractDeployMessage,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractDeployResult> {
        this.config.log('processDeployMessage', params);
        const transaction = await this.processMessage(
            params.message,
            transactionDetails,
            parentSpan,
        );
        await checkTransaction(transaction);
        this.config.log('processDeployMessage. End');
        return {
            address: params.address,
            alreadyDeployed: false,
            transaction,
        };
    }


    async processRunMessage(
        params: TONContractRunMessage,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        this.config.log('processRunMessage', params);
        const transaction = await this.processMessage(
            params.message,
            transactionDetails,
            parentSpan,
        );
        await checkTransaction(transaction);
        const outputMessages = transaction.out_messages;
        if (!outputMessages || outputMessages.length === 0) {
            return {
                output: null,
                transaction,
            };
        }
        const externalMessages: QMessage[] = outputMessages.filter((x: QMessage) => {
            return x.msg_type === QMessageType.extOut;
        });
        this.config.log('processRunMessage. Before messages parse');
        const outputs = await Promise.all(externalMessages.map((x: QMessage) => {
            return this.decodeOutputMessageBody({
                abi: params.abi,
                bodyBase64: x.body || '',
            });
        }));
        const resultOutput = outputs.find((x: TONContractDecodeMessageBodyResult) => {
            return x.function.toLowerCase() === params.functionName.toLowerCase();
        });
        this.config.log('processRunMessage. End');
        return {
            output: resultOutput ? resultOutput.output : null,
            transaction,
        };
    }

    async processRunMessageLocal(
        params: TONContractRunMessage,
        waitParams?: TONContractAccountWaitParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        this.config.log('processRunMessageLocal', params);

        const account = await this.getAccount(params.address, true, waitParams, parentSpan);

        return this.requestCore('contracts.run.local.msg', {
            address: params.address,
            account,
            abi: params.abi,
            functionName: params.functionName,
            messageBase64: params.message.messageBodyBase64,
        });
    }

    // Fee calculation

    bigBalance = '0x10000000000000';

    async calcRunFees(
        params: TONContractCalcRunFeeParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractCalcFeeResult> {
        this.config.log('calcRunFees', params);

        const account = await this.getAccount(params.address, true, params.waitParams, parentSpan);

        if (params.emulateBalance) {
            account.balance = this.bigBalance;
        }

        return this.requestCore('contracts.run.fee', {
            address: params.address,
            account,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }

    async calcDeployFees(
        params: TONContractCalcDeployFeeParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractCalcFeeResult> {
        this.config.log('calcDeployFees', params);

        const message = await this.createDeployMessage(params);

        return this.calcMsgProcessFees({
            address: message.address,
            message: message.message,
            emulateBalance: params.emulateBalance,
            newAccount: params.newAccount,
        }, parentSpan);
    }

    async calcMsgProcessFees(
        params: TONContractCalcMsgProcessingFeesParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractCalcFeeResult> {
        this.config.log('calcMsgProcessFees', params);

        let account: QAccount = {
            balance: this.bigBalance,
            id: params.address,
            last_paid: Math.floor(Date.now() / 1000),
        };

        if (!params.newAccount) {
            account = await this.getAccount(params.address, false, params.waitParams, parentSpan);
        }

        if (params.emulateBalance) {
            account.balance = this.bigBalance;
        }

        return this.requestCore('contracts.run.fee.msg', {
            address: params.address,
            account,
            messageBase64: params.message.messageBodyBase64,
        });
    }

    // Address processing

    async convertAddress(params: TONContractConvertAddressParams): Promise<TONContractConvertAddressResult> {
        return this.requestCore('contracts.address.convert', params);
    }

    // Internals

    async internalDeployNative(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        return this.requestCore('contracts.deploy', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            initParams: params.initParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
        });
    }


    async internalRunNative(params: TONContractRunParams): Promise<TONContractRunResult> {
        return await this.requestCore('contracts.run', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }


    async internalDeployJs(
        params: TONContractDeployParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractDeployResult> {
        this.config.log('Deploy start');
        const message = await this.createDeployMessage(params);
        return this.processDeployMessage(message, parentSpan);
    }


    async internalRunJs(
        params: TONContractRunParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        this.config.log('Run start');
        const message = await this.createRunMessage(params);
        return this.processRunMessage(message, parentSpan);
    }

    async getAccount(
        address: string,
        active: boolean,
        waitParams?: TONContractAccountWaitParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<QAccount> {
        function removeTypeName(obj: any) {
            if (obj.__typename) {
                delete obj.__typename;
            }
            Object.values(obj)
                .forEach((value) => {
                    if (!!value && typeof value === 'object') {
                        removeTypeName(value);
                    }
                });
        }

        const filter: { [string]: any } = {
            id: { eq: address },
        };
        if (waitParams && waitParams.transactionLt) {
            filter.last_trans_lt = { ge: waitParams.transactionLt };
        }
        if (active) {
            filter.acc_type = { eq: QAccountType.active };
        }

        this.config.log('getAccount. Filter', filter);
        const account = await this.queries.accounts.waitFor(
            filter,
            'id code data balance balance_other { currency value } last_paid',
            waitParams && waitParams.timeout,
            parentSpan,
        );

        removeTypeName(account);
        this.config.log('getAccount. Account recieved', account);
        return account;
    }

    async internalRunLocalJs(
        params: TONContractRunLocalParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        const account = await this.getAccount(params.address, true, params.waitParams, parentSpan);

        return this.requestCore('contracts.run.local', {
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
                transaction_id: transaction.id,
            },
        );
    }

    const storage = transaction.storage;
    if (storage) {
        const status = storage.status_change;
        if (status === QAccountStatusChange.frozen) {
            throw nodeError(
                'Account was frozen due storage phase',
                TONClientStorageStatus.frozen,
                TONClientTransactionPhase.storage,
            );
        }
        if (status === QAccountStatusChange.deleted) {
            throw nodeError(
                'Account was deleted due storage phase',
                TONClientStorageStatus.deleted,
                TONClientTransactionPhase.storage,
            );
        }
    }

    const compute = transaction.compute;
    if (compute) {
        if (compute.compute_type === QComputeType.skipped) {
            const reason = compute.skipped_reason;
            if (reason === QSkipReason.noState) {
                throw nodeError(
                    'Account has no code and data',
                    TONClientComputeSkippedStatus.noState,
                    TONClientTransactionPhase.computeSkipped,
                );
            }
            if (reason === QSkipReason.badState) {
                throw nodeError(
                    'Account has bad state: frozen or deleted',
                    TONClientComputeSkippedStatus.badState,
                    TONClientTransactionPhase.computeSkipped,
                );
            }
            if (reason === QSkipReason.noGas) {
                throw nodeError(
                    'No gas to execute VM',
                    TONClientComputeSkippedStatus.noGas,
                    TONClientTransactionPhase.computeSkipped,
                );
            }
            throw nodeError(
                'Compute phase skipped by unknown reason',
                -1,
                TONClientTransactionPhase.computeSkipped,
            );
        }
        if (compute.compute_type === QComputeType.vm) {
            if (!compute.success) {
                throw nodeError(
                    'VM terminated with exception',
                    compute.exit_code || 0,
                    TONClientTransactionPhase.computeVm,
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
                action.result_code || 0,
                TONClientTransactionPhase.action,
            );
        }
    }

    throw nodeError(
        'Transaction aborted',
        -1,
        TONClientTransactionPhase.unknown,
    );
}

const transactionDetails = `
    id
    in_msg
    tr_type
    status
    in_msg
    out_msgs
    block_id
    now
    aborted
    lt
    storage {
        status_change
    }
    compute {
        compute_type
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
    out_messages {
        id
        msg_type
        body
    }
   `;
