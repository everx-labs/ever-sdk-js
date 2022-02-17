const {spawn} = require('child_process');
const {TestsLogger, TestsRunner} = require('@eversdk/tests');
const findProcess = require('find-process');

function run(name, args, logger) {
    return new Promise((resolve, reject) => {
        try {
            const spawned = spawn(name, args, {
                env: process.env,
            });
            const errors = [];
            const output = [];

            spawned.stdout.on('data', function (data) {
                const text = data.toString();
                output.push(text);
                logger && logger.logOutput(text);
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

function start(fn) {
    (async () => {
        try {
            await fn();
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    })();
}


start(async () => {
    TestsRunner.log = console.log;
    TestsRunner.setTimeout = setTimeout;
    TestsRunner.exit = process.exit;

    const port = 8081;
    const listeners = await findProcess("port", port, true);
    if (listeners.length > 0) {
        console.log(`The process [${listeners[0].cmd}] is listening on the port ${port}. Kill it.`);
        process.kill(listeners[0].pid);
    }
    let runTarget = '';
    process.argv.forEach((arg) => {
        if (arg.toLowerCase() === 'ios') {
            runTarget = 'run-ios';
        } else if (arg.toLowerCase() === 'android') {
            runTarget = 'run-android';
        }
    });
    if (runTarget === '') {
        console.log('Run target missing. Use: node run-suite ios | android.');
        process.exit(1);
    }
    const logger = new TestsLogger();
    start(() => run('npx', ['react-native', 'start', '--reset-cache'], logger));
    await run('npx', ['react-native', runTarget], null);
});
