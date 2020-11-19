# Release Notes
All notable changes to this project will be documented in this file.

## 0.28.1 Nov 19, 2020
### New
- Ability to disable error logs by using `_errLogVerbose` config param

## 0.28.0 Nov 6, 2020
### Fixed
- local error resolving processes `NoGas` and `NoState` errors properly

## 0.27.0 - Oct 27, 2020
### New
- `crypto.chacha20`

### Fixed
- Retry active queries on websocket reconnect

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
    3) Example of creating jaeger tracer can be found in `init-tests.js` file.
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
