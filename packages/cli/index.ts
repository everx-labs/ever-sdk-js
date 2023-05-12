#!/usr/bin/env node

import { program } from "commander"
import { TonClient } from "@eversdk/core"
import { libNode } from "@eversdk/lib-node"
import { toString as qrcode } from "qrcode"
import { promisify } from "util"
import dotenv from "dotenv"

import { myParseInt, getEnv } from "./utils"
import { graphql } from "./graphql"
import { kamikadze } from "./kamikadze"

dotenv.config()

TonClient.useBinaryLibrary(libNode)

program
    .name("evercloud")
    .description("Evercloud CLI")
    .version(getEnv("npm_package_version") as string)

program.option('-d, --debug', 'Output debug information (time)')

program
    .command("graphql")
    .alias("q")
    .argument("<string>", "query text (also can be subscription or mutation)")
    .description("Sending a query to a GraphQL endpoint.")
    .option(
        "-c, --count <number>",
        "Specify the number of events to wait.",
        myParseInt,
        0,
    )
    .action(graphql)

program
    .command("kamikadze")
    .alias("k")
    .description(
        "Run the Kamikaze contract, which triggers the self-destruct process by calling the `sendAllMoney` function.",
    )
    .option(
        "-v, --value <number>",
        "Top up the Kamikaze contract before deploying it in nanotokens.",
    )
    .action(kamikadze)

program
    .command("qrcode")
    .alias("qr")
    .argument("<string>")
    .description(
        "Generate a QR code using the provided text argument and output it to the console.",
    )
    .action(async req => {
        console.log(await promisify(qrcode)(req))
    })

program.addHelpText(
    "after",
    `
Examples:

$ evercloud q "query{blockchain{blocks(last:1 workchain:-1){edges{node{seq_no hash}}}}}"

$ evercloud q "subscription{blocks(filter:{workchain_id:{eq:-1}}){seq_no id}}"

$ EVERCLOUD_GIVER_TYPE=v3 TON_NETWORK_ADDRESS=https://devnet.evercloud.dev/<ProjectId> TON_GIVER_ADDRESS=<address> TON_GIVER_SECRET=<privateKey> evercloud k
`,
)

program
    .parseAsync(process.argv)
    .then(cmd => {
        if (cmd.opts().debug) {
            console.log(`finished in ${process.uptime().toFixed(2)}s`)
        }
        process.exit(0)
    })
    .catch(error => {
        console.dir(error, { showHidden: false, depth: null })
        process.exit(1)
    })
