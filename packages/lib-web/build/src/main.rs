/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
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

use regex::Regex;
use ton_client_build::{exec, Build};

fn fix_wrapper_script(wrapper: String) -> String {
    let mut wrapper = wrapper;
    for (exp, rep) in &[
        ("\nexport function ", "\nfunction "),
        ("\nexport default init;\n", ""),
        ("\n\\s*input\\s*=\\s*new\\s+URL\\('[a-z_]+\\.wasm',\\s*import\\.meta\\.url\\);\n", ""),
        ("\\s*import\\s*\\*\\s*as\\s+__wbg_star\\d+\\s+from\\s*'env'\\s*;\\s*\r?\n", ""),
        ("getObject\\(arg0\\) instanceof Window", "true"),
        (
            "imports\\['env'\\]\\s*=\\s*__wbg_star\\d+;",
            "imports['env'] = {\n        \
                malloc: function(size) {\n            \
                    return wasm.__wbindgen_malloc(size);\n        \
                },\n        \
                free: function(ptr) {\n            \
                    wasm.__wbindgen_free(ptr);\n        \
                },\n    \
            };"
        ),
    ] {
        wrapper = Regex::new(exp).unwrap().replace_all(&wrapper, *rep).into();
    }
    wrapper
}

fn to_string_constant(string: &str) -> String {
    format!(
        "`{}`",
        string
            .replace("\\", "\\\\")
            .replace("`", "\\`")
            .replace("$", "\\$")
    )
}

fn main() {
    let builder = Build::new();
    let lib_dir = builder.package_dir.join("lib");
    std::env::set_current_dir(&lib_dir).unwrap();
    exec("cargo", &["install", "wasm-pack", "--version", "0.9.1"]);
    assert!(exec("wasm-pack", &["build", "--release", "--target", "web"]).success());
    let pkg = lib_dir.join("pkg");
    builder.add_package_file("tonclient.wasm", pkg.join("tonclient_bg.wasm"));
    let worker = format!(
        "{}\n{}",
        fix_wrapper_script(builder.read_lib_file("pkg/tonclient.js")),
        builder.read_lib_template("worker-template.js")
    );

    let index = format!(
        "const workerScript = {};\n{}",
        to_string_constant(&worker),
        builder.read_lib_template("index-template.js"),
    );

    builder.write_package_file("index.js", &index);
    builder.publish_package_file("tonclient.wasm", "tonclient_{v}_wasm");
    builder.publish_package_file("index.js", "tonclient_{v}_wasm_js");
}
