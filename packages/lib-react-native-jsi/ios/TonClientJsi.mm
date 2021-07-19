#import <React/RCTBridge+Private.h>
#import <React/RCTUtils.h>
#import <React/RCTBlobManager.h>
#import <ReactCommon/RCTTurboModuleManager.h>

#import "TonClientJsiModule.h"
#import "TonClientJsi.h"

@implementation TonClientJsi

@synthesize bridge = _bridge;
@synthesize methodQueue = _methodQueue;

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

- (void)setBridge:(RCTBridge *)bridge
{
  _bridge = bridge;
  _setBridgeOnMainQueue = RCTIsMainQueue();

  RCTCxxBridge *cxxBridge = (RCTCxxBridge *)self.bridge;
  if (!cxxBridge.runtime) {
    return;
  }

  auto jsCallInvoker = bridge.jsCallInvoker;

  jsi::Runtime *runtime = reinterpret_cast<facebook::jsi::Runtime *>(cxxBridge.runtime);

  RCTBlobManager *reactBlobManager = [bridge moduleForName:@"BlobModule"];

  std::unique_ptr<tonlabs::BlobManager> blobManager =
    std::make_unique<tonlabs::BlobManager>(reactBlobManager);

  std::unique_ptr<tonlabs::TonClientJsiModule> tonClientJsiModule =
    std::make_unique<tonlabs::TonClientJsiModule>(*runtime, jsCallInvoker, std::move(blobManager));

  runtime->global().setProperty(
    *runtime,
    jsi::PropNameID::forAscii(*runtime, "tonClientJsiModule"),
    jsi::Object::createFromHostObject(*runtime, std::move(tonClientJsiModule)));
}

- (void)invalidate {

}

@end
