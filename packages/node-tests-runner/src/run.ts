import {TonClient} from '@ton-client/main';
import {nodeAddon} from '@ton-client/node-addon';
import {
    TestsLogger,
    TestsRunner, TestsRunningState,
    zeroRunningState,
} from '@ton-client/main-tests';

TestsRunner.setTimeout = setTimeout;
TestsRunner.log = console.log;
TestsRunner.exit = process.exit;

TonClient.useBinaryLibrary(nodeAddon);

(async () => {
    let state = zeroRunningState;
    const logger = new TestsLogger();
    await TestsRunner.run((x: TestsRunningState) => state = {...x}, (...args: any[]) => {
        logger.log(...args);
    });
    console.log(state);
})();


