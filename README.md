# JavaScript TON Client Bindings

This repository contains JavaScript TON Client binding packages:
- `@ton-client/core` – common binding independent from JavaScript platform you use.
- `@ton-client/node-addon` – bridge to NodeJs including NodeJs binary addon.
- `@ton-client/wasm-module` – bridge to browser including WASM module. 
- `@ton-client/react-native-module` – bridge to mobile react-native platform including 
static libraries for iOS and Android.
 
# Installation

##Install core package

```shell script
npm i --save @ton-client/core
```

## Install bridge package (depends on target JS platform)

The bridge package will download precompiled binaries from TON Labs cloud storage.
If you want to rebuild binary from sources see [build binaries](#build binaries) section. 

NodeJs:
```shell script
npm i --save @ton-client/node-addon
```

Web:
```shell script
npm i --save @ton-client/wasm-module
```

React Native:
```shell script
npm i --save @ton-client/react-native-module
```

To get started using TON JavaScript SDK, see [Add SDK to your Application](https://docs.ton.dev/86757ecb2/p/61b5eb-nodejs).

# Build bridge binaries

You can build binaries from sources.

If you install bridge package from `npmjs` you can build with the following commands (e.g. for nodejs):
```shell script
cd node_modules/@ton-client/node-addon/build
cargo run
```

# Build binaries

If you checkout this repository you can build binaries for all bridges.

```shell script
cd packages/node-addon/build
cargo run
cd ../../../wasm-module/build
cargo run
cd ../../../react-native-module/android/build
cargo run
cd ../../ios/build
cargo run
```

Also the archives will be created to be published on the TON Labs cloud storage. Archives will be placed into the following folders:
- `packages/node-addon/publish`
- `packages/wasm-module/publish` 
- `packages/react-native-module/ios/publish` 
- `packages/react-native-module/android/publish` 

# Useful stuff 

## Community links

[![Chat on Telegram](https://img.shields.io/badge/chat-on%20telegram-9cf.svg)](https://t.me/ton_sdk) 
[![Gitter](https://badges.gitter.im/ton-sdk/community.svg)](https://gitter.im/ton-sdk/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Documentation
  
[TON-SDK API Documentation](https://github.com/tonlabs/TON-SDK/blob/master/docs/modules.md)

---
Copyright 2018-2020 TON DEV SOLUTIONS LTD.
