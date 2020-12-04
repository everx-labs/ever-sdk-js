import type { TONInputMessage, TONMessageProcessingState } from '../types';

export type TONErrorData = {
    core_version: string;
    config_server: string;
    query_url: string;
    [string]: any;
}

export const emptyTONErrorData: TONErrorData = {
    core_version: '',
    config_server: '',
    query_url: '',
};

export const TONErrorSource = {
    CLIENT: 'client',
    NODE: 'node',
};

export const TONErrorCode = {
    CLIENT_IS_NOT_SETUP: 1000,
    SEND_NODE_REQUEST_FAILED: 1001,
    MESSAGE_ALREADY_EXPIRED: 1001,
    RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
    WAIT_FOR_TIMEOUT: 1003,
    INTERNAL_ERROR: 1004,
    QUERY_FAILED: 1005,
    MESSAGE_EXPIRED: 1006,
    SERVER_DOESNT_SUPPORT_AGGREGATIONS: 1007,
    INVALID_CONS: 1008,
    ADDRESS_REQUIRED_FOR_RUN_LOCAL: 1009,
    NETWORK_SILENT: 1010,
    TRANSACTION_LAG: 1011,
    TRANSACTION_WAIT_TIMEOUT: 1012,
    CLOCK_OUT_OF_SYNC: 1013,
    ACCOUNT_MISSING: 1014,
    ACCOUNT_CODE_MISSING: 1015,
    ACCOUNT_BALANCE_TOO_LOW: 1016,
    ACCOUNT_FROZEN_OR_DELETED: 1017,

    // Crypto

    SIGNING_SOURCE_IS_NOT_SPECIFIED: 2021,
    INVALID_CRYPTO_BOX_PARAMS: 2030,

    // Contracts

    CONTRACT_EXECUTION_FAILED: 3025,

    // Queries

    QUERY_FORCIBLY_ABORTED: 4005,
};

export const TONContractExitCode = {
    REPLAY_PROTECTION: 52,
    MESSAGE_EXPIRED: 57,
    NO_GAS: 13,
};

export class TONClientError {
    static source = TONErrorSource;
    static code = TONErrorCode;

    message: string;
    source: string;
    code: number;
    data: TONErrorData;

