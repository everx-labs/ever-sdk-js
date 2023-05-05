# Evercloud CLI
Evercloud CLI is a command-line tool that provides various functionalities to interact with the Evercloud network. You can use this tool to
- run Kamikadze contract
- query/subscribe/mutate to GraphQL endpoint
- output the QR code to the console.

## Installation
You can install Evercloud CLI globally using npm by running the following command:
```
npm install -g @eversdk/cli
```

Alternatively, you can use npx to run Evercloud CLI without installing it:
```
npx @eversdk/cli --help
```

## Usage
```
Usage: evercloud [options] [command]

Evercloud CLI

Options:
  -V, --version                   Output the version number
  -h, --help                      Display help for command

Commands:
  graphql|gql [options] <string>  Sending query to graphql endpoint
  kamikadze|k [options]           Run Kamikadze contract which selfdestruction process by calling `sendAllMoney` function
  qrcode|qr <string>              Generate QR code by using text argument and output to the console
  help [command]                  Display help for command

Examples:

$ evercloud gql "query{blockchain{blocks(last:1 workchain:-1){edges{node{seq_no hash}}}}}"

$ evercloud gql "subscription{blocks(filter:{workchain_id:{eq:-1}}){seq_no id}}"

$ EVERCLOUD_GIVER_TYPE=v3 TON_NETWORK_ADDRESS=https://devnet.evercloud.dev/<ProjectId> TON_GIVER_ADDRESS=<address> TON_GIVER_SECRET=<privateKey> evercloud k
```

## Commands
All commands can use environment variables to specify the Evercloud endpoint:
```TON_NETWORK_ADDRESS=https://mainnet.evercloud.dev/<ProjectId>```

You can put all environment variables into the `.env` file.

### graphql (alias: gql)
This command allows you to send queries to a GraphQL endpoint. You can use internal SDK GraphQL implementation of `sdk.net.query` or `sdk.net.subscribe` to the GraphQL endpoint.

For example, you can use the following command to query the latest blockchain block from the graphql endpoint:
```
evercloud gql "query{blockchain{blocks(last:1 workchain:-1){edges{node{seq_no hash}}}}}"
```

For example, subscribe to blocks:
```
evercloud gql "subscription{blocks(filter:{workchain_id:{eq:-1}}){seq_no id}}"
```
(see `evercloud help gql`)

### kamikadze (alias: k)
This command performs the following actions:
- Generates new keys
- Generates an address using these keys and the Kamikadze contract
- Tops up this address (default 0.018 tokens are enough to deploy and call the function)
- Deploys the Kamikadze contract
- Calls the 'sendAllMoney' function, which self-destructs this contract

For the kamikadze command, you can use the following environment variables to specify the giver:
- `EVERCLOUD_GIVER_TYPE=v2` giver type (value can be `v2` please check [giver contracts](https://github.com/tonlabs/evernode-se/tree/master/contracts) for more information)
- `TON_GIVER_ADDRESS=<address>` giver address
- `TON_GIVER_SECRET=<privateKey>` giver private key

For example, next command uses GiverV3 contract, access devnet endpoint with ProjectId (taken from `https://dashboard.evercloud.dev/projects`) uses specific giver address and secret private key:
```
EVERCLOUD_GIVER_TYPE=v3 TON_NETWORK_ADDRESS=https://devnet.evercloud.dev/<ProjectId> TON_GIVER_ADDRESS=<address> TON_GIVER_SECRET=<privateKey> evercloud k
```
(see `evercloud help k`)

### qrcode (alias: qr)
To generate a QR code, you can use the following command:
```
evercloud qr "0:96137b99dcd65afce5a54a48dac83c0fd276432abbe3ba7f1bfb0fb795e69025"
```
(see `evercloud help qr`)

## Contribute
You are free to contribute to Evercloud CLI by submitting a pull request. It would be nice if you could add some useful contracts and create an interface with new commands and parameters. Place command implementation in the root of the project by using the name convention `<command>.ts`. Place contracts in the `./contracts` folder with a capital name and keep all `.sol, .tvc, .abi.json, .d.ts, .js` files in the repository. Compile contracts with the following command:
```
everdev sol set --compiler 0.65.0 --linker 0.19.5
everdev sol compile <Contracts>
```

If you are using a different version of the compiler or linker, please add a compile script into `package.json`. To create a wrapper JS, use the following command:
```
everdev js wrap <Contract>.abi.json -e commonjs-default -o <Contract>.js
```

After creating a wrapper, you need to create a TypeScript definition file with the following command:
```
npx -p typescript tsc <Contract>.js --declaration --allowJs --emitDeclarationOnly --outDir .
```

All new commands should have a shortcut alias in one letter.

## Alternatives
You can use [tonos-cli](https://github.com/tonlabs/tonos-cli) as an alternative to Evercloud CLI. However, Evercloud CLI provides precompiled and wrapped contracts in the form of a CLI and uses `sdk.net.query` and `sdk.net.subscribe` methods, which tonos-cli does not support yet.

To test the subscribe functionality, you can use [wscat](https://www.npmjs.com/package/wscat). It can handle `ws://localhost` Evernode-SE and `wss://devnet.evercloud.dev/<ProjectId>` endpoints as well. But don't forget to send an initial payload with the following command:
```
{"type":"connection_init","payload":{}}
```

## TODO
- add graphql query [prameters](https://graphql.org/learn/queries/#variables) and headers for authorization
- add graphql schema request
- add output format modifier `--json`
