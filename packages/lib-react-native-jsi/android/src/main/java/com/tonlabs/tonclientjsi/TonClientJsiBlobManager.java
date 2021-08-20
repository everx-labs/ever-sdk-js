package com.tonlabs.tonclientjsi;

import com.facebook.react.modules.blob.BlobModule;

import java.nio.ByteBuffer;

class TonClientJsiBlobManager {
  final private BlobModule reactNativeBlobModule;

  public TonClientJsiBlobManager(BlobModule reactNativeBlobModule) {
    this.reactNativeBlobModule = reactNativeBlobModule;
  }

  public String store(ByteBuffer buffer) {
    byte[] data = new byte[buffer.limit()];
    buffer.get(data);
    String blobId = this.reactNativeBlobModule.store(data);
    return blobId;
  }

  public ByteBuffer resolve(String blobId, int offset, int size) {
    byte[] data = this.reactNativeBlobModule.resolve(blobId, offset, size);
    if (data == null) {
      throw new RuntimeException("Blob " + blobId + " not found");
    }
    ByteBuffer buffer = ByteBuffer.allocateDirect(data.length);
    buffer.put(data);
    return buffer;
  }
}
