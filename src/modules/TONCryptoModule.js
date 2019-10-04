/*
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
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

import { TONModule } from '../TONModule';

export type TONKeyPairData = {
    secret: string,
    public: string,
}

export const TONOutputEncoding = {
    Text: 'Text',
    Hex: 'Hex',
    HexUppercase: 'HexUppercase',
    Base64: 'Base64',
};

export type TONOutputEncodingType = $Keys<typeof TONOutputEncoding>;

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

function fixInputMessage(message: TONInputMessage): TONInputMessage {
    return message.text
        ? {
            base64: Buffer.from(message.text, 'utf8')
                .toString('base64'),
        }
        : message;
}

export default class TONCryptoModule extends TONModule {
    async factorize(challengeHex: string): Promise<TONFactorizeResult> {
        return this.requestLibrary('crypto.math.factorize', challengeHex);
    }

    async modularPower(
        baseHex: string,
        exponentHex: string,
        modulusHex: string,
    ): Promise<string> {
        return this.requestLibrary('crypto.math.modularPower', {
            base: baseHex,
            exponent: exponentHex,
            modulus: modulusHex,
        });
    }

    async randomGenerateBytes(
        length: number,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestLibrary('crypto.random.generateBytes', {
            length,
            outputEncoding,
        });
    }


    async ed25519Keypair(): Promise<TONKeyPairData> {
        return this.requestLibrary('crypto.ed25519.keypair');
    }

    async sha512(
        message: TONInputMessage,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestLibrary(
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
        return this.requestLibrary(
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
        return this.requestLibrary('crypto.scrypt', fixed);
    }

    async naclBoxKeypair(): Promise<TONKeyPairData> {
        return this.requestLibrary('crypto.nacl.box.keypair');
    }

    async naclBoxKeypairFromSecretKey(secretKey: string): Promise<TONKeyPairData> {
        return this.requestLibrary('crypto.nacl.box.keypair.fromSecretKey', secretKey);
    }

    async naclSignKeypair(): Promise<TONKeyPairData> {
        return this.requestLibrary('crypto.nacl.sign.keypair');
    }

    async naclSignKeypairFromSecretKey(secretKey: string): Promise<TONKeyPairData> {
        return this.requestLibrary('crypto.nacl.sign.keypair.fromSecretKey', secretKey);
    }

    async naclBox(params: TONNaclBoxParams): Promise<string> {
        const fixed: TONNaclBoxParams = (Object.assign({}, params): any);
        fixed.message = fixInputMessage(params.message);
        return this.requestLibrary('crypto.nacl.box', fixed);
    }

    async naclBoxOpen(params: TONNaclBoxParams): Promise<string> {
        const fixed: TONNaclBoxParams = (Object.assign({}, params): any);
        fixed.message = fixInputMessage(params.message);
        return this.requestLibrary('crypto.nacl.box.open', fixed);
    }

    async naclSecretBox(params: TONNaclSecretBoxParams): Promise<string> {
        const fixed: TONNaclBoxParams = (Object.assign({}, params): any);
        fixed.message = fixInputMessage(params.message);
        return this.requestLibrary('crypto.nacl.secret.box', fixed);
    }

    async naclSecretBoxOpen(params: TONNaclSecretBoxParams): Promise<string> {
        const fixed: TONNaclBoxParams = (Object.assign({}, params): any);
        fixed.message = fixInputMessage(params.message);
        return this.requestLibrary('crypto.nacl.secret.box.open', fixed);
    }

    async naclSign(
        message: TONInputMessage,
        key: string,
        outputEncoding: TONOutputEncodingType = TONOutputEncoding.Hex,
    ): Promise<string> {
        return this.requestLibrary('crypto.nacl.sign', {
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
        return this.requestLibrary('crypto.nacl.sign.open', {
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
        return this.requestLibrary('crypto.nacl.sign.detached', {
            message: fixInputMessage(message),
            key,
            outputEncoding,
        });
    }

    // Mnemonic

    async mnemonicWords(): Promise<string> {
        return this.requestLibrary('crypto.mnemonic.words');
    }

    async mnemonicFromRandom(): Promise<string> {
        return this.requestLibrary('crypto.mnemonic.from.random');
    }

    async mnemonicFromEntropy(entropyHex: string): Promise<string> {
        return this.requestLibrary(
            'crypto.mnemonic.from.entropy',
            { entropy: { hex: entropyHex } },
        );
    }

    async mnemonicIsValid(phrase: string): Promise<boolean> {
        return this.requestLibrary('crypto.mnemonic.verify', { phrase });
    }

    // HDKeys

    async hdkeyXPrvFromMnemonic(phrase: string): Promise<string> {
        return this.requestLibrary('crypto.hdkey.xprv.from.mnemonic', { phrase });
    }

    async hdkeyXPrvDerive(
        serialized: string,
        index: number,
        hardened: boolean,
        compliant: boolean,
    ): Promise<string> {
        return this.requestLibrary(
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
        return this.requestLibrary(
            'crypto.hdkey.xprv.derive.path',
            {
                serialized,
                path,
                compliant,
            },
        );
    }

    async hdkeyXPrvSecret(serialized: string): Promise<string> {
        return this.requestLibrary('crypto.hdkey.xprv.secret', { serialized });
    }

    async hdkeyXPrvPublic(serialized: string): Promise<string> {
        return this.requestLibrary('crypto.hdkey.xprv.public', { serialized });
    }

}

TONCryptoModule.moduleName = 'TONCryptoModule';
