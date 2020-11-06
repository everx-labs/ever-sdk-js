import {TestsRunner} from '@ton-client/main-tests/dist/runner';
import {spawn} from 'child_process';


function run(name: string, args: string[], runner: TestsRunner | null): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            const spawned = spawn(name, args, {
                env: process.env,
            });
            const errors: string[] = [];
            const output: string[] = [];

            spawned.stdout.on('data', function (data: any) {
                const text = data.toString();
                output.push(text);
                runner?.log(text);
            });

            spawned.stderr.on('data', (data: any) => {
                errors.push(data);
                process.stderr.write(data.toString());
            });

            spawned.on('error', (err: any) => {
                reject(err);
            });

            spawned.on('close', (code: number) => {
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

function start<R>(fn: () => Promise<R>) {
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
    const runner = new TestsRunner();
    start(() => run('npx', ['react-native', 'start', '--reset-cache'], runner));
    await run('npx', ['react-native', runTarget], null);
});
