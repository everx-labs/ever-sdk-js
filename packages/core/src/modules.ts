

import {ResponseHandler} from "./bin";

interface IClient {
    request(
        functionName: string,
        functionParams?: any,
        responseHandler?: ResponseHandler
    ): Promise<any>;
    resolve_app_request(app_request_id: number | null, result: any): Promise<void>;
    reject_app_request(app_request_id: number | null, error: any): Promise<void>;
}

// client module


export enum ClientErrorCode {
    NotImplemented = 1,
    InvalidHex = 2,
    InvalidBase64 = 3,
    InvalidAddress = 4,
    CallbackParamsCantBeConvertedToJson = 5,
    WebsocketConnectError = 6,
    WebsocketReceiveError = 7,
    WebsocketSendError = 8,
    HttpClientCreateError = 9,
    HttpRequestCreateError = 10,
    HttpRequestSendError = 11,
    HttpRequestParseError = 12,
    CallbackNotRegistered = 13,
    NetModuleNotInit = 14,
    InvalidConfig = 15,
    CannotCreateRuntime = 16,
    InvalidContextHandle = 17,
    CannotSerializeResult = 18,
    CannotSerializeError = 19,
    CannotConvertJsValueToJson = 20,
    CannotReceiveSpawnedResult = 21,
    SetTimerError = 22,
    InvalidParams = 23,
    ContractsAddressConversionFailed = 24,
    UnknownFunction = 25,
    AppRequestError = 26,
    NoSuchRequest = 27,
    CanNotSendRequestResult = 28,
    CanNotReceiveRequestResult = 29,
    CanNotParseRequestResult = 30,
    UnexpectedCallbackResponse = 31,
    CanNotParseNumber = 32,
    InternalError = 33,
    InvalidHandle = 34,
    LocalStorageError = 35,
    InvalidData = 36
}

export type ClientError = {

    code: number,

    message: string,

    data: any
}

export type ClientConfig = {

    binding?: BindingConfig,

    network?: NetworkConfig,

    crypto?: CryptoConfig,

    abi?: AbiConfig,

    boc?: BocConfig,

    proofs?: ProofsConfig,

    /**
     * For file based storage is a folder name where SDK will store its data. For browser based is a browser async storage key prefix. Default (recommended) value is "~/.tonclient" for native environments and ".tonclient" for web-browser.
     */
    local_storage_path?: string
}

export type NetworkConfig = {

    /**
     * **This field is deprecated, but left for backward-compatibility.** Evernode endpoint.
     */
    server_address?: string,

    /**
     * List of Evernode endpoints.
     * 
     * @remarks
     * Any correct URL format can be specified, including IP addresses. This parameter is prevailing over `server_address`.
     * Check the full list of [supported network endpoints](https://docs.evercloud.dev/products/evercloud/networks-endpoints).
     */
    endpoints?: string[],

    /**
     * Deprecated.
     * 
     * @remarks
     * You must use `network.max_reconnect_timeout` that allows to specify maximum network resolving timeout.
     */
    network_retries_count?: number,

    /**
     * Maximum time for sequential reconnections.
     * 
     * @remarks
     * Must be specified in milliseconds. Default is 120000 (2 min).
     */
    max_reconnect_timeout?: number,

    /**
     * Deprecated
     */
    reconnect_timeout?: number,

    /**
     * The number of automatic message processing retries that SDK performs in case of `Message Expired (507)` error - but only for those messages which local emulation was successful or failed with replay protection error.
     * 
     * @remarks
     * Default is 5.
     */
    message_retries_count?: number,

    /**
     * Timeout that is used to process message delivery for the contracts which ABI does not include "expire" header. If the message is not delivered within the specified timeout the appropriate error occurs.
     * 
     * @remarks
     * Must be specified in milliseconds. Default is 40000 (40 sec).
     */
    message_processing_timeout?: number,

    /**
     * Maximum timeout that is used for query response.
     * 
     * @remarks
     * Must be specified in milliseconds. Default is 40000 (40 sec).
     */
    wait_for_timeout?: number,

    /**
     * **DEPRECATED**: This parameter was deprecated.
     */
    out_of_sync_threshold?: number,

    /**
     * Maximum number of randomly chosen endpoints the library uses to broadcast a message.
     * 
     * @remarks
     * Default is 1.
     */
    sending_endpoint_count?: number,

    /**
     * Frequency of sync latency detection.
     * 
     * @remarks
     * Library periodically checks the current endpoint for blockchain data synchronization latency.
     * If the latency (time-lag) is less then `NetworkConfig.max_latency`
     * then library selects another endpoint.
     * 
     * Must be specified in milliseconds. Default is 60000 (1 min).
     */
    latency_detection_interval?: number,

    /**
     * Maximum value for the endpoint's blockchain data synchronization latency (time-lag). Library periodically checks the current endpoint for blockchain data synchronization latency. If the latency (time-lag) is less then `NetworkConfig.max_latency` then library selects another endpoint.
     * 
     * @remarks
     * Must be specified in milliseconds. Default is 60000 (1 min).
     */
    max_latency?: number,

    /**
     * Default timeout for http requests.
     * 
     * @remarks
     * Is is used when no timeout specified for the request to limit the answer waiting time. If no answer received during the timeout requests ends with
     * error.
     * 
     * Must be specified in milliseconds. Default is 60000 (1 min).
     */
    query_timeout?: number,

    /**
     * Queries protocol.
     * 
     * @remarks
     * `HTTP` or `WS`. 
     * Default is `HTTP`.
     */
    queries_protocol?: NetworkQueriesProtocol,

    /**
     * UNSTABLE.
     * 
     * @remarks
     * First REMP status awaiting timeout. If no status received during the timeout than fallback transaction scenario is activated.
     * 
     * Must be specified in milliseconds. Default is 1 (1 ms) in order to start fallback scenario
     * together with REMP statuses processing while REMP is not properly tuned yet.
     */
    first_remp_status_timeout?: number,

    /**
     * UNSTABLE.
     * 
     * @remarks
     * Subsequent REMP status awaiting timeout. If no status received during the timeout than fallback transaction scenario is activated.
     * 
     * Must be specified in milliseconds. Default is 5000 (5 sec).
     */
    next_remp_status_timeout?: number,

    /**
     * Network signature ID which is used by VM in signature verifying instructions if capability `CapSignatureWithId` is enabled in blockchain configuration parameters.
     * 
     * @remarks
     * This parameter should be set to `global_id` field from any blockchain block if network can
     * not be reachable at the moment of message encoding and the message is aimed to be sent into
     * network with `CapSignatureWithId` enabled. Otherwise signature ID is detected automatically
     * inside message encoding functions
     */
    signature_id?: number,

    /**
     * Access key to GraphQL API (Project secret)
     */
    access_key?: string
}

export type BindingConfig = {

    library?: string,

    version?: string
}

/**
 * Network protocol used to perform GraphQL queries.
 */
export enum NetworkQueriesProtocol {
    HTTP = "HTTP",
    WS = "WS"
}

/**
 * Crypto config.
 */
export type CryptoConfig = {

    /**
     * Mnemonic dictionary that will be used by default in crypto functions. If not specified, `English` dictionary will be used.
     */
    mnemonic_dictionary?: MnemonicDictionary,

    /**
     * Mnemonic word count that will be used by default in crypto functions. If not specified the default value will be 12.
     */
    mnemonic_word_count?: number,

    /**
     * Derivation path that will be used by default in crypto functions. If not specified `m/44'/396'/0'/0/0` will be used.
     */
    hdkey_derivation_path?: string
}

export type AbiConfig = {

    /**
     * Workchain id that is used by default in DeploySet
     */
    workchain?: number,

    /**
     * Message lifetime for contracts which ABI includes "expire" header.
     * 
     * @remarks
     * Must be specified in milliseconds. Default is 40000 (40 sec).
     */
    message_expiration_timeout?: number,

    /**
     * Factor that increases the expiration timeout for each retry
     * 
     * @remarks
     * Default is 1.5
     */
    message_expiration_timeout_grow_factor?: number
}

export type BocConfig = {

    /**
     * Maximum BOC cache size in kilobytes.
     * 
     * @remarks
     * Default is 10 MB
     */
    cache_max_size?: number
}

export type ProofsConfig = {

    /**
     * Cache proofs in the local storage.
     * 
     * @remarks
     * Default is `true`. If this value is set to `true`, downloaded proofs and master-chain BOCs are saved into the
     * persistent local storage (e.g. file system for native environments or browser's IndexedDB
     * for the web); otherwise all the data is cached only in memory in current client's context
     * and will be lost after destruction of the client.
     */
    cache_in_local_storage?: boolean
}

export type BuildInfoDependency = {

    /**
     * Dependency name.
     * 
     * @remarks
     * Usually it is a crate name.
     */
    name: string,

    /**
     * Git commit hash of the related repository.
     */
    git_commit: string
}

export type ParamsOfAppRequest = {

    /**
     * Request ID.
     * 
     * @remarks
     * Should be used in `resolve_app_request` call
     */
    app_request_id: number,

    /**
     * Request describing data
     */
    request_data: any
}

/**
 * Error occurred during request processing
 */
export type AppRequestResultErrorVariant = {

    /**
     * Error description
     */
    text: string
}

/**
 * Request processed successfully
 */
