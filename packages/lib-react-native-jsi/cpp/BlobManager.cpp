#ifdef __ANDROID__
#include <jni.h>
#include <fbjni/fbjni.h>
#include <fbjni/ByteBuffer.h>
#endif

#include "base64.h"
#include "BlobManager.h"

namespace tonlabs
{
  Blob BlobManager::store(const std::string &base64encoded)
  {
    std::string base64decoded = b64decode(base64encoded);
    int offset = 0;
    int size = base64decoded.length();

#ifdef __ANDROID__
    uint8_t *data = (uint8_t *)base64decoded.data();
    jni::local_ref<jni::JByteBuffer> buffer = jni::JByteBuffer::wrapBytes(data, size);
    std::string blobId = this->javaBlobManager_->store(buffer); // makes a copy
#elif __APPLE__
    NSData *data = [NSData dataWithBytes:base64decoded.data() length:size]; // makes a copy
    NSString *blobIdNSString = [this->reactBlobManager_ store:data];
    std::string blobId = std::string([blobIdNSString UTF8String]);
#endif

    return Blob(blobId, offset, size);
  };

  std::string BlobManager::resolve(Blob blob)
  {
#ifdef __ANDROID__
    jni::local_ref<jni::JByteBuffer> buffer = this->javaBlobManager_->resolve(blob.blobId, blob.offset, blob.size);
    if (!buffer->isDirect())
    {
      throw std::runtime_error("Argument is not a direct buffer.");
    }
    const void *data = buffer->getDirectBytes();
    size_t length = buffer->getDirectSize();
#elif __APPLE__
    NSString *blobIdNSString = [NSString stringWithUTF8String:blob.blobId.c_str()];
    NSData *dataNSData = [this->reactBlobManager_ resolve:blobIdNSString offset:blob.offset size:blob.size];
    const void *data = dataNSData.bytes;
    size_t length = dataNSData.length;
#endif

    return b64encode(data, length);
  }
}
