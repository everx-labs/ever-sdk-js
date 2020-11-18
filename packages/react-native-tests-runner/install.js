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

const path = require('path');
const child_process = require('child_process');
const fs = require('fs');

function installPackage(name) {
    process.stdout.write(`Packing ${name}...`);
    const pkgDir = path.resolve(__dirname, '..', name);
    child_process.spawnSync('npm', ['pack', pkgDir]);
    const pkg = JSON.parse(fs.readFileSync(path.resolve(pkgDir, 'package.json')));
    const tar = `${pkg.name}-${pkg.version}.tgz`.replace('@', '').replace('/', '-');
    process.stdout.write(`\nInstalling ${name} from ${tar}...`);
    child_process.spawnSync('npm', ['i', path.resolve(__dirname, `${tar}`)]);
    process.stdout.write(`\n`);

}

try {
    installPackage('main');
    installPackage('react-native-module');
    installPackage('main-tests');

} catch (error) {
    console.error(error.message);
}
