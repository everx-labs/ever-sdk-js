// @flow

import { Span, SpanContext } from 'opentracing';
import type { Request } from './src/modules/TONQueriesModule';

export type TONConfigData = {
    servers: string[],
    log_verbose?: boolean,
    tracer?: ?Object, // opentracing.Tracer
    messageRetriesCount?: number,
    messageExpirationTimeout?: number,
    messageExpirationTimeoutGrowFactor?: number,
    messageProcessingTimeout?: number,
    messageProcessingTimeoutGrowFactor?: number,
    waitForTimeout?: number,
    useWebSocketForQueries?: boolean,
    accessKey?: string,
}

// Crypto

export type TONKeyPairData = {
    secret: string,
    public: string,
}

export type TONOutputEncodingType = 'Text' | 'Hex' | 'HexUppercase' | 'Base64';

export type TONInputMessage = {
    text?: string,
    hex?: string,
    base64?: string
}

export type TONFactorizeResult = {
    a: string,
    b: string
}

export type TONScryptParams = {
    password: TONInputMessage,
    salt: TONInputMessage,
    logN: number,
    r: number,
    p: number,
    dkLen: number,
    outputEncoding?: TONOutputEncodingType, // default Hex
}


export type TONNaclBoxParams = {
    message: TONInputMessage,
    nonce: string,
    theirPublicKey: string,
    secretKey: string,
    outputEncoding?: TONOutputEncodingType, // default Hex
}

export type TONNaclSecretBoxParams = {
    message: TONInputMessage,
    nonce: string,
    key: string,
    outputEncoding?: TONOutputEncodingType, // default Hex
}

export type TONMnemonicDictionaryType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type TONMnemonicWordCountType = 12 | 15 | 18 | 21 | 24;

export type TONMnemonicWordsParams = {
    dictionary?: TONMnemonicDictionaryType,
    wordCount?: TONMnemonicWordCountType,
}

export type TONMnemonicFromRandomParams = {
    dictionary?: TONMnemonicDictionaryType,
    wordCount?: TONMnemonicWordCountType,
}

export type TONMnemonicFromEntropyParams = {
    dictionary?: TONMnemonicDictionaryType,
    wordCount?: TONMnemonicWordCountType,
    entropy: TONInputMessage,
}

export type TONMnemonicIsValidParams = {
    dictionary?: TONMnemonicDictionaryType,
    wordCount?: TONMnemonicWordCountType,
    phrase: string,
}

export type TONMnemonicDeriveSignKeysParams = {
    dictionary?: TONMnemonicDictionaryType,
    wordCount?: TONMnemonicWordCountType,
    phrase: string,
    path?: string,
    compliant?: boolean,
}

export type TONHDKeyFromMnemonicParams = {
    dictionary?: TONMnemonicDictionaryType,
    wordCount?: TONMnemonicWordCountType,
    phrase: string,
}

export interface TONCrypto {
    factorize(
        challengeHex: string
    ): Promise<TONFactorizeResult>;

    modularPower(
        baseHex: string,
        exponentHex: string,
        modulusHex: string,
    ): Promise<string>;

    randomGenerateBytes(
        length: number,
        outputEncoding?: TONOutputEncodingType,
    ): Promise<string>;


    ed25519Keypair(): Promise<TONKeyPairData>;

    publicKeyToString(key: string): Promise<string>;

    sha512(
        message: TONInputMessage,
        outputEncoding?: TONOutputEncodingType,
    ): Promise<string>;

    sha256(
        message: TONInputMessage,
        outputEncoding?: TONOutputEncodingType,
    ): Promise<string>;

    scrypt(
        params: TONScryptParams
    ): Promise<string>;

    naclBoxKeypair(): Promise<TONKeyPairData>;

    naclBoxKeypairFromSecretKey(
        secretKey: string
    ): Promise<TONKeyPairData>;

    naclSignKeypair(): Promise<TONKeyPairData>;

    naclSignKeypairFromSecretKey(
        secretKey: string
    ): Promise<TONKeyPairData>;

    naclBox(
        params: TONNaclBoxParams
    ): Promise<string>;

