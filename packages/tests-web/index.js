import entry from './entry';
import { TonClient } from '@tonclient/core';
import {libWeb} from '@tonclient/lib-web';
import { TestsRunner } from "@tonclient/tests";

TonClient.useBinaryLibrary(libWeb);

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
