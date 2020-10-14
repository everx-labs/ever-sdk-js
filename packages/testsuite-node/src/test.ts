import {TonClient} from "@ton-client/main";
import {nodeAddon} from "@ton-client/bin-node";
import "ts-jest";

beforeAll(() => {
    TonClient.useBinaryLibrary(nodeAddon);
});

afterAll(() => {
});

test("Version", async () => {
    const client = new TonClient({servers: []});
    const version = await client.request('client.version', '');
    expect(version.version.split('.')[0]).toEqual('1');
});


test("Conversion", () => {
    expect(TonClient.toKey('123456789123456789123456789'))
        .toEqual('000000000000000000000000000000000000000000661efdf2e3b19f7c045f15');
});
