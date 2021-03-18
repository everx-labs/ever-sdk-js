import {
    signerNone,
    accountForExecutorAccount,
    ParamsOfEncodeMessage,
    ResultOfProcessMessage,
    ResultOfRunExecutor,
    Signer,
    Abi,
    AbiContract,
    abiContract,
    KeyPair,
    signerKeys,
    TonClient,
    ResultOfSubscribeCollection,
} from "@tonclient/core";

/**
 * Options for an account instance
 */
export type AccountOptions = {
    /**
     * Initial data
     */
    initData?: object,
    /**
     * Default is `signerNone`
     */
    signer?: Signer,
    /**
     * If not specified will be calculated on contracts init state.
     */
    address?: string,
    /**
     * If not specified the Account.getDefaultClient() will be used.
     */
    client?: TonClient,
}

/**
 * Run options
 */
export type AccountRunOptions = {
    /**
     * Is not specified then this.signer
     */
    signer?: Signer,
}

/**
 * Run Local options
 */
export type AccountRunLocalOptions = {
    /**
     * If `true` then performs all checks and calculations as node do.
     * If `false` then simplified execution is used.
     */
    performAllChecks?: boolean,
}

/**
 * Object that can be used to send some value before
 * deploying account.
 */
export interface AccountGiver {
    address: string,

    sendTo(address: string, value: number): Promise<void>,
}

/**
 * Deploy options
 */
export type AccountDeployOptions = {
    /**
     * Function name that will be run on deploy. Special values:
     * - `undefined` (omitted): library will use `constructor` as a function name.
     * - `null`: library will not produce message body (no init function invocation).
     */
    initFunctionName?: string | null,
    /**
     * Parameters of init function.
     * Note: library ignores this parameter if `initFunctionName` is `null`.
     */
    initInput?: object,
    /**
     * Giver to be used to send amount of value to deploying address
     * before deploying.
     *
     * If `true` then Account.getDefaultGiver() will be used.
     * If omitted then application must prepay address
     * using own logic.
     */
    useGiver?: true | AccountGiver,
}

/**
 * Smart Contract
 *
 * This object contains information about smart contract class.
 */
export type Contract = {
    /**
     * ABI of smart contract
     */
    abi: AbiContract,
    /**
     * Compiled artifact of the smart contract.
     * This field contains BOC with code and initial data (init state).
     * If it is missing, then application can't deploy account of this contracts.
     */
    tvc?: string,
}

export class AccountError extends Error {
    static missingTVC(): AccountError {
        return new AccountError("Can't calculate deploy params: missing required TVC.");
    }
}

/**
 * Object to deal with specified account using specified signer (owner).
 *
 * Account instance can be bound to account address
 * or account deploy parameters that uniquely identifies
 * account address.
 */
export class Account {
    private static giversByClient: { client: TonClient, giver: AccountGiver }[] = [];

    /**
     * Returns the giver instance assigned for specified client instance.
     * Or `null` if no giver is associated with this client yet.
     *
     * @param client Client instance looking for.
     */
    static findGiverForClient(client: TonClient): AccountGiver | undefined {
        return this.giversByClient.find(x => x.client === client)?.giver;
    }

    /**
     * Assigns specified giver as a default for specified client instance.
     * If client already has default giver it will be reassigned.
     *
     * @param client Client instance.
     * @param giver New giver instance or `null` if the default giver for
     * this client must be removed.
     */
    static setGiverForClient(client: TonClient, giver: AccountGiver | null) {
        const i = this.giversByClient.findIndex(x => x.client === client);
        if (i >= 0) {
            if (giver) {
                this.giversByClient[i].giver = giver;
            } else {
                this.giversByClient.splice(i, 1);
            }
        } else if (giver) {
            this.giversByClient.push({
                client,
                giver,
            });
        }
    }

    private static async createGiver(client: TonClient): Promise<AccountGiver> {
        const giverKeys = await getDefaultGiverKeys(client);
        const giverAddress = await getDefaultGiverAddress(client, giverKeys);
        const giver = new Account(DefaultGiverContract, {
            client,
            address: giverAddress,
            signer: signerKeys(giverKeys),
        });
        return {
            address: giverAddress,
            sendTo: async (address, value) => {
                await giver.run("sendTransaction", {
                    dest: address,
                    value,
                    bounce: false,
                });
            },
        };
    }

    /**
     * Returns the default giver for specified client instance.
     * If no giver assigned yet then new one will be created,
     * assigned and returned.
     *
     * @param client Client instance.
     */
    static async getGiverForClient(client: TonClient): Promise<AccountGiver> {
        const existing = this.findGiverForClient(client);
        if (existing) {
            return existing;
        }
        const giver = await this.createGiver(client);
        this.giversByClient.push({
            client,
            giver,
        });
        return giver;
    }

