import {TonClient} from '@ton-client/main';
import {nodeAddon} from '@ton-client/node-addon';
import {
    TestsLogger,
    TestsRunner,
    zeroRunningState,
} from '@ton-client/main-tests';

TonClient.useBinaryLibrary(nodeAddon);

(async () => {
    let state = zeroRunningState;
    const logger = new TestsLogger();
    await TestsRunner.run(x => state = {...x}, (...args) => {
        logger.log(...args);
    });
    console.log(state);
})();


