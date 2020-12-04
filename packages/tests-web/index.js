import entry from './entry';
import { TonClient } from '@tonclient/core';
import wasmModule from '@tonclient/lib-web';
import { TestsRunner } from "@tonclient/tests";

TonClient.useBinaryLibrary(wasmModule());

window.addEventListener('load', () => {
    (async () => {
        try {
            await TestsRunner.run(
                () => {
                },
                (...args) => console.log(...args),
            );
        } catch (error) {
            console.log('>>>', error);
        }
    })();
    // startTests(() => {});
});
