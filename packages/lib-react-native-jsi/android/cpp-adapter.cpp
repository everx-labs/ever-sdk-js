#include <jni.h>
#include <jsi/jsi.h>
#include <fbjni/fbjni.h>
#include <CallInvokerHolder.h>

#include "TonClientJsiModule.h"

using namespace facebook;

struct TonClientJsiModule : jni::JavaClass<TonClientJsiModule>
{
public:
  __unused static constexpr auto kJavaDescriptor = "Lcom/tonlabs/tonclientjsi/TonClientJsiModule;";

  static void registerNatives()
  {
    javaClassStatic()->registerNatives({makeNativeMethod("installNative", TonClientJsiModule::installNative)});
  }

private:
  static void installNative(jni::alias_ref<jni::JClass>,
                            jlong jsContext,
                            jni::alias_ref<facebook::react::CallInvokerHolder::javaobject> jsCallInvokerHolder)
  {
    jsi::Runtime *runtime = reinterpret_cast<facebook::jsi::Runtime *>(jsContext);

    std::shared_ptr<facebook::react::CallInvoker> jsCallInvoker =
        jsCallInvokerHolder->cthis()->getCallInvoker();

    std::shared_ptr<tonlabs::TonClientJsiModule> tonClientJsiModule =
        std::make_shared<tonlabs::TonClientJsiModule>(*runtime, jsCallInvoker);

    runtime->global().setProperty(
        *runtime,
        jsi::PropNameID::forAscii(*runtime, "tonClientJsiModule"),
        jsi::Object::createFromHostObject(*runtime, tonClientJsiModule));
  }
};

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *)
{
  return facebook::jni::initialize(vm, [] {
    TonClientJsiModule::registerNatives();
  });
}
