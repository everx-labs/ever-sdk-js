interface IClient {
    request(
        functionName: string,
        functionParams: any,
        responseHandler: (params: any, responseType: number) => void
    ): Promise<any>;
}

export class TonNetModule {
    client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }
}
