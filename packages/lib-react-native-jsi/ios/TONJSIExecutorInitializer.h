#import <Foundation/Foundation.h>
#import <React/RCTBridge+Private.h>
#import <ReactCommon/RCTTurboModuleManager.h>
#import <jsireact/JSIExecutor.h>

NS_ASSUME_NONNULL_BEGIN

namespace tonlabs
{
  using namespace facebook::react;

  JSIExecutor::RuntimeInstaller TONJSIExecutorRuntimeInstaller(
      RCTBridge *bridge,
      JSIExecutor::RuntimeInstaller runtimeInstallerToWrap);

} // namespace tonlabs

NS_ASSUME_NONNULL_END
