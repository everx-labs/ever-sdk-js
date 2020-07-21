/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */
// @flow

import { Tracer, FORMAT_TEXT_MAP, Span, SpanContext } from 'opentracing';
import type {
    QAccount,
    QBlock,
    QMessage,
    QTransaction,
    TONContractABI,
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
    TONContractRunGetParams,
    TONContractRunGetResult,
    TONContractRunMessageLocalParams,
    TONContractRunLocalResult,
    TONContractTransactionFees,
    TONWaitForTransactionParams,
    QShardHash,
    TONMessageProcessingState,
} from '../../types';

import { TONClientError, TONContractExitCode, TONErrorCode } from '../TONClient';
import { TONModule } from '../TONModule';
import TONConfigModule from './TONConfigModule';
import TONQueriesModule, { MAX_TIMEOUT } from './TONQueriesModule';

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

const MASTERCHAIN_ID = -1;

const EXTRA_TRANSACTION_WAITING_TIME = 10000;
const BLOCK_TRANSACTION_WAITING_TIME = 5000;

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

export function removeProps(obj: {}, paths: string[]): {} {
    let result = obj;
    paths.forEach((path) => {
        const dotPos = path.indexOf('.');
        if (dotPos < 0) {
            if (path in result) {
                result = { ...result };
                delete result[path];
            }
        } else {
            const name = path.substr(0, dotPos);
            const child = result[name];
            if (child) {
                const reducedChild = removeProps(child, [path.substr(dotPos + 1)]);
                if (reducedChild !== child) {
                    result = {
                        ...result,
                        [name]: reducedChild,
                    };
                }
            }
        }
    });
    return result;
}

function startMessageTraceSpan(
    tracer: Tracer,
    messageId: string,
    operationName: string,
    tags: { [string]: any },
): ?Span {
    if (!messageId) {
        return null;
    }
    const traceId = messageId.substr(0, 16);
    const spanId = messageId.substr(16, 16);
    let rootContext: ?SpanContext = null;
    try {
        rootContext = tracer.extract(FORMAT_TEXT_MAP, {
            'uber-trace-id': `${traceId}:${spanId}:0:1`,
        });
    } catch {
        // tracer can't create jaeger compatible span,
        // so we are fallback to return null
    }
    if (!rootContext) {
        return null;
    }
    return tracer.startSpan(operationName, {
        childOf: rootContext,
        tags,
    })
}

