import { libDeno } from "../mod.ts";
import { TonClient } from "./deps.ts";

TonClient.useBinaryLibrary(libDeno);

const client = new TonClient(
    {
        network: {
            endpoints: ["http://localhost"],
        },

    },
);
(async () => {
    console.log("Client version:", (await client.client.version()).version);
    console.log("Generated Keys:", JSON.stringify(await client.crypto.generate_random_sign_keys()));
    console.log("Query Account: ", JSON.stringify(await client.net.query_collection({
        collection: "accounts",
        result: "id",
        limit: 1,
    })));
    console.log("Query Block:   ", JSON.stringify(await client.net.query_collection({
        collection: "blocks",
        result: "id",
        limit: 1,
    })));
    client.close();
})();

