cmake_minimum_required(VERSION 3.4.1)

set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_FLAGS "-DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_HAVE_MEMRCHR=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_MOBILE=1")

set(PACKAGE_NAME tonclientjsi)
set(BUILD_DIR ${CMAKE_SOURCE_DIR}/build)
set(RN_SO_DIR "../node_modules/react-native/ReactAndroid/src/main/jni/first-party/react/jni")
set(LIBRN_DIR ${RN_SO_DIR}/${ANDROID_ABI})

if(${REACT_NATIVE_VERSION} VERSION_LESS 0.64.0)
  # for React Native < 0.64.0
  set(TURBOMODULE_DIR ${NODE_MODULES_DIR}/react-native/ReactCommon/turbomodule/core/)
  add_library(turbomodulejsijni SHARED ../cpp/empty.cpp)
else()
  # for React Native >= 0.64.0
  set(TURBOMODULE_DIR ${NODE_MODULES_DIR}/react-native/ReactCommon/react/nativemodule/core/ReactCommon)
endif()

add_library(${PACKAGE_NAME}
  SHARED
  ${NODE_MODULES_DIR}/react-native/ReactCommon/jsi/jsi/jsi.cpp
  ${NODE_MODULES_DIR}/react-native/ReactCommon/jsi/jsi/JSIDynamic.cpp
  ${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon/CallInvokerHolder.cpp
  ${TURBOMODULE_DIR}/TurboModule.cpp
  ../cpp/Blob.cpp
  ../cpp/Blob.h
  ../cpp/BlobManager.cpp
  ../cpp/BlobManager.h
  ../cpp/base64.h
  ../cpp/NativeModules.cpp
  ../cpp/NativeModules.h
  ../cpp/TonClientJsiModule.h
  ../cpp/request_data_t.h
  ../cpp/tonclient.h
  ../cpp/TonClientJsiModule.cpp
  cpp-adapter.cpp
)

find_package(fbjni REQUIRED CONFIG)

target_include_directories(
  ${PACKAGE_NAME}
  PRIVATE
  ${NODE_MODULES_DIR}/react-native/React
  ${NODE_MODULES_DIR}/react-native/React/Base
  ${NODE_MODULES_DIR}/react-native/ReactCommon
  ${NODE_MODULES_DIR}/react-native/ReactCommon/jsi
  ${NODE_MODULES_DIR}/react-native/ReactCommon/callinvoker
  ${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon
  ${TURBOMODULE_DIR}
  ${BUILD_DIR}/third-party-ndk/boost/boost_${BOOST_VERSION}
  ${BUILD_DIR}/third-party-ndk/double-conversion
  ${BUILD_DIR}/third-party-ndk/folly
  ${BUILD_DIR}/third-party-ndk/glog/exported
  ../cpp
)

find_library(
  FOLLY_JSON_LIB
  folly_json
  PATHS ${LIBRN_DIR}
  NO_CMAKE_FIND_ROOT_PATH
)

find_library(
  GLOG_LIB
  glog
  PATHS ${LIBRN_DIR}
  NO_CMAKE_FIND_ROOT_PATH
)

target_link_libraries(${PACKAGE_NAME}
  fbjni::fbjni
  ${FOLLY_JSON_LIB}
  ${GLOG_LIB}
  ${PROJECT_SOURCE_DIR}/src/main/jniLibs/${CMAKE_ANDROID_ARCH_ABI}/libtonclient.so
)
