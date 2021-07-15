#pragma once

#include <string>
#include <vector>
#include <utility>

#include <folly/dynamic.h>

#include "TonClientJsiModule.h"

using namespace facebook;

namespace tonlabs
{
  typedef struct
  {
    uint32_t context;
    uint32_t requestId;
    TonClientJsiModule *jsiModule; // to access runtime, jsCallInvoker and blobManager

    std::string functionNameStdString;         // to control lifetime of std::string
    folly::dynamic functionParamsFollyDynamic; // to control lifetime of folly::dynamic
    std::string functionParamsJsonStdString;   // to control lifetime of std::string
    folly::dynamic responseParamsFollyDynamic; // to control lifetime of folly::dynamic

    bool useBlobs = false;                                            // if there is any blob in request params, all strings in the response params will be converted to blobs
    std::vector<std::pair<std::string, std::unique_ptr<Blob>>> blobs; // list of response params that will be replaced with JS Blob objects
  } request_data_t;

} // namespace tonlabs
