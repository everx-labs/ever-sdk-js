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
import { touch, DEFAULT_TOUCH_MAX_BALANCE } from "./touch"
import { compile } from "./compile"
import { DEFAULT_TOPUP_BALANCE } from "./giver"

dotenv.config()

TonClient.useBinaryLibrary(libNode)

program
    .name("evercloud")
    .description("Evercloud CLI")
    .version(getEnv("npm_package_version") as string)

program.option("-d, --debug", "Output debug information (time)")

program
    .command("compile")
    .alias("c")
    .argument("<string>", "Path to Contract source file (.sol)")
    .description(
        "Compile contract, wrap it into js, generate d.ts (depends on `npx` tool, should be in PATH)",
    )
    .action(compile)

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
        myParseInt,
        DEFAULT_TOPUP_BALANCE,
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

program
    .command("touch")
    .alias("t")
    .description(
        "Run the Touch contract, which increases local state variable timestamp.",
    )
    .option(
        "-v, --value <number>",
        "Top up the Touch contract before deploying it in nanotokens.",
        myParseInt,
        DEFAULT_TOUCH_MAX_BALANCE,
    )
    .action(touch)

program.addHelpText(
    "after",
    `
Examples:

$ evercloud c ./contracts/Kamikadze.sol

$ evercloud q "query{blockchain{blocks(last:1 workchain:-1){edges{node{seq_no hash}}}}}"

$ evercloud q "subscription{blocks(filter:{workchain_id:{eq:-1}}){seq_no id}}"

$ EVERCLOUD_GIVER_TYPE=v2 TON_NETWORK_ADDRESS=https://devnet.evercloud.dev/<ProjectId> TON_GIVER_ADDRESS=<address> TON_GIVER_SECRET=<privateKey> evercloud k

$ evercloud qr 0:66cb703cd63dd0b9eafbce702a9f838211ba1ea5ccce101dc81b98114d824b8a

$ evercloud t -d
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
