
import {ResponseHandler} from "./bin";

interface IClient {
    request(
        functionName: string,
        functionParams: any,
        responseHandler?: ResponseHandler
    ): Promise<any>;
}

// client module

export type ClientError = {
    code: number,
    message: string,
    data: any,
};

export type ClientConfig = {
    network: NetworkConfig | null,
    crypto: CryptoConfig | null,
    abi: AbiConfig | null,
};

export type NetworkConfig = {
    server_address: string,
    message_retries_count: number | null,
    message_processing_timeout: number | null,
    wait_for_timeout: number | null,
    out_of_sync_threshold: bigint | null,
    access_key: string | null,
};

export type CryptoConfig = {
    fish_param: string | null,
};

export type AbiConfig = {
    message_expiration_timeout: number | null,
    message_expiration_timeout_grow_factor: number | null,
};

export type ResultOfGetApiReference = {
    api: any,
};

export type ResultOfVersion = {
    version: string,
};


export class ClientModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
    getApiReference(
        responseHandler?: ResponseHandler
    ): Promise<ResultOfGetApiReference> {
        return this.client.request(
            'client.get_api_reference',
            undefined,
            responseHandler,
        );
    }
    version(
        responseHandler?: ResponseHandler
    ): Promise<ResultOfVersion> {
        return this.client.request(
            'client.version',
            undefined,
            responseHandler,
        );
    }
}

// crypto module

export type SigningBoxHandle = number;

export type ParamsOfFactorize = {
    composite: string,
};

export type ResultOfFactorize = {
    factors: string[],
};

export type ParamsOfModularPower = {
    base: string,
    exponent: string,
    modulus: string,
};

export type ResultOfModularPower = {
    modular_power: string,
};

export type ParamsOfTonCrc16 = {
    data: string,
};

export type ResultOfTonCrc16 = {
    crc: number,
};

export type ParamsOfGenerateRandomBytes = {
    length: number,
};

export type ResultOfGenerateRandomBytes = {
    bytes: string,
};

export type ParamsOfConvertPublicKeyToTonSafeFormat = {
    public_key: string,
};

export type ResultOfConvertPublicKeyToTonSafeFormat = {
    ton_public_key: string,
};

export type KeyPair = {
    public: string,
    secret: string,
};

export type ParamsOfSign = {
    unsigned: string,
    keys: KeyPair,
};

export type ResultOfSign = {
    signed: string,
    signature: string,
};

export type ParamsOfVerifySignature = {
    signed: string,
    public: string,
};

export type ResultOfVerifySignature = {
    unsigned: string,
};

export type ParamsOfHash = {
    data: string,
};

export type ResultOfHash = {
    hash: string,
};

export type ParamsOfScrypt = {
    password: string,
    salt: string,
    log_n: number,
    r: number,
    p: number,
    dk_len: number,
};

export type ResultOfScrypt = {
    key: string,
};

export type ParamsOfNaclSignKeyPairFromSecret = {
    secret: string,
};

export type ParamsOfNaclSign = {
    unsigned: string,
    secret: string,
};

export type ResultOfNaclSign = {
    signed: string,
};

export type ParamsOfNaclSignOpen = {
    signed: string,
    public: string,
};

export type ResultOfNaclSignOpen = {
    unsigned: string,
};

export type ResultOfNaclSignDetached = {
    signature: string,
};

export type ParamsOfNaclBoxKeyPairFromSecret = {
    secret: string,
};

export type ParamsOfNaclBox = {
    decrypted: string,
    nonce: string,
    their_public: string,
    secret: string,
};

export type ResultOfNaclBox = {
    encrypted: string,
};

export type ParamsOfNaclBoxOpen = {
    encrypted: string,
    nonce: string,
    their_public: string,
    secret: string,
};

export type ResultOfNaclBoxOpen = {
    decrypted: string,
};

export type ParamsOfNaclSecretBox = {
    decrypted: string,
    nonce: string,
    key: string,
};

export type ParamsOfNaclSecretBoxOpen = {
    encrypted: string,
    nonce: string,
    key: string,
};

export type ParamsOfMnemonicWords = {
    dictionary: number | null,
};

export type ResultOfMnemonicWords = {
    words: string,
};

export type ParamsOfMnemonicFromRandom = {
    dictionary: number | null,
    word_count: number | null,
};

