# Ever SDK Binding for Deno

To use Ever SDK in your deno application:

- Build `eversdk.deno` dynamic library:
  ```shell
  cd build
  cargo run
  ```
  
- Copy `lib-deno` into your application (excluding `build`, `lib`, `publish` and `example` folders).

Somewhere at initialization part of your application insert the following code:
```typescript
export { TonClient } from "npm:@eversdk/core";
import { libDeno } from "lib-deno/mod.ts";

TonClient.useBinaryLibrary(libDeno);
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
