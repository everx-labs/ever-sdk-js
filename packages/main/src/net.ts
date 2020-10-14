import {ResponseHandler} from "./bin";

interface IClient {
    request(
        functionName: string,
        functionParams: any,
        responseHandler: ResponseHandler
    ): Promise<any>;
}

export class TonNetModule {
    client: IClient;
    
    constructor(client: IClient) {
        this.client = client;
    }
}
