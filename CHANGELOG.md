# Release Notes
All notable changes to this project will be documented in this file.

## 0.20.0 - Feb 4, 2020

### New
- Open Tracing (jaeger) integration:
    1) `jaegerEndpoint` config parameter.
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
