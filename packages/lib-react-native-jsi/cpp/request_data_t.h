#pragma once

#include <string>
#include <vector>
#include <utility>

#include <folly/dynamic.h>

#include "TonClientJsiModule.h"

using namespace facebook;

namespace tonlabs
{
  typedef struct request_data_t
  {
    TonClientJsiModule *jsiModule; // to access runtime, jsCallInvoker and blobManager
    uint32_t requestId;
    bool returnBlob = false; // if `response_binary_type` request param is set to 'blob'
                             // or there is any blob in the request params and `response_binary_type` is not set,
                             // then all strings in the response params will be converted from base64 to raw binary JS Blobs
  } request_data_t;

} // namespace tonlabs
