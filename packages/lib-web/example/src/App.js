import * as React from "react";

import { TonClient } from "@tonclient/core";

const client = new TonClient();

function App() {
  const [clicks, setClicks] = React.useState(0);
  const [objectURL, setObjectURL] = React.useState(null);

  const handlePress = React.useCallback(async () => {
    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();
    const nonce = Buffer.from(
      (await client.crypto.generate_random_bytes({ length: 24 })).bytes,
      "base64"
    ).toString("hex");

    // console.time("generate_random_bytes");
    // const original = (
    //   await client.crypto.generate_random_bytes({
    //     length: 100000000, // 100 MB
    //     response_binary_type: "blob",
    //   })
    // ).bytes;
    // console.timeEnd("generate_random_bytes");
    // console.log(original);

    console.time("fetch");
    const url =
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg";
    const response = await fetch(url);
    const original = await response.blob();
    console.timeEnd("fetch");
    console.log(original);

    console.time("encrypt");
    const { encrypted } = await client.crypto.nacl_box({
      decrypted: original,
      secret: ourKeys.secret,
      their_public: theirKeys.public,
      nonce,
    });
    console.timeEnd("encrypt");
    console.log(encrypted);

    console.time("decrypt");
    const { decrypted } = await client.crypto.nacl_box_open({
      encrypted,
      secret: ourKeys.secret,
      their_public: theirKeys.public,
      nonce,
    });
    console.timeEnd("decrypt");
    console.log(decrypted);

    const objectURL = URL.createObjectURL(decrypted);
    setObjectURL(objectURL);
  }, []);

  const handleIncrement = React.useCallback(() => {
    setClicks((c) => c + 1);
  }, [setClicks]);

  return (
    <>
      <button onClick={handlePress}>Send request</button>
      <button onClick={handleIncrement}>{clicks}</button>
      <br />
      {objectURL && <img src={objectURL} alt="" width="300" />}
    </>
  );
}

export default App;
