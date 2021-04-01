

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
    InternalError = 33
}

export type ClientError = {

    /**
     */
    code: number,

    /**
     */
    message: string,

    /**
     */
    data: any
}

export type ClientConfig = {

    /**
     */
    network?: NetworkConfig,

    /**
     */
    crypto?: CryptoConfig,

    /**
     */
    abi?: AbiConfig,

    /**
     */
    boc?: BocConfig
}

export type NetworkConfig = {

    /**
     * DApp Server public address. For instance, for `net.ton.dev/graphql` GraphQL endpoint the server address will be net.ton.dev
     */
    server_address?: string,

    /**
     * List of DApp Server addresses.
     * 
     * @remarks
     * Any correct URL format can be specified, including IP addresses This parameter is prevailing over `server_address`.
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
     * Maximum time for sequential reconnections in ms.
     * 
     * @remarks
     * Default value is 120000 (2 min)
     */
    max_reconnect_timeout?: number,

    /**
     * Deprecated
     */
    reconnect_timeout?: number,

    /**
     * The number of automatic message processing retries that SDK performs in case of `Message Expired (507)` error - but only for those messages which local emulation was successful or failed with replay protection error. The default value is 5.
     */
    message_retries_count?: number,

    /**
     * Timeout that is used to process message delivery for the contracts which ABI does not include "expire" header. If the message is not delivered within the specified timeout the appropriate error occurs.
     */
    message_processing_timeout?: number,

    /**
     * Maximum timeout that is used for query response. The default value is 40 sec.
     */
    wait_for_timeout?: number,

    /**
     * Maximum time difference between server and client.
     * 
     * @remarks
     * If client's device time is out of sync and difference is more than the threshold then error will occur. Also an error will occur if the specified threshold is more than
     * `message_processing_timeout/2`.
     * The default value is 15 sec.
     */
    out_of_sync_threshold?: number,

    /**
     * Access key to GraphQL API.
     * 
     * @remarks
     * At the moment is not used in production
     */
    access_key?: string
}

export type CryptoConfig = {

    /**
     * Mnemonic dictionary that will be used by default in crypto functions. If not specified, 1 dictionary will be used.
     */
    mnemonic_dictionary?: number,

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
     * Message lifetime for contracts which ABI includes "expire" header. The default value is 40 sec.
     */
    message_expiration_timeout?: number,

    /**
     * Factor that increases the expiration timeout for each retry The default value is 1.5
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

export type AppRequestResult = {
    type: 'Error'

    /**
     * Error description
     */
    text: string
} | {
    type: 'Ok'

    /**
     * Request processing result
     */
    result: any
}

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

    /**
     */
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
    InvalidSignature = 122
}

export type SigningBoxHandle = number

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
     * Signer's secret key - unprefixed 0-padded to 64 symbols hex string
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
     * Public key - unprefixed 0-padded to 64 symbols hex string
     */
    key: string
}

