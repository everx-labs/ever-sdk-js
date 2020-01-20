// @flow

export type TONConfigData = {
    defaultWorkchain: ?number,
    servers: string[],
    requestsServer?: string,
    queriesServer?: string,
    queriesWsServer?: string,
    log_verbose?: boolean,
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
    factorize(challengeHex: string): Promise<TONFactorizeResult>;

    modularPower(baseHex: string, exponentHex: string, modulusHex: string): Promise<string>;

    randomGenerateBytes(length: number, outputEncoding: TONOutputEncodingType): Promise<string>;

    ed25519Keypair(): Promise<TONKeyPairData>;

    publicKeyToString(key: string): Promise<string>;

    sha512(message: TONInputMessage, outputEncoding: TONOutputEncodingType): Promise<string>;

    sha256(message: TONInputMessage, outputEncoding: TONOutputEncodingType): Promise<string>;

    scrypt(params: TONScryptParams): Promise<string>;

    naclBoxKeypair(): Promise<TONKeyPairData>;

    naclBoxKeypairFromSecretKey(secretKey: string): Promise<TONKeyPairData>;

    naclSignKeypair(): Promise<TONKeyPairData>;

    naclSignKeypairFromSecretKey(secretKey: string): Promise<TONKeyPairData>;

    naclBox(params: TONNaclBoxParams): Promise<string>;

    naclBoxOpen(params: TONNaclBoxParams): Promise<string>;

    naclSecretBox(params: TONNaclSecretBoxParams): Promise<string>;

    naclSecretBoxOpen(params: TONNaclSecretBoxParams): Promise<string>;

    naclSign(message: TONInputMessage, key: string, outputEncoding: TONOutputEncodingType): Promise<string>;

    naclSignOpen(message: TONInputMessage, key: string, outputEncoding: TONOutputEncodingType): Promise<string>;

    naclSignDetached(message: TONInputMessage, key: string, outputEncoding: TONOutputEncodingType): Promise<string>;

    mnemonicWords(params: TONMnemonicWordsParams): Promise<string>;

    mnemonicFromRandom(params: TONMnemonicFromRandomParams): Promise<string>;

    mnemonicFromEntropy(params: TONMnemonicFromEntropyParams): Promise<string>;

    mnemonicIsValid(params: TONMnemonicIsValidParams): Promise<boolean>;

    mnemonicDeriveSignKeys(params: TONMnemonicDeriveSignKeysParams): Promise<TONKeyPairData>;

    hdkeyXPrvFromMnemonic(params: TONHDKeyFromMnemonicParams): Promise<string>;

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

    hdkeyXPrvSecret(serialized: string): Promise<string>;

    hdkeyXPrvPublic(serialized: string): Promise<string>;
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
    constructorParams: any,
    initParams?: any,
    keyPair: TONKeyPairData,
    workchainId?: number,
}

export type TONContractCalcDeployFeeParams = TONContractDeployParams & {
    emulateBalance?: bool,
    newAccount?: bool
}

export type TONContractDeployResult = {
    address: string,
    alreadyDeployed: boolean,
}

export type TONContractUnsignedMessage = {
    unsignedBytesBase64: string,
    bytesToSignBase64: string,
}

export type TONContractMessage = {
    messageId?: string,
    messageBodyBase64: string,
}

export type TONContractUnsignedDeployMessage = {
    address: string,
    signParams: TONContractUnsignedMessage,
}

export type TONContractUnsignedRunMessage = {
    abi: TONContractABI,
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
    unsignedBytesBase64: string,
    signBytesBase64: string,
    publicKeyHex: string,
}

export type TONContractCreateSignedDeployMessageParams = {
    address: string,
    createSignedParams: TONContractCreateSignedMessageParams,
}

export type TONContractCreateSignedRunMessageParams = {
    address: string,
    abi: TONContractABI,
    functionName: string,
    createSignedParams: TONContractCreateSignedMessageParams,
}