    naclBoxOpen(
        params: TONNaclBoxParams
    ): Promise<string>;

    naclSecretBox(
        params: TONNaclSecretBoxParams
    ): Promise<string>;

    naclSecretBoxOpen(
        params: TONNaclSecretBoxParams
    ): Promise<string>;

    naclSign(
        message: TONInputMessage,
        key: string,
        outputEncoding?: TONOutputEncodingType,
    ): Promise<string>;

    naclSignOpen(
        message: TONInputMessage,
        key: string,
        outputEncoding?: TONOutputEncodingType,
    ): Promise<string>;

    naclSignDetached(
        message: TONInputMessage,
        key: string,
        outputEncoding?: TONOutputEncodingType,
    ): Promise<string>;

    // Mnemonic

    mnemonicWords(
        params?: TONMnemonicWordsParams
    ): Promise<string>;

    mnemonicFromRandom(
        params?: TONMnemonicFromRandomParams
    ): Promise<string>;

    mnemonicFromEntropy(
        params: TONMnemonicFromEntropyParams
    ): Promise<string>;

    mnemonicIsValid(
        params: TONMnemonicIsValidParams
    ): Promise<boolean>;

    mnemonicDeriveSignKeys(
        params: TONMnemonicDeriveSignKeysParams
    ): Promise<TONKeyPairData>;

    // HDKeys

    hdkeyXPrvFromMnemonic(
        params: TONHDKeyFromMnemonicParams
    ): Promise<string>;

    hdkeyXPrvDerive(
        serialized: string,
        index: number,
        hardened: boolean,
        compliant: boolean,
    ): Promise<string>;

    hdkeyXPrvDerivePath(
        serialized: string,
        path: string,
        compliant: boolean,
    ): Promise<string>;

    hdkeyXPrvSecret(
        serialized: string
    ): Promise<string>;

    hdkeyXPrvPublic(
        serialized: string
    ): Promise<string>;
}

// Contracts

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
    header?: string[],
    functions: TONContractABIFunction[],
    events: TONContractABIEvent[],
    data: TONContractABIDataItem[],
};

export type TONContractPackage = {
    abi: TONContractABI,
    imageBase64: string,
}

export type TONContractLoadParams = {
    address: string,
    includeImage: boolean,
}

export type TONContractLoadResult = {
    id: ?string,
    balanceGrams: ?string,
}

export type TONContractDeployParams = {
    package: TONContractPackage,
    constructorHeader?: any,
    constructorParams: any,
    initParams?: any,
    keyPair: TONKeyPairData,
    workchainId?: number,
}

export type TONContractCalcDeployFeeParams = TONContractDeployParams & {
    emulateBalance?: boolean,
    newAccount?: boolean
}

export type TONContractDeployResult = {
    address: string,
    alreadyDeployed: boolean,
    transaction?: QTransaction,
}

export type TONContractUnsignedMessage = {
    abi: TONContractABI,
    unsignedBytesBase64: string,
    bytesToSignBase64: string,
    expire?: number,
}

export type TONContractMessage = {
    messageId?: string,
    messageBodyBase64: string,
    expire?: number,
}

export type TONContractUnsignedDeployMessage = {
    address: string,
    signParams: TONContractUnsignedMessage,
}

export type TONContractUnsignedRunMessage = {
    address: string,
    functionName: string,
    signParams: TONContractUnsignedMessage,
}

export type TONContractDeployMessage = {
    address: string,
    message: TONContractMessage;
}

export type TONContractRunMessage = {
    address: string,
    abi: TONContractABI,
    functionName: string,
    message: TONContractMessage;
}

export type TONContractCreateSignedMessageParams = {
    abi: TONContractABI,
    unsignedBytesBase64: string,
    signBytesBase64: string,
    publicKeyHex?: string,
}

export type TONContractCreateSignedDeployMessageParams = {
    unsignedMessage: TONContractUnsignedDeployMessage,
    signBytesBase64: string,
    publicKeyHex?: string,
}

export type TONContractCreateSignedRunMessageParams = {
    unsignedMessage: TONContractUnsignedRunMessage,
    signBytesBase64: string,
    publicKeyHex?: string,
}

