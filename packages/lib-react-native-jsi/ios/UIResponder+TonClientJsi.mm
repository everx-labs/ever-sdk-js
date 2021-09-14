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

#import "TONJSIExecutorInitializer.h"
#import "UIResponder+TonClientJsi.h"

#ifndef DONT_AUTOINSTALL_TONCLIENTJSI

@implementation UIResponder (TonClientJsi)

- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge
{
  const auto installer = tonlabs::TONJSIExecutorRuntimeInstaller(bridge, nullptr);

#if RNVERSION >= 64
  // installs globals such as console, nativePerformanceNow, etc.
  return std::make_unique<ExecutorFactory>(facebook::react::RCTJSIExecutorRuntimeInstaller(installer));
#else
  return std::make_unique<ExecutorFactory>(installer);
#endif
}

@end

#endif // DONT_AUTOINSTALL_TONCLIENTJSI
