import { Account } from "@eversdk/appkit"
import { getDefaultEndpoints, sleep } from "./utils"
import { Giver, DEFAULT_TOPUP_BALANCE } from "./giver"
import { performance } from "node:perf_hooks"
import { TonClient, Signer } from "@eversdk/core"
import * as Touch from "./contracts/Touch.js"

export const DEFAULT_TOUCH_MAX_BALANCE = 100 * 1e9
export const DEFAULT_TOUCH_TRY_COUNT = 5
export const DEFAULT_TOUCH_TRY_SLEEP = 100

export async function touch(options: {
    value: number
    tryCount: number
    trySleep: number
    signer: Signer
}) {
    const sdk = new TonClient({
        abi: {
            message_expiration_timeout: 120_000,
            message_expiration_timeout_grow_factor: 1,
        },
        network: {
            endpoints: getDefaultEndpoints(),
            message_retries_count: 2,
        },
    })
    try {
        const giver = await Giver.create(sdk)
        const touch = new Account(Touch, {
            client: sdk,
            signer: options.signer ?? giver.account.signer,
        })
        const touchAccount = await touch.getAccount()
        const { balance } = touchAccount
        const address = await touch.getAddress()

        if (balance && BigInt(balance) < DEFAULT_TOPUP_BALANCE) {
            await giver.sendTo(address, options.value ?? DEFAULT_TOUCH_MAX_BALANCE)
            console.log("Touch topup:", address)
        } else if (!balance) {
            await giver.sendTo(address, DEFAULT_TOPUP_BALANCE)
            console.log("Touch topup:", address)
        }

        if (touchAccount.acc_type != 1) {
            const deploy = await touch.deploy({
                initFunctionName: "constructor",
                initInput: {},
            })
            console.log("Touch deploy:", deploy.transaction.id)
        } else {
            const timestampOld = BigInt(
                (await touch.runLocal("getTimestamp", {})).decoded?.output
                    .value0 ?? 0,
            )
            const startTimer = performance.now()
            const balanceBefore = BigInt((await touch.getBalance()) ?? 0)

            const response = await touch.run("touch", {})
            console.log(`Touch ok: ${response.transaction.id}`)

            let tryCounter = 0
            while (tryCounter < options.tryCount ?? DEFAULT_TOUCH_TRY_COUNT) {
                touch.refresh() // Force to take frech boc from graphql
                const balanceAfter = BigInt((await touch.getBalance()) ?? 0)
                const timestampNew = BigInt(
                    (await touch.runLocal("getTimestamp", {})).decoded?.output
                        .value0 ?? 0,
                )

                if (timestampNew > timestampOld) {
                    // Contract local state has been updated
                    console.log(`Touch balance: ${balanceAfter}`)
                    console.log(
                        `Operation cost: ${balanceBefore - balanceAfter}`,
                    )
                    break
                } else if (options.tryCount - tryCounter == 1) {
                    // It was last try
                    const endTimer = performance.now()
                    const elapsed =
                        Math.floor((endTimer - startTimer) / 10) / 100
                    throw Error(
                        `local state has not been updated (try: ${++tryCounter}) for ${elapsed}s`,
                    )
                } else {
                    // Waiting for another try
                    console.log(
                        `Touch local state has not been updated (try: ${++tryCounter})`,
                    )
                    await sleep(options.trySleep ?? DEFAULT_TOUCH_TRY_SLEEP)
                }
            }
        }
    } finally {
        sdk.close()
    }
}