    /**
     * Contract package used for this account.
     */
    readonly contract: Contract;
    /**
     * Client instance used to perform all account related tasks.
     */
    readonly client: TonClient;
    /**
     * Abi of this account.
     */
    readonly abi: Abi;
    /**
     * Signer used to sign messages addressed to this account.
     */
    readonly signer: Signer;
    /**
     * Initial data used to form the deploy parameter.
     */
    readonly initData: object | null;

    private address: string | null;
    private syncLastTransLt: string | null = null;
    private cachedBoc: string | null = null;
    private subscriptions: Map<string, ResultOfSubscribeCollection> | null = null;

    /**
     * Constructs account instance.
     *
     * @param contract Contract package containing abi and optional tvc data.
     * @param options Account instance options.
     */
    constructor(
        contract: Contract,
        options?: AccountOptions,
    ) {
        this.contract = contract;
        this.client = options?.client ?? TonClient.default;
        this.abi = abiContract(contract.abi);
        this.signer = options?.signer ?? signerNone();
        this.address = options?.address ?? null;
        this.initData = options?.initData ?? null;
    }

    /**
     * Returns address of the account.
     *
     * Uses address specified in constructor options
     * or calculates it from deploy data provided in constructor.
     */
    async getAddress(): Promise<string> {
        let address = this.address;
        if (address === null) {
            const deployParams = this.getParamsOfDeployMessage({
                initFunctionName: null,
            });
            address = (await this.client.abi.encode_message(deployParams)).address;
            this.address = address;
        }
        return address;
    }

    /**
     * Returns params for encoding deploy message.
     * @param options Message encoding options.
     */
    getParamsOfDeployMessage(
        options?: AccountDeployOptions,
    ): ParamsOfEncodeMessage {
        if (!this.contract.tvc) {
            throw AccountError.missingTVC();
        }
        const params: ParamsOfEncodeMessage = {
            abi: this.abi,
            signer: this.signer,
            deploy_set: {
                tvc: this.contract.tvc,
            },
        };
        if (this.initData) {
            (params.deploy_set as any).initial_data = this.initData;
        }
        if (options?.initFunctionName !== null) {
            params.call_set = {
                function_name: options?.initFunctionName ?? "constructor",
            };
            if (options?.initInput !== undefined) {
                params.call_set.input = options.initInput;

            }
        }
        return params;
    }

    /**
     * Deploys account into network
     * @param options
     */
    async deploy(options?: AccountDeployOptions): Promise<ResultOfProcessMessage> {
        const deployParams = this.getParamsOfDeployMessage(options);
        const useGiver = options?.useGiver;
        const giver = useGiver === true ? (await Account.getGiverForClient(this.client)) : useGiver;
        this.address = (await this.client.abi.encode_message(deployParams)).address;
        if (giver) {
            await giver.sendTo(this.address, 10_000_000_000);
        }
        const result = await this.client.processing.process_message({
            message_encode_params: deployParams,
            send_events: false,
        });
        this.needSyncWithTransaction(result.transaction);
        return result;
    }

    /**
     * Process message on network and returns detailed information
     * about results including produced transaction and messages.
     *
     * @param functionName Name of the function according to the ABI.
     * @param input Object with function parameters (function parameters).
     * @param options Run options.
     */
    async run(
        functionName: string,
        input: object,
        options?: AccountRunOptions,
    ): Promise<ResultOfProcessMessage> {
        const result = (await this.client.processing.process_message({
            message_encode_params: {
                address: await this.getAddress(),
                abi: this.abi,
                signer: options?.signer ?? this.signer,
                call_set: {
                    function_name: functionName,
                    input,
                },
            },
            send_events: false,
        }));
        this.needSyncWithTransaction(result.transaction);
        return result;
    }

    /**
     * Evaluates message on local TVM and returns decoded output.
     *
     * @param functionName Name of the function according to the ABI.
     * @param input Object with function parameters (function input).
     * @param options Run options.
     */
    async runLocal(
        functionName: string,
        input: object,
        options?: AccountRunLocalOptions,
    ): Promise<ResultOfRunExecutor> {
        const message = await this.client.abi.encode_message({
            address: await this.getAddress(),
            abi: this.abi,
            signer: this.signer,
            call_set: {
                function_name: functionName,
                input,
            },
        });
        let result;
        if (options?.performAllChecks) {
            result = await this.client.tvm.run_executor({
                account: accountForExecutorAccount(await this.boc()),
                abi: this.abi,
                message: message.message,
                return_updated_account: true,
            });
        } else {
            result = (await this.client.tvm.run_tvm({
                account: await this.boc(),
                abi: this.abi,
                message: message.message,
                return_updated_account: true,
            }) as ResultOfRunExecutor);
        }
        if (result.account) {
            this.cachedBoc = result.account;
        }
        return result;
    }

