

import {ResponseHandler} from "./bin";

interface IClient {
    request(
        functionName: string,
        functionParams?: any,
        responseHandler?: ResponseHandler
    ): Promise<any>;
}

// client module


export type ClientError = {
    code: number,
    message: string,
    data: any
};

export type ClientConfig = {
    network?: NetworkConfig,
    crypto?: CryptoConfig,
    abi?: AbiConfig
};

export type NetworkConfig = {
    server_address?: string,
    network_retries_count?: number,
    message_retries_count?: number,
    message_processing_timeout?: number,
    wait_for_timeout?: number,
    out_of_sync_threshold?: bigint,
    access_key?: string
};

export type CryptoConfig = {
    mnemonic_dictionary?: number,
    mnemonic_word_count?: number,
    hdkey_derivation_path?: string,
    hdkey_compliant?: boolean
};

export type AbiConfig = {
    workchain?: number,
    message_expiration_timeout?: number,
    message_expiration_timeout_grow_factor?: number
};

export type ResultOfGetApiReference = {
    api: any
};

export type ResultOfVersion = {
    version: string
};

export type ResultOfBuildInfo = {
    build_info: any
};

export class ClientModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    get_api_reference(): Promise<ResultOfGetApiReference> {
        return this.client.request('client.get_api_reference');
    }

    version(): Promise<ResultOfVersion> {
        return this.client.request('client.version');
    }

    build_info(): Promise<ResultOfBuildInfo> {
        return this.client.request('client.build_info');
    }
}

// crypto module


export type SigningBoxHandle = number;

export type ParamsOfFactorize = {
    composite: string
};

export type ResultOfFactorize = {
    factors: string[]
};

export type ParamsOfModularPower = {
    base: string,
    exponent: string,
    modulus: string
};

export type ResultOfModularPower = {
    modular_power: string
};

export type ParamsOfTonCrc16 = {
    data: string
};

export type ResultOfTonCrc16 = {
    crc: number
};

export type ParamsOfGenerateRandomBytes = {
    length: number
};

export type ResultOfGenerateRandomBytes = {
    bytes: string
};

export type ParamsOfConvertPublicKeyToTonSafeFormat = {
    public_key: string
};

export type ResultOfConvertPublicKeyToTonSafeFormat = {
    ton_public_key: string
};

export type KeyPair = {
    public: string,
    secret: string
};

export type ParamsOfSign = {
    unsigned: string,
    keys: KeyPair
};

export type ResultOfSign = {
    signed: string,
    signature: string
};

export type ParamsOfVerifySignature = {
    signed: string,
    public: string
};

export type ResultOfVerifySignature = {
    unsigned: string
};

export type ParamsOfHash = {
    data: string
};

export type ResultOfHash = {
    hash: string
};

export type ParamsOfScrypt = {
    password: string,
    salt: string,
    log_n: number,
    r: number,
    p: number,
    dk_len: number
};

export type ResultOfScrypt = {
    key: string
};

export type ParamsOfNaclSignKeyPairFromSecret = {
    secret: string
};

export type ParamsOfNaclSign = {
    unsigned: string,
    secret: string
};

export type ResultOfNaclSign = {
    signed: string
};

export type ParamsOfNaclSignOpen = {
    signed: string,
    public: string
};

export type ResultOfNaclSignOpen = {
    unsigned: string
};

export type ResultOfNaclSignDetached = {
    signature: string
};

export type ParamsOfNaclBoxKeyPairFromSecret = {
    secret: string
};

export type ParamsOfNaclBox = {
    decrypted: string,
    nonce: string,
    their_public: string,
    secret: string
};

export type ResultOfNaclBox = {
    encrypted: string
};

export type ParamsOfNaclBoxOpen = {
    encrypted: string,
    nonce: string,
    their_public: string,
    secret: string
};

export type ResultOfNaclBoxOpen = {
    decrypted: string
};

export type ParamsOfNaclSecretBox = {
    decrypted: string,
    nonce: string,
    key: string
};

export type ParamsOfNaclSecretBoxOpen = {
    encrypted: string,
    nonce: string,
    key: string
};

export type ParamsOfMnemonicWords = {
    dictionary?: number
};

export type ResultOfMnemonicWords = {
    words: string
};

export type ParamsOfMnemonicFromRandom = {
    dictionary?: number,
    word_count?: number
};

