#import <React/RCTBridge+Private.h>
#import <React/RCTBlobManager.h>
#import <ReactCommon/RCTTurboModuleManager.h>

#if __has_include(<reacthermes/HermesExecutorFactory.h>)
#import <reacthermes/HermesExecutorFactory.h>
typedef facebook::react::HermesExecutorFactory ExecutorFactory;
#elif __has_include(<React/HermesExecutorFactory.h>)
#import <React/HermesExecutorFactory.h>
typedef facebook::react::HermesExecutorFactory ExecutorFactory;
#else
#import <React/JSCExecutorFactory.h>
typedef facebook::react::JSCExecutorFactory ExecutorFactory;
#endif

#if RNVERSION >= 64
#import <React/RCTJSIExecutorRuntimeInstaller.h>
#endif

#import "UIResponder+TonClientJsi.h"
#import "TonClientJsiModule.h"

#ifndef DONT_AUTOINSTALL_TONCLIENTJSI

@implementation UIResponder (TonClientJsi)

- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge
{
  __weak __typeof(self) weakSelf = self;

  auto executor = [weakSelf, bridge](facebook::jsi::Runtime &runtime) {
    if (!bridge) {
      return;
    }

    __typeof(self) strongSelf = weakSelf;
    if (!strongSelf) {
      return;
    }

    auto jsCallInvoker = bridge.jsCallInvoker;

    RCTBlobManager *reactBlobManager = [bridge moduleForName:@"BlobModule"];

    std::unique_ptr<tonlabs::BlobManager> blobManager =
      std::make_unique<tonlabs::BlobManager>(reactBlobManager);

    std::unique_ptr<tonlabs::TonClientJsiModule> tonClientJsiModule =
      std::make_unique<tonlabs::TonClientJsiModule>(runtime, jsCallInvoker, std::move(blobManager));

    runtime.global().setProperty(
      runtime,
      jsi::PropNameID::forAscii(runtime, "tonClientJsiModule"),
      jsi::Object::createFromHostObject(runtime, std::move(tonClientJsiModule)));
  };

#if RNVERSION >= 64
  // installs globals such as console, nativePerformanceNow, etc.
  return std::make_unique<ExecutorFactory>(facebook::react::RCTJSIExecutorRuntimeInstaller(executor));
#else
  return std::make_unique<ExecutorFactory>(executor);
#endif
}

@end

#endif // DONT_AUTOINSTALL_TONCLIENTJSI
