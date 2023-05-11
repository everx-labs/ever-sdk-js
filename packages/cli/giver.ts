import { TonClient, KeyPair, abiContract, signerKeys } from "@eversdk/core"
import { Account, ContractPackage } from "@eversdk/appkit"
import { getEnv } from "./utils"
import * as GiverV2 from "./contracts/GiverV2.js"
import * as GiverV3 from "./contracts/GiverV3.js"

const DEFAULT_TOPUP_BALANCE = 18_000_000
export type GiverVersions = "v2" | "v3"

export function getDefaultGiverContract(type: GiverVersions): ContractPackage {
    try {
        return { v2: GiverV2, v3: GiverV3 }[type]
    } catch (e) {
        throw Error(`Giver type '${type}' unknown`)
    }
}

export async function getDefaultGiverKeys(sdk: TonClient): Promise<KeyPair> {
    const definedSecret = getEnv("TON_GIVER_SECRET")
    if (definedSecret) {
        const definedKeys = await sdk.crypto.nacl_sign_keypair_from_secret_key({
            secret: definedSecret,
        })
        definedKeys.secret = definedKeys.secret.substring(0, 64)
        return definedKeys
    }

    return {
        public: "2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16",
        secret: "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",
    }
}

export async function getDefaultGiverAddress(
    sdk: TonClient,
    giver: ContractPackage,
    keys: KeyPair,
): Promise<string> {
    const definedAddress = getEnv("TON_GIVER_ADDRESS")
    if (definedAddress) {
        return definedAddress
    }
    return (
        await sdk.abi.encode_message({
            abi: abiContract(giver.abi),
            deploy_set: {
                tvc: giver.tvc ?? "",
            },
            signer: signerKeys(keys),
        })
    ).address
}

export interface AccountGiver {
    address: string
    account: Account

    sendTo(address: string, value: number): Promise<void>
}

export class Giver implements AccountGiver {
    public address: string
    public account: Account
    private _sdk: TonClient

    static async create(sdk: TonClient): Promise<Giver> {
        const giverType = getEnv("EVERCLOUD_GIVER_TYPE") as GiverVersions
        const giverContract = getDefaultGiverContract(giverType ?? "v2")
        const giverKeys = await getDefaultGiverKeys(sdk)
        const giverAddress = await getDefaultGiverAddress(
            sdk,
            giverContract,
            giverKeys,
        )

        const giver = new Account(giverContract, {
            client: sdk,
            signer: signerKeys(giverKeys),
            address: giverAddress,
        })

        const giverExists = await sdk.net.query({
            query: `query($addr: String!) {
                        blockchain {
                            account(address: $addr) {
                                info {
                                    acc_type
                                    balance
                                }
                            }
                        }
                    }`,
            variables: {
                addr: giverAddress,
            },
        })
        let response: { acc_type: number; balance: string }
        try {
            response =
                giverExists["result"]["data"]["blockchain"]["account"]["info"]
        } catch {
            console.dir(giverExists, {
                depth: null,
                showHidden: false,
                colors: true,
            })
            throw Error(
                `Can't parse query response, the address is: "${giverAddress}"`,
            )
        }
        const { acc_type, balance } = response // NOTICE: await giver.getAccount()
        if (!acc_type || acc_type != 1) {
            throw Error(
                `The giver contract must be deployed and active at the address: "${giverAddress}"`,
            )
        }
        if (!balance || BigInt(balance) < DEFAULT_TOPUP_BALANCE) {
            throw Error(
                `The giver's contract balance is too small, the address is: "${giverAddress}"`,
            )
        }

        return new Giver(sdk, giverAddress, giver)
    }

    public constructor(sdk: TonClient, address: string, account: Account) {
        this._sdk = sdk
        this.address = address
        this.account = account
    }

    async sendTo(
        address: string,
        value = DEFAULT_TOPUP_BALANCE,
    ): Promise<void> {
        if (BigInt((await this.account.getBalance()) ?? 0) < value) {
            throw Error(
                `The giver's contract balance is too small for topup address: ${address}`,
            )
        }
        const topup = await this._sdk.processing.process_message({
            send_events: false,
            message_encode_params: {
                address: this.address,
                abi: this.account.abi,
                call_set: {
                    function_name: "sendTransaction",
                    input: {
                        dest: address,
                        value,
                        bounce: false,
                    },
                },
                signer: this.account.signer,
            },
        })

        if (topup.transaction.out_msgs.length == 0) {
            console.error({ transaction: topup.transaction })
            throw Error(
                `The giver's topup call should result in at least 1 internal outbound message, transaction.id: ${topup.transaction.id}`,
            )
        }

        const topupTree = await this._sdk.net.query_transaction_tree({
            in_msg: topup.transaction.in_msg,
        })
        if (topupTree.transactions[1].account_addr !== address) {
            console.error({
                dest_address: address,
                account_addr: topupTree.transactions[1].account_addr,
            })
            throw Error(
                `The giver's topup second transaction \`account_addr\` should be equal to initial destination: ${address}`,
            )
        }
    }
}
