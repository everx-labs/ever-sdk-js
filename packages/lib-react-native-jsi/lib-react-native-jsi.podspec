require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

reactNativeVersion = package["devDependencies"]["react-native"].split(".")[1].to_i

if reactNativeVersion >= 64
  folly_prefix = "RCT-"
else
  folly_prefix = ""
end

folly_flags = "-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -DRNVERSION=" + reactNativeVersion.to_s
folly_compiler_flags = folly_flags + " " + "-Wno-comma -Wno-shorten-64-to-32"

Pod::Spec.new do |s|
  s.name         = "lib-react-native-jsi"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com/tonlabs/ton-client-js.git", :tag => "#{s.version}" }

  s.header_mappings_dir = "cpp"
  s.source_files = "ios/**/*.{h,m,mm}", "cpp/**/*.{h,cpp}"
  s.exclude_files = "cpp/BlobManager.cpp" # compiled as Objective-C++ from ios/BlobManager.mm
  s.ios.vendored_library = "ios/libtonclient.a"

  s.pod_target_xcconfig = {
    :GCC_PREPROCESSOR_DEFINITIONS => "HAVE_FULLFSYNC=1",
    :WARNING_CFLAGS => "-Wno-shorten-64-to-32 -Wno-comma -Wno-unreachable-code -Wno-conditional-uninitialized -Wno-deprecated-declarations",
    :USE_HEADERMAP => "No"
  }
  s.compiler_flags = folly_compiler_flags
  s.xcconfig = {
    "CLANG_CXX_LANGUAGE_STANDARD" => "c++14",
    "HEADER_SEARCH_PATHS" => "\"$(PODS_ROOT)/#{folly_prefix}Folly\" \"$(PODS_ROOT)/boost-for-react-native\"",
    "OTHER_CFLAGS" => "$(inherited)" + " " + folly_flags
  }
  s.requires_arc = true

  s.dependency "React-Core"
  s.dependency "React-callinvoker"
  s.dependency "ReactCommon/turbomodule/core"
  s.dependency "#{folly_prefix}Folly"
end
