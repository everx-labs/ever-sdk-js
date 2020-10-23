import {
    Abi,
    ExecutionMode,
    messageSourceEncodingParams,
    ParamsOfEncodeMessage,
    Signer,
    TonClient,
} from './index';

export type TvmCallOptions = {
    mode?: ExecutionMode,
}

export type ExecutionResult = {
    output: any,
    messages: any[],
};

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
    
    private deployParams(
        tvc: string,
        constructorName?: string,
        constructorInput?: any,
    ): ParamsOfEncodeMessage {
        return {
            abi: this.abi,
            signer: this.signer,
            deploy_set: {
                tvc,
            },
            call_set: constructorName
                ? {function_name: constructorName, input: constructorInput}
                : undefined,
        };
    }
    
    async getDeployAddress(tvc: string, constructorName?: string, constructorInput?: any) {
        const deployParams = this.deployParams(tvc, constructorName, constructorInput);
        return (await this.client.abi.encode_message(deployParams)).address;
    }
    
    async setDeployAddress(tvc: string, constructorName?: string, constructorInput?: any) {
        this.address = await this.getDeployAddress(tvc, constructorName, constructorInput);
    }
    
    async deployOnNetwork(tvc: string, constructorName?: string, constructorInput?: any) {
        const deployParams = this.deployParams(tvc, constructorName, constructorInput);
        this.address = (await this.client.abi.encode_message(deployParams)).address;
        await this.client.processing.process_message({
            message: {
                type: 'EncodingParams',
                ...deployParams,
            },
            send_events: false,
        });
    }
    
    dropCachedData() {
        this.cachedBoc = null;
    }
    
    async boc(): Promise<string> {
        if (this.cachedBoc) {
            return this.cachedBoc;
        }
        const boc = (await this.client.net.wait_for_collection({
            collection: 'accounts',
            filter: {id: {eq: this.address}},
            result: 'boc',
        })).result.boc;
        this.cachedBoc = boc;
        return boc;
    }
    
    async parsed(): Promise<any> {
        return (await this.client.boc.parse_account({
            boc: await this.boc(),
        })).parsed;
    }
    
    async execOnNet(functionName: string, input: any): Promise<ExecutionResult> {
        const result = await this.client.processing.process_message({
            message: messageSourceEncodingParams({
                abi: this.abi,
                signer: this.signer,
                call_set: {
                    function_name: functionName,
                    input,
                },
            }),
            send_events: false,
        });
        return {
            output: result.decoded?.output,
            messages: [],
        };
    }
    
    async execLocal(
        functionName: string,
        input: any,
        options?: TvmCallOptions,
    ): Promise<ExecutionResult> {
        const result = await this.client.tvm.execute_message({
            account: await this.boc(),
            mode: options?.mode ?? 'TvmOnly',
            message: {
                type: 'EncodingParams',
                abi: this.abi,
                signer: this.signer,
                call_set: {
                    function_name: functionName,
                    input,
                },
            },
        });
        if (result.account) {
            this.cachedBoc = result.account;
        }
        return {
            output: result.decoded?.output,
            messages: [],
        };
    }
}

