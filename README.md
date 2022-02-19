<p align="center"><a href="https://github.com/tonlabs/ever-sdk-js/"><img src="media/ton-sdk-blue.png" height="60"/></a></p> 
<h1 align="center">JavaScript Ever OS SDK</h1>
<p align="center">Client Library built on the Ever OS API</p>
<p align="center">for Web, Node.js and React Native platforms</p>

**Have a question? Get quick help in our channel:**

[![Chat on Telegram](https://img.shields.io/badge/chat-on%20telegram-9cf.svg)](https://t.me/ton_sdk) 

# Table of Content
- [Table of Content](#table-of-content)
- [Useful links](#useful-links)
- [Library distribution](#library-distribution)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Install core package](#install-core-package)
  - [Install bridge package (depends on target JS platform)](#install-bridge-package-depends-on-target-js-platform)
    - [NodeJs](#nodejs)
    - [Web](#web)
    - [React Native](#react-native)
- [Setup library](#setup-library)
- [Use library](#use-library)
- [Build bridge binaries](#build-bridge-binaries)
- [Build binaries](#build-binaries)
- [Run tests](#run-tests)
  - [Preparation to run tests](#preparation-to-run-tests)
  - [Run tests on node js](#run-tests-on-node-js)
  - [Run tests on web browser](#run-tests-on-web-browser)
  - [Run tests on react native platform](#run-tests-on-react-native-platform)
  - [To control where your tests will run use this environments](#to-control-where-your-tests-will-run-use-this-environments)
- [Download precompiled binaries](#download-precompiled-binaries)


# Useful links
- [Quick Start](https://tonlabs.gitbook.io/ton-sdk/quick_start)
  
- [Types and Methods (API Reference)](https://tonlabs.github.io/ever-sdk-js/)
  
- [AppKit](https://github.com/tonlabs/appkit-js) - JS package built on top of [@eversdk/core](https://www.npmjs.com/package/@eversdk/core) package which purpose is to simplify writing applications on EverScale. It helps to implement most common use-cases with less coding. 
  
- [SDK guides](https://tonlabs.gitbook.io/ton-sdk/guides/installation/add_sdk_to_your_app) - get a deeper understanding by diving into our guides where you can find extensive explanations of each step of DApp development on EverScale.
  
- [SDK Samples](https://github.com/tonlabs/sdk-samples) - a good place to get to practice with SDK examples asap:)

# Library distribution
This SDK is distributed via npm packages:
- [@eversdk/core](https://www.npmjs.com/package/@eversdk/core) – common binding independent from JavaScript platform you use.
- [@eversdk/lib-node](https://www.npmjs.com/package/@eversdk/lib-node) – bridge to NodeJs including NodeJs binary addon.
- [@eversdk/lib-web](https://www.npmjs.com/package/@eversdk/lib-web) – bridge to browser including WASM module.
- [@eversdk/lib-react-native](https://www.npmjs.com/package/@eversdk/lib-react-native) – bridge to mobile react-native platform including static libraries for iOS and Android.

You can find their source code in this repository.
 
# Installation

## Prerequisites

- Node.js 14 LTS  
  
*Package probably works OK on other Node.js versions, but we use 14 version in our testing pipelines so we quarantee its stable work only on 14 version.*

## Install core package

```shell script
npm i --save @eversdk/core
```

## Install bridge package (depends on target JS platform)

The bridge package will download precompiled binaries from TON Labs cloud storage.
If you want to rebuild binary from sources see [build binaries](#build binaries) section. 

### NodeJs
```shell script
npm i --save @eversdk/lib-node
```

### Web
```shell script
npm i --save @eversdk/lib-web
```
**Important!** Each time you run `npm install` the new version of the `eversdk.wasm` and `index.js` is downloaded. So you have to always update the `eversdk.wasm` inside your web package before publishing (starting local web server, creating web bundle etc.). If you use Webpack the best way is to use CopyPlugin.

### React Native
```shell script
npm i --save @eversdk/lib-react-native
```


# Setup library

You must initialize the library before the first use. The best place to do it is an 
initialization code of your application.

You need to attach the chosen binary module to the `TonClient` class.

NodeJs:
```ts
const {TonClient} = require("@eversdk/core");
const {libNode} = require("@eversdk/lib-node");

// Application initialization

TonClient.useBinaryLibrary(libNode)
```
  
Web:
```ts
import {TonClient} from "@eversdk/core";
import {libWeb} from "@eversdk/lib-web";

// Application initialization

TonClient.useBinaryLibrary(libWeb);
```

By default the library loads wasm module from relative URL `/eversdk.wasm`.

You can specify alternative URL if you want to place (or rename) wasm module.
```ts
import {TonClient} from "@eversdk/core";
import {libWeb, libWebSetup} from "@eversdk/lib-web";

// Application initialization
libWebSetup({
    binaryURL: "/assets/eversdk_1_30_1.wasm",
});

TonClient.useBinaryLibrary(libWeb);
```

React Native:
```ts
import {TonClient} from "@eversdk/core";
import {libReactNative} from "@eversdk/lib-react-native";

// Application initialization

TonClient.useBinaryLibrary(libReactNative);
```
  
# Use library

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
        endpoints: ['net.ton.dev']
    } 
});
```

In the end, close client to close all the sockets related to it:
```ts
 client.close();
```

You can find reference guide to `TonClient` here: [TON-SDK API Documentation](https://github.com/tonlabs/TON-SDK/blob/master/docs/modules.md)

# Build bridge binaries

You can build binaries from sources.

If you install a bridge package from the `npmjs` you can build it with the following commands (e.g. for nodejs):
```shell script
cd node_modules/@eversdk/lib-node/build
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

# Run tests

This suite has test packages:
- `tests` – common test package containing all unit tests for a library.
- `tests-node` – tests runner on node js.
- `tests-web` – tests runner on web browser.
- `tests-react-native` – tests runner on react native platform.

## Preparation to run tests

```shell script
cd packages/core
npm i
npx tsc
cd packages/tests
npm i
npx tsc
```

## Run tests on node js

```shell script
cd packages/tests-node
npm i
node run
```

## Run tests on web browser

```shell script
cd packages/tests-web
npm i
node run
```

## Run tests on react native platform

```shell script
cd packages/tests-react-native
npm i
node run ios
node run android
```

## To control where your tests will run use this environments
```shell script
TON_USE_SE=true TON_NETWORK_ADDRESS=http://localhost node run
```

# Download precompiled binaries

Instead of building library yourself, you can download the __latest__ precompiled binaries from 
TON Labs SDK Binaries Store.

Binary              | Target           | Major | Download links
------------------- | ---------------- | ----- | --------------
Node.js AddOn       | Win32            | 1     | [`eversdk.node`](https://binaries.tonlabs.io/eversdk_1_nodejs_addon_x64-win32.gz)
&nbsp;              | macOS x86_64     | 1     | [`eversdk.node`](https://binaries.tonlabs.io/eversdk_1_nodejs_addon_x64-darwin.gz)
&nbsp;              | macOS aarch64    | 1     | [`eversdk.node`](https://binaries.tonlabs.io/eversdk_1_nodejs_addon_arm64-darwin.gz)
&nbsp;              | Linux            | 1     | [`eversdk.node`](https://binaries.tonlabs.io/eversdk_1_nodejs_addon_x64-linux.gz)
React Native Module | Android x86_64   | 1     | [`libeversdk.so`](https://binaries.tonlabs.io/eversdk_1_react_native_x86_64-linux-android.gz)
&nbsp;              | Android i686     | 1     | [`libeversdk.so`](https://binaries.tonlabs.io/eversdk_1_react_native_i686-linux-android.gz)
&nbsp;              | Android armv7    | 1     | [`libeversdk.so`](https://binaries.tonlabs.io/eversdk_1_react_native_armv7-linux-androideabi.gz)
&nbsp;              | Android aarch64  | 1     | [`libeversdk.so`](https://binaries.tonlabs.io/eversdk_1_react_native_aarch64-linux-android.gz)
&nbsp;              | iOS              | 1     | [`libeversdk.a`](https://binaries.tonlabs.io/eversdk_1_react_native_ios.gz)
WASM Module         | Browser          | 1     | [`eversdk.wasm`](https://binaries.tonlabs.io/eversdk_1_wasm.gz), [`index.js`](https://binaries.tonlabs.io/eversdk_1_wasm_js.gz)

_Downloaded archive is gzipped file_

---
Copyright 2018-2020 TON Labs LTD.
