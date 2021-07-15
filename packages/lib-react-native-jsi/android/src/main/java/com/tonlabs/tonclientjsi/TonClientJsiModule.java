package com.tonlabs.tonclientjsi;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.modules.blob.BlobModule;
import com.facebook.react.turbomodule.core.CallInvokerHolderImpl;
import com.facebook.react.turbomodule.core.interfaces.CallInvokerHolder;

import java.nio.ByteBuffer;

class TonClientJsiModule extends ReactContextBaseJavaModule {
  static {
    System.loadLibrary("tonclientjsi");
  }

  private static native void installNative(long jsiPtr, CallInvokerHolderImpl jsCallInvokerHolder, TonClientJsiBlobManager tonClientJsiBlobManager);

  private static native void destruct();

  public TonClientJsiModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @NonNull
  @Override
  public String getName() {
    return "TonClientJsi";
  }

  @Override
  public void initialize() {
    super.initialize();

    ReactApplicationContext context = this.getReactApplicationContext();
    long jsiPtr = context.getJavaScriptContextHolder().get();
    CallInvokerHolderImpl jsCallInvokerHolder = (CallInvokerHolderImpl) context.getCatalystInstance().getJSCallInvokerHolder();
    BlobModule reactNativeBlobModule = context.getNativeModule(BlobModule.class);
    TonClientJsiBlobManager tonClientJsiBlobManager = new TonClientJsiBlobManager(reactNativeBlobModule);

    TonClientJsiModule.installNative(jsiPtr, jsCallInvokerHolder, tonClientJsiBlobManager);
  }

  @Override
  public void onCatalystInstanceDestroy() {
    TonClientJsiModule.destruct();
  }
}
