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
    uint32_t context;
    uint32_t requestId;
    TonClientJsiModule *jsiModule; // to access runtime, jsCallInvoker and blobManager

    std::string functionNameStdString;         // to control lifetime of std::string
    folly::dynamic functionParamsFollyDynamic; // to control lifetime of folly::dynamic
    std::string functionParamsJsonStdString;   // to control lifetime of std::string

    bool returnBlob = false; // if there is any blob in request params or return_blob is set to true,
                             // all strings in the response params will be converted to blobs
  } request_data_t;

} // namespace tonlabs
