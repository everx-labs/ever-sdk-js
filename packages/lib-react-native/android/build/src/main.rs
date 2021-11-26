/*
 * Copyright 2018-2021 TON DEV SOLUTIONS LTD.
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
use std::path::PathBuf;
use ton_client_build::{check_targets, exec, path_str, Build};

struct Arch {
    target: &'static str,
    jni: &'static str,
    ndk: &'static str,
}

const ARCHS: [Arch; 4] = [
    Arch {
        target: "x86_64-linux-android",
        jni: "x86_64",
        ndk: "x86_64",
    },
    Arch {
        target: "i686-linux-android",
        jni: "x86",
        ndk: "x86",
    },
    Arch {
        target: "aarch64-linux-android",
        jni: "arm64-v8a",
        ndk: "arm64",
    },
    Arch {
        target: "armv7-linux-androideabi",
        jni: "armeabi-v7a",
        ndk: "arm",
    },
];

const LIB: &str = "libtonclient.so";
const NDK_URL: &str = "http://dl.google.com/android/repository/android-ndk-r17c-darwin-x86_64.zip";

fn main() {
    let target_arg = env::args().nth(1).unwrap_or("".to_string());
    let the_archs: Vec<&Arch> = ARCHS.iter().filter(|arch| arch.target.starts_with(&target_arg)).collect();
    let builder = Build::new();
    check_targets(&the_archs.iter().map(|x| x.target).collect::<Vec<_>>());
    check_ndk(&builder, &the_archs);
    for &arch in &the_archs {
        let mut path = std::env::var("PATH").unwrap_or("".into());
        if !path.is_empty() {
            path.push_str(":");
        }
        path.push_str(path_str(
            &builder.lib_dir.join("NDK").join(arch.ndk).join("bin"),
        ));
        std::env::set_var("PATH", path);
        assert!(exec("cargo", &["build", "--target", arch.target, "--release"]).success());
    }

    let out_dir = builder.package_dir.join("src/main/jniLibs");
    for &arch in &the_archs {
        let arch_out_dir = out_dir.join(arch.jni);
        std::fs::create_dir_all(&arch_out_dir).unwrap();
        let src = builder.target_dir.join(arch.target).join("release").join(LIB);
        if src.exists() {
            let out_lib = arch_out_dir.join(LIB);
            std::fs::copy(&src, &out_lib).unwrap();
            println!(
                "Android library for [{}] copied to \"{}\"",
                arch.target,
                path_str(&out_lib)
            );
            builder.publish_package_file(
                &format!("src/main/jniLibs/{}/{}", arch.jni, LIB),
                &format!("tonclient_{{v}}_react_native_{}", arch.target),
            );
        } else {
            println!(
                "Android library for [{}] does not exists. Skipped.",
                arch.target
            );
        }
    }
}

fn get_ndk(builder: &Build) -> PathBuf {
    if let Ok(dir) = std::env::var("NDK_HOME") {
        let dir = PathBuf::from(dir);
        if dir.exists() {
            return dir;
        }
    }
    let ndk_zip_file = builder.lib_dir.join(NDK_URL.split("/").last().unwrap());
    let ndk_dir = builder.lib_dir.join("android-ndk-r17c");
    if !ndk_zip_file.exists() {
        println!("Downloading android NDK...");
        assert!(exec("curl", &[NDK_URL, "-o", path_str(&ndk_zip_file)]).success());
    }
    print!("Unzipping android NDK...");
    assert!(exec(
        "unzip",
        &[
            "-q",
            "-d",
            path_str(&builder.lib_dir),
            path_str(&ndk_zip_file),
        ],
    ).success());
    std::env::set_var("NDK_HOME", path_str(&ndk_dir));
    ndk_dir
}

fn check_ndk(builder: &Build, the_archs: &[&Arch]) {
    let ndk_dir = builder.lib_dir.join("NDK");
    let mut missing_archs = Vec::new();
    for &a in the_archs {
        if !ndk_dir.join(a.ndk).exists() {
            missing_archs.push(a);
        }
    }
    if missing_archs.is_empty() {
        println!("Standalone NDK already exists...");
        return;
    }
    let mut ndk_home_dir = get_ndk(builder);
    if !ndk_home_dir.exists() {
        ndk_home_dir = PathBuf::from(std::env::var("ANDROID_HOME").unwrap()).join("ndk-bundle");
    }
    let maker = ndk_home_dir.join("build/tools/make_standalone_toolchain.py");
    if !maker.exists() {
        panic!("Please install android-ndk: $ brew install android-ndk");
    }
    std::fs::create_dir_all(&ndk_dir).unwrap();
    std::env::set_current_dir(&ndk_dir).unwrap();
    for &arch in the_archs {
        assert!(exec(
            "python",
            &[
                path_str(&maker),
                "--arch",
                arch.ndk,
                "--install-dir",
                arch.ndk,
            ],
        ).success());
    }
    std::env::set_current_dir(&builder.lib_dir).unwrap();
}
