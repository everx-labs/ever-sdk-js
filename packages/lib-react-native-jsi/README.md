<h1>React Native JSI Library</h1>

JSI-based implementation of a bridge to mobile React Native platform including static libraries for iOS and Android.

<h1>Table of contents</h1>

- [Installation](#installation)
  - [iOS](#ios)
  - [Android](#android)
- [Setup](#setup)
- [Usage](#usage)
- [Interface](#interface)
- [Blob support](#blob-support)
- [Development](#development)
- [Testing](#testing)

# Installation

```sh
yarn add @tonclient/lib-react-native-jsi
```

## iOS

Requirements: Xcode 12.5

```
cd ios && pod install && cd ..
```

On iOS, the library is installed automatically. However, currently it is not possible to autoinstall more than one JSI library. In order to use lib-react-native-jsi and [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) simultaneously, you need to enable `DONT_AUTOINSTALL_*` flags in Podfile and register JSI bindings in `jsExecutorFactoryForBridge` method:

`Podfile`

```rb
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['OTHER_CPLUSPLUSFLAGS'] = '-DDONT_AUTOINSTALL_REANIMATED -DDONT_AUTOINSTALL_TONCLIENTJSI'
    end
  end
end
```

> **Note:** Don't forget to run `pod install` after doing that.

Then, rename `AppDelegate.m` to `AppDelegate.mm` in order to compile this file as Objective-C++.

> **Note:** It's important to do it with Xcode, so that the project references are updated accordingly.

`AppDelegate.mm`

```diff
#import "AppDelegate.h"

...

+#import <React/RCTCxxBridgeDelegate.h>
+#import <RNReanimated/REAInitializer.h>
+#import <lib-react-native-jsi/TONJSIExecutorInitializer.h>

+#if __has_include(<reacthermes/HermesExecutorFactory.h>)
+#import <reacthermes/HermesExecutorFactory.h>
+typedef HermesExecutorFactory ExecutorFactory;
+#elif __has_include(<React/HermesExecutorFactory.h>)
+#import <React/HermesExecutorFactory.h>
+typedef HermesExecutorFactory ExecutorFactory;
+#else
+#import <React/JSCExecutorFactory.h>
+typedef JSCExecutorFactory ExecutorFactory;
+#endif

+#if __has_include(<React/RCTJSIExecutorRuntimeInstaller.h>)
+#import <React/RCTJSIExecutorRuntimeInstaller.h>
+#endif

...

+@interface AppDelegate() <RCTCxxBridgeDelegate>
+
+@end

@implementation AppDelegate

...

+- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge
+{
+  const auto installer = tonlabs::TONJSIExecutorRuntimeInstaller(bridge, reanimated::REAJSIExecutorRuntimeInstaller(bridge, NULL));
+
+#if __has_include(<React/RCTJSIExecutorRuntimeInstaller.h>)
+  // installs globals such as console, nativePerformanceNow, etc.
+  return std::make_unique<ExecutorFactory>(RCTJSIExecutorRuntimeInstaller(installer));
+#else
+  return std::make_unique<ExecutorFactory>(installer);
+#endif
+}

@end

```

> **Note:** Make sure that your project uses C++14 or higher. You can change C++ Language Dialect in the Build Settings of your project.

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
+FLIPPER_VERSION=0.93.0
```

`android/app/src/main/java/.../MainApplication.java`

```diff
+import com.facebook.react.bridge.JSIModulePackage;
+import com.tonlabs.tonclientjsi.TonClientJSIModulePackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        ...

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

+        @Override
+        protected JSIModulePackage getJSIModulePackage() {
+          return new TonClientJSIModulePackage();
+        }
      };
```

If you wish to use lib-react-native-jsi and [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) simultaneously, you need to initialize all JSI libraries in `getJSIModules` method of a custom `JSIModulePackage` instance:

```diff
+import com.facebook.react.bridge.JavaScriptContextHolder;
+import com.facebook.react.bridge.JSIModuleSpec;
+import com.facebook.react.bridge.JSIModulePackage;
+import com.facebook.react.bridge.ReactApplicationContext;
+import com.swmansion.reanimated.ReanimatedJSIModulePackage;
+import com.tonlabs.tonclientjsi.TonClientJSIModulePackage;
+import java.util.Arrays;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        ...

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

+        @Override
+        protected JSIModulePackage getJSIModulePackage() {
+          return new JSIModulePackage() {
+            @Override
+            public List<JSIModuleSpec> getJSIModules(final ReactApplicationContext reactApplicationContext, final JavaScriptContextHolder jsContext) {
+              new ReanimatedJSIModulePackage().getJSIModules(reactApplicationContext, jsContext);
+              new TonClientJSIModulePackage().getJSIModules(reactApplicationContext, jsContext);
+              return Arrays.<JSIModuleSpec>asList();
+            }
+          };
+        }
      };
```

`android/app/src/main/AndroidManifest.xml`

```diff
<manifest>
  <application>
+    <provider
+      android:name="com.facebook.react.modules.blob.BlobProvider"
+      android:authorities="@string/blob_provider_authority"
+      android:exported="false"
+    />
  </application>
</manifest>
```

`android/app/src/main/res/values/strings.xml`

```diff
<resources>
  ...
+  <string name="blob_provider_authority">your.app.package.blobs</string>
</resources>
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

# Blob support

In React Native app, you can load any resource as JS Blob (binary large object) using `fetch` function and `blob` method:

```js
const url = '...'; // path to a local file or a remote resource
const response = await fetch(url);
const blob = await response.blob();
```

Then you can create an object URL for the provided blob:

```js
const objectURL = URL.createObjectURL(blob);
```

> **Note:** On Android, it is necessary to register `BlobProvider` as a ContentProvider in order to create object URLs for blobs ([see details](https://github.com/facebook/react-native/blob/33ef82ce6dfd31e1f990d438c925a0e52723e16b/Libraries/Blob/URL.js#L27-L50)). On iOS, there is no additional configuration required.

Finally, you can pass the object URL directly as source prop of React Native `<Image />` component:

```jsx
<Image source={{ uri: objectURL }} />
```

> **Note:** There is a problem with accessing blobs greater than 64 KB on Android (see [this issue](https://github.com/facebook/react-native/issues/31774)) on React Native 0.64.2 and earlier. Please use React Native 0.65.0+ or alternatively build older version of React Native from sources with the fix from [this pull request](https://github.com/facebook/react-native/pull/31789).

It is also possible to pass blob object URL directly as source prop of `<Pdf />` component from [react-native-pdf](https://github.com/wonday/react-native-pdf):

```jsx
<Pdf source={{ uri: objectURL }} />
```

> **Note**: The above requires [this pull request](https://github.com/wonday/react-native-pdf/pull/581) which has not been merged yet.

> **Note**: It is advisable to keep the reference to the Blob object as long as its object URL is used with other components. Otherwise, the JavaScript garbage collector may collect the JS Blob object and consequently deallocate the memory associated with this blob (both on [Android](https://github.com/facebook/react-native/blob/4fcf46813152f5555a79ecb0ab06fe5d84e21624/ReactAndroid/src/main/java/com/facebook/react/modules/blob/jni/BlobCollector.cpp#L27-L34) and [iOS](https://github.com/facebook/react-native/blob/1465c8f3874cdee8c325ab4a4916fda0b3e43bdb/Libraries/Blob/RCTBlobCollector.mm#L19-L25)). This will lead to a crash due to bad memory access when the component tries to access blob data again, for example during UI interaction or re-render.

After you're done with the object URL, don't forget to revoke it:

```js
URL.revokeObjectURL(objectURL);
```

> **Note:** Currently, the React Native implementation [does nothing](https://github.com/facebook/react-native/blob/4fcf46813152f5555a79ecb0ab06fe5d84e21624/Libraries/Blob/URL.js#L123-L125), but this function is still a part of [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL_API).

This library provides two ways of transferring large binary payloads between React Native and TON SDK:

- as base64-encoded JS strings
- as raw binary JS Blobs

You can pass each request param individually either as a string or a blob to `lib.sendRequestParams` method and consequently to any of TON Client JS bindings. All JS Blobs in the request params will be resolved and converted to base64-encoded strings and then JSON-serialized on a worker thread to avoid UI freezes before calling `tc_request_ptr` function from TON SDK.

By default, if there is any JS Blob in the request params, then all strings in the response params will also be converted to JS Blobs. Otherwise, all strings will be returned as regular JS strings.

You can override this behaviour by passing additional parameter `response_binary_type` in the request params with either of following values:

- `base64` &ndash; all string response params will be returned as original strings returned from TON SDK

- `blob` &ndash; all string response params will decoded from base64 and returned as raw binary JS Blobs

In the following example, the generated bytes are returned as a blob. Without `response_binary_type` parameter, the random payload would be returned as base64-encoded string, because there are no blobs in the request params.

```js
const { bytes } = await client.crypto.generate_random_bytes({
  length: 1024,
  response_binary_type: 'blob',
}); // returns bytes as blob
```

In the example below, we calculate the hash of the provided blob and force the response binary type to string. Without `response_binary_type` parameter, the hash would be returned as a blob.

```js
const { hash } = await client.crypto.sha512({
  data: decrypted,
  response_binary_type: 'base64',
}); // returns hash as string
```

# Development

First, install the dependencies in `lib-react-native-jsi` directory:

```sh
cd packages/lib-react-native-jsi
yarn install
```

The library comes with example apps for different versions of React Native. Before running each example app, it is necessary to install its dependencies using `yarn install` as well as its CocoaPods dependencies using `pod install` in `ios` directory.

```sh
cd example63
yarn install
cd ios
pod install
cd ..
```

Then you can build and run the example app on Android or iOS with the following commands:

```sh
yarn react-native start
yarn react-native run-android
yarn react-native run-ios
```

Please remember to set appropriate version of React Native in `lib-react-native-jsi` when developing `example63`, `example64` and `example65` apps using the following commands:

```sh
cd lib-react-native-jsi
yarn add react-native@0.63.4
yarn add react-native@0.64.0
yarn add react-native@0.65.1
```

# Testing

For testing purposes, use `tests-lib-react-native-jsi` tests runner.

First pack the dependent libraries into `*.tgz` archives:

```sh
cd packages/core
npm i
npx tsc
npm pack

cd ../tests
npm i
npx tsc
npm pack

cd ../lib-react-native-jsi
yarn install
npm pack
```

Then, install the dependencies from `*.tgz` archives:

```sh
cd ../tests-react-native-jsi
npm add file:../core/eversdk-core-1.30.1.tgz
npm add file:../tests/eversdk-tests-1.30.1.tgz
npm add file:../lib-react-native-jsi/eversdk-lib-react-native-jsi-1.30.1.tgz
npm i
cd ios
pod install
cd ..
```

> **Note:** Please update the version in the filenames appropriately.

Finally, you can launch the tests runner with the following commands:

```sh
node run ios
node run android
```
