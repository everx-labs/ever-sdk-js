const { TestsLogger, TestsRunner } = require('@eversdk/tests');
const findProcess = require('find-process');

const os = require('os');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer');
const path = require('path');

function run(name, args, log) {
    return new Promise((resolve, reject) => {
        try {
            const isWindows = os.platform() === 'win32';
            const spawned = isWindows
                ? spawn('cmd.exe', ['/c', name].concat(args), {
                    env: process.env,
                })
                : spawn(name, args, {
                    env: process.env,
                });
            const errors = [];
            const output = [];

            spawned.stdout.on('data', function (data) {
                const text = data.toString();
                output.push(text);
                log(text);
            });

            spawned.stderr.on('data', (data) => {
                errors.push(data);
                process.stderr.write(data.toString());
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

function startWebPackDevServer() {
    return new Promise((resolve, reject) => {
        run(
            path.resolve(__dirname, 'node_modules', '.bin', 'webpack-dev-server'),
            ['-d', '--config', 'webpack.config.js', '--progress', '--colors', '--host', '127.0.0.1'],
            (text) => {
                if (text.includes(': Compiled successfully.') || text.includes(': Compiled with warnings.')) {
                    resolve();
                }
            }
        ).catch(reject);
    });
}

async function killListenerProcess(port) {
    const listeners = await findProcess("port", port, true);
    if (listeners.length > 0) {
        console.log(`The process [${listeners[0].cmd}] is listening on the port ${port}. Kill it.`);
        process.kill(listeners[0].pid);
    }

}

async function main() {
    const WEBPACK_DEV_SERVER_PORT = process.env.WEBPACK_DEV_SERVER_PORT || 4000;
    await killListenerProcess(WEBPACK_DEV_SERVER_PORT);
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
    TestsRunner.setTimeout = setTimeout;
    TestsRunner.log = console.log;
    TestsRunner.exit = (code) => {
        (async () => {
            await page.close();
            await browser.close();
            await killListenerProcess(WEBPACK_DEV_SERVER_PORT);
            process.exit(code);
        })();
    }
    const logger = new TestsLogger();
    page.on('console', (msg) => {
        const text = `${msg.text()}\n`;
        logger.logOutput(text);
    });
    page.on('pageerror', (error) => {
        const text = `${error.message}\n`;
        console.error(text);
    });
    await page.goto('http://localhost:' + WEBPACK_DEV_SERVER_PORT, {});
}


(async () => {
    try {
        await main();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();
