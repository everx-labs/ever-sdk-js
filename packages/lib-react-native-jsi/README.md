# React Native JSI Library

JSI-based implementation of a bridge to mobile React Native platform including static libraries for iOS and Android.

## Installation

```sh
yarn add @tonclient/lib-react-native-jsi
```

## Usage

`index.tsx`

```ts
import { TonClient } from '@tonclient/core';
import { libReactNativeJsi } from 'lib-react-native-jsi';

TonClient.useBinaryLibrary(libReactNativeJsi);
```

## Interface

```ts
setResponseHandler(
  responseHandler: (
    requestId: number,
    paramsJson: string,
    responseType: number,
    finished: boolean
  ) => void): void
```

Sets the response handler for `sendRequest`.

```ts
createContext(configJson: string, resolve): void
```

Calls `tc_create_context` from Ton Client SDK.

```ts
destroyContext(context: number): void
```

Calls `tc_destroy_context` from Ton Client SDK.

```ts
sendRequest(
  context: number,
  requestId: number,
  functionName: string,
  functionParamsJson: string
): void
```

Calls `tc_request_ptr` from Ton Client SDK.

## Development

```sh
yarn install
cd example64
yarn install
cd ios && pod install && cd ..
```

```sh
yarn react-native start
yarn react-native run-android
yarn react-native run-ios
```

```sh
rm -rf node_modules
cd example
rm -rf node_modules
cd ios && pod deintegrate && rm -rf Pods && cd ..
```
