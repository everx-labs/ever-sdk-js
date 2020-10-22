// import {startTests} from "./suite/_/run";
import { TonClient } from '@ton-client/main';
import wasmModule from '@ton-client/wasm-module';
TonClient.useBinaryLibrary(wasmModule());

window.addEventListener('load', () => {
    const client = new TonClient({ network: { server_address: 'http://localhost:8080' } });
    (async () => {
        try {
            const accounts = await client.net.query_collection({
                collection: 'accounts',
                filter: {},
                result: 'id',
            });
            console.log('>>>', await client.client.version());
            console.log('>>>', accounts);
        } catch (error) {
            console.log('>>>', error);
        }
    })();

    console.log(TonClient);
    // startTests(() => {});
});
