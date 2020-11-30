const {TonClient} = require('@ton-client/core');
const {nodeAddon} = require('@ton-client/node-addon');
const {
    TestsLogger,
    TestsRunner,
    zeroRunningState,
} = require('@ton-client/tests');

TestsRunner.setTimeout = setTimeout;
TestsRunner.log = console.log;
TestsRunner.exit = process.exit;

TonClient.useBinaryLibrary(nodeAddon);

(async () => {
    let state = zeroRunningState;
    const logger = new TestsLogger();
    await TestsRunner.run((x) => state = {...x}, (...args) => {
        logger.logOutput(args.join(' ') + '\n');
    });
    console.log(state);
})();


