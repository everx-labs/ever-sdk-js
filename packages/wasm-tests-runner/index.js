// import {startTests} from "./suite/_/run";
import { TonClient } from '@ton-client/main';
import wasmModule from '@ton-client/wasm-module';
TonClient.useBinaryLibrary(wasmModule());

window.addEventListener('load', () => {
    const client = new TonClient({ network: { server_address: 'net.ton.dev' } });
    (async () => {
        try {
            const accounts = await client.net.query_collection({
                collection: 'accounts',
                filter: {},
                result: 'id balance(format:DEC)',
            });
            console.log('>>>', await client.client.version());
            console.log('>>>', accounts);
        } catch (error) {
            console.log('>>>', error);
        }
    })();
    // startTests(() => {});
});
