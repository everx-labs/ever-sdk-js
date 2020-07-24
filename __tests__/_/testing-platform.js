/**
 * This file must exports:
 * async function findGiverKeys()
 * async function writeGiverKeys(keys)
 * function createJaegerTracer(endpoint: string): ?Tracer
 * async function initTONClient(tonClientClass)
 * async function loadContractPackage(name, version)
 * const env
 */

import { Tracer } from 'opentracing';
import { version } from '../../package.json';
import { initTracer as initJaegerTracer } from 'jaeger-client';

const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');
const zlib = require('zlib');


const p = os.platform();
const bv = process.env.TON_SDK_BIN_VERSION || (version).split('.')[0];
const binariesHost = 'sdkbinaries-ws.tonlabs.io';
const binariesPath = path.resolve(__dirname, '..');

function downloadAndGunzip(dest, url) {
    return new Promise((resolve, reject) => {
        const request = http.get(url, response => {
            if (response.statusCode !== 200) {
                reject({
                    message: `Download from ${url} failed with ${response.statusCode}: ${response.statusMessage}`,
                });
                return;
            }
            fs.mkdirSync(path.dirname(path.resolve(dest)), ({ recursive: true }: any));
            let file = fs.createWriteStream(dest, { flags: 'w' });
            let opened = false;
            const failed = (err) => {
                if (file) {
                    const f = file;
                    file = null;
                    f.close();

                    fs.unlink(dest, () => {
                    });
                    reject(err);
                }
            };

            const unzip = zlib.createGunzip();
            unzip.pipe(file);


            response.pipe(unzip);


            request.on('error', err => {
                failed(err);
            });

            file.on('finish', () => {
                if (opened && file) {
                    resolve();
                }
            });

            file.on('open', () => {
                opened = true;
            });

            file.on('error', err => {
                if (err.code === 'EEXIST') {
                    if (file) {
                        file.close();
                    }
                    reject('File already exists');
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
    process.stdout.write(`Downloading ${dst} from ${srcUrl} to ${dstPath} ...`);
    await downloadAndGunzip(dstPath, srcUrl);
    process.stdout.write('\n');
}

async function ensureBinaries() {
    const addonPath = path.join(binariesPath, 'tonclient.node');
    if (!fs.existsSync(addonPath)) {
        await dl('tonclient.node', `tonclient_${bv}_nodejs_addon_${p}`);
        if (p === 'darwin') {
            await dl('libtonclientnodejs.dylib', `tonclient_${bv}_nodejs_dylib_${p}`);
        }
    }
}

async function findGiverKeys() {
    try {
        let keysPath = path.resolve(os.homedir(), 'giverKeys.json');
        return JSON.parse(fs.readFileSync(keysPath, 'utf8'));
    } catch {
    }
    return null;
}

async function writeGiverKeys(keys) {
    fs.writeFileSync(path.resolve(os.homedir(), 'giverKeys.json'), JSON.stringify(keys));
}

function createJaegerTracer(endpoint: string): ?Tracer {
    if (!endpoint) {
        return null;
    }
    return initJaegerTracer({
        serviceName: 'ton-client-js',
        sampler: {
            type: 'const',
            param: 1,
        },
        reporter: {
            collectorEndpoint: endpoint,
            logSpans: true,
        },
    }, {
        logger: {
            info(msg) {
                console.log('INFO ', msg);
            },
            error(msg) {
                console.log('ERROR', msg);
            },
        },
    });
}

const fetch = require('node-fetch');
const WebSocket = require('websocket');

async function initTONClient(tonClientClass) {
    await ensureBinaries();

    //$FlowFixMe
    const library = require('../tonclient.node');
    tonClientClass.setLibrary({
        fetch,
        WebSocket: WebSocket.w3cwebsocket,
        createLibrary: () => {
            return Promise.resolve(library);
        },
    });
}

async function loadContractPackage(name, abiVersion) {
    const base = path.resolve(__dirname, '..', 'contracts');
    const abi = path.resolve(base, `abi_v${abiVersion}`, `${name}.abi.json`);
    const tvc = path.resolve(base, `abi_v${abiVersion}`, `${name}.tvc`);
    return {
        abi: JSON.parse(fs.readFileSync(abi, 'utf8')),
        imageBase64: fs.readFileSync(tvc).toString('base64'),
    };
}


require('dotenv').config();

const env = {
    USE_NODE_SE: process.env.USE_NODE_SE,
    TON_NETWORK_ADDRESS: process.env.TON_NETWORK_ADDRESS,
};


export {
    findGiverKeys,
    writeGiverKeys,
    createJaegerTracer,
    initTONClient,
    loadContractPackage,
    env,
};