function traceMessage(
    tracer: Tracer,
    messageId: string,
    operationName: string,
    tags: { [string]: any },
) {
    const span = startMessageTraceSpan(tracer, messageId, operationName, tags);
    if (span) {
        span.finish();
    }
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
            filter: {
                id: { eq: params.address },
            },
            result: 'balance',
            parentSpan,
        });
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
            span.setTag('params', removeProps(params, ['keyPair.secret']));
            return this.internalDeployJs(params, span);
        }, parentSpan);
    }


    async run(
        params: TONContractRunParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        return this.context.trace('contracts.run', async (span: Span) => {
            span.setTag('params', removeProps(params, ['keyPair.secret']));
            return this.internalRunJs(params, span);
        }, parentSpan);
    }

    async runLocal(
        params: TONContractRunLocalParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunLocalResult> {
        return this.context.trace('contracts.runLocal', async (span: Span) => {
            span.setTag('params', removeProps(params, ['keyPair.secret']));
            return this.internalRunLocalJs(params, span);
        }, parentSpan);
    }

    async runMessageLocal(
        params: TONContractRunMessageLocalParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunLocalResult> {
        return this.context.trace('runMessageLocal', async (span: Span) => {
            span.setTag('params', removeProps(params, ['keyPair.secret']));
            return this.internalRunMessageLocalJs(params, span);
        }, parentSpan);
    }

    async runGet(
        params: TONContractRunGetParams,
    ): Promise<TONContractRunGetResult> {
        let coreParams: TONContractRunGetParams = params;
        if (!params.codeBase64 || !params.dataBase64) {
            const address = params.address;
            if (!address) {
                throw TONClientError.addressRequiredForRunLocal();
            }
            const account: any = await this.getAccount(address, false, {
                timeout: this.config.waitForTimeout(),
            });
            if (!account.code) {
                throw TONClientError.accountCodeMissing(address, account.balance);
            }
            account.codeBase64 = account.code;
            account.dataBase64 = account.data;
            delete account.code;
            delete account.data;
            coreParams = {
                ...account,
                ...params,
            };
        }
        return this.requestCore('tvm.get', coreParams);
    }

    arrayFromCONS(cons: any[]): any[] {
        const result = [];
        let item = cons;
        while (item) {
            if (!item.length === 2) {
                throw TONClientError.invalidCons();
            }
            result.push(item[0]);
            item = item[1];
        }
        return result;
    }


    // Message creation

    async createDeployMessage(
        params: TONContractDeployParams,
        retryIndex?: number,
    ): Promise<TONContractDeployMessage> {
        this.config.log('createDeployMessage', params);
        const message: TONContractMessage = await this.requestCore('contracts.deploy.message', {
            abi: params.package.abi,
            constructorHeader: params.constructorHeader,
            constructorParams: params.constructorParams,
            initParams: params.initParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
            workchainId: params.workchainId,
        });
        return {
            message,
            address: message.address,
        };
    }


    async createRunMessage(
        params: TONContractRunParams,
        retryIndex?: number,
    ): Promise<TONContractRunMessage> {
        this.config.log('createRunMessage', params);
        const message = await this.requestCore('contracts.run.message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            header: params.header,
            tryIndex: retryIndex,
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
        retryIndex?: number,
    ): Promise<TONContractUnsignedDeployMessage> {
        const result: {
            encoded: TONContractUnsignedMessage,
            addressHex: string,
        } = await this.requestCore('contracts.deploy.encode_unsigned_message', {
            abi: params.package.abi,
            constructorHeader: params.constructorHeader,
            tryIndex: retryIndex,
            constructorParams: params.constructorParams,
            initParams: params.initParams,
            imageBase64: params.package.imageBase64,
            publicKeyHex: params.keyPair.public,
            workchainId: params.workchainId,
        });
        return {
            address: result.addressHex,
            signParams: {
                ...result.encoded,
                abi: params.package.abi,
            },
        };
    }


    async createUnsignedRunMessage(
        params: TONContractRunParams,
        retryIndex?: number,
    ): Promise<TONContractUnsignedRunMessage> {
        const signParams = await this.requestCore('contracts.run.encode_unsigned_message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            header: params.header,
            tryIndex: retryIndex,
            input: params.input,
        });
        return {
            address: params.address,
            functionName: params.functionName,
            signParams: {
                ...signParams,
                abi: params.abi,
            },
        };
    }


    async createSignedMessage(
        params: TONContractCreateSignedMessageParams,
    ): Promise<TONContractMessage> {
        return this.requestCore('contracts.encode_message_with_sign', params);
    }


    async createSignedDeployMessage(
        params: TONContractCreateSignedDeployMessageParams,
    ): Promise<TONContractDeployMessage> {
        const message = await this.createSignedMessage({
            abi: params.unsignedMessage.signParams.abi,
            unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
            signBytesBase64: params.signBytesBase64,
            publicKeyHex: params.publicKeyHex,
        });
        message.expire = params.unsignedMessage.signParams.expire;
        return {
            address: params.unsignedMessage.address,
            message,
        };
    }


    async createSignedRunMessage(
        params: TONContractCreateSignedRunMessageParams,
    ): Promise<TONContractRunMessage> {
        const message = await this.createSignedMessage({
            abi: params.unsignedMessage.signParams.abi,
            unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
            signBytesBase64: params.signBytesBase64,
            publicKeyHex: params.publicKeyHex,
        });
        message.expire = params.unsignedMessage.signParams.expire;
        return {
            address: params.unsignedMessage.address,
            abi: params.unsignedMessage.signParams.abi,
            functionName: params.unsignedMessage.functionName,
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

    async decodeRunOutput(
        params: TONContractDecodeRunOutputParams,
    ): Promise<TONContractRunResult> {
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

    async ensureMessageId(message: TONContractMessage): Promise<string> {
        return message.messageId || await (async () => {
            const id = (await this.getBocHash({
                bocBase64: message.messageBodyBase64,
            })).hash;
            message.messageId = id;
            return id;
        })();
    }

    async sendMessage(
        params: TONContractMessage,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONMessageProcessingState> {
        const expire = params.expire;
        if (expire && (Date.now() > expire * 1000)) {
            throw TONClientError.sendNodeRequestFailed('Message already expired');
        }
        const serverTimeDelta = Math.abs(await this.queries.serverTimeDelta(parentSpan));
        if (serverTimeDelta > this.config.outOfSyncThreshold()) {
            this.queries.dropServerTimeDelta();
            throw TONClientError.clockOutOfSync();
        }
        const lastBlockId = await this.findLastShardBlock(params.address);
        const id = await this.ensureMessageId(params);
        const idBase64 = Buffer.from(id, 'hex').toString('base64');
        const messageSpan = this.context.startRootSpan(
            id.substr(0, 16),
            id.substr(16, 16),
            'messageProcessing',
        );
        messageSpan.addTags({
            messageId: id,
            messageSize: Math.ceil(params.messageBodyBase64.length * 3 / 4),
            address: params.address,
            expire: params.expire,
        })
        await this.queries.postRequests([
            {
                id: idBase64,
                body: params.messageBodyBase64,
            },
        ], parentSpan);
        messageSpan.finish();
        this.config.log('sendMessage. Request posted', id);
        return {
            lastBlockId,
            sendingTime: Math.round(Date.now() / 1000),
        };
    }

    async processMessage(
        message: TONContractMessage,
        resultFields: string,
        parentSpan?: (Span | SpanContext),
        retryIndex?: number,
        address?: string,
        abi?: TONContractABI,
        functionName?: string,
    ): Promise<QTransaction> {
        const processing = await this.sendMessage(message, parentSpan);
        const { transaction } = await this.waitForTransaction({
            message,
            messageProcessingState: processing,
            parentSpan,
            abi,
            functionName,
        });
        return transaction;
    }


    async findLastBlock(chain: number, result: string, additionalFilter?: any): Promise<?any> {
        const blocks = await this.queries.blocks.query({
            filter: { workchain_id: { eq: chain }, ...(additionalFilter || {}) },
            result,
            orderBy: [
                {
                    path: 'seq_no',
                    direction: 'DESC',
                },
            ],
            limit: 1,
        });
        return blocks.length > 0 ? blocks[0] : null;
    }

    async findMatchingShard(shards: QShardHash[], address: string): Promise<?QShardHash> {
        return this.requestCore('contracts.find.shard', {
            shards,
            address,
        });
    }

    async findLastShardBlock(address: string): Promise<string> {
        const addressParts = address.split(':');
        const workchain = addressParts.length > 1 ? Number.parseInt(addressParts[0], 10) : 0;


        // if account resides in master chain then starting point is last master chain block
        // generated before message was sent
        const masterchainLastBlock = await this.findLastBlock(
            MASTERCHAIN_ID,
            'id master { shard_hashes { workchain_id shard descr { root_hash } } }',
        );

        // if account resides in masterchain then starting point is last masterchain block
        if (workchain === MASTERCHAIN_ID) {
            if (!masterchainLastBlock) {
                throw TONClientError.noBlocks(MASTERCHAIN_ID);
            }
            return masterchainLastBlock.id;
        }

        // if account is from other chains then starting point is last account's shard block
        // To obtain it we take masterchain block to get shards configuration and select
        // matching shard
        if (!masterchainLastBlock) {
            // Node SE case - no masterchain, no sharding. Check that only one shard
            let workchainLastBlock = await this.findLastBlock(workchain, 'after_merge shard');
            if (!workchainLastBlock) {
                throw TONClientError.noBlocks(workchain);
            }

            // if workchain is sharded then it is not Node SE and masterchain blocks missing
            // is error
            if (workchainLastBlock.after_merge || workchainLastBlock.shard !== '8000000000000000') {
                throw TONClientError.noBlocks(MASTERCHAIN_ID);
            }

            // Take last block by seq_no
            workchainLastBlock = await this.findLastBlock(workchain, 'id', {
                shard: { eq: '8000000000000000' },
            });
            if (!workchainLastBlock) {
                throw TONClientError.invalidBlockchain('No starting Node SE block found');
            }
            return workchainLastBlock.id;
        }

        const shards: ?QShardHash[] = masterchainLastBlock?.master?.shard_hashes;
        if (!shards || shards.length === 0) {
            throw TONClientError.invalidBlockchain('No `shard_hashes` field in masterchain block');
        }
        const shardBlock = await this.findMatchingShard(shards, address);
        const root_hash = shardBlock?.descr?.root_hash;
        if (!root_hash) {
            throw TONClientError.invalidBlockchain('No `root_hash` field in shard descr');
        }
        return root_hash;
    }

    async checkShardMatch(block: QBlock, address: string): Promise<boolean> {
        return !!(await this.findMatchingShard([
            {
                workchain_id: block.workchain_id || 0,
                shard: block.shard || '',
            },
        ], address));
    }

    async waitNextBlock(current: string, address: string, timeout?: number): Promise<QBlock> {
        const block = await this.queries.blocks.waitFor({
            filter: {
                prev_ref: {
                    root_hash: { eq: current },
                },
            },
            result: BLOCK_FIELDS,
            timeout,
        });

        if (block?.after_split && !(await this.checkShardMatch(block, address))) {
            return this.queries.blocks.waitFor({
                filter: {
                    id: { ne: block.id },
                    prev_ref: {
                        root_hash: { eq: current },
                    },
                },
                result: BLOCK_FIELDS,
                timeout,
            });
        }
        return block;
    }

    async waitForTransaction(params: TONWaitForTransactionParams): Promise<TONContractRunResult> {
        // const legacyStart = Date.now();
        // const result = await this.legacyWaitForTransaction(params);
        // console.log('>>>', `Legacy wait for a: ${Date.now() - legacyStart} ms`);
        // return result;

        const totalStart = Date.now();
        const expire = params.message.expire || 0;
        const messageId = await this.ensureMessageId(params.message);
        const address = params.message.address;
        const processing = { ...params.messageProcessingState };
        let transaction = null;
        try {
            const timeReport = [];

            const stopTime = expire
                || Math.round((Date.now() + this.config.messageProcessingTimeout()) / 1000);

            const infiniteWait = params.infiniteWait !== false;
            const addTimeout = this.config.messageProcessingTimeout();
            while (!transaction) {
                const now = Date.now();
                const timeout = Math.max(stopTime, now) - now + addTimeout;
                let block: ?QBlock = null;
                try {
                    const start = Date.now();
                    block = await this.waitNextBlock(processing.lastBlockId, address, timeout);
                    const end = Date.now();
                    timeReport.push(`Block [${block.id || ''}] has been received: ${end - start} ms, client time: ${Math.round(end / 1000)}, gen_utime: ${block.gen_utime || 0}`);
                } catch (error) {
                    this.config.log('Block waiting failed: ', error);
                    if (!infiniteWait) {
                        let resolvedError = error;
                        if (error.code === TONErrorCode.WAIT_FOR_TIMEOUT) {
                            resolvedError = TONClientError.networkSilent({
                                messageId,
                                blockId: processing.lastBlockId,
                                timeout,
                                messageProcessingState: processing,
                                expire,
                                sendingTime: processing.sendingTime,
                            });
                        }
                        throw resolvedError;
                    }
                    this.config.log('Retry waiting.');
                }

                if (block) {
                    processing.lastBlockId = block.id || '';

                    const inMsg = (block.in_msg_descr || []).find(x => x.msg_id === messageId);
                    if (inMsg) {
                        const transactionId = inMsg.transaction_id;
                        if (!transactionId) {
                            throw TONClientError.invalidBlockchain('No field `transaction_id` in block');
                        }
                        const trStart = Date.now();
                        transaction = await this.queries.transactions.waitFor({
                            filter: { id: { eq: transactionId } },
                            result: TRANSACTION_FIELDS_ORDINARY,
                            timeout: MAX_TIMEOUT,
                        });
                        traceMessage(this.config.tracer, messageId, 'transactionReceived', {
                            transactionId,
                        })
                        timeReport.push(`Transaction [${transactionId}] has been received: ${Date.now() - trStart} ms`);
                    } else if ((block.gen_utime || 0) > stopTime) {
                        if (expire) {
                            traceMessage(this.config.tracer, messageId, 'messageExpired', {
                            });
                            throw TONClientError.messageExpired({
                                messageId,
                                sendingTime: processing.sendingTime,
                                expire: stopTime,
                                blockTime: block.gen_utime,
                                blockId: processing.lastBlockId,
                            });
                        }
                        throw TONClientError.transactionWaitTimeout({
                            messageId,
                            sendingTime: processing.sendingTime,
                            timeout,
                            messageProcessingState: processing,
                        });
                    }
                }
            }

            timeReport.splice(0, 0, `Transaction waiting time: ${Date.now() - totalStart} ms`);
            this.config.log(timeReport.join('\n'));
        } catch (error) {
            this.config.log('[waitForTransaction]', 'FAILED', error);
            if (error.code === TONErrorCode.MESSAGE_EXPIRED
                || error.code === TONErrorCode.TRANSACTION_WAIT_TIMEOUT) {
                throw await this.resolveDetailedError(
                    error,
                    params.message.messageBodyBase64,
                    processing.sendingTime,
                    address,
                );
            } else {
                throw error;
            }
        }

        return this.processTransaction(
            address,
            transaction,
            params.abi,
            params.functionName,
        );
    }

    async legacyWaitForTransaction(
        params: TONWaitForTransactionParams,
    ): Promise<TONContractRunResult> {
        const {
            message,
            abi,
            functionName,
            parentSpan,
        } = params;
        const messageId = await this.ensureMessageId(message);
        const config = this.config;
        config.log('[waitForTransaction]', functionName, message);
        let processingTimeout = config.messageProcessingTimeout();
        const promises = [];
        const serverInfo = await this.queries.getServerInfo(parentSpan);
        const operationId = serverInfo.supportsOperationId
            ? this.queries.generateOperationId()
            : undefined;
        let transaction: ?QTransaction = null;
        const sendingTime = Math.round(Date.now() / 1000);
        let blockTime = null;
        try {
            const expire = message.expire;
            if (expire) {
                // calculate timeout according to `expire` value (in seconds)
                // add processing timeout as master block validation time
                const blockTimeout = expire * 1000 - Date.now() + processingTimeout;
                // transaction timeout must be greater then block timeout
                processingTimeout = blockTimeout + EXTRA_TRANSACTION_WAITING_TIME;


                const waitExpired = async () => {
                    // wait for block, produced after `expire` to guarantee that message is rejected
                    let block: ?QBlock = null;
                    try {
                        block = await this.queries.blocks.waitFor({
                            filter: {
                                master: { min_shard_gen_utime: { ge: expire } },
                            },
                            result: 'id gen_utime in_msg_descr { transaction_id }',
                            timeout: blockTimeout,
                            parentSpan,
                            operationId,
                        });
                    } catch (error) {
                        if (TONClientError.isWaitForTimeout(error)) {
                            throw TONClientError.networkSilent({
                                messageId,
                                sendingTime: sendingTime,
                                expire,
                                timeout: blockTimeout,
                            });
                        } else {
                            throw error;
                        }
                    }

                    if (transaction) {
                        return;
                    }

                    const transactionId = block.in_msg_descr
                        && block.in_msg_descr.find(msg => !!msg.transaction_id)?.transaction_id;

                    if (!transactionId) {
                        throw TONClientError.internalError(
                            'Invalid block received: no transaction ID',
                        );
                    }

                    // check that transactions collection is updated
                    try {
                        await this.queries.transactions.waitFor({
                            filter: {
                                id: { eq: transactionId },
                            },
                            result: 'id',
                            timeout: BLOCK_TRANSACTION_WAITING_TIME,
                            parentSpan,
                            operationId,
                        });
                    } catch (error) {
                        if (TONClientError.isWaitForTimeout(error)) {
                            throw TONClientError.networkSilent({
                                messageId,
                                blockId: block.id,
                                transactionId,
                                timeout: BLOCK_TRANSACTION_WAITING_TIME,
                                sendingTime: sendingTime,
                                expire,
                            });
                        } else {
                            throw error;
                        }
                    }
                    blockTime = block.gen_utime;
                };

                promises.push(waitExpired());
            }

            // wait for message processing transaction
            promises.push(new Promise((resolve, reject) => {
                (async () => {
                    try {
                        transaction = await this.queries.transactions.waitFor({
                            filter: {
                                in_msg: { eq: messageId },
                                status: { eq: QTransactionProcessingStatus.finalized },
                            },
                            result: transactionDetails,
                            timeout: processingTimeout,
                            operationId,
                            parentSpan,
                        });
                        resolve();
                    } catch (error) {
                        if (TONClientError.isWaitForTimeout(error)) {
                            reject(TONClientError.transactionWaitTimeout({
                                messageId,
                                sendingTime,
                                timeout: processingTimeout,
                            }));
                        } else {
                            reject(error);
                        }
                    }
                })();
            }));

            try {
                await Promise.race(promises);
            } finally {
                if (promises.length > 1 && operationId) {
                    await this.queries.finishOperations([operationId]);
                }
            }

            if (!transaction) {
                throw TONClientError.messageExpired({
                    messageId,
                    sendingTime: sendingTime,
                    expire,
                    blockTime,
                });
            }
            const transactionNow = transaction.now || 0;
            this.config.log('[waitForTransaction]', 'TRANSACTION_RECEIVED', {
                id: transaction.id,
                blockId: transaction.block_id,
                now: `${new Date(transactionNow * 1000).toISOString()} (${transactionNow})`,
            });
        } catch (error) {
            this.config.log('[waitForTransaction]', 'FAILED', error);
            if (TONClientError.isMessageExpired(error)
                || TONClientError.isClientError(error, TONErrorCode.TRANSACTION_WAIT_TIMEOUT)) {
                const detailedError: any = await this.resolveDetailedError(
                    error,
                    message.messageBodyBase64,
                    Date.now(),
                    message.address,
                );
                const messageProcessingState = error.data?.messageProcessingState;
                if (messageProcessingState) {
                    if (detailedError.data) {
                        detailedError.data.messageProcessingState = messageProcessingState;
                    } else {
                        detailedError.data = {
                            messageProcessingState,
                        }
                    }
                }
                throw detailedError;
            } else {
                throw error;
            }
        }
        removeTypeName(transaction);
        const { output, fees } = await this.processTransaction(
            message.address,
            transaction,
            abi,
            functionName,
        );
        return {
            transaction,
            output,
            fees,
        };
    }

    async processTransaction(
        address: string,
        transaction: QTransaction,
        abi: ?TONContractABI,
        functionName: ?string,
    ): Promise<TONContractRunResult> {
        try {
            const result = await this.requestCore('contracts.process.transaction', {
                transaction,
                abi,
                functionName,
                address,
            });
            return {
                transaction,
                ...result,
            };
        } catch (error) {
            const accounts = await this.queries.accounts.query({
                filter: { id: { eq: address } },
                result: 'acc_type balance',
                timeout: 1000,
            });
            if (accounts.length === 0) {
                throw TONClientError.accountMissing(address);
            }
            throw error;
        }
    }

    async resolveDetailedError(
        error: Error,
        messageBase64: string,
        time: number,
        address: string,
    ) {
        const accounts = await this.queries.accounts.query({
            filter: { id: { eq: address } },
            result: 'id acc_type balance balance_other { currency value } code data last_paid',
            timeout: 1000,
        });
        if (accounts.length === 0) {
            return TONClientError.accountMissing(address);
        }
        const account = accounts[0];
        removeTypeName(account);
        try {
            await this.requestCore('contracts.resolve.error', {
                address,
                account,
                messageBase64,
                time: Math.round(time / 1000),
                mainError: error,
            });
        } catch (resolved) {
            return resolved;
        }
        return error;
    }

    async isDeployed(address: string, parentSpan?: (Span | SpanContext)): Promise<bool> {
        const account = await this.queries.accounts.query({
            filter: {
                id: { eq: address },
                acc_type: { eq: QAccountType.active },
            },
            result: 'id',
            parentSpan,
        });
        return account.length > 0;
    }

    async processDeployMessage(
        message: TONContractDeployMessage,
        parentSpan?: (Span | SpanContext),
        retryIndex?: number,
    ): Promise<TONContractDeployResult> {
        this.config.log('processDeployMessage', message);
        if (await this.isDeployed(message.address, parentSpan)) {
            return {
                address: message.address,
                alreadyDeployed: true,
            };
        }
        const processing = await this.sendMessage(message.message, parentSpan);
        return this.waitForDeployTransaction(message, processing, parentSpan);
    }

    async waitForDeployTransaction(
        deployMessage: TONContractDeployMessage,
        messageProcessingState: TONMessageProcessingState,
        parentSpan?: (Span | SpanContext),
        infiniteWait?: boolean,
    ): Promise<TONContractDeployResult> {
        const message = deployMessage.message;
        const result = await this.waitForTransaction({
            message,
            messageProcessingState,
            parentSpan,
            infiniteWait,
        });
        return {
            ...result,
            address: message.address,
            alreadyDeployed: false,
        };
    }


    async processRunMessage(
        runMessage: TONContractRunMessage,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        this.config.log('processRunMessage', runMessage);
        const processing = await this.sendMessage(runMessage.message, parentSpan);
        return this.waitForRunTransaction(runMessage, processing, parentSpan);
    }

    async waitForRunTransaction(
        runMessage: TONContractRunMessage,
        messageProcessingState: TONMessageProcessingState,
        parentSpan?: (Span | SpanContext),
        infiniteWait?: boolean,
    ): Promise<TONContractRunResult> {
        return this.waitForTransaction({
            message: runMessage.message,
            messageProcessingState,
            parentSpan,
            infiniteWait,
            abi: runMessage.abi,
            functionName: runMessage.functionName,
        });
    }

    /**
     * Deprecated. Use `runMessageLocal` instead.
     * @param params
     * @param waitParams
     * @param parentSpan
     * @returns {Promise<unknown>}
     */
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

    async convertAddress(
        params: TONContractConvertAddressParams,
    ): Promise<TONContractConvertAddressResult> {
        return this.requestCore('contracts.address.convert', params);
    }

    // Internals

    async internalDeployNative(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        return this.requestCore('contracts.deploy', {
            abi: params.package.abi,
            constructorHeader: params.constructorHeader,
            constructorParams: params.constructorParams,
            initParams: params.initParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
        });
    }


    async internalRunNative(params: TONContractRunParams): Promise<TONContractRunResult> {
        return this.requestCore('contracts.run', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            header: params.header,
            input: params.input,
            keyPair: params.keyPair,
        });
    }


    async retryCall(call: (index: number) => Promise<any>): Promise<any> {
        const retriesCount = this.config.messageRetriesCount();
        for (let i = 0; i <= retriesCount; i += 1) {
            if (i > 0) {
                this.config.log(`Retry #${i}`);
            }
            try {
                return await call(i);
            } catch (error) {
                // retry if message expired or if resolving returned that message expired/replay 
                // protection error or if transaction with message expired/replay protection error
                // returned
                const useRetry = error.code === TONErrorCode.MESSAGE_EXPIRED
                    || TONClientError.isContractError(error, TONContractExitCode.REPLAY_PROTECTION, true)
                    || TONClientError.isContractError(error, TONContractExitCode.MESSAGE_EXPIRED, true)
                    || TONClientError.isResolvedContractErrorAfterExpire(error, TONContractExitCode.REPLAY_PROTECTION)
                    || TONClientError.isResolvedContractErrorAfterExpire(error, TONContractExitCode.MESSAGE_EXPIRED);
                if (!useRetry || i === retriesCount) {
                    throw error;
                }
            }
        }
        throw TONClientError.internalError('All retry attempts failed');
    }


    async internalDeployJs(
        params: TONContractDeployParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractDeployResult> {
        this.config.log('Deploy start');
        return this.retryCall(async (retryIndex) => {
            const deployMessage = await this.createDeployMessage(params, retryIndex);
            if (await this.isDeployed(deployMessage.address, parentSpan)) {
                return {
                    address: deployMessage.address,
                    alreadyDeployed: true,
                };
            }
            const processing = await this.sendMessage(deployMessage.message, parentSpan);
            return this.waitForDeployTransaction(deployMessage, processing, parentSpan);
        });
    }


    async internalRunJs(
        params: TONContractRunParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult> {
        this.config.log('Run start');
        return this.retryCall(async (retryIndex) => {
            const runMessage = await this.createRunMessage(params, retryIndex);
            const processing = await this.sendMessage(runMessage.message, parentSpan);
            return this.waitForRunTransaction(runMessage, processing, parentSpan);
        });
    }


    async getAccount(
        address: string,
        active: boolean,
        waitParams?: TONContractAccountWaitParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<QAccount> {
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
        const accounts = await this.queries.accounts.query({
            filter,
            result: 'id acc_type code data balance balance_other { currency value } last_paid',
            ...(waitParams && waitParams.timeout ? { timeout: waitParams.timeout } : {}),
            parentSpan,
        });
        if (accounts.length === 0) {
            throw TONClientError.accountMissing(address);
        }
        const account = accounts[0];
        removeTypeName(account);
        this.config.log('getAccount. Account received', account);
        return account;
    }

    async internalRunLocalJs(
        params: TONContractRunLocalParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunLocalResult> {
        const address = params.address;
        if (!address) {
            throw TONClientError.addressRequiredForRunLocal();
        }
        const account = params.account || (await this.getAccount(
            address,
            false,
            params.waitParams,
            parentSpan,
        ));
        if (!account.code) {
            throw TONClientError.accountCodeMissing(address, (account: any).balance);
        }
        return this.requestCore('contracts.run.local', {
            address,
            account,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
            fullRun: params.fullRun,
        });
    }

    async internalRunMessageLocalJs(
        params: TONContractRunMessageLocalParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunLocalResult> {
        const address = params.address;
        if (!address) {
            throw TONClientError.addressRequiredForRunLocal();
        }
        const account = params.account || (await this.getAccount(
            address,
            false,
            params.waitParams,
            parentSpan,
        ));
        if (!account.code) {
            throw TONClientError.accountCodeMissing(address, (account: any).balance);
        }
        return this.requestCore('contracts.run.local.msg', {
            address,
            account,
            abi: params.abi,
            functionName: params.functionName,
            messageBase64: params.messageBodyBase64,
            fullRun: params.fullRun,
        });
    }
}

TONContractsModule.moduleName = 'TONContractsModule';

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
    total_fees
    storage {
        status_change
        storage_fees_collected
    }
    compute {
        compute_type
        skipped_reason
        success
        exit_code
        gas_fees
        gas_used
    }
    action {
        success
        valid
        result_code
        no_funds
        total_fwd_fees
        total_action_fees
    }
    out_messages {
        id
        msg_type
        body
        value
    }
   `;

const BLOCK_FIELDS = `
    id
    gen_utime
    after_split
    workchain_id
    shard
    in_msg_descr {
        msg_id
        transaction_id
    }
`;

const TRANSACTION_FIELDS_ORDINARY = `
    id
    aborted
    compute {
        skipped_reason
        exit_code
        success
        gas_fees
    }
    storage {
       status_change
       storage_fees_collected
    }
    action {
        success
        valid
        no_funds
        result_code
        total_fwd_fees
        total_action_fees
    }
    in_msg
    now
    out_msgs
    out_messages {
        id
        body
        msg_type
        value
    }
    status
    total_fees
`;
