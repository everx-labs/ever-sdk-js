import {TonClient} from '@ton-client/main';
import {nodeAddon} from '@ton-client/node-addon';
import {
    startTests,
    zeroRunningState,
} from '@ton-client/main-tests';
import {TestsRunner} from '@ton-client/main-tests/dist/runner';

TonClient.useBinaryLibrary(nodeAddon);

(async () => {
    let state = zeroRunningState;
    const runner = new TestsRunner();
    await startTests(x => state = {...x}, (...args) => {
        runner.log(...args);
    });
    console.log(state);
})();


