// @flow
import { TONClient } from '../TONClient';
import TONConfigModule from './TONConfigModule';
import type { TONKeyPairData } from './TONCryptoModule';
import { TONModule } from '../TONModule';
import TONQueriesModule from './TONQueriesModule';

export type TONContractABIParameter = {
    name: string,
    type: string,
}

export type TONContractABIFunction = {
    name: string,
    signed?: boolean,
    inputs: TONContractABIParameter[],
    outputs: TONContractABIParameter[],
};

export type TONContractABI = {
    'ABI version': number,
    functions: TONContractABIFunction[],
};

export type TONContractPackage = {
    abi: TONContractABI,
    imageBase64: string,
}

type TONContractLoadParams = {
    address: string,
    includeImage: boolean,
}

type TONContractLoadResult = {
    id: ?string,
    balanceGrams: ?string,
    imageBase64: ?string,
}

type TONContractDeployParams = {
    package: TONContractPackage,
    constructorParams: any,
    keyPair: TONKeyPairData,
}

type TONContractDeployResult = {
    address: string,
    alreadyDeployed: boolean,
}

type TONContractRunParams = {
    address: string,
    abi: TONContractABI,
    functionName: string,
    input: any,
    keyPair: TONKeyPairData,
}

type TONContractLocalRunParams = {
    address: string,
    abi: TONContractABI,
    functionName: string,
    input: any,
    keyPair?: TONKeyPairData,
}

type TONContractDecodeRunOutputParams = {
    abi: TONContractABI,
    functionName: string,
    bodyBase64: string,
}

type TONContractDecodeUnknownRunParams = {
    abi: TONContractABI,
    bodyBase64: string,
}

type TONContractRunResult = {
    output: any,
}

type TONContractUnknownRunResult = {
    function: string,
    output: any,
}

type TONContractSendGramsParams = {
    fromAccount: string,
    toAccount: string,
    amount: number,
}

type TONContractMessage = {
    messageId: string,
    messageIdBase64: string,
    messageBodyBase64: string,
}

type TONContractDeployMessage = {
    address: string,
    messageId: string,
    messageIdBase64: string,
    messageBodyBase64: string,
}

type QTransaction = {
    id: string,
    description: {
        Ordinary: {
            aborted: boolean,
        }
    },
    status: string,
    out_msgs: string[],
}

type QAddrStd = {
    AddrStd: {
        workchain_id: number,
        address: string,
    }
}

type QAddr = 'AddrNone' | QAddrStd


type QMessage = {
    id: string,
    header: {
        ExtOutMsgInfo?: {
            src: QAddr,
            dst: QAddr,
            created_at: number,
        },
    },
    body: string,
    status: string,
}

export default class TONContractsModule extends TONModule {
    config: TONConfigModule;

    queries: TONQueriesModule;

    async setup(): Promise<*> {
        this.config = this.context.getModule(TONConfigModule);
        this.queries = this.context.getModule(TONQueriesModule);
    }

    async load(params: TONContractLoadParams): Promise<TONContractLoadResult> {
        const accounts: ?{
            storage: {
                balance: {
                    Grams: string
                }
            }
        }[] = await this.queries.accounts.query({
            id: { eq: params.address },
        }, 'storage { balance { Grams } }');
        if (accounts && accounts.length > 0) {
            return {
                id: params.address,
                balanceGrams: accounts[0].storage.balance.Grams,
                imageBase64: null,
            };
        }
        return {
            id: null,
            balanceGrams: null,
            imageBase64: null,
        };
    }


    async deploy(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        return this.deploy_js(params);
    }


    async run(params: TONContractRunParams): Promise<TONContractRunResult> {
        return this.run_js(params);
    }

    async run_local(params: TONContractLocalRunParams): Promise<TONContractRunResult> {

        return this.run_local_js(params);
    }

