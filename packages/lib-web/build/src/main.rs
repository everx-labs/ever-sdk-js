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

use regex::Regex;
use ton_client_build::{exec, template_replace, Build};

fn fix_wrapper_script(wrapper: String) -> String {
    let mut wrapper = wrapper;
    for (exp, rep) in &[
        ("\nexport function ", "\nfunction "),
        ("\nexport default init;\n", ""),
        ("export \\{ initSync \\}", ""),
        (
            "\n\\s*input\\s*=\\s*new\\s+URL\\('[a-z_]+\\.wasm',\\s*import\\.meta\\.url\\);\n",
            "",
        ),
        (
            "\\s*import\\s*\\*\\s*as\\s+__wbg_star\\d+\\s+from\\s*'env'\\s*;\\s*\r?\n",
            "",
        ),
        ("getObject\\(arg0\\) instanceof Window", "true"),
        (
            "imports\\['env'\\]\\s*=\\s*__wbg_star\\d+;",
            "imports['env'] = {\n        \
                now: function() {\n            \
                    return new Date().getTime();\n        \
                },\n    \
            };",
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
    builder.add_package_file("eversdk.wasm", pkg.join("eversdk_bg.wasm"));
    let fixed_wrapper_script = fix_wrapper_script(builder.read_lib_file("pkg/eversdk.js"));
    let worker = template_replace(
        &builder.read_lib_file("worker-template.js"),
        "WRAPPER",
        &fixed_wrapper_script,
    );

    let index = template_replace(
        &builder.read_lib_file("index-template.js"),
        "WORKER",
        &format!("const workerScript = {};", to_string_constant(&worker)),
    );
    let index = template_replace(&index, "WRAPPER", &fixed_wrapper_script);

    builder.write_package_file("index.js", &index);
    builder.publish_package_file("eversdk.wasm", "eversdk_{v}_wasm");
    builder.publish_package_file("index.js", "eversdk_{v}_wasm_js");
}
