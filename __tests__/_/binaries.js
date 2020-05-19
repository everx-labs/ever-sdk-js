import { version, binaries_version } from '../../package.json';

require('dotenv')
    .config();
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');
const zlib = require('zlib');


export const p = os.platform();
export const bv = process.env.BINARIES_VERSION ? process.env.BINARIES_VERSION.replace(/\./g, '_') : (binaries_version || version).split('.')[0];
const binariesHost = 'sdkbinaries-ws.tonlabs.io';
export const binariesPath = path.resolve(__dirname, '..');

function downloadAndGunzip(dest, url) {
    return new Promise((resolve, reject) => {
        const request = http.get(url, response => {
            if (response.statusCode !== 200) {
                reject({
                    message: `Download failed with ${response.statusCode}: ${response.statusMessage}`,
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

export async function dl(dst, src) {
    const dstPath = path.resolve(binariesPath, dst);
    const srcUrl = `http://${binariesHost}/${src}.gz`;
    process.stdout.write(`Downloading ${dst} from ${srcUrl} to ${dstPath} ...`);
    await downloadAndGunzip(dstPath, srcUrl);
    process.stdout.write('\n');
}

export async function ensureBinaries() {
    const addonPath = path.join(binariesPath, 'tonclient.node');
    if (!fs.existsSync(addonPath)) {
        await dl('tonclient.node', `tonclient_${bv}_nodejs_addon_${p}`);
        if (p === 'darwin') {
            await dl('libtonclientnodejs.dylib', `tonclient_${bv}_nodejs_dylib_${p}`);
        }
    }
}
