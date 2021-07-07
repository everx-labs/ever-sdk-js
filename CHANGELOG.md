# Release Notes

All notable changes to this project will be documented in this file.

## [1.19.0] – 2021-07-07

### New
- `get_address_type` function in `utils` module, which validates address and returns its type. See the documentation.
- `decode_account_data` function in `abi` module that converts account data BOC into JSON representation according to ABI 2.1. See the documentation.
- Diagnostic fields `filter` and `timestamp` added to `wait_for_collection` error
- `main.ton.dev` and `net.ton.dev` endpoints that will be deprecated on 12.07.21 are now replaced with [proper endpoints list](https://docs.ton.dev/86757ecb2/p/85c869-networks), if they were specified in network `endpoints` config 

### Fixed
- Search of the first master blocks during the network start period was fixed in blocks and transactions iterators

## [1.18.1] – 2021-07-01

### Improved

- Improved error messages regarding Union-typed parameters (e.g. `abi` and `signer` in `encode_message`): helper functions (e.g. `signerNone`, `signerKeys`, etc.) are suggested if applicable.

## [1.18.0] – 2021-06-26

### New
- Iterators in `net` module: robust way to iterate blockchain items (blocks, transactions) 
  in specified range. See documentation for `create_block_iterator` , `create_transaction_iterator`, 
  `resume_block_iterator`, `resume_transaction_iterator`, `iterator_next`, `iterator_remove` 
  functions.
- Library adds `http://` protocol to endpoints `localhost`, `127.0.0.1`, `0.0.0.0` if protocol 
  isn't specified in config.
- **Debot module**:
    - added tests for Json interface.
## [1.17.0] – 2021-06-21

### New
- Added support of external encryption boxes. [See the documentation](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_crypto.md#register_encryption_box)
- **Debot module**:
    - Dengine waits for completion of all transactions in a chain initiated by debot's onchain call.

## [1.16.1] – 2021-06-16

### New
- `timeout` option to `query_transaction_tree` – timeout used to limit waiting time for the next 
  message and transaction in the transaction tree.
  
### Improved

- Improved error messages regarding ABI and JSON interface. SDK now shows additional tips for the user in cases of 
  errors.

### Fixed
- Warnings in Rust 1.52+. Little fixes in the documentation.
- `total_output` field in fees was always 0.
- `query_transaction_tree` didn't wait for messages.

## [1.16.0] – 2021-05-25

### New

- `query_transaction_tree` function that returns messages and transactions tree produced 
  by the specified message was added to `net` module. [See the documentation](https://github.com/tonlabs/TON-SDK/blob/1.16.0/docs/mod_net.md#query_transaction_tree)
- `libOptions.loadModule` – ability to specify alternative WASM module loader. 

### Fixed

- `AbiData.key` type changed to u32.
- attempt to use `orderBy` instead of `order` in `query_collection` will raise error.

## [1.15.0] – 2021-05-18

### New

- Sync latency detection increases connection reliability. Library will change the current endpoint 
  when it detects data sync latency on it.
  
- Configuration parameters: `latency_detection_interval`, 
  `max_latency`. See client documentation for details. 

- **Debot module**:
    - signing messages with signing box handles returned from debots.
    - return any sdk errors to debot in case of external calls.
    - defining signing box handle used to sign message in approve callback.

## [1.14.2] – 2021-04-30

### Fixed

- Typo in lib-react-native install script

## [1.14.1] – 2021-04-28

### Fixed

- **Debot module**:
    - DebotInfo field `key` renamed to `caption`

## [1.14.0] – 2021-04-28

### New

- **Debot module**:
    - implementation of Network DeBot interface in DEngine.
    - implementation of `signHash` function in Sdk interface.

### Fixed

- **Debot module**:
    - fixed bug in Json interface with supporting nested structures and arrays of structures.
    - fixed bug in Json interface with keys containing hyphens.

## [1.13.0] – 2021-04-23

### New
- Refined bridging model in `core` package. Library introduces new interface BinaryBridge. 
  Bridge authors can implement this interface instead of BinaryLibrary to 
  get more precise control over bridging.
  For example it makes possible to use separated response handlers for different 
  requests.
  
- [`net.query_counterparties`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_net.md#query_counterparties) - allows to query and paginate through the list of accounts that the specified account 
 has interacted with, sorted by the time of the last internal message between accounts.   
  Subscription to counterparties collection is available via `net.subscribe_collection` function.

- Blockchain interaction reliability improvement (broadcast): library sends external inbound messages simultaneously 
  to the N randomly chosen endpoints. If all N endpoints failed to responce then library repeats 
  sending to another random N endpoints (except the failed one). 
  If all the available endpoints fail to respond then library throws error.
  The N parameter is taken from `config.network.sending_endpoint_count` (default is 2).

- Blockchain interaction reliability improvement (bad delivery list): library tracks endpoints 
  with bad message delivery (expired messages). These endpoints have lower priority when library chooses endpoints 
  to send message.
  
- **Debot module**:
    - Implementation of `Json` DeBot interface in DEngine.

## [1.12.0] – 2021-04-01

### New
- [`utils.compress_zstd`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_utils.md#compress_zstd) compresses data using Facebook's Zstandard algorithm.
- [`utils.decompress_zstd`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_utils.md#decompress_zstd) decompresses data using Facebook's Zstandard algorithm.
- **Debot module**:
    - `init` function that creates an instance of DeBot and returns DeBot metadata.
    - Dengine fetches metadata form DeBot by calling 2 mandatory functions: `getRequiredInterfaces` and `getDebotInfo`. This data is returned by `fetch` and `init` functions.
    - `approve` DeBot Browser callback which is called by DEngine to request permission for DeBot activities.

### Changed
- **Debot Module**:
    - [breaking] `fetch` function does't create an instance of debot. It returns DeBot metadata (`DebotInfo`).
    - [breaking] `start` function does't create an instance of debot. It accepts DeBot handle created in `init` function.

## [1.11.1] – 2021-03-15

### New
- Giver address in tests is calculated from secret key. Default values are provided for TON OS SE giver

## [1.11.0] – 2021-03-05

### New
- [`utils.calc_storage_fee`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_utils.md#calc_storage_fee) function to calculate account storage fee over a some time period.
- **Debot Module**:
    - Added unstable functions to `Sdk` interface: `getAccountsDataByHash`

## [1.10.2] – 2021-03-11

### Fixed
- `index.d.ts` files in `lib-` packages are refined to be more typed.
- export of the `account.ts` added to `core/index`.

## [1.10.1] – 2021-03-10

### New
- New high-level wrapper [Account.ts](packages/core/src/account.ts) that simplifies work with accounts:
   
  `Account` class is introduced that supports these high-level methods:
    - (static) `giver` - allows to specify a giver to be used in all deploy operations
    - `deploy` - deploys a contract
    - `run` - executes a contract on-chain
    - `runLocal` - executes a contract off-chain (on client side, contract state does not change) (execution is syncronized with the previously called `deploy` or `run` so that it is performed on the updated account state)
    - `getAddress` - returns account address
    - `getAccount`- returns all the data about the account in json format
    - `boc` - returns the account boc.
   
   `GiverContract` object is introduced that is ititialized with [TON OS SE Giver](https://github.com/tonlabs/tonos-se/tree/master/contracts#giver-v2) address and keys.

## [1.10.0] – 2021-03-04

### New
- Add optional field `src_address` to [`ParamsOfEncodeInternalMessage`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_abi.md#encode_internal_message).
- Field `abi` in [`ParamsOfEncodeInternalMessage`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_abi.md#encode_internal_message) is optional and can be `None` if `call_set` and `deploy_set` are  `None`.
- [`boc.encode_boc`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_boc.md#encode_boc) function provides ability to build and serialize any custom tree of cells.
  Application can use several base Builder serialization primitives like integers, bitstrings
  and nested cells.
- [`boc.get_blockchain_config`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_boc.md#get_blockchain_config) function can extract blockchain configuration from key block and also
from zerostate.
- [`tvm` module](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_tvm.md) functions download current blockchain configuration if `net` is initialized with
DApp Server endpoints. Otherwise [default configuration](https://github.com/tonlabs/ton-executor/blob/11f46c416ebf1f145eacfb996587891a0a3cb940/src/blockchain_config.rs#L214) is used.
- **Debot Module**:
    - Support for debot invoking in Debot Engine. `send` browser callback is used not only for interface calls but to invoke debots.
    - `start` and `fetch` functions returns debot ABI.
    - Added new built-in interface `Hex` which implements hexadecimal encoding and decoding.
    - Added unstable functions to `Sdk` interface: naclBox, naclBoxOpen, naclKeypairFromSecret, getAccountCodeHash.

### Changed
- Both `call_set` and `deploy_set` in [`ParamsOfEncodeInternalMessage`](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_abi.md#encode_internal_message) can be omitted. In this case `encode_internal_message` generates internal message with empty body.
- **Debot Module**:
    - `send` function accepts one argument - serialized internal message as string encoded into base64.
### Documentation
- [Debot browser app object](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_debot.md#AppDebotBrowser) and [signing box app object](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_crypto.md#appsigningbox) descriptions added
- functions-helpers for enum type variable creation for [Signer](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_abi.md#signer), [Abi](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_abi.md#abi), [ParamsOfAppDebotBrowser](mod_debot.md#paramsofappdebotbrowser)

### Fixed

-  doc generator: app object interface description, constructor functions-helpers for enum type variable creation, added new line in the end if api.json
- library libsecp256k1 upgraded to fix https://rustsec.org/advisories/RUSTSEC-2019-0027

## 1.9.0 Feb 19, 2021

### New

- `tuple_list_as_array` parameter in `tvm.run_get` function which controls lists representation.
Default is stack-like based on nested tuples. If set to `true` then returned lists are encoded as plain arrays.  Use this option if you receive this error on Web: "Runtime error. Unreachable code should not be executed..."
This reduces stack size requirements for long lists.
- `function_name` field of `CallSet` structure can be the name or **id (as string in hex starting with 0x)** of the called function. 
- Fields `config_servers`, `query_url`, `account_address`, `gas_used` added into specific errors' `ClientError.data` object.

### Fixed

- Binaries download links are now under https protocol
- If you receive this error on Web: "Runtime error. Unreachable code should not be executed..." in `run_get`, use the new parameter `tuple_list_as_array = true`. [See the documentation](https://github.com/tonlabs/TON-SDK/blob/master/docs/mod_tvm.md#run_get). This may happen, for example, when elector contract contains too many participants

## 1.8.0 Feb 11, 2021

### New

- **Debot Module**:
    - Added new built-in interface `Msg` which allows to send external message to blockchain and sign it with supplied keypair.
    
### Fixed

- `crypto.hdkey_public_from_xprv` used compressed 33-byte form instead of normal 32-byte.

## 1.7.0 Feb 9, 2021
### New
- BOC cache management functions were introduced:
  - `boc.cache_set`, 
  - `boc.cache_get`  
  - `boc.cache_unpin` 
- Now functions that take boc as a parameter can also take a reference to boc cash instead so that it deсreases the number of boc serialization 
and deserializations which drastically improves performance of `run_tvm` and `run_executor` expecially in case of numerous calls on the same data. 
- `boc_cache` parameter in `tvm.run_tvm` and `tvm.run_executor` functions to save resulting messages and account BOCs into cache.
- `return_updated_account` flag parameter introduced in `tvm.run_tvm` and `tvm.run_executor` functions to return updated account state. Important: by default this flag is `false` and account data is not returned.
- `abi.encode_internal_message` function to encode an internal ABI-compatible message.
- **Debot Module**:
    - Support for get-methods and external calls in debots.
    Debots can send external inbound messages to destination contracts (signed - for external calls and unsigned - for get-methods) using native language syntax without actions.
    - Built-in debot interfaces (interfaces implemented by DEngine).
    Added two built-in interfaces: base64 and Sdk.
    - Added `DebotInterfaceExecutor` to automatically route messages to destination interfaces.
    - Debot's `fetch` function is optional now. New debots can implement only `start` function.

## 1.6.3 Feb 4, 2021
### Fixed
- Expired message wasn't retried if local execution succeeded.

## 1.6.0 Jan 29, 2021
### New
- `nacl_sign_detached_verify` function to verify detached signature.
- `aggregate_collection` function as a wrapper for GraphQL aggregation queries.
- `batch_query` function performs multiple queries per single fetch.
- Active endpoint invalidation in case of network error occuring.
- `network.network_retries_count` config parameter is deprecated. `network.max_reconnect_timeout` is introduced that allows to specify maximum network resolving timeout. Default value is 2 mins. 
- `initial_pubkey` field in `DeploySet` to specify public key instead of one from TVC file or provided by signer.
- Support for debot interfaces:
  - `send` Browser Callback to send messages with interface calls to Browser.
  - new variant `ParamsOfAppDebotBrowser::Send`.
  - `send` API function to send messages from Browser to Debot.
  - `run_output.rs` - internal structure RunOutput to filter messages generated by debot to 4 categories: interface calls, external calls, get-method calls and invoke calls.

### Fixed
- Device time synchronization is checked only in `send_message`. Data querying does not require proper time now

## 1.5.3 Jan 14, 2021

### Fixed
- node binary filename for windows

## 1.5.2 Dec 30, 2020

### New
- *.d.ts type declarations in `lib-react-native`, `lib-node`, `lib-web`.

### Fixed
- `net` module functions wait for `net.resume` call instead of returning error if called while the module is suspended


## 1.5.0 Dec 25, 2020

### New
- `reconnect_timeout` parameter in `NetworkConfig`.
- `endpoints` parameter in `NetworkConfig`. It contains the list of available server addresses to connect. SDK will use one them with the least connect time. `server_address` parameter is still supported but `endpoints` is prevailing.
- `net.fetch_endpoints` function to receieve available endpoints from server.
- `net.set_endpoints` function to set endpoints list for using on next reconnect.
- `ErrorCode` type in each module spec in `api.json`.

## 1.4.1 Dec 22, 2020

### New
- `net.find_last_shard_block` function returning account shard last block ID.
- `boc.get_code_from_tvc` function extracting contract code from TVC image.
- **Debot Module:**
  - Add new variant `ParamsOfAppDebotBrowser::SwitchCompleted` to notify browser when all context actions are shown.

## 1.3.3 - Dec 16, 2020

### Fix
- `lib-react-native` native module package name was changed to `tonlabs.tonclient`.

## 1.3.2 - Dec 11, 2020

### Fix
- `lib-web` index-template matches the documentation now

## 1.3.1 - Dec 9, 2020

### Fix
- AppObject wasn't working.  

## 1.3.0 - Dec 8, 2020

### New
- `net.query` method . Performs custom graphql query that can be copied directly from the playground.
- `net.suspend` and `net.resume` methods for disabling and enabling network activity. One of the possible use-cases is to manage subscriptions when a mobile application is brought to the background and into the foreground again.
- Inline JSDoc comments.

### Fix
- Failed downloads issues.  

## 1.2.1 - Dec 4, 2020

### Fix
- Publish npm packages without tests

## 1.2.0 - Dec 3, 2020

### New
- Thin binding: JS binding has become very thin - all the implementation, including network layer, was moved to the core [TON-SDK library](https://github.com/tonlabs/TON-SDK). Find out all the key changes in the [core library CHANGELOG](https://github.com/tonlabs/TON-SDK/blob/master/CHANGELOG.md), starting from 1.0.0 release.
- Mono repository: now all the platform packages are developed in the same repository, platform bridges were also moved here from core repository
- Typescript: v1 JS binding is written in Typescript
- Low level API: at the moment the library provides only low level API, **we plan to extend it with high level handy wrappers in the future releases.**
- new API reference: [core api reference documentation](https://github.com/tonlabs/TON-SDK/blob/master/docs/modules.md) provides typescript samples of function signatures. 

## 0.26.2 - Sep 21, 2020
### Fixed
- Added `Sensor.sol` contract for recompilation tests

## 0.26.1 - Sep 15, 2020
### Fixed
- `contracts.createUnsignedRunMessage` must migrate public key to header.pubkey when possible.

## 0.26.0 - August 20, 2020
### New
- All message creation functions (`createDeployMessage`, `createRunMessage`, `run`, `deploy`) now are accept 
  the optional `signingBox` as an alternative to the `keyPair`.
- `getCryptoBox` method of the `contracts` module. It creates a default `TONCryptoBox` implementation 
   that uses the core crypto module.
- More diagnostic fields `configServer`, `queryUrl` in error object. 

## 0.25.5 - August 5, 2020
### Fixed
- `waitForTransaction` didn't use prev_alt_ref for block walking 

## 0.25.4 - July 31, 2020
### Fixed
- Ability to use `crypto` module before `setup`. 

## 0.25.3 - July 29, 2020
### Fixed
- Fix test. 

## 0.25.2 - July 26, 2020
### Fixed
- Error reporting in test suite on react-native testApp. 

## 0.25.1 - July 26, 2020
### Bug fix
- TimeoutOverflowWarning: 2147488647 does not fit into a 32-bit signed integer was fixed

## 0.25.0 - July 8, 2020

### New
- `TONContractMessage` includes the `address` field (equals to the `dst`)
- Support for core contexts.
- Test suite have been refactored and can be easily adopted to run on several Js targets.
- `networkTimeout` configuration parameter for retrying GraphQL requests in case of network errors. Default value is `0` which means infinite retries until network connection will be succeeded.
- New message processing tracing. Client starts root processing span with `traceId` and `spanId` calculated from messageId. Other components can report child span without passing parent context through pipeline. 
- `messageProcessingTimeoutGrowFactor` field removed from config since it's not used 
- graphql queries can be forcible aborted on a timeout in case of a half-open TCP connection,

## 0.24.0 - June 3, 2020
### New
- Detailed errors produced by core library.
- Optional parameter `fullRun` for `runLocal` method allows to emulate an execution on a real node with all required checks and fees calculations. 
- Optional parameter `account` for `runLocal` method allows to provide the specified account data instead of loading them from a blockchain. 
- Optional result field `account` for `runLocal` and `runMessageLocal` methods returns state of an account after contract execution has finished. Presented only when the `fullRun` parameter has specified.  
- Method `runMessageLocal` as a replacement for the `processRunMessageLocal` with `fullRun` and `account` parameters. 
- `1003` error on contract run is replaced with more specific `1010`-`1012` errors
 
## 0.23.2 - May 25, 2020
### New
- Detailed errors instead of 1006.
- Babel runtime dependency has returned.
 
## 0.23.1 - May 21, 2020
### New
- Methods `serverNow()` and `serverTimeDelta()` of `TONClient` returns current server time.
- Check for a clock is out of sync before sending the first message (fail if out of sync).
- Method `waitForRunTransaction` of `contracts` module. 
- Method `waitForDeployTransaction` of `contracts` module. 
- Method `isDeployed` of `contracts` module. 
 
## 0.23.0 - May 15, 2020
### New
- Method `runGet` of `contracts` module executes get method on a local tvm.
- Method `arrayFromCONS` of `contracts` module converts CONS-list to JS arrays.
 
## 0.22.2 - May 3, 2020
### New
- keep-alive checking support for graphql subscriptions
 
## 0.22.1 - Apr 29, 2020
### Fixed
- GraphQL query will retry if network error has occurred

### New
- `aggregate` method of `TONQueriesModuleCollection` 
 
## 0.22.0 - Apr 20, 2020
### Featured
- Aggregation queries

### New
- `aggregate` method of `TONQueriesModuleCollection` 
 
## 0.21.26 - Apr 7, 2020
### Fixed
- `blocks_signatures` collection queries failed

## 0.21.25 - Apr 4, 2020
### New
- `blocks_signatures` queries collection


## 0.21.24 - Mar 27, 2020
### Featured
- Stability fixes
- Operation ID in queries 

### New
- `operationId` parameter to waitFor and query

### Fixed
- message expiration check was after sending request to node
- operationId is used to reduce inactive server listeners 


## 0.21.23 - Mar 24, 2020
### Featured
- Stability fixes 

### Fixed
- guard client initialization from several simultaneous starts. 

## 0.21.22 - Mar 23, 2020
### Featured
- Ability to use web sockets for queries and mutations 

### New
- config parameter `useWebSocketForQueries`

### Fixed
- WebSocket reconnect log record changed from `error` to `info` 

## 0.21.1 - Mar 19, 2020
### Featured
- Stability improvements 

### New
- log to console WebSocket errors and reconnections
- config parameters `retriesCount` and `transactionTimeout` have removed
- config parameters `messageRetriesCount`, `messageExpirationTimeout`, `messageExpirationTimeoutGrowFactor`, `messageProcessingTimeout`, `messageProcessingTimeoutGrowFactor`, `waitForTimeout`
- `run` method returns `transactions` with included fields `compute.gas_fees` and `compute.gas_used`
- client will try to use all addresses from `servers` config if the first server fails 

### Fixed
- enhanced reconnection procedure when WebSocket connection has failed 
- expiration retries didn't work

## 0.21.0 - Mar 12, 2020
### Featured
- ABI version 2 supported. See specification at https://docs.ton.dev
- Message expiration implemented. Check [usage guide](https://docs.ton.dev/86757ecb2/p/88321a-message-expiration-time)

### New
- `getGetDeployData` returns full contract address

## 0.20.100 - Feb 17, 2020
### New
- `registerAccessKey` parameters passed as structure. 
- `restrictToAccounts` option for access keys.
- `parseMessage` function for parsing message BOC into JSON.
- `deploy` and `processDeployMessage` functions now check the account state before sending message and return `alreadyDeployed = true` if account is already active.

## 0.20.2 - Feb 12, 2020
### Fixed
- `tracer` config parameter caused setup error (circular JSON).

## 0.20.1 - Feb 10, 2020
### Featured
- SDK Authorization support

### New
- `authorization` config parameter to specify SDK access key.
- `registerAccessKey` customer account management function.
- `revokeAccessKey` customer account management function.

### Fixed
- flow type definitions `types.js` have actualized.

## 0.20.0 - Feb 4, 2020

### New
- Open Tracing (jaeger) integration:
    1) Optional `tracer` config parameter was added. If specified, must point to opentracing.Tracer object. If not specified then opentracing `noop` tracer will be used. 
    2) TONClient.trace method to encapsulate some user code into open trace span:
        ```javascript
        async function foo(..., parentSpan) {
            return client.trace('Foo', async (fooSpan) => {
                fooSpan.setTag('params', ...);
                ...
                await client.deploy(..., fooSpan);
                ...
                await client.run(..., fooSpan);
                ...
            }, parentSpan);
        }
        async function bar(..., parentSpan) {
            return client.trace('Bar', async (barSpan) => {
                barSpan.setTag('params', ...);
                ...
                await client.deploy(..., barSpan);
                ...
                await foo(..., barSpan);
                ...
            }, parentSpan);
        }
        ````
    3) Example of creating jaeger tracer can be found in `init-tests.ts` file.
    4) All SDK functions now have hexademical address representation length check.
## 0.19.1 - January 28, 2020

### Fixed
- stability improvements (WS connection timeouts was increased)

## 0.19.0 - January 23, 2020

### New
- Waiting for account update moved from deploy to local run functions.
- More detailed verbose log.
- Check internal messages from giver (in tests).
- Functions running contracts locally (`runLocal`, `calcRunFees`, `calcMsgProcessFees`) have new parameters for waiting particular account state to run.

### Fixed
- FIX: set query timeout measurement in ms (was sec) to supports GraphQL 0.21.0.

### Breaking Compatibility
- Because waiting for account update removed from `deploy`, developers must wait for account manually if required.