export type ResultOfMnemonicFromRandom = {
    phrase: string
};

export type ParamsOfMnemonicFromEntropy = {
    entropy: string,
    dictionary?: number,
    word_count?: number
};

export type ResultOfMnemonicFromEntropy = {
    phrase: string
};

export type ParamsOfMnemonicVerify = {
    phrase: string,
    dictionary?: number,
    word_count?: number
};

export type ResultOfMnemonicVerify = {
    valid: boolean
};

export type ParamsOfMnemonicDeriveSignKeys = {
    phrase: string,
    path?: string,
    dictionary?: number,
    word_count?: number
};

export type ParamsOfHDKeyXPrvFromMnemonic = {
    phrase: string
};

export type ResultOfHDKeyXPrvFromMnemonic = {
    xprv: string
};

export type ParamsOfHDKeyDeriveFromXPrv = {
    xprv: string,
    child_index: number,
    hardened: boolean
};

export type ResultOfHDKeyDeriveFromXPrv = {
    xprv: string
};

export type ParamsOfHDKeyDeriveFromXPrvPath = {
    xprv: string,
    path: string
};

export type ResultOfHDKeyDeriveFromXPrvPath = {
    xprv: string
};

export type ParamsOfHDKeySecretFromXPrv = {
    xprv: string
};

export type ResultOfHDKeySecretFromXPrv = {
    secret: string
};

export type ParamsOfHDKeyPublicFromXPrv = {
    xprv: string
};

export type ResultOfHDKeyPublicFromXPrv = {
    public: string
};

