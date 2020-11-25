import {TonClient} from "./client";
import {
    Abi, accountForExecutorAccount,
    ParamsOfEncodeMessage,
    ResultOfProcessMessage,
    ResultOfRunExecutor,
    Signer
} from "./modules";

export class Account {
    client: TonClient;
    abi: Abi;
    address: string;
    signer: Signer;
    private cachedBoc: string | null;

    constructor(client: TonClient, abi: Abi, address: string, signer: Signer) {
        this.client = client;
        this.abi = abi;
        this.address = address;
        this.signer = signer;
        this.cachedBoc = null;
    }

    private deployParams(tvc: string,
                         constructorName?: string,
                         constructorInput?: any,
    ): ParamsOfEncodeMessage {
        return {
            abi: this.abi, signer: this.signer, deploy_set: {
                tvc,
            }, call_set: constructorName ? {
                function_name: constructorName, input: constructorInput,
            } : undefined,
        };
    }

    async getDeployAddress(tvc: string, constructorName?: string, constructorInput?: any) {
        const deployParams = this.deployParams(tvc, constructorName, constructorInput);
        return (await this.client.abi.encode_message(deployParams)).address;
    }

    async setDeployAddress(tvc: string, constructorName?: string, constructorInput?: any) {
        this.address = await this.getDeployAddress(tvc, constructorName, constructorInput);
    }

    async deploy(tvc: string, constructorName?: string, constructorInput?: any) {
        const deployParams = this.deployParams(tvc, constructorName, constructorInput);
        this.address = (await this.client.abi.encode_message(deployParams)).address;
        await this.client.processing.process_message({
            message_encode_params: deployParams, send_events: false,
        });
    }

    async run(functionName: string, input: any): Promise<ResultOfProcessMessage> {
        return await this.client.processing.process_message({
            message_encode_params: {
                abi: this.abi, signer: this.signer, call_set: {
                    function_name: functionName, input,
                },
            }, send_events: false,
        });
    }

    async runLocal(functionName: string, input: any): Promise<ResultOfRunExecutor> {
        const message = await this.client.abi.encode_message({
            abi: this.abi, signer: this.signer, call_set: {
                function_name: functionName, input,
            },
        });
        const result = await this.client.tvm.run_executor({
            account: accountForExecutorAccount(await this.boc()),
            abi: this.abi,
            message: message.message,
        });
        if (result.account) {
            this.cachedBoc = result.account;
        }
        return result;
    }

    dropCachedData() {
        this.cachedBoc = null;
    }

    async boc(): Promise<string> {
        if (this.cachedBoc) {
            return this.cachedBoc;
        }
        const boc = (await this.client.net.wait_for_collection({
            collection: 'accounts', filter: {id: {eq: this.address}}, result: 'boc',
        })).result.boc;
        this.cachedBoc = boc;
        return boc;
    }

    async parsed(): Promise<any> {
        return (await this.client.boc.parse_account({
            boc: await this.boc(),
        })).parsed;
    }

}