export type ParamsOfMnemonicWords = {

    /**
     * Dictionary identifier
     */
    dictionary?: number
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
    dictionary?: number,

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
    dictionary?: number,

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
    dictionary?: number,

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
    dictionary?: number,

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
    dictionary?: number,

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

export type RegisteredSigningBox = {

    /**
     * Handle of the signing box.
     */
    handle: SigningBoxHandle
}

export type ParamsOfAppSigningBox = {
    type: 'GetPublicKey'
} | {
    type: 'Sign'

    /**
     * Data to sign encoded as base64
     */
    unsigned: string
}

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

export type ResultOfAppSigningBox = {
    type: 'GetPublicKey'

    /**
     * Signing box public key
     */
    public_key: string
} | {
    type: 'Sign'

    /**
     * Data signature encoded as hex
     */
    signature: string
}

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

type ResultOfAppSigningBoxGetPublicKey = {
    public_key: string
}

type ParamsOfAppSigningBoxSign = {
    unsigned: string
}

type ResultOfAppSigningBoxSign = {
    signature: string
}

export interface AppSigningBox {
    get_public_key(): Promise<ResultOfAppSigningBoxGetPublicKey>,
    sign(params: ParamsOfAppSigningBoxSign): Promise<ResultOfAppSigningBoxSign>,
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
/**
 * Crypto functions.
 */
export class CryptoModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    /**
     * Performs prime factorization – decomposition of a composite number into a product of smaller prime integers (factors). See [https://en.wikipedia.org/wiki/Integer_factorization]
     * 
     * @param {ParamsOfFactorize} params
     * @returns ResultOfFactorize
     */
    factorize(params: ParamsOfFactorize): Promise<ResultOfFactorize> {
        return this.client.request('crypto.factorize', params);
    }

    /**
     * Performs modular exponentiation for big integers (`base`^`exponent` mod `modulus`). See [https://en.wikipedia.org/wiki/Modular_exponentiation]
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
     * Derives key from `password` and `key` using `scrypt` algorithm. See [https://en.wikipedia.org/wiki/Scrypt].
     * 
     * @remarks
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
     * The phrase supplied will be checked for word length and validated according to the checksum specified in BIP0039.
     * 
     * @param {ParamsOfMnemonicVerify} params
     * @returns ResultOfMnemonicVerify
     */
    mnemonic_verify(params: ParamsOfMnemonicVerify): Promise<ResultOfMnemonicVerify> {
        return this.client.request('crypto.mnemonic_verify', params);
    }

    /**
     * Validates the seed phrase, generates master key and then derives the key pair from the master key and the specified path
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
    InvalidFunctionId = 312
}

export type Abi = {
    type: 'Contract'

    /**
     */
    value: AbiContract
} | {
    type: 'Json'

    /**
     */
    value: string
} | {
    type: 'Handle'

    /**
     */
    value: AbiHandle
} | {
    type: 'Serialized'

    /**
     */
    value: AbiContract
}

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

export type FunctionHeader = {

    /**
     * Message expiration time in seconds. If not specified - calculated automatically from message_expiration_timeout(), try_index and message_expiration_timeout_grow_factor() (if ABI includes `expire` header).
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
     * Content of TVC file encoded in `base64`.
     */
    tvc: string,

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

export type Signer = {
    type: 'None'
} | {
    type: 'External'

    /**
     */
    public_key: string
} | {
    type: 'Keys'

    /**
     */
    keys: KeyPair
} | {
    type: 'SigningBox'

    /**
     */
    handle: SigningBoxHandle
}

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

export type StateInitSource = {
    type: 'Message'

    /**
     */
    source: MessageSource
} | {
    type: 'StateInit'

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
} | {
    type: 'Tvc'

    /**
     */
    tvc: string,

    /**
     */
    public_key?: string,

    /**
     */
    init_params?: StateInitParams
}

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

    /**
     */
    abi: Abi,

    /**
     */
    value: any
}

export type MessageSource = {
    type: 'Encoded'

    /**
     */
    message: string,

    /**
     */
    abi?: Abi
} | ({
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

    /**
     */
    name: string,

    /**
     */
    type: string,

    /**
     */
    components?: AbiParam[]
}

export type AbiEvent = {

    /**
     */
    name: string,

    /**
     */
    inputs: AbiParam[],

    /**
     */
    id?: string | null
}

export type AbiData = {

    /**
     */
    key: bigint,

    /**
     */
    name: string,

    /**
     */
    type: string,

    /**
     */
    components?: AbiParam[]
}

export type AbiFunction = {

    /**
     */
    name: string,

    /**
     */
    inputs: AbiParam[],

    /**
     */
    outputs: AbiParam[],

    /**
     */
    id?: string | null
}

export type AbiContract = {

    /**
     */
    'ABI version'?: number,

    /**
     */
    abi_version?: number,

    /**
     */
    header?: string[],

    /**
     */
    functions?: AbiFunction[],

    /**
     */
    events?: AbiEvent[],

    /**
     */
    data?: AbiData[]
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
    processing_try_index?: number
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

    /**
     */
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
    processing_try_index?: number
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
    message: string
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
    is_internal: boolean
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
}

// boc module


export type BocCacheType = {
    type: 'Pinned'

    /**
     */
    pin: string
} | {
    type: 'Unpinned'
}

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

export enum BocErrorCode {
    InvalidBoc = 201,
    SerializationError = 202,
    InappropriateBlock = 203,
    MissingSourceBoc = 204,
    InsufficientCacheSize = 205,
    BocRefNotFound = 206,
    InvalidBocRef = 207
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
     * Shardstate identificator
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
     * BOC encoded as base64
     */
    boc: string
}

export type ResultOfGetBocHash = {

    /**
     * BOC root hash encoded with hex
     */
    hash: string
}

export type ParamsOfGetCodeFromTvc = {

    /**
     * Contract TVC image encoded as base64
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

export type BuilderOp = {
    type: 'Integer'

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
} | {
    type: 'BitString'

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
} | {
    type: 'Cell'

    /**
     * Nested cell builder
     */
    builder: BuilderOp[]
} | {
    type: 'CellBoc'

    /**
     * Nested cell BOC encoded with `base64` or BOC cache key.
     */
    boc: string
}

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

/**
 * BOC manipulation module.
 */
export class BocModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
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
     * Save BOC into cache
     * 
     * @param {ParamsOfBocCacheSet} params
     * @returns ResultOfBocCacheSet
     */
    cache_set(params: ParamsOfBocCacheSet): Promise<ResultOfBocCacheSet> {
        return this.client.request('boc.cache_set', params);
    }

    /**
     * Unpin BOCs with specified pin.
     * 
     * @remarks
     * BOCs which don't have another pins will be removed from cache
     * 
     * @param {ParamsOfBocCacheUnpin} params
     * @returns 
     */
    cache_unpin(params: ParamsOfBocCacheUnpin): Promise<void> {
        return this.client.request('boc.cache_unpin', params);
    }

    /**
     * Encodes BOC from builder operations.
     * 
     * @param {ParamsOfEncodeBoc} params
     * @returns ResultOfEncodeBoc
     */
    encode_boc(params: ParamsOfEncodeBoc): Promise<ResultOfEncodeBoc> {
        return this.client.request('boc.encode_boc', params);
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
    ExternalSignerMustNotBeUsed = 513
}

export type ProcessingEvent = {
    type: 'WillFetchFirstBlock'
} | {
    type: 'FetchFirstBlockFailed'

    /**
     */
    error: ClientError
} | {
    type: 'WillSend'

    /**
     */
    shard_block_id: string,

    /**
     */
    message_id: string,

    /**
     */
    message: string
} | {
    type: 'DidSend'

    /**
     */
    shard_block_id: string,

    /**
     */
    message_id: string,

    /**
     */
    message: string
} | {
    type: 'SendFailed'

    /**
     */
    shard_block_id: string,

    /**
     */
    message_id: string,

    /**
     */
    message: string,

    /**
     */
    error: ClientError
} | {
    type: 'WillFetchNextBlock'

    /**
     */
    shard_block_id: string,

    /**
     */
    message_id: string,

    /**
     */
    message: string
} | {
    type: 'FetchNextBlockFailed'

    /**
     */
    shard_block_id: string,

    /**
     */
    message_id: string,

    /**
     */
    message: string,

    /**
     */
    error: ClientError
} | {
    type: 'MessageExpired'

    /**
     */
    message_id: string,

    /**
     */
    message: string,

    /**
     */
    error: ClientError
}

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
    shard_block_id: string
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
    send_events: boolean
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


export type AddressStringFormat = {
    type: 'AccountId'
} | {
    type: 'Hex'
} | {
    type: 'Base64'

    /**
     */
    url: boolean,

    /**
     */
    test: boolean,

    /**
     */
    bounce: boolean
}

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

export type ParamsOfCalcStorageFee = {

    /**
     */
    account: string,

    /**
     */
    period: number
}

export type ResultOfCalcStorageFee = {

    /**
     */
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
    ContractExecutionError = 414
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
    transaction_lt?: bigint
}

export type AccountForExecutor = {
    type: 'None'
} | {
    type: 'Uninit'
} | {
    type: 'Account'

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
     */
    in_msg_fwd_fee: bigint,

    /**
     */
    storage_fee: bigint,

    /**
     */
    gas_fee: bigint,

    /**
     */
    out_msgs_fwd_fee: bigint,

    /**
     */
    total_account_fees: bigint,

    /**
     */
    total_output: bigint
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

/**
 */
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
     * Can be used for contract debugginh, to find out the reason why message was not delivered successfully
     *  - because Validators just throw away the failed external inbound messages, here you can catch them.
     * 
     * Another use case is to estimate fees for message execution. Set  `AccountForExecutor::Account.unlimited_balance`
     * to `true` so that emulation will not depend on the actual balance.
     * 
     * One more use case - you can produce the sequence of operations,
     * thus emulating the multiple contract calls locally.
     * And so on.
     * 
     * To get the account BOC (bag of cells) - use `net.query` method to download it from GraphQL API
     * (field `boc` of `account`) or generate it with `abi.encode_account` method.
     * To get the message BOC - use `abi.encode_message` or prepare it any other way, for instance, with FIFT script.
     * 
     * If you need this emulation to be as precise as possible then specify `ParamsOfRunExecutor` parameter.
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
    NetworkModuleResumed = 614
}

export type OrderBy = {

    /**
     */
    path: string,

    /**
     */
    direction: SortDirection
}

export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export type ParamsOfQueryOperation = ({
    type: 'QueryCollection'
} & ParamsOfQueryCollection) | ({
    type: 'WaitForCollection'
} & ParamsOfWaitForCollection) | ({
    type: 'AggregateCollection'
} & ParamsOfAggregateCollection)

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
     * Collection filter.
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
     * Creates a subscription
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
    DebotOperationRejected = 812
}

export type DebotHandle = number

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
    key?: string,

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
    interfaces: string[]
}

