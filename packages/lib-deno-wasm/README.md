# Ever SDK Binding for Deno using WASM module

To use Ever SDK in your deno application:

- Copy `lib-deno-wasm` into your application.
- Obtain `eversdk.wasm` and place it inside `lib-deno-wasm` folder.

Somewhere at initialization part of your application insert the following code:
```typescript
export { TonClient } from "npm:@eversdk/core";
import { libDenoWasm, libDenoWasmSetup } from "lib-deno-wasm/mod.ts";

libDenoWasmSetup({ binaryURL: "lib-deno-wasm/eversdk.wasm" })
TonClient.useBinaryLibrary(libDenoWasm);
```

Use `TonClient`:
```typescript
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
```