export class CryptoModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    factorize(params: ParamsOfFactorize): Promise<ResultOfFactorize> {
        return this.client.request('crypto.factorize', params);
    }

    modular_power(params: ParamsOfModularPower): Promise<ResultOfModularPower> {
        return this.client.request('crypto.modular_power', params);
    }

    ton_crc16(params: ParamsOfTonCrc16): Promise<ResultOfTonCrc16> {
        return this.client.request('crypto.ton_crc16', params);
    }

    generate_random_bytes(params: ParamsOfGenerateRandomBytes): Promise<ResultOfGenerateRandomBytes> {
        return this.client.request('crypto.generate_random_bytes', params);
    }

    convert_public_key_to_ton_safe_format(params: ParamsOfConvertPublicKeyToTonSafeFormat): Promise<ResultOfConvertPublicKeyToTonSafeFormat> {
        return this.client.request('crypto.convert_public_key_to_ton_safe_format', params);
    }

    generate_random_sign_keys(): Promise<KeyPair> {
        return this.client.request('crypto.generate_random_sign_keys');
    }

    sign(params: ParamsOfSign): Promise<ResultOfSign> {
        return this.client.request('crypto.sign', params);
    }

    verify_signature(params: ParamsOfVerifySignature): Promise<ResultOfVerifySignature> {
        return this.client.request('crypto.verify_signature', params);
    }

    sha256(params: ParamsOfHash): Promise<ResultOfHash> {
        return this.client.request('crypto.sha256', params);
    }

    sha512(params: ParamsOfHash): Promise<ResultOfHash> {
        return this.client.request('crypto.sha512', params);
    }

    scrypt(params: ParamsOfScrypt): Promise<ResultOfScrypt> {
        return this.client.request('crypto.scrypt', params);
    }

    nacl_sign_keypair_from_secret_key(params: ParamsOfNaclSignKeyPairFromSecret): Promise<KeyPair> {
        return this.client.request('crypto.nacl_sign_keypair_from_secret_key', params);
    }

    nacl_sign(params: ParamsOfNaclSign): Promise<ResultOfNaclSign> {
        return this.client.request('crypto.nacl_sign', params);
    }

    nacl_sign_open(params: ParamsOfNaclSignOpen): Promise<ResultOfNaclSignOpen> {
        return this.client.request('crypto.nacl_sign_open', params);
    }

    nacl_sign_detached(params: ParamsOfNaclSign): Promise<ResultOfNaclSignDetached> {
        return this.client.request('crypto.nacl_sign_detached', params);
    }

    nacl_box_keypair(): Promise<KeyPair> {
        return this.client.request('crypto.nacl_box_keypair');
    }

    nacl_box_keypair_from_secret_key(params: ParamsOfNaclBoxKeyPairFromSecret): Promise<KeyPair> {
        return this.client.request('crypto.nacl_box_keypair_from_secret_key', params);
    }

    nacl_box(params: ParamsOfNaclBox): Promise<ResultOfNaclBox> {
        return this.client.request('crypto.nacl_box', params);
    }

    nacl_box_open(params: ParamsOfNaclBoxOpen): Promise<ResultOfNaclBoxOpen> {
        return this.client.request('crypto.nacl_box_open', params);
    }

    nacl_secret_box(params: ParamsOfNaclSecretBox): Promise<ResultOfNaclBox> {
        return this.client.request('crypto.nacl_secret_box', params);
    }

    nacl_secret_box_open(params: ParamsOfNaclSecretBoxOpen): Promise<ResultOfNaclBoxOpen> {
        return this.client.request('crypto.nacl_secret_box_open', params);
    }

    mnemonic_words(params: ParamsOfMnemonicWords): Promise<ResultOfMnemonicWords> {
        return this.client.request('crypto.mnemonic_words', params);
    }

    mnemonic_from_random(params: ParamsOfMnemonicFromRandom): Promise<ResultOfMnemonicFromRandom> {
        return this.client.request('crypto.mnemonic_from_random', params);
    }

    mnemonic_from_entropy(params: ParamsOfMnemonicFromEntropy): Promise<ResultOfMnemonicFromEntropy> {
        return this.client.request('crypto.mnemonic_from_entropy', params);
    }

    mnemonic_verify(params: ParamsOfMnemonicVerify): Promise<ResultOfMnemonicVerify> {
        return this.client.request('crypto.mnemonic_verify', params);
    }

    mnemonic_derive_sign_keys(params: ParamsOfMnemonicDeriveSignKeys): Promise<KeyPair> {
        return this.client.request('crypto.mnemonic_derive_sign_keys', params);
    }

    hdkey_xprv_from_mnemonic(params: ParamsOfHDKeyXPrvFromMnemonic): Promise<ResultOfHDKeyXPrvFromMnemonic> {
        return this.client.request('crypto.hdkey_xprv_from_mnemonic', params);
    }

    hdkey_derive_from_xprv(params: ParamsOfHDKeyDeriveFromXPrv): Promise<ResultOfHDKeyDeriveFromXPrv> {
        return this.client.request('crypto.hdkey_derive_from_xprv', params);
    }

    hdkey_derive_from_xprv_path(params: ParamsOfHDKeyDeriveFromXPrvPath): Promise<ResultOfHDKeyDeriveFromXPrvPath> {
        return this.client.request('crypto.hdkey_derive_from_xprv_path', params);
    }

    hdkey_secret_from_xprv(params: ParamsOfHDKeySecretFromXPrv): Promise<ResultOfHDKeySecretFromXPrv> {
        return this.client.request('crypto.hdkey_secret_from_xprv', params);
    }

    hdkey_public_from_xprv(params: ParamsOfHDKeyPublicFromXPrv): Promise<ResultOfHDKeyPublicFromXPrv> {
        return this.client.request('crypto.hdkey_public_from_xprv', params);
    }
}

// abi module


export type Abi = {
    type: 'Serialized'
    value: any
} | {
    type: 'Handle'
    value: number
};

export function abiSerialized(value: any): Abi {
    return {
        type: 'Serialized',
        value,
    };
}

export function abiHandle(value: AbiHandle): Abi {
    return {
        type: 'Handle',
        value,
    };
}

export type AbiHandle = number;

export type FunctionHeader = {
    expire?: number,
    time?: bigint,
    pubkey?: string
};

export type CallSet = {
    function_name: string,
    header?: FunctionHeader,
    input?: any
};

export type DeploySet = {
    tvc: string,
    workchain_id?: number,
    initial_data?: any
};

export type Signer = {
    type: 'None'
} | {
    type: 'External'
    public_key: string
} | {
    type: 'Keys'
    keys: KeyPair
} | {
    type: 'SigningBox'
    handle: SigningBoxHandle
};

export function signerNone(): Signer {
    return {
        type: 'None',
    };
}

export function signerExternal(public_key: string): Signer {
    return {
        type: 'External',
        public_key,
    };
}

export function signerKeys(keys: KeyPair): Signer {
    return {
        type: 'Keys',
        keys,
    };
}

export function signerSigningBox(handle: SigningBoxHandle): Signer {
    return {
        type: 'SigningBox',
        handle,
    };
}

