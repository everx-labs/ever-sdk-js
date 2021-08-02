#pragma once

#include <condition_variable>
#include <mutex>

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
        const jsi::Value &responseHandler) override;

    jsi::Value createContext(
        jsi::Runtime &rt,
        const jsi::Value &configJson,
        const jsi::Value &onResult) override;

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

    ~TonClientJsiModule()
    {
      // prevents JS runtime deallocation until all pending requests are complete
      std::unique_lock<std::mutex> lock(this->mutex_);
      this->cv_.wait(lock, [this]
                     { return this->activeRequests_ == 0; });
    }

  private:
    jsi::Runtime &runtime_;
    std::shared_ptr<facebook::react::CallInvoker> jsCallInvoker_;
    std::unique_ptr<tonlabs::BlobManager> blobManager_;
    std::unique_ptr<jsi::Function> responseHandler_;

    std::condition_variable cv_;
    std::mutex mutex_;
    unsigned int activeRequests_ = 0;

    void incrementActiveRequests()
    {
      const std::lock_guard<std::mutex> lock(this->mutex_);
      ++this->activeRequests_;
    }

    void decrementActiveRequests()
    {
      {
        const std::lock_guard<std::mutex> lock(this->mutex_);
        --this->activeRequests_;
      }
      this->cv_.notify_one();
    }
  };

} // namespace tonlabs
