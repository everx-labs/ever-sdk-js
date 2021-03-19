# FreeTON Application Kit

This library is a part of FreeTON SDK for JavaScript.

AppKit is built over the `@tonclient/core` package and purposed to simplify writing applications
using FreeTON core library.

**Have a question? Get quick help in our channel:**

[![Chat on Telegram](https://img.shields.io/badge/chat-on%20telegram-9cf.svg)](https://t.me/ton_sdk)

To get a deeper understanding dive into
our [SDK guides](https://docs.ton.dev/86757ecb2/p/783f9d-about-sdk) where you can find extensive
explanations and descriptions of each step of DApp development on Free TON.

## Before You Start

We strongly recommend to install `tondev` utility before you start playing with TON AppKit. This is
an ultimate set of tools for FreeTON development.

It includes:

- Solidity toolchain – to create and compile smart contracts.
- TONOS SE – to create a lightweight sandboxed blockchains on your computer for development and
  debugging.
- and much more...

Installation is pretty easy:

```shell
npm i -g tondev
```

Learn more about [tondev](https://github.com/tonlabs/tondev).

Also we recommend the `TONDev` extension for Visual Studio Code users.

Ok, lets go.

## Installation

```shell script
# Install core package
npm i --save @tonclient/core

# Install lib-node bridge if you write node js application
npm i --save @tonclient/lib-node

# Or install lib-web bridge if you write web/browser application
npm i --save @tonclient/lib-web

# Or install lib-react-native if you write react-native mobile application
npm i --save @tonclient/lib-react-native

# And finally install appkit itself
npm i --save @tonclient/appkit
```

## Setup Client Library

You must initialize the core library before the first use. The best place to do it is an
initialization code of your application.

NodeJs:

```javascript
const { TonClient } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");

// Application initialization

TonClient.useBinaryLibrary(libNode)
```

Web:

```javascript
import { TonClient } from "@tonclient/core";
import { libWeb } from "@tonclient/lib-web";

// Application initialization

TonClient.useBinaryLibrary(libWeb);
```

By default the library loads wasm module from relative URL `/tonclient.wasm`.

You can specify alternative URL if you want to place (or rename) wasm module.

```javascript
import { TonClient } from "@tonclient/core";
import { libWeb, libWebSetup } from "@tonclient/lib-web";

// Application initialization.

// You have to setup libWeb if the `tonclient.wasm`
// isn't located at root of your web site.
// Otherwise you havn't to call `libWebSetup`.
libWebSetup({
    binaryURL: "/assets/tonclient_1_2_3.wasm",
});

TonClient.useBinaryLibrary(libWeb);
```

React Native:

```javascript
import { TonClient } from "@tonclient/core";
import { libReactNative } from "@tonclient/lib-react-native";

// Application initialization

TonClient.useBinaryLibrary(libReactNative);
```

## Create Client Instance

TON AppKit is built over core library. So you have to create an instance of `TonClient` to use it
later with TON AppKit objects.

```javascript
const client = new TonClient({
    network: { endpoints: ["http://localhost"] }
});
```

Is this sample we create a client instance configured to use TONOS SE instance.

## A Few Words about the Code

Below we use a code snippets to illustrate an AppKit usage.

In this code we omit an initialization part because it is the same.

We suppose that we are using lib-node bridge (NodeJs) to write examples.

Also we use the library to deal with local TONOS SE instance.

So full code of each example can look like this:

```javascript
const { TonClient } = require("@tonclient/core");
const { libNode } = require("@tonclient/lib-node");
const { Account } = require("@tonclient/appkit");

TonClient.useBinaryLibrary(libNode);

(async () => {
    const endpoint = process.env.TON_NETWORK_ADDRESS || "http://localhost"; 
    const client = new TonClient({ network: { endpoints: [endpoint] } });
    try {
        await main(client);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
})();

async function main(client) {
    // Snippet code is here
}
```

## Use Account Object

The key point of the AppKit is an Account object (class). 
Application uses an Account instance to deal with specific 
blockchain [account](docs/glossary.md#account) using specific 
owner (signer in term of TonClient library).

Each Account instance must use an [ABI](docs/glossary.md#abi) 
compliant contract. So we have to define the `Contract` object 
with an ABI and optionally [tvc](docs/glossary.md#tvc) fields.
This object must be provided to the Account constructor.

In the example below we use predefined [giver](docs/glossary.md#giver) 
already included in AppKit and pre deployed in TONOS SE.

```javascript
// Define Contract object.
const AccContract = {
    abi: { /* ABI declarations */ },
    tvc: "... base64 encoded string ...",
};

// Generate new keys pair for new account.
const keys = await client.crypto.generate_random_sign_keys();

// Create owner (signer) instance for new account.
const signer = signerKeys(keys);

// Construct Account instance.
//
// Note that this account is not deployed in the blockchain yet.
// We just create an object to deal with this account.
const acc = new Account(AccContract, {signer, client});

// We can determine the future addres of the account 
// and print it to the user before deploying.
console.log(`New account future address: ${await acc.getAddress()}`);

// Deploy account to the blockchain.
// Here we use TONOS SE giver to create a positive balance
// before deploying.
await acc.deploy({useGiver: true});

// Send external inbound message to our new account
// and receives result from external outboud message.
const response = await acc.run("someFunction", {someParam:1});

// Print decoded response message
console.log("Account has responded to someFunction with", response.decoded.output);

// Print current balance.
// Note that balance returned as a string in decimal representation.
// This is because of a value measure is a nano.
// So its value may not be representable using JS Number.
console.log("Account balance now is", await acc.getBalance());
```

In the example above we demonstrated typical basic usage of the Account object.

## Executing Contract on TVM

*Work in progress*

## Subscribe for Changes

*Work in progress*

---
Copyright 2018-2021 TON DEV SOLUTIONS LTD.
