import { libDenoWasm } from "../mod.ts";
import { TonClient } from "./deps.ts";

TonClient.useBinaryLibrary(libDenoWasm);

const client = new TonClient({
    network: {
        endpoints: ["http://localhost"]
    }
});
(async () => {
    console.log(">>>", (await client.client.version()).version);
    console.log(">>>", JSON.stringify(await client.crypto.generate_random_sign_keys()));
    console.log(">>>", JSON.stringify(await client.net.query_collection({
        collection: "accounts",
        result: "id balance"
    })));
    client.close();
})();

