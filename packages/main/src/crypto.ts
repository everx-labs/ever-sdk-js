import {ResponseHandler} from "./bin";

interface IClient {
    request(functionName: string, functionParams: any, responseHandler?: ResponseHandler): Promise<any>;
}

export class TonCryptoModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
}
