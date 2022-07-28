import entry from './entry';
import { TonClient } from '@eversdk/core';
import { libWeb, libWebSetup } from "@eversdk/lib-web";
import { TestsRunner } from "@eversdk/tests";

entry();
libWebSetup({
    disableSeparateWorker: true
})
TonClient.useBinaryLibrary(libWeb);

window.addEventListener('load', () => {
    (async () => {
        try {
            await TestsRunner.run(
                ({ version, passed, failed, finished }) => {
                    document.body.innerHTML = `Core Version ${version}<br />Passed: ${passed}<br />Failed: ${failed}<br />${finished ? 'Finished' : ''}`;
                },
                (...args) => console.log(...args),
            );
        } catch (error) {
            console.log('>>>', error);
            document.body.innerHTML = 'Error';
        }
    })();
    // startTests(() => {});
});
