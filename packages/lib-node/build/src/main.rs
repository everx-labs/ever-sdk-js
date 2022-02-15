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

use ton_client_build::{exec, Build};

fn main() {
    let builder = Build::new();
    assert!(exec("cargo", &["build", "--release"]).success());

    #[cfg(target_os = "windows")]
    let (lib, gyp, gyp_args) = ("eversdk.lib", "cmd", ["/c", "node-gyp", "rebuild"]);
    #[cfg(not(target_os = "windows"))]
    let (lib, gyp, gyp_args) = ("libeversdk.a", "npm", ["run", "build"]);

    builder.add_package_file(
        &format!("lib/{}", lib),
        builder.target_dir.join("release").join(lib),
    );

    assert!(exec(gyp, &gyp_args).success());

    builder.add_package_file(
        "eversdk.node",
        builder.package_dir.join("lib/build/Release/eversdk.node"),
    );
    builder.publish_package_file("eversdk.node", "eversdk_{v}_nodejs_addon_{p}");
}
