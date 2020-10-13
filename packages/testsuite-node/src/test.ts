import {TonClient} from "@ton-client/main";
import {nodeAddon} from "@ton-client/bin-node";
import "ts-jest";

beforeAll(() => {
    TonClient.useBinaryLibrary(nodeAddon);
});

test("Version", async () => {
    const client = new TonClient({servers: []});
    const version = await client.request('client.version', '');
    expect(version.version.split('.')[0]).toEqual('1');
});
