/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 */
// @flow

import {
    Tracer, FORMAT_TEXT_MAP, Span, SpanContext,
} from 'opentracing';
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
    TONWaitForTransactionParams,
    QShardHash,
    TONMessageProcessingState,
    TONSigningBox,
    TONKeyPairData,
} from '../../types';

import { emptyTONErrorData, TONClientError, TONContractExitCode, TONErrorCode } from '../TONClientError';
import { TONModule } from '../TONModule';
import TONConfigModule from './TONConfigModule';
import TONCryptoModule, { TONOutputEncoding } from './TONCryptoModule';
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
    });
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

type SignResult = {
    signBytesBase64: string,
    publicKeyHex: string,
};

type SigningSource = {
    box: ?TONSigningBox,
    keys: TONKeyPairData,
}

async function getSigningSource(
    box?: TONSigningBox,
    keys?: TONKeyPairData,
): Promise<?SigningSource> {
    if (box) {
        return {
            box,
            keys: {
                secret: '',
                public: await box.getPublicKey(),
            },
        };
    }
    if (keys && keys.secret) {
        return {
            box: null,
            keys,
        };
    }
    return null;
}


export default class TONContractsModule extends TONModule implements TONContracts {
    config: TONConfigModule;
    crypto: TONCryptoModule;
    queries: TONQueriesModule;

    async setup(): Promise<*> {
        this.config = this.context.getModule(TONConfigModule);
        this.queries = this.context.getModule(TONQueriesModule);
        this.crypto = this.context.getModule(TONCryptoModule);
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
        const hasCode = params.bocBase64 || (params.codeBase64 && params.dataBase64);
        if (!hasCode) {
            const address = params.address;
            if (!address) {
                throw TONClientError.addressRequiredForRunLocal(await this.completeErrorData());
            }
            const account: any = await this.getAccount(address, false, {
                timeout: this.config.waitForTimeout(),
            });
            if (!account.code_hash) {
                throw TONClientError.accountCodeMissing(
                    address,
                    account.balance,
                    await this.completeErrorData(),
                );
            }
            const paramsFromAccount: $Shape<TONContractRunGetParams> = {};
            if (account.boc) {
                paramsFromAccount.bocBase64 = account.boc;
            }
            if (account.last_paid) {
                paramsFromAccount.last_paid = account.last_paid;
            }
            if (account.balance) {
                paramsFromAccount.balance = account.balance;
            }
            coreParams = {
                ...paramsFromAccount,
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
                throw TONClientError.invalidCons(emptyTONErrorData);
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
        const source = await getSigningSource(params.signingBox, params.keyPair);
        if (source) {
            const unsignedMessage = await this.createUnsignedDeployMessage({
                ...params,
                keyPair: source.keys,
            });
            return this.createSignedDeployMessage({
                ...(await this.internalSign(unsignedMessage.signParams, source)),
                unsignedMessage,
            });
        }
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
            address: message.address,
            message,
        };
    }


    async createRunMessage(
        params: TONContractRunParams,
        retryIndex?: number,
    ): Promise<TONContractRunMessage> {
        this.config.log('createRunMessage', params);
        const source = await getSigningSource(params.signingBox, params.keyPair);
        if (source) {
            const unsignedMessage = await this.createUnsignedRunMessage(params);
            return this.createSignedRunMessage({
                ...(await this.internalSign(unsignedMessage.signParams, source)),
                unsignedMessage,
            });
        }
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
        let header = params.header;
        if ((params.abi.header || []).includes('pubkey') && !header?.pubkey) {
            const keys = (await getSigningSource(params.signingBox, params.keyPair))?.keys;
            if (keys) {
                header = {
                    ...header,
                    pubkey: keys.public,
                }
            }
        }
        const signParams = await this.requestCore('contracts.run.encode_unsigned_message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            header: header,
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
            throw TONClientError.sendNodeRequestFailed(
                'Message already expired',
                await this.completeErrorData({
                    address: params.address,
                    message_id: params.messageId,
                }),
            );
        }
        const serverTimeDelta = Math.abs(await this.queries.serverTimeDelta(parentSpan));
        if (serverTimeDelta > this.config.outOfSyncThreshold()) {
            this.queries.dropServerTimeDelta();
            throw TONClientError.clockOutOfSync(await this.completeErrorData());
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
        });
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
                throw TONClientError.noBlocks(MASTERCHAIN_ID, await this.completeErrorData({
                    address,
                }));
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
                throw TONClientError.noBlocks(workchain, await this.completeErrorData({
                    address,
                }));
            }

