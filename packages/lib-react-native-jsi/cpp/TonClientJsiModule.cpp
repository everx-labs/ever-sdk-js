#include <string>
#include <string_view>
#include <vector>
#include <tuple>
#include <queue>
#include <utility>
#include <functional>
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
      throw std::runtime_error("Request params must be a JS object, undefined or null");
    }

    request_data_t *request_data = new request_data_t;
    request_data->jsiModule = this;
    request_data->requestId = static_cast<uint32_t>(requestId.asNumber());

    const uint32_t context_uint32 = static_cast<uint32_t>(context.asNumber());

    std::string functionNameStdString = functionName.asString(rt).utf8(rt);

    auto functionParamsFollyDynamic = std::make_shared<folly::dynamic>(jsi::dynamicFromValue(rt, functionParams));

    auto functionParamsSharedPtr = std::make_shared<jsi::Value>(jsi::Value(rt, functionParams)); // to keep the JS object alive in worker thread and prevent deallocating blobs before they get resolved

    // React Native JS Blobs are registered in `NativeModule.createFromParts` method which is asynchronous.
    // Using `invokeAsync` here ensures that the following code will be executed after the blob is registered.
    // Otherwise, the JS code might run continuously without any await/async operations,
    // so the blob might not be available yet when trying to resolve it from the worker thread.
    this->jsCallInvoker_->invokeAsync(
        [this, request_data, context_uint32, functionNameStdString, functionParamsFollyDynamic, functionParamsSharedPtr]
        {
          // JS thread

          std::thread thread([this, request_data, context_uint32, functionNameStdString, functionParamsFollyDynamic, functionParamsSharedPtr] { // worker thread

#ifdef __ANDROID__
            jni::ThreadScope::WithClassLoader([&] { // thread attached to JVM
#endif
              tc_string_data_t function_name{
                  functionNameStdString.c_str(),
                  static_cast<uint32_t>(functionNameStdString.length())};

              // if `response_binary_type` request param is set to 'blob'
              // or there is any blob in the request params and `response_binary_type` is not set,
              // then all strings in the response params will be converted from base64 to raw binary JS Blobs
              request_data->returnBlob = [&]
              {
                if (functionParamsFollyDynamic->isObject())
                {
                  // override behaviour with `response_binary_type` parameter
                  const auto &value = (*functionParamsFollyDynamic)["response_binary_type"];
                  if (value == "blob")
                  {
                    return true;
                  }
                  if (value == "base64")
                  {
                    return false;
                  }

                  // if there is any blob in the request params, then all strings in the response will be replaced with blobs
                  std::queue<std::reference_wrapper<folly::dynamic>> queue;
                  queue.push(*functionParamsFollyDynamic);

                  while (!queue.empty())
                  {
                    folly::dynamic &obj = queue.front().get();
                    queue.pop();

                    for (auto &[key, value] : obj.items())
                    {
                      if (value.isObject())
                      {
                        if (value.find("_data") != value.items().end())
                        {
                          return true;
                        }
                        else
                        {
                          queue.push(value);
                        }
                      }
                    }
                  }
                }

                return false; // default
              }();

              const std::string functionParamsJsonStdString = [&]() -> std::string
              {
                if (functionParamsFollyDynamic->isObject())
                {
                  // replace blobs with strings
                  const auto &blobManager = request_data->jsiModule->blobManager_;
                  std::queue<std::reference_wrapper<folly::dynamic>> queue;
                  queue.push(*functionParamsFollyDynamic);

                  while (!queue.empty())
                  {
                    folly::dynamic &obj = queue.front().get();
                    queue.pop();

                    for (auto &[key, value] : obj.items())
                    {
                      if (value.isObject())
                      {
                        if (value.find("_data") != value.items().end())
                        {
                          value = blobManager->resolve(Blob::fromDynamic(value));
                        }
                        else
                        {
                          queue.push(value);
                        }
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

                  TonClientJsiModule *jsiModule = request_data->jsiModule;
                  const uint32_t requestId = request_data->requestId;
                  const bool returnBlob = request_data->returnBlob;

                  if (finished)
                  {
                    delete request_data;
                  }

                  folly::json::serialization_opts opts;
                  opts.recursion_limit = 10000; // required for "tvm: run_get"

                  auto responseParamsFollyDynamic = std::make_shared<folly::dynamic>(
                      params_json.len > 0 ? folly::parseJson(std::string_view(params_json.content, params_json.len), opts) : "");

                  // replace strings with placeholders
                  auto blobs = std::make_shared<std::vector<std::tuple<const std::vector<std::string>, std::string, std::unique_ptr<Blob>>>>(); // list of blobs to replace on JS thread (path, key, blob)
                  if (responseParamsFollyDynamic->isObject())
                  {
                    const auto &blobManager = jsiModule->blobManager_;
                    std::queue<std::pair<const std::vector<std::string>, std::reference_wrapper<folly::dynamic>>> queue;
                    queue.emplace(std::vector<std::string>(), *responseParamsFollyDynamic);

                    while (!queue.empty())
                    {
                      auto &item = queue.front();
                      const std::vector<std::string> &path = item.first;
                      folly::dynamic &obj = item.second.get();

                      for (auto &[key, value] : obj.items())
                      {
                        if (value.isString() && returnBlob)
                        {
                          blobs->emplace_back(path, key.asString(), std::make_unique<Blob>(blobManager->store(value.asString())));
                          value = ""; // placeholder for JS Blob
                        }
                        else if (value.isObject())
                        {
                          std::vector<std::string> new_path(path);
                          new_path.push_back(key.asString());
                          queue.emplace(new_path, value);
                        }
                      }

                      queue.pop();
                    }
                  }

                  auto &jsCallInvoker = jsiModule->jsCallInvoker_;
                  jsCallInvoker->invokeAsync(
                      [request_data, response_type, finished, responseParamsFollyDynamic, blobs, requestId, jsiModule]
                      {
                        // React Native JS thread

                        auto &responseHandler = jsiModule->responseHandler_;
                        auto &rt = jsiModule->runtime_;

                        jsi::Value responseParams = jsi::valueFromDynamic(rt, *responseParamsFollyDynamic);

                        // replace placeholders with JS Blob objects
                        for (const auto &[path, key, blob] : *blobs)
                        {
                          jsi::Object obj = responseParams.asObject(rt);
                          for (const auto &name : path)
                          {
                            obj = obj.getPropertyAsObject(rt, name.c_str());
                          }
                          obj.setProperty(rt, jsi::String::createFromUtf8(rt, key), blob->toValue(rt));
                        }

                        responseHandler->call(rt,
                                              jsi::Value(static_cast<int>(requestId)),
                                              responseParams,
                                              jsi::Value(static_cast<int>(response_type)),
                                              jsi::Value(finished));
                      }); // invokeAsync

                  if (finished)
                  {
                    jsiModule->decrementActiveRequests();
                  }
#ifdef __ANDROID__
                }); // jni::ThreadScope::WithClassLoader
#endif
              }; // response_handler

              this->incrementActiveRequests();

              tc_request_ptr(context_uint32, function_name, function_params_json, request_data, response_handler);

#ifdef __ANDROID__
            }); // jni::ThreadScope::WithClassLoader
#endif
          }); // std::thread

          thread.detach();
        }); // invokeAsync

    return jsi::Value::undefined();
  }

} // namespace tonlabs
