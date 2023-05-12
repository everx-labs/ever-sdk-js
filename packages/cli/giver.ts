import { TonClient, ResultOfProcessMessage } from "@eversdk/core"
import { Account, AccountGiver } from "@eversdk/appkit"

export const DEFAULT_TOPUP_BALANCE = 20_000_000 // 0.02 tokens should be enouth for deploy + selfdestruct operation tested on evernode-se

export class Giver implements AccountGiver {
    public address: string
    public account: Account
    private _giver: AccountGiver

    static async create(sdk: TonClient): Promise<AccountGiver> {
        const giver = await Account.getGiverForClient(sdk)
        const { acc_type, balance } = await giver.account.getAccount()

        if (!acc_type || acc_type != 1) {
            throw Error(
                `The giver contract must be deployed and active at the address: "${giver.address}"`,
            )
        }
        if (!balance || BigInt(balance) < DEFAULT_TOPUP_BALANCE) {
            throw Error(
                `The giver's contract balance is too small, the address is: "${giver.address}"`,
            )
        }

        return new Giver(giver)
    }

    public constructor(accountGiver: AccountGiver) {
        this._giver = accountGiver
        this.address = accountGiver.address
        this.account = accountGiver.account
    }

    async sendTo(
        address: string,
        value: number,
    ): Promise<ResultOfProcessMessage> {
        if (BigInt((await this.account.getBalance()) ?? 0) < value) {
            throw Error(
                `The giver's contract balance is too small for topup address: ${address}`,
            )
        }

        const topup = await this._giver.sendTo(address, value)

        const topupTree = await this.account.client.net.query_transaction_tree({
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

        return topup
    }
}