export type ResultOfMnemonicFromRandom = {
    phrase: string,
};

export type ParamsOfMnemonicFromEntropy = {
    entropy: string,
    dictionary: number | null,
    word_count: number | null,
};

export type ResultOfMnemonicFromEntropy = {
    phrase: string,
};

export type ParamsOfMnemonicVerify = {
    phrase: string,
    dictionary: number | null,
    word_count: number | null,
};

export type ResultOfMnemonicVerify = {
    valid: boolean,
};

export type ParamsOfMnemonicDeriveSignKeys = {
    phrase: string,
    path: string | null,
    dictionary: number | null,
    word_count: number | null,
};

export type ParamsOfHDKeyXPrvFromMnemonic = {
    phrase: string,
};

export type ResultOfHDKeyXPrvFromMnemonic = {
    xprv: string,
};

export type ParamsOfHDKeyDeriveFromXPrv = {
    xprv: string,
    child_index: number,
    hardened: boolean,
};

export type ResultOfHDKeyDeriveFromXPrv = {
    xprv: string,
};

export type ParamsOfHDKeyDeriveFromXPrvPath = {
    xprv: string,
    path: string,
};

export type ResultOfHDKeyDeriveFromXPrvPath = {
    xprv: string,
};

export type ParamsOfHDKeySecretFromXPrv = {
    xprv: string,
};

export type ResultOfHDKeySecretFromXPrv = {
    secret: string,
};

export type ParamsOfHDKeyPublicFromXPrv = {
    xprv: string,
};

export type ResultOfHDKeyPublicFromXPrv = {
    public: string,
};


