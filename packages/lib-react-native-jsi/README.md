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

`UIResponder+AppName.h`

```mm
#import <Foundation/Foundation.h>
#import <React/RCTCxxBridgeDelegate.h>

@interface UIResponder (AppName) <RCTCxxBridgeDelegate>

@end
```

`UIResponder+AppName.mm`

```mm
#import "UIResponder+AppName.h"

#import <RNReanimated/REAInitializer.h>
#import <lib-react-native-jsi/TONJSIExecutorInitializer.h>

#if __has_include(<reacthermes/HermesExecutorFactory.h>)
#import <reacthermes/HermesExecutorFactory.h>
typedef HermesExecutorFactory ExecutorFactory;
#elif __has_include(<React/HermesExecutorFactory.h>)
#import <React/HermesExecutorFactory.h>
typedef HermesExecutorFactory ExecutorFactory;
#else
#import <React/JSCExecutorFactory.h>
typedef JSCExecutorFactory ExecutorFactory;
#endif

#if __has_include(<React/RCTJSIExecutorRuntimeInstaller.h>)
#import <React/RCTJSIExecutorRuntimeInstaller.h>
#endif

@implementation UIResponder (AppName)
- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge
{
  const auto installer = tonlabs::TONJSIExecutorRuntimeInstaller(bridge, reanimated::REAJSIExecutorRuntimeInstaller(bridge, NULL));

#if __has_include(<React/RCTJSIExecutorRuntimeInstaller.h>)
  // installs globals such as console, nativePerformanceNow, etc.
  return std::make_unique<ExecutorFactory>(RCTJSIExecutorRuntimeInstaller(installer));
#else
  return std::make_unique<ExecutorFactory>(installer);
#endif
}

@end
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

```

```
