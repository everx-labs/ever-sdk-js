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

const path = require("path");
const child_process = require("child_process");
const fs = require("fs");

const packages = ["main", "lib-react-native-jsi", "main-tests"];

function pack(names) {
  const tars = [];
  process.stdout.write(`Packing ...`);
  for (const name of names) {
    const pkgDir = path.resolve(__dirname, "..", name);
    child_process.spawnSync("npm", ["pack", pkgDir]);
    const pkg = JSON.parse(
      fs.readFileSync(path.resolve(pkgDir, "package.json"), "utf8")
    );
    const tar = `${pkg.name}-${pkg.version}.tgz`
      .replace("@", "")
      .replace("/", "-");
    tars.push(tar);
  }
  process.stdout.write(`\n`);
  return tars;
}

function copyBinary(relPath) {
  const srcPath = path.resolve(
    __dirname,
    "..",
    "lib-react-native-jsi",
    ...relPath
  );
  if (fs.existsSync(srcPath)) {
    const dstPath = path.resolve(
      __dirname,
      "node_modules",
      "@eversdk",
      "lib-react-native-jsi",
      ...relPath
    );
    fs.mkdirSync(path.dirname(dstPath), { recursive: true });
    fs.copyFileSync(srcPath, dstPath);
    process.stdout.write(`Copy ${srcPath}\n`);
  } else {
    process.stdout.write(`Skip ${srcPath}\n`);
  }
}

const savePackage = fs.readFileSync(path.resolve(__dirname, "package.json"));
try {
  const tars = pack(packages);
  process.stdout.write(`Installing ${tars.join(" ")} ...`);
  child_process.spawnSync("npm", [
    "i",
    ...tars.map((tar) => path.resolve(__dirname, `${tar}`)),
  ]);
  process.stdout.write(`\n`);
  for (const tar of tars) {
    fs.unlinkSync(path.resolve(__dirname, `${tar}`));
  }
  for (const arch of ["arm64-v8a", "armeabi-v7a", "x86", "x86_64"]) {
    copyBinary(["android", "src", "main", "jniLibs", arch, "libeversdk.so"]);
  }
  copyBinary(["ios", "libeversdk.a"]);
} catch (error) {
  console.error(error.message);
} finally {
  fs.writeFileSync(path.resolve(__dirname, "package.json"), savePackage);
}
