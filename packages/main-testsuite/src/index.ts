import {
    abiSerialized,
    Account, ExecutionResult,
    KeyPair, signerKeys, signerNone,
    TonClient,
    ClientConfig,
} from '@ton-client/main';

const giver = {
    v1: {
        address: '0:841288ed3b55d9cdafa806807f02a0ae0c169aa5edfe88a789a6482429756a94',
        abi: abiSerialized({
            'ABI version': 1,
            'functions': [
                {
                    'name': 'constructor',
                    'inputs': [],
                    'outputs': [],
                },
                {
                    'name': 'sendGrams',
                    'inputs': [
                        {
                            'name': 'dest',
                            'type': 'address',
                        },
                        {
                            'name': 'amount',
                            'type': 'uint64',
                        },
                    ],
                    'outputs': [],
                },
            ],
            'events': [],
            'data': [],
        }),
    },
    v2: {
        abi: abiSerialized({
            'ABI version': 2,
            'header': ['time', 'expire'],
            'functions': [
                {
                    'name': 'upgrade',
                    'inputs': [
                        {'name': 'newcode', 'type': 'cell'},
                    ],
                    'outputs': [],
                },
                {
                    'name': 'sendTransaction',
                    'inputs': [
                        {'name': 'dest', 'type': 'address'},
                        {'name': 'value', 'type': 'uint128'},
                        {'name': 'bounce', 'type': 'bool'},
                    ],
                    'outputs': [],
                },
                {
                    'name': 'getMessages',
                    'inputs': [],
                    'outputs': [
                        {
                            'components': [{'name': 'hash', 'type': 'uint256'}, {
                                'name': 'expireAt',
                                'type': 'uint64',
                            }], 'name': 'messages', 'type': 'tuple[]',
                        },
                    ],
                },
                {
                    'name': 'constructor',
                    'inputs': [],
                    'outputs': [],
                },
            ],
            'events': [],
        }),
        tvc: 'te6ccgECGgEAA9sAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAfz/fyHtRNAg10nCAZ/T/9MA9AX4an/4Yfhm+GKOG/QFbfhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN4j+EL4RSBukjBw3rry4GUh0z/THzQx+CMhAb7yuSH5ACD4SoEBAPQOIJEx3rMLAE7y4Gb4ACH4SiIBVQHIyz9ZgQEA9EP4aiMEXwTTHwHwAfhHbpLyPN4CASASDQIBWBEOAQm46Jj8UA8B/vhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3tFwbW8C+EqBAQD0hpUB1ws/f5NwcHDikSCONyMjI28CbyLIIs8L/yHPCz8xMQFvIiGkA1mAIPRDbwI0IvhKgQEA9HyVAdcLP3+TcHBw4gI1MzHoXwPIghB3RMfighCAAAAAsc8LHyEQAKJvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZoEDmCLPMQG5lnHPQCHPF5Vxz0EhzeIgyXH7AFswwP+OEvhCyMv/+EbPCwD4SgH0AMntVN5/+GcAxbkWq+f/CC3Rxt2omgQa6ThAM/p/+mAegL8NT/8MPwzfDFHDfoCtvw1OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCNJeRnJuPwzcXwAaPwhZGX//CNnhYB8JQD6AGT2qj/8M8AIBIBUTAde7Fe+TX4QW6OEu1E0NP/0wD0Bfhqf/hh+Gb4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0SIiInPIcc8LASLPCgBzz0AkzxYj+gKAac9Acs9AIMki+wBfBfhKgQEA9IaVAdcLP3+TcHBw4pEggUAJKOLfgjIgG7n/hKIwEhAYEBAPRbMDH4at4i+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA18D+ELIy//4Rs8LAPhKAfQAye1Uf/hnAgEgFxYAx7jkYYdfCC3Rwl2omhp/+mAegL8NT/8MPwzfDFvamj8IXwikDdJGDhvXXlwMvwAfCFkZf/8I2eFgHwlAPoAZPaqfAeQfYIQaHaPdqn4ARh8IWRl//wjZ4WAfCUA+gBk9qo//DPACAtoZGAAtr4QsjL//hGzwsA+EoB9ADJ7VT4D/IAgAdacCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+S8jzhUxHAAJDgwQMighD////9vLGS8jzgAfAB+EdukvI83o',
    },
};