            // if workchain is sharded then it is not Node SE and masterchain blocks missing
            // is error
            if (workchainLastBlock.after_merge || workchainLastBlock.shard !== '8000000000000000') {
                throw TONClientError.noBlocks(MASTERCHAIN_ID, await this.completeErrorData({
                    address,
                }));
            }

            // Take last block by seq_no
            workchainLastBlock = await this.findLastBlock(workchain, 'id', {
                shard: { eq: '8000000000000000' },
            });
            if (!workchainLastBlock) {
                throw TONClientError.invalidBlockchain(
                    'No starting Node SE block found',
                    await this.completeErrorData({
                        address,
                    }),
                );
            }
            return workchainLastBlock.id;
        }

        const shards: ?QShardHash[] = masterchainLastBlock?.master?.shard_hashes;
        if (!shards || shards.length === 0) {
            throw TONClientError.invalidBlockchain(
                'No `shard_hashes` field in masterchain block',
                await this.completeErrorData({
                    address,
                }),
            );
        }
        const shardBlock = await this.findMatchingShard(shards, address);
        const root_hash = shardBlock?.descr?.root_hash;
        if (!root_hash) {
            throw TONClientError.invalidBlockchain(
                'No `root_hash` field in shard descr',
                await this.completeErrorData({
                    address,
                }),
            );
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
                OR: {
                    prev_alt_ref: {
                        root_hash: { eq: current },
                    },
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
                    timeReport.push(
                        `Block [${block.id || ''}] `
                        + `has been received: ${end - start} ms, `
                        + `client time: ${Math.round(end / 1000)}, `
                        + `gen_utime: ${block.gen_utime || 0}`,
                    );
                } catch (error) {
                    this.config.log('Block waiting failed: ', error);
                    if (!infiniteWait) {
                        let resolvedError = error;
                        if (error.code === TONErrorCode.WAIT_FOR_TIMEOUT) {
                            resolvedError = TONClientError.networkSilent(
                                await this.completeErrorData({
                                    address,
                                    message_id: messageId,
                                    block_id: processing.lastBlockId,
                                    timeout,
                                    message_processing_state: processing,
                                    expire,
                                    sending_time: processing.sendingTime,
                                }),
                            );
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
                            throw TONClientError.invalidBlockchain(
                                'No field `transaction_id` in block',
                                await this.completeErrorData({
                                    address,
                                    message_id: messageId,
                                }),
                            );
                        }
                        const trStart = Date.now();
                        transaction = await this.queries.transactions.waitFor({
                            filter: { id: { eq: transactionId } },
                            result: TRANSACTION_FIELDS_ORDINARY,
                            timeout: MAX_TIMEOUT,
                        });
                        traceMessage(this.config.tracer, messageId, 'transactionReceived', {
                            transactionId,
                        });
                        timeReport.push(`Transaction [${transactionId}] has been received: ${Date.now() - trStart} ms`);
                    } else if ((block.gen_utime || 0) > stopTime) {
                        if (expire) {
                            traceMessage(this.config.tracer, messageId, 'messageExpired', {});
                            throw TONClientError.messageExpired(
                                await this.completeErrorData({
                                    address,
                                    message_id: messageId,
                                    sending_time: processing.sendingTime,
                                    expire: stopTime,
                                    block_time: block.gen_utime,
                                    block_id: processing.lastBlockId,
                                }),
                            );
                        }
                        throw TONClientError.transactionWaitTimeout(
                            await this.completeErrorData({
                                address,
                                message_id: messageId,
                                sending_time: processing.sendingTime,
                                timeout,
                                message_processing_state: processing,
                            }),
                        );
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
                throw TONClientError.accountMissing(
                    address,
                    await this.completeErrorData({
                        original_error: error,
                        address,
                        function_name: functionName,
                    }),
                );
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
            result: 'id acc_type balance balance_other { currency value } boc code_hash data_hash last_paid',
            timeout: 1000,
        });
        if (accounts.length === 0) {
            return TONClientError.accountMissing(
                address,
                await this.completeErrorData({
                    address,
                    original_error: error,
                }),
            );
        }
        const account = accounts[0];
        removeTypeName(account);
        try {
            await this.requestCore('contracts.resolve.error', {
                address,
                account,
                messageBase64,
                time,
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
                const isOriginalOrResolved = exitCode => (
                    TONClientError.isOriginalContractError(error, exitCode)
                    || TONClientError.isResolvedContractErrorAfterExpire(error, exitCode)
                );
                const useRetry = error.code === TONErrorCode.MESSAGE_EXPIRED
                    || isOriginalOrResolved(TONContractExitCode.REPLAY_PROTECTION)
                    || isOriginalOrResolved(TONContractExitCode.MESSAGE_EXPIRED);
                if (!useRetry || i === retriesCount) {
                    throw error;
                }
            }
        }
        throw TONClientError.internalError(
            'All retry attempts failed',
            await this.completeErrorData(),
        );
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
            result: 'id acc_type boc code_hash data_hash balance balance_other { currency value } last_paid',
            ...(waitParams && waitParams.timeout ? { timeout: waitParams.timeout } : {}),
            parentSpan,
        });
        if (accounts.length === 0) {
            throw TONClientError.accountMissing(
                address,
                await this.completeErrorData({
                    address,
                }),
            );
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
            TONClientError.addressRequiredForRunLocal(
                await this.completeErrorData({
                    address,
                    function_name: params.functionName,
                }),
            );
        }
        const account = params.account || (await this.getAccount(
            address,
            false,
            params.waitParams,
            parentSpan,
        ));
        if (!account.code_hash) {
            throw TONClientError.accountCodeMissing(
                address,
                (account: any).balance,
                await this.completeErrorData({
                    address,
                    function_name: params.functionName,
                }),
            );
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
            throw TONClientError.addressRequiredForRunLocal(await this.completeErrorData({
                address,
                function_name: params.functionName,
            }));
        }
        const account = params.account || (await this.getAccount(
            address,
            false,
            params.waitParams,
            parentSpan,
        ));
        if (!account.code_hash) {
            throw TONClientError.accountCodeMissing(
                address,
                (account: any).balance,
                await this.completeErrorData({
                    address,
                    function_name: params.functionName,
                }),
            );
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

    async internalSign(
        unsigned: TONContractUnsignedMessage,
        source: SigningSource,
    ): Promise<SignResult> {
        const message = {
            base64: unsigned.bytesToSignBase64,
        };
        const box = source.box;
        if (box) {
            return {
                signBytesBase64: await box.sign(message, TONOutputEncoding.Base64),
                publicKeyHex: await box.getPublicKey(),
            };
        }
        const keys = source.keys;
        if (keys) {
            const signKeys = await this.crypto.naclSignKeypairFromSecretKey(keys.secret);
            return {
                signBytesBase64: await this.crypto.naclSignDetached(
                    message,
                    signKeys.secret,
                    TONOutputEncoding.Base64,
                ),
                publicKeyHex: signKeys.public,
            };
        }
        throw TONClientError.signingSourceIsNotSpecified();
    }
}

TONContractsModule.moduleName = 'TONContractsModule';

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
