
Pod::Spec.new do |s|
  s.name         = "TonClientModule"
  s.version      = "0.9.0"
  s.summary      = "TON Client React Native Module"
  s.description  = <<-DESC
                  TON Client React Native Module
                   DESC
  s.homepage     = "https://github.com/tonlabs/ever-sdk-js"
  s.license      = "MIT"
  s.author       = { "author" => "sdk@tonlabs.io" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/tonlabs/ever-sdk-js.git", :tag => "master" }
  s.source_files = "ios/**/*.{h,m,mm}"
  s.ios.vendored_library = "ios/libeversdk.a"

  s.requires_arc = true
  s.dependency "React"
end


