#include <string>
#include <string_view>
#include <vector>
#include <utility>
#include <thread>

#include <jsi/JSIDynamic.h>
#include <folly/json.h>

#ifdef __ANDROID__
#include <fbjni/fbjni.h>
#endif

#include "tonclient.h"
#include "TonClientJsiModule.h"
#include "request_data_t.h"

using namespace std::chrono;
using namespace facebook;

namespace tonlabs
{
  jsi::Value TonClientJsiModule::setResponseParamsHandler(
      jsi::Runtime &rt,
      const jsi::Value &responseHandler)
  {
    this->responseHandler_ = std::make_unique<jsi::Function>(responseHandler.asObject(rt).asFunction(rt));
    return jsi::Value::undefined();
  }

  jsi::Value TonClientJsiModule::createContext(
      jsi::Runtime &rt,
      const jsi::Value &configJson,
      const jsi::Value &onResult)
  {
    std::string configJsonString = configJson.asString(rt).utf8(rt);
    tc_string_data_t config{configJsonString.c_str(), static_cast<uint32_t>(configJsonString.length())};
    tc_string_handle_t *json_ptr = tc_create_context(config);

    std::shared_ptr<jsi::Function> onResultPtr = std::make_shared<jsi::Function>(onResult.asObject(rt).asFunction(rt));
    this->jsCallInvoker_->invokeAsync([&rt, onResultPtr, json_ptr]
                                      {
                                        tc_string_data_t json = tc_read_string(json_ptr);
                                        std::string result(json.content, json.len);
                                        tc_destroy_string(json_ptr);
                                        onResultPtr->call(rt, jsi::Value(jsi::String::createFromUtf8(rt, result)));
                                      });

    return jsi::Value::undefined();
  }

  jsi::Value TonClientJsiModule::destroyContext(
      jsi::Runtime &rt,
      const jsi::Value &context)
  {
    tc_destroy_context(static_cast<uint32_t>(context.asNumber()));
    return jsi::Value::undefined();
  }

  jsi::Value TonClientJsiModule::sendRequestParams(
      jsi::Runtime &rt,
      const jsi::Value &context,
      const jsi::Value &requestId,
      const jsi::Value &functionName,
      const jsi::Value &functionParams)
  {
    // React Native JS thread

    request_data_t *request_data = new request_data_t;
    request_data->jsiModule = this;
    request_data->context = static_cast<uint32_t>(context.asNumber());
    request_data->requestId = static_cast<uint32_t>(requestId.asNumber());
    request_data->functionNameStdString = functionName.asString(rt).utf8(rt);

    if (!(functionParams.isObject() || functionParams.isUndefined() || functionParams.isNull()))
    {
      throw std::runtime_error("Request params must be either a JS object or undefined");
    }
    request_data->functionParamsFollyDynamic = jsi::dynamicFromValue(rt, functionParams);

    std::thread thread([request_data] { // worker thread

#ifdef __ANDROID__
      jni::ThreadScope::WithClassLoader([request_data] { // thread attached to JVM
#endif
        tc_string_data_t function_name{
            request_data->functionNameStdString.c_str(),
            static_cast<uint32_t>(request_data->functionNameStdString.length())};

        if (request_data->functionParamsFollyDynamic.isObject())
        {
          // replace blobs with strings
          const auto &blobManager = request_data->jsiModule->blobManager_;
          for (auto &value : request_data->functionParamsFollyDynamic.values())
          {
            if (value.isObject())
            {
              if (value["_data"].isObject())
              {
                value = blobManager->resolve(Blob::fromDynamic(value));
                request_data->useBlobs = true;
              }
              else
              {
                // TODO: handle nested objects
              }
            }
          }
          request_data->functionParamsJsonStdString = folly::toJson(request_data->functionParamsFollyDynamic);
        }
        else
        {
          request_data->functionParamsJsonStdString = "";
        }

        tc_string_data_t function_params_json{
            request_data->functionParamsJsonStdString.c_str(),
            static_cast<uint32_t>(request_data->functionParamsJsonStdString.length())};

        tc_response_handler_ptr_t response_handler =
            [](void *request_ptr, tc_string_data_t params_json, uint32_t response_type, bool finished) -> void { // either TON SDK worker thread or calling thread

#ifdef __ANDROID__
          jni::ThreadScope::WithClassLoader([&] { // thread attached to JVM
#endif
            request_data_t *request_data = reinterpret_cast<request_data_t *>(request_ptr);

            request_data->responseParamsFollyDynamic = folly::parseJson(std::string_view(params_json.content, params_json.len));

            // replace strings with blobs
            const auto &blobManager = request_data->jsiModule->blobManager_;
            for (auto &[key, value] : request_data->responseParamsFollyDynamic.items())
            {
              if (value.isString() && request_data->useBlobs)
              {
                request_data->blobs.emplace_back(key.asString(), std::make_unique<Blob>(blobManager->store(value.asString())));
                value = nullptr; // placeholder for JS Blob
              }
              else if (value.isObject())
              {
                // TODO: handle nested objects
              }
            }

            auto &jsCallInvoker = request_data->jsiModule->jsCallInvoker_;
            jsCallInvoker->invokeAsync([request_data, response_type, finished]
                                       {
                                         // React Native JS thread

                                         auto &responseHandler = request_data->jsiModule->responseHandler_;
                                         auto &rt = request_data->jsiModule->runtime_;
                                         auto &requestId = request_data->requestId;

                                         jsi::Object responseParams = jsi::valueFromDynamic(rt, request_data->responseParamsFollyDynamic).asObject(rt);

                                         // replace placeholders with created JS Blob objects
                                         for (const auto &[key, blob] : request_data->blobs)
                                         {
                                           responseParams.setProperty(rt, jsi::String::createFromUtf8(rt, key), blob->toValue(rt));
                                         }

                                         responseHandler->call(rt,
                                                               jsi::Value(static_cast<int>(requestId)),
                                                               responseParams,
                                                               jsi::Value(static_cast<int>(response_type)),
                                                               jsi::Value(finished));

                                         if (finished)
                                         {
                                           delete request_data;
                                         }
                                       }); // invokeAsync
#ifdef __ANDROID__
          }); // jni::ThreadScope::WithClassLoader
#endif
        }; // response_handler

        tc_request_ptr(request_data->context, function_name, function_params_json, request_data, response_handler);

#ifdef __ANDROID__
      }); // jni::ThreadScope::WithClassLoader
#endif
    }); // std::thread

    thread.detach();

    return jsi::Value::undefined();
  }

} // namespace tonlabs