    async create_deploy_message(params: TONContractDeployParams): Promise<TONContractDeployMessage> {
        return this.requestLibrary('contracts.deploy.message', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
        });
    }


    async create_run_message(params: TONContractRunParams): Promise<TONContractMessage> {
        return this.requestLibrary('contracts.run.message', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }

    async send_grams(params: TONContractSendGramsParams): Promise<void> {
        const message = await this.create_send_grams_message(params);
        const transaction = await this.process_message(
            message,
            'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary{ aborted } } }',
        );
        if (transaction.description.Ordinary.aborted) {
            throw {
                code: 'ContractsSendGramsFailed',
                message: 'Send Grams Failed',
            };
        }
    }

    async create_send_grams_message(params: TONContractSendGramsParams): Promise<TONContractMessage> {
        return this.requestLibrary('contracts.send.grams.message', params);
    }

    async decode_run_output(params: TONContractDecodeRunOutputParams): Promise<TONContractRunResult> {
        return this.requestLibrary('contracts.run.output', params);
    }

    async decode_unknown_run_input(params: TONContractDecodeUnknownRunParams): Promise<TONContractUnknownRunResult> {
        return this.requestLibrary('contracts.run.unknown.input', params);
    }

    async process_message(
        params: TONContractMessage,
        resultFields: string,
    ): Promise<QTransaction> {
        const { clientPlatform } = TONClient;
        if (!clientPlatform) {
            throw {
                code: 'ClientDoesNotConfigured',
                message: 'TON Client SDK does not configured',
            };
        }
        const { fetch } = clientPlatform;
        const url = this.config.requestsUrl();
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({
                records: [{ key: params.messageIdBase64, value: params.messageBodyBase64 }],
            }),
        });
        if (response.status !== 200) {
            throw {
                code: 'ContractsPostMessageFailed',
                message: `Post message failed: ${await response.text()}`,
            };
        }
        return await this.queries.transactions.waitFor({
            id: { eq: params.messageId },
            status: { in: ['Preliminary', 'Proposed', 'Finalized'] },
        }, resultFields);
    }

    async deploy_native(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        return this.requestLibrary('contracts.deploy', {
            abi: params.package.abi,
            constructorParams: params.constructorParams,
            imageBase64: params.package.imageBase64,
            keyPair: params.keyPair,
        });
    }


    async run_native(params: TONContractRunParams): Promise<TONContractRunResult> {
        return await this.requestLibrary('contracts.run', {
            address: params.address,
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }

    async deploy_js(params: TONContractDeployParams): Promise<TONContractDeployResult> {
        const message = await this.create_deploy_message(params);
        await this.send_grams({
            fromAccount: '',
            toAccount: message.address,
            amount: 1000000000,
        });
        const transaction = await this.process_message(
            message,
            'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }',
        );
        const ordinary = transaction.description.Ordinary;
        if (ordinary.aborted) {
            throw {
                code: 3050,
                message: `Deploy failed`,
            };
        }
        return {
            address: message.address,
            alreadyDeployed: false,
        };
    }


    async run_js(params: TONContractRunParams): Promise<TONContractRunResult> {
        const message = await this.create_run_message(params);
        const transaction = await this.process_message(
            message,
            'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } } out_msgs',
        );
        const ordinary = transaction.description.Ordinary;
        if (ordinary.aborted) {
            throw {
                code: 3040,
                message: 'Run failed',
            };
        }
        const outputMessageIds = transaction.out_msgs;
        if (!outputMessageIds || outputMessageIds.length === 0) {
            return { output: null };
        }
        const outputMessages: QMessage[] = await Promise.all(outputMessageIds.map(id => {
            return this.queries.messages.waitFor({
                id: { eq: id },
                status: { in: ['Preliminary', 'Proposed', 'Finalized'] },
            }, 'body header { ...on MessageHeaderExtOutMsgInfoVariant { ExtOutMsgInfo { created_at } } }');
        }));
        const externalMessage = outputMessages.find((x: QMessage) => x.header && x.header.ExtOutMsgInfo);
        if (!externalMessage) {
            return { output: null };
        }
        return this.decode_run_output({
            abi: params.abi,
            functionName: params.functionName,
            bodyBase64: externalMessage.body,
        });
    }

    async run_local_js(params: TONContractLocalRunParams): Promise<TONContractRunResult> {
        const accounts = await TONClient.shared.queries.select(
            "RETURN DOCUMENT(\"accounts/" + params.address + "\")", {});

        return this.requestLibrary('contracts.run.local', {
            address: params.address,
            account: accounts[0],
            abi: params.abi,
            functionName: params.functionName,
            input: params.input,
            keyPair: params.keyPair,
        });
    }
}

TONContractsModule.moduleName = 'TONContractsModule';
