#pragma once

#include <fbjni/fbjni.h>
#include <fbjni/ByteBuffer.h>

using namespace facebook;

namespace tonlabs
{

  struct TonClientJsiBlobManager : jni::JavaClass<TonClientJsiBlobManager>
  {
    __unused static constexpr auto kJavaDescriptor = "Lcom/tonlabs/tonclientjsi/TonClientJsiBlobManager;";

    std::string store(jni::alias_ref<jni::JByteBuffer> byteBuffer) // calling thread must be attached to JVM
    {
      static const auto method = getClass()->getMethod<jni::JString(jni::alias_ref<jni::JByteBuffer>)>("store");
      return method(self(), byteBuffer)->toStdString();
    }

    jni::local_ref<jni::JByteBuffer> resolve(std::string blobId, jint offset, jint size) // calling thread must be attached to JVM
    {
      static const auto method = getClass()->getMethod<jni::JByteBuffer(std::string, jint, jint)>("resolve");
      return method(self(), blobId, offset, size);
    }
  };

} // namespace tonlabs
