// @flow
import { TONClient } from "../src/TONClient";

const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');
const zlib = require('zlib');
const fetch = require('node-fetch');
const WebSocket = require('websocket');

const p = os.platform();
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json')).toString('utf8'));
const v: string[] = pkg.version.split('.');
const bv = `${v[0]}.${v[1]}.${~~(Number.parseInt(v[2]) / 100) * 100}`.split('.').join('_');
const binariesHost = 'sdkbinaries.tonlabs.io';
const binariesPath = __dirname;

function downloadAndGunzip(dest, url) {
    return new Promise((resolve, reject) => {

        const request = http.get(url, response => {
            if (response.statusCode !== 200) {
                reject({
                    message: `Download failed with ${response.statusCode}: ${response.statusMessage}`,
                });
                return;
            }
            fs.mkdirSync(path.dirname(path.resolve(dest)), { recursive: true });
            let file = fs.createWriteStream(dest, { flags: "w" });
            let opened = false;
            const failed = (err) => {
                if (file) {
                    file.close();
                    file = null;

                    fs.unlink(dest, () => {
                    });
                    reject(err);
                }
            };

            const unzip = zlib.createGunzip();
            unzip.pipe(file);


            response.pipe(unzip);


            request.on("error", err => {
                failed(err);
            });

            file.on("finish", () => {
                if (opened && file) {
                    resolve();
                }
            });

            file.on("open", () => {
                opened = true;
            });

            file.on("error", err => {
                if (err.code === "EEXIST") {
                    file.close();
                    reject("File already exists");
                } else {
                    failed(err);
                }
            });
        });
    });

}


async function dl(dst, src) {
    const dstPath = path.resolve(binariesPath, dst);
    const srcUrl = `http://${binariesHost}/${src}.gz`;
    process.stdout.write(`Downloading ${dst} from ${binariesHost} ...`);
    await downloadAndGunzip(dstPath, srcUrl);
    process.stdout.write('\n');
}

jest.setTimeout(60_000);

async function init() {
    const addonPath = path.join(binariesPath, 'tonclient.node');
    if (!fs.existsSync(addonPath)) {
        await dl('tonclient.node', `tonclient_${bv}_nodejs_addon_${p}`);
        if (p === 'darwin') {
            await dl('libtonclientnodejs.dylib', `tonclient_${bv}_nodejs_dylib_${p}`);
        }
    }
    const library = require('./tonclient.node');
    TONClient.setLibrary({
        fetch,
        WebSocket: WebSocket.w3cwebsocket,
        createLibrary: () => {
            return Promise.resolve(library);
        }
    });
    tests.client = await TONClient.create(tests.config);
}

async function done() {
    await tests.client.close();

}

const tests = {
    config: {
        defaultWorkchain: 0,
        servers: ["http://0.0.0.0"],
        log_verbose: true,
    },
    client: new TONClient(),
    init,
    done,
};

export { tests };
