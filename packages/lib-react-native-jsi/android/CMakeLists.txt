cmake_minimum_required(VERSION 3.4.1)

set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_STANDARD 14)
set(PACKAGE_NAME tonclientjsi)
set(build_DIR ${CMAKE_SOURCE_DIR}/build)

if(${REACT_NATIVE_VERSION} VERSION_LESS 0.64.0)
  # for React Native < 0.64.0
  set(TURBOMODULE_DIR ${NODE_MODULES_DIR}/react-native/ReactCommon/turbomodule/core/)
  add_library(turbomodulejsijni SHARED ../cpp/empty.cpp)
else()
  # for React Native >= 0.64.0
  set(TURBOMODULE_DIR ${NODE_MODULES_DIR}/react-native/ReactCommon/react/nativemodule/core/ReactCommon)
endif()

include_directories(
  ${NODE_MODULES_DIR}/react-native/React
  ${NODE_MODULES_DIR}/react-native/React/Base
  ${NODE_MODULES_DIR}/react-native/ReactCommon
  ${NODE_MODULES_DIR}/react-native/ReactCommon/jsi
  ${NODE_MODULES_DIR}/react-native/ReactCommon/callinvoker
  ${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon
  ${TURBOMODULE_DIR}
  ../cpp
)

add_library(${PACKAGE_NAME}
  SHARED
  ${NODE_MODULES_DIR}/react-native/ReactCommon/jsi/jsi/jsi.cpp
  ${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon/CallInvokerHolder.cpp
  ${TURBOMODULE_DIR}/TurboModule.cpp
  ../cpp/NativeModules.cpp
  ../cpp/NativeModules.h
  ../cpp/tonclient.h
  ../cpp/TonClientJsiModule.cpp
  ../cpp/TonClientJsiModule.h
  cpp-adapter.cpp
)

find_package(fbjni REQUIRED CONFIG)

target_link_libraries(${PACKAGE_NAME}
  fbjni::fbjni
  ${PROJECT_SOURCE_DIR}/src/main/jniLibs/${CMAKE_ANDROID_ARCH_ABI}/libtonclient.so
)