export type MessageBodyType = 'Input' | 'Output' | 'InternalOutput' | 'Event';

export type StateInitSource = {
    type: 'Message'
    source: MessageSource
} | {
    type: 'StateInit'
    code: string,
    data: string,
    library?: string
} | {
    type: 'Tvc'
    tvc: string,
    public_key?: string,
    init_params?: StateInitParams
};

export function stateInitSourceMessage(source: MessageSource): StateInitSource {
    return {
        type: 'Message',
        source,
    };
}

export function stateInitSourceStateInit(code: string, data: string, library?: string): StateInitSource {
    return {
        type: 'StateInit',
        code,
        data,
        library,
    };
}

export function stateInitSourceTvc(tvc: string, public_key?: string, init_params?: StateInitParams): StateInitSource {
    return {
        type: 'Tvc',
        tvc,
        public_key,
        init_params,
    };
}

export type StateInitParams = {
    abi: Abi,
    value: any
};

export type MessageSource = {
    type: 'Encoded'
    message: string,
    abi?: Abi
} | {
    type: 'EncodingParams'
    abi: Abi,
    address?: string,
    deploy_set?: DeploySet,
    call_set?: CallSet,
    signer: Signer,
    processing_try_index?: number
};

export function messageSourceEncoded(message: string, abi?: Abi): MessageSource {
    return {
        type: 'Encoded',
        message,
        abi,
    };
}

export function messageSourceEncodingParams(value: ParamsOfEncodeMessage): MessageSource {
    return {
        type: 'EncodingParams',
        ...value,
    };
}

export type ParamsOfEncodeMessageBody = {
    abi: Abi,
    call_set: CallSet,
    is_internal: boolean,
    signer: Signer,
    processing_try_index?: number
};

export type ResultOfEncodeMessageBody = {
    body: string,
    data_to_sign?: string
};

export type ParamsOfAttachSignatureToMessageBody = {
    abi: Abi,
    public_key: string,
    message: string,
    signature: string
};

export type ResultOfAttachSignatureToMessageBody = {
    body: string
};

export type ParamsOfEncodeMessage = {
    abi: Abi,
    address?: string,
    deploy_set?: DeploySet,
    call_set?: CallSet,
    signer: Signer,
    processing_try_index?: number
};

export type ResultOfEncodeMessage = {
    message: string,
    data_to_sign?: string,
    address: string,
    message_id: string
};

export type ParamsOfAttachSignature = {
    abi: Abi,
    public_key: string,
    message: string,
    signature: string
};

export type ResultOfAttachSignature = {
    message: string,
    message_id: string
};

export type ParamsOfDecodeMessage = {
    abi: Abi,
    message: string
};

export type DecodedMessageBody = {
    body_type: MessageBodyType,
    name: string,
    value?: any,
    header?: FunctionHeader
};

export type ParamsOfDecodeMessageBody = {
    abi: Abi,
    body: string,
    is_internal: boolean
};

export type ParamsOfEncodeAccount = {
    state_init: StateInitSource,
    balance?: bigint,
    last_trans_lt?: bigint,
    last_paid?: number
};

export type ResultOfEncodeAccount = {
    account: string,
    id: string
};

export class AbiModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    encode_message_body(params: ParamsOfEncodeMessageBody): Promise<ResultOfEncodeMessageBody> {
        return this.client.request('abi.encode_message_body', params);
    }

    attach_signature_to_message_body(params: ParamsOfAttachSignatureToMessageBody): Promise<ResultOfAttachSignatureToMessageBody> {
        return this.client.request('abi.attach_signature_to_message_body', params);
    }

    encode_message(params: ParamsOfEncodeMessage): Promise<ResultOfEncodeMessage> {
        return this.client.request('abi.encode_message', params);
    }

    attach_signature(params: ParamsOfAttachSignature): Promise<ResultOfAttachSignature> {
        return this.client.request('abi.attach_signature', params);
    }

    decode_message(params: ParamsOfDecodeMessage): Promise<DecodedMessageBody> {
        return this.client.request('abi.decode_message', params);
    }

    decode_message_body(params: ParamsOfDecodeMessageBody): Promise<DecodedMessageBody> {
        return this.client.request('abi.decode_message_body', params);
    }

    encode_account(params: ParamsOfEncodeAccount): Promise<ResultOfEncodeAccount> {
        return this.client.request('abi.encode_account', params);
    }
}

