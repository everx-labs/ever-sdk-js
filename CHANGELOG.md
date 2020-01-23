# Release Notes
All notable changes to this project will be documented in this file.

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
