import {Contract} from "@tonclient/core";
import * as fs from "fs";
import * as path from "path";
import {TonClient} from "@tonclient/core";
import {libNode} from "@tonclient/lib-node";

export function init() {
    jest.setTimeout(100000);
    TonClient.useBinaryLibrary(libNode);
    TonClient.defaultConfig = {network: {endpoints: [process.env.TON_NETWORK_ADDRESS ?? "http://localhost"]}};
}

export function done() {
    TonClient.default.close();
}

export function loadContract(name: string): Contract {
    function load(suffix: string) {
        return fs.readFileSync(
            path.resolve(__dirname, `${name}${suffix}`),
        );
    }

    return {
        abi: JSON.parse(load(".abi.json").toString()),
        tvc: load(".tvc").toString("base64"),
    };
}