    private needSyncWithTransaction(transaction: any) {
        if (!transaction.aborted && transaction.lt) {
            this.syncLastTransLt = transaction.lt;
            this.cachedBoc = null;
        }
    }

    /**
     * Returns raw data of the account in form of BOC.
     * Fetches boc data from network and caches it in private field.
     * `runLocal` updates cached boc.
     * `run` drops cached boc.
     * This function syncs fetching boc with last `run` or `deploy`
     * so fetched boc
     */
    async boc(): Promise<string> {
        if (this.cachedBoc) {
            return this.cachedBoc;
        }
        const address = await this.getAddress();
        const net = this.client.net;
        if (this.syncLastTransLt) {
            const accounts = await net.query_collection({
                collection: "accounts",
                filter: {
                    id: {eq: address},
                    last_trans_lt: {ge: this.syncLastTransLt},
                },
                result: "boc",
            });
            if (accounts.result.length > 0) {
                const boc = accounts.result[0].boc;
                this.syncLastTransLt = null;
                this.cachedBoc = boc;
                return boc;
            }
        }
        const boc = (
            await net.wait_for_collection({
                collection: "accounts",
                filter: {id: {eq: this.address}},
                result: "boc",
                timeout: 1000,
            })
        ).result.boc;
        this.cachedBoc = boc;
        return boc;
    }

    /**
     * Drops all cached and local data.
     */
    refresh() {
        this.cachedBoc = null;
    }

    /**
     * Returns parsed data of the account.
     */
    async getAccount(): Promise<any> {
        return (
            await this.client.boc.parse_account({
                boc: await this.boc(),
            })
        ).parsed;
    }

    async subscribeAccount(fields: string, listener: (account: any) => void | Promise<void>) {
        await this.subscribe(
            "accounts",
            {id: {eq: await this.getAddress()}},
            fields,
            listener,
        );
    }

    async subscribeTransactions(fields: string, listener: (transaction: any) => void | Promise<void>) {
        const address = await this.getAddress();
        await this.subscribe(
            "transactions",
            {
                account_addr: {eq: address},
                status: {eq: 5},
            },
            fields,
            listener,
        );
    }

    async subscribeMessages(fields: string, listener: (message: any) => void | Promise<void>) {
        const address = await this.getAddress();
        await this.subscribe(
            "messages",
            {
                status: {eq: 5},
                src: {eq: address},
                OR: {
                    status: {eq: 5},
                    dst: {eq: address},
                },
            },
            fields,
            listener,
        );
    }

    async decodeMessage(message: string): Promise<any> {
        return await TonClient.default.abi.decode_message({
            abi: this.abi,
            message,
        });
    }

    async decodeMessageBody(body: string, isInternal: boolean) {
        return await TonClient.default.abi.decode_message_body({
            abi: this.abi,
            body,
            is_internal: isInternal,
        });
    }

    async getBalance(): Promise<string> {
        return (await this.getAccount()).balance;
    }

    async subscribe(collection: string, filter: any, fields: string, listener: (data: any) => void | Promise<void>) {
        const prevSubscription = this.subscriptions && this.subscriptions.get(collection);
        if (prevSubscription) {
            this.subscriptions?.delete(collection);
            await this.client.net.unsubscribe(prevSubscription);
        } else if (!this.subscriptions) {
            this.subscriptions = new Map();
        }
        const subscription = await this.client.net.subscribe_collection({
            collection,
            filter,
            result: fields,
        }, ((params, responseType) => {
            if (responseType === 100) {
                listener(params.result);
            }
        }));
        this.subscriptions?.set(collection, subscription);
    }

    /**
     * Free all internal resources related to this instance
     * and allocated inside core.
     *
     * It is a good practice to call this method when you have finished
     * with this Account object.
     *
     * Note that this instance still fully operable.
     * So you can continue to work with this instance.
     */
    async free(): Promise<void> {
        if (this.subscriptions) {
            const subscriptions = this.subscriptions.values();
            this.subscriptions = null;
            for (const subscription of subscriptions) {
                await this.client.net.unsubscribe(subscription);
            }
        }
    }
}

function getEnv(name: string): any {
    const globalEval = eval;
    try {
        return globalEval(`process.env.${name}`);
    } catch {
        return undefined;
    }
}

async function getDefaultGiverKeys(client: TonClient): Promise<KeyPair> {
    const definedSecret = getEnv("TON_GIVER_SECRET");
    if (definedSecret) {
        const definedKeys = await client.crypto.nacl_sign_keypair_from_secret_key({
            secret: definedSecret,
        });
        definedKeys.secret = definedKeys.secret.substr(0, 64);
        return definedKeys;
    }
    // noinspection SpellCheckingInspection
    return {
        "public": "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16",
        "secret": "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",
    };
}

