#pragma once

#include <string>

#include <jsi/jsi.h>
#include <folly/dynamic.h>

using namespace facebook;

namespace tonlabs
{
  class Blob
  {
  public:
    Blob(std::string blobId, int offset, int size) : blobId(blobId), offset(offset), size(size) {}

    static Blob fromDynamic(const folly::dynamic &value);

    static Blob fromValue(jsi::Runtime &rt, const jsi::Object &jsBlob); // must be called from the React Native JS thread

    jsi::Value toValue(jsi::Runtime &rt) const; // must be called from the React Native JS thread

  private:
    std::string blobId;
    int offset;
    int size;

    friend class BlobManager;
  };

} // namespace tonlabs
