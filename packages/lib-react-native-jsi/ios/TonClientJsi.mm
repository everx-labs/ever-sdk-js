#import <React/RCTBridge+Private.h>
#import <React/RCTUtils.h>
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

  std::shared_ptr<tonlabs::TonClientJsiModule> tonClientJsiModule =
      std::make_shared<tonlabs::TonClientJsiModule>(*runtime, jsCallInvoker);

  runtime->global().setProperty(
      *runtime,
      jsi::PropNameID::forAscii(*runtime, "tonClientJsiModule"),
      jsi::Object::createFromHostObject(*runtime, tonClientJsiModule));
}

- (void)invalidate {

}

@end
