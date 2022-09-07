import { Buffer } from "buffer";

import "./App.css";

import * as React from "react";

import { TonClient } from "@eversdk/core";

const client = new TonClient();

function App() {
  const [versionText, setVersionText] = React.useState(null);
  const [objectURL, setObjectURL] = React.useState(null);
  const [nonceText, setNonceText] = React.useState(null);
  const [randomDataText, setRandomDataText] = React.useState(null);
  const [requests, setRequests] = React.useState(0);
  const [cryptoText, setCryptoText] = React.useState(null);
  const [hashText, setHashText] = React.useState(null);
  const [clicks, setClicks] = React.useState(0);
  const [browserInfo, setBrowserInfo] = React.useState(null);
  // const [now, setNow] = React.useState(performance.now());

  const paramsRef = React.useRef({
    nonce: null,
    ourKeys: null,
    theirKeys: null,
    decrypted: null,
  });
  const blobRef = React.useRef(null);
  // const nowRef = React.useRef(null);
  // const cancelRef = React.useRef(null);

  React.useEffect(() => {
    setBrowserInfo(navigator.userAgent);
  }, []);

  const handleCheckVersion = React.useCallback(async () => {
    setVersionText("Work in progress...");
    const result = await client.client.version();
    setVersionText(result.version);
  }, [setVersionText]);

  // const onAnimationFrame = React.useCallback(() => {
  //   const prevNow = nowRef.current;
  //   const thisNow = performance.now();
  //   const duration = Math.round(thisNow - prevNow);
  //   nowRef.current = thisNow;
  //   if (duration > 5 * (1000 / 60)) {
  //     console.log(`LAG ${duration} ms`);
  //   }
  //   cancelRef.current = requestAnimationFrame(onAnimationFrame);
  //   setNow(thisNow);
  // }, []);

  // React.useEffect(() => {
  //   onAnimationFrame();
  //   return () => cancelAnimationFrame(cancelRef.current);
  // }, [onAnimationFrame]);

  const handleEncodeDecode = async () => {
    const url =
      "https://raw.githubusercontent.com/tonlabs/ever-sdk-js/master/media/ton-sdk-blue.png";
    const response = await fetch(url);
    const original = await response.blob();

    const nonce = Buffer.from(
      (await client.crypto.generate_random_bytes({ length: 24 })).bytes,
      "base64"
    ).toString("hex");
    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();

    const { encrypted } = await client.crypto.nacl_box({
      // @ts-ignore // TODO: string | Blob
      decrypted: original,
      secret: ourKeys.secret,
      their_public: theirKeys.public,
      nonce,
    });

    const { decrypted } = await client.crypto.nacl_box_open({
      encrypted,
      secret: ourKeys.secret,
      their_public: theirKeys.public,
      nonce,
    });

    blobRef.current = decrypted; // keep the reference so the blob doesn't get garbage collected

    const newObjectURL = URL.createObjectURL(decrypted);
    console.log(newObjectURL);
    setObjectURL(newObjectURL);
  };

  const handleGenerateKeysNonce = React.useCallback(async () => {
    setNonceText("Work in progress...");

    const nonce = Buffer.from(
      (await client.crypto.generate_random_bytes({ length: 24 })).bytes,
      "base64"
    ).toString("hex");
    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();

    paramsRef.current = { ...paramsRef.current, nonce, ourKeys, theirKeys };

    setNonceText(nonce);
  }, [setNonceText]);

  const handleGenerateRandomData = React.useCallback(async (type) => {
    const length = 30 * 1000 * 1000; // 30 MB

    setRandomDataText("Work in progress...");

    paramsRef.current.decrypted = (
      await client.crypto.generate_random_bytes({
        length,
        // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
        response_binary_type: type === "string" ? "base64" : "blob",
      })
    ).bytes;

    setRandomDataText(`${type} ${length}`);
  }, []);

  const handleCryptoTest = React.useCallback(async () => {
    if (paramsRef.current.nonce === null) {
      console.log("Keys and nonce not generated yet");
      return;
    }
    if (paramsRef.current.decrypted === null) {
      console.log("Random data not generated yet");
      return;
    }

    setRequests((r) => r + 1);
    setCryptoText("Work in progress...");

    const { decrypted, ourKeys, theirKeys, nonce } = paramsRef.current;

    const start = performance.now();
    await client.crypto.nacl_box({
      decrypted,
      secret: ourKeys.secret,
      their_public: theirKeys.public,
      nonce,
    });
    const end = performance.now();
    const duration = Math.round(end - start);

    setRequests((r) => r - 1);
    setCryptoText(`${duration} ms`);
  }, [setCryptoText]);

  const handleCalculateHash = React.useCallback(async () => {
    const { decrypted } = paramsRef.current;
    if (decrypted === null) {
      console.log("Random data not generated yet");
      return;
    }

    setHashText("Work in progress...");

    const { hash } = await client.crypto.sha512({
      data: decrypted,
      // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
      response_binary_type: "base64",
    });

    setHashText(hash.toString());
  }, []);

  const handleIncrement = React.useCallback(() => {
    setClicks((c) => c + 1);
  }, [setClicks]);

  const handleResetClicks = React.useCallback(() => {
    setClicks(0);
  }, [setClicks]);

  return (
    <>
      <button onClick={handleCheckVersion}>Check version</button>
      <p>{versionText}</p>
      <hr />

      <button onClick={handleEncodeDecode}>Encode and decode image</button>
      <br />
      <img src={objectURL} alt="" className="image" />
      <p>{objectURL}</p>
      <hr />

      <button onClick={handleGenerateKeysNonce}>Generate keys and nonce</button>
      <p>{nonceText}</p>
      <hr />

      <button onClick={() => handleGenerateRandomData("string")}>
        Random string
      </button>
      <button onClick={() => handleGenerateRandomData("blob")}>
        Random blob
      </button>
      <p>{randomDataText}</p>
      <hr />

      <button onClick={handleCryptoTest}>Start crypto stress test</button>
      <p>{requests} running</p>
      <p>{cryptoText}</p>
      <hr />

      <button onClick={handleCalculateHash}>Calculate hash</button>
      <p>{hashText}</p>
      <hr />

      <button onClick={handleIncrement}>Increment</button>
      <p onClick={handleResetClicks}>{clicks} clicks</p>
      <hr />

      <p>{browserInfo}</p>
      {/* <p>{now}</p> */}
    </>
  );
}

export default App;
