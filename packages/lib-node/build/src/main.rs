/*
 * Copyright 2018-2020 TON Labs LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 *
 */

 use std::env;
 use ton_client_build::{exec, check_targets, Build};

fn main() {
    let mut build_args: Vec<&str> = vec!["build", "--release"];
    let target = env::args().nth(1).unwrap_or("".to_string());
    let rust_target: &str = match target.as_str() {
        "arm64-darwin" => "aarch64-apple-darwin",
        "x64-darwin" => "x86_64-apple-darwin",
        _ => ""
    };
    let mut builder = Build::new();
    if !rust_target.is_empty() {
        build_args.append(&mut vec!["--target", rust_target]);
        check_targets(&vec![rust_target]);
        builder.set_platform(target.as_str());
    }
    assert!(exec("cargo", &build_args).success());
    #[cfg(target_os = "windows")]
    let (lib, gyp, gyp_args) = ("eversdk.lib", "cmd", ["/c", "node-gyp", "rebuild"]);
    #[cfg(not(target_os = "windows"))]
    let (lib, gyp, gyp_args) = ("libeversdk.a", "npm", ["run", "build"]);
    
    builder.add_package_file(
        &format!("lib/{}", lib),
        if !rust_target.is_empty() {
            builder.target_dir.join(rust_target).join("release").join(lib)
        } else {
            builder.target_dir.join("release").join(lib)
        }
    );

    assert!(exec(gyp, &gyp_args).success());

    builder.add_package_file(
        "eversdk.node",
        builder.package_dir.join("lib/build/Release/eversdk.node"),
    );
    builder.publish_package_file("eversdk.node", "eversdk_{v}_nodejs_addon_{p}");
}
