#pragma once

#include <jsi/jsi.h>
#include <ReactCommon/CallInvoker.h>

#include "NativeModules.h"
#include "BlobManager.h"

using namespace facebook;

namespace tonlabs
{
  class TonClientJsiModule : public facebook::react::SchemaCxxSpecJSI
  {
  public:
    jsi::Value setResponseParamsHandler(
        jsi::Runtime &rt,
        const jsi::Function &responseHandler) override;

    jsi::Value createContext(
        jsi::Runtime &rt,
        const jsi::String &configJson,
        const jsi::Function &onResult) override;

    jsi::Value destroyContext(
        jsi::Runtime &rt,
        const jsi::Value &context) override;

    jsi::Value sendRequestParams(
        jsi::Runtime &rt,
        const jsi::Value &context,
        const jsi::Value &requestId,
        const jsi::Value &functionName,
        const jsi::Value &functionParams) override;

    TonClientJsiModule(
        jsi::Runtime &runtime,
        std::shared_ptr<facebook::react::CallInvoker> jsCallInvoker,
        std::unique_ptr<tonlabs::BlobManager> blobManager)
        : facebook::react::SchemaCxxSpecJSI(jsCallInvoker),
          runtime_(runtime),
          jsCallInvoker_(jsCallInvoker),
          blobManager_(std::move(blobManager)){};

  private:
    jsi::Runtime &runtime_;
    std::shared_ptr<facebook::react::CallInvoker> jsCallInvoker_;
    std::unique_ptr<tonlabs::BlobManager> blobManager_;
    std::shared_ptr<jsi::Function> responseHandler_;
  };

} // namespace tonlabs
