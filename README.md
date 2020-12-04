# JavaScript TON Client Bindings

**Community links:**

[![Chat on Telegram](https://img.shields.io/badge/chat-on%20telegram-9cf.svg)](https://t.me/ton_sdk) 

This repository contains JavaScript TON Client binding packages:
- `@tonclient/core` – common binding independent from JavaScript platform you use.
- `@tonclient/lib-node` – bridge to NodeJs including NodeJs binary addon.
- `@tonclient/lib-web` – bridge to browser including WASM module.
- `@tonclient/lib-react-native` – bridge to mobile react-native platform including static libraries for iOS and Android.
 
# Installation

## Install core package

```shell script
npm i --save @tonclient/core
```

## Install bridge package (depends on target JS platform)

The bridge package will download precompiled binaries from TON Labs cloud storage.
If you want to rebuild binary from sources see [build binaries](#build binaries) section. 

NodeJs:
```shell script
npm i --save @tonclient/lib-node
```

Web:
```shell script
npm i --save @tonclient/lib-web
```

React Native:
```shell script
npm i --save @tonclient/lib-react-native
```

To get started using TON JavaScript SDK, see [Add SDK to your Application](https://docs.ton.dev/86757ecb2/p/61b5eb-nodejs).

## Setup library

You must initialize the library before the first use. The best place to do it is an 
initialization code of your application.

You need to attach the chosen binary module to the `TonClient` class.

NodeJs:
```ts
const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");

// Application initialization

TonClient.useBinaryLibrary(libNode)
```
  
Web:
```ts
import {TonClient} from "@tonclient/core";
import {libWeb} from "@tonclient/lib-web";

// Application initialization

TonClient.useBinaryLibrary(libWeb);
```
  
React Native:
```ts
import {TonClient} from "@tonclient/core";
import {libReactNative} from "@tonclient/lib-react-native";

// Application initialization

TonClient.useBinaryLibrary(libReactNative);
```
  
## Use library

All library functions are incorporated into `TonClient` class. Each client module is represented as a 
property of the `TonClient` object.

To start use library you must create an instance of the `TonClient` class:
```ts
const client = new TonClient();
const keys = await client.crypto.generate_random_sign_keys();
```

You can pass a configuration object in `TonClient` constructor:
```ts
const client = new TonClient({
    network: { 
        server_address: 'net.ton.dev' 
    } 
});
```

You can find reference guide to `TonClient` here: [TON-SDK API Documentation](https://github.com/tonlabs/TON-SDK/blob/master/docs/modules.md)

# Build bridge binaries

You can build binaries from sources.

If you install a bridge package from the `npmjs` you can build it with the following commands (e.g. for nodejs):
```shell script
cd node_modules/@tonclient/lib-node/build
cargo run
```

# Build binaries

If you checkout this repository you can build binaries for all bridges.

```shell script
cd packages/lib-node/build
cargo run
cd ../../../lib-web/build
cargo run
cd ../../../lib-react-native/android/build
cargo run
cd ../../ios/build
cargo run
```

Also the archives will be created to be published on the TON Labs cloud storage. Archives will be placed into the following folders:
- `packages/lib-node/publish`
- `packages/lib-web/publish`
- `packages/lib-react-native/ios/publish`
- `packages/lib-react-native/android/publish`

# Useful stuff 

## Community links

[![Chat on Telegram](https://img.shields.io/badge/chat-on%20telegram-9cf.svg)](https://t.me/ton_sdk) 
[![Gitter](https://badges.gitter.im/ton-sdk/community.svg)](https://gitter.im/ton-sdk/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Documentation
  
[TON-SDK API Documentation](https://github.com/tonlabs/TON-SDK/blob/master/docs/modules.md)

---
Copyright 2018-2020 TON DEV SOLUTIONS LTD.
