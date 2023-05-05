import {
    TonClient,
    Abi,
    KeyPair,
    Signer,
    abiContract,
    signerKeys,
} from "@eversdk/core"
import { ContractPackage } from "@eversdk/appkit"
import { getEnv } from "./utils"
import * as GiverV2 from "./contracts/GiverV2.js"
import * as GiverV3 from "./contracts/GiverV3.js"

export type GiverVersions = "v2" | "v3"

export function getDefaultGiverContract(type: GiverVersions): ContractPackage {
    try {
        return { v2: GiverV2, v3: GiverV3 }[type]
    } catch (e) {
        throw `Giver type '${type}' unknown`
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

    sendTo(address: string, value: number): Promise<void>
}

export class Giver implements AccountGiver {
    private _abi: Abi
    public address: string
    private _signer: Signer
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
        return new Giver(
            sdk,
            giverAddress,
            abiContract(giverContract.abi),
            signerKeys(giverKeys),
        )
    }

    public constructor(
        sdk: TonClient,
        address: string,
        abi: Abi,
        signer: Signer,
    ) {
        this._sdk = sdk
        this.address = address
        this._abi = abi
        this._signer = signer
    }

    async sendTo(address: string, value = 18_000_000): Promise<void> {
        const topup = await this._sdk.processing.process_message({
            send_events: false,
            message_encode_params: {
                address: this.address,
                abi: this._abi,
                call_set: {
                    function_name: "sendTransaction",
                    input: {
                        dest: address,
                        value,
                        bounce: false,
                    },
                },
                signer: this._signer,
            },
        })

        if (topup.transaction.out_msgs.length == 0) {
            console.error({ transaction: topup.transaction })
            throw "The giver's topup call should result in at least 1 internal outbound message"
        }

        const topupTree = await this._sdk.net.query_transaction_tree({
            in_msg: topup.transaction.in_msg,
        })
        if (
            topupTree.transactions[1].in_msg !== topup.transaction.out_msgs[0]
        ) {
            console.error({
                out_msgs: topup.transaction.out_msgs[0],
                __in_msg: topupTree.transactions[1].in_msg,
            })
            throw "The giver's topup second transaction `in_msg` should be equal to `out_msgs` of initial transaction"
        }
        if (topupTree.transactions[1].account_addr !== address) {
            console.error({
                dest_address: address,
                account_addr: topupTree.transactions[1].account_addr,
            })
            throw "The giver's topup second transaction `account_addr` should be equal to initial destination"
        }
    }
}
