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
/* eslint-disable class-methods-use-this,prefer-object-spread */

import type {
    TONFactorizeResult,
    TONInputMessage,
    TONKeyPairData,
    TONOutputEncodingType,
    TONScryptParams,
    TONNaclBoxParams,
    TONNaclSecretBoxParams,
    TONMnemonicWordsParams,
    TONMnemonicFromRandomParams,
    TONMnemonicFromEntropyParams,
    TONMnemonicIsValidParams,
    TONMnemonicDeriveSignKeysParams,
    TONCrypto,
    TONHDKeyFromMnemonicParams,
} from "../../types";
import { TONModule } from '../TONModule';

export const TONOutputEncoding = {
    Text: 'Text',
    Hex: 'Hex',
    HexUppercase: 'HexUppercase',
    Base64: 'Base64',
};


export const TONMnemonicDictionary = {
    TON: 0,
    ENGLISH: 1,
    CHINESE_SIMPLIFIED: 2,
    CHINESE_TRADITIONAL: 3,
    FRENCH: 4,
    ITALIAN: 5,
    JAPANESE: 6,
    KOREAN: 7,
    SPANISH: 8,
};


function fixInputMessage(message: TONInputMessage): TONInputMessage {
    return message.text
        ? {
            base64: Buffer.from(message.text, 'utf8')
                .toString('base64'),
        }
        : message;
}

export default class TONCryptoModule extends TONModule implements TONCrypto {
    async factorize(challengeHex: string): Promise<TONFactorizeResult> {
        return this.requestCore('crypto.math.factorize', challengeHex);
    }

    async modularPower(
        baseHex: string,
        exponentHex: string,
        modulusHex: string,
    ): Promise<string> {
        return this.requestCore('crypto.math.modularPower', {
            base: baseHex,
            exponent: exponentHex,
            modulus: modulusHex,
        });
    }

    async randomGenerateBytes(
        length: number,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestCore('crypto.random.generateBytes', {
            length,
            outputEncoding,
        });
    }


    async ed25519Keypair(): Promise<TONKeyPairData> {
        return this.requestCore('crypto.ed25519.keypair');
    }

    async publicKeyToString(key: string): Promise<string> {
        return this.requestCore('crypto.ton_public_key_string', key);
    }

    async sha512(
        message: TONInputMessage,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestCore(
            'crypto.sha512',
            {
                message: fixInputMessage(message),
                outputEncoding,
            },
        );
    }

    async sha256(
        message: TONInputMessage,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestCore(
            'crypto.sha256',
            {
                message: fixInputMessage(message),
                outputEncoding,
            },
        );
    }

    async scrypt(params: TONScryptParams): Promise<string> {
        const fixed: TONScryptParams = (Object.assign({}, params): any);
        fixed.password = fixInputMessage(params.password);
        fixed.salt = fixInputMessage(params.salt);
        return this.requestCore('crypto.scrypt', fixed);
    }

    async naclBoxKeypair(): Promise<TONKeyPairData> {
        return this.requestCore('crypto.nacl.box.keypair');
    }

    async naclBoxKeypairFromSecretKey(secretKey: string): Promise<TONKeyPairData> {
        return this.requestCore('crypto.nacl.box.keypair.fromSecretKey', secretKey);
    }

    async naclSignKeypair(): Promise<TONKeyPairData> {
        return this.requestCore('crypto.nacl.sign.keypair');
    }

    async naclSignKeypairFromSecretKey(secretKey: string): Promise<TONKeyPairData> {
        return this.requestCore('crypto.nacl.sign.keypair.fromSecretKey', secretKey);
    }

    async naclBox(params: TONNaclBoxParams): Promise<string> {
        const fixed: TONNaclBoxParams = (Object.assign({}, params): any);
        fixed.message = fixInputMessage(params.message);
        return this.requestCore('crypto.nacl.box', fixed);
    }

    async naclBoxOpen(params: TONNaclBoxParams): Promise<string> {
        const fixed: TONNaclBoxParams = (Object.assign({}, params): any);
        fixed.message = fixInputMessage(params.message);
        return this.requestCore('crypto.nacl.box.open', fixed);
    }

    async naclSecretBox(params: TONNaclSecretBoxParams): Promise<string> {
        const fixed: TONNaclBoxParams = (Object.assign({}, params): any);
        fixed.message = fixInputMessage(params.message);
        return this.requestCore('crypto.nacl.secret.box', fixed);
    }

    async naclSecretBoxOpen(params: TONNaclSecretBoxParams): Promise<string> {
        const fixed: TONNaclBoxParams = (Object.assign({}, params): any);
        fixed.message = fixInputMessage(params.message);
        return this.requestCore('crypto.nacl.secret.box.open', fixed);
    }

    async naclSign(
        message: TONInputMessage,
        key: string,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestCore('crypto.nacl.sign', {
            message: fixInputMessage(message),
            key,
            outputEncoding,
        });
    }

    async naclSignOpen(
        message: TONInputMessage,
        key: string,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestCore('crypto.nacl.sign.open', {
            message: fixInputMessage(message),
            key,
            outputEncoding,
        });
    }

    async naclSignDetached(
        message: TONInputMessage,
        key: string,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestCore('crypto.nacl.sign.detached', {
            message: fixInputMessage(message),
            key,
            outputEncoding,
        });
    }

    // Mnemonic

    async mnemonicWords(params?: TONMnemonicWordsParams): Promise<string> {
        return this.requestCore('crypto.mnemonic.words', params || {});
    }

    async mnemonicFromRandom(params?: TONMnemonicFromRandomParams): Promise<string> {
        return this.requestCore('crypto.mnemonic.from.random', params || {});
    }

    async mnemonicFromEntropy(params: TONMnemonicFromEntropyParams): Promise<string> {
        return this.requestCore(
            'crypto.mnemonic.from.entropy',
            params,
        );
    }

    async mnemonicIsValid(params: TONMnemonicIsValidParams): Promise<boolean> {
        return this.requestCore('crypto.mnemonic.verify', params);
    }

    async mnemonicDeriveSignKeys(params: TONMnemonicDeriveSignKeysParams): Promise<TONKeyPairData> {
        return this.requestCore('crypto.mnemonic.derive.sign.keys', params);
    }

    // HDKeys

    async hdkeyXPrvFromMnemonic(params: TONHDKeyFromMnemonicParams): Promise<string> {
        return this.requestCore('crypto.hdkey.xprv.from.mnemonic', params);
    }

    async hdkeyXPrvDerive(
        serialized: string,
        index: number,
        hardened: boolean,
        compliant: boolean,
    ): Promise<string> {
        return this.requestCore(
            'crypto.hdkey.xprv.derive',
            {
                serialized,
                index,
                hardened,
                compliant,
            },
        );
    }

    async hdkeyXPrvDerivePath(
        serialized: string,
        path: string,
        compliant: boolean,
    ): Promise<string> {
        return this.requestCore(
            'crypto.hdkey.xprv.derive.path',
            {
                serialized,
                path,
                compliant,
            },
        );
    }

    async hdkeyXPrvSecret(serialized: string): Promise<string> {
        return this.requestCore('crypto.hdkey.xprv.secret', { serialized });
    }

    async hdkeyXPrvPublic(serialized: string): Promise<string> {
        return this.requestCore('crypto.hdkey.xprv.public', { serialized });
    }

}

TONCryptoModule.moduleName = 'TONCryptoModule';