export type AppRequestResultOkVariant = {

    /**
     * Request processing result
     */
    result: any
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Error`
 * 
 * Error occurred during request processing
 * 
 * ### `Ok`
 * 
 * Request processed successfully
 */
export type AppRequestResult = ({
    type: 'Error'
} & AppRequestResultErrorVariant) | ({
    type: 'Ok'
} & AppRequestResultOkVariant)

export function appRequestResultError(text: string): AppRequestResult {
    return {
        type: 'Error',
        text,
    };
}

export function appRequestResultOk(result: any): AppRequestResult {
    return {
        type: 'Ok',
        result,
    };
}

export type ResultOfGetApiReference = {

    api: any
}

export type ResultOfVersion = {

    /**
     * Core Library version
     */
    version: string
}

export type ResultOfBuildInfo = {

    /**
     * Build number assigned to this build by the CI.
     */
    build_number: number,

    /**
     * Fingerprint of the most important dependencies.
     */
    dependencies: BuildInfoDependency[]
}

export type ParamsOfResolveAppRequest = {

    /**
     * Request ID received from SDK
     */
    app_request_id: number,

    /**
     * Result of request processing
     */
    result: AppRequestResult
}

/**
 * Provides information about library.
 */
export class ClientModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Returns Core Library API reference
     * @returns ResultOfGetApiReference
     */
    get_api_reference(): Promise<ResultOfGetApiReference> {
        return this.client.request('client.get_api_reference');
    }

    /**
     * Returns Core Library version
     * @returns ResultOfVersion
     */
    version(): Promise<ResultOfVersion> {
        return this.client.request('client.version');
    }

    /**
     * Returns Core Library API reference
     * @returns ClientConfig
     */
    config(): Promise<ClientConfig> {
        return this.client.request('client.config');
    }

    /**
     * Returns detailed information about this build.
     * @returns ResultOfBuildInfo
     */
    build_info(): Promise<ResultOfBuildInfo> {
        return this.client.request('client.build_info');
    }

    /**
     * Resolves application request processing result
     * 
     * @param {ParamsOfResolveAppRequest} params
     * @returns 
     */
    resolve_app_request(params: ParamsOfResolveAppRequest): Promise<void> {
        return this.client.request('client.resolve_app_request', params);
    }
}

// crypto module


export enum CryptoErrorCode {
    InvalidPublicKey = 100,
    InvalidSecretKey = 101,
    InvalidKey = 102,
    InvalidFactorizeChallenge = 106,
    InvalidBigInt = 107,
    ScryptFailed = 108,
    InvalidKeySize = 109,
    NaclSecretBoxFailed = 110,
    NaclBoxFailed = 111,
    NaclSignFailed = 112,
    Bip39InvalidEntropy = 113,
    Bip39InvalidPhrase = 114,
    Bip32InvalidKey = 115,
    Bip32InvalidDerivePath = 116,
    Bip39InvalidDictionary = 117,
    Bip39InvalidWordCount = 118,
    MnemonicGenerationFailed = 119,
    MnemonicFromEntropyFailed = 120,
    SigningBoxNotRegistered = 121,
    InvalidSignature = 122,
    EncryptionBoxNotRegistered = 123,
    InvalidIvSize = 124,
    UnsupportedCipherMode = 125,
    CannotCreateCipher = 126,
    EncryptDataError = 127,
    DecryptDataError = 128,
    IvRequired = 129,
    CryptoBoxNotRegistered = 130,
    InvalidCryptoBoxType = 131,
    CryptoBoxSecretSerializationError = 132,
    CryptoBoxSecretDeserializationError = 133,
    InvalidNonceSize = 134
}

export type SigningBoxHandle = number

export type EncryptionBoxHandle = number

/**
 * Encryption box information.
 */
export type EncryptionBoxInfo = {

    /**
     * Derivation path, for instance "m/44'/396'/0'/0/0"
     */
    hdpath?: string,

    /**
     * Cryptographic algorithm, used by this encryption box
     */
    algorithm?: string,

    /**
     * Options, depends on algorithm and specific encryption box implementation
     */
    options?: any,

    /**
     * Public information, depends on algorithm
     */
    public?: any
}

export type EncryptionAlgorithmAESVariant = {

    value: AesParamsEB
}

export type EncryptionAlgorithmChaCha20Variant = {

    value: ChaCha20ParamsEB
}

export type EncryptionAlgorithmNaclBoxVariant = {

    value: NaclBoxParamsEB
}

export type EncryptionAlgorithmNaclSecretBoxVariant = {

    value: NaclSecretBoxParamsEB
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `AES`
 * 
 * 
 * ### `ChaCha20`
 * 
 * 
 * ### `NaclBox`
 * 
 * 
 * ### `NaclSecretBox`
 * 
 */
export type EncryptionAlgorithm = ({
    type: 'AES'
} & EncryptionAlgorithmAESVariant) | ({
    type: 'ChaCha20'
} & EncryptionAlgorithmChaCha20Variant) | ({
    type: 'NaclBox'
} & EncryptionAlgorithmNaclBoxVariant) | ({
    type: 'NaclSecretBox'
} & EncryptionAlgorithmNaclSecretBoxVariant)

export function encryptionAlgorithmAES(value: AesParamsEB): EncryptionAlgorithm {
    return {
        type: 'AES',
        value,
    };
}

export function encryptionAlgorithmChaCha20(value: ChaCha20ParamsEB): EncryptionAlgorithm {
    return {
        type: 'ChaCha20',
        value,
    };
}

export function encryptionAlgorithmNaclBox(value: NaclBoxParamsEB): EncryptionAlgorithm {
    return {
        type: 'NaclBox',
        value,
    };
}

export function encryptionAlgorithmNaclSecretBox(value: NaclSecretBoxParamsEB): EncryptionAlgorithm {
    return {
        type: 'NaclSecretBox',
        value,
    };
}

export enum CipherMode {
    CBC = "CBC",
    CFB = "CFB",
    CTR = "CTR",
    ECB = "ECB",
    OFB = "OFB"
}

export type AesParamsEB = {

    mode: CipherMode,

    key: string,

    iv?: string
}

export type AesInfo = {

    mode: CipherMode,

    iv?: string
}

export type ChaCha20ParamsEB = {

    /**
     * 256-bit key.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    key: string,

    /**
     * 96-bit nonce.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    nonce: string
}

export type NaclBoxParamsEB = {

    /**
     * 256-bit key.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    their_public: string,

    /**
     * 256-bit key.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    secret: string,

    /**
     * 96-bit nonce.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    nonce: string
}

export type NaclSecretBoxParamsEB = {

    /**
     * Secret key - unprefixed 0-padded to 64 symbols hex string
     */
    key: string,

    /**
     * Nonce in `hex`
     */
    nonce: string
}

/**
 * Creates Crypto Box from a random seed phrase. This option can be used if a developer doesn't want the seed phrase to leave the core library's memory, where it is stored encrypted.
 * 
 * @remarks
 * This type should be used upon the first wallet initialization, all further initializations
 * should use `EncryptedSecret` type instead.
 * 
 * Get `encrypted_secret` with `get_crypto_box_info` function and store it on your side.
 */
export type CryptoBoxSecretRandomSeedPhraseVariant = {

    dictionary: MnemonicDictionary,

    wordcount: number
}

/**
 * Restores crypto box instance from an existing seed phrase. This type should be used when Crypto Box is initialized from a seed phrase, entered by a user.
 * 
 * @remarks
 * This type should be used only upon the first wallet initialization, all further
 * initializations should use `EncryptedSecret` type instead.
 * 
 * Get `encrypted_secret` with `get_crypto_box_info` function and store it on your side.
 */
export type CryptoBoxSecretPredefinedSeedPhraseVariant = {

    phrase: string,

    dictionary: MnemonicDictionary,

    wordcount: number
}

/**
 * Use this type for wallet reinitializations, when you already have `encrypted_secret` on hands. To get `encrypted_secret`, use `get_crypto_box_info` function after you initialized your crypto box for the first time.
 * 
 * @remarks
 * It is an object, containing seed phrase or private key, encrypted with
 * `secret_encryption_salt` and password from `password_provider`.
 * 
 * Note that if you want to change salt or password provider, then you need to reinitialize
 * the wallet with `PredefinedSeedPhrase`, then get `EncryptedSecret` via `get_crypto_box_info`,
 * store it somewhere, and only after that initialize the wallet with `EncryptedSecret` type.
 */
export type CryptoBoxSecretEncryptedSecretVariant = {

    /**
     * It is an object, containing encrypted seed phrase or private key (now we support only seed phrase).
     */
    encrypted_secret: string
}

/**
 * Crypto Box Secret.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `RandomSeedPhrase`
 * 
 * Creates Crypto Box from a random seed phrase. This option can be used if a developer doesn't want the seed phrase to leave the core library's memory, where it is stored encrypted.
 * 
 * ### `PredefinedSeedPhrase`
 * 
 * Restores crypto box instance from an existing seed phrase. This type should be used when Crypto Box is initialized from a seed phrase, entered by a user.
 * 
 * ### `EncryptedSecret`
 * 
 * Use this type for wallet reinitializations, when you already have `encrypted_secret` on hands. To get `encrypted_secret`, use `get_crypto_box_info` function after you initialized your crypto box for the first time.
 */
export type CryptoBoxSecret = ({
    type: 'RandomSeedPhrase'
} & CryptoBoxSecretRandomSeedPhraseVariant) | ({
    type: 'PredefinedSeedPhrase'
} & CryptoBoxSecretPredefinedSeedPhraseVariant) | ({
    type: 'EncryptedSecret'
} & CryptoBoxSecretEncryptedSecretVariant)

export function cryptoBoxSecretRandomSeedPhrase(dictionary: MnemonicDictionary, wordcount: number): CryptoBoxSecret {
    return {
        type: 'RandomSeedPhrase',
        dictionary,
        wordcount,
    };
}

export function cryptoBoxSecretPredefinedSeedPhrase(phrase: string, dictionary: MnemonicDictionary, wordcount: number): CryptoBoxSecret {
    return {
        type: 'PredefinedSeedPhrase',
        phrase,
        dictionary,
        wordcount,
    };
}

export function cryptoBoxSecretEncryptedSecret(encrypted_secret: string): CryptoBoxSecret {
    return {
        type: 'EncryptedSecret',
        encrypted_secret,
    };
}

export type CryptoBoxHandle = number

export type BoxEncryptionAlgorithmChaCha20Variant = {

    value: ChaCha20ParamsCB
}

export type BoxEncryptionAlgorithmNaclBoxVariant = {

    value: NaclBoxParamsCB
}

export type BoxEncryptionAlgorithmNaclSecretBoxVariant = {

    value: NaclSecretBoxParamsCB
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `ChaCha20`
 * 
 * 
 * ### `NaclBox`
 * 
 * 
 * ### `NaclSecretBox`
 * 
 */
export type BoxEncryptionAlgorithm = ({
    type: 'ChaCha20'
} & BoxEncryptionAlgorithmChaCha20Variant) | ({
    type: 'NaclBox'
} & BoxEncryptionAlgorithmNaclBoxVariant) | ({
    type: 'NaclSecretBox'
} & BoxEncryptionAlgorithmNaclSecretBoxVariant)

export function boxEncryptionAlgorithmChaCha20(value: ChaCha20ParamsCB): BoxEncryptionAlgorithm {
    return {
        type: 'ChaCha20',
        value,
    };
}

export function boxEncryptionAlgorithmNaclBox(value: NaclBoxParamsCB): BoxEncryptionAlgorithm {
    return {
        type: 'NaclBox',
        value,
    };
}

export function boxEncryptionAlgorithmNaclSecretBox(value: NaclSecretBoxParamsCB): BoxEncryptionAlgorithm {
    return {
        type: 'NaclSecretBox',
        value,
    };
}

export type ChaCha20ParamsCB = {

    /**
     * 96-bit nonce.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    nonce: string
}

export type NaclBoxParamsCB = {

    /**
     * 256-bit key.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    their_public: string,

    /**
     * 96-bit nonce.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    nonce: string
}

export type NaclSecretBoxParamsCB = {

    /**
     * Nonce in `hex`
     */
    nonce: string
}

export enum MnemonicDictionary {
    Ton = 0,
    English = 1,
    ChineseSimplified = 2,
    ChineseTraditional = 3,
    French = 4,
    Italian = 5,
    Japanese = 6,
    Korean = 7,
    Spanish = 8
}

export type ParamsOfFactorize = {

    /**
     * Hexadecimal representation of u64 composite number.
     */
    composite: string
}

export type ResultOfFactorize = {

    /**
     * Two factors of composite or empty if composite can't be factorized.
     */
    factors: string[]
}

export type ParamsOfModularPower = {

    /**
     * `base` argument of calculation.
     */
    base: string,

    /**
     * `exponent` argument of calculation.
     */
    exponent: string,

    /**
     * `modulus` argument of calculation.
     */
    modulus: string
}

export type ResultOfModularPower = {

    /**
     * Result of modular exponentiation
     */
    modular_power: string
}

export type ParamsOfTonCrc16 = {

    /**
     * Input data for CRC calculation.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    data: string
}

export type ResultOfTonCrc16 = {

    /**
     * Calculated CRC for input data.
     */
    crc: number
}

export type ParamsOfGenerateRandomBytes = {

    /**
     * Size of random byte array.
     */
    length: number
}

export type ResultOfGenerateRandomBytes = {

    /**
     * Generated bytes encoded in `base64`.
     */
    bytes: string
}

export type ParamsOfConvertPublicKeyToTonSafeFormat = {

    /**
     * Public key - 64 symbols hex string
     */
    public_key: string
}

export type ResultOfConvertPublicKeyToTonSafeFormat = {

    /**
     * Public key represented in TON safe format.
     */
    ton_public_key: string
}

export type KeyPair = {

    /**
     * Public key - 64 symbols hex string
     */
    public: string,

    /**
     * Private key - u64 symbols hex string
     */
    secret: string
}

export type ParamsOfSign = {

    /**
     * Data that must be signed encoded in `base64`.
     */
    unsigned: string,

    /**
     * Sign keys.
     */
    keys: KeyPair
}

export type ResultOfSign = {

    /**
     * Signed data combined with signature encoded in `base64`.
     */
    signed: string,

    /**
     * Signature encoded in `hex`.
     */
    signature: string
}

export type ParamsOfVerifySignature = {

    /**
     * Signed data that must be verified encoded in `base64`.
     */
    signed: string,

    /**
     * Signer's public key - 64 symbols hex string
     */
    public: string
}

export type ResultOfVerifySignature = {

    /**
     * Unsigned data encoded in `base64`.
     */
    unsigned: string
}

export type ParamsOfHash = {

    /**
     * Input data for hash calculation.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    data: string
}

export type ResultOfHash = {

    /**
     * Hash of input `data`.
     * 
     * @remarks
     * Encoded with 'hex'.
     */
    hash: string
}

export type ParamsOfScrypt = {

    /**
     * The password bytes to be hashed. Must be encoded with `base64`.
     */
    password: string,

    /**
     * Salt bytes that modify the hash to protect against Rainbow table attacks. Must be encoded with `base64`.
     */
    salt: string,

    /**
     * CPU/memory cost parameter
     */
    log_n: number,

    /**
     * The block size parameter, which fine-tunes sequential memory read size and performance.
     */
    r: number,

    /**
     * Parallelization parameter.
     */
    p: number,

    /**
     * Intended output length in octets of the derived key.
     */
    dk_len: number
}

export type ResultOfScrypt = {

    /**
     * Derived key.
     * 
     * @remarks
     * Encoded with `hex`.
     */
    key: string
}

export type ParamsOfNaclSignKeyPairFromSecret = {

    /**
     * Secret key - unprefixed 0-padded to 64 symbols hex string
     */
    secret: string
}

export type ParamsOfNaclSign = {

    /**
     * Data that must be signed encoded in `base64`.
     */
    unsigned: string,

    /**
     * Signer's secret key - unprefixed 0-padded to 128 symbols hex string (concatenation of 64 symbols secret and 64 symbols public keys). See `nacl_sign_keypair_from_secret_key`.
     */
    secret: string
}

export type ResultOfNaclSign = {

    /**
     * Signed data, encoded in `base64`.
     */
    signed: string
}

export type ParamsOfNaclSignOpen = {

    /**
     * Signed data that must be unsigned.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    signed: string,

    /**
     * Signer's public key - unprefixed 0-padded to 64 symbols hex string
     */
    public: string
}

export type ResultOfNaclSignOpen = {

    /**
     * Unsigned data, encoded in `base64`.
     */
    unsigned: string
}

export type ResultOfNaclSignDetached = {

    /**
     * Signature encoded in `hex`.
     */
    signature: string
}

export type ParamsOfNaclSignDetachedVerify = {

    /**
     * Unsigned data that must be verified.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    unsigned: string,

    /**
     * Signature that must be verified.
     * 
     * @remarks
     * Encoded with `hex`.
     */
    signature: string,

    /**
     * Signer's public key - unprefixed 0-padded to 64 symbols hex string.
     */
    public: string
}

export type ResultOfNaclSignDetachedVerify = {

    /**
     * `true` if verification succeeded or `false` if it failed
     */
    succeeded: boolean
}

export type ParamsOfNaclBoxKeyPairFromSecret = {

    /**
     * Secret key - unprefixed 0-padded to 64 symbols hex string
     */
    secret: string
}

export type ParamsOfNaclBox = {

    /**
     * Data that must be encrypted encoded in `base64`.
     */
    decrypted: string,

    /**
     * Nonce, encoded in `hex`
     */
    nonce: string,

    /**
     * Receiver's public key - unprefixed 0-padded to 64 symbols hex string
     */
    their_public: string,

    /**
     * Sender's private key - unprefixed 0-padded to 64 symbols hex string
     */
    secret: string
}

export type ResultOfNaclBox = {

    /**
     * Encrypted data encoded in `base64`.
     */
    encrypted: string
}

export type ParamsOfNaclBoxOpen = {

    /**
     * Data that must be decrypted.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    encrypted: string,

    /**
     * Nonce
     */
    nonce: string,

    /**
     * Sender's public key - unprefixed 0-padded to 64 symbols hex string
     */
    their_public: string,

    /**
     * Receiver's private key - unprefixed 0-padded to 64 symbols hex string
     */
    secret: string
}

export type ResultOfNaclBoxOpen = {

    /**
     * Decrypted data encoded in `base64`.
     */
    decrypted: string
}

export type ParamsOfNaclSecretBox = {

    /**
     * Data that must be encrypted.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    decrypted: string,

    /**
     * Nonce in `hex`
     */
    nonce: string,

    /**
     * Secret key - unprefixed 0-padded to 64 symbols hex string
     */
    key: string
}

export type ParamsOfNaclSecretBoxOpen = {

    /**
     * Data that must be decrypted.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    encrypted: string,

    /**
     * Nonce in `hex`
     */
    nonce: string,

    /**
     * Secret key - unprefixed 0-padded to 64 symbols hex string
     */
    key: string
}

export type ParamsOfMnemonicWords = {

    /**
     * Dictionary identifier
     */
    dictionary?: MnemonicDictionary
}

export type ResultOfMnemonicWords = {

    /**
     * The list of mnemonic words
     */
    words: string
}

export type ParamsOfMnemonicFromRandom = {

    /**
     * Dictionary identifier
     */
    dictionary?: MnemonicDictionary,

    /**
     * Mnemonic word count
     */
    word_count?: number
}

export type ResultOfMnemonicFromRandom = {

    /**
     * String of mnemonic words
     */
    phrase: string
}

export type ParamsOfMnemonicFromEntropy = {

    /**
     * Entropy bytes.
     * 
     * @remarks
     * Hex encoded.
     */
    entropy: string,

    /**
     * Dictionary identifier
     */
    dictionary?: MnemonicDictionary,

    /**
     * Mnemonic word count
     */
    word_count?: number
}

export type ResultOfMnemonicFromEntropy = {

    /**
     * Phrase
     */
    phrase: string
}

export type ParamsOfMnemonicVerify = {

    /**
     * Phrase
     */
    phrase: string,

    /**
     * Dictionary identifier
     */
    dictionary?: MnemonicDictionary,

    /**
     * Word count
     */
    word_count?: number
}

export type ResultOfMnemonicVerify = {

    /**
     * Flag indicating if the mnemonic is valid or not
     */
    valid: boolean
}

export type ParamsOfMnemonicDeriveSignKeys = {

    /**
     * Phrase
     */
    phrase: string,

    /**
     * Derivation path, for instance "m/44'/396'/0'/0/0"
     */
    path?: string,

    /**
     * Dictionary identifier
     */
    dictionary?: MnemonicDictionary,

    /**
     * Word count
     */
    word_count?: number
}

export type ParamsOfHDKeyXPrvFromMnemonic = {

    /**
     * String with seed phrase
     */
    phrase: string,

    /**
     * Dictionary identifier
     */
    dictionary?: MnemonicDictionary,

    /**
     * Mnemonic word count
     */
    word_count?: number
}

export type ResultOfHDKeyXPrvFromMnemonic = {

    /**
     * Serialized extended master private key
     */
    xprv: string
}

export type ParamsOfHDKeyDeriveFromXPrv = {

    /**
     * Serialized extended private key
     */
    xprv: string,

    /**
     * Child index (see BIP-0032)
     */
    child_index: number,

    /**
     * Indicates the derivation of hardened/not-hardened key (see BIP-0032)
     */
    hardened: boolean
}

export type ResultOfHDKeyDeriveFromXPrv = {

    /**
     * Serialized extended private key
     */
    xprv: string
}

export type ParamsOfHDKeyDeriveFromXPrvPath = {

    /**
     * Serialized extended private key
     */
    xprv: string,

    /**
     * Derivation path, for instance "m/44'/396'/0'/0/0"
     */
    path: string
}

export type ResultOfHDKeyDeriveFromXPrvPath = {

    /**
     * Derived serialized extended private key
     */
    xprv: string
}

export type ParamsOfHDKeySecretFromXPrv = {

    /**
     * Serialized extended private key
     */
    xprv: string
}

export type ResultOfHDKeySecretFromXPrv = {

    /**
     * Private key - 64 symbols hex string
     */
    secret: string
}

export type ParamsOfHDKeyPublicFromXPrv = {

    /**
     * Serialized extended private key
     */
    xprv: string
}

export type ResultOfHDKeyPublicFromXPrv = {

    /**
     * Public key - 64 symbols hex string
     */
    public: string
}

export type ParamsOfChaCha20 = {

    /**
     * Source data to be encrypted or decrypted.
     * 
     * @remarks
     * Must be encoded with `base64`.
     */
    data: string,

    /**
     * 256-bit key.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    key: string,

    /**
     * 96-bit nonce.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    nonce: string
}

export type ResultOfChaCha20 = {

    /**
     * Encrypted/decrypted data.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    data: string
}

export type ParamsOfCreateCryptoBox = {

    /**
     * Salt used for secret encryption. For example, a mobile device can use device ID as salt.
     */
    secret_encryption_salt: string,

    /**
     * Cryptobox secret
     */
    secret: CryptoBoxSecret
}

export type RegisteredCryptoBox = {

    handle: CryptoBoxHandle
}

export type ParamsOfAppPasswordProviderGetPasswordVariant = {

    /**
     * Temporary library pubkey, that is used on application side for password encryption, along with application temporary private key and nonce. Used for password decryption on library side.
     */
    encryption_public_key: string
}

/**
 * Interface that provides a callback that returns an encrypted password, used for cryptobox secret encryption
 * 
 * @remarks
 * To secure the password while passing it from application to the library,
 * the library generates a temporary key pair, passes the pubkey
 * to the passwordProvider, decrypts the received password with private key,
 * and deletes the key pair right away.
 * 
 * Application should generate a temporary nacl_box_keypair
 * and encrypt the password with naclbox function using nacl_box_keypair.secret
 * and encryption_public_key keys + nonce = 24-byte prefix of encryption_public_key.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `GetPassword`
 * 
 */
export type ParamsOfAppPasswordProvider = ({
    type: 'GetPassword'
} & ParamsOfAppPasswordProviderGetPasswordVariant)

export function paramsOfAppPasswordProviderGetPassword(encryption_public_key: string): ParamsOfAppPasswordProvider {
    return {
        type: 'GetPassword',
        encryption_public_key,
    };
}

export type ResultOfAppPasswordProviderGetPasswordVariant = {

    /**
     * Password, encrypted and encoded to base64. Crypto box uses this password to decrypt its secret (seed phrase).
     */
    encrypted_password: string,

    /**
     * Hex encoded public key of a temporary key pair, used for password encryption on application side.
     * 
     * @remarks
     * Used together with `encryption_public_key` to decode `encrypted_password`.
     */
    app_encryption_pubkey: string
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `GetPassword`
 * 
 */
export type ResultOfAppPasswordProvider = ({
    type: 'GetPassword'
} & ResultOfAppPasswordProviderGetPasswordVariant)

export function resultOfAppPasswordProviderGetPassword(encrypted_password: string, app_encryption_pubkey: string): ResultOfAppPasswordProvider {
    return {
        type: 'GetPassword',
        encrypted_password,
        app_encryption_pubkey,
    };
}

export type ResultOfGetCryptoBoxInfo = {

    /**
     * Secret (seed phrase) encrypted with salt and password.
     */
    encrypted_secret: string
}

export type ResultOfGetCryptoBoxSeedPhrase = {

    phrase: string,

    dictionary: MnemonicDictionary,

    wordcount: number
}

export type ParamsOfGetSigningBoxFromCryptoBox = {

    /**
     * Crypto Box Handle.
     */
    handle: number,

    /**
     * HD key derivation path.
     * 
     * @remarks
     * By default, Everscale HD path is used.
     */
    hdpath?: string,

    /**
     * Store derived secret for this lifetime (in ms). The timer starts after each signing box operation. Secrets will be deleted immediately after each signing box operation, if this value is not set.
     */
    secret_lifetime?: number
}

export type RegisteredSigningBox = {

    /**
     * Handle of the signing box.
     */
    handle: SigningBoxHandle
}

export type ParamsOfGetEncryptionBoxFromCryptoBox = {

    /**
     * Crypto Box Handle.
     */
    handle: number,

    /**
     * HD key derivation path.
     * 
     * @remarks
     * By default, Everscale HD path is used.
     */
    hdpath?: string,

    /**
     * Encryption algorithm.
     */
    algorithm: BoxEncryptionAlgorithm,

    /**
     * Store derived secret for encryption algorithm for this lifetime (in ms). The timer starts after each encryption box operation. Secrets will be deleted (overwritten with zeroes) after each encryption operation, if this value is not set.
     */
    secret_lifetime?: number
}

export type RegisteredEncryptionBox = {

    /**
     * Handle of the encryption box.
     */
    handle: EncryptionBoxHandle
}

/**
 * Get signing box public key
 */
export type ParamsOfAppSigningBoxGetPublicKeyVariant = {

}

/**
 * Sign data
 */
export type ParamsOfAppSigningBoxSignVariant = {

    /**
     * Data to sign encoded as base64
     */
    unsigned: string
}

/**
 * Signing box callbacks.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `GetPublicKey`
 * 
 * Get signing box public key
 * 
 * ### `Sign`
 * 
 * Sign data
 */
export type ParamsOfAppSigningBox = ({
    type: 'GetPublicKey'
} & ParamsOfAppSigningBoxGetPublicKeyVariant) | ({
    type: 'Sign'
} & ParamsOfAppSigningBoxSignVariant)

export function paramsOfAppSigningBoxGetPublicKey(): ParamsOfAppSigningBox {
    return {
        type: 'GetPublicKey',
    };
}

export function paramsOfAppSigningBoxSign(unsigned: string): ParamsOfAppSigningBox {
    return {
        type: 'Sign',
        unsigned,
    };
}

/**
 * Result of getting public key
 */
export type ResultOfAppSigningBoxGetPublicKeyVariant = {

    /**
     * Signing box public key
     */
    public_key: string
}

/**
 * Result of signing data
 */
export type ResultOfAppSigningBoxSignVariant = {

    /**
     * Data signature encoded as hex
     */
    signature: string
}

/**
 * Returning values from signing box callbacks.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `GetPublicKey`
 * 
 * Result of getting public key
 * 
 * ### `Sign`
 * 
 * Result of signing data
 */
export type ResultOfAppSigningBox = ({
    type: 'GetPublicKey'
} & ResultOfAppSigningBoxGetPublicKeyVariant) | ({
    type: 'Sign'
} & ResultOfAppSigningBoxSignVariant)

export function resultOfAppSigningBoxGetPublicKey(public_key: string): ResultOfAppSigningBox {
    return {
        type: 'GetPublicKey',
        public_key,
    };
}

export function resultOfAppSigningBoxSign(signature: string): ResultOfAppSigningBox {
    return {
        type: 'Sign',
        signature,
    };
}

export type ResultOfSigningBoxGetPublicKey = {

    /**
     * Public key of signing box.
     * 
     * @remarks
     * Encoded with hex
     */
    pubkey: string
}

export type ParamsOfSigningBoxSign = {

    /**
     * Signing Box handle.
     */
    signing_box: SigningBoxHandle,

    /**
     * Unsigned user data.
     * 
     * @remarks
     * Must be encoded with `base64`.
     */
    unsigned: string
}

export type ResultOfSigningBoxSign = {

    /**
     * Data signature.
     * 
     * @remarks
     * Encoded with `hex`.
     */
    signature: string
}

/**
 * Get encryption box info
 */
export type ParamsOfAppEncryptionBoxGetInfoVariant = {

}

/**
 * Encrypt data
 */
export type ParamsOfAppEncryptionBoxEncryptVariant = {

    /**
     * Data, encoded in Base64
     */
    data: string
}

/**
 * Decrypt data
 */
export type ParamsOfAppEncryptionBoxDecryptVariant = {

    /**
     * Data, encoded in Base64
     */
    data: string
}

/**
 * Interface for data encryption/decryption
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `GetInfo`
 * 
 * Get encryption box info
 * 
 * ### `Encrypt`
 * 
 * Encrypt data
 * 
 * ### `Decrypt`
 * 
 * Decrypt data
 */
export type ParamsOfAppEncryptionBox = ({
    type: 'GetInfo'
} & ParamsOfAppEncryptionBoxGetInfoVariant) | ({
    type: 'Encrypt'
} & ParamsOfAppEncryptionBoxEncryptVariant) | ({
    type: 'Decrypt'
} & ParamsOfAppEncryptionBoxDecryptVariant)

export function paramsOfAppEncryptionBoxGetInfo(): ParamsOfAppEncryptionBox {
    return {
        type: 'GetInfo',
    };
}

export function paramsOfAppEncryptionBoxEncrypt(data: string): ParamsOfAppEncryptionBox {
    return {
        type: 'Encrypt',
        data,
    };
}

export function paramsOfAppEncryptionBoxDecrypt(data: string): ParamsOfAppEncryptionBox {
    return {
        type: 'Decrypt',
        data,
    };
}

/**
 * Result of getting encryption box info
 */
export type ResultOfAppEncryptionBoxGetInfoVariant = {

    info: EncryptionBoxInfo
}

/**
 * Result of encrypting data
 */
export type ResultOfAppEncryptionBoxEncryptVariant = {

    /**
     * Encrypted data, encoded in Base64
     */
    data: string
}

/**
 * Result of decrypting data
 */
export type ResultOfAppEncryptionBoxDecryptVariant = {

    /**
     * Decrypted data, encoded in Base64
     */
    data: string
}

/**
 * Returning values from signing box callbacks.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `GetInfo`
 * 
 * Result of getting encryption box info
 * 
 * ### `Encrypt`
 * 
 * Result of encrypting data
 * 
 * ### `Decrypt`
 * 
 * Result of decrypting data
 */
export type ResultOfAppEncryptionBox = ({
    type: 'GetInfo'
} & ResultOfAppEncryptionBoxGetInfoVariant) | ({
    type: 'Encrypt'
} & ResultOfAppEncryptionBoxEncryptVariant) | ({
    type: 'Decrypt'
} & ResultOfAppEncryptionBoxDecryptVariant)

export function resultOfAppEncryptionBoxGetInfo(info: EncryptionBoxInfo): ResultOfAppEncryptionBox {
    return {
        type: 'GetInfo',
        info,
    };
}

export function resultOfAppEncryptionBoxEncrypt(data: string): ResultOfAppEncryptionBox {
    return {
        type: 'Encrypt',
        data,
    };
}

export function resultOfAppEncryptionBoxDecrypt(data: string): ResultOfAppEncryptionBox {
    return {
        type: 'Decrypt',
        data,
    };
}

export type ParamsOfEncryptionBoxGetInfo = {

    /**
     * Encryption box handle
     */
    encryption_box: EncryptionBoxHandle
}

export type ResultOfEncryptionBoxGetInfo = {

    /**
     * Encryption box information
     */
    info: EncryptionBoxInfo
}

export type ParamsOfEncryptionBoxEncrypt = {

    /**
     * Encryption box handle
     */
    encryption_box: EncryptionBoxHandle,

    /**
     * Data to be encrypted, encoded in Base64
     */
    data: string
}

export type ResultOfEncryptionBoxEncrypt = {

    /**
     * Encrypted data, encoded in Base64.
     * 
     * @remarks
     * Padded to cipher block size
     */
    data: string
}

export type ParamsOfEncryptionBoxDecrypt = {

    /**
     * Encryption box handle
     */
    encryption_box: EncryptionBoxHandle,

    /**
     * Data to be decrypted, encoded in Base64
     */
    data: string
}

export type ResultOfEncryptionBoxDecrypt = {

    /**
     * Decrypted data, encoded in Base64.
     */
    data: string
}

export type ParamsOfCreateEncryptionBox = {

    /**
     * Encryption algorithm specifier including cipher parameters (key, IV, etc)
     */
    algorithm: EncryptionAlgorithm
}

export interface AppPasswordProvider {
    get_password(params: ParamsOfAppPasswordProviderGetPasswordVariant): Promise<ResultOfAppPasswordProviderGetPasswordVariant>,
}

async function dispatchAppPasswordProvider(obj: AppPasswordProvider, params: ParamsOfAppPasswordProvider, app_request_id: number | null, client: IClient) {
    try {
        let result = {};
        switch (params.type) {
            case 'GetPassword':
                result = await obj.get_password(params);
                break;
        }
        client.resolve_app_request(app_request_id, { type: params.type, ...result });
    }
    catch (error) {
        client.reject_app_request(app_request_id, error);
    }
}
export interface AppSigningBox {
    get_public_key(): Promise<ResultOfAppSigningBoxGetPublicKeyVariant>,
    sign(params: ParamsOfAppSigningBoxSignVariant): Promise<ResultOfAppSigningBoxSignVariant>,
}

async function dispatchAppSigningBox(obj: AppSigningBox, params: ParamsOfAppSigningBox, app_request_id: number | null, client: IClient) {
    try {
        let result = {};
        switch (params.type) {
            case 'GetPublicKey':
                result = await obj.get_public_key();
                break;
            case 'Sign':
                result = await obj.sign(params);
                break;
        }
        client.resolve_app_request(app_request_id, { type: params.type, ...result });
    }
    catch (error) {
        client.reject_app_request(app_request_id, error);
    }
}
export interface AppEncryptionBox {
    get_info(): Promise<ResultOfAppEncryptionBoxGetInfoVariant>,
    encrypt(params: ParamsOfAppEncryptionBoxEncryptVariant): Promise<ResultOfAppEncryptionBoxEncryptVariant>,
    decrypt(params: ParamsOfAppEncryptionBoxDecryptVariant): Promise<ResultOfAppEncryptionBoxDecryptVariant>,
}

async function dispatchAppEncryptionBox(obj: AppEncryptionBox, params: ParamsOfAppEncryptionBox, app_request_id: number | null, client: IClient) {
    try {
        let result = {};
        switch (params.type) {
            case 'GetInfo':
                result = await obj.get_info();
                break;
            case 'Encrypt':
                result = await obj.encrypt(params);
                break;
            case 'Decrypt':
                result = await obj.decrypt(params);
                break;
        }
        client.resolve_app_request(app_request_id, { type: params.type, ...result });
    }
    catch (error) {
        client.reject_app_request(app_request_id, error);
    }
}
/**
 * Crypto functions.
 */
export class CryptoModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Integer factorization
     * 
     * @remarks
     * Performs prime factorization – decomposition of a composite number
     * into a product of smaller prime integers (factors).
     * See [https://en.wikipedia.org/wiki/Integer_factorization]
     * 
     * @param {ParamsOfFactorize} params
     * @returns ResultOfFactorize
     */
    factorize(params: ParamsOfFactorize): Promise<ResultOfFactorize> {
        return this.client.request('crypto.factorize', params);
    }

    /**
     * Modular exponentiation
     * 
     * @remarks
     * Performs modular exponentiation for big integers (`base`^`exponent` mod `modulus`).
     * See [https://en.wikipedia.org/wiki/Modular_exponentiation]
     * 
     * @param {ParamsOfModularPower} params
     * @returns ResultOfModularPower
     */
    modular_power(params: ParamsOfModularPower): Promise<ResultOfModularPower> {
        return this.client.request('crypto.modular_power', params);
    }

    /**
     * Calculates CRC16 using TON algorithm.
     * 
     * @param {ParamsOfTonCrc16} params
     * @returns ResultOfTonCrc16
     */
    ton_crc16(params: ParamsOfTonCrc16): Promise<ResultOfTonCrc16> {
        return this.client.request('crypto.ton_crc16', params);
    }

    /**
     * Generates random byte array of the specified length and returns it in `base64` format
     * 
     * @param {ParamsOfGenerateRandomBytes} params
     * @returns ResultOfGenerateRandomBytes
     */
    generate_random_bytes(params: ParamsOfGenerateRandomBytes): Promise<ResultOfGenerateRandomBytes> {
        return this.client.request('crypto.generate_random_bytes', params);
    }

    /**
     * Converts public key to ton safe_format
     * 
     * @param {ParamsOfConvertPublicKeyToTonSafeFormat} params
     * @returns ResultOfConvertPublicKeyToTonSafeFormat
     */
    convert_public_key_to_ton_safe_format(params: ParamsOfConvertPublicKeyToTonSafeFormat): Promise<ResultOfConvertPublicKeyToTonSafeFormat> {
        return this.client.request('crypto.convert_public_key_to_ton_safe_format', params);
    }

    /**
     * Generates random ed25519 key pair.
     * @returns KeyPair
     */
    generate_random_sign_keys(): Promise<KeyPair> {
        return this.client.request('crypto.generate_random_sign_keys');
    }

    /**
     * Signs a data using the provided keys.
     * 
     * @param {ParamsOfSign} params
     * @returns ResultOfSign
     */
    sign(params: ParamsOfSign): Promise<ResultOfSign> {
        return this.client.request('crypto.sign', params);
    }

    /**
     * Verifies signed data using the provided public key. Raises error if verification is failed.
     * 
     * @param {ParamsOfVerifySignature} params
     * @returns ResultOfVerifySignature
     */
    verify_signature(params: ParamsOfVerifySignature): Promise<ResultOfVerifySignature> {
        return this.client.request('crypto.verify_signature', params);
    }

    /**
     * Calculates SHA256 hash of the specified data.
     * 
     * @param {ParamsOfHash} params
     * @returns ResultOfHash
     */
    sha256(params: ParamsOfHash): Promise<ResultOfHash> {
        return this.client.request('crypto.sha256', params);
    }

    /**
     * Calculates SHA512 hash of the specified data.
     * 
     * @param {ParamsOfHash} params
     * @returns ResultOfHash
     */
    sha512(params: ParamsOfHash): Promise<ResultOfHash> {
        return this.client.request('crypto.sha512', params);
    }

    /**
     * Perform `scrypt` encryption
     * 
     * @remarks
     * Derives key from `password` and `key` using `scrypt` algorithm.
     * See [https://en.wikipedia.org/wiki/Scrypt].
     * 
     * # Arguments
     * - `log_n` - The log2 of the Scrypt parameter `N`
     * - `r` - The Scrypt parameter `r`
     * - `p` - The Scrypt parameter `p`
     * # Conditions
     * - `log_n` must be less than `64`
     * - `r` must be greater than `0` and less than or equal to `4294967295`
     * - `p` must be greater than `0` and less than `4294967295`
     * # Recommended values sufficient for most use-cases
     * - `log_n = 15` (`n = 32768`)
     * - `r = 8`
     * - `p = 1`
     * 
     * @param {ParamsOfScrypt} params
     * @returns ResultOfScrypt
     */
    scrypt(params: ParamsOfScrypt): Promise<ResultOfScrypt> {
        return this.client.request('crypto.scrypt', params);
    }

    /**
     * Generates a key pair for signing from the secret key
     * 
     * @remarks
     * **NOTE:** In the result the secret key is actually the concatenation
     * of secret and public keys (128 symbols hex string) by design of [NaCL](http://nacl.cr.yp.to/sign.html).
     * See also [the stackexchange question](https://crypto.stackexchange.com/questions/54353/).
     * 
     * @param {ParamsOfNaclSignKeyPairFromSecret} params
     * @returns KeyPair
     */
    nacl_sign_keypair_from_secret_key(params: ParamsOfNaclSignKeyPairFromSecret): Promise<KeyPair> {
        return this.client.request('crypto.nacl_sign_keypair_from_secret_key', params);
    }

    /**
     * Signs data using the signer's secret key.
     * 
     * @param {ParamsOfNaclSign} params
     * @returns ResultOfNaclSign
     */
    nacl_sign(params: ParamsOfNaclSign): Promise<ResultOfNaclSign> {
        return this.client.request('crypto.nacl_sign', params);
    }

    /**
     * Verifies the signature and returns the unsigned message
     * 
     * @remarks
     * Verifies the signature in `signed` using the signer's public key `public`
     * and returns the message `unsigned`.
     * 
     * If the signature fails verification, crypto_sign_open raises an exception.
     * 
     * @param {ParamsOfNaclSignOpen} params
     * @returns ResultOfNaclSignOpen
     */
    nacl_sign_open(params: ParamsOfNaclSignOpen): Promise<ResultOfNaclSignOpen> {
        return this.client.request('crypto.nacl_sign_open', params);
    }

    /**
     * Signs the message using the secret key and returns a signature.
     * 
     * @remarks
     * Signs the message `unsigned` using the secret key `secret`
     * and returns a signature `signature`.
     * 
     * @param {ParamsOfNaclSign} params
     * @returns ResultOfNaclSignDetached
     */
    nacl_sign_detached(params: ParamsOfNaclSign): Promise<ResultOfNaclSignDetached> {
        return this.client.request('crypto.nacl_sign_detached', params);
    }

    /**
     * Verifies the signature with public key and `unsigned` data.
     * 
     * @param {ParamsOfNaclSignDetachedVerify} params
     * @returns ResultOfNaclSignDetachedVerify
     */
    nacl_sign_detached_verify(params: ParamsOfNaclSignDetachedVerify): Promise<ResultOfNaclSignDetachedVerify> {
        return this.client.request('crypto.nacl_sign_detached_verify', params);
    }

    /**
     * Generates a random NaCl key pair
     * @returns KeyPair
     */
    nacl_box_keypair(): Promise<KeyPair> {
        return this.client.request('crypto.nacl_box_keypair');
    }

    /**
     * Generates key pair from a secret key
     * 
     * @param {ParamsOfNaclBoxKeyPairFromSecret} params
     * @returns KeyPair
     */
    nacl_box_keypair_from_secret_key(params: ParamsOfNaclBoxKeyPairFromSecret): Promise<KeyPair> {
        return this.client.request('crypto.nacl_box_keypair_from_secret_key', params);
    }

    /**
     * Public key authenticated encryption
     * 
     * @remarks
     * Encrypt and authenticate a message using the senders secret key, the receivers public
     * key, and a nonce.
     * 
     * @param {ParamsOfNaclBox} params
     * @returns ResultOfNaclBox
     */
    nacl_box(params: ParamsOfNaclBox): Promise<ResultOfNaclBox> {
        return this.client.request('crypto.nacl_box', params);
    }

    /**
     * Decrypt and verify the cipher text using the receivers secret key, the senders public key, and the nonce.
     * 
     * @param {ParamsOfNaclBoxOpen} params
     * @returns ResultOfNaclBoxOpen
     */
    nacl_box_open(params: ParamsOfNaclBoxOpen): Promise<ResultOfNaclBoxOpen> {
        return this.client.request('crypto.nacl_box_open', params);
    }

    /**
     * Encrypt and authenticate message using nonce and secret key.
     * 
     * @param {ParamsOfNaclSecretBox} params
     * @returns ResultOfNaclBox
     */
    nacl_secret_box(params: ParamsOfNaclSecretBox): Promise<ResultOfNaclBox> {
        return this.client.request('crypto.nacl_secret_box', params);
    }

    /**
     * Decrypts and verifies cipher text using `nonce` and secret `key`.
     * 
     * @param {ParamsOfNaclSecretBoxOpen} params
     * @returns ResultOfNaclBoxOpen
     */
    nacl_secret_box_open(params: ParamsOfNaclSecretBoxOpen): Promise<ResultOfNaclBoxOpen> {
        return this.client.request('crypto.nacl_secret_box_open', params);
    }

    /**
     * Prints the list of words from the specified dictionary
     * 
     * @param {ParamsOfMnemonicWords} params
     * @returns ResultOfMnemonicWords
     */
    mnemonic_words(params: ParamsOfMnemonicWords): Promise<ResultOfMnemonicWords> {
        return this.client.request('crypto.mnemonic_words', params);
    }

    /**
     * Generates a random mnemonic
     * 
     * @remarks
     * Generates a random mnemonic from the specified dictionary and word count
     * 
     * @param {ParamsOfMnemonicFromRandom} params
     * @returns ResultOfMnemonicFromRandom
     */
    mnemonic_from_random(params: ParamsOfMnemonicFromRandom): Promise<ResultOfMnemonicFromRandom> {
        return this.client.request('crypto.mnemonic_from_random', params);
    }

    /**
     * Generates mnemonic from pre-generated entropy
     * 
     * @param {ParamsOfMnemonicFromEntropy} params
     * @returns ResultOfMnemonicFromEntropy
     */
    mnemonic_from_entropy(params: ParamsOfMnemonicFromEntropy): Promise<ResultOfMnemonicFromEntropy> {
        return this.client.request('crypto.mnemonic_from_entropy', params);
    }

    /**
     * Validates a mnemonic phrase
     * 
     * @remarks
     * The phrase supplied will be checked for word length and validated according to the checksum
     * specified in BIP0039.
     * 
     * @param {ParamsOfMnemonicVerify} params
     * @returns ResultOfMnemonicVerify
     */
    mnemonic_verify(params: ParamsOfMnemonicVerify): Promise<ResultOfMnemonicVerify> {
        return this.client.request('crypto.mnemonic_verify', params);
    }

    /**
     * Derives a key pair for signing from the seed phrase
     * 
     * @remarks
     * Validates the seed phrase, generates master key and then derives
     * the key pair from the master key and the specified path
     * 
     * @param {ParamsOfMnemonicDeriveSignKeys} params
     * @returns KeyPair
     */
    mnemonic_derive_sign_keys(params: ParamsOfMnemonicDeriveSignKeys): Promise<KeyPair> {
        return this.client.request('crypto.mnemonic_derive_sign_keys', params);
    }

    /**
     * Generates an extended master private key that will be the root for all the derived keys
     * 
     * @param {ParamsOfHDKeyXPrvFromMnemonic} params
     * @returns ResultOfHDKeyXPrvFromMnemonic
     */
    hdkey_xprv_from_mnemonic(params: ParamsOfHDKeyXPrvFromMnemonic): Promise<ResultOfHDKeyXPrvFromMnemonic> {
        return this.client.request('crypto.hdkey_xprv_from_mnemonic', params);
    }

    /**
     * Returns extended private key derived from the specified extended private key and child index
     * 
     * @param {ParamsOfHDKeyDeriveFromXPrv} params
     * @returns ResultOfHDKeyDeriveFromXPrv
     */
    hdkey_derive_from_xprv(params: ParamsOfHDKeyDeriveFromXPrv): Promise<ResultOfHDKeyDeriveFromXPrv> {
        return this.client.request('crypto.hdkey_derive_from_xprv', params);
    }

    /**
     * Derives the extended private key from the specified key and path
     * 
     * @param {ParamsOfHDKeyDeriveFromXPrvPath} params
     * @returns ResultOfHDKeyDeriveFromXPrvPath
     */
    hdkey_derive_from_xprv_path(params: ParamsOfHDKeyDeriveFromXPrvPath): Promise<ResultOfHDKeyDeriveFromXPrvPath> {
        return this.client.request('crypto.hdkey_derive_from_xprv_path', params);
    }

    /**
     * Extracts the private key from the serialized extended private key
     * 
     * @param {ParamsOfHDKeySecretFromXPrv} params
     * @returns ResultOfHDKeySecretFromXPrv
     */
    hdkey_secret_from_xprv(params: ParamsOfHDKeySecretFromXPrv): Promise<ResultOfHDKeySecretFromXPrv> {
        return this.client.request('crypto.hdkey_secret_from_xprv', params);
    }

    /**
     * Extracts the public key from the serialized extended private key
     * 
     * @param {ParamsOfHDKeyPublicFromXPrv} params
     * @returns ResultOfHDKeyPublicFromXPrv
     */
    hdkey_public_from_xprv(params: ParamsOfHDKeyPublicFromXPrv): Promise<ResultOfHDKeyPublicFromXPrv> {
        return this.client.request('crypto.hdkey_public_from_xprv', params);
    }

    /**
     * Performs symmetric `chacha20` encryption.
     * 
     * @param {ParamsOfChaCha20} params
     * @returns ResultOfChaCha20
     */
    chacha20(params: ParamsOfChaCha20): Promise<ResultOfChaCha20> {
        return this.client.request('crypto.chacha20', params);
    }

    /**
     * Creates a Crypto Box instance.
     * 
     * @remarks
     * Crypto Box is a root crypto object, that encapsulates some secret (seed phrase usually)
     * in encrypted form and acts as a factory for all crypto primitives used in SDK:
     * keys for signing and encryption, derived from this secret.
     * 
     * Crypto Box encrypts original Seed Phrase with salt and password that is retrieved
     * from `password_provider` callback, implemented on Application side.
     * 
     * When used, decrypted secret shows up in core library's memory for a very short period
     * of time and then is immediately overwritten with zeroes.
     * 
     * @param {ParamsOfCreateCryptoBox} params
     * @returns RegisteredCryptoBox
     */
    create_crypto_box(params: ParamsOfCreateCryptoBox, obj: AppPasswordProvider): Promise<RegisteredCryptoBox> {
        return this.client.request('crypto.create_crypto_box', params, (params: any, responseType: number) => {
            if (responseType === 3) {
                dispatchAppPasswordProvider(obj, params.request_data, params.app_request_id, this.client);
            } else if (responseType === 4) {
                dispatchAppPasswordProvider(obj, params, null, this.client);
            }
        });
    }

    /**
     * Removes Crypto Box. Clears all secret data.
     * 
     * @param {RegisteredCryptoBox} params
     * @returns 
     */
    remove_crypto_box(params: RegisteredCryptoBox): Promise<void> {
        return this.client.request('crypto.remove_crypto_box', params);
    }

    /**
     * Get Crypto Box Info. Used to get `encrypted_secret` that should be used for all the cryptobox initializations except the first one.
     * 
     * @param {RegisteredCryptoBox} params
     * @returns ResultOfGetCryptoBoxInfo
     */
    get_crypto_box_info(params: RegisteredCryptoBox): Promise<ResultOfGetCryptoBoxInfo> {
        return this.client.request('crypto.get_crypto_box_info', params);
    }

    /**
     * Get Crypto Box Seed Phrase.
     * 
     * @remarks
     * Attention! Store this data in your application for a very short period of time and overwrite it with zeroes ASAP.
     * 
     * @param {RegisteredCryptoBox} params
     * @returns ResultOfGetCryptoBoxSeedPhrase
     */
    get_crypto_box_seed_phrase(params: RegisteredCryptoBox): Promise<ResultOfGetCryptoBoxSeedPhrase> {
        return this.client.request('crypto.get_crypto_box_seed_phrase', params);
    }

    /**
     * Get handle of Signing Box derived from Crypto Box.
     * 
     * @param {ParamsOfGetSigningBoxFromCryptoBox} params
     * @returns RegisteredSigningBox
     */
    get_signing_box_from_crypto_box(params: ParamsOfGetSigningBoxFromCryptoBox): Promise<RegisteredSigningBox> {
        return this.client.request('crypto.get_signing_box_from_crypto_box', params);
    }

    /**
     * Gets Encryption Box from Crypto Box.
     * 
     * @remarks
     * Derives encryption keypair from cryptobox secret and hdpath and
     * stores it in cache for `secret_lifetime`
     * or until explicitly cleared by `clear_crypto_box_secret_cache` method.
     * If `secret_lifetime` is not specified - overwrites encryption secret with zeroes immediately after
     * encryption operation.
     * 
     * @param {ParamsOfGetEncryptionBoxFromCryptoBox} params
     * @returns RegisteredEncryptionBox
     */
    get_encryption_box_from_crypto_box(params: ParamsOfGetEncryptionBoxFromCryptoBox): Promise<RegisteredEncryptionBox> {
        return this.client.request('crypto.get_encryption_box_from_crypto_box', params);
    }

    /**
     * Removes cached secrets (overwrites with zeroes) from all signing and encryption boxes, derived from crypto box.
     * 
     * @param {RegisteredCryptoBox} params
     * @returns 
     */
    clear_crypto_box_secret_cache(params: RegisteredCryptoBox): Promise<void> {
        return this.client.request('crypto.clear_crypto_box_secret_cache', params);
    }

    /**
     * Register an application implemented signing box.
     * @returns RegisteredSigningBox
     */
    register_signing_box(obj: AppSigningBox): Promise<RegisteredSigningBox> {
        return this.client.request('crypto.register_signing_box', undefined, (params: any, responseType: number) => {
            if (responseType === 3) {
                dispatchAppSigningBox(obj, params.request_data, params.app_request_id, this.client);
            } else if (responseType === 4) {
                dispatchAppSigningBox(obj, params, null, this.client);
            }
        });
    }

    /**
     * Creates a default signing box implementation.
     * 
     * @param {KeyPair} params
     * @returns RegisteredSigningBox
     */
    get_signing_box(params: KeyPair): Promise<RegisteredSigningBox> {
        return this.client.request('crypto.get_signing_box', params);
    }

    /**
     * Returns public key of signing key pair.
     * 
     * @param {RegisteredSigningBox} params
     * @returns ResultOfSigningBoxGetPublicKey
     */
    signing_box_get_public_key(params: RegisteredSigningBox): Promise<ResultOfSigningBoxGetPublicKey> {
        return this.client.request('crypto.signing_box_get_public_key', params);
    }

    /**
     * Returns signed user data.
     * 
     * @param {ParamsOfSigningBoxSign} params
     * @returns ResultOfSigningBoxSign
     */
    signing_box_sign(params: ParamsOfSigningBoxSign): Promise<ResultOfSigningBoxSign> {
        return this.client.request('crypto.signing_box_sign', params);
    }

    /**
     * Removes signing box from SDK.
     * 
     * @param {RegisteredSigningBox} params
     * @returns 
     */
    remove_signing_box(params: RegisteredSigningBox): Promise<void> {
        return this.client.request('crypto.remove_signing_box', params);
    }

    /**
     * Register an application implemented encryption box.
     * @returns RegisteredEncryptionBox
     */
    register_encryption_box(obj: AppEncryptionBox): Promise<RegisteredEncryptionBox> {
        return this.client.request('crypto.register_encryption_box', undefined, (params: any, responseType: number) => {
            if (responseType === 3) {
                dispatchAppEncryptionBox(obj, params.request_data, params.app_request_id, this.client);
            } else if (responseType === 4) {
                dispatchAppEncryptionBox(obj, params, null, this.client);
            }
        });
    }

    /**
     * Removes encryption box from SDK
     * 
     * @param {RegisteredEncryptionBox} params
     * @returns 
     */
    remove_encryption_box(params: RegisteredEncryptionBox): Promise<void> {
        return this.client.request('crypto.remove_encryption_box', params);
    }

    /**
     * Queries info from the given encryption box
     * 
     * @param {ParamsOfEncryptionBoxGetInfo} params
     * @returns ResultOfEncryptionBoxGetInfo
     */
    encryption_box_get_info(params: ParamsOfEncryptionBoxGetInfo): Promise<ResultOfEncryptionBoxGetInfo> {
        return this.client.request('crypto.encryption_box_get_info', params);
    }

    /**
     * Encrypts data using given encryption box Note.
     * 
     * @remarks
     * Block cipher algorithms pad data to cipher block size so encrypted data can be longer then original data. Client should store the original data size after encryption and use it after
     * decryption to retrieve the original data from decrypted data.
     * 
     * @param {ParamsOfEncryptionBoxEncrypt} params
     * @returns ResultOfEncryptionBoxEncrypt
     */
    encryption_box_encrypt(params: ParamsOfEncryptionBoxEncrypt): Promise<ResultOfEncryptionBoxEncrypt> {
        return this.client.request('crypto.encryption_box_encrypt', params);
    }

    /**
     * Decrypts data using given encryption box Note.
     * 
     * @remarks
     * Block cipher algorithms pad data to cipher block size so encrypted data can be longer then original data. Client should store the original data size after encryption and use it after
     * decryption to retrieve the original data from decrypted data.
     * 
     * @param {ParamsOfEncryptionBoxDecrypt} params
     * @returns ResultOfEncryptionBoxDecrypt
     */
    encryption_box_decrypt(params: ParamsOfEncryptionBoxDecrypt): Promise<ResultOfEncryptionBoxDecrypt> {
        return this.client.request('crypto.encryption_box_decrypt', params);
    }

    /**
     * Creates encryption box with specified algorithm
     * 
     * @param {ParamsOfCreateEncryptionBox} params
     * @returns RegisteredEncryptionBox
     */
    create_encryption_box(params: ParamsOfCreateEncryptionBox): Promise<RegisteredEncryptionBox> {
        return this.client.request('crypto.create_encryption_box', params);
    }
}

// abi module


export enum AbiErrorCode {
    RequiredAddressMissingForEncodeMessage = 301,
    RequiredCallSetMissingForEncodeMessage = 302,
    InvalidJson = 303,
    InvalidMessage = 304,
    EncodeDeployMessageFailed = 305,
    EncodeRunMessageFailed = 306,
    AttachSignatureFailed = 307,
    InvalidTvcImage = 308,
    RequiredPublicKeyMissingForFunctionHeader = 309,
    InvalidSigner = 310,
    InvalidAbi = 311,
    InvalidFunctionId = 312,
    InvalidData = 313,
    EncodeInitialDataFailed = 314,
    InvalidFunctionName = 315
}

export type AbiContractVariant = {

    value: AbiContract
}

export type AbiJsonVariant = {

    value: string
}

export type AbiHandleVariant = {

    value: AbiHandle
}

export type AbiSerializedVariant = {

    value: AbiContract
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Contract`
 * 
 * 
 * ### `Json`
 * 
 * 
 * ### `Handle`
 * 
 * 
 * ### `Serialized`
 * 
 */
export type Abi = ({
    type: 'Contract'
} & AbiContractVariant) | ({
    type: 'Json'
} & AbiJsonVariant) | ({
    type: 'Handle'
} & AbiHandleVariant) | ({
    type: 'Serialized'
} & AbiSerializedVariant)

export function abiContract(value: AbiContract): Abi {
    return {
        type: 'Contract',
        value,
    };
}

export function abiJson(value: string): Abi {
    return {
        type: 'Json',
        value,
    };
}

export function abiHandle(value: AbiHandle): Abi {
    return {
        type: 'Handle',
        value,
    };
}

export function abiSerialized(value: AbiContract): Abi {
    return {
        type: 'Serialized',
        value,
    };
}

export type AbiHandle = number

/**
 * The ABI function header.
 * 
 * @remarks
 * Includes several hidden function parameters that contract
 * uses for security, message delivery monitoring and replay protection reasons.
 * 
 * The actual set of header fields depends on the contract's ABI.
 * If a contract's ABI does not include some headers, then they are not filled.
 */
export type FunctionHeader = {

    /**
     * Message expiration timestamp (UNIX time) in seconds.
     * 
     * @remarks
     * If not specified - calculated automatically from message_expiration_timeout(),
     * try_index and message_expiration_timeout_grow_factor() (if ABI includes `expire` header).
     */
    expire?: number,

    /**
     * Message creation time in milliseconds.
     * 
     * @remarks
     * If not specified, `now` is used (if ABI includes `time` header).
     */
    time?: bigint,

    /**
     * Public key is used by the contract to check the signature.
     * 
     * @remarks
     * Encoded in `hex`. If not specified, method fails with exception (if ABI includes `pubkey` header)..
     */
    pubkey?: string
}

export type CallSet = {

    /**
     * Function name that is being called. Or function id encoded as string in hex (starting with 0x).
     */
    function_name: string,

    /**
     * Function header.
     * 
     * @remarks
     * If an application omits some header parameters required by the
     * contract's ABI, the library will set the default values for
     * them.
     */
    header?: FunctionHeader,

    /**
     * Function input parameters according to ABI.
     */
    input?: any
}

export type DeploySet = {

    /**
     * Content of TVC file encoded in `base64`. For compatibility reason this field can contain an encoded  `StateInit`.
     */
    tvc?: string,

    /**
     * Contract code BOC encoded with base64.
     */
    code?: string,

    /**
     * State init BOC encoded with base64.
     */
    state_init?: string,

    /**
     * Target workchain for destination address.
     * 
     * @remarks
     * Default is `0`.
     */
    workchain_id?: number,

    /**
     * List of initial values for contract's public variables.
     */
    initial_data?: any,

    /**
     * Optional public key that can be provided in deploy set in order to substitute one in TVM file or provided by Signer.
     * 
     * @remarks
     * Public key resolving priority:
     * 1. Public key from deploy set.
     * 2. Public key, specified in TVM file.
     * 3. Public key, provided by Signer.
     */
    initial_pubkey?: string
}

/**
 * No keys are provided.
 * 
 * @remarks
 * Creates an unsigned message.
 */
export type SignerNoneVariant = {

}

/**
 * Only public key is provided in unprefixed hex string format to generate unsigned message and `data_to_sign` which can be signed later.
 */
export type SignerExternalVariant = {

    public_key: string
}

/**
 * Key pair is provided for signing
 */
export type SignerKeysVariant = {

    keys: KeyPair
}

/**
 * Signing Box interface is provided for signing, allows Dapps to sign messages using external APIs, such as HSM, cold wallet, etc.
 */
export type SignerSigningBoxVariant = {

    handle: SigningBoxHandle
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `None`
 * 
 * No keys are provided.
 * 
 * ### `External`
 * 
 * Only public key is provided in unprefixed hex string format to generate unsigned message and `data_to_sign` which can be signed later.
 * 
 * ### `Keys`
 * 
 * Key pair is provided for signing
 * 
 * ### `SigningBox`
 * 
 * Signing Box interface is provided for signing, allows Dapps to sign messages using external APIs, such as HSM, cold wallet, etc.
 */
export type Signer = ({
    type: 'None'
} & SignerNoneVariant) | ({
    type: 'External'
} & SignerExternalVariant) | ({
    type: 'Keys'
} & SignerKeysVariant) | ({
    type: 'SigningBox'
} & SignerSigningBoxVariant)

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

export enum MessageBodyType {
    Input = "Input",
    Output = "Output",
    InternalOutput = "InternalOutput",
    Event = "Event"
}

/**
 * Deploy message.
 */
export type StateInitSourceMessageVariant = {

    source: MessageSource
}

/**
 * State init data.
 */
export type StateInitSourceStateInitVariant = {

    /**
     * Code BOC.
     * 
     * @remarks
     * Encoded in `base64`.
     */
    code: string,

    /**
     * Data BOC.
     * 
     * @remarks
     * Encoded in `base64`.
     */
    data: string,

    /**
     * Library BOC.
     * 
     * @remarks
     * Encoded in `base64`.
     */
    library?: string
}

/**
 * Content of the TVC file.
 * 
 * @remarks
 * Encoded in `base64`.
 */
export type StateInitSourceTvcVariant = {

    tvc: string,

    public_key?: string,

    init_params?: StateInitParams
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Message`
 * 
 * Deploy message.
 * 
 * ### `StateInit`
 * 
 * State init data.
 * 
 * ### `Tvc`
 * 
 * Content of the TVC file.
 */
export type StateInitSource = ({
    type: 'Message'
} & StateInitSourceMessageVariant) | ({
    type: 'StateInit'
} & StateInitSourceStateInitVariant) | ({
    type: 'Tvc'
} & StateInitSourceTvcVariant)

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
}

export type MessageSourceEncodedVariant = {

    message: string,

    abi?: Abi
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Encoded`
 * 
 * 
 * ### `EncodingParams`
 * 
 */
export type MessageSource = ({
    type: 'Encoded'
} & MessageSourceEncodedVariant) | ({
    type: 'EncodingParams'
} & ParamsOfEncodeMessage)

export function messageSourceEncoded(message: string, abi?: Abi): MessageSource {
    return {
        type: 'Encoded',
        message,
        abi,
    };
}

export function messageSourceEncodingParams(params: ParamsOfEncodeMessage): MessageSource {
    return {
        type: 'EncodingParams',
        ...params,
    };
}

export type AbiParam = {

    name: string,

    type: string,

    components?: AbiParam[]
}

export type AbiEvent = {

    name: string,

    inputs: AbiParam[],

    id?: string | null
}

export type AbiData = {

    key: number,

    name: string,

    type: string,

    components?: AbiParam[]
}

export type AbiFunction = {

    name: string,

    inputs: AbiParam[],

    outputs: AbiParam[],

    id?: string | null
}

export type AbiContract = {

    'ABI version'?: number,

    abi_version?: number,

    version?: string | null,

    header?: string[],

    functions?: AbiFunction[],

    events?: AbiEvent[],

    data?: AbiData[],

    fields?: AbiParam[]
}

export enum DataLayout {
    Input = "Input",
    Output = "Output"
}

export type ParamsOfEncodeMessageBody = {

    /**
     * Contract ABI.
     */
    abi: Abi,

    /**
     * Function call parameters.
     * 
     * @remarks
     * Must be specified in non deploy message.
     * 
     * In case of deploy message contains parameters of constructor.
     */
    call_set: CallSet,

    /**
     * True if internal message body must be encoded.
     */
    is_internal: boolean,

    /**
     * Signing parameters.
     */
    signer: Signer,

    /**
     * Processing try index.
     * 
     * @remarks
     * Used in message processing with retries.
     * 
     * Encoder uses the provided try index to calculate message
     * expiration time.
     * 
     * Expiration timeouts will grow with every retry.
     * 
     * Default value is 0.
     */
    processing_try_index?: number,

    /**
     * Destination address of the message
     * 
     * @remarks
     * Since ABI version 2.3 destination address of external inbound message is used in message
     * body signature calculation. Should be provided when signed external inbound message body is
     * created. Otherwise can be omitted.
     */
    address?: string,

    /**
     * Signature ID to be used in data to sign preparing when CapSignatureWithId capability is enabled
     */
    signature_id?: number
}

export type ResultOfEncodeMessageBody = {

    /**
     * Message body BOC encoded with `base64`.
     */
    body: string,

    /**
     * Optional data to sign.
     * 
     * @remarks
     * Encoded with `base64`. 
     * Presents when `message` is unsigned. Can be used for external
     * message signing. Is this case you need to sing this data and
     * produce signed message using `abi.attach_signature`.
     */
    data_to_sign?: string
}

export type ParamsOfAttachSignatureToMessageBody = {

    /**
     * Contract ABI
     */
    abi: Abi,

    /**
     * Public key.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    public_key: string,

    /**
     * Unsigned message body BOC.
     * 
     * @remarks
     * Must be encoded with `base64`.
     */
    message: string,

    /**
     * Signature.
     * 
     * @remarks
     * Must be encoded with `hex`.
     */
    signature: string
}

export type ResultOfAttachSignatureToMessageBody = {

    body: string
}

export type ParamsOfEncodeMessage = {

    /**
     * Contract ABI.
     */
    abi: Abi,

    /**
     * Target address the message will be sent to.
     * 
     * @remarks
     * Must be specified in case of non-deploy message.
     */
    address?: string,

    /**
     * Deploy parameters.
     * 
     * @remarks
     * Must be specified in case of deploy message.
     */
    deploy_set?: DeploySet,

    /**
     * Function call parameters.
     * 
     * @remarks
     * Must be specified in case of non-deploy message.
     * 
     * In case of deploy message it is optional and contains parameters
     * of the functions that will to be called upon deploy transaction.
     */
    call_set?: CallSet,

    /**
     * Signing parameters.
     */
    signer: Signer,

    /**
     * Processing try index.
     * 
     * @remarks
     * Used in message processing with retries (if contract's ABI includes "expire" header).
     * 
     * Encoder uses the provided try index to calculate message
     * expiration time. The 1st message expiration time is specified in
     * Client config.
     * 
     * Expiration timeouts will grow with every retry.
     * Retry grow factor is set in Client config:
     * <.....add config parameter with default value here>
     * 
     * Default value is 0.
     */
    processing_try_index?: number,

    /**
     * Signature ID to be used in data to sign preparing when CapSignatureWithId capability is enabled
     */
    signature_id?: number
}

export type ResultOfEncodeMessage = {

    /**
     * Message BOC encoded with `base64`.
     */
    message: string,

    /**
     * Optional data to be signed encoded in `base64`.
     * 
     * @remarks
     * Returned in case of `Signer::External`. Can be used for external
     * message signing. Is this case you need to use this data to create signature and
     * then produce signed message using `abi.attach_signature`.
     */
    data_to_sign?: string,

    /**
     * Destination address.
     */
    address: string,

    /**
     * Message id.
     */
    message_id: string
}

export type ParamsOfEncodeInternalMessage = {

    /**
     * Contract ABI.
     * 
     * @remarks
     * Can be None if both deploy_set and call_set are None.
     */
    abi?: Abi,

    /**
     * Target address the message will be sent to.
     * 
     * @remarks
     * Must be specified in case of non-deploy message.
     */
    address?: string,

    /**
     * Source address of the message.
     */
    src_address?: string,

    /**
     * Deploy parameters.
     * 
     * @remarks
     * Must be specified in case of deploy message.
     */
    deploy_set?: DeploySet,

    /**
     * Function call parameters.
     * 
     * @remarks
     * Must be specified in case of non-deploy message.
     * 
     * In case of deploy message it is optional and contains parameters
     * of the functions that will to be called upon deploy transaction.
     */
    call_set?: CallSet,

    /**
     * Value in nanotokens to be sent with message.
     */
    value: string,

    /**
     * Flag of bounceable message.
     * 
     * @remarks
     * Default is true.
     */
    bounce?: boolean,

    /**
     * Enable Instant Hypercube Routing for the message.
     * 
     * @remarks
     * Default is false.
     */
    enable_ihr?: boolean
}

export type ResultOfEncodeInternalMessage = {

    /**
     * Message BOC encoded with `base64`.
     */
    message: string,

    /**
     * Destination address.
     */
    address: string,

    /**
     * Message id.
     */
    message_id: string
}

export type ParamsOfAttachSignature = {

    /**
     * Contract ABI
     */
    abi: Abi,

    /**
     * Public key encoded in `hex`.
     */
    public_key: string,

    /**
     * Unsigned message BOC encoded in `base64`.
     */
    message: string,

    /**
     * Signature encoded in `hex`.
     */
    signature: string
}

export type ResultOfAttachSignature = {

    /**
     * Signed message BOC
     */
    message: string,

    /**
     * Message ID
     */
    message_id: string
}

export type ParamsOfDecodeMessage = {

    /**
     * contract ABI
     */
    abi: Abi,

    /**
     * Message BOC
     */
    message: string,

    /**
     * Flag allowing partial BOC decoding when ABI doesn't describe the full body BOC. Controls decoder behaviour when after decoding all described in ABI params there are some data left in BOC: `true` - return decoded values `false` - return error of incomplete BOC deserialization (default)
     */
    allow_partial?: boolean,

    /**
     * Function name or function id if is known in advance
     */
    function_name?: string,

    data_layout?: DataLayout
}

export type DecodedMessageBody = {

    /**
     * Type of the message body content.
     */
    body_type: MessageBodyType,

    /**
     * Function or event name.
     */
    name: string,

    /**
     * Parameters or result value.
     */
    value?: any,

    /**
     * Function header.
     */
    header?: FunctionHeader
}

export type ParamsOfDecodeMessageBody = {

    /**
     * Contract ABI used to decode.
     */
    abi: Abi,

    /**
     * Message body BOC encoded in `base64`.
     */
    body: string,

    /**
     * True if the body belongs to the internal message.
     */
    is_internal: boolean,

    /**
     * Flag allowing partial BOC decoding when ABI doesn't describe the full body BOC. Controls decoder behaviour when after decoding all described in ABI params there are some data left in BOC: `true` - return decoded values `false` - return error of incomplete BOC deserialization (default)
     */
    allow_partial?: boolean,

    /**
     * Function name or function id if is known in advance
     */
    function_name?: string,

    data_layout?: DataLayout
}

export type ParamsOfEncodeAccount = {

    /**
     * Source of the account state init.
     */
    state_init: StateInitSource,

    /**
     * Initial balance.
     */
    balance?: bigint,

    /**
     * Initial value for the `last_trans_lt`.
     */
    last_trans_lt?: bigint,

    /**
     * Initial value for the `last_paid`.
     */
    last_paid?: number,

    /**
     * Cache type to put the result.
     * 
     * @remarks
     * The BOC itself returned if no cache type provided
     */
    boc_cache?: BocCacheType
}

export type ResultOfEncodeAccount = {

    /**
     * Account BOC encoded in `base64`.
     */
    account: string,

    /**
     * Account ID  encoded in `hex`.
     */
    id: string
}

export type ParamsOfDecodeAccountData = {

    /**
     * Contract ABI
     */
    abi: Abi,

    /**
     * Data BOC or BOC handle
     */
    data: string,

    /**
     * Flag allowing partial BOC decoding when ABI doesn't describe the full body BOC. Controls decoder behaviour when after decoding all described in ABI params there are some data left in BOC: `true` - return decoded values `false` - return error of incomplete BOC deserialization (default)
     */
    allow_partial?: boolean
}

export type ResultOfDecodeAccountData = {

    /**
     * Decoded data as a JSON structure.
     */
    data: any
}

export type ParamsOfUpdateInitialData = {

    /**
     * Contract ABI
     */
    abi?: Abi,

    /**
     * Data BOC or BOC handle
     */
    data: string,

    /**
     * List of initial values for contract's static variables.
     * 
     * @remarks
     * `abi` parameter should be provided to set initial data
     */
    initial_data?: any,

    /**
     * Initial account owner's public key to set into account data
     */
    initial_pubkey?: string,

    /**
     * Cache type to put the result. The BOC itself returned if no cache type provided.
     */
    boc_cache?: BocCacheType
}

export type ResultOfUpdateInitialData = {

    /**
     * Updated data BOC or BOC handle
     */
    data: string
}

export type ParamsOfEncodeInitialData = {

    /**
     * Contract ABI
     */
    abi?: Abi,

    /**
     * List of initial values for contract's static variables.
     * 
     * @remarks
     * `abi` parameter should be provided to set initial data
     */
    initial_data?: any,

    /**
     * Initial account owner's public key to set into account data
     */
    initial_pubkey?: string,

    /**
     * Cache type to put the result. The BOC itself returned if no cache type provided.
     */
    boc_cache?: BocCacheType
}

export type ResultOfEncodeInitialData = {

    /**
     * Updated data BOC or BOC handle
     */
    data: string
}

export type ParamsOfDecodeInitialData = {

    /**
     * Contract ABI.
     * 
     * @remarks
     * Initial data is decoded if this parameter is provided
     */
    abi?: Abi,

    /**
     * Data BOC or BOC handle
     */
    data: string,

    /**
     * Flag allowing partial BOC decoding when ABI doesn't describe the full body BOC. Controls decoder behaviour when after decoding all described in ABI params there are some data left in BOC: `true` - return decoded values `false` - return error of incomplete BOC deserialization (default)
     */
    allow_partial?: boolean
}

export type ResultOfDecodeInitialData = {

    /**
     * List of initial values of contract's public variables.
     * 
     * @remarks
     * Initial data is decoded if `abi` input parameter is provided
     */
    initial_data?: any,

    /**
     * Initial account owner's public key
     */
    initial_pubkey: string
}

export type ParamsOfDecodeBoc = {

    /**
     * Parameters to decode from BOC
     */
    params: AbiParam[],

    /**
     * Data BOC or BOC handle
     */
    boc: string,

    allow_partial: boolean
}

export type ResultOfDecodeBoc = {

    /**
     * Decoded data as a JSON structure.
     */
    data: any
}

export type ParamsOfAbiEncodeBoc = {

    /**
     * Parameters to encode into BOC
     */
    params: AbiParam[],

    /**
     * Parameters and values as a JSON structure
     */
    data: any,

    /**
     * Cache type to put the result.
     * 
     * @remarks
     * The BOC itself returned if no cache type provided
     */
    boc_cache?: BocCacheType
}

export type ResultOfAbiEncodeBoc = {

    /**
     * BOC encoded as base64
     */
    boc: string
}

export type ParamsOfCalcFunctionId = {

    /**
     * Contract ABI.
     */
    abi: Abi,

    /**
     * Contract function name
     */
    function_name: string,

    /**
     * If set to `true` output function ID will be returned which is used in contract response. Default is `false`
     */
    output?: boolean
}

export type ResultOfCalcFunctionId = {

    /**
     * Contract function ID
     */
    function_id: number
}

export type ParamsOfGetSignatureData = {

    /**
     * Contract ABI used to decode.
     */
    abi: Abi,

    /**
     * Message BOC encoded in `base64`.
     */
    message: string,

    /**
     * Signature ID to be used in unsigned data preparing when CapSignatureWithId capability is enabled
     */
    signature_id?: number
}

export type ResultOfGetSignatureData = {

    /**
     * Signature from the message in `hex`.
     */
    signature: string,

    /**
     * Data to verify the signature in `base64`.
     */
    unsigned: string
}

/**
 * Provides message encoding and decoding according to the ABI specification.
 */
export class AbiModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Encodes message body according to ABI function call.
     * 
     * @param {ParamsOfEncodeMessageBody} params
     * @returns ResultOfEncodeMessageBody
     */
    encode_message_body(params: ParamsOfEncodeMessageBody): Promise<ResultOfEncodeMessageBody> {
        return this.client.request('abi.encode_message_body', params);
    }

    /**
     * 
     * @param {ParamsOfAttachSignatureToMessageBody} params
     * @returns ResultOfAttachSignatureToMessageBody
     */
    attach_signature_to_message_body(params: ParamsOfAttachSignatureToMessageBody): Promise<ResultOfAttachSignatureToMessageBody> {
        return this.client.request('abi.attach_signature_to_message_body', params);
    }

    /**
     * Encodes an ABI-compatible message
     * 
     * @remarks
     * Allows to encode deploy and function call messages,
     * both signed and unsigned.
     * 
     * Use cases include messages of any possible type:
     * - deploy with initial function call (i.e. `constructor` or any other function that is used for some kind
     * of initialization);
     * - deploy without initial function call;
     * - signed/unsigned + data for signing.
     * 
     * `Signer` defines how the message should or shouldn't be signed:
     * 
     * `Signer::None` creates an unsigned message. This may be needed in case of some public methods,
     * that do not require authorization by pubkey.
     * 
     * `Signer::External` takes public key and returns `data_to_sign` for later signing.
     * Use `attach_signature` method with the result signature to get the signed message.
     * 
     * `Signer::Keys` creates a signed message with provided key pair.
     * 
     * [SOON] `Signer::SigningBox` Allows using a special interface to implement signing
     * without private key disclosure to SDK. For instance, in case of using a cold wallet or HSM,
     * when application calls some API to sign data.
     * 
     * There is an optional public key can be provided in deploy set in order to substitute one
     * in TVM file.
     * 
     * Public key resolving priority:
     * 1. Public key from deploy set.
     * 2. Public key, specified in TVM file.
     * 3. Public key, provided by signer.
     * 
     * @param {ParamsOfEncodeMessage} params
     * @returns ResultOfEncodeMessage
     */
    encode_message(params: ParamsOfEncodeMessage): Promise<ResultOfEncodeMessage> {
        return this.client.request('abi.encode_message', params);
    }

    /**
     * Encodes an internal ABI-compatible message
     * 
     * @remarks
     * Allows to encode deploy and function call messages.
     * 
     * Use cases include messages of any possible type:
     * - deploy with initial function call (i.e. `constructor` or any other function that is used for some kind
     * of initialization);
     * - deploy without initial function call;
     * - simple function call
     * 
     * There is an optional public key can be provided in deploy set in order to substitute one
     * in TVM file.
     * 
     * Public key resolving priority:
     * 1. Public key from deploy set.
     * 2. Public key, specified in TVM file.
     * 
     * @param {ParamsOfEncodeInternalMessage} params
     * @returns ResultOfEncodeInternalMessage
     */
    encode_internal_message(params: ParamsOfEncodeInternalMessage): Promise<ResultOfEncodeInternalMessage> {
        return this.client.request('abi.encode_internal_message', params);
    }

    /**
     * Combines `hex`-encoded `signature` with `base64`-encoded `unsigned_message`. Returns signed message encoded in `base64`.
     * 
     * @param {ParamsOfAttachSignature} params
     * @returns ResultOfAttachSignature
     */
    attach_signature(params: ParamsOfAttachSignature): Promise<ResultOfAttachSignature> {
        return this.client.request('abi.attach_signature', params);
    }

    /**
     * Decodes message body using provided message BOC and ABI.
     * 
     * @param {ParamsOfDecodeMessage} params
     * @returns DecodedMessageBody
     */
    decode_message(params: ParamsOfDecodeMessage): Promise<DecodedMessageBody> {
        return this.client.request('abi.decode_message', params);
    }

    /**
     * Decodes message body using provided body BOC and ABI.
     * 
     * @param {ParamsOfDecodeMessageBody} params
     * @returns DecodedMessageBody
     */
    decode_message_body(params: ParamsOfDecodeMessageBody): Promise<DecodedMessageBody> {
        return this.client.request('abi.decode_message_body', params);
    }

    /**
     * Creates account state BOC
     * 
     * @remarks
     * Creates account state provided with one of these sets of data :
     * 1. BOC of code, BOC of data, BOC of library
     * 2. TVC (string in `base64`), keys, init params
     * 
     * @param {ParamsOfEncodeAccount} params
     * @returns ResultOfEncodeAccount
     */
    encode_account(params: ParamsOfEncodeAccount): Promise<ResultOfEncodeAccount> {
        return this.client.request('abi.encode_account', params);
    }

    /**
     * Decodes account data using provided data BOC and ABI.
     * 
     * @remarks
     * Note: this feature requires ABI 2.1 or higher.
     * 
     * @param {ParamsOfDecodeAccountData} params
     * @returns ResultOfDecodeAccountData
     */
    decode_account_data(params: ParamsOfDecodeAccountData): Promise<ResultOfDecodeAccountData> {
        return this.client.request('abi.decode_account_data', params);
    }

    /**
     * Updates initial account data with initial values for the contract's static variables and owner's public key. This operation is applicable only for initial account data (before deploy). If the contract is already deployed, its data doesn't contain this data section any more.
     * 
     * @param {ParamsOfUpdateInitialData} params
     * @returns ResultOfUpdateInitialData
     */
    update_initial_data(params: ParamsOfUpdateInitialData): Promise<ResultOfUpdateInitialData> {
        return this.client.request('abi.update_initial_data', params);
    }

    /**
     * Encodes initial account data with initial values for the contract's static variables and owner's public key into a data BOC that can be passed to `encode_tvc` function afterwards.
     * 
     * @remarks
     * This function is analogue of `tvm.buildDataInit` function in Solidity.
     * 
     * @param {ParamsOfEncodeInitialData} params
     * @returns ResultOfEncodeInitialData
     */
    encode_initial_data(params: ParamsOfEncodeInitialData): Promise<ResultOfEncodeInitialData> {
        return this.client.request('abi.encode_initial_data', params);
    }

    /**
     * Decodes initial values of a contract's static variables and owner's public key from account initial data This operation is applicable only for initial account data (before deploy). If the contract is already deployed, its data doesn't contain this data section any more.
     * 
     * @param {ParamsOfDecodeInitialData} params
     * @returns ResultOfDecodeInitialData
     */
    decode_initial_data(params: ParamsOfDecodeInitialData): Promise<ResultOfDecodeInitialData> {
        return this.client.request('abi.decode_initial_data', params);
    }

    /**
     * Decodes BOC into JSON as a set of provided parameters.
     * 
     * @remarks
     * Solidity functions use ABI types for [builder encoding](https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#tvmbuilderstore).
     * The simplest way to decode such a BOC is to use ABI decoding.
     * ABI has it own rules for fields layout in cells so manually encoded
     * BOC can not be described in terms of ABI rules.
     * 
     * To solve this problem we introduce a new ABI type `Ref(<ParamType>)`
     * which allows to store `ParamType` ABI parameter in cell reference and, thus,
     * decode manually encoded BOCs. This type is available only in `decode_boc` function
     * and will not be available in ABI messages encoding until it is included into some ABI revision.
     * 
     * Such BOC descriptions covers most users needs. If someone wants to decode some BOC which
     * can not be described by these rules (i.e. BOC with TLB containing constructors of flags
     * defining some parsing conditions) then they can decode the fields up to fork condition,
     * check the parsed data manually, expand the parsing schema and then decode the whole BOC
     * with the full schema.
     * 
     * @param {ParamsOfDecodeBoc} params
     * @returns ResultOfDecodeBoc
     */
    decode_boc(params: ParamsOfDecodeBoc): Promise<ResultOfDecodeBoc> {
        return this.client.request('abi.decode_boc', params);
    }

    /**
     * Encodes given parameters in JSON into a BOC using param types from ABI.
     * 
     * @param {ParamsOfAbiEncodeBoc} params
     * @returns ResultOfAbiEncodeBoc
     */
    encode_boc(params: ParamsOfAbiEncodeBoc): Promise<ResultOfAbiEncodeBoc> {
        return this.client.request('abi.encode_boc', params);
    }

    /**
     * Calculates contract function ID by contract ABI
     * 
     * @param {ParamsOfCalcFunctionId} params
     * @returns ResultOfCalcFunctionId
     */
    calc_function_id(params: ParamsOfCalcFunctionId): Promise<ResultOfCalcFunctionId> {
        return this.client.request('abi.calc_function_id', params);
    }

    /**
     * Extracts signature from message body and calculates hash to verify the signature
     * 
     * @param {ParamsOfGetSignatureData} params
     * @returns ResultOfGetSignatureData
     */
    get_signature_data(params: ParamsOfGetSignatureData): Promise<ResultOfGetSignatureData> {
        return this.client.request('abi.get_signature_data', params);
    }
}

// boc module


/**
 * Pin the BOC with `pin` name.
 * 
 * @remarks
 * Such BOC will not be removed from cache until it is unpinned BOCs can have several pins and each of the pins has reference counter indicating how many
 * times the BOC was pinned with the pin. BOC is removed from cache after all references for all
 * pins are unpinned with `cache_unpin` function calls.
 */
export type BocCacheTypePinnedVariant = {

    pin: string
}

/**
 * BOC is placed into a common BOC pool with limited size regulated by LRU (least recently used) cache lifecycle.
 * 
 * @remarks
 * BOC resides there until it is replaced with other BOCs if it is not used
 */
export type BocCacheTypeUnpinnedVariant = {

}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Pinned`
 * 
 * Pin the BOC with `pin` name.
 * 
 * ### `Unpinned`
 * 
 * BOC is placed into a common BOC pool with limited size regulated by LRU (least recently used) cache lifecycle.
 */
export type BocCacheType = ({
    type: 'Pinned'
} & BocCacheTypePinnedVariant) | ({
    type: 'Unpinned'
} & BocCacheTypeUnpinnedVariant)

export function bocCacheTypePinned(pin: string): BocCacheType {
    return {
        type: 'Pinned',
        pin,
    };
}

export function bocCacheTypeUnpinned(): BocCacheType {
    return {
        type: 'Unpinned',
    };
}

/**
 * Append integer to cell data.
 */
export type BuilderOpIntegerVariant = {

    /**
     * Bit size of the value.
     */
    size: number,

    /**
     * Value: - `Number` containing integer number.
     * 
     * @remarks
     * e.g. `123`, `-123`. - Decimal string. e.g. `"123"`, `"-123"`.
     * - `0x` prefixed hexadecimal string.
     *   e.g `0x123`, `0X123`, `-0x123`.
     */
    value: any
}

/**
 * Append bit string to cell data.
 */
export type BuilderOpBitStringVariant = {

    /**
     * Bit string content using bitstring notation. See `TON VM specification` 1.0.
     * 
     * @remarks
     * Contains hexadecimal string representation:
     * - Can end with `_` tag.
     * - Can be prefixed with `x` or `X`.
     * - Can be prefixed with `x{` or `X{` and ended with `}`.
     * 
     * Contains binary string represented as a sequence
     * of `0` and `1` prefixed with `n` or `N`.
     * 
     * Examples:
     * `1AB`, `x1ab`, `X1AB`, `x{1abc}`, `X{1ABC}`
     * `2D9_`, `x2D9_`, `X2D9_`, `x{2D9_}`, `X{2D9_}`
     * `n00101101100`, `N00101101100`
     */
    value: string
}

/**
 * Append ref to nested cells.
 */
export type BuilderOpCellVariant = {

    /**
     * Nested cell builder.
     */
    builder: BuilderOp[]
}

/**
 * Append ref to nested cell.
 */
export type BuilderOpCellBocVariant = {

    /**
     * Nested cell BOC encoded with `base64` or BOC cache key.
     */
    boc: string
}

/**
 * Address.
 */
export type BuilderOpAddressVariant = {

    /**
     * Address in a common `workchain:account` or base64 format.
     */
    address: string
}

/**
 * Cell builder operation.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Integer`
 * 
 * Append integer to cell data.
 * 
 * ### `BitString`
 * 
 * Append bit string to cell data.
 * 
 * ### `Cell`
 * 
 * Append ref to nested cells.
 * 
 * ### `CellBoc`
 * 
 * Append ref to nested cell.
 * 
 * ### `Address`
 * 
 * Address.
 */
export type BuilderOp = ({
    type: 'Integer'
} & BuilderOpIntegerVariant) | ({
    type: 'BitString'
} & BuilderOpBitStringVariant) | ({
    type: 'Cell'
} & BuilderOpCellVariant) | ({
    type: 'CellBoc'
} & BuilderOpCellBocVariant) | ({
    type: 'Address'
} & BuilderOpAddressVariant)

export function builderOpInteger(size: number, value: any): BuilderOp {
    return {
        type: 'Integer',
        size,
        value,
    };
}

export function builderOpBitString(value: string): BuilderOp {
    return {
        type: 'BitString',
        value,
    };
}

export function builderOpCell(builder: BuilderOp[]): BuilderOp {
    return {
        type: 'Cell',
        builder,
    };
}

export function builderOpCellBoc(boc: string): BuilderOp {
    return {
        type: 'CellBoc',
        boc,
    };
}

export function builderOpAddress(address: string): BuilderOp {
    return {
        type: 'Address',
        address,
    };
}

export type TvcV1Variant = {

    value: TvcV1
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `V1`
 * 
 */
export type Tvc = ({
    type: 'V1'
} & TvcV1Variant)

export function tvcV1(value: TvcV1): Tvc {
    return {
        type: 'V1',
        value,
    };
}

export type TvcV1 = {

    code?: string,

    description?: string
}

export enum BocErrorCode {
    InvalidBoc = 201,
    SerializationError = 202,
    InappropriateBlock = 203,
    MissingSourceBoc = 204,
    InsufficientCacheSize = 205,
    BocRefNotFound = 206,
    InvalidBocRef = 207
}

export type ParamsOfDecodeTvc = {

    /**
     * Contract TVC BOC encoded as base64 or BOC handle
     */
    tvc: string
}

export type ResultOfDecodeTvc = {

    /**
     * Decoded TVC
     */
    tvc: Tvc
}

export type ParamsOfParse = {

    /**
     * BOC encoded as base64
     */
    boc: string
}

export type ResultOfParse = {

    /**
     * JSON containing parsed BOC
     */
    parsed: any
}

export type ParamsOfParseShardstate = {

    /**
     * BOC encoded as base64
     */
    boc: string,

    /**
     * Shardstate identifier
     */
    id: string,

    /**
     * Workchain shardstate belongs to
     */
    workchain_id: number
}

export type ParamsOfGetBlockchainConfig = {

    /**
     * Key block BOC or zerostate BOC encoded as base64
     */
    block_boc: string
}

export type ResultOfGetBlockchainConfig = {

    /**
     * Blockchain config BOC encoded as base64
     */
    config_boc: string
}

export type ParamsOfGetBocHash = {

    /**
     * BOC encoded as base64 or BOC handle
     */
    boc: string
}

export type ResultOfGetBocHash = {

    /**
     * BOC root hash encoded with hex
     */
    hash: string
}

export type ParamsOfGetBocDepth = {

    /**
     * BOC encoded as base64 or BOC handle
     */
    boc: string
}

export type ResultOfGetBocDepth = {

    /**
     * BOC root cell depth
     */
    depth: number
}

export type ParamsOfGetCodeFromTvc = {

    /**
     * Contract TVC image or image BOC handle
     */
    tvc: string
}

export type ResultOfGetCodeFromTvc = {

    /**
     * Contract code encoded as base64
     */
    code: string
}

export type ParamsOfBocCacheGet = {

    /**
     * Reference to the cached BOC
     */
    boc_ref: string
}

export type ResultOfBocCacheGet = {

    /**
     * BOC encoded as base64.
     */
    boc?: string
}

export type ParamsOfBocCacheSet = {

    /**
     * BOC encoded as base64 or BOC reference
     */
    boc: string,

    /**
     * Cache type
     */
    cache_type: BocCacheType
}

export type ResultOfBocCacheSet = {

    /**
     * Reference to the cached BOC
     */
    boc_ref: string
}

export type ParamsOfBocCacheUnpin = {

    /**
     * Pinned name
     */
    pin: string,

    /**
     * Reference to the cached BOC.
     * 
     * @remarks
     * If it is provided then only referenced BOC is unpinned
     */
    boc_ref?: string
}

export type ParamsOfEncodeBoc = {

    /**
     * Cell builder operations.
     */
    builder: BuilderOp[],

    /**
     * Cache type to put the result. The BOC itself returned if no cache type provided.
     */
    boc_cache?: BocCacheType
}

export type ResultOfEncodeBoc = {

    /**
     * Encoded cell BOC or BOC cache key.
     */
    boc: string
}

export type ParamsOfGetCodeSalt = {

    /**
     * Contract code BOC encoded as base64 or code BOC handle
     */
    code: string,

    /**
     * Cache type to put the result. The BOC itself returned if no cache type provided.
     */
    boc_cache?: BocCacheType
}

export type ResultOfGetCodeSalt = {

    /**
     * Contract code salt if present.
     * 
     * @remarks
     * BOC encoded as base64 or BOC handle
     */
    salt?: string
}

export type ParamsOfSetCodeSalt = {

    /**
     * Contract code BOC encoded as base64 or code BOC handle
     */
    code: string,

    /**
     * Code salt to set.
     * 
     * @remarks
     * BOC encoded as base64 or BOC handle
     */
    salt: string,

    /**
     * Cache type to put the result. The BOC itself returned if no cache type provided.
     */
    boc_cache?: BocCacheType
}

export type ResultOfSetCodeSalt = {

    /**
     * Contract code with salt set.
     * 
     * @remarks
     * BOC encoded as base64 or BOC handle
     */
    code: string
}

export type ParamsOfDecodeStateInit = {

    /**
     * Contract StateInit image BOC encoded as base64 or BOC handle
     */
    state_init: string,

    /**
     * Cache type to put the result. The BOC itself returned if no cache type provided.
     */
    boc_cache?: BocCacheType
}

export type ResultOfDecodeStateInit = {

    /**
     * Contract code BOC encoded as base64 or BOC handle
     */
    code?: string,

    /**
     * Contract code hash
     */
    code_hash?: string,

    /**
     * Contract code depth
     */
    code_depth?: number,

    /**
     * Contract data BOC encoded as base64 or BOC handle
     */
    data?: string,

    /**
     * Contract data hash
     */
    data_hash?: string,

    /**
     * Contract data depth
     */
    data_depth?: number,

    /**
     * Contract library BOC encoded as base64 or BOC handle
     */
    library?: string,

    /**
     * `special.tick` field.
     * 
     * @remarks
     * Specifies the contract ability to handle tick transactions
     */
    tick?: boolean,

    /**
     * `special.tock` field.
     * 
     * @remarks
     * Specifies the contract ability to handle tock transactions
     */
    tock?: boolean,

    /**
     * Is present and non-zero only in instances of large smart contracts
     */
    split_depth?: number,

    /**
     * Compiler version, for example 'sol 0.49.0'
     */
    compiler_version?: string
}

export type ParamsOfEncodeStateInit = {

    /**
     * Contract code BOC encoded as base64 or BOC handle
     */
    code?: string,

    /**
     * Contract data BOC encoded as base64 or BOC handle
     */
    data?: string,

    /**
     * Contract library BOC encoded as base64 or BOC handle
     */
    library?: string,

    /**
     * `special.tick` field.
     * 
     * @remarks
     * Specifies the contract ability to handle tick transactions
     */
    tick?: boolean,

    /**
     * `special.tock` field.
     * 
     * @remarks
     * Specifies the contract ability to handle tock transactions
     */
    tock?: boolean,

    /**
     * Is present and non-zero only in instances of large smart contracts
     */
    split_depth?: number,

    /**
     * Cache type to put the result. The BOC itself returned if no cache type provided.
     */
    boc_cache?: BocCacheType
}

export type ResultOfEncodeStateInit = {

    /**
     * Contract StateInit image BOC encoded as base64 or BOC handle of boc_cache parameter was specified
     */
    state_init: string
}

export type ParamsOfEncodeExternalInMessage = {

    /**
     * Source address.
     */
    src?: string,

    /**
     * Destination address.
     */
    dst: string,

    /**
     * Bag of cells with state init (used in deploy messages).
     */
    init?: string,

    /**
     * Bag of cells with the message body encoded as base64.
     */
    body?: string,

    /**
     * Cache type to put the result.
     * 
     * @remarks
     * The BOC itself returned if no cache type provided
     */
    boc_cache?: BocCacheType
}

export type ResultOfEncodeExternalInMessage = {

    /**
     * Message BOC encoded with `base64`.
     */
    message: string,

    /**
     * Message id.
     */
    message_id: string
}

export type ParamsOfGetCompilerVersion = {

    /**
     * Contract code BOC encoded as base64 or code BOC handle
     */
    code: string
}

export type ResultOfGetCompilerVersion = {

    /**
     * Compiler version, for example 'sol 0.49.0'
     */
    version?: string
}

/**
 * BOC manipulation module.
 */
export class BocModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Decodes tvc according to the tvc spec. Read more about tvc structure here https://github.com/tonlabs/ever-struct/blob/main/src/scheme/mod.rs#L30
     * 
     * @param {ParamsOfDecodeTvc} params
     * @returns ResultOfDecodeTvc
     */
    decode_tvc(params: ParamsOfDecodeTvc): Promise<ResultOfDecodeTvc> {
        return this.client.request('boc.decode_tvc', params);
    }

    /**
     * Parses message boc into a JSON
     * 
     * @remarks
     * JSON structure is compatible with GraphQL API message object
     * 
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */
    parse_message(params: ParamsOfParse): Promise<ResultOfParse> {
        return this.client.request('boc.parse_message', params);
    }

    /**
     * Parses transaction boc into a JSON
     * 
     * @remarks
     * JSON structure is compatible with GraphQL API transaction object
     * 
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */
    parse_transaction(params: ParamsOfParse): Promise<ResultOfParse> {
        return this.client.request('boc.parse_transaction', params);
    }

    /**
     * Parses account boc into a JSON
     * 
     * @remarks
     * JSON structure is compatible with GraphQL API account object
     * 
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */
    parse_account(params: ParamsOfParse): Promise<ResultOfParse> {
        return this.client.request('boc.parse_account', params);
    }

    /**
     * Parses block boc into a JSON
     * 
     * @remarks
     * JSON structure is compatible with GraphQL API block object
     * 
     * @param {ParamsOfParse} params
     * @returns ResultOfParse
     */
    parse_block(params: ParamsOfParse): Promise<ResultOfParse> {
        return this.client.request('boc.parse_block', params);
    }

    /**
     * Parses shardstate boc into a JSON
     * 
     * @remarks
     * JSON structure is compatible with GraphQL API shardstate object
     * 
     * @param {ParamsOfParseShardstate} params
     * @returns ResultOfParse
     */
    parse_shardstate(params: ParamsOfParseShardstate): Promise<ResultOfParse> {
        return this.client.request('boc.parse_shardstate', params);
    }

    /**
     * Extract blockchain configuration from key block and also from zerostate.
     * 
     * @param {ParamsOfGetBlockchainConfig} params
     * @returns ResultOfGetBlockchainConfig
     */
    get_blockchain_config(params: ParamsOfGetBlockchainConfig): Promise<ResultOfGetBlockchainConfig> {
        return this.client.request('boc.get_blockchain_config', params);
    }

    /**
     * Calculates BOC root hash
     * 
     * @param {ParamsOfGetBocHash} params
     * @returns ResultOfGetBocHash
     */
    get_boc_hash(params: ParamsOfGetBocHash): Promise<ResultOfGetBocHash> {
        return this.client.request('boc.get_boc_hash', params);
    }

    /**
     * Calculates BOC depth
     * 
     * @param {ParamsOfGetBocDepth} params
     * @returns ResultOfGetBocDepth
     */
    get_boc_depth(params: ParamsOfGetBocDepth): Promise<ResultOfGetBocDepth> {
        return this.client.request('boc.get_boc_depth', params);
    }

    /**
     * Extracts code from TVC contract image
     * 
     * @param {ParamsOfGetCodeFromTvc} params
     * @returns ResultOfGetCodeFromTvc
     */
    get_code_from_tvc(params: ParamsOfGetCodeFromTvc): Promise<ResultOfGetCodeFromTvc> {
        return this.client.request('boc.get_code_from_tvc', params);
    }

    /**
     * Get BOC from cache
     * 
     * @param {ParamsOfBocCacheGet} params
     * @returns ResultOfBocCacheGet
     */
    cache_get(params: ParamsOfBocCacheGet): Promise<ResultOfBocCacheGet> {
        return this.client.request('boc.cache_get', params);
    }

    /**
     * Save BOC into cache or increase pin counter for existing pinned BOC
     * 
     * @param {ParamsOfBocCacheSet} params
     * @returns ResultOfBocCacheSet
     */
    cache_set(params: ParamsOfBocCacheSet): Promise<ResultOfBocCacheSet> {
        return this.client.request('boc.cache_set', params);
    }

    /**
     * Unpin BOCs with specified pin defined in the `cache_set`. Decrease pin reference counter for BOCs with specified pin defined in the `cache_set`. BOCs which have only 1 pin and its reference counter become 0 will be removed from cache
     * 
     * @param {ParamsOfBocCacheUnpin} params
     * @returns 
     */
    cache_unpin(params: ParamsOfBocCacheUnpin): Promise<void> {
        return this.client.request('boc.cache_unpin', params);
    }

    /**
     * Encodes bag of cells (BOC) with builder operations. This method provides the same functionality as Solidity TvmBuilder. Resulting BOC of this method can be passed into Solidity and C++ contracts as TvmCell type.
     * 
     * @param {ParamsOfEncodeBoc} params
     * @returns ResultOfEncodeBoc
     */
    encode_boc(params: ParamsOfEncodeBoc): Promise<ResultOfEncodeBoc> {
        return this.client.request('boc.encode_boc', params);
    }

    /**
     * Returns the contract code's salt if it is present.
     * 
     * @param {ParamsOfGetCodeSalt} params
     * @returns ResultOfGetCodeSalt
     */
    get_code_salt(params: ParamsOfGetCodeSalt): Promise<ResultOfGetCodeSalt> {
        return this.client.request('boc.get_code_salt', params);
    }

    /**
     * Sets new salt to contract code.
     * 
     * @remarks
     * Returns the new contract code with salt.
     * 
     * @param {ParamsOfSetCodeSalt} params
     * @returns ResultOfSetCodeSalt
     */
    set_code_salt(params: ParamsOfSetCodeSalt): Promise<ResultOfSetCodeSalt> {
        return this.client.request('boc.set_code_salt', params);
    }

    /**
     * Decodes contract's initial state into code, data, libraries and special options.
     * 
     * @param {ParamsOfDecodeStateInit} params
     * @returns ResultOfDecodeStateInit
     */
    decode_state_init(params: ParamsOfDecodeStateInit): Promise<ResultOfDecodeStateInit> {
        return this.client.request('boc.decode_state_init', params);
    }

    /**
     * Encodes initial contract state from code, data, libraries ans special options (see input params)
     * 
     * @param {ParamsOfEncodeStateInit} params
     * @returns ResultOfEncodeStateInit
     */
    encode_state_init(params: ParamsOfEncodeStateInit): Promise<ResultOfEncodeStateInit> {
        return this.client.request('boc.encode_state_init', params);
    }

    /**
     * Encodes a message
     * 
     * @remarks
     * Allows to encode any external inbound message.
     * 
     * @param {ParamsOfEncodeExternalInMessage} params
     * @returns ResultOfEncodeExternalInMessage
     */
    encode_external_in_message(params: ParamsOfEncodeExternalInMessage): Promise<ResultOfEncodeExternalInMessage> {
        return this.client.request('boc.encode_external_in_message', params);
    }

    /**
     * Returns the compiler version used to compile the code.
     * 
     * @param {ParamsOfGetCompilerVersion} params
     * @returns ResultOfGetCompilerVersion
     */
    get_compiler_version(params: ParamsOfGetCompilerVersion): Promise<ResultOfGetCompilerVersion> {
        return this.client.request('boc.get_compiler_version', params);
    }
}

// processing module


export enum ProcessingErrorCode {
    MessageAlreadyExpired = 501,
    MessageHasNotDestinationAddress = 502,
    CanNotBuildMessageCell = 503,
    FetchBlockFailed = 504,
    SendMessageFailed = 505,
    InvalidMessageBoc = 506,
    MessageExpired = 507,
    TransactionWaitTimeout = 508,
    InvalidBlockReceived = 509,
    CanNotCheckBlockShard = 510,
    BlockNotFound = 511,
    InvalidData = 512,
    ExternalSignerMustNotBeUsed = 513,
    MessageRejected = 514,
    InvalidRempStatus = 515,
    NextRempStatusTimeout = 516
}

/**
 * Notifies the application that the account's current shard block will be fetched from the network. This step is performed before the message sending so that sdk knows starting from which block it will search for the transaction.
 * 
 * @remarks
 * Fetched block will be used later in waiting phase.
 */
export type ProcessingEventWillFetchFirstBlockVariant = {

    message_id: string,

    message_dst: string
}

/**
 * Notifies the app that the client has failed to fetch the account's current shard block.
 * 
 * @remarks
 * This may happen due to the network issues. Receiving this event means that message processing will not proceed -
 * message was not sent, and Developer can try to run `process_message` again,
 * in the hope that the connection is restored.
 */
export type ProcessingEventFetchFirstBlockFailedVariant = {

    error: ClientError,

    message_id: string,

    message_dst: string
}

/**
 * Notifies the app that the message will be sent to the network. This event means that the account's current shard block was successfully fetched and the message was successfully created (`abi.encode_message` function was executed successfully).
 */
export type ProcessingEventWillSendVariant = {

    shard_block_id: string,

    message_id: string,

    message_dst: string,

    message: string
}

/**
 * Notifies the app that the message was sent to the network, i.e `processing.send_message` was successfully executed. Now, the message is in the blockchain. If Application exits at this phase, Developer needs to proceed with processing after the application is restored with `wait_for_transaction` function, passing shard_block_id and message from this event.
 * 
 * @remarks
 * Do not forget to specify abi of your contract as well, it is crucial for processing. See `processing.wait_for_transaction` documentation.
 */
export type ProcessingEventDidSendVariant = {

    shard_block_id: string,

    message_id: string,

    message_dst: string,

    message: string
}

/**
 * Notifies the app that the sending operation was failed with network error.
 * 
 * @remarks
 * Nevertheless the processing will be continued at the waiting
 * phase because the message possibly has been delivered to the
 * node.
 * If Application exits at this phase, Developer needs to proceed with processing
 * after the application is restored with `wait_for_transaction` function, passing
 * shard_block_id and message from this event. Do not forget to specify abi of your contract
 * as well, it is crucial for processing. See `processing.wait_for_transaction` documentation.
 */
export type ProcessingEventSendFailedVariant = {

    shard_block_id: string,

    message_id: string,

    message_dst: string,

    message: string,

    error: ClientError
}

/**
 * Notifies the app that the next shard block will be fetched from the network.
 * 
 * @remarks
 * Event can occurs more than one time due to block walking
 * procedure.
 * If Application exits at this phase, Developer needs to proceed with processing
 * after the application is restored with `wait_for_transaction` function, passing
 * shard_block_id and message from this event. Do not forget to specify abi of your contract
 * as well, it is crucial for processing. See `processing.wait_for_transaction` documentation.
 */
export type ProcessingEventWillFetchNextBlockVariant = {

    shard_block_id: string,

    message_id: string,

    message_dst: string,

    message: string
}

/**
 * Notifies the app that the next block can't be fetched.
 * 
 * @remarks
 * If no block was fetched within `NetworkConfig.wait_for_timeout` then processing stops.
 * This may happen when the shard stops, or there are other network issues.
 * In this case Developer should resume message processing with `wait_for_transaction`, passing shard_block_id,
 * message and contract abi to it. Note that passing ABI is crucial, because it will influence the processing strategy.
 * 
 * Another way to tune this is to specify long timeout in `NetworkConfig.wait_for_timeout`
 */
export type ProcessingEventFetchNextBlockFailedVariant = {

    shard_block_id: string,

    message_id: string,

    message_dst: string,

    message: string,

    error: ClientError
}

/**
 * Notifies the app that the message was not executed within expire timeout on-chain and will never be because it is already expired. The expiration timeout can be configured with `AbiConfig` parameters.
 * 
 * @remarks
 * This event occurs only for the contracts which ABI includes "expire" header.
 * 
 * If Application specifies `NetworkConfig.message_retries_count` > 0, then `process_message`
 * will perform retries: will create a new message and send it again and repeat it until it reaches
 * the maximum retries count or receives a successful result.  All the processing
 * events will be repeated.
 */
export type ProcessingEventMessageExpiredVariant = {

    message_id: string,

    message_dst: string,

    message: string,

    error: ClientError
}

/**
 * Notifies the app that the message has been delivered to the thread's validators
 */
export type ProcessingEventRempSentToValidatorsVariant = {

    message_id: string,

    message_dst: string,

    timestamp: bigint,

    json: any
}

/**
 * Notifies the app that the message has been successfully included into a block candidate by the thread's collator
 */
export type ProcessingEventRempIncludedIntoBlockVariant = {

    message_id: string,

    message_dst: string,

    timestamp: bigint,

    json: any
}

/**
 * Notifies the app that the block candidate with the message has been accepted by the thread's validators
 */
export type ProcessingEventRempIncludedIntoAcceptedBlockVariant = {

    message_id: string,

    message_dst: string,

    timestamp: bigint,

    json: any
}

/**
 * Notifies the app about some other minor REMP statuses occurring during message processing
 */
export type ProcessingEventRempOtherVariant = {

    message_id: string,

    message_dst: string,

    timestamp: bigint,

    json: any
}

/**
 * Notifies the app about any problem that has occurred in REMP processing - in this case library switches to the fallback transaction awaiting scenario (sequential block reading).
 */
export type ProcessingEventRempErrorVariant = {

    message_id: string,

    message_dst: string,

    error: ClientError
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `WillFetchFirstBlock`
 * 
 * Notifies the application that the account's current shard block will be fetched from the network. This step is performed before the message sending so that sdk knows starting from which block it will search for the transaction.
 * 
 * ### `FetchFirstBlockFailed`
 * 
 * Notifies the app that the client has failed to fetch the account's current shard block.
 * 
 * ### `WillSend`
 * 
 * Notifies the app that the message will be sent to the network. This event means that the account's current shard block was successfully fetched and the message was successfully created (`abi.encode_message` function was executed successfully).
 * 
 * ### `DidSend`
 * 
 * Notifies the app that the message was sent to the network, i.e `processing.send_message` was successfully executed. Now, the message is in the blockchain. If Application exits at this phase, Developer needs to proceed with processing after the application is restored with `wait_for_transaction` function, passing shard_block_id and message from this event.
 * 
 * ### `SendFailed`
 * 
 * Notifies the app that the sending operation was failed with network error.
 * 
 * ### `WillFetchNextBlock`
 * 
 * Notifies the app that the next shard block will be fetched from the network.
 * 
 * ### `FetchNextBlockFailed`
 * 
 * Notifies the app that the next block can't be fetched.
 * 
 * ### `MessageExpired`
 * 
 * Notifies the app that the message was not executed within expire timeout on-chain and will never be because it is already expired. The expiration timeout can be configured with `AbiConfig` parameters.
 * 
 * ### `RempSentToValidators`
 * 
 * Notifies the app that the message has been delivered to the thread's validators
 * 
 * ### `RempIncludedIntoBlock`
 * 
 * Notifies the app that the message has been successfully included into a block candidate by the thread's collator
 * 
 * ### `RempIncludedIntoAcceptedBlock`
 * 
 * Notifies the app that the block candidate with the message has been accepted by the thread's validators
 * 
 * ### `RempOther`
 * 
 * Notifies the app about some other minor REMP statuses occurring during message processing
 * 
 * ### `RempError`
 * 
 * Notifies the app about any problem that has occurred in REMP processing - in this case library switches to the fallback transaction awaiting scenario (sequential block reading).
 */
export type ProcessingEvent = ({
    type: 'WillFetchFirstBlock'
} & ProcessingEventWillFetchFirstBlockVariant) | ({
    type: 'FetchFirstBlockFailed'
} & ProcessingEventFetchFirstBlockFailedVariant) | ({
    type: 'WillSend'
} & ProcessingEventWillSendVariant) | ({
    type: 'DidSend'
} & ProcessingEventDidSendVariant) | ({
    type: 'SendFailed'
} & ProcessingEventSendFailedVariant) | ({
    type: 'WillFetchNextBlock'
} & ProcessingEventWillFetchNextBlockVariant) | ({
    type: 'FetchNextBlockFailed'
} & ProcessingEventFetchNextBlockFailedVariant) | ({
    type: 'MessageExpired'
} & ProcessingEventMessageExpiredVariant) | ({
    type: 'RempSentToValidators'
} & ProcessingEventRempSentToValidatorsVariant) | ({
    type: 'RempIncludedIntoBlock'
} & ProcessingEventRempIncludedIntoBlockVariant) | ({
    type: 'RempIncludedIntoAcceptedBlock'
} & ProcessingEventRempIncludedIntoAcceptedBlockVariant) | ({
    type: 'RempOther'
} & ProcessingEventRempOtherVariant) | ({
    type: 'RempError'
} & ProcessingEventRempErrorVariant)

export function processingEventWillFetchFirstBlock(message_id: string, message_dst: string): ProcessingEvent {
    return {
        type: 'WillFetchFirstBlock',
        message_id,
        message_dst,
    };
}

export function processingEventFetchFirstBlockFailed(error: ClientError, message_id: string, message_dst: string): ProcessingEvent {
    return {
        type: 'FetchFirstBlockFailed',
        error,
        message_id,
        message_dst,
    };
}

export function processingEventWillSend(shard_block_id: string, message_id: string, message_dst: string, message: string): ProcessingEvent {
    return {
        type: 'WillSend',
        shard_block_id,
        message_id,
        message_dst,
        message,
    };
}

export function processingEventDidSend(shard_block_id: string, message_id: string, message_dst: string, message: string): ProcessingEvent {
    return {
        type: 'DidSend',
        shard_block_id,
        message_id,
        message_dst,
        message,
    };
}

export function processingEventSendFailed(shard_block_id: string, message_id: string, message_dst: string, message: string, error: ClientError): ProcessingEvent {
    return {
        type: 'SendFailed',
        shard_block_id,
        message_id,
        message_dst,
        message,
        error,
    };
}

export function processingEventWillFetchNextBlock(shard_block_id: string, message_id: string, message_dst: string, message: string): ProcessingEvent {
    return {
        type: 'WillFetchNextBlock',
        shard_block_id,
        message_id,
        message_dst,
        message,
    };
}

export function processingEventFetchNextBlockFailed(shard_block_id: string, message_id: string, message_dst: string, message: string, error: ClientError): ProcessingEvent {
    return {
        type: 'FetchNextBlockFailed',
        shard_block_id,
        message_id,
        message_dst,
        message,
        error,
    };
}

export function processingEventMessageExpired(message_id: string, message_dst: string, message: string, error: ClientError): ProcessingEvent {
    return {
        type: 'MessageExpired',
        message_id,
        message_dst,
        message,
        error,
    };
}

export function processingEventRempSentToValidators(message_id: string, message_dst: string, timestamp: bigint, json: any): ProcessingEvent {
    return {
        type: 'RempSentToValidators',
        message_id,
        message_dst,
        timestamp,
        json,
    };
}

export function processingEventRempIncludedIntoBlock(message_id: string, message_dst: string, timestamp: bigint, json: any): ProcessingEvent {
    return {
        type: 'RempIncludedIntoBlock',
        message_id,
        message_dst,
        timestamp,
        json,
    };
}

export function processingEventRempIncludedIntoAcceptedBlock(message_id: string, message_dst: string, timestamp: bigint, json: any): ProcessingEvent {
    return {
        type: 'RempIncludedIntoAcceptedBlock',
        message_id,
        message_dst,
        timestamp,
        json,
    };
}

export function processingEventRempOther(message_id: string, message_dst: string, timestamp: bigint, json: any): ProcessingEvent {
    return {
        type: 'RempOther',
        message_id,
        message_dst,
        timestamp,
        json,
    };
}

export function processingEventRempError(message_id: string, message_dst: string, error: ClientError): ProcessingEvent {
    return {
        type: 'RempError',
        message_id,
        message_dst,
        error,
    };
}

export type ResultOfProcessMessage = {

    /**
     * Parsed transaction.
     * 
     * @remarks
     * In addition to the regular transaction fields there is a
     * `boc` field encoded with `base64` which contains source
     * transaction BOC.
     */
    transaction: any,

    /**
     * List of output messages' BOCs.
     * 
     * @remarks
     * Encoded as `base64`
     */
    out_messages: string[],

    /**
     * Optional decoded message bodies according to the optional `abi` parameter.
     */
    decoded?: DecodedOutput,

    /**
     * Transaction fees
     */
    fees: TransactionFees
}

export type DecodedOutput = {

    /**
     * Decoded bodies of the out messages.
     * 
     * @remarks
     * If the message can't be decoded, then `None` will be stored in
     * the appropriate position.
     */
    out_messages: DecodedMessageBody | null[],

    /**
     * Decoded body of the function output message.
     */
    output?: any
}

export type MessageMonitoringTransactionCompute = {

    /**
     * Compute phase exit code.
     */
    exit_code: number
}

export type MessageMonitoringTransaction = {

    /**
     * Hash of the transaction. Present if transaction was included into the blocks. When then transaction was emulated this field will be missing.
     */
    hash?: string,

    /**
     * Aborted field of the transaction.
     */
    aborted: boolean,

    /**
     * Optional information about the compute phase of the transaction.
     */
    compute?: MessageMonitoringTransactionCompute
}

export type MessageMonitoringParams = {

    /**
     * Monitored message identification. Can be provided as a message's BOC or (hash, address) pair. BOC is a preferable way because it helps to determine possible error reason (using TVM execution of the message).
     */
    message: MonitoredMessage,

    /**
     * Block time Must be specified as a UNIX timestamp in seconds
     */
    wait_until: number,

    /**
     * User defined data associated with this message. Helps to identify this message when user received `MessageMonitoringResult`.
     */
    user_data?: any
}

export type MessageMonitoringResult = {

    /**
     * Hash of the message.
     */
    hash: string,

    /**
     * Processing status.
     */
    status: MessageMonitoringStatus,

    /**
     * In case of `Finalized` the transaction is extracted from the block. In case of `Timeout` the transaction is emulated using the last known account state.
     */
    transaction?: MessageMonitoringTransaction,

    /**
     * In case of `Timeout` contains possible error reason.
     */
    error?: string,

    /**
     * User defined data related to this message. This is the same value as passed before with `MessageMonitoringParams` or `SendMessageParams`.
     */
    user_data?: any
}

export enum MonitorFetchWaitMode {
    AtLeastOne = "AtLeastOne",
    All = "All",
    NoWait = "NoWait"
}

/**
 * BOC of the message.
 */
export type MonitoredMessageBocVariant = {

    boc: string
}

/**
 * Message's hash and destination address.
 */
export type MonitoredMessageHashAddressVariant = {

    /**
     * Hash of the message.
     */
    hash: string,

    /**
     * Destination address of the message.
     */
    address: string
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Boc`
 * 
 * BOC of the message.
 * 
 * ### `HashAddress`
 * 
 * Message's hash and destination address.
 */
export type MonitoredMessage = ({
    type: 'Boc'
} & MonitoredMessageBocVariant) | ({
    type: 'HashAddress'
} & MonitoredMessageHashAddressVariant)

export function monitoredMessageBoc(boc: string): MonitoredMessage {
    return {
        type: 'Boc',
        boc,
    };
}

export function monitoredMessageHashAddress(hash: string, address: string): MonitoredMessage {
    return {
        type: 'HashAddress',
        hash,
        address,
    };
}

export enum MessageMonitoringStatus {
    Finalized = "Finalized",
    Timeout = "Timeout",
    Reserved = "Reserved"
}

export type MessageSendingParams = {

    /**
     * BOC of the message, that must be sent to the blockchain.
     */
    boc: string,

    /**
     * Expiration time of the message. Must be specified as a UNIX timestamp in seconds.
     */
    wait_until: number,

    /**
     * User defined data associated with this message. Helps to identify this message when user received `MessageMonitoringResult`.
     */
    user_data?: any
}

export type ParamsOfMonitorMessages = {

    /**
     * Name of the monitoring queue.
     */
    queue: string,

    /**
     * Messages to start monitoring for.
     */
    messages: MessageMonitoringParams[]
}

export type ParamsOfGetMonitorInfo = {

    /**
     * Name of the monitoring queue.
     */
    queue: string
}

export type MonitoringQueueInfo = {

    /**
     * Count of the unresolved messages.
     */
    unresolved: number,

    /**
     * Count of resolved results.
     */
    resolved: number
}

export type ParamsOfFetchNextMonitorResults = {

    /**
     * Name of the monitoring queue.
     */
    queue: string,

    /**
     * Wait mode.
     * 
     * @remarks
     * Default is `NO_WAIT`.
     */
    wait_mode?: MonitorFetchWaitMode
}

export type ResultOfFetchNextMonitorResults = {

    /**
     * List of the resolved results.
     */
    results: MessageMonitoringResult[]
}

export type ParamsOfCancelMonitor = {

    /**
     * Name of the monitoring queue.
     */
    queue: string
}

export type ParamsOfSendMessages = {

    /**
     * Messages that must be sent to the blockchain.
     */
    messages: MessageSendingParams[],

    /**
     * Optional message monitor queue that starts monitoring for the processing results for sent messages.
     */
    monitor_queue?: string
}

export type ResultOfSendMessages = {

    /**
     * Messages that was sent to the blockchain for execution.
     */
    messages: MessageMonitoringParams[]
}

export type ParamsOfSendMessage = {

    /**
     * Message BOC.
     */
    message: string,

    /**
     * Optional message ABI.
     * 
     * @remarks
     * If this parameter is specified and the message has the
     * `expire` header then expiration time will be checked against
     * the current time to prevent unnecessary sending of already expired message.
     * 
     * The `message already expired` error will be returned in this
     * case.
     * 
     * Note, that specifying `abi` for ABI compliant contracts is
     * strongly recommended, so that proper processing strategy can be
     * chosen.
     */
    abi?: Abi,

    /**
     * Flag for requesting events sending
     */
    send_events: boolean
}

export type ResultOfSendMessage = {

    /**
     * The last generated shard block of the message destination account before the message was sent.
     * 
     * @remarks
     * This block id must be used as a parameter of the
     * `wait_for_transaction`.
     */
    shard_block_id: string,

    /**
     * The list of endpoints to which the message was sent.
     * 
     * @remarks
     * This list id must be used as a parameter of the
     * `wait_for_transaction`.
     */
    sending_endpoints: string[]
}

export type ParamsOfWaitForTransaction = {

    /**
     * Optional ABI for decoding the transaction result.
     * 
     * @remarks
     * If it is specified, then the output messages' bodies will be
     * decoded according to this ABI.
     * 
     * The `abi_decoded` result field will be filled out.
     */
    abi?: Abi,

    /**
     * Message BOC.
     * 
     * @remarks
     * Encoded with `base64`.
     */
    message: string,

    /**
     * The last generated block id of the destination account shard before the message was sent.
     * 
     * @remarks
     * You must provide the same value as the `send_message` has returned.
     */
    shard_block_id: string,

    /**
     * Flag that enables/disables intermediate events
     */
    send_events: boolean,

    /**
     * The list of endpoints to which the message was sent.
     * 
     * @remarks
     * Use this field to get more informative errors.
     * Provide the same value as the `send_message` has returned.
     * If the message was not delivered (expired), SDK will log the endpoint URLs, used for its sending.
     */
    sending_endpoints?: string[]
}

export type ParamsOfProcessMessage = {

    /**
     * Message encode parameters.
     */
    message_encode_params: ParamsOfEncodeMessage,

    /**
     * Flag for requesting events sending
     */
    send_events: boolean
}

/**
 * Message processing module.
 * 
 * @remarks
 * This module incorporates functions related to complex message
 * processing scenarios.
 */
export class ProcessingModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Starts monitoring for the processing results of the specified messages.
     * 
     * @remarks
     * Message monitor performs background monitoring for a message processing results
     * for the specified set of messages.
     * 
     * Message monitor can serve several isolated monitoring queues.
     * Each monitor queue has a unique application defined identifier (or name) used
     * to separate several queue's.
     * 
     * There are two important lists inside of the monitoring queue:
     * 
     * - unresolved messages: contains messages requested by the application for monitoring
     *   and not yet resolved;
     * 
     * - resolved results: contains resolved processing results for monitored messages.
     * 
     * Each monitoring queue tracks own unresolved and resolved lists.
     * Application can add more messages to the monitoring queue at any time.
     * 
     * Message monitor accumulates resolved results.
     * Application should fetch this results with `fetchNextMonitorResults` function.
     * 
     * When both unresolved and resolved lists becomes empty, monitor stops any background activity
     * and frees all allocated internal memory.
     * 
     * If monitoring queue with specified name already exists then messages will be added
     * to the unresolved list.
     * 
     * If monitoring queue with specified name does not exist then monitoring queue will be created
     * with specified unresolved messages.
     * 
     * @param {ParamsOfMonitorMessages} params
     * @returns 
     */
    monitor_messages(params: ParamsOfMonitorMessages): Promise<void> {
        return this.client.request('processing.monitor_messages', params);
    }

    /**
     * Returns summary information about current state of the specified monitoring queue.
     * 
     * @param {ParamsOfGetMonitorInfo} params
     * @returns MonitoringQueueInfo
     */
    get_monitor_info(params: ParamsOfGetMonitorInfo): Promise<MonitoringQueueInfo> {
        return this.client.request('processing.get_monitor_info', params);
    }

    /**
     * Fetches next resolved results from the specified monitoring queue.
     * 
     * @remarks
     * Results and waiting options are depends on the `wait` parameter.
     * All returned results will be removed from the queue's resolved list.
     * 
     * @param {ParamsOfFetchNextMonitorResults} params
     * @returns ResultOfFetchNextMonitorResults
     */
    fetch_next_monitor_results(params: ParamsOfFetchNextMonitorResults): Promise<ResultOfFetchNextMonitorResults> {
        return this.client.request('processing.fetch_next_monitor_results', params);
    }

    /**
     * Cancels all background activity and releases all allocated system resources for the specified monitoring queue.
     * 
     * @param {ParamsOfCancelMonitor} params
     * @returns 
     */
    cancel_monitor(params: ParamsOfCancelMonitor): Promise<void> {
        return this.client.request('processing.cancel_monitor', params);
    }

    /**
     * Sends specified messages to the blockchain.
     * 
     * @param {ParamsOfSendMessages} params
     * @returns ResultOfSendMessages
     */
    send_messages(params: ParamsOfSendMessages): Promise<ResultOfSendMessages> {
        return this.client.request('processing.send_messages', params);
    }

    /**
     * Sends message to the network
     * 
     * @remarks
     * Sends message to the network and returns the last generated shard block of the destination account
     * before the message was sent. It will be required later for message processing.
     * 
     * @param {ParamsOfSendMessage} params
     * @returns ResultOfSendMessage
     */
    send_message(params: ParamsOfSendMessage, responseHandler?: ResponseHandler): Promise<ResultOfSendMessage> {
        return this.client.request('processing.send_message', params, responseHandler);
    }

    /**
     * Performs monitoring of the network for the result transaction of the external inbound message processing.
     * 
     * @remarks
     * `send_events` enables intermediate events, such as `WillFetchNextBlock`,
     * `FetchNextBlockFailed` that may be useful for logging of new shard blocks creation
     * during message processing.
     * 
     * Note, that presence of the `abi` parameter is critical for ABI
     * compliant contracts. Message processing uses drastically
     * different strategy for processing message for contracts which
     * ABI includes "expire" header.
     * 
     * When the ABI header `expire` is present, the processing uses
     * `message expiration` strategy:
     * - The maximum block gen time is set to
     *   `message_expiration_timeout + transaction_wait_timeout`.
     * - When maximum block gen time is reached, the processing will
     *   be finished with `MessageExpired` error.
     * 
     * When the ABI header `expire` isn't present or `abi` parameter
     * isn't specified, the processing uses `transaction waiting`
     * strategy:
     * - The maximum block gen time is set to
     *   `now() + transaction_wait_timeout`.
     * 
     * - If maximum block gen time is reached and no result transaction is found,
     * the processing will exit with an error.
     * 
     * @param {ParamsOfWaitForTransaction} params
     * @returns ResultOfProcessMessage
     */
    wait_for_transaction(params: ParamsOfWaitForTransaction, responseHandler?: ResponseHandler): Promise<ResultOfProcessMessage> {
        return this.client.request('processing.wait_for_transaction', params, responseHandler);
    }

    /**
     * Creates message, sends it to the network and monitors its processing.
     * 
     * @remarks
     * Creates ABI-compatible message,
     * sends it to the network and monitors for the result transaction.
     * Decodes the output messages' bodies.
     * 
     * If contract's ABI includes "expire" header, then
     * SDK implements retries in case of unsuccessful message delivery within the expiration
     * timeout: SDK recreates the message, sends it and processes it again.
     * 
     * The intermediate events, such as `WillFetchFirstBlock`, `WillSend`, `DidSend`,
     * `WillFetchNextBlock`, etc - are switched on/off by `send_events` flag
     * and logged into the supplied callback function.
     * 
     * The retry configuration parameters are defined in the client's `NetworkConfig` and `AbiConfig`.
     * 
     * If contract's ABI does not include "expire" header
     * then, if no transaction is found within the network timeout (see config parameter ), exits with error.
     * 
     * @param {ParamsOfProcessMessage} params
     * @returns ResultOfProcessMessage
     */
    process_message(params: ParamsOfProcessMessage, responseHandler?: ResponseHandler): Promise<ResultOfProcessMessage> {
        return this.client.request('processing.process_message', params, responseHandler);
    }
}

// utils module


export type AddressStringFormatAccountIdVariant = {

}

export type AddressStringFormatHexVariant = {

}

export type AddressStringFormatBase64Variant = {

    url: boolean,

    test: boolean,

    bounce: boolean
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `AccountId`
 * 
 * 
 * ### `Hex`
 * 
 * 
 * ### `Base64`
 * 
 */
export type AddressStringFormat = ({
    type: 'AccountId'
} & AddressStringFormatAccountIdVariant) | ({
    type: 'Hex'
} & AddressStringFormatHexVariant) | ({
    type: 'Base64'
} & AddressStringFormatBase64Variant)

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

export enum AccountAddressType {
    AccountId = "AccountId",
    Hex = "Hex",
    Base64 = "Base64"
}

export type ParamsOfConvertAddress = {

    /**
     * Account address in any TON format.
     */
    address: string,

    /**
     * Specify the format to convert to.
     */
    output_format: AddressStringFormat
}

export type ResultOfConvertAddress = {

    /**
     * Address in the specified format
     */
    address: string
}

export type ParamsOfGetAddressType = {

    /**
     * Account address in any TON format.
     */
    address: string
}

export type ResultOfGetAddressType = {

    /**
     * Account address type.
     */
    address_type: AccountAddressType
}

export type ParamsOfCalcStorageFee = {

    account: string,

    period: number
}

export type ResultOfCalcStorageFee = {

    fee: string
}

export type ParamsOfCompressZstd = {

    /**
     * Uncompressed data.
     * 
     * @remarks
     * Must be encoded as base64.
     */
    uncompressed: string,

    /**
     * Compression level, from 1 to 21. Where: 1 - lowest compression level (fastest compression); 21 - highest compression level (slowest compression). If level is omitted, the default compression level is used (currently `3`).
     */
    level?: number
}

export type ResultOfCompressZstd = {

    /**
     * Compressed data.
     * 
     * @remarks
     * Must be encoded as base64.
     */
    compressed: string
}

export type ParamsOfDecompressZstd = {

    /**
     * Compressed data.
     * 
     * @remarks
     * Must be encoded as base64.
     */
    compressed: string
}

export type ResultOfDecompressZstd = {

    /**
     * Decompressed data.
     * 
     * @remarks
     * Must be encoded as base64.
     */
    decompressed: string
}

/**
 * Misc utility Functions.
 */
export class UtilsModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Converts address from any TON format to any TON format
     * 
     * @param {ParamsOfConvertAddress} params
     * @returns ResultOfConvertAddress
     */
    convert_address(params: ParamsOfConvertAddress): Promise<ResultOfConvertAddress> {
        return this.client.request('utils.convert_address', params);
    }

    /**
     * Validates and returns the type of any TON address.
     * 
     * @remarks
     * Address types are the following
     * 
     * `0:919db8e740d50bf349df2eea03fa30c385d846b991ff5542e67098ee833fc7f7` - standard TON address most
     * commonly used in all cases. Also called as hex address
     * `919db8e740d50bf349df2eea03fa30c385d846b991ff5542e67098ee833fc7f7` - account ID. A part of full
     * address. Identifies account inside particular workchain
     * `EQCRnbjnQNUL80nfLuoD+jDDhdhGuZH/VULmcJjugz/H9wam` - base64 address. Also called "user-friendly".
     * Was used at the beginning of TON. Now it is supported for compatibility
     * 
     * @param {ParamsOfGetAddressType} params
     * @returns ResultOfGetAddressType
     */
    get_address_type(params: ParamsOfGetAddressType): Promise<ResultOfGetAddressType> {
        return this.client.request('utils.get_address_type', params);
    }

    /**
     * Calculates storage fee for an account over a specified time period
     * 
     * @param {ParamsOfCalcStorageFee} params
     * @returns ResultOfCalcStorageFee
     */
    calc_storage_fee(params: ParamsOfCalcStorageFee): Promise<ResultOfCalcStorageFee> {
        return this.client.request('utils.calc_storage_fee', params);
    }

    /**
     * Compresses data using Zstandard algorithm
     * 
     * @param {ParamsOfCompressZstd} params
     * @returns ResultOfCompressZstd
     */
    compress_zstd(params: ParamsOfCompressZstd): Promise<ResultOfCompressZstd> {
        return this.client.request('utils.compress_zstd', params);
    }

    /**
     * Decompresses data using Zstandard algorithm
     * 
     * @param {ParamsOfDecompressZstd} params
     * @returns ResultOfDecompressZstd
     */
    decompress_zstd(params: ParamsOfDecompressZstd): Promise<ResultOfDecompressZstd> {
        return this.client.request('utils.decompress_zstd', params);
    }
}

// tvm module


export enum TvmErrorCode {
    CanNotReadTransaction = 401,
    CanNotReadBlockchainConfig = 402,
    TransactionAborted = 403,
    InternalError = 404,
    ActionPhaseFailed = 405,
    AccountCodeMissing = 406,
    LowBalance = 407,
    AccountFrozenOrDeleted = 408,
    AccountMissing = 409,
    UnknownExecutionError = 410,
    InvalidInputStack = 411,
    InvalidAccountBoc = 412,
    InvalidMessageType = 413,
    ContractExecutionError = 414,
    AccountIsSuspended = 415
}

export type ExecutionOptions = {

    /**
     * boc with config
     */
    blockchain_config?: string,

    /**
     * time that is used as transaction time
     */
    block_time?: number,

    /**
     * block logical time
     */
    block_lt?: bigint,

    /**
     * transaction logical time
     */
    transaction_lt?: bigint,

    /**
     * Overrides standard TVM behaviour. If set to `true` then CHKSIG always will return `true`.
     */
    chksig_always_succeed?: boolean,

    /**
     * Signature ID to be used in signature verifying instructions when CapSignatureWithId capability is enabled
     */
    signature_id?: number
}

/**
 * Non-existing account to run a creation internal message. Should be used with `skip_transaction_check = true` if the message has no deploy data since transactions on the uninitialized account are always aborted
 */
export type AccountForExecutorNoneVariant = {

}

/**
 * Emulate uninitialized account to run deploy message
 */
export type AccountForExecutorUninitVariant = {

}

/**
 * Account state to run message
 */
export type AccountForExecutorAccountVariant = {

    /**
     * Account BOC.
     * 
     * @remarks
     * Encoded as base64.
     */
    boc: string,

    /**
     * Flag for running account with the unlimited balance.
     * 
     * @remarks
     * Can be used to calculate transaction fees without balance check
     */
    unlimited_balance?: boolean
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `None`
 * 
 * Non-existing account to run a creation internal message. Should be used with `skip_transaction_check = true` if the message has no deploy data since transactions on the uninitialized account are always aborted
 * 
 * ### `Uninit`
 * 
 * Emulate uninitialized account to run deploy message
 * 
 * ### `Account`
 * 
 * Account state to run message
 */
export type AccountForExecutor = ({
    type: 'None'
} & AccountForExecutorNoneVariant) | ({
    type: 'Uninit'
} & AccountForExecutorUninitVariant) | ({
    type: 'Account'
} & AccountForExecutorAccountVariant)

export function accountForExecutorNone(): AccountForExecutor {
    return {
        type: 'None',
    };
}

export function accountForExecutorUninit(): AccountForExecutor {
    return {
        type: 'Uninit',
    };
}

export function accountForExecutorAccount(boc: string, unlimited_balance?: boolean): AccountForExecutor {
    return {
        type: 'Account',
        boc,
        unlimited_balance,
    };
}

export type TransactionFees = {

    /**
     * Deprecated.
     * 
     * @remarks
     * Contains the same data as ext_in_msg_fee field
     */
    in_msg_fwd_fee: bigint,

    /**
     * Fee for account storage
     */
    storage_fee: bigint,

    /**
     * Fee for processing
     */
    gas_fee: bigint,

    /**
     * Deprecated.
     * 
     * @remarks
     * Contains the same data as total_fwd_fees field. Deprecated because of its confusing name, that is not the same with GraphQL API Transaction type's field.
     */
    out_msgs_fwd_fee: bigint,

    /**
     * Deprecated.
     * 
     * @remarks
     * Contains the same data as account_fees field
     */
    total_account_fees: bigint,

    /**
     * Deprecated because it means total value sent in the transaction, which does not relate to any fees.
     */
    total_output: bigint,

    /**
     * Fee for inbound external message import.
     */
    ext_in_msg_fee: bigint,

    /**
     * Total fees the account pays for message forwarding
     */
    total_fwd_fees: bigint,

    /**
     * Total account fees for the transaction execution. Compounds of storage_fee + gas_fee + ext_in_msg_fee + total_fwd_fees
     */
    account_fees: bigint
}

export type ParamsOfRunExecutor = {

    /**
     * Input message BOC.
     * 
     * @remarks
     * Must be encoded as base64.
     */
    message: string,

    /**
     * Account to run on executor
     */
    account: AccountForExecutor,

    /**
     * Execution options.
     */
    execution_options?: ExecutionOptions,

    /**
     * Contract ABI for decoding output messages
     */
    abi?: Abi,

    /**
     * Skip transaction check flag
     */
    skip_transaction_check?: boolean,

    /**
     * Cache type to put the result.
     * 
     * @remarks
     * The BOC itself returned if no cache type provided
     */
    boc_cache?: BocCacheType,

    /**
     * Return updated account flag.
     * 
     * @remarks
     * Empty string is returned if the flag is `false`
     */
    return_updated_account?: boolean
}

export type ResultOfRunExecutor = {

    /**
     * Parsed transaction.
     * 
     * @remarks
     * In addition to the regular transaction fields there is a
     * `boc` field encoded with `base64` which contains source
     * transaction BOC.
     */
    transaction: any,

    /**
     * List of output messages' BOCs.
     * 
     * @remarks
     * Encoded as `base64`
     */
    out_messages: string[],

    /**
     * Optional decoded message bodies according to the optional `abi` parameter.
     */
    decoded?: DecodedOutput,

    /**
     * Updated account state BOC.
     * 
     * @remarks
     * Encoded as `base64`
     */
    account: string,

    /**
     * Transaction fees
     */
    fees: TransactionFees
}

export type ParamsOfRunTvm = {

    /**
     * Input message BOC.
     * 
     * @remarks
     * Must be encoded as base64.
     */
    message: string,

    /**
     * Account BOC.
     * 
     * @remarks
     * Must be encoded as base64.
     */
    account: string,

    /**
     * Execution options.
     */
    execution_options?: ExecutionOptions,

    /**
     * Contract ABI for decoding output messages
     */
    abi?: Abi,

    /**
     * Cache type to put the result.
     * 
     * @remarks
     * The BOC itself returned if no cache type provided
     */
    boc_cache?: BocCacheType,

    /**
     * Return updated account flag.
     * 
     * @remarks
     * Empty string is returned if the flag is `false`
     */
    return_updated_account?: boolean
}

export type ResultOfRunTvm = {

    /**
     * List of output messages' BOCs.
     * 
     * @remarks
     * Encoded as `base64`
     */
    out_messages: string[],

    /**
     * Optional decoded message bodies according to the optional `abi` parameter.
     */
    decoded?: DecodedOutput,

    /**
     * Updated account state BOC.
     * 
     * @remarks
     * Encoded as `base64`. Attention! Only `account_state.storage.state.data` part of the BOC is updated.
     */
    account: string
}

export type ParamsOfRunGet = {

    /**
     * Account BOC in `base64`
     */
    account: string,

    /**
     * Function name
     */
    function_name: string,

    /**
     * Input parameters
     */
    input?: any,

    /**
     * Execution options
     */
    execution_options?: ExecutionOptions,

    /**
     * Convert lists based on nested tuples in the **result** into plain arrays.
     * 
     * @remarks
     * Default is `false`. Input parameters may use any of lists representations
     * If you receive this error on Web: "Runtime error. Unreachable code should not be executed...",
     * set this flag to true.
     * This may happen, for example, when elector contract contains too many participants
     */
    tuple_list_as_array?: boolean
}

export type ResultOfRunGet = {

    /**
     * Values returned by get-method on stack
     */
    output: any
}

export class TvmModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Emulates all the phases of contract execution locally
     * 
     * @remarks
     * Performs all the phases of contract execution on Transaction Executor -
     * the same component that is used on Validator Nodes.
     * 
     * Can be used for contract debugging, to find out the reason why a message was not delivered successfully.
     * Validators throw away the failed external inbound messages (if they failed before `ACCEPT`) in the real network.
     * This is why these messages are impossible to debug in the real network.
     * With the help of run_executor you can do that. In fact, `process_message` function
     * performs local check with `run_executor` if there was no transaction as a result of processing
     * and returns the error, if there is one.
     * 
     * Another use case to use `run_executor` is to estimate fees for message execution.
     * Set  `AccountForExecutor::Account.unlimited_balance`
     * to `true` so that emulation will not depend on the actual balance.
     * This may be needed to calculate deploy fees for an account that does not exist yet.
     * JSON with fees is in `fees` field of the result.
     * 
     * One more use case - you can produce the sequence of operations,
     * thus emulating the sequential contract calls locally.
     * And so on.
     * 
     * Transaction executor requires account BOC (bag of cells) as a parameter.
     * To get the account BOC - use `net.query` method to download it from GraphQL API
     * (field `boc` of `account`) or generate it with `abi.encode_account` method.
     * 
     * Also it requires message BOC. To get the message BOC - use `abi.encode_message` or `abi.encode_internal_message`.
     * 
     * If you need this emulation to be as precise as possible (for instance - emulate transaction
     * with particular lt in particular block or use particular blockchain config,
     * downloaded from a particular key block - then specify `execution_options` parameter.
     * 
     * If you need to see the aborted transaction as a result, not as an error, set `skip_transaction_check` to `true`.
     * 
     * @param {ParamsOfRunExecutor} params
     * @returns ResultOfRunExecutor
     */
    run_executor(params: ParamsOfRunExecutor): Promise<ResultOfRunExecutor> {
        return this.client.request('tvm.run_executor', params);
    }

    /**
     * Executes get-methods of ABI-compatible contracts
     * 
     * @remarks
     * Performs only a part of compute phase of transaction execution
     * that is used to run get-methods of ABI-compatible contracts.
     * 
     * If you try to run get-methods with `run_executor` you will get an error, because it checks ACCEPT and exits
     * if there is none, which is actually true for get-methods.
     * 
     *  To get the account BOC (bag of cells) - use `net.query` method to download it from GraphQL API
     * (field `boc` of `account`) or generate it with `abi.encode_account method`.
     * To get the message BOC - use `abi.encode_message` or prepare it any other way, for instance, with FIFT script.
     * 
     * Attention! Updated account state is produces as well, but only
     * `account_state.storage.state.data`  part of the BOC is updated.
     * 
     * @param {ParamsOfRunTvm} params
     * @returns ResultOfRunTvm
     */
    run_tvm(params: ParamsOfRunTvm): Promise<ResultOfRunTvm> {
        return this.client.request('tvm.run_tvm', params);
    }

    /**
     * Executes a get-method of FIFT contract
     * 
     * @remarks
     * Executes a get-method of FIFT contract that fulfills the smc-guidelines https://test.ton.org/smc-guidelines.txt
     * and returns the result data from TVM's stack
     * 
     * @param {ParamsOfRunGet} params
     * @returns ResultOfRunGet
     */
    run_get(params: ParamsOfRunGet): Promise<ResultOfRunGet> {
        return this.client.request('tvm.run_get', params);
    }
}

// net module


export enum NetErrorCode {
    QueryFailed = 601,
    SubscribeFailed = 602,
    WaitForFailed = 603,
    GetSubscriptionResultFailed = 604,
    InvalidServerResponse = 605,
    ClockOutOfSync = 606,
    WaitForTimeout = 607,
    GraphqlError = 608,
    NetworkModuleSuspended = 609,
    WebsocketDisconnected = 610,
    NotSupported = 611,
    NoEndpointsProvided = 612,
    GraphqlWebsocketInitError = 613,
    NetworkModuleResumed = 614,
    Unauthorized = 615,
    QueryTransactionTreeTimeout = 616,
    GraphqlConnectionError = 617,
    WrongWebscoketProtocolSequence = 618
}

export type OrderBy = {

    path: string,

    direction: SortDirection
}

export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}

/**
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `QueryCollection`
 * 
 * 
 * ### `WaitForCollection`
 * 
 * 
 * ### `AggregateCollection`
 * 
 * 
 * ### `QueryCounterparties`
 * 
 */
export type ParamsOfQueryOperation = ({
    type: 'QueryCollection'
} & ParamsOfQueryCollection) | ({
    type: 'WaitForCollection'
} & ParamsOfWaitForCollection) | ({
    type: 'AggregateCollection'
} & ParamsOfAggregateCollection) | ({
    type: 'QueryCounterparties'
} & ParamsOfQueryCounterparties)

export function paramsOfQueryOperationQueryCollection(params: ParamsOfQueryCollection): ParamsOfQueryOperation {
    return {
        type: 'QueryCollection',
        ...params,
    };
}

export function paramsOfQueryOperationWaitForCollection(params: ParamsOfWaitForCollection): ParamsOfQueryOperation {
    return {
        type: 'WaitForCollection',
        ...params,
    };
}

export function paramsOfQueryOperationAggregateCollection(params: ParamsOfAggregateCollection): ParamsOfQueryOperation {
    return {
        type: 'AggregateCollection',
        ...params,
    };
}

export function paramsOfQueryOperationQueryCounterparties(params: ParamsOfQueryCounterparties): ParamsOfQueryOperation {
    return {
        type: 'QueryCounterparties',
        ...params,
    };
}

export type FieldAggregation = {

    /**
     * Dot separated path to the field
     */
    field: string,

    /**
     * Aggregation function that must be applied to field values
     */
    fn: AggregationFn
}

export enum AggregationFn {
    COUNT = "COUNT",
    MIN = "MIN",
    MAX = "MAX",
    SUM = "SUM",
    AVERAGE = "AVERAGE"
}

export type TransactionNode = {

    /**
     * Transaction id.
     */
    id: string,

    /**
     * In message id.
     */
    in_msg: string,

    /**
     * Out message ids.
     */
    out_msgs: string[],

    /**
     * Account address.
     */
    account_addr: string,

    /**
     * Transactions total fees.
     */
    total_fees: string,

    /**
     * Aborted flag.
     */
    aborted: boolean,

    /**
     * Compute phase exit code.
     */
    exit_code?: number
}

export type MessageNode = {

    /**
     * Message id.
     */
    id: string,

    /**
     * Source transaction id.
     * 
     * @remarks
     * This field is missing for an external inbound messages.
     */
    src_transaction_id?: string,

    /**
     * Destination transaction id.
     * 
     * @remarks
     * This field is missing for an external outbound messages.
     */
    dst_transaction_id?: string,

    /**
     * Source address.
     */
    src?: string,

    /**
     * Destination address.
     */
    dst?: string,

    /**
     * Transferred tokens value.
     */
    value?: string,

    /**
     * Bounce flag.
     */
    bounce: boolean,

    /**
     * Decoded body.
     * 
     * @remarks
     * Library tries to decode message body using provided `params.abi_registry`.
     * This field will be missing if none of the provided abi can be used to decode.
     */
    decoded_body?: DecodedMessageBody
}

export type ParamsOfQuery = {

    /**
     * GraphQL query text.
     */
    query: string,

    /**
     * Variables used in query.
     * 
     * @remarks
     * Must be a map with named values that can be used in query.
     */
    variables?: any
}

export type ResultOfQuery = {

    /**
     * Result provided by DAppServer.
     */
    result: any
}

export type ParamsOfBatchQuery = {

    /**
     * List of query operations that must be performed per single fetch.
     */
    operations: ParamsOfQueryOperation[]
}

export type ResultOfBatchQuery = {

    /**
     * Result values for batched queries.
     * 
     * @remarks
     * Returns an array of values. Each value corresponds to `queries` item.
     */
    results: any[]
}

export type ParamsOfQueryCollection = {

    /**
     * Collection name (accounts, blocks, transactions, messages, block_signatures)
     */
    collection: string,

    /**
     * Collection filter
     */
    filter?: any,

    /**
     * Projection (result) string
     */
    result: string,

    /**
     * Sorting order
     */
    order?: OrderBy[],

    /**
     * Number of documents to return
     */
    limit?: number
}

export type ResultOfQueryCollection = {

    /**
     * Objects that match the provided criteria
     */
    result: any[]
}

export type ParamsOfAggregateCollection = {

    /**
     * Collection name (accounts, blocks, transactions, messages, block_signatures)
     */
    collection: string,

    /**
     * Collection filter
     */
    filter?: any,

    /**
     * Projection (result) string
     */
    fields?: FieldAggregation[]
}

export type ResultOfAggregateCollection = {

    /**
     * Values for requested fields.
     * 
     * @remarks
     * Returns an array of strings. Each string refers to the corresponding `fields` item.
     * Numeric value is returned as a decimal string representations.
     */
    values: any
}

export type ParamsOfWaitForCollection = {

    /**
     * Collection name (accounts, blocks, transactions, messages, block_signatures)
     */
    collection: string,

    /**
     * Collection filter
     */
    filter?: any,

    /**
     * Projection (result) string
     */
    result: string,

    /**
     * Query timeout
     */
    timeout?: number
}

export type ResultOfWaitForCollection = {

    /**
     * First found object that matches the provided criteria
     */
    result: any
}

export type ResultOfSubscribeCollection = {

    /**
     * Subscription handle.
     * 
     * @remarks
     * Must be closed with `unsubscribe`
     */
    handle: number
}

export type ParamsOfSubscribeCollection = {

    /**
     * Collection name (accounts, blocks, transactions, messages, block_signatures)
     */
    collection: string,

    /**
     * Collection filter
     */
    filter?: any,

    /**
     * Projection (result) string
     */
    result: string
}

export type ParamsOfSubscribe = {

    /**
     * GraphQL subscription text.
     */
    subscription: string,

    /**
     * Variables used in subscription.
     * 
     * @remarks
     * Must be a map with named values that can be used in query.
     */
    variables?: any
}

export type ParamsOfFindLastShardBlock = {

    /**
     * Account address
     */
    address: string
}

export type ResultOfFindLastShardBlock = {

    /**
     * Account shard last block ID
     */
    block_id: string
}

export type EndpointsSet = {

    /**
     * List of endpoints provided by server
     */
    endpoints: string[]
}

export type ResultOfGetEndpoints = {

    /**
     * Current query endpoint
     */
    query: string,

    /**
     * List of all endpoints used by client
     */
    endpoints: string[]
}

export type ParamsOfQueryCounterparties = {

    /**
     * Account address
     */
    account: string,

    /**
     * Projection (result) string
     */
    result: string,

    /**
     * Number of counterparties to return
     */
    first?: number,

    /**
     * `cursor` field of the last received result
     */
    after?: string
}

export type ParamsOfQueryTransactionTree = {

    /**
     * Input message id.
     */
    in_msg: string,

    /**
     * List of contract ABIs that will be used to decode message bodies. Library will try to decode each returned message body using any ABI from the registry.
     */
    abi_registry?: Abi[],

    /**
     * Timeout used to limit waiting time for the missing messages and transaction.
     * 
     * @remarks
     * If some of the following messages and transactions are missing yet
     * The maximum waiting time is regulated by this option.
     * 
     * Default value is 60000 (1 min). If `timeout` is set to 0 then function will wait infinitely
     * until the whole transaction tree is executed
     */
    timeout?: number,

    /**
     * Maximum transaction count to wait.
     * 
     * @remarks
     * If transaction tree contains more transaction then this parameter then only first `transaction_max_count` transaction are awaited and returned.
     * 
     * Default value is 50. If `transaction_max_count` is set to 0 then no limitation on
     * transaction count is used and all transaction are returned.
     */
    transaction_max_count?: number
}

export type ResultOfQueryTransactionTree = {

    /**
     * Messages.
     */
    messages: MessageNode[],

    /**
     * Transactions.
     */
    transactions: TransactionNode[]
}

export type ParamsOfCreateBlockIterator = {

    /**
     * Starting time to iterate from.
     * 
     * @remarks
     * If the application specifies this parameter then the iteration
     * includes blocks with `gen_utime` >= `start_time`.
     * Otherwise the iteration starts from zero state.
     * 
     * Must be specified in seconds.
     */
    start_time?: number,

    /**
     * Optional end time to iterate for.
     * 
     * @remarks
     * If the application specifies this parameter then the iteration
     * includes blocks with `gen_utime` < `end_time`.
     * Otherwise the iteration never stops.
     * 
     * Must be specified in seconds.
     */
    end_time?: number,

    /**
     * Shard prefix filter.
     * 
     * @remarks
     * If the application specifies this parameter and it is not the empty array
     * then the iteration will include items related to accounts that belongs to
     * the specified shard prefixes.
     * Shard prefix must be represented as a string "workchain:prefix".
     * Where `workchain` is a signed integer and the `prefix` if a hexadecimal
     * representation if the 64-bit unsigned integer with tagged shard prefix.
     * For example: "0:3800000000000000".
     */
    shard_filter?: string[],

    /**
     * Projection (result) string.
     * 
     * @remarks
     * List of the fields that must be returned for iterated items.
     * This field is the same as the `result` parameter of
     * the `query_collection` function.
     * Note that iterated items can contains additional fields that are
     * not requested in the `result`.
     */
    result?: string
}

export type RegisteredIterator = {

    /**
     * Iterator handle.
     * 
     * @remarks
     * Must be removed using `remove_iterator`
     * when it is no more needed for the application.
     */
    handle: number
}

export type ParamsOfResumeBlockIterator = {

    /**
     * Iterator state from which to resume.
     * 
     * @remarks
     * Same as value returned from `iterator_next`.
     */
    resume_state: any
}

export type ParamsOfCreateTransactionIterator = {

    /**
     * Starting time to iterate from.
     * 
     * @remarks
     * If the application specifies this parameter then the iteration
     * includes blocks with `gen_utime` >= `start_time`.
     * Otherwise the iteration starts from zero state.
     * 
     * Must be specified in seconds.
     */
    start_time?: number,

    /**
     * Optional end time to iterate for.
     * 
     * @remarks
     * If the application specifies this parameter then the iteration
     * includes blocks with `gen_utime` < `end_time`.
     * Otherwise the iteration never stops.
     * 
     * Must be specified in seconds.
     */
    end_time?: number,

    /**
     * Shard prefix filters.
     * 
     * @remarks
     * If the application specifies this parameter and it is not an empty array
     * then the iteration will include items related to accounts that belongs to
     * the specified shard prefixes.
     * Shard prefix must be represented as a string "workchain:prefix".
     * Where `workchain` is a signed integer and the `prefix` if a hexadecimal
     * representation if the 64-bit unsigned integer with tagged shard prefix.
     * For example: "0:3800000000000000".
     * Account address conforms to the shard filter if
     * it belongs to the filter workchain and the first bits of address match to
     * the shard prefix. Only transactions with suitable account addresses are iterated.
     */
    shard_filter?: string[],

    /**
     * Account address filter.
     * 
     * @remarks
     * Application can specify the list of accounts for which
     * it wants to iterate transactions.
     * 
     * If this parameter is missing or an empty list then the library iterates
     * transactions for all accounts that pass the shard filter.
     * 
     * Note that the library doesn't detect conflicts between the account filter and the shard filter
     * if both are specified.
     * So it is an application responsibility to specify the correct filter combination.
     */
    accounts_filter?: string[],

    /**
     * Projection (result) string.
     * 
     * @remarks
     * List of the fields that must be returned for iterated items.
     * This field is the same as the `result` parameter of
     * the `query_collection` function.
     * Note that iterated items can contain additional fields that are
     * not requested in the `result`.
     */
    result?: string,

    /**
     * Include `transfers` field in iterated transactions.
     * 
     * @remarks
     * If this parameter is `true` then each transaction contains field
     * `transfers` with list of transfer. See more about this structure in function description.
     */
    include_transfers?: boolean
}

export type ParamsOfResumeTransactionIterator = {

    /**
     * Iterator state from which to resume.
     * 
     * @remarks
     * Same as value returned from `iterator_next`.
     */
    resume_state: any,

    /**
     * Account address filter.
     * 
     * @remarks
     * Application can specify the list of accounts for which
     * it wants to iterate transactions.
     * 
     * If this parameter is missing or an empty list then the library iterates
     * transactions for all accounts that passes the shard filter.
     * 
     * Note that the library doesn't detect conflicts between the account filter and the shard filter
     * if both are specified.
     * So it is the application's responsibility to specify the correct filter combination.
     */
    accounts_filter?: string[]
}

export type ParamsOfIteratorNext = {

    /**
     * Iterator handle
     */
    iterator: number,

    /**
     * Maximum count of the returned items.
     * 
     * @remarks
     * If value is missing or is less than 1 the library uses 1.
     */
    limit?: number,

    /**
     * Indicates that function must return the iterator state that can be used for resuming iteration.
     */
    return_resume_state?: boolean
}

export type ResultOfIteratorNext = {

    /**
     * Next available items.
     * 
     * @remarks
     * Note that `iterator_next` can return an empty items and `has_more` equals to `true`.
     * In this case the application have to continue iteration.
     * Such situation can take place when there is no data yet but
     * the requested `end_time` is not reached.
     */
    items: any[],

    /**
     * Indicates that there are more available items in iterated range.
     */
    has_more: boolean,

    /**
     * Optional iterator state that can be used for resuming iteration.
     * 
     * @remarks
     * This field is returned only if the `return_resume_state` parameter
     * is specified.
     * 
     * Note that `resume_state` corresponds to the iteration position
     * after the returned items.
     */
    resume_state?: any
}

export type ResultOfGetSignatureId = {

    /**
     * Signature ID for configured network if it should be used in messages signature
     */
    signature_id?: number
}

/**
 * Network access.
 */
export class NetModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Performs DAppServer GraphQL query.
     * 
     * @param {ParamsOfQuery} params
     * @returns ResultOfQuery
     */
    query(params: ParamsOfQuery): Promise<ResultOfQuery> {
        return this.client.request('net.query', params);
    }

    /**
     * Performs multiple queries per single fetch.
     * 
     * @param {ParamsOfBatchQuery} params
     * @returns ResultOfBatchQuery
     */
    batch_query(params: ParamsOfBatchQuery): Promise<ResultOfBatchQuery> {
        return this.client.request('net.batch_query', params);
    }

    /**
     * Queries collection data
     * 
     * @remarks
     * Queries data that satisfies the `filter` conditions,
     * limits the number of returned records and orders them.
     * The projection fields are limited to `result` fields
     * 
     * @param {ParamsOfQueryCollection} params
     * @returns ResultOfQueryCollection
     */
    query_collection(params: ParamsOfQueryCollection): Promise<ResultOfQueryCollection> {
        return this.client.request('net.query_collection', params);
    }

    /**
     * Aggregates collection data.
     * 
     * @remarks
     * Aggregates values from the specified `fields` for records
     * that satisfies the `filter` conditions,
     * 
     * @param {ParamsOfAggregateCollection} params
     * @returns ResultOfAggregateCollection
     */
    aggregate_collection(params: ParamsOfAggregateCollection): Promise<ResultOfAggregateCollection> {
        return this.client.request('net.aggregate_collection', params);
    }

    /**
     * Returns an object that fulfills the conditions or waits for its appearance
     * 
     * @remarks
     * Triggers only once.
     * If object that satisfies the `filter` conditions
     * already exists - returns it immediately.
     * If not - waits for insert/update of data within the specified `timeout`,
     * and returns it.
     * The projection fields are limited to `result` fields
     * 
     * @param {ParamsOfWaitForCollection} params
     * @returns ResultOfWaitForCollection
     */
    wait_for_collection(params: ParamsOfWaitForCollection): Promise<ResultOfWaitForCollection> {
        return this.client.request('net.wait_for_collection', params);
    }

    /**
     * Cancels a subscription
     * 
     * @remarks
     * Cancels a subscription specified by its handle.
     * 
     * @param {ResultOfSubscribeCollection} params
     * @returns 
     */
    unsubscribe(params: ResultOfSubscribeCollection): Promise<void> {
        return this.client.request('net.unsubscribe', params);
    }

    /**
     * Creates a collection subscription
     * 
     * @remarks
     * Triggers for each insert/update of data that satisfies
     * the `filter` conditions.
     * The projection fields are limited to `result` fields.
     * 
     * The subscription is a persistent communication channel between
     * client and Free TON Network.
     * All changes in the blockchain will be reflected in realtime.
     * Changes means inserts and updates of the blockchain entities.
     * 
     * ### Important Notes on Subscriptions
     * 
     * Unfortunately sometimes the connection with the network brakes down.
     * In this situation the library attempts to reconnect to the network.
     * This reconnection sequence can take significant time.
     * All of this time the client is disconnected from the network.
     * 
     * Bad news is that all blockchain changes that happened while
     * the client was disconnected are lost.
     * 
     * Good news is that the client report errors to the callback when
     * it loses and resumes connection.
     * 
     * So, if the lost changes are important to the application then
     * the application must handle these error reports.
     * 
     * Library reports errors with `responseType` == 101
     * and the error object passed via `params`.
     * 
     * When the library has successfully reconnected
     * the application receives callback with
     * `responseType` == 101 and `params.code` == 614 (NetworkModuleResumed).
     * 
     * Application can use several ways to handle this situation:
     * - If application monitors changes for the single blockchain
     * object (for example specific account):  application
     * can perform a query for this object and handle actual data as a
     * regular data from the subscription.
     * - If application monitors sequence of some blockchain objects
     * (for example transactions of the specific account): application must
     * refresh all cached (or visible to user) lists where this sequences presents.
     * 
     * @param {ParamsOfSubscribeCollection} params
     * @returns ResultOfSubscribeCollection
     */
    subscribe_collection(params: ParamsOfSubscribeCollection, responseHandler?: ResponseHandler): Promise<ResultOfSubscribeCollection> {
        return this.client.request('net.subscribe_collection', params, responseHandler);
    }

    /**
     * Creates a subscription
     * 
     * @remarks
     * The subscription is a persistent communication channel between
     * client and Everscale Network.
     * 
     * ### Important Notes on Subscriptions
     * 
     * Unfortunately sometimes the connection with the network breaks down.
     * In this situation the library attempts to reconnect to the network.
     * This reconnection sequence can take significant time.
     * All of this time the client is disconnected from the network.
     * 
     * Bad news is that all changes that happened while
     * the client was disconnected are lost.
     * 
     * Good news is that the client report errors to the callback when
     * it loses and resumes connection.
     * 
     * So, if the lost changes are important to the application then
     * the application must handle these error reports.
     * 
     * Library reports errors with `responseType` == 101
     * and the error object passed via `params`.
     * 
     * When the library has successfully reconnected
     * the application receives callback with
     * `responseType` == 101 and `params.code` == 614 (NetworkModuleResumed).
     * 
     * Application can use several ways to handle this situation:
     * - If application monitors changes for the single
     * object (for example specific account):  application
     * can perform a query for this object and handle actual data as a
     * regular data from the subscription.
     * - If application monitors sequence of some objects
     * (for example transactions of the specific account): application must
     * refresh all cached (or visible to user) lists where this sequences presents.
     * 
     * @param {ParamsOfSubscribe} params
     * @returns ResultOfSubscribeCollection
     */
    subscribe(params: ParamsOfSubscribe, responseHandler?: ResponseHandler): Promise<ResultOfSubscribeCollection> {
        return this.client.request('net.subscribe', params, responseHandler);
    }

    /**
     * Suspends network module to stop any network activity
     * @returns 
     */
    suspend(): Promise<void> {
        return this.client.request('net.suspend');
    }

    /**
     * Resumes network module to enable network activity
     * @returns 
     */
    resume(): Promise<void> {
        return this.client.request('net.resume');
    }

    /**
     * Returns ID of the last block in a specified account shard
     * 
     * @param {ParamsOfFindLastShardBlock} params
     * @returns ResultOfFindLastShardBlock
     */
    find_last_shard_block(params: ParamsOfFindLastShardBlock): Promise<ResultOfFindLastShardBlock> {
        return this.client.request('net.find_last_shard_block', params);
    }

    /**
     * Requests the list of alternative endpoints from server
     * @returns EndpointsSet
     */
    fetch_endpoints(): Promise<EndpointsSet> {
        return this.client.request('net.fetch_endpoints');
    }

    /**
     * Sets the list of endpoints to use on reinit
     * 
     * @param {EndpointsSet} params
     * @returns 
     */
    set_endpoints(params: EndpointsSet): Promise<void> {
        return this.client.request('net.set_endpoints', params);
    }

    /**
     * Requests the list of alternative endpoints from server
     * @returns ResultOfGetEndpoints
     */
    get_endpoints(): Promise<ResultOfGetEndpoints> {
        return this.client.request('net.get_endpoints');
    }

    /**
     * Allows to query and paginate through the list of accounts that the specified account has interacted with, sorted by the time of the last internal message between accounts
     * 
     * @remarks
     * *Attention* this query retrieves data from 'Counterparties' service which is not supported in
     * the opensource version of DApp Server (and will not be supported) as well as in Evernode SE (will be supported in SE in future),
     * but is always accessible via [EVER OS Clouds](../ton-os-api/networks.md)
     * 
     * @param {ParamsOfQueryCounterparties} params
     * @returns ResultOfQueryCollection
     */
    query_counterparties(params: ParamsOfQueryCounterparties): Promise<ResultOfQueryCollection> {
        return this.client.request('net.query_counterparties', params);
    }

    /**
     * Returns a tree of transactions triggered by a specific message.
     * 
     * @remarks
     * Performs recursive retrieval of a transactions tree produced by a specific message:
     * in_msg -> dst_transaction -> out_messages -> dst_transaction -> ...
     * If the chain of transactions execution is in progress while the function is running,
     * it will wait for the next transactions to appear until the full tree or more than 50 transactions
     * are received.
     * 
     * All the retrieved messages and transactions are included
     * into `result.messages` and `result.transactions` respectively.
     * 
     * Function reads transactions layer by layer, by pages of 20 transactions.
     * 
     * The retrieval process goes like this:
     * Let's assume we have an infinite chain of transactions and each transaction generates 5 messages.
     * 1. Retrieve 1st message (input parameter) and corresponding transaction - put it into result.
     * It is the first level of the tree of transactions - its root.
     * Retrieve 5 out message ids from the transaction for next steps.
     * 2. Retrieve 5 messages and corresponding transactions on the 2nd layer. Put them into result.
     * Retrieve 5*5 out message ids from these transactions for next steps
     * 3. Retrieve 20 (size of the page) messages and transactions (3rd layer) and 20*5=100 message ids (4th layer).
     * 4. Retrieve the last 5 messages and 5 transactions on the 3rd layer + 15 messages and transactions (of 100) from the 4th layer
     * + 25 message ids of the 4th layer + 75 message ids of the 5th layer.
     * 5. Retrieve 20 more messages and 20 more transactions of the 4th layer + 100 more message ids of the 5th layer.
     * 6. Now we have 1+5+20+20+20 = 66 transactions, which is more than 50. Function exits with the tree of
     * 1m->1t->5m->5t->25m->25t->35m->35t. If we see any message ids in the last transactions out_msgs, which don't have
     * corresponding messages in the function result, it means that the full tree was not received and we need to continue iteration.
     * 
     * To summarize, it is guaranteed that each message in `result.messages` has the corresponding transaction
     * in the `result.transactions`.
     * But there is no guarantee that all messages from transactions `out_msgs` are
     * presented in `result.messages`.
     * So the application has to continue retrieval for missing messages if it requires.
     * 
     * @param {ParamsOfQueryTransactionTree} params
     * @returns ResultOfQueryTransactionTree
     */
    query_transaction_tree(params: ParamsOfQueryTransactionTree): Promise<ResultOfQueryTransactionTree> {
        return this.client.request('net.query_transaction_tree', params);
    }

    /**
     * Creates block iterator.
     * 
     * @remarks
     * Block iterator uses robust iteration methods that guaranties that every
     * block in the specified range isn't missed or iterated twice.
     * 
     * Iterated range can be reduced with some filters:
     * - `start_time` – the bottom time range. Only blocks with `gen_utime`
     * more or equal to this value is iterated. If this parameter is omitted then there is
     * no bottom time edge, so all blocks since zero state is iterated.
     * - `end_time` – the upper time range. Only blocks with `gen_utime`
     * less then this value is iterated. If this parameter is omitted then there is
     * no upper time edge, so iterator never finishes.
     * - `shard_filter` – workchains and shard prefixes that reduce the set of interesting
     * blocks. Block conforms to the shard filter if it belongs to the filter workchain
     * and the first bits of block's `shard` fields matches to the shard prefix.
     * Only blocks with suitable shard are iterated.
     * 
     * Items iterated is a JSON objects with block data. The minimal set of returned
     * fields is:
     * ```text
     * id
     * gen_utime
     * workchain_id
     * shard
     * after_split
     * after_merge
     * prev_ref {
     *     root_hash
     * }
     * prev_alt_ref {
     *     root_hash
     * }
     * ```
     * Application can request additional fields in the `result` parameter.
     * 
     * Application should call the `remove_iterator` when iterator is no longer required.
     * 
     * @param {ParamsOfCreateBlockIterator} params
     * @returns RegisteredIterator
     */
    create_block_iterator(params: ParamsOfCreateBlockIterator): Promise<RegisteredIterator> {
        return this.client.request('net.create_block_iterator', params);
    }

    /**
     * Resumes block iterator.
     * 
     * @remarks
     * The iterator stays exactly at the same position where the `resume_state` was caught.
     * 
     * Application should call the `remove_iterator` when iterator is no longer required.
     * 
     * @param {ParamsOfResumeBlockIterator} params
     * @returns RegisteredIterator
     */
    resume_block_iterator(params: ParamsOfResumeBlockIterator): Promise<RegisteredIterator> {
        return this.client.request('net.resume_block_iterator', params);
    }

    /**
     * Creates transaction iterator.
     * 
     * @remarks
     * Transaction iterator uses robust iteration methods that guaranty that every
     * transaction in the specified range isn't missed or iterated twice.
     * 
     * Iterated range can be reduced with some filters:
     * - `start_time` – the bottom time range. Only transactions with `now`
     * more or equal to this value are iterated. If this parameter is omitted then there is
     * no bottom time edge, so all the transactions since zero state are iterated.
     * - `end_time` – the upper time range. Only transactions with `now`
     * less then this value are iterated. If this parameter is omitted then there is
     * no upper time edge, so iterator never finishes.
     * - `shard_filter` – workchains and shard prefixes that reduce the set of interesting
     * accounts. Account address conforms to the shard filter if
     * it belongs to the filter workchain and the first bits of address match to
     * the shard prefix. Only transactions with suitable account addresses are iterated.
     * - `accounts_filter` – set of account addresses whose transactions must be iterated.
     * Note that accounts filter can conflict with shard filter so application must combine
     * these filters carefully.
     * 
     * Iterated item is a JSON objects with transaction data. The minimal set of returned
     * fields is:
     * ```text
     * id
     * account_addr
     * now
     * balance_delta(format:DEC)
     * bounce { bounce_type }
     * in_message {
     *     id
     *     value(format:DEC)
     *     msg_type
     *     src
     * }
     * out_messages {
     *     id
     *     value(format:DEC)
     *     msg_type
     *     dst
     * }
     * ```
     * Application can request an additional fields in the `result` parameter.
     * 
     * Another parameter that affects on the returned fields is the `include_transfers`.
     * When this parameter is `true` the iterator computes and adds `transfer` field containing
     * list of the useful `TransactionTransfer` objects.
     * Each transfer is calculated from the particular message related to the transaction
     * and has the following structure:
     * - message – source message identifier.
     * - isBounced – indicates that the transaction is bounced, which means the value will be returned back to the sender.
     * - isDeposit – indicates that this transfer is the deposit (true) or withdraw (false).
     * - counterparty – account address of the transfer source or destination depending on `isDeposit`.
     * - value – amount of nano tokens transferred. The value is represented as a decimal string
     * because the actual value can be more precise than the JSON number can represent. Application
     * must use this string carefully – conversion to number can follow to loose of precision.
     * 
     * Application should call the `remove_iterator` when iterator is no longer required.
     * 
     * @param {ParamsOfCreateTransactionIterator} params
     * @returns RegisteredIterator
     */
    create_transaction_iterator(params: ParamsOfCreateTransactionIterator): Promise<RegisteredIterator> {
        return this.client.request('net.create_transaction_iterator', params);
    }

    /**
     * Resumes transaction iterator.
     * 
     * @remarks
     * The iterator stays exactly at the same position where the `resume_state` was caught.
     * Note that `resume_state` doesn't store the account filter. If the application requires
     * to use the same account filter as it was when the iterator was created then the application
     * must pass the account filter again in `accounts_filter` parameter.
     * 
     * Application should call the `remove_iterator` when iterator is no longer required.
     * 
     * @param {ParamsOfResumeTransactionIterator} params
     * @returns RegisteredIterator
     */
    resume_transaction_iterator(params: ParamsOfResumeTransactionIterator): Promise<RegisteredIterator> {
        return this.client.request('net.resume_transaction_iterator', params);
    }

    /**
     * Returns next available items.
     * 
     * @remarks
     * In addition to available items this function returns the `has_more` flag
     * indicating that the iterator isn't reach the end of the iterated range yet.
     * 
     * This function can return the empty list of available items but
     * indicates that there are more items is available.
     * This situation appears when the iterator doesn't reach iterated range
     * but database doesn't contains available items yet.
     * 
     * If application requests resume state in `return_resume_state` parameter
     * then this function returns `resume_state` that can be used later to
     * resume the iteration from the position after returned items.
     * 
     * The structure of the items returned depends on the iterator used.
     * See the description to the appropriated iterator creation function.
     * 
     * @param {ParamsOfIteratorNext} params
     * @returns ResultOfIteratorNext
     */
    iterator_next(params: ParamsOfIteratorNext): Promise<ResultOfIteratorNext> {
        return this.client.request('net.iterator_next', params);
    }

    /**
     * Removes an iterator
     * 
     * @remarks
     * Frees all resources allocated in library to serve iterator.
     * 
     * Application always should call the `remove_iterator` when iterator
     * is no longer required.
     * 
     * @param {RegisteredIterator} params
     * @returns 
     */
    remove_iterator(params: RegisteredIterator): Promise<void> {
        return this.client.request('net.remove_iterator', params);
    }

    /**
     * Returns signature ID for configured network if it should be used in messages signature
     * @returns ResultOfGetSignatureId
     */
    get_signature_id(): Promise<ResultOfGetSignatureId> {
        return this.client.request('net.get_signature_id');
    }
}

// debot module


export enum DebotErrorCode {
    DebotStartFailed = 801,
    DebotFetchFailed = 802,
    DebotExecutionFailed = 803,
    DebotInvalidHandle = 804,
    DebotInvalidJsonParams = 805,
    DebotInvalidFunctionId = 806,
    DebotInvalidAbi = 807,
    DebotGetMethodFailed = 808,
    DebotInvalidMsg = 809,
    DebotExternalCallFailed = 810,
    DebotBrowserCallbackFailed = 811,
    DebotOperationRejected = 812,
    DebotNoCode = 813
}

/**
 * [UNSTABLE](UNSTABLE.md) Handle of registered in SDK debot
 */
export type DebotHandle = number

/**
 * [UNSTABLE](UNSTABLE.md) Describes a debot action in a Debot Context.
 */
export type DebotAction = {

    /**
     * A short action description.
     * 
     * @remarks
     * Should be used by Debot Browser as name of menu item.
     */
    description: string,

    /**
     * Depends on action type.
     * 
     * @remarks
     * Can be a debot function name or a print string (for Print Action).
     */
    name: string,

    /**
     * Action type.
     */
    action_type: number,

    /**
     * ID of debot context to switch after action execution.
     */
    to: number,

    /**
     * Action attributes.
     * 
     * @remarks
     * In the form of "param=value,flag". attribute example: instant, args, fargs, sign.
     */
    attributes: string,

    /**
     * Some internal action data.
     * 
     * @remarks
     * Used by debot only.
     */
    misc: string
}

/**
 * [UNSTABLE](UNSTABLE.md) Describes DeBot metadata.
 */
export type DebotInfo = {

    /**
     * DeBot short name.
     */
    name?: string,

    /**
     * DeBot semantic version.
     */
    version?: string,

    /**
     * The name of DeBot deployer.
     */
    publisher?: string,

    /**
     * Short info about DeBot.
     */
    caption?: string,

    /**
     * The name of DeBot developer.
     */
    author?: string,

    /**
     * TON address of author for questions and donations.
     */
    support?: string,

    /**
     * String with the first messsage from DeBot.
     */
    hello?: string,

    /**
     * String with DeBot interface language (ISO-639).
     */
    language?: string,

    /**
     * String with DeBot ABI.
     */
    dabi?: string,

    /**
     * DeBot icon.
     */
    icon?: string,

    /**
     * Vector with IDs of DInterfaces used by DeBot.
     */
    interfaces: string[],

    /**
     * ABI version ("x.y") supported by DeBot
     */
    dabiVersion: string
}

/**
 * DeBot wants to create new transaction in blockchain.
 */
export type DebotActivityTransactionVariant = {

    /**
     * External inbound message BOC.
     */
    msg: string,

    /**
     * Target smart contract address.
     */
    dst: string,

    /**
     * List of spendings as a result of transaction.
     */
    out: Spending[],

    /**
     * Transaction total fee.
     */
    fee: bigint,

    /**
     * Indicates if target smart contract updates its code.
     */
    setcode: boolean,

    /**
     * Public key from keypair that was used to sign external message.
     */
    signkey: string,

    /**
     * Signing box handle used to sign external message.
     */
    signing_box_handle: number
}

/**
 * [UNSTABLE](UNSTABLE.md) Describes the operation that the DeBot wants to perform.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Transaction`
 * 
 * DeBot wants to create new transaction in blockchain.
 */
export type DebotActivity = ({
    type: 'Transaction'
} & DebotActivityTransactionVariant)

export function debotActivityTransaction(msg: string, dst: string, out: Spending[], fee: bigint, setcode: boolean, signkey: string, signing_box_handle: number): DebotActivity {
    return {
        type: 'Transaction',
        msg,
        dst,
        out,
        fee,
        setcode,
        signkey,
        signing_box_handle,
    };
}

/**
 * [UNSTABLE](UNSTABLE.md) Describes how much funds will be debited from the target  contract balance as a result of the transaction.
 */
export type Spending = {

    /**
     * Amount of nanotokens that will be sent to `dst` address.
     */
    amount: bigint,

    /**
     * Destination address of recipient of funds.
     */
    dst: string
}

/**
 * [UNSTABLE](UNSTABLE.md) Parameters to init DeBot.
 */
export type ParamsOfInit = {

    /**
     * Debot smart contract address
     */
    address: string
}

/**
 * [UNSTABLE](UNSTABLE.md) Structure for storing debot handle returned from `init` function.
 */
export type RegisteredDebot = {

    /**
     * Debot handle which references an instance of debot engine.
     */
    debot_handle: DebotHandle,

    /**
     * Debot abi as json string.
     */
    debot_abi: string,

    /**
     * Debot metadata.
     */
    info: DebotInfo
}

/**
 * Print message to user.
 */
export type ParamsOfAppDebotBrowserLogVariant = {

    /**
     * A string that must be printed to user.
     */
    msg: string
}

/**
 * Switch debot to another context (menu).
 */
export type ParamsOfAppDebotBrowserSwitchVariant = {

    /**
     * Debot context ID to which debot is switched.
     */
    context_id: number
}

/**
 * Notify browser that all context actions are shown.
 */
export type ParamsOfAppDebotBrowserSwitchCompletedVariant = {

}

/**
 * Show action to the user. Called after `switch` for each action in context.
 */
export type ParamsOfAppDebotBrowserShowActionVariant = {

    /**
     * Debot action that must be shown to user as menu item. At least `description` property must be shown from [DebotAction] structure.
     */
    action: DebotAction
}

/**
 * Request user input.
 */
export type ParamsOfAppDebotBrowserInputVariant = {

    /**
     * A prompt string that must be printed to user before input request.
     */
    prompt: string
}

/**
 * Get signing box to sign data.
 * 
 * @remarks
 * Signing box returned is owned and disposed by debot engine
 */
export type ParamsOfAppDebotBrowserGetSigningBoxVariant = {

}

/**
 * Execute action of another debot.
 */
export type ParamsOfAppDebotBrowserInvokeDebotVariant = {

    /**
     * Address of debot in blockchain.
     */
    debot_addr: string,

    /**
     * Debot action to execute.
     */
    action: DebotAction
}

/**
 * Used by Debot to call DInterface implemented by Debot Browser.
 */
export type ParamsOfAppDebotBrowserSendVariant = {

    /**
     * Internal message to DInterface address.
     * 
     * @remarks
     * Message body contains interface function and parameters.
     */
    message: string
}

/**
 * Requests permission from DeBot Browser to execute DeBot operation.
 */
export type ParamsOfAppDebotBrowserApproveVariant = {

    /**
     * DeBot activity details.
     */
    activity: DebotActivity
}

/**
 * [UNSTABLE](UNSTABLE.md) Debot Browser callbacks
 * 
 * @remarks
 * Called by debot engine to communicate with debot browser.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Log`
 * 
 * Print message to user.
 * 
 * ### `Switch`
 * 
 * Switch debot to another context (menu).
 * 
 * ### `SwitchCompleted`
 * 
 * Notify browser that all context actions are shown.
 * 
 * ### `ShowAction`
 * 
 * Show action to the user. Called after `switch` for each action in context.
 * 
 * ### `Input`
 * 
 * Request user input.
 * 
 * ### `GetSigningBox`
 * 
 * Get signing box to sign data.
 * 
 * ### `InvokeDebot`
 * 
 * Execute action of another debot.
 * 
 * ### `Send`
 * 
 * Used by Debot to call DInterface implemented by Debot Browser.
 * 
 * ### `Approve`
 * 
 * Requests permission from DeBot Browser to execute DeBot operation.
 */
export type ParamsOfAppDebotBrowser = ({
    type: 'Log'
} & ParamsOfAppDebotBrowserLogVariant) | ({
    type: 'Switch'
} & ParamsOfAppDebotBrowserSwitchVariant) | ({
    type: 'SwitchCompleted'
} & ParamsOfAppDebotBrowserSwitchCompletedVariant) | ({
    type: 'ShowAction'
} & ParamsOfAppDebotBrowserShowActionVariant) | ({
    type: 'Input'
} & ParamsOfAppDebotBrowserInputVariant) | ({
    type: 'GetSigningBox'
} & ParamsOfAppDebotBrowserGetSigningBoxVariant) | ({
    type: 'InvokeDebot'
} & ParamsOfAppDebotBrowserInvokeDebotVariant) | ({
    type: 'Send'
} & ParamsOfAppDebotBrowserSendVariant) | ({
    type: 'Approve'
} & ParamsOfAppDebotBrowserApproveVariant)

export function paramsOfAppDebotBrowserLog(msg: string): ParamsOfAppDebotBrowser {
    return {
        type: 'Log',
        msg,
    };
}

export function paramsOfAppDebotBrowserSwitch(context_id: number): ParamsOfAppDebotBrowser {
    return {
        type: 'Switch',
        context_id,
    };
}

export function paramsOfAppDebotBrowserSwitchCompleted(): ParamsOfAppDebotBrowser {
    return {
        type: 'SwitchCompleted',
    };
}

export function paramsOfAppDebotBrowserShowAction(action: DebotAction): ParamsOfAppDebotBrowser {
    return {
        type: 'ShowAction',
        action,
    };
}

export function paramsOfAppDebotBrowserInput(prompt: string): ParamsOfAppDebotBrowser {
    return {
        type: 'Input',
        prompt,
    };
}

export function paramsOfAppDebotBrowserGetSigningBox(): ParamsOfAppDebotBrowser {
    return {
        type: 'GetSigningBox',
    };
}

export function paramsOfAppDebotBrowserInvokeDebot(debot_addr: string, action: DebotAction): ParamsOfAppDebotBrowser {
    return {
        type: 'InvokeDebot',
        debot_addr,
        action,
    };
}

export function paramsOfAppDebotBrowserSend(message: string): ParamsOfAppDebotBrowser {
    return {
        type: 'Send',
        message,
    };
}

export function paramsOfAppDebotBrowserApprove(activity: DebotActivity): ParamsOfAppDebotBrowser {
    return {
        type: 'Approve',
        activity,
    };
}

/**
 * Result of user input.
 */
export type ResultOfAppDebotBrowserInputVariant = {

    /**
     * String entered by user.
     */
    value: string
}

/**
 * Result of getting signing box.
 */
export type ResultOfAppDebotBrowserGetSigningBoxVariant = {

    /**
     * Signing box for signing data requested by debot engine.
     * 
     * @remarks
     * Signing box is owned and disposed by debot engine
     */
    signing_box: SigningBoxHandle
}

/**
 * Result of debot invoking.
 */
export type ResultOfAppDebotBrowserInvokeDebotVariant = {

}

/**
 * Result of `approve` callback.
 */
export type ResultOfAppDebotBrowserApproveVariant = {

    /**
     * Indicates whether the DeBot is allowed to perform the specified operation.
     */
    approved: boolean
}

/**
 * [UNSTABLE](UNSTABLE.md) Returning values from Debot Browser callbacks.
 * 
 * Depends on `type` field.
 * 
 * 
 * ### `Input`
 * 
 * Result of user input.
 * 
 * ### `GetSigningBox`
 * 
 * Result of getting signing box.
 * 
 * ### `InvokeDebot`
 * 
 * Result of debot invoking.
 * 
 * ### `Approve`
 * 
 * Result of `approve` callback.
 */
export type ResultOfAppDebotBrowser = ({
    type: 'Input'
} & ResultOfAppDebotBrowserInputVariant) | ({
    type: 'GetSigningBox'
} & ResultOfAppDebotBrowserGetSigningBoxVariant) | ({
    type: 'InvokeDebot'
} & ResultOfAppDebotBrowserInvokeDebotVariant) | ({
    type: 'Approve'
} & ResultOfAppDebotBrowserApproveVariant)

export function resultOfAppDebotBrowserInput(value: string): ResultOfAppDebotBrowser {
    return {
        type: 'Input',
        value,
    };
}

export function resultOfAppDebotBrowserGetSigningBox(signing_box: SigningBoxHandle): ResultOfAppDebotBrowser {
    return {
        type: 'GetSigningBox',
        signing_box,
    };
}

export function resultOfAppDebotBrowserInvokeDebot(): ResultOfAppDebotBrowser {
    return {
        type: 'InvokeDebot',
    };
}

export function resultOfAppDebotBrowserApprove(approved: boolean): ResultOfAppDebotBrowser {
    return {
        type: 'Approve',
        approved,
    };
}

/**
 * [UNSTABLE](UNSTABLE.md) Parameters to start DeBot. DeBot must be already initialized with init() function.
 */
export type ParamsOfStart = {

    /**
     * Debot handle which references an instance of debot engine.
     */
    debot_handle: DebotHandle
}

/**
 * [UNSTABLE](UNSTABLE.md) Parameters to fetch DeBot metadata.
 */
export type ParamsOfFetch = {

    /**
     * Debot smart contract address.
     */
    address: string
}

/**
 * [UNSTABLE](UNSTABLE.md)
 */
export type ResultOfFetch = {

    /**
     * Debot metadata.
     */
    info: DebotInfo
}

/**
 * [UNSTABLE](UNSTABLE.md) Parameters for executing debot action.
 */
export type ParamsOfExecute = {

    /**
     * Debot handle which references an instance of debot engine.
     */
    debot_handle: DebotHandle,

    /**
     * Debot Action that must be executed.
     */
    action: DebotAction
}

/**
 * [UNSTABLE](UNSTABLE.md) Parameters of `send` function.
 */
export type ParamsOfSend = {

    /**
     * Debot handle which references an instance of debot engine.
     */
    debot_handle: DebotHandle,

    /**
     * BOC of internal message to debot encoded in base64 format.
     */
    message: string
}

/**
 * [UNSTABLE](UNSTABLE.md)
 */
export type ParamsOfRemove = {

    /**
     * Debot handle which references an instance of debot engine.
     */
    debot_handle: DebotHandle
}

export interface AppDebotBrowser {
    log(params: ParamsOfAppDebotBrowserLogVariant): void,
    switch(params: ParamsOfAppDebotBrowserSwitchVariant): void,
    switch_completed(): void,
    show_action(params: ParamsOfAppDebotBrowserShowActionVariant): void,
    input(params: ParamsOfAppDebotBrowserInputVariant): Promise<ResultOfAppDebotBrowserInputVariant>,
    get_signing_box(): Promise<ResultOfAppDebotBrowserGetSigningBoxVariant>,
    invoke_debot(params: ParamsOfAppDebotBrowserInvokeDebotVariant): Promise<void>,
    send(params: ParamsOfAppDebotBrowserSendVariant): void,
    approve(params: ParamsOfAppDebotBrowserApproveVariant): Promise<ResultOfAppDebotBrowserApproveVariant>,
}

async function dispatchAppDebotBrowser(obj: AppDebotBrowser, params: ParamsOfAppDebotBrowser, app_request_id: number | null, client: IClient) {
    try {
        let result = {};
        switch (params.type) {
            case 'Log':
                obj.log(params);
                break;
            case 'Switch':
                obj.switch(params);
                break;
            case 'SwitchCompleted':
                obj.switch_completed();
                break;
            case 'ShowAction':
                obj.show_action(params);
                break;
            case 'Input':
                result = await obj.input(params);
                break;
            case 'GetSigningBox':
                result = await obj.get_signing_box();
                break;
            case 'InvokeDebot':
                await obj.invoke_debot(params);
                break;
            case 'Send':
                obj.send(params);
                break;
            case 'Approve':
                result = await obj.approve(params);
                break;
        }
        client.resolve_app_request(app_request_id, { type: params.type, ...result });
    }
    catch (error) {
        client.reject_app_request(app_request_id, error);
    }
}
/**
 * [UNSTABLE](UNSTABLE.md) Module for working with debot.
 */
export class DebotModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * [UNSTABLE](UNSTABLE.md) Creates and instance of DeBot.
     * 
     * @remarks
     * Downloads debot smart contract (code and data) from blockchain and creates
     * an instance of Debot Engine for it.
     * 
     * # Remarks
     * It does not switch debot to context 0. Browser Callbacks are not called.
     * 
     * @param {ParamsOfInit} params
     * @returns RegisteredDebot
     */
    init(params: ParamsOfInit, obj: AppDebotBrowser): Promise<RegisteredDebot> {
        return this.client.request('debot.init', params, (params: any, responseType: number) => {
            if (responseType === 3) {
                dispatchAppDebotBrowser(obj, params.request_data, params.app_request_id, this.client);
            } else if (responseType === 4) {
                dispatchAppDebotBrowser(obj, params, null, this.client);
            }
        });
    }

    /**
     * [UNSTABLE](UNSTABLE.md) Starts the DeBot.
     * 
     * @remarks
     * Downloads debot smart contract from blockchain and switches it to
     * context zero.
     * 
     * This function must be used by Debot Browser to start a dialog with debot.
     * While the function is executing, several Browser Callbacks can be called,
     * since the debot tries to display all actions from the context 0 to the user.
     * 
     * When the debot starts SDK registers `BrowserCallbacks` AppObject.
     * Therefore when `debote.remove` is called the debot is being deleted and the callback is called
     * with `finish`=`true` which indicates that it will never be used again.
     * 
     * @param {ParamsOfStart} params
     * @returns 
     */
    start(params: ParamsOfStart): Promise<void> {
        return this.client.request('debot.start', params);
    }

    /**
     * [UNSTABLE](UNSTABLE.md) Fetches DeBot metadata from blockchain.
     * 
     * @remarks
     * Downloads DeBot from blockchain and creates and fetches its metadata.
     * 
     * @param {ParamsOfFetch} params
     * @returns ResultOfFetch
     */
    fetch(params: ParamsOfFetch): Promise<ResultOfFetch> {
        return this.client.request('debot.fetch', params);
    }

    /**
     * [UNSTABLE](UNSTABLE.md) Executes debot action.
     * 
     * @remarks
     * Calls debot engine referenced by debot handle to execute input action.
     * Calls Debot Browser Callbacks if needed.
     * 
     * # Remarks
     * Chain of actions can be executed if input action generates a list of subactions.
     * 
     * @param {ParamsOfExecute} params
     * @returns 
     */
    execute(params: ParamsOfExecute): Promise<void> {
        return this.client.request('debot.execute', params);
    }

    /**
     * [UNSTABLE](UNSTABLE.md) Sends message to Debot.
     * 
     * @remarks
     * Used by Debot Browser to send response on Dinterface call or from other Debots.
     * 
     * @param {ParamsOfSend} params
     * @returns 
     */
    send(params: ParamsOfSend): Promise<void> {
        return this.client.request('debot.send', params);
    }

    /**
     * [UNSTABLE](UNSTABLE.md) Destroys debot handle.
     * 
     * @remarks
     * Removes handle from Client Context and drops debot engine referenced by that handle.
     * 
     * @param {ParamsOfRemove} params
     * @returns 
     */
    remove(params: ParamsOfRemove): Promise<void> {
        return this.client.request('debot.remove', params);
    }
}

// proofs module


export enum ProofsErrorCode {
    InvalidData = 901,
    ProofCheckFailed = 902,
    InternalError = 903,
    DataDiffersFromProven = 904
}

export type ParamsOfProofBlockData = {

    /**
     * Single block's data, retrieved from TONOS API, that needs proof. Required fields are `id` and/or top-level `boc` (for block identification), others are optional.
     */
    block: any
}

export type ParamsOfProofTransactionData = {

    /**
     * Single transaction's data as queried from DApp server, without modifications. The required fields are `id` and/or top-level `boc`, others are optional. In order to reduce network requests count, it is recommended to provide `block_id` and `boc` of transaction.
     */
    transaction: any
}

export type ParamsOfProofMessageData = {

    /**
     * Single message's data as queried from DApp server, without modifications. The required fields are `id` and/or top-level `boc`, others are optional. In order to reduce network requests count, it is recommended to provide at least `boc` of message and non-null `src_transaction.id` or `dst_transaction.id`.
     */
    message: any
}

/**
 * [UNSTABLE](UNSTABLE.md) Module for proving data, retrieved from TONOS API.
 */
export class ProofsModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Proves that a given block's data, which is queried from TONOS API, can be trusted.
     * 
     * @remarks
     * This function checks block proofs and compares given data with the proven.
     * If the given data differs from the proven, the exception will be thrown.
     * The input param is a single block's JSON object, which was queried from DApp server using
     * functions such as `net.query`, `net.query_collection` or `net.wait_for_collection`.
     * If block's BOC is not provided in the JSON, it will be queried from DApp server
     * (in this case it is required to provide at least `id` of block).
     * 
     * Please note, that joins (like `signatures` in `Block`) are separated entities and not supported,
     * so function will throw an exception in a case if JSON being checked has such entities in it.
     * 
     * If `cache_in_local_storage` in config is set to `true` (default), downloaded proofs and
     * master-chain BOCs are saved into the persistent local storage (e.g. file system for native
     * environments or browser's IndexedDB for the web); otherwise all the data is cached only in
     * memory in current client's context and will be lost after destruction of the client.
     * 
     * **Why Proofs are needed**
     * 
     * Proofs are needed to ensure that the data downloaded from a DApp server is real blockchain
     * data. Checking proofs can protect from the malicious DApp server which can potentially provide
     * fake data, or also from "Man in the Middle" attacks class.
     * 
     * **What Proofs are**
     * 
     * Simply, proof is a list of signatures of validators', which have signed this particular master-
     * block.
     * 
     * The very first validator set's public keys are included in the zero-state. Whe know a root hash
     * of the zero-state, because it is stored in the network configuration file, it is our authority
     * root. For proving zero-state it is enough to calculate and compare its root hash.
     * 
     * In each new validator cycle the validator set is changed. The new one is stored in a key-block,
     * which is signed by the validator set, which we already trust, the next validator set will be
     * stored to the new key-block and signed by the current validator set, and so on.
     * 
     * In order to prove any block in the master-chain we need to check, that it has been signed by
     * a trusted validator set. So we need to check all key-blocks' proofs, started from the zero-state
     * and until the block, which we want to prove. But it can take a lot of time and traffic to
     * download and prove all key-blocks on a client. For solving this, special trusted blocks are used
     * in Ever-SDK.
     * 
     * The trusted block is the authority root, as well, as the zero-state. Each trusted block is the
     * `id` (e.g. `root_hash`) of the already proven key-block. There can be plenty of trusted
     * blocks, so there can be a lot of authority roots. The hashes of trusted blocks for MainNet
     * and DevNet are hardcoded in SDK in a separated binary file (trusted_key_blocks.bin) and is
     * being updated for each release by using `update_trusted_blocks` utility.
     * 
     * See [update_trusted_blocks](../../../tools/update_trusted_blocks) directory for more info.
     * 
     * In future SDK releases, one will also be able to provide their hashes of trusted blocks for
     * other networks, besides for MainNet and DevNet.
     * By using trusted key-blocks, in order to prove any block, we can prove chain of key-blocks to
     * the closest previous trusted key-block, not only to the zero-state.
     * 
     * But shard-blocks don't have proofs on DApp server. In this case, in order to prove any shard-
     * block data, we search for a corresponding master-block, which contains the root hash of this
     * shard-block, or some shard block which is linked to that block in shard-chain. After proving
     * this master-block, we traverse through each link and calculate and compare hashes with links,
     * one-by-one. After that we can ensure that this shard-block has also been proven.
     * 
     * @param {ParamsOfProofBlockData} params
     * @returns 
     */
    proof_block_data(params: ParamsOfProofBlockData): Promise<void> {
        return this.client.request('proofs.proof_block_data', params);
    }

    /**
     * Proves that a given transaction's data, which is queried from TONOS API, can be trusted.
     * 
     * @remarks
     * This function requests the corresponding block, checks block proofs, ensures that given
     * transaction exists in the proven block and compares given data with the proven.
     * If the given data differs from the proven, the exception will be thrown.
     * The input parameter is a single transaction's JSON object (see params description),
     * which was queried from TONOS API using functions such as `net.query`, `net.query_collection`
     * or `net.wait_for_collection`.
     * 
     * If transaction's BOC and/or `block_id` are not provided in the JSON, they will be queried from
     * TONOS API.
     * 
     * Please note, that joins (like `account`, `in_message`, `out_messages`, etc. in `Transaction`
     * entity) are separated entities and not supported, so function will throw an exception in a case
     * if JSON being checked has such entities in it.
     * 
     * For more information about proofs checking, see description of `proof_block_data` function.
     * 
     * @param {ParamsOfProofTransactionData} params
     * @returns 
     */
    proof_transaction_data(params: ParamsOfProofTransactionData): Promise<void> {
        return this.client.request('proofs.proof_transaction_data', params);
    }

    /**
     * Proves that a given message's data, which is queried from TONOS API, can be trusted.
     * 
     * @remarks
     * This function first proves the corresponding transaction, ensures that the proven transaction
     * refers to the given message and compares given data with the proven.
     * If the given data differs from the proven, the exception will be thrown.
     * The input parameter is a single message's JSON object (see params description),
     * which was queried from TONOS API using functions such as `net.query`, `net.query_collection`
     * or `net.wait_for_collection`.
     * 
     * If message's BOC and/or non-null `src_transaction.id` or `dst_transaction.id` are not provided
     * in the JSON, they will be queried from TONOS API.
     * 
     * Please note, that joins (like `block`, `dst_account`, `dst_transaction`, `src_account`,
     * `src_transaction`, etc. in `Message` entity) are separated entities and not supported,
     * so function will throw an exception in a case if JSON being checked has such entities in it.
     * 
     * For more information about proofs checking, see description of `proof_block_data` function.
     * 
     * @param {ParamsOfProofMessageData} params
     * @returns 
     */
    proof_message_data(params: ParamsOfProofMessageData): Promise<void> {
        return this.client.request('proofs.proof_message_data', params);
    }
}