export class CryptoModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
    factorize(
        params: ParamsOfFactorize, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfFactorize> {
        return this.client.request(
            'crypto.factorize',
            params,
            responseHandler,
        );
    }
    modularPower(
        params: ParamsOfModularPower, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfModularPower> {
        return this.client.request(
            'crypto.modular_power',
            params,
            responseHandler,
        );
    }
    tonCrc16(
        params: ParamsOfTonCrc16, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfTonCrc16> {
        return this.client.request(
            'crypto.ton_crc16',
            params,
            responseHandler,
        );
    }
    generateRandomBytes(
        params: ParamsOfGenerateRandomBytes, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfGenerateRandomBytes> {
        return this.client.request(
            'crypto.generate_random_bytes',
            params,
            responseHandler,
        );
    }
    convertPublicKeyToTonSafeFormat(
        params: ParamsOfConvertPublicKeyToTonSafeFormat, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfConvertPublicKeyToTonSafeFormat> {
        return this.client.request(
            'crypto.convert_public_key_to_ton_safe_format',
            params,
            responseHandler,
        );
    }
    generateRandomSignKeys(
        responseHandler?: ResponseHandler
    ): Promise<KeyPair> {
        return this.client.request(
            'crypto.generate_random_sign_keys',
            undefined,
            responseHandler,
        );
    }
    sign(
        params: ParamsOfSign, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfSign> {
        return this.client.request(
            'crypto.sign',
            params,
            responseHandler,
        );
    }
    verifySignature(
        params: ParamsOfVerifySignature, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfVerifySignature> {
        return this.client.request(
            'crypto.verify_signature',
            params,
            responseHandler,
        );
    }
    sha256(
        params: ParamsOfHash, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfHash> {
        return this.client.request(
            'crypto.sha256',
            params,
            responseHandler,
        );
    }
    sha512(
        params: ParamsOfHash, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfHash> {
        return this.client.request(
            'crypto.sha512',
            params,
            responseHandler,
        );
    }
    scrypt(
        params: ParamsOfScrypt, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfScrypt> {
        return this.client.request(
            'crypto.scrypt',
            params,
            responseHandler,
        );
    }
    naclSignKeypairFromSecretKey(
        params: ParamsOfNaclSignKeyPairFromSecret, 
        responseHandler?: ResponseHandler
    ): Promise<KeyPair> {
        return this.client.request(
            'crypto.nacl_sign_keypair_from_secret_key',
            params,
            responseHandler,
        );
    }
    naclSign(
        params: ParamsOfNaclSign, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfNaclSign> {
        return this.client.request(
            'crypto.nacl_sign',
            params,
            responseHandler,
        );
    }
    naclSignOpen(
        params: ParamsOfNaclSignOpen, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfNaclSignOpen> {
        return this.client.request(
            'crypto.nacl_sign_open',
            params,
            responseHandler,
        );
    }
    naclSignDetached(
        params: ParamsOfNaclSign, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfNaclSignDetached> {
        return this.client.request(
            'crypto.nacl_sign_detached',
            params,
            responseHandler,
        );
    }
    naclBoxKeypair(
        responseHandler?: ResponseHandler
    ): Promise<KeyPair> {
        return this.client.request(
            'crypto.nacl_box_keypair',
            undefined,
            responseHandler,
        );
    }
    naclBoxKeypairFromSecretKey(
        params: ParamsOfNaclBoxKeyPairFromSecret, 
        responseHandler?: ResponseHandler
    ): Promise<KeyPair> {
        return this.client.request(
            'crypto.nacl_box_keypair_from_secret_key',
            params,
            responseHandler,
        );
    }
    naclBox(
        params: ParamsOfNaclBox, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfNaclBox> {
        return this.client.request(
            'crypto.nacl_box',
            params,
            responseHandler,
        );
    }
    naclBoxOpen(
        params: ParamsOfNaclBoxOpen, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfNaclBoxOpen> {
        return this.client.request(
            'crypto.nacl_box_open',
            params,
            responseHandler,
        );
    }
    naclSecretBox(
        params: ParamsOfNaclSecretBox, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfNaclBox> {
        return this.client.request(
            'crypto.nacl_secret_box',
            params,
            responseHandler,
        );
    }
    naclSecretBoxOpen(
        params: ParamsOfNaclSecretBoxOpen, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfNaclBoxOpen> {
        return this.client.request(
            'crypto.nacl_secret_box_open',
            params,
            responseHandler,
        );
    }
    mnemonicWords(
        params: ParamsOfMnemonicWords, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfMnemonicWords> {
        return this.client.request(
            'crypto.mnemonic_words',
            params,
            responseHandler,
        );
    }
    mnemonicFromRandom(
        params: ParamsOfMnemonicFromRandom, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfMnemonicFromRandom> {
        return this.client.request(
            'crypto.mnemonic_from_random',
            params,
            responseHandler,
        );
    }
    mnemonicFromEntropy(
        params: ParamsOfMnemonicFromEntropy, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfMnemonicFromEntropy> {
        return this.client.request(
            'crypto.mnemonic_from_entropy',
            params,
            responseHandler,
        );
    }
    mnemonicVerify(
        params: ParamsOfMnemonicVerify, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfMnemonicVerify> {
        return this.client.request(
            'crypto.mnemonic_verify',
            params,
            responseHandler,
        );
    }
    mnemonicDeriveSignKeys(
        params: ParamsOfMnemonicDeriveSignKeys, 
        responseHandler?: ResponseHandler
    ): Promise<KeyPair> {
        return this.client.request(
            'crypto.mnemonic_derive_sign_keys',
            params,
            responseHandler,
        );
    }
    hdkeyXprvFromMnemonic(
        params: ParamsOfHDKeyXPrvFromMnemonic, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfHDKeyXPrvFromMnemonic> {
        return this.client.request(
            'crypto.hdkey_xprv_from_mnemonic',
            params,
            responseHandler,
        );
    }
    hdkeyDeriveFromXprv(
        params: ParamsOfHDKeyDeriveFromXPrv, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfHDKeyDeriveFromXPrv> {
        return this.client.request(
            'crypto.hdkey_derive_from_xprv',
            params,
            responseHandler,
        );
    }
    hdkeyDeriveFromXprvPath(
        params: ParamsOfHDKeyDeriveFromXPrvPath, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfHDKeyDeriveFromXPrvPath> {
        return this.client.request(
            'crypto.hdkey_derive_from_xprv_path',
            params,
            responseHandler,
        );
    }
    hdkeySecretFromXprv(
        params: ParamsOfHDKeySecretFromXPrv, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfHDKeySecretFromXPrv> {
        return this.client.request(
            'crypto.hdkey_secret_from_xprv',
            params,
            responseHandler,
        );
    }
    hdkeyPublicFromXprv(
        params: ParamsOfHDKeyPublicFromXPrv, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfHDKeyPublicFromXPrv> {
        return this.client.request(
            'crypto.hdkey_public_from_xprv',
            params,
            responseHandler,
        );
    }
}

// abi module

export type Abi = { Serialized: any } | { Handle: AbiHandle };

export type AbiHandle = number;

export type FunctionHeader = {
    expire: number | null,
    time: bigint | null,
    pubkey: string | null,
};

export type CallSet = {
    function_name: string,
    header: FunctionHeader | null,
    input: any | null,
};

export type DeploySet = {
    tvc: string,
    workchain_id: number | null,
    initial_data: any | null,
};

export type Signer = { None: {
} } | { External: string } | { WithKeys: KeyPair } | { Box: SigningBoxHandle };

export type DecodedMessageType = "FunctionInput" | "FunctionOutput" | "ForeignFunctionInput" | "Event";

export type StateInitSource = { Message: MessageSource } | { StateInit: {
    code: string,
    data: string,
    library: string | null,
} } | { Tvc: {
    tvc: string,
    public_key: string | null,
    init_params: StateInitParams | null,
} };

export type StateInitParams = {
    abi: Abi,
    value: any,
};

export type ParamsOfEncodeMessage = {
    abi: Abi,
    address: string | null,
    deploy_set: DeploySet | null,
    call_set: CallSet | null,
    signer: Signer,
    processing_try_index: number | null,
};

export type ResultOfEncodeMessage = {
    message: string,
    data_to_sign: string | null,
    address: string,
    message_id: string,
};

export type ParamsOfAttachSignature = {
    abi: Abi,
    public_key: string,
    message: string,
    signature: string,
};

export type ResultOfAttachSignature = {
    message: string,
    message_id: string,
};

export type ParamsOfDecodeMessage = {
    abi: Abi,
    message: string,
};

export type DecodedMessageBody = {
    message_type: DecodedMessageType,
    name: string,
    value: any,
    header: FunctionHeader | null,
};

export type ParamsOfEncodeAccount = {
    state_init: StateInitSource,
    balance: bigint | null,
    last_trans_lt: bigint | null,
    last_paid: number | null,
};

export type ResultOfEncodeAccount = {
    account: string,
    id: string,
};


export class AbiModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
    encodeMessage(
        params: ParamsOfEncodeMessage, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfEncodeMessage> {
        return this.client.request(
            'abi.encode_message',
            params,
            responseHandler,
        );
    }
    attachSignature(
        params: ParamsOfAttachSignature, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfAttachSignature> {
        return this.client.request(
            'abi.attach_signature',
            params,
            responseHandler,
        );
    }
    decodeMessage(
        params: ParamsOfDecodeMessage, 
        responseHandler?: ResponseHandler
    ): Promise<DecodedMessageBody> {
        return this.client.request(
            'abi.decode_message',
            params,
            responseHandler,
        );
    }
    encodeAccount(
        params: ParamsOfEncodeAccount, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfEncodeAccount> {
        return this.client.request(
            'abi.encode_account',
            params,
            responseHandler,
        );
    }
}

// boc module

export type ParamsOfParse = {
    boc: string,
};

export type ResultOfParse = {
    parsed: any,
};

export type ParamsOfGetBlockchainConfig = {
    block_boc: string,
};

export type ResultOfGetBlockchainConfig = {
    config_boc: string,
};


export class BocModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
    parseMessage(
        params: ParamsOfParse, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfParse> {
        return this.client.request(
            'boc.parse_message',
            params,
            responseHandler,
        );
    }
    parseTransaction(
        params: ParamsOfParse, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfParse> {
        return this.client.request(
            'boc.parse_transaction',
            params,
            responseHandler,
        );
    }
    parseAccount(
        params: ParamsOfParse, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfParse> {
        return this.client.request(
            'boc.parse_account',
            params,
            responseHandler,
        );
    }
    parseBlock(
        params: ParamsOfParse, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfParse> {
        return this.client.request(
            'boc.parse_block',
            params,
            responseHandler,
        );
    }
    getBlockchainConfig(
        params: ParamsOfGetBlockchainConfig, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfGetBlockchainConfig> {
        return this.client.request(
            'boc.get_blockchain_config',
            params,
            responseHandler,
        );
    }
}

// processing module

export type MessageSource = { Encoded: {
    message: string,
    abi: Abi | null,
} } | { EncodingParams: ParamsOfEncodeMessage };

export type ProcessingEvent = { WillFetchFirstBlock: {
} } | { FetchFirstBlockFailed: {
    error: ClientError,
} } | { WillSend: {
    shard_block_id: string,
    message_id: string,
    message: string,
} } | { DidSend: {
    shard_block_id: string,
    message_id: string,
    message: string,
} } | { SendFailed: {
    shard_block_id: string,
    message_id: string,
    message: string,
    error: ClientError,
} } | { WillFetchNextBlock: {
    shard_block_id: string,
    message_id: string,
    message: string,
} } | { FetchNextBlockFailed: {
    shard_block_id: string,
    message_id: string,
    message: string,
    error: ClientError,
} } | { MessageExpired: {
    message_id: string,
    message: string,
    error: ClientError,
} } | { TransactionReceived: {
    message_id: string,
    message: string,
    result: ResultOfProcessMessage,
} };

export type ResultOfProcessMessage = {
    transaction: any,
    out_messages: any[],
    decoded: DecodedOutput | null,
};

export type DecodedOutput = {
    out_messages: DecodedMessageBody | null[],
    output: any | null,
};

export type ParamsOfSendMessage = {
    message: string,
    abi: Abi | null,
    send_events: boolean,
};

export type ResultOfSendMessage = {
    shard_block_id: string,
};

export type ParamsOfWaitForTransaction = {
    abi: Abi | null,
    message: string,
    shard_block_id: string,
    send_events: boolean,
};

export type ParamsOfProcessMessage = {
    message: MessageSource,
    send_events: boolean,
};


export class ProcessingModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
    sendMessage(
        params: ParamsOfSendMessage, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfSendMessage> {
        return this.client.request(
            'processing.send_message',
            params,
            responseHandler,
        );
    }
    waitForTransaction(
        params: ParamsOfWaitForTransaction, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfProcessMessage> {
        return this.client.request(
            'processing.wait_for_transaction',
            params,
            responseHandler,
        );
    }
    processMessage(
        params: ParamsOfProcessMessage, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfProcessMessage> {
        return this.client.request(
            'processing.process_message',
            params,
            responseHandler,
        );
    }
}

// utils module

export type AddressStringFormat = { AccountId: {
} } | { Hex: {
} } | { Base64: {
    url: boolean,
    test: boolean,
    bounce: boolean,
} };

export type ParamsOfConvertAddress = {
    address: string,
    output_format: AddressStringFormat,
};

export type ResultOfConvertAddress = {
    address: string,
};


export class UtilsModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
    convertAddress(
        params: ParamsOfConvertAddress, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfConvertAddress> {
        return this.client.request(
            'utils.convert_address',
            params,
            responseHandler,
        );
    }
}

// net module

export type OrderBy = {
    path: string,
    direction: SortDirection,
};

export type SortDirection = "Ascending" | "Descending";

export type ParamsOfQueryCollection = {
    collection: string,
    filter: any | null,
    result: string,
    order: OrderBy[] | null,
    limit: number | null,
};

export type ResultOfQueryCollection = {
    result: any[],
};

export type ParamsOfWaitForCollection = {
    collection: string,
    filter: any | null,
    result: string,
    timeout: number | null,
};

export type ResultOfWaitForCollection = {
    result: any,
};

export type ResultOfSubscribeCollection = {
    handle: number,
};

export type unit = void;

export type ParamsOfSubscribeCollection = {
    collection: string,
    filter: any | null,
    result: string,
};


export class NetModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
    queryCollection(
        params: ParamsOfQueryCollection, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfQueryCollection> {
        return this.client.request(
            'net.query_collection',
            params,
            responseHandler,
        );
    }
    waitForCollection(
        params: ParamsOfWaitForCollection, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfWaitForCollection> {
        return this.client.request(
            'net.wait_for_collection',
            params,
            responseHandler,
        );
    }
    unsubscribe(
        params: ResultOfSubscribeCollection, 
        responseHandler?: ResponseHandler
    ): Promise<void> {
        return this.client.request(
            'net.unsubscribe',
            params,
            responseHandler,
        );
    }
    subscribeCollection(
        params: ParamsOfSubscribeCollection, 
        responseHandler?: ResponseHandler
    ): Promise<ResultOfSubscribeCollection> {
        return this.client.request(
            'net.subscribe_collection',
            params,
            responseHandler,
        );
    }
}

