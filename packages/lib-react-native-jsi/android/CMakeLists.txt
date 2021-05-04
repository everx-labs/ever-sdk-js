cmake_minimum_required(VERSION 3.4.1)

set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_STANDARD 14)
set(PACKAGE_NAME "tonclientjsi")
set(build_DIR ${CMAKE_SOURCE_DIR}/build)

include_directories(
  ../cpp
  ../node_modules/react-native/React
  ../node_modules/react-native/React/Base
  ../node_modules/react-native/ReactCommon
  ../node_modules/react-native/ReactCommon/jsi
  ../node_modules/react-native/ReactCommon/callinvoker
  ../node_modules/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon
  ../node_modules/react-native/ReactCommon/react/nativemodule/core/ReactCommon
  ../node_modules/react-native/ReactCommon/react/nativemodule/core
  )

add_library(${PACKAGE_NAME}
  SHARED
  ../node_modules/react-native/ReactCommon/jsi/jsi/jsi.cpp
  ../node_modules/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon/CallInvokerHolder.cpp
  ../node_modules/react-native/ReactCommon/react/nativemodule/core/ReactCommon/TurboModule.cpp
  ../cpp/NativeModules.cpp
  ../cpp/NativeModules.h
  ../cpp/tonclient.h
  ../cpp/TonClientJsiModule.cpp
  ../cpp/TonClientJsiModule.h
  cpp-adapter.cpp
  )

find_package(fbjni REQUIRED CONFIG)

target_link_libraries(${PACKAGE_NAME} fbjni::fbjni "${PROJECT_SOURCE_DIR}/src/main/jniLibs/${CMAKE_ANDROID_ARCH_ABI}/libtonclient.so")
