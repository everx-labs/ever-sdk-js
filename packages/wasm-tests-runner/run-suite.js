const os = require('os');
const runEnv = { ...process.env };
const {spawn} = require('child_process');
const puppeteer = require('puppeteer');
const path = require('path');

function run(name, args, onOutput, onError) {
    return new Promise((resolve, reject) => {
        try {
            const isWindows = os.platform() === 'win32';
            const spawned = isWindows
                ? spawn('cmd.exe', ['/c', name].concat(args), {
                    env: runEnv,
                })
                : spawn(name, args, {
                    env: runEnv,
                });
            const errors = [];
            const output = [];

            spawned.stdout.on('data', function (data) {
                const text = data.toString();
                output.push(text);
                onOutput(text);
            });

            spawned.stderr.on('data', (data) => {
                const text = data.toString();
                errors.push(text);
                if (onError) {
                    onError(text);
                } else {
                    process.stderr.write(text);
                }
            });

            spawned.on('error', (err) => {
                reject(err);
            });

            spawned.on('close', (code) => {
                if (code === 0) {
                    resolve(output.join(''));
                } else {
                    reject(errors.join(''));
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}

function extractReport(expect, line) {
    const pos = line.toString().indexOf(expect);
    if (pos < 0) {
        return null;
    }
    return JSON.parse(line.substr(pos + expect.length));
}

let success = 0;
let failure = 0;

function onOutputLine(line) {
    const startLog = extractReport('[TEST_START]', line);
    if (startLog) {
        return;
    }
    const successLog = extractReport('[TEST_SUCCESS]', line);
    if (successLog) {
        success += 1;
        console.log(`✓ ${successLog.name} (${success} / ${failure})`);
        return;
    }
    const failureLog = extractReport('[TEST_FAILURE]', line);
    if (failureLog) {
        failure += 1;
        console.log(`\x1b[0;31m𐄂 ${failureLog.name} (${success} / ${failure}) - ${JSON.stringify(failureLog.error, undefined, '    ')}\x1b[m`);
        return;
    }
    const completeLog = extractReport('[TEST_COMPLETE]', line);
    if (completeLog) {
        console.log(`---`);
        console.log(`success: ${success}`);
        console.log(`failure: ${failure}`);
        process.exit(failure > 0 ? 1 : 0);
    }
    console.log(line);
}

let logText = '';

function onTestLog(text) {
    if (text.indexOf('\n') < 0) {
        logText += text;
        return;
    }
    const lines = (logText + text).split('\n');
    logText = lines[lines.length - 1];
    lines.slice(0, -1).forEach(onOutputLine);
}

function startWebPackDevServer() {
    return new Promise((resolve, reject) => {
        run(
            path.resolve(__dirname, 'node_modules', '.bin', 'webpack-dev-server'),
            ['-d', '--config', 'webpack.config.js', '--progress', '--colors', '--host', '127.0.0.1'],
            (text) => {
                if (text.includes(': Compiled successfully.')) {
                    resolve();
                }
            },
            () => {
            },
        ).catch(reject);
    });
}

async function main() {
    await startWebPackDevServer();
    const browser = await puppeteer.launch({
        args: [
          // Required for Docker version of Puppeteer
          '--no-sandbox',
          '--disable-setuid-sandbox',
          // This will write shared memory files into /tmp instead of /dev/shm,
          // because Docker’s default for /dev/shm is 64MB
          '--disable-dev-shm-usage'
        ]
      });
    const page = await browser.newPage();
    page.on('console', (msg) => {
        const text = `${msg.text()}\n`;
        onTestLog(text);
        if (text.includes('[TEST_COMPLETE]')) {
            (async () => {
                await page.close();
                await browser.close();
                process.exit(0);
            })();
        }
    });
    await page.goto('http://localhost:4000', {});
}


(async () => {
    try {
        await main();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();
