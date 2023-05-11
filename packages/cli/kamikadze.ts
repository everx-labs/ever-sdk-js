import { TonClient, signerKeys } from "@eversdk/core"
import { Account } from "@eversdk/appkit"
import { Giver } from "./giver"
import { getDefaultEndpoints } from "./utils"
import * as Kamikadze from "./contracts/Kamikadze.js"

export async function kamikadze(options: { value: number | undefined }) {
    const sdk = new TonClient({ network: { endpoints: getDefaultEndpoints() } })
    try {
        const giver = await Giver.create(sdk)
        const keypair = await sdk.crypto.generate_random_sign_keys()
        const signer = signerKeys(keypair)
        const kamikadze = new Account(Kamikadze, { client: sdk, signer })
        const address = await kamikadze.getAddress()

        await giver.sendTo(address, options.value)
        console.log("Kamikadze topup:", address)

        const deploy = await kamikadze.deploy({
            initFunctionName: "constructor",
            initInput: {},
        })
        console.log("Kamikadze deploy:", deploy.transaction.id)

        const selfdestruct = await kamikadze.run("sendAllMoney", {
            dest_addr: giver.address,
        })
        console.log("Kamikadze selfdestruct:", selfdestruct.transaction.id)
    } finally {
        sdk.close()
    }
}
