# Release Notes
All notable changes to this project will be documented in this file.

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
