<h1>React Native JSI Library</h1>

JSI-based implementation of a bridge to mobile React Native platform including static libraries for iOS and Android.

<h1>Table of contents</h1>

- [Installation](#installation)
  - [iOS](#ios)
  - [Android](#android)
- [Setup](#setup)
- [Usage](#usage)
- [Interface](#interface)
- [Development](#development)

# Installation

```sh
yarn add @tonclient/lib-react-native-jsi
```

## iOS

Requirements: Xcode 12.5

```
cd ios && pod install && cd ..
```

## Android

Requirements: Android NDK 21.3.6528147

`android/build.gradle`

```diff
buildscript {
    // ...

    dependencies {
-        classpath('com.android.tools.build:gradle:3.5.3')
+        classpath('com.android.tools.build:gradle:4.1.0')
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
```

`android/app/build.gradle`

```diff
android {
    applicationVariants.all { variant ->
        // ...
    }
+
+    configurations {
+        all*.exclude module: 'fbjni-java-only'
+    }
+
+    packagingOptions {
+        pickFirst 'lib/*/libfbjni.so'
+        pickFirst 'lib/*/libc++_shared.so'
+    }
}

```

`android/gradle.properties`

```diff
# Version of flipper SDK to use with React Native
-FLIPPER_VERSION=0.75.1
+FLIPPER_VERSION=0.78.0
```

# Setup

`index.tsx`

```ts
import { TonClient } from '@tonclient/core';
import { libReactNativeJsi } from 'lib-react-native-jsi';

// Application initialization

TonClient.useBinaryLibrary(libReactNativeJsi);
```

# Usage

```ts
const client = new TonClient();
const keys = await client.crypto.generate_random_sign_keys();
```

# Interface

```ts
setResponseParamsHandler(
  handler: (
    requestId: number,
    params: any,
    responseType: number,
    finished: boolean
  ) => void
): void
```

Sets the response handler for `sendRequestParams`.

```ts
createContext(configJson: string): Promise<string>
```

Calls `tc_create_context` from TON SDK.

```ts
destroyContext(context: number): void
```

Calls `tc_destroy_context` from TON SDK.

```ts
sendRequestParams(
  context: number,
  requestId: number,
  functionName: string,
  functionParams: any
): void
```

Calls `tc_request_ptr` from TON SDK.

# Development

```sh
cd packages/lib-react-native-jsi
yarn install
cd example63
yarn install
cd ios
pod install
cd ..
yarn react-native start
yarn react-native run-android
yarn react-native run-ios
```
