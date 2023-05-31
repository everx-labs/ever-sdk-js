import * as path from "path"
import { readFile } from "node:fs/promises"
import { homedir } from "node:os"
import { chdir, cwd } from "node:process"
import { execSync, execFileSync } from "node:child_process"
import { runCommand, Terminal } from "everdev"
import * as parser from "tvm-solidity-parser"

class Term implements Terminal {
    log(...args: unknown[]): void {
        console.log(...args)
    }
    write(text: string): void {
        process.stdout.write(text)
    }
    writeError(text: string): void {
        process.stderr.write(text)
    }
}

export async function compile(contractName: string) {
    const pushd = cwd()
    try {
        const loc = path.parse(contractName)
        chdir(loc.dir)
        const content = (await readFile(loc.base, "utf8")).toString()
        const parsed = parser.parse(content, { tolerant: true })
        let everSolidityVersion: string | null = null
        if (parsed.children) {
            parsed.children.forEach(node => {
                if (
                    node.type == "PragmaDirective" &&
                    node.name == "ever-solidity"
                ) {
                    if (!Array.isArray(node.value)) {
                        const matches = node.value.match(/(\d+\.\d+\.\d+)/)
                        if (Array.isArray(matches) && matches.length > 0) {
                            ;[everSolidityVersion] = matches
                        }
                    }
                }
            })
            if (!everSolidityVersion) {
                throw Error(`Can't found pragma ever-solidity`)
            }
        }
        const terminal = new Term()
        await runCommand(terminal, "sold set", { version: everSolidityVersion })
        console.log(
            execFileSync(path.join(homedir(), ".everdev/sold/sold"), [
                loc.base,
            ]).toString(),
        )
        const wrappedName = `${loc.name}.js`
        await runCommand(terminal, "js wrap", {
            file: `${loc.name}.abi.json`,
            export: "commonjs-default",
            output: wrappedName,
        })
        console.log(
            execSync(
                `npx -p typescript tsc ${wrappedName} --declaration --allowJs --emitDeclarationOnly --outDir .`,
            ).toString(),
        )
    } finally {
        chdir(pushd)
    }
}
