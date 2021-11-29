/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the
 * License at:
 *
 * http://www.ton.dev/licenses
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

function getHomeAddonPath() {
    const binariesVersion = process.env.TON_CLIENT_BIN_VERSION || (require('./package.json').version).split(
        '.')[0];
    const binariesHomePath = path.resolve(os.homedir(), '.tonlabs', 'binaries', binariesVersion);
    return path.resolve(binariesHomePath, 'tonclient.node');
}

function loadAddon() {
    try {
        return require('./tonclient.node');
    } catch (error) {
        if (fs.existsSync(path.resolve(__dirname, 'tonclient.node'))) {
            throw error;
        }
    }
    return require(getHomeAddonPath());
}

function libNode() {
    try {
        return Promise.resolve(loadAddon());
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = {
    libNode,
}
