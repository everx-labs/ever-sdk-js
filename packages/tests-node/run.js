const {TonClient} = require('@eversdk/core');
const {libNode} = require('@eversdk/lib-node');
const {
    TestsLogger,
    TestsRunner,
    zeroRunningState,
} = require('@eversdk/tests');

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
