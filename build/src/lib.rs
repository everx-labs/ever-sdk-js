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

mod template;
#[cfg(test)]
mod tests;

use flate2::write::GzEncoder;
use flate2::Compression;
use serde_json::Value;
use std::fs;
use std::io::Write;
use std::ops::Add;
use std::path::PathBuf;
use std::process::{Command, ExitStatus};
pub use template::template_replace;

pub struct Build {
    pub version: String,
    pub platform: String,

    pub package_dir: PathBuf,
    pub lib_dir: PathBuf,
    pub target_dir: PathBuf,
}

impl Build {
    pub fn new() -> Self {
        let package_dir = std::env::current_dir()
            .unwrap()
            .parent()
            .unwrap()
            .to_path_buf();
        let lib_dir = package_dir.join("lib");
        std::env::set_current_dir(&lib_dir).unwrap();
        let manifest_path = lib_dir.join("Cargo.toml").to_str().unwrap().to_string();
        let meta_out = exec_out(
            "cargo",
            &[
                "metadata",
                "--format-version",
                "1",
                "--manifest-path",
                &manifest_path,
            ],
        );
        let meta = serde_json::from_str::<Value>(&meta_out).unwrap();
        let mut version = "".into();
        let target_dir = meta["target_directory"]
            .as_str()
            .map(|x| PathBuf::from(x))
            .unwrap_or(lib_dir.join("target"));
        for dep in meta["packages"].as_array().unwrap().iter() {
            if dep["name"].as_str().unwrap() == "ton_client" {
                version = dep["version"]
                    .as_str()
                    .unwrap()
                    .split(".")
                    .take(2)
                    .collect::<Vec<&str>>()
                    .join("_");
            }
        }

        Self {
            version,
            #[cfg(all(target_os = "linux", not(target_arch = "aarch64"), not(target_arch = "armv7"), not(target_arch = "powerpc64le"), not(target_arch = "s390x")))]
            platform: "x64-linux".into(),
            #[cfg(all(target_os = "linux", target_arch = "aarch64"))]
            platform: "arm64-linux".into(),
            #[cfg(all(target_os = "linux", target_arch = "armv7"))]
            platform: "arm-linux".into(),
            #[cfg(all(target_os = "linux", target_arch = "powerpc64le"))]
            platform: "ppc64-linux".into(),
            #[cfg(all(target_os = "linux", target_arch = "s390x"))]
            platform: "s390x-linux".into(),
            #[cfg(all(target_os = "macos", not(target_arch = "aarch64")))]
            platform: "x64-darwin".into(),
            #[cfg(all(target_os = "macos", target_arch = "aarch64"))]
            platform: "arm64-darwin".into(),
            #[cfg(target_os = "windows")]
            platform: "x64-win32".into(),
            package_dir,
            lib_dir,
            target_dir,
        }
    }

    pub fn read_lib_file(&self, path: &str) -> String {
        fs::read_to_string(self.package_dir.join("lib").join(path)).unwrap()
    }

    pub fn add_package_file(&self, name: &str, src: PathBuf) {
        fs::copy(src, self.package_dir.join(name)).unwrap();
        println!("Add package file: {}", name);
    }

    pub fn write_package_file(&self, name: &str, text: &str) {
        fs::write(self.package_dir.join(name), text).unwrap();
        println!("Write package file: {}", name);
    }

    pub fn publish_package_file(&self, package_file: &str, name: &str) {
        let name = name
            .replace("{p}", &self.platform)
            .replace("{v}", &self.version)
            .add(".gz");
        println!("Compressing: {}", package_file);
        let publish_dir = self.package_dir.join("publish");
        fs::create_dir_all(&publish_dir).unwrap();
        let mut encoder = GzEncoder::new(Vec::new(), Compression::best());
        let read = fs::read(self.package_dir.join(package_file)).unwrap();
        encoder.write_all(&read).unwrap();
        let compressed = encoder.finish().unwrap();
        let publish_file_path = publish_dir.join(&name);
        fs::write(&publish_file_path, compressed).unwrap();
        println!(
            "Publish: {}",
            &publish_file_path.as_path().display().to_string()
        );
    }
}

pub fn exec(cmd: &str, args: &[&str]) -> ExitStatus {
    println!("{} {:?}", cmd, args);
    Command::new(cmd)
        .args(args)
        .spawn()
        .unwrap()
        .wait()
        .unwrap()
}

pub fn exec_out(cmd: &str, args: &[&str]) -> String {
    println!("{} {:?}", cmd, args);
    let out = Command::new(cmd).args(args).output().unwrap();
    if !out.status.success() {
        panic!("{}", String::from_utf8(out.stderr).unwrap());
    }
    String::from_utf8(out.stdout).unwrap()
}

pub fn check_targets(targets: &[&str]) {
    let installed = exec_out("rustup", &["target", "list", "--installed"])
        .split("\n")
        .map(|x| x.to_string())
        .collect::<Vec<String>>();
    let mut args = vec!["target", "add"];
    for target in targets {
        if !installed.contains(&target.to_string()) {
            args.push(target);
        }
    }
    if args.len() > 2 {
        exec("rustup", &args);
    }
}

pub fn path_str(path: &PathBuf) -> &str {
    path.as_path().to_str().unwrap()
}