export type DebotActivity = {
    type: 'Transaction'

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
    signkey: string
}

export function debotActivityTransaction(msg: string, dst: string, out: Spending[], fee: bigint, setcode: boolean, signkey: string): DebotActivity {
    return {
        type: 'Transaction',
        msg,
        dst,
        out,
        fee,
        setcode,
        signkey,
    };
}

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

export type ParamsOfInit = {

    /**
     * Debot smart contract address
     */
    address: string
}

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

export type ParamsOfAppDebotBrowser = {
    type: 'Log'

    /**
     * A string that must be printed to user.
     */
    msg: string
} | {
    type: 'Switch'

    /**
     * Debot context ID to which debot is switched.
     */
    context_id: number
} | {
    type: 'SwitchCompleted'
} | {
    type: 'ShowAction'

    /**
     * Debot action that must be shown to user as menu item. At least `description` property must be shown from [DebotAction] structure.
     */
    action: DebotAction
} | {
    type: 'Input'

    /**
     * A prompt string that must be printed to user before input request.
     */
    prompt: string
} | {
    type: 'GetSigningBox'
} | {
    type: 'InvokeDebot'

    /**
     * Address of debot in blockchain.
     */
    debot_addr: string,

    /**
     * Debot action to execute.
     */
    action: DebotAction
} | {
    type: 'Send'

    /**
     * Internal message to DInterface address.
     * 
     * @remarks
     * Message body contains interface function and parameters.
     */
    message: string
} | {
    type: 'Approve'

    /**
     * DeBot activity details.
     */
    activity: DebotActivity
}

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