async function getDefaultGiverAddress(client: TonClient, keys: KeyPair): Promise<string> {
    const definedAddress = getEnv("TON_GIVER_ADDRESS");
    if (definedAddress) {
        return definedAddress;
    }
    return (await client.abi.encode_message({
        abi: abiContract(DefaultGiverContract.abi),
        deploy_set: {
            tvc: DefaultGiverContract.tvc ?? "",
        },
        signer: signerKeys(keys),
    })).address;
}

// noinspection SpellCheckingInspection
export const DefaultGiverContract: Contract = {
    abi: {
        "ABI version": 2,
        header: ["time", "expire"],
        functions: [
            {
                name: "sendTransaction",
                inputs: [
                    {
                        "name": "dest",
                        "type": "address",
                    },
                    {
                        "name": "value",
                        "type": "uint128",
                    },
                    {
                        "name": "bounce",
                        "type": "bool",
                    },
                ],
                outputs: [],
            },
            {
                name: "getMessages",
                inputs: [],
                outputs: [
                    {
                        components: [
                            {
                                name: "hash",
                                type: "uint256",
                            },
                            {
                                name: "expireAt",
                                type: "uint64",
                            },
                        ],
                        name: "messages",
                        type: "tuple[]",
                    },
                ],
            },
            {
                name: "upgrade",
                inputs: [
                    {
                        name: "newcode",
                        type: "cell",
                    },
                ],
                outputs: [],
            },
            {
                name: "constructor",
                inputs: [],
                outputs: [],
            },
        ],
        data: [],
        events: [],
    },
    tvc: "te6ccgECGgEAA9sAAgE0BgEBAcACAgPPIAUDAQHeBAAD0CAAQdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIm/wD0pCAiwAGS9KDhiu1TWDD0oQkHAQr0pCD0oQgAAAIBIAwKAfz/fyHtRNAg10nCAZ/T/9MA9AX4an/4Yfhm+GKOG/QFbfhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN4j+EL4RSBukjBw3rry4GUh0z/THzQx+CMhAb7yuSH5ACD4SoEBAPQOIJEx3rMLAE7y4Gb4ACH4SiIBVQHIyz9ZgQEA9EP4aiMEXwTTHwHwAfhHbpLyPN4CASASDQIBWBEOAQm46Jj8UA8B/vhBbo4S7UTQ0//TAPQF+Gp/+GH4Zvhi3tFwbW8C+EqBAQD0hpUB1ws/f5NwcHDikSCONyMjI28CbyLIIs8L/yHPCz8xMQFvIiGkA1mAIPRDbwI0IvhKgQEA9HyVAdcLP3+TcHBw4gI1MzHoXwPIghB3RMfighCAAAAAsc8LHyEQAKJvIgLLH/QAyIJYYAAAAAAAAAAAAAAAAM8LZoEDmCLPMQG5lnHPQCHPF5Vxz0EhzeIgyXH7AFswwP+OEvhCyMv/+EbPCwD4SgH0AMntVN5/+GcAxbkWq+f/CC3Rxt2omgQa6ThAM/p/+mAegL8NT/8MPwzfDFHDfoCtvw1OADAIHoHeV7rhf/8MTh8Mbh8Mz/8MPFvfCNJeRnJuPwzcXwAaPwhZGX//CNnhYB8JQD6AGT2qj/8M8AIBIBUTAde7Fe+TX4QW6OEu1E0NP/0wD0Bfhqf/hh+Gb4Yt76QNcNf5XU0dDTf9/XDACV1NHQ0gDf0SIiInPIcc8LASLPCgBzz0AkzxYj+gKAac9Acs9AIMki+wBfBfhKgQEA9IaVAdcLP3+TcHBw4pEggUAJKOLfgjIgG7n/hKIwEhAYEBAPRbMDH4at4i+EqBAQD0fJUB1ws/f5NwcHDiAjUzMehfA18D+ELIy//4Rs8LAPhKAfQAye1Uf/hnAgEgFxYAx7jkYYdfCC3Rwl2omhp/+mAegL8NT/8MPwzfDFvamj8IXwikDdJGDhvXXlwMvwAfCFkZf/8I2eFgHwlAPoAZPaqfAeQfYIQaHaPdqn4ARh8IWRl//wjZ4WAfCUA+gBk9qo//DPACAtoZGAAtr4QsjL//hGzwsA+EoB9ADJ7VT4D/IAgAdacCHHAJ0i0HPXIdcLAMABkJDi4CHXDR+S8jzhUxHAAJDgwQMighD////9vLGS8jzgAfAB+EdukvI83o",
};
