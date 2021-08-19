#include <jni.h>
#include <jsi/jsi.h>
#include <fbjni/fbjni.h>
#include <CallInvokerHolder.h>

#include "TonClientJsiModule.h"

using namespace facebook;

struct TonClientJsiModule : jni::JavaClass<TonClientJsiModule>
{
public:
  __unused static constexpr auto kJavaDescriptor = "Lcom/tonlabs/tonclientjsi/TonClientJSIModulePackage;";

  static void registerNatives()
  {
    javaClassStatic()->registerNatives({makeNativeMethod("installJSIBindings", TonClientJsiModule::installJSIBindings)});
  }

private:
  static void installJSIBindings(jni::alias_ref<jni::JClass>,
                                 jlong jsContext,
                                 jni::alias_ref<facebook::react::CallInvokerHolder::javaobject> jsCallInvokerHolder,
                                 jni::alias_ref<tonlabs::TonClientJsiBlobManager> javaBlobManager)
  {
    jsi::Runtime *runtime = reinterpret_cast<facebook::jsi::Runtime *>(jsContext);

    std::shared_ptr<facebook::react::CallInvoker> jsCallInvoker =
        jsCallInvokerHolder->cthis()->getCallInvoker();

    std::unique_ptr<tonlabs::BlobManager> blobManager =
        std::make_unique<tonlabs::BlobManager>(make_global(javaBlobManager));

    std::unique_ptr<tonlabs::TonClientJsiModule> tonClientJsiModule =
        std::make_unique<tonlabs::TonClientJsiModule>(*runtime, jsCallInvoker, std::move(blobManager));

    runtime->global().setProperty(
        *runtime,
        jsi::PropNameID::forAscii(*runtime, "tonClientJsiModule"),
        jsi::Object::createFromHostObject(*runtime, std::move(tonClientJsiModule)));
  }
};

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *)
{
  return facebook::jni::initialize(vm, []
                                   { TonClientJsiModule::registerNatives(); });
}
