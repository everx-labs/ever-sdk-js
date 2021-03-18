import {
    signerKeys,
    TonClient,
} from "@tonclient/core";
import {loadContract, init, done} from "./utils";
import {Account} from "../dist";

beforeAll(init);
afterAll(done);

test("Account Basic Usage", async () => {
    const client = TonClient.default;
    const startTime = Date.now();

    const acc = new Account(loadContract("Hello"), {
        signer: signerKeys(await client.crypto.generate_random_sign_keys()),
        client,
    });

    const address = await acc.getAddress();
    expect(address.substr(0, 2)).toEqual("0:");

    await acc.deploy({useGiver: true});
    expect(Number.parseInt((await acc.getAccount()).balance)).toBeGreaterThan(500_000_000);

    let response = await acc.run("touch", {});
    expect(response.transaction.id).toHaveLength(64);

    response = await acc.runLocal("sayHello", {});
    const timestamp = Number(response.decoded?.output.value0) * 1000;
    expect(timestamp).toBeGreaterThan(startTime);
});