export type TONContractRunParams = {
    address: string,
    abi: TONContractABI,
    functionName: string,
    header?: any,
    input: any,
    keyPair?: TONKeyPairData,
}

export type TONContractAccountWaitParams = {
    transactionLt?: string,
    timeout?: number
}

export type TONContractCalcRunFeeParams = TONContractRunParams & {
    emulateBalance?: boolean,
    waitParams?: TONContractAccountWaitParams
}

export type TONContractRunLocalParams = TONContractRunParams & {
    waitParams?: TONContractAccountWaitParams
}

export type TONContractRunGetParams = {
    codeBase64?: string,
    dataBase64?: string,
    functionName: string,
    input?: any,
    address?: string,
    balance?: string,
    last_paid?: number,
}

export type TONContractRunGetResult = {
    output: any,
}

export type TONContractTransactionFees = {
    inMsgFwdFee: string,
    storageFee: string,
    gasFee: string,
    outMsgsFwdFee: string,
    totalAccountFees: string,
    totalOutput: string
}

export type TONContractCalcFeeResult = {
    fees: TONContractTransactionFees
}

export type TONContractCalcMsgProcessingFeesParams = {
    address: string,
    message: TONContractMessage,
    emulateBalance?: boolean,
    newAccount?: boolean,
    waitParams?: TONContractAccountWaitParams
}

export type TONContractDecodeRunOutputParams = {
    abi: TONContractABI,
    functionName: string,
    bodyBase64: string,
    internal?: boolean,
}

export type TONContractDecodeMessageBodyParams = {
    abi: TONContractABI,
    bodyBase64: string,
    internal?: boolean,
}

export type TONContractRunResult = {
    output: any,
    transaction: QTransaction
}

export type TONContractDecodeMessageBodyResult = {
    function: string,
    output: any,
}

export type TONContractGetDeployDataParams = {
    abi?: TONContractABI,
    initParams?: any,
    imageBase64?: string,
    publicKeyHex: string,
    workchainId?: number,
}

export type TONContractGetDeployDataResult = {
    imageBase64?: string,
    accountId?: string,
    address?: string,
    dataBase64: string,
}

export type TONContractGetCodeFromImageParams = {
    imageBase64: string,
}

export type TONContractGetCodeFromImageResult = {
    codeBase64: string,
}

export type TONContractCreateRunBodyParams = {
    abi: TONContractABI,
    function: string,
    header?: any,
    params: any,
    internal?: boolean,
    keyPair?: TONKeyPairData,
}

export type TONContractCreateRunBodyResult = {
    bodyBase64: string,
}

export type TONContractGetFunctionIdParams = {
    abi: TONContractABI,
    function: string,
    input: boolean,
}

export type TONContractGetFunctionIdResult = {
    id: number,
}

export type TONAddressStringVariantType = 'AccountId' | 'Hex' | 'Base64';

export type TONContractAddressBase64Params = {
    url: boolean,
    test: boolean,
    bounce: boolean,
}

export type TONContractConvertAddressParams = {
    address: string,
    convertTo: TONAddressStringVariantType,
    base64Params?: TONContractAddressBase64Params,
}

export type TONContractConvertAddressResult = {
    address: string,
}

export type TONContractBoc = {
    bocBase64: string,
}

export type TONContractGetBocHashResult = {
    hash: string,
}

export type QOtherCurrencyCollection = {
    currency: number,
    value: string,
}[]

export type QAccount = {
    acc_type?: number,
    id?: string,
    last_paid?: number,
    due_payment?: string,
    last_trans_lt?: string,
    balance?: string,
    split_depth?: number,
    tick?: boolean,
    tock?: boolean,
    code?: string,
    data?: string,
    library?: string,
}

export type QTransaction = {
    id?: string,
    account_addr: string,
    tr_type?: number,
    status?: number,
    block_id?: string,
    aborted?: boolean,
    now?: number,
    lt?: string,
    storage?: {
        status_change?: number,
        storage_fees_collected?: string,
    },
    compute?: {
        compute_type?: number,
        success?: boolean,
        exit_code?: number,
        skipped_reason?: number,
        gas_fees?: string,
        total_fwd_fees?: string,
    },
    action?: {
        valid?: boolean,
        no_funds?: boolean,
        success?: boolean,
        result_code?: number,
    };
    in_msg?: string,
    out_msgs?: string[],
    out_messages?: QMessage[],
}