const giverRequestAmount = 500_000_000;

export class Giver {
    readonly account: Account;
    readonly useNodeSE: boolean;
    readonly deployedAccounts: Account[] = [];
    
    constructor(account: Account, useNodeSE: boolean) {
        this.account = account;
        this.useNodeSE = useNodeSE;
    }
    
    static async create(client: TonClient, useNodeSE: boolean, keys?: KeyPair) {
        let account: Account;
        if (useNodeSE) {
            account = new Account(client, giver.v1.abi, giver.v1.address, signerNone());
        } else {
            account = new Account(client, giver.v2.abi, '', signerKeys(keys ?? {
                secret: '2245e4f44af8af6bbd15c4a53eb67a8f211d541ddc7c197f74d7830dba6d27fe',
                public: 'd542f44146f169c6726c8cf70e4cbb3d33d8d842a4afd799ac122c5808d81ba3',
            }));
            await account.setDeployAddress(giver.v2.tvc);
        }
        return new Giver(account, useNodeSE);
    }
    
    async check(): Promise<void> {
        const accounts = (await this.account.client.net.query_collection({
            collection: 'accounts',
            filter: {
                id: {eq: this.account.address},
            },
            result: 'acc_type balance',
        })).result;
        
        if (accounts.length === 0) {
            throw `Giver wallet does not exist. Send some grams to ${this.account.address}`;
        }
        const account = accounts[0];
        if (!account.balance || Number(account.balance) < giverRequestAmount) {
            throw `Giver has no money. Send some grams to ${this.account.address}`;
        }
        
        if (account.acc_type !== 1) {
            await this.account.deployOnNetwork(giver.v2.tvc);
        }
    }
    
    async sendGramsTo(account: string, amount: number = giverRequestAmount): Promise<void> {
        let result: ExecutionResult;
        if (this.useNodeSE) {
            result = await this.account.callOnNetwork('sendGrams', {
                dest: account,
                amount,
            });
        } else {
            await this.check();
            result = await this.account.callOnNetwork('sendTransaction', {
                dest: account,
                value: amount,
                bounce: false,
            });
        }
        for (const boc of result.messages) {
            const msg = (await this.account.client.boc.parse_message({boc})).parsed;
            if (msg.body_type === 0) {
                await this.account.client.net.wait_for_collection({
                    collection: 'transactions',
                    filter: {
                        in_msg: {eq: msg.id},
                    },
                    result: 'lt',
                });
            }
        }
    }
    
    async deploy(
        account: Account,
        tvc: string,
        constructorName?: string,
        constructorInput?: any,
    ): Promise<void> {
        await account.setDeployAddress(tvc, constructorName, constructorInput);
        await this.sendGramsTo(account.address, giverRequestAmount);
        this.deployedAccounts.push(account);
        await account.deployOnNetwork(tvc, constructorName, constructorInput);
    }
    
    static createMock(): Giver {
        return new Giver(new Account(
            new TonClient(),
            abiSerialized(giver.v2.abi),
            '',
            signerNone(),
        ), false);
    }
}

export const ABIVersions = [1, 2];
export type TestOptions = {
    useNodeSE: boolean,
    config: ClientConfig,
    giverKeys?: KeyPair,
}

let testOptions: TestOptions = {
    useNodeSE: false,
    config: {
        network: {server_address: 'http://localhost:8080'},
    },
};

export function configure(options: TestOptions) {
    testOptions = options;
}

export async function init(): Promise<void> {
    tests.client = new TonClient(testOptions?.config);
    tests.giver = await Giver.create(tests.client, testOptions.useNodeSE, testOptions.giverKeys);
}

export async function done(): Promise<void> {
}

export const tests = {
    giver: Giver.createMock(),
    client: new TonClient(),
};
