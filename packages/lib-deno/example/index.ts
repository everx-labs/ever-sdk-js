import { libDeno } from "../mod.ts";
import { TonClient } from "./deps.ts";

TonClient.useBinaryLibrary(libDeno);

const client = new TonClient();
(async () => {
    console.log(">>>", (await client.client.version()).version);
    console.log(">>>", JSON.stringify(await client.crypto.generate_random_sign_keys()));
    client.close();
})();

