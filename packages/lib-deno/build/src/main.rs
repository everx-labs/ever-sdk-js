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
    let is_release = false;
    let build_args = if is_release {
        vec!["build", "--release"]
    } else {
        vec!["build"]
    };
    assert!(exec("cargo", &build_args).success());
    let out_folder = if is_release { "release" } else { "debug" };
    let Some(lib) = ["dll", "so", "dylib"].iter().find_map(|x| {
        let name = format!("libeversdk.{}", x);
        if builder.target_dir.join(out_folder).join(&name).exists() {
            Some(name)
        } else {
            None
        }
    }) else {
        panic!("Target library not found");
    };
    builder.add_package_file(
        "eversdk.deno",
        builder.target_dir.join(out_folder).join(lib),
    );
    if is_release {
        builder.publish_package_file("eversdk.deno", "eversdk_{v}_deno_addon_{p}");
    }
}
