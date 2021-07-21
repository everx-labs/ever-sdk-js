#import <React/JSCExecutorFactory.h>
#import <React/RCTBridge+Private.h>
#import <React/RCTBlobManager.h>
#import <ReactCommon/RCTTurboModuleManager.h>

#import "UIResponder+TonClientJsi.h"
#import "TonClientJsiModule.h"

@implementation UIResponder (TonClientJsi)

- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge
{
  __weak __typeof(self) weakSelf = self;
  return std::make_unique<facebook::react::JSCExecutorFactory>([weakSelf, bridge](facebook::jsi::Runtime &runtime) {
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
  });
}

@end
