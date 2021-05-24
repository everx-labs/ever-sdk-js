#include <thread>

#include "TonClientJsiModule.h"
#include "tonclient.h"

using namespace facebook;

namespace tonlabs
{
  jsi::Value TonClientJsiModule::setResponseHandler(
      jsi::Runtime &rt,
      const jsi::Function &responseHandler)
  {
    this->responseHandler_ = std::make_shared<jsi::Function>(responseHandler.asFunction(rt));
    return jsi::Value::undefined();
  }

  jsi::Value TonClientJsiModule::createContext(
      jsi::Runtime &rt,
      const jsi::String &configJson,
      const jsi::Function &onResult)
  {
    std::string configJsonString = configJson.utf8(rt);
    tc_string_data_t config{configJsonString.c_str(), static_cast<uint32_t>(configJsonString.length())};
    tc_string_handle_t *json_ptr = tc_create_context(config);

    std::shared_ptr<jsi::Function> onResultPtr = std::make_shared<jsi::Function>(onResult.asFunction(rt));
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

  jsi::Value TonClientJsiModule::sendRequest(
      jsi::Runtime &rt,
      const jsi::Value &context,
      const jsi::Value &requestId,
      const jsi::Value &functionName,
      const jsi::Value &functionParamsJson)
  {
    // JS thread

    request_data_t *request_data = new request_data_t;
    request_data->jsiModule = this;
    request_data->context = static_cast<uint32_t>(context.asNumber());
    request_data->requestId = static_cast<uint32_t>(requestId.asNumber());
    request_data->functionNameStdString = functionName.asString(rt).utf8(rt);
    request_data->functionParamsJsonSharedPtr = std::make_shared<jsi::String>(jsi::Value(rt, functionParamsJson).asString(rt));

    std::thread thread([request_data]
                       {
                         // C++ worker thread

                         tc_string_data_t function_name{
                             request_data->functionNameStdString.c_str(),
                             static_cast<uint32_t>(request_data->functionNameStdString.length())};

                         auto &rt = request_data->jsiModule->runtime_;
                         request_data->functionParamsJsonStdString = request_data->functionParamsJsonSharedPtr->utf8(rt);
                         tc_string_data_t function_params_json{
                             request_data->functionParamsJsonStdString.c_str(),
                             static_cast<uint32_t>(request_data->functionParamsJsonStdString.length())};

                         tc_response_handler_ptr_t response_handler =
                             [](void *request_ptr, tc_string_data_t params_json, uint32_t response_type, bool finished) -> void
                         {
                           // either TON SDK worker thread or calling thread

                           request_data_t *request_data = reinterpret_cast<request_data_t *>(request_ptr);
                           request_data->responseParamsJsonStdString = std::string(params_json.content, params_json.len); // copies buffer

                           auto &jsCallInvoker = request_data->jsiModule->jsCallInvoker_;
                           jsCallInvoker->invokeAsync([request_data, response_type, finished]
                                                      {
                                                        // JS thread

                                                        auto &responseHandler = request_data->jsiModule->responseHandler_;
                                                        auto &rt = request_data->jsiModule->runtime_;
                                                        auto &requestId = request_data->requestId;

                                                        responseHandler->call(rt,
                                                                              jsi::Value(static_cast<int>(requestId)),
                                                                              jsi::Value(jsi::String::createFromUtf8(rt, request_data->responseParamsJsonStdString)),
                                                                              jsi::Value(static_cast<int>(response_type)),
                                                                              jsi::Value(finished));

                                                        if (finished)
                                                        {
                                                          delete request_data;
                                                        }
                                                      });
                         };

                         tc_request_ptr(request_data->context, function_name, function_params_json, request_data, response_handler);
                       });

    thread.detach();

    return jsi::Value::undefined();
  }

} // namespace tonlabs
