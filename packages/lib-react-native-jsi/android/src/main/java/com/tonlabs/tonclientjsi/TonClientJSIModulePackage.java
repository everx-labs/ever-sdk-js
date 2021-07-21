package com.tonlabs.tonclientjsi;

import com.facebook.react.bridge.JSIModulePackage;
import com.facebook.react.bridge.JSIModuleSpec;
import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.blob.BlobModule;
import com.facebook.react.turbomodule.core.CallInvokerHolderImpl;

import java.util.Arrays;
import java.util.List;

public class TonClientJSIModulePackage implements JSIModulePackage {
  static {
    System.loadLibrary("tonclientjsi");
  }

  public static native void installJSIBindings(long jsiPtr, CallInvokerHolderImpl jsCallInvokerHolder, TonClientJsiBlobManager tonClientJsiBlobManager);

  @Override
  public List<JSIModuleSpec> getJSIModules(ReactApplicationContext reactApplicationContext, JavaScriptContextHolder jsContext) {
    long jsiPtr = reactApplicationContext.getJavaScriptContextHolder().get();
    CallInvokerHolderImpl jsCallInvokerHolder = (CallInvokerHolderImpl) reactApplicationContext.getCatalystInstance().getJSCallInvokerHolder();
    BlobModule reactNativeBlobModule = reactApplicationContext.getNativeModule(BlobModule.class);
    TonClientJsiBlobManager tonClientJsiBlobManager = new TonClientJsiBlobManager(reactNativeBlobModule);

    // install JSI bindings before running bundled JS code
    TonClientJSIModulePackage.installJSIBindings(jsiPtr, jsCallInvokerHolder, tonClientJsiBlobManager);

    return Arrays.<JSIModuleSpec>asList();
  }
}