export type QMessage = {
    id?: string,
    msg_type?: number,
    status?: number,
    src?: string,
    dst?: string,
    created_at?: number,
    body?: string,
}

export type InMsg = {
    transaction_id?: string
}

export type QBlock = {
    id?: string,
    tr_count?: number,
    in_msg_descr?: InMsg[]
}

export interface TONContracts {
    load(
        params: TONContractLoadParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractLoadResult>;

    // Facade functions

    deploy(
        params: TONContractDeployParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractDeployResult>;

    run(
        params: TONContractRunParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult>;

    runLocal(
        params: TONContractRunLocalParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult>;

    runGet(
        params: TONContractRunGetParams,
    ): Promise<TONContractRunGetResult>;

    arrayFromCONS(cons: any[]): any[];

    // Message creation

    createDeployMessage(
        params: TONContractDeployParams
    ): Promise<TONContractDeployMessage>;

    createRunMessage(
        params: TONContractRunParams
    ): Promise<TONContractRunMessage>;

    createUnsignedDeployMessage(
        params: TONContractDeployParams
    ): Promise<TONContractUnsignedDeployMessage>;

    createUnsignedRunMessage(
        params: TONContractRunParams
    ): Promise<TONContractUnsignedRunMessage>;

    createSignedMessage(
        params: TONContractCreateSignedMessageParams
    ): Promise<TONContractMessage>;

    createSignedDeployMessage(
        params: TONContractCreateSignedDeployMessageParams
    ): Promise<TONContractDeployMessage>;

    createSignedRunMessage(
        params: TONContractCreateSignedRunMessageParams
    ): Promise<TONContractRunMessage>;

    getCodeFromImage(
        params: TONContractGetCodeFromImageParams
    ): Promise<TONContractGetCodeFromImageResult>;

    getDeployData(
        params: TONContractGetDeployDataParams
    ): Promise<TONContractGetDeployDataResult>;

    createRunBody(
        params: TONContractCreateRunBodyParams
    ): Promise<TONContractCreateRunBodyResult>;

    getFunctionId(
        params: TONContractGetFunctionIdParams
    ): Promise<TONContractGetFunctionIdResult>;

    getBocHash(params: TONContractBoc): Promise<TONContractGetBocHashResult>;

    parseMessage(params: TONContractBoc): Promise<QMessage>;

    // Message parsing

    decodeRunOutput(
        params: TONContractDecodeRunOutputParams
    ): Promise<TONContractRunResult>;

    decodeInputMessageBody(
        params: TONContractDecodeMessageBodyParams,
    ): Promise<TONContractDecodeMessageBodyResult>;

    decodeOutputMessageBody(
        params: TONContractDecodeMessageBodyParams,
    ): Promise<TONContractDecodeMessageBodyResult>;

    // Message processing

    sendMessage(
        params: TONContractMessage,
        parentSpan?: (Span | SpanContext)
    ): Promise<string>;

    processMessage(
        message: TONContractMessage,
        resultFields: string,
        parentSpan?: (Span | SpanContext),
    ): Promise<QTransaction>;

    processDeployMessage(
        params: TONContractDeployMessage,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractDeployResult>;

    processRunMessage(
        params: TONContractRunMessage,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult>;

    processRunMessageLocal(
        params: TONContractRunMessage,
        waitParams?: TONContractAccountWaitParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractRunResult>;

    // Fee calculation

    calcRunFees(
        params: TONContractCalcRunFeeParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractCalcFeeResult>;

    calcDeployFees(
        params: TONContractCalcDeployFeeParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractCalcFeeResult>;

    calcMsgProcessFees(
        params: TONContractCalcMsgProcessingFeesParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<TONContractCalcFeeResult>;

    // Address processing

    convertAddress(
        params: TONContractConvertAddressParams,
    ): Promise<TONContractConvertAddressResult>;

    // Internals

    getAccount(
        address: string,
        active: boolean,
        waitParams?: TONContractAccountWaitParams,
        parentSpan?: (Span | SpanContext),
    ): Promise<QAccount>;
}


export type DocEvent = (changeType: string, doc: any) => void;

export type OrderBy = {
    path: string,
    sort: 'ASC' | 'DESC'
}

export type Subscription = {
    unsubscribe: () => void
}

export type TONQueryParams = {
    filter: any,
    result: string,
    orderBy?: OrderBy[],
    limit?: number,
    timeout?: number,
    operationId?: string,
    parentSpan?: (Span | SpanContext),
}

type TONQueryAggregateFnType =
    'COUNT'
    | 'MIN'
    | 'MAX'
    | 'SUM'
    | 'AVERAGE'
    | 'STDDEV_POPULATION'
    | 'STDDEV_SAMPLE'
    | 'VARIANCE_POPULATION'
    | 'VARIANCE_SAMPLE';

export type TONQueryAggregateField = {
    field: string,
    fn: TONQueryAggregateFnType,
}

export type TONQueryAggregateParams = {
    filter: any,
    fields: TONQueryAggregateField[],
    parentSpan?: (Span | SpanContext),
}

export type TONWaitForParams = {
    filter: any,
    result: string,
    timeout?: number,
    operationId?: string,
    parentSpan?: (Span | SpanContext),
}

export type TONSubscribeParams = {
    filter: any,
    result: string,
    onDocEvent: DocEvent,
    onError?: (err: Error) => void,
}

export interface TONQCollection {
    aggregate(params: TONQueryAggregateParams): Promise<string[]>;

    query(params: TONQueryParams): Promise<any>;

    query(
        filter: any,
        result: string,
        orderBy?: OrderBy[],
        limit?: number,
        timeout?: number,
        parentSpan?: (Span | SpanContext),
    ): Promise<any>;

    subscribe(params: TONSubscribeParams): Subscription;

    subscribe(
        filter: any,
        result: string,
        onDocEvent: DocEvent,
        onError?: (err: Error) => void,
    ): Subscription;

    waitFor(params: TONWaitForParams): Promise<any>;

    waitFor(
        filter: any,
        result: string,
        timeout?: number,
        parentSpan?: (Span | SpanContext),
    ): Promise<any>;
}

export interface TONQueries {
    transactions: TONQCollection;
    messages: TONQCollection;
    blocks: TONQCollection;
    blocks_signatures: TONQCollection;
    accounts: TONQCollection;

    getAccountsCount(
        parentSpan?: (Span | SpanContext)
    ): Promise<number>;

    getTransactionsCount(
        parentSpan?: (Span | SpanContext)
    ): Promise<number>;

    getAccountsTotalBalance(
        parentSpan?: (Span | SpanContext)
    ): Promise<string>;

    postRequests(
        requests: Request[],
        parentSpan?: (Span | SpanContext)
    ): Promise<any>;

    close(): Promise<void>;
}


// Client

export type TONAccessKeysManagementParams = {
    account: string,
    signedManagementAccessKey?: string,
    accountKeys?: TONKeyPairData,
}

export type TONAccessKeyRestrictions = {
    key: string,
    restrictToAccounts?: string[],
}

export type TONRegisterAccessKeysParams = TONAccessKeysManagementParams & {
    keys: TONAccessKeyRestrictions[],
}

export type TONRevokeAccessKeysParams = TONAccessKeysManagementParams & {
    keys: string[],
}

export interface ITONClient {
    crypto: TONCrypto;
    contracts: TONContracts;
    queries: TONQueries;

    trace<T>(
        name: string,
        f: (span: Span) => Promise<T>,
        parentSpan?: (Span | SpanContext),
    ): Promise<T>;

    getManagementAccessKey(): Promise<string>;

    registerAccessKeys(
        params: TONRegisterAccessKeysParams
    ): Promise<number>;

    revokeAccessKeys(
        params: TONRevokeAccessKeysParams
    ): Promise<number>;

    close(): Promise<void>;
}

export type TONClient = ITONClient;