// boc module


export type ParamsOfParse = {
    boc: string
};

export type ResultOfParse = {
    parsed: any
};

export type ParamsOfGetBlockchainConfig = {
    block_boc: string
};

export type ResultOfGetBlockchainConfig = {
    config_boc: string
};

export class BocModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    parse_message(params: ParamsOfParse): Promise<ResultOfParse> {
        return this.client.request('boc.parse_message', params);
    }

    parse_transaction(params: ParamsOfParse): Promise<ResultOfParse> {
        return this.client.request('boc.parse_transaction', params);
    }

    parse_account(params: ParamsOfParse): Promise<ResultOfParse> {
        return this.client.request('boc.parse_account', params);
    }

    parse_block(params: ParamsOfParse): Promise<ResultOfParse> {
        return this.client.request('boc.parse_block', params);
    }

    get_blockchain_config(params: ParamsOfGetBlockchainConfig): Promise<ResultOfGetBlockchainConfig> {
        return this.client.request('boc.get_blockchain_config', params);
    }
}

// processing module


export type ProcessingEvent = {
    type: 'WillFetchFirstBlock'
} | {
    type: 'FetchFirstBlockFailed'
    error: ClientError
} | {
    type: 'WillSend'
    shard_block_id: string,
    message_id: string,
    message: string
} | {
    type: 'DidSend'
    shard_block_id: string,
    message_id: string,
    message: string
} | {
    type: 'SendFailed'
    shard_block_id: string,
    message_id: string,
    message: string,
    error: ClientError
} | {
    type: 'WillFetchNextBlock'
    shard_block_id: string,
    message_id: string,
    message: string
} | {
    type: 'FetchNextBlockFailed'
    shard_block_id: string,
    message_id: string,
    message: string,
    error: ClientError
} | {
    type: 'MessageExpired'
    message_id: string,
    message: string,
    error: ClientError
};

export function processingEventWillFetchFirstBlock(): ProcessingEvent {
    return {
        type: 'WillFetchFirstBlock',
    };
}

export function processingEventFetchFirstBlockFailed(error: ClientError): ProcessingEvent {
    return {
        type: 'FetchFirstBlockFailed',
        error,
    };
}

export function processingEventWillSend(shard_block_id: string, message_id: string, message: string): ProcessingEvent {
    return {
        type: 'WillSend',
        shard_block_id,
        message_id,
        message,
    };
}

export function processingEventDidSend(shard_block_id: string, message_id: string, message: string): ProcessingEvent {
    return {
        type: 'DidSend',
        shard_block_id,
        message_id,
        message,
    };
}

export function processingEventSendFailed(shard_block_id: string, message_id: string, message: string, error: ClientError): ProcessingEvent {
    return {
        type: 'SendFailed',
        shard_block_id,
        message_id,
        message,
        error,
    };
}

export function processingEventWillFetchNextBlock(shard_block_id: string, message_id: string, message: string): ProcessingEvent {
    return {
        type: 'WillFetchNextBlock',
        shard_block_id,
        message_id,
        message,
    };
}

export function processingEventFetchNextBlockFailed(shard_block_id: string, message_id: string, message: string, error: ClientError): ProcessingEvent {
    return {
        type: 'FetchNextBlockFailed',
        shard_block_id,
        message_id,
        message,
        error,
    };
}

export function processingEventMessageExpired(message_id: string, message: string, error: ClientError): ProcessingEvent {
    return {
        type: 'MessageExpired',
        message_id,
        message,
        error,
    };
}

export type ResultOfProcessMessage = {
    transaction: any,
    out_messages: string[],
    decoded?: DecodedOutput,
    fees: TransactionFees
};

export type DecodedOutput = {
    out_messages: DecodedMessageBody | null[],
    output?: any
};

export type ParamsOfSendMessage = {
    message: string,
    abi?: Abi,
    send_events: boolean
};

export type ResultOfSendMessage = {
    shard_block_id: string
};

export type ParamsOfWaitForTransaction = {
    abi?: Abi,
    message: string,
    shard_block_id: string,
    send_events: boolean
};

export type ParamsOfProcessMessage = {
    message_encode_params: ParamsOfEncodeMessage,
    send_events: boolean
};

