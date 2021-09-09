#pragma once

#ifdef __ANDROID__

#include <fbjni/fbjni.h>
#include "TonClientJsiBlobManager.h"

#elif __APPLE__

#ifdef __OBJC__ // when compiled as Objective-C++
#import <React/RCTBlobManager.h>
#else  // when compiled as C++
typedef struct objc_object RCTBlobManager;
#endif // __OBJC__

#endif //  __APPLE__

#include "Blob.h"

using namespace facebook;

namespace tonlabs
{
  class BlobManager
  {
  public:
    Blob store(const std::string &base64encoded); // converts base64-encoded std::string to binary, stores it as blob and returns blobId, offset and size
                                                  // on Android this method must be called from a thread attached to JVM

    std::string resolve(Blob blob); // returns base64-encoded data resolved from provided blobId, offset and size
                                    // on Android this method must be called from a thread attached to JVM

#ifdef __ANDROID__
    BlobManager(jni::global_ref<TonClientJsiBlobManager> javaBlobManager) : javaBlobManager_(javaBlobManager){};
#elif __APPLE__
    BlobManager(RCTBlobManager *reactBlobManager) : reactBlobManager_(reactBlobManager){};
#endif

  private:
#ifdef __ANDROID__
    jni::global_ref<TonClientJsiBlobManager> javaBlobManager_;
#elif __APPLE__
    RCTBlobManager *reactBlobManager_;
#endif
  };
} // namespace tonlabs