export type TONContractRunParams = {
    address: string,
    abi: TONContractABI,
    functionName: string,
    input: any,
    keyPair?: TONKeyPairData,
}

export type TONContractCalcRunFeeParams = TONContractRunParams & { emulateBalance?: bool }

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
    emulateBalance?: bool,
    newAccount?: bool
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
}


export type TONContractGetDeployDataResult = {
    imageBase64?: string,
    accountId?: string,
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

export type TONContractGetBocHashParams = {
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
    tr_type?: number,
    status?: number,
    block_id?: string,
    aborted?: boolean,
    now?: number,
    storage?: {
        status_change?: number,
    },
    compute?: {
        compute_type?: number,
        success?: boolean,
        exit_code?: number,
        skipped_reason?: number,
    },
    action?: {
        valid?: boolean,
        no_funds?: boolean,
        success?: boolean,
        result_code?: number,
    };
    out_msgs?: string[],
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

export interface TONContracts {
    load(params: TONContractLoadParams): Promise<TONContractLoadResult>;

    deploy(params: TONContractDeployParams): Promise<TONContractDeployResult>;

    run(params: TONContractRunParams): Promise<TONContractRunResult>;

    runLocal(params: TONContractRunParams): Promise<TONContractRunResult>;

    createDeployMessage(params: TONContractDeployParams): Promise<TONContractDeployMessage>;

    createRunMessage(params: TONContractRunParams): Promise<TONContractRunMessage>;

    createUnsignedDeployMessage(params: TONContractDeployParams): Promise<TONContractUnsignedDeployMessage>;

    createUnsignedRunMessage(params: TONContractRunParams): Promise<TONContractUnsignedRunMessage>;

    createSignedMessage(params: TONContractCreateSignedMessageParams): Promise<TONContractMessage>;

    createSignedDeployMessage(params: TONContractCreateSignedDeployMessageParams): Promise<TONContractDeployMessage>;

    createSignedRunMessage(params: TONContractCreateSignedRunMessageParams): Promise<TONContractRunMessage>;

    decodeRunOutput(params: TONContractDecodeRunOutputParams): Promise<TONContractRunResult>;

    decodeInputMessageBody(params: TONContractDecodeMessageBodyParams,): Promise<TONContractDecodeMessageBodyResult>;

    decodeOutputMessageBody(params: TONContractDecodeMessageBodyParams,): Promise<TONContractDecodeMessageBodyResult>;

    sendMessage(params: TONContractMessage): Promise<string>;

    processMessage(message: TONContractMessage, resultFields: string): Promise<QTransaction>;

    processDeployMessage(params: TONContractDeployMessage): Promise<TONContractDeployResult>;

    processRunMessage(params: TONContractRunMessage): Promise<TONContractRunResult>;

    calcRunFees(params: TONContractCalcRunFeeParams): Promise<TONContractCalcFeeResult>;

    calcDeployFees(params: TONContractCalcDeployFeeParams): Promise<TONContractCalcFeeResult>;

    calcMsgProcessFees(params: TONContractCalcMsgProcessingFeesParams): Promise<TONContractCalcFeeResult>
}


interface TONQueries {
    transactions: TONQCollection;
    messages: TONQCollection;
    blocks: TONQCollection;
    accounts: TONQCollection;
}


type DocEvent = (changeType: string, doc: any) => void;

type OrderBy = {
    path: string,
    sort: 'ASC' | 'DESC'
}

type Subscription = {
    unsubscribe: () => void
}

export interface TONQCollection {
    query(filter: any, result: string, orderBy?: OrderBy[], limit?: number): Promise<any>;

    subscribe(filter: any, result: string, onDocEvent: DocEvent): Subscription;

    waitFor(filter: any, result: string): Promise<any>;
}


export interface TONClient {
    crypto: TONCrypto;
    contracts: TONContracts;
    queries: TONQueries;
    close(): void;
}

