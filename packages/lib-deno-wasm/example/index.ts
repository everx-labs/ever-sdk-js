import { libDenoWasm, libDenoWasmSetup } from "../mod.ts";
import { TonClient } from "./deps.ts";

libDenoWasmSetup({ binaryURL: "../eversdk.wasm" })
TonClient.useBinaryLibrary(libDenoWasm);

const client = new TonClient({
    network: {
        endpoints: ["http://localhost"]
    }
});
(async () => {
    console.log("Client Version: ", (await client.client.version()).version);
    console.log("Random Keys:    ", JSON.stringify(await client.crypto.generate_random_sign_keys()));
    console.log("Query Accounts: ", JSON.stringify(await client.net.query_collection({
        collection: "accounts",
        result: "id balance"
    })));
    client.close();
})();

