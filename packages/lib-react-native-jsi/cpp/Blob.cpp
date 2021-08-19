#include <string>

#include <jsi/jsi.h>
#include <folly/dynamic.h>

#include "Blob.h"

using namespace facebook;

namespace tonlabs
{
  Blob Blob::fromDynamic(const folly::dynamic &value)
  {
    const folly::dynamic &data = value["_data"];
    std::string blobId = data["blobId"].asString();
    int offset = data["offset"].asInt();
    int size = data["size"].asInt();
    return Blob(blobId, offset, size);
  }

  Blob Blob::fromValue(jsi::Runtime &rt, const jsi::Object &jsBlob) // must be called from the React Native JS thread
  {
    const jsi::Object &data = jsBlob.getPropertyAsObject(rt, "_data");
    std::string blobId = data.getProperty(rt, "blobId").asString(rt).utf8(rt);
    int offset = data.getProperty(rt, "offset").asNumber();
    int size = data.getProperty(rt, "size").asNumber();
    return Blob(blobId, offset, size);
  }

  jsi::Value Blob::toValue(jsi::Runtime &rt) const // must be called from the React Native JS thread
  {
    const jsi::Function createBlob = rt.global().getPropertyAsFunction(rt, "__createBlob");
    return createBlob.call(rt,
                           jsi::Value(jsi::String::createFromUtf8(rt, this->blobId)),
                           jsi::Value(this->offset),
                           jsi::Value(this->size));
  }

} // namespace tonlabs
