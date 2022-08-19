cmake_minimum_required(VERSION 3.4.1)

set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_FLAGS "-DFOLLY_NO_CONFIG=1 -DFOLLY_HAVE_CLOCK_GETTIME=1 -DFOLLY_HAVE_MEMRCHR=1 -DFOLLY_USE_LIBCPP=1 -DFOLLY_MOBILE=1")

set(PACKAGE_NAME tonclientjsi)
set(BUILD_DIR ${CMAKE_SOURCE_DIR}/build)
set(LIBRN_DIR ${PREBUILT_DIR}/${ANDROID_ABI})

if(${REACT_NATIVE_VERSION} LESS 64)
  # for React Native < 0.64.0
  set(TURBOMODULE_DIR ${NODE_MODULES_DIR}/react-native/ReactCommon/turbomodule/core/)
  add_library(turbomodulejsijni SHARED ../cpp/empty.cpp)
else()
  # for React Native >= 0.64.0
  set(TURBOMODULE_DIR ${NODE_MODULES_DIR}/react-native/ReactCommon/react/nativemodule/core/ReactCommon)
endif()

if(${REACT_NATIVE_VERSION} LESS 66)
  set(INCLUDE_JSI_CPP "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi/jsi/jsi.cpp")
  set(INCLUDE_JSIDYNAMIC_CPP "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi/jsi/JSIDynamic.cpp")
endif()

add_library(${PACKAGE_NAME}
  SHARED
  ${INCLUDE_JSI_CPP} # only on older RN versions
  ${INCLUDE_JSIDYNAMIC_CPP} # only on older RN versions
  ${TURBOMODULE_DIR}/TurboModule.cpp
  ${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon/CallInvokerHolder.cpp
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
  # --- Third Party (required by RN) ---
  "${BUILD_DIR}/third-party-ndk/boost"
  "${BUILD_DIR}/third-party-ndk/double-conversion"
  "${BUILD_DIR}/third-party-ndk/folly"
  "${BUILD_DIR}/third-party-ndk/glog"
  ../cpp
)

if(${REACT_NATIVE_VERSION} LESS 66)
  # JSI lib didn't exist on RN 0.65 and before. Simply omit it.
  set(JSI_LIB "")
else()
  # RN 0.66 distributes libjsi.so, can be used instead of compiling jsi.cpp manually.
  find_library(
    JSI_LIB
    jsi
    PATHS ${LIBRN_DIR}
    NO_CMAKE_FIND_ROOT_PATH
  )
endif()

if(${REACT_NATIVE_VERSION} LESS 69)
  find_library(
    FOLLY_LIB
    folly_json
    PATHS ${LIBRN_DIR}
    NO_CMAKE_FIND_ROOT_PATH
  )
else()
  find_library(
    FOLLY_LIB
    folly_runtime
    PATHS ${LIBRN_DIR}
    NO_CMAKE_FIND_ROOT_PATH
  )
endif()

find_library(
  GLOG_LIB
  glog
  PATHS ${LIBRN_DIR}
  NO_CMAKE_FIND_ROOT_PATH
)

target_link_libraries(${PACKAGE_NAME}
  fbjni::fbjni
  ${JSI_LIB}
  ${FOLLY_LIB}
  ${GLOG_LIB}
  ${PROJECT_SOURCE_DIR}/src/main/jniLibs/${CMAKE_ANDROID_ARCH_ABI}/libeversdk.so
)
