package com.tonlabs.tonclientjsi;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.turbomodule.core.CallInvokerHolderImpl;
import com.facebook.react.turbomodule.core.interfaces.CallInvokerHolder;


class TonClientJsiModule extends ReactContextBaseJavaModule {
  static {
    System.loadLibrary("tonclientjsi");
  }

  private static native void installNative(long jsiPtr, CallInvokerHolderImpl jsCallInvokerHolder);
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
    CallInvokerHolderImpl holder = (CallInvokerHolderImpl) context.getCatalystInstance().getJSCallInvokerHolder();

    TonClientJsiModule.installNative(context.getJavaScriptContextHolder().get(), holder);
  }

  @Override
  public void onCatalystInstanceDestroy() {
    TonClientJsiModule.destruct();
  }
}
