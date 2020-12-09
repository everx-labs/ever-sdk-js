const {TonClient} = require('@tonclient/core');
const {libNode} = require('@tonclient/lib-node');
const {
    TestsLogger,
    TestsRunner,
    zeroRunningState,
} = require('@tonclient/tests');

TestsRunner.setTimeout = setTimeout;
TestsRunner.log = console.log;
TestsRunner.exit = process.exit;

TonClient.useBinaryLibrary(libNode);

(async () => {
    let state = zeroRunningState;
    const logger = new TestsLogger();
    await TestsRunner.run((x) => state = {...x}, (...args) => {
        logger.logOutput(args.join(' ') + '\n');
    });
    console.log(state);
})();
