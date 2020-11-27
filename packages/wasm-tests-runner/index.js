import entry from './entry';
import { TonClient } from '@ton-client/core';
import wasmModule from '@ton-client/wasm-module';
import { TestsRunner } from "@ton-client/tests";

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