    constructor(
        code: number,
        message: string,
        data: TONErrorData,
        source?: string,
    ) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.source = source || TONErrorSource.CLIENT;
    }

    // Testers

    static isClientError(error: any, code: number): boolean {
        return (error.source === TONErrorSource.CLIENT)
            && (error.code === code);
    }

    static isNodeError(error: any, code: number): boolean {
        return (error.source === TONErrorSource.NODE)
            && (error.code === code);
    }

    static isContractError(error: any, exitCode: number): boolean {
        return (error.source === TONErrorSource.NODE)
            && (error.code === TONErrorCode.CONTRACT_EXECUTION_FAILED)
            && (error.data && error.data.exit_code === exitCode);
    }

    static isOriginalContractError(error: any, exitCode: number): boolean {
        return TONClientError.isContractError(error, exitCode)
            && (!error.data?.original_error);
    }

    static isResolvedContractErrorAfterExpire(error: any, exitCode: number): boolean {
        return TONClientError.isContractError(error, exitCode)
            && (error.data && error.data.original_error
                && TONClientError.isMessageExpired(error.data.original_error));
    }

    static isMessageExpired(error: any): boolean {
        return TONClientError.isClientError(error, TONErrorCode.MESSAGE_EXPIRED);
    }

    static isWaitForTimeout(error: any): boolean {
        return TONClientError.isClientError(error, TONErrorCode.WAIT_FOR_TIMEOUT);
    }

    // Builders

    static internalError(
        message: string,
        data: TONErrorData,
    ): TONClientError {
        return new TONClientError(
            TONErrorCode.INTERNAL_ERROR,
            `Internal error: ${message}`,
            data,
        );
    }

    static invalidCons(data: TONErrorData): TONClientError {
        return new TONClientError(
            TONErrorCode.INVALID_CONS,
            'Invalid CONS structure. Each CONS item must contains of two elements.',
            data,
        );
    }

    static sendNodeRequestFailed(
        responseText: string,
        data: TONErrorData,
    ): TONClientError {
        return new TONClientError(
            TONErrorCode.SEND_NODE_REQUEST_FAILED,
            `Send node request failed: ${responseText}`,
            data,
        );
    }

    static runLocalAccountDoesNotExists(
        functionName: string,
        address: string,
        data: TONErrorData,
    ): TONClientError {
        return new TONClientError(
            TONErrorCode.RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS,
            `[${functionName}] run local failed: account [${address}] does not exists`,
            data,
        );
    }

    static waitForTimeout(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.WAIT_FOR_TIMEOUT,
            'Wait for operation rejected on timeout',
            data,
        );
    }

    static queryFailed(
        errors: Error[],
        data: TONErrorData,
    ) {
        return new TONClientError(
            TONErrorCode.QUERY_FAILED,
            `Query failed: ${errors.map(x => x.message || x.toString()).join('\n')}`,
            data,
        );
    }

    static formatTime(time: ?number): ?string {
        if (time) {
            return `${new Date(time * 1000).toISOString()} (${time})`;
        }
        return null;
    }

    static messageExpired(
        data: TONErrorData & {
            message_id: string,
            sending_time: number,
            expire?: number,
            block_time?: number,
            block_id?: string,
        },
    ) {
        return new TONClientError(
            TONErrorCode.MESSAGE_EXPIRED,
            'Message expired',
            {
                ...data,
                sending_time: TONClientError.formatTime(data.sending_time),
                expiration_time: TONClientError.formatTime(data.expire),
                block_time: TONClientError.formatTime(data.block_time),
            },
            TONErrorSource.CLIENT,
        );
    }

    static serverDoesntSupportAggregations(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.SERVER_DOESNT_SUPPORT_AGGREGATIONS,
            'Server doesn\'t support aggregations',
            data,
        );
    }

    static addressRequiredForRunLocal(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.ADDRESS_REQUIRED_FOR_RUN_LOCAL,
            'Address required for run local. You haven\'t specified contract code or data '
            + 'so address is required to load missing parts from network.',
            data,
        );
    }

    static networkSilent(
        data: TONErrorData & {
            message_id: string,
            sending_time: number,
            expire: number,
            timeout: number,
            block_id?: string,
            message_processing_state?: TONMessageProcessingState,
        },
    ) {
        return new TONClientError(
            TONErrorCode.NETWORK_SILENT,
            'Network silent: no blocks produced during timeout.',
            {
                ...data,
                sending_time: TONClientError.formatTime(data.sending_time),
                expiration_time: TONClientError.formatTime(data.expire),
            },
        );
    }

    static transactionWaitTimeout(
        data: TONErrorData & {
            message_id: string,
            sending_time: number,
            timeout: number,
            message_processing_state?: TONMessageProcessingState,
        },
    ) {
        return new TONClientError(
            TONErrorCode.TRANSACTION_WAIT_TIMEOUT,
            'Transaction did not produced during specified timeout',
            {
                ...data,
                sending_time: TONClientError.formatTime(data.sending_time),
            },
        );
    }

    static clockOutOfSync(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.CLOCK_OUT_OF_SYNC,
            'You local clock is out of sync with the server time. '
            + 'It is a critical condition for sending messages to the blockchain. '
            + 'Please sync you clock with the internet time.',
            data,
        );
    }

    static accountMissing(
        address: string,
        data: TONErrorData,
    ) {
        return new TONClientError(
            TONErrorCode.ACCOUNT_MISSING,
            `Account with address [${address}] doesn't exists. `
            + 'You have to prepaid this account to have a positive balance on them and then deploy '
            + 'a contract code for this account.'
            + 'See SDK documentation for detailed instructions.',
            data,
        );
    }

    static accountCodeMissing(
        address: string,
        balance: string,
        data: TONErrorData,
    ) {
        return new TONClientError(
            TONErrorCode.ACCOUNT_CODE_MISSING,
            `Account with address [${address}] exists but haven't a contract code yet. `
            + 'You have to ensure that an account has an enough balance for deploying '
            + 'a contract code and then deploy a contract code for this account. '
            + `Current account balance is [${balance}]. `
            + 'See SDK documentation for detailed instructions.',
            data,
        );
    }

    static accountBalanceTooLow(
        address: string,
        balance: string,
        data: TONErrorData,
    ) {
        return new TONClientError(
            TONErrorCode.ACCOUNT_BALANCE_TOO_LOW,
            `Account with address [${address}] has too low balance [${balance}]. `
            + 'You have to send some value to account balance from other contract '
            + '(e.g. Wallet contract). '
            + 'See SDK documentation for detailed instructions.',
            data,
        );
    }

    static noBlocks(
        workchain: number,
        data: TONErrorData,
    ) {
        const workchainName = workchain === -1 ? 'masterchain' : `workchain ${workchain}`;
        return new TONClientError(
            TONErrorCode.NETWORK_SILENT,
            `"No blocks for ${workchainName} found".`,
            data,
        );
    }

    static invalidBlockchain(
        message: string,
        data: TONErrorData,
    ) {
        return new TONClientError(TONErrorCode.NETWORK_SILENT, message, data);
    }

    static queryForciblyAborted(data: TONErrorData) {
        return new TONClientError(
            TONErrorCode.QUERY_FORCIBLY_ABORTED,
            'GraphQL query was forcibly aborted on timeout.',
            data,
        );
    }

    static signingSourceIsNotSpecified() {
        return new TONClientError(
            'You must provide signing keys or signing box to sign you message.',
            TONErrorCode.SIGNING_SOURCE_IS_NOT_SPECIFIED,
        );
    }

    static invalidCryptoBoxParams(encryptedSeedPhrase: TONInputMessage) {
        return new TONClientError(
            'You must provide a valid encrypted seed phrase to create a core crypto box. '
            + `Provided phrase is: ${JSON.stringify(encryptedSeedPhrase)}.`,
            TONErrorCode.INVALID_CRYPTO_BOX_PARAMS,
        );
    }

    static clientIsNotSetup() {
        return new TONClientError(
            TONErrorCode.CLIENT_IS_NOT_SETUP,
            'TON Client Library isn\'t set up properly',
            emptyTONErrorData,
        );
    }
}
