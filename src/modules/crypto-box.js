// @flow

import type {
    TONCrypto,
    TONCryptoBox,
    TONCryptoBoxParams,
    TONEncryptionAlgorithm,
    TONEncryptionBox,
    TONInputMessage,
    TONKeyPairData,
    TONMnemonicDictionaryType,
    TONMnemonicWordCountType,
    TONOutputEncodingType,
    TONSigningBox,
} from '../../types';

export function decodeMessage(message: TONInputMessage): Buffer {
    if (message.base64) {
        return Buffer.from(message.base64, 'base64');
    }
    if (message.hex) {
        return Buffer.from(message.hex, 'hex');
    }
    return Buffer.from(message.text || '', 'utf8');
}


export function encodeOutput(buffer: Buffer, encoding: TONOutputEncodingType): string {
    switch (encoding) {
    case 'Base64':
        return buffer.toString('base64');
    case 'Hex':
        return buffer.toString('hex');
    case 'HexUppercase':
        return buffer.toString('hex').toUpperCase();
    default:
        return buffer.toString('utf8');
    }
}

const notImplemented = new Error('Not implemented');


class CoreSigningBox implements TONSigningBox {
    cryptoBox: CoreCryptoBox;
    hdPath: string;
    publicKey: ?string;

    constructor(cryptoBox: CoreCryptoBox, hdPath: string) {
        this.cryptoBox = cryptoBox;
        this.hdPath = hdPath;
        this.publicKey = null;
    }

    async getPublicKey(): Promise<string> {
        if (!this.publicKey) {
            this.publicKey = (await this.cryptoBox.getSignKeys(this.hdPath)).public;
        }
        return this.publicKey;
    }

    async sign(message: TONInputMessage, outputEncoding: TONOutputEncodingType): Promise<string> {
        const keys = await this.cryptoBox.getSignKeys(this.hdPath);
        return this.cryptoBox.crypto.naclSignDetached(message, `${keys.secret}${keys.public}`, outputEncoding);
    }
}


class CoreEncryptionBox implements TONEncryptionBox {
    // eslint-disable-next-line class-methods-use-this
    getPublicKey(): Promise<string> {
        throw notImplemented;
    }

    // eslint-disable-next-line class-methods-use-this,no-unused-vars
    encrypt(message: TONInputMessage, outputEncoding: TONOutputEncodingType): Promise<string> {
        throw notImplemented;
    }

    // eslint-disable-next-line class-methods-use-this,no-unused-vars
    decrypt(message: TONInputMessage, outputEncoding: TONOutputEncodingType): Promise<string> {
        throw notImplemented;
    }
}


export const DEFAULT_MNEMONIC_DICTIONARY = 1;
export const DEFAULT_MNEMONIC_WORD_COUNT = 12;
export const DEFAULT_HD_PATH = 'm/44\'/396\'/0\'/0/0';

function resolveHDPath(path?: string): string {
    if (path === null || typeof path === 'undefined') {
        return DEFAULT_HD_PATH;
    }
    return path || 'm';
}

export class CoreCryptoBox implements TONCryptoBox {
    crypto: TONCrypto;
    encryptedSeedPhrase: TONInputMessage;
    seedPhraseEncryptionBox: TONEncryptionBox;
    seedPhraseDictionary: TONMnemonicDictionaryType;
    seedPhraseWordCount: TONMnemonicWordCountType;

    signingBoxes: Map<string, CoreSigningBox>;
    encryptionBoxes: Map<string, CoreEncryptionBox>;

    constructor(crypto: TONCrypto, params: TONCryptoBoxParams) {
        this.crypto = crypto;
        this.encryptedSeedPhrase = params.encryptedSeedPhrase;
        this.seedPhraseEncryptionBox = params.seedPhraseEncryptionBox;
        this.seedPhraseDictionary = params.seedPhraseDictionary || DEFAULT_MNEMONIC_DICTIONARY;
        this.seedPhraseWordCount = params.seedPhraseWordCount || DEFAULT_MNEMONIC_WORD_COUNT;
        this.signingBoxes = new Map();
        this.encryptionBoxes = new Map();
    }

    async getSigningBox(params?: { hdPath?: string }): Promise<TONSigningBox> {
        const hdPath = resolveHDPath(params?.hdPath);
        let signingBox = this.signingBoxes.get(hdPath);
        if (!signingBox) {
            signingBox = new CoreSigningBox(this, hdPath);
            this.signingBoxes.set(hdPath, signingBox);
        }
        return signingBox;
    }

    // eslint-disable-next-line class-methods-use-this,no-unused-vars
    getEncryptionBox(params: {
        hdPath?: string,
        algorithm: TONEncryptionAlgorithm,
        algorithmOptions: { [string]: any },
    }): Promise<TONEncryptionBox> {
        throw notImplemented;
    }

    close(): Promise<void> {
        this.signingBoxes.clear();
        this.encryptionBoxes.clear();
        return Promise.resolve();
    }

    // Internals

    async getSignKeys(hdPath: string): Promise<TONKeyPairData> {
        return this.crypto.mnemonicDeriveSignKeys({
            phrase: await this.seedPhraseEncryptionBox.decrypt(this.encryptedSeedPhrase, 'Text'),
            path: hdPath,
            dictionary: this.seedPhraseDictionary,
            wordCount: this.seedPhraseWordCount,
        });
    }
}