export class ProcessingModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    send_message(params: ParamsOfSendMessage, responseHandler?: ResponseHandler): Promise<ResultOfSendMessage> {
        return this.client.request('processing.send_message', params, responseHandler);
    }

    wait_for_transaction(params: ParamsOfWaitForTransaction, responseHandler?: ResponseHandler): Promise<ResultOfProcessMessage> {
        return this.client.request('processing.wait_for_transaction', params, responseHandler);
    }

    process_message(params: ParamsOfProcessMessage, responseHandler?: ResponseHandler): Promise<ResultOfProcessMessage> {
        return this.client.request('processing.process_message', params, responseHandler);
    }
}

// utils module


export type AddressStringFormat = {
    type: 'AccountId'
} | {
    type: 'Hex'
} | {
    type: 'Base64'
    url: boolean,
    test: boolean,
    bounce: boolean
};

export function addressStringFormatAccountId(): AddressStringFormat {
    return {
        type: 'AccountId',
    };
}

export function addressStringFormatHex(): AddressStringFormat {
    return {
        type: 'Hex',
    };
}

export function addressStringFormatBase64(url: boolean, test: boolean, bounce: boolean): AddressStringFormat {
    return {
        type: 'Base64',
        url,
        test,
        bounce,
    };
}

export type ParamsOfConvertAddress = {
    address: string,
    output_format: AddressStringFormat
};

export type ResultOfConvertAddress = {
    address: string
};

export class UtilsModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    convert_address(params: ParamsOfConvertAddress): Promise<ResultOfConvertAddress> {
        return this.client.request('utils.convert_address', params);
    }
}

// tvm module


export type ExecutionOptions = {
    blockchain_config?: string,
    block_time?: number,
    block_lt?: bigint,
    transaction_lt?: bigint
};

export type ParamsOfRunExecutor = {
    message: string,
    account?: string,
    execution_options?: ExecutionOptions,
    abi?: Abi
};

export type ResultOfRunExecutor = {
    transaction: any,
    out_messages: string[],
    decoded?: DecodedOutput,
    account: string,
    fees: TransactionFees
};

export type ParamsOfRunTvm = {
    message: string,
    account: string,
    execution_options?: ExecutionOptions,
    abi?: Abi
};

export type ResultOfRunTvm = {
    out_messages: string[],
    decoded?: DecodedOutput,
    account: string
};

export type ParamsOfRunGet = {
    account: string,
    function_name: string,
    input?: any,
    execution_options?: ExecutionOptions
};

export type ResultOfRunGet = {
    output: any
};

export class TvmModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    run_executor(params: ParamsOfRunExecutor): Promise<ResultOfRunExecutor> {
        return this.client.request('tvm.run_executor', params);
    }

    run_tvm(params: ParamsOfRunTvm): Promise<ResultOfRunTvm> {
        return this.client.request('tvm.run_tvm', params);
    }

    run_get(params: ParamsOfRunGet): Promise<ResultOfRunGet> {
        return this.client.request('tvm.run_get', params);
    }
}

// net module


export type OrderBy = {
    path: string,
    direction: SortDirection
};

export type SortDirection = 'ASC' | 'DESC';

export type ParamsOfQueryCollection = {
    collection: string,
    filter?: any,
    result: string,
    order?: OrderBy[],
    limit?: number
};

export type ResultOfQueryCollection = {
    result: any[]
};

export type ParamsOfWaitForCollection = {
    collection: string,
    filter?: any,
    result: string,
    timeout?: number
};

export type ResultOfWaitForCollection = {
    result: any
};

export type ResultOfSubscribeCollection = {
    handle: number
};

export type unit = void;

export type ParamsOfSubscribeCollection = {
    collection: string,
    filter?: any,
    result: string
};

export class NetModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    query_collection(params: ParamsOfQueryCollection): Promise<ResultOfQueryCollection> {
        return this.client.request('net.query_collection', params);
    }

    wait_for_collection(params: ParamsOfWaitForCollection): Promise<ResultOfWaitForCollection> {
        return this.client.request('net.wait_for_collection', params);
    }

    unsubscribe(params: ResultOfSubscribeCollection): Promise<void> {
        return this.client.request('net.unsubscribe', params);
    }

    subscribe_collection(params: ParamsOfSubscribeCollection, responseHandler?: ResponseHandler): Promise<ResultOfSubscribeCollection> {
        return this.client.request('net.subscribe_collection', params, responseHandler);
    }
}


