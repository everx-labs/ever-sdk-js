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

use ton_client_build::{check_targets, exec, Build};

const TARGETS: &[&str] = &["x86_64-apple-ios", "aarch64-apple-ios"];
const LIB: &str = "libeversdk.a";
fn main() {
    let builder = Build::new();
    check_targets(TARGETS);
    for target in TARGETS {
        assert!(exec("cargo", &["build", "--target", target, "--release"]).success());
    }

    let mut args = vec![
        "-create".to_string(),
        "-output".to_string(),
        format!("../{}", LIB),
    ];
    for target in TARGETS {
        args.push(
            builder
                .target_dir
                .join(target)
                .join("release")
                .join(LIB)
                .as_path()
                .to_str()
                .unwrap()
                .to_string(),
        )
    }
    assert!(exec(
        "lipo",
        &args.iter().map(|x| x.as_str()).collect::<Vec<&str>>(),
    ).success());
    builder.publish_package_file(LIB, "eversdk_{v}_react_native_ios");
}
