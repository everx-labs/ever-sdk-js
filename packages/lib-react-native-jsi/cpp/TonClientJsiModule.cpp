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

    if (!(functionParams.isObject() || functionParams.isUndefined() || functionParams.isNull()))
    {
      throw std::runtime_error("Request params must be either a JS object or undefined");
    }

    request_data_t *request_data = new request_data_t;
    request_data->jsiModule = this;
    request_data->context = static_cast<uint32_t>(context.asNumber());
    request_data->requestId = static_cast<uint32_t>(requestId.asNumber());

    std::string functionNameStdString = functionName.asString(rt).utf8(rt);

    auto functionParamsFollyDynamic = std::make_shared<folly::dynamic>(jsi::dynamicFromValue(rt, functionParams));

    std::thread thread([request_data, functionNameStdString, functionParamsFollyDynamic] { // worker thread

#ifdef __ANDROID__
      jni::ThreadScope::WithClassLoader([&] { // thread attached to JVM
#endif
        tc_string_data_t function_name{
            functionNameStdString.c_str(),
            static_cast<uint32_t>(functionNameStdString.length())};

        request_data->returnBlob = [&]
        {
          if (functionParamsFollyDynamic->isObject())
          {
            // override behaviour with return_blob parameter
            const auto &value = (*functionParamsFollyDynamic)["return_blob"];
            if (value == "blob")
            {
              return true;
            }
            if (value == "base64")
            {
              return false;
            }

            // if there is any blob in the request params, then all strings in the response will be replaced with blobs
            for (const auto &[key, value] : functionParamsFollyDynamic->items())
            {
              if (value.isObject())
              {
                if (value.find("_data") != value.items().end())
                {
                  return true;
                }
                else
                {
                  // TODO: handle nested objects
                }
              }
            }
          }

          return false; // default
        }();

        std::string functionParamsJsonStdString = [&]() -> std::string
        {
          if (functionParamsFollyDynamic->isObject())
          {
            // replace blobs with strings
            const auto &blobManager = request_data->jsiModule->blobManager_;
            for (auto &[key, value] : functionParamsFollyDynamic->items())
            {
              if (value.isObject())
              {
                if (value.find("_data") != value.items().end())
                {
                  value = blobManager->resolve(Blob::fromDynamic(value));
                }
                else
                {
                  // TODO: handle nested objects
                }
              }
            }
            return folly::toJson(*functionParamsFollyDynamic);
          }
          else
          {
            return "";
          }
        }(); // IIFE

        tc_string_data_t function_params_json{
            functionParamsJsonStdString.c_str(),
            static_cast<uint32_t>(functionParamsJsonStdString.length())};

        tc_response_handler_ptr_t response_handler =
            [](void *request_ptr, tc_string_data_t params_json, uint32_t response_type, bool finished) -> void { // either TON SDK worker thread or calling thread

#ifdef __ANDROID__
          jni::ThreadScope::WithClassLoader([&] { // thread attached to JVM
#endif
            request_data_t *request_data = reinterpret_cast<request_data_t *>(request_ptr);

            auto responseParamsFollyDynamic = std::make_shared<folly::dynamic>(
                params_json.len > 0 ? folly::parseJson(std::string_view(params_json.content, params_json.len)) : "");

            // replace strings with blobs
            auto blobs = std::make_shared<std::vector<std::pair<std::string, std::unique_ptr<Blob>>>>();
            if (responseParamsFollyDynamic->isObject())
            {
              const auto &blobManager = request_data->jsiModule->blobManager_;
              for (auto &[key, value] : responseParamsFollyDynamic->items())
              {
                if (value.isString() && request_data->returnBlob)
                {
                  blobs->emplace_back(key.asString(), std::make_unique<Blob>(blobManager->store(value.asString())));
                  value = ""; // placeholder for JS Blob
                }
                else if (value.isObject())
                {
                  // TODO: handle nested objects
                }
              }
            }

            auto &jsiModule = request_data->jsiModule;

            auto &jsCallInvoker = request_data->jsiModule->jsCallInvoker_;
            jsCallInvoker->invokeAsync([request_data, response_type, finished, responseParamsFollyDynamic, blobs]
                                       {
                                         // React Native JS thread

                                         auto &responseHandler = request_data->jsiModule->responseHandler_;
                                         auto &rt = request_data->jsiModule->runtime_;
                                         auto &requestId = request_data->requestId;

                                         jsi::Value responseParams = jsi::valueFromDynamic(rt, *responseParamsFollyDynamic);

                                         // replace placeholders with created JS Blob objects
                                         for (const auto &[key, blob] : *blobs)
                                         {
                                           responseParams.asObject(rt).setProperty(rt, jsi::String::createFromUtf8(rt, key), blob->toValue(rt));
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

            if (finished)
            {
              jsiModule->decrementActiveRequests();
            }
#ifdef __ANDROID__
          }); // jni::ThreadScope::WithClassLoader
#endif
        }; // response_handler

        request_data->jsiModule->incrementActiveRequests();

        tc_request_ptr(request_data->context, function_name, function_params_json, request_data, response_handler);

#ifdef __ANDROID__
      }); // jni::ThreadScope::WithClassLoader
#endif
    }); // std::thread

    thread.detach();

    return jsi::Value::undefined();
  }

} // namespace tonlabs