export type ResultOfAppDebotBrowser = {
    type: 'Input'

    /**
     * String entered by user.
     */
    value: string
} | {
    type: 'GetSigningBox'

    /**
     * Signing box for signing data requested by debot engine.
     * 
     * @remarks
     * Signing box is owned and disposed by debot engine
     */
    signing_box: SigningBoxHandle
} | {
    type: 'InvokeDebot'
} | {
    type: 'Approve'

    /**
     * Indicates whether the DeBot is allowed to perform the specified operation.
     */
    approved: boolean
}

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

export type ParamsOfStart = {

    /**
     * Debot handle which references an instance of debot engine.
     */
    debot_handle: DebotHandle
}

export type ParamsOfFetch = {

    /**
     * Debot smart contract address.
     */
    address: string
}

export type ResultOfFetch = {

    /**
     * Debot metadata.
     */
    info: DebotInfo
}

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

export type ParamsOfRemove = {

    /**
     * Debot handle which references an instance of debot engine.
     */
    debot_handle: DebotHandle
}

type ParamsOfAppDebotBrowserLog = {
    msg: string
}

type ParamsOfAppDebotBrowserSwitch = {
    context_id: number
}

type ParamsOfAppDebotBrowserShowAction = {
    action: DebotAction
}

type ParamsOfAppDebotBrowserInput = {
    prompt: string
}

type ResultOfAppDebotBrowserInput = {
    value: string
}

type ResultOfAppDebotBrowserGetSigningBox = {
    signing_box: SigningBoxHandle
}

type ParamsOfAppDebotBrowserInvokeDebot = {
    debot_addr: string,
    action: DebotAction
}

type ParamsOfAppDebotBrowserSend = {
    message: string
}

type ParamsOfAppDebotBrowserApprove = {
    activity: DebotActivity
}

type ResultOfAppDebotBrowserApprove = {
    approved: boolean
}

export interface AppDebotBrowser {
    log(params: ParamsOfAppDebotBrowserLog): void,
    switch(params: ParamsOfAppDebotBrowserSwitch): void,
    switch_completed(): void,
    show_action(params: ParamsOfAppDebotBrowserShowAction): void,
    input(params: ParamsOfAppDebotBrowserInput): Promise<ResultOfAppDebotBrowserInput>,
    get_signing_box(): Promise<ResultOfAppDebotBrowserGetSigningBox>,
    invoke_debot(params: ParamsOfAppDebotBrowserInvokeDebot): Promise<void>,
    send(params: ParamsOfAppDebotBrowserSend): void,
    approve(params: ParamsOfAppDebotBrowserApprove): Promise<ResultOfAppDebotBrowserApprove>,
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


