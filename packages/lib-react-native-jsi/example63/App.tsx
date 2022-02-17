/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

declare var performance: any;

import * as React from 'react';

import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {TonClient} from '@eversdk/core';
import buffer from 'buffer';

const Buffer = global.Buffer ?? buffer.Buffer;

const client = new TonClient();

export default function App() {
  const [versionText, setVersionText] = React.useState(null);
  const [objectURL, setObjectURL] = React.useState(null);
  const [nonceText, setNonceText] = React.useState(null);
  const [randomDataText, setRandomDataText] = React.useState(null);
  const [requests, setRequests] = React.useState(0);
  const [cryptoText, setCryptoText] = React.useState(null);
  const [hashText, setHashText] = React.useState(null);
  const [clicks, setClicks] = React.useState(0);
  const [reactNativeInfo, setReactNativeInfo] = React.useState(null);
  const [now, setNow] = React.useState(performance.now());

  const paramsRef = React.useRef({
    nonce: null,
    ourKeys: null,
    theirKeys: null,
    decrypted: null,
  });
  const blobRef = React.useRef(null);
  const nowRef = React.useRef(null);
  const cancelRef = React.useRef(null);

  React.useEffect(() => {
    const version = require('./package.json').dependencies['react-native'];
    const vm = 'HermesInternal' in global ? 'Hermes' : 'JSC';
    setReactNativeInfo(`React Native ${version} (${vm})`);
  }, []);

  const onAnimationFrame = React.useCallback(() => {
    const prevNow = nowRef.current;
    const thisNow = performance.now();
    const duration = Math.round(thisNow - prevNow);
    nowRef.current = thisNow;
    if (duration > 5 * (1000 / 60)) {
      console.log(`LAG ${duration} ms`);
    }
    cancelRef.current = requestAnimationFrame(onAnimationFrame);
    setNow(thisNow);
  }, []);

  React.useEffect(() => {
    onAnimationFrame();
    return () => cancelAnimationFrame(cancelRef.current);
  }, [onAnimationFrame]);

  const handleCheckVersion = React.useCallback(async () => {
    setVersionText('Work in progress...');
    const result = await client.client.version();
    setVersionText(result.version);
  }, [setVersionText]);

  const handleEncodeDecode = async () => {
    const url =
      'https://raw.githubusercontent.com/tonlabs/TON-SDK/master/assets/ton-sdk-blue.png';
    const response = await fetch(url);
    const original = await response.blob();

    const nonce = Buffer.from(
      (await client.crypto.generate_random_bytes({length: 24})).bytes,
      'base64',
    ).toString('hex');
    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();

    const encrypted = (
      await client.crypto.nacl_box({
        // @ts-ignore // TODO: string | Blob
        decrypted: original,
        secret: ourKeys.secret,
        their_public: theirKeys.public,
        nonce,
      })
    ).encrypted;

    const decrypted = (
      await client.crypto.nacl_box_open({
        encrypted,
        secret: ourKeys.secret,
        their_public: theirKeys.public,
        nonce,
      })
    ).decrypted;

    blobRef.current = decrypted; // keep the reference so the blob doesn't get garbage collected

    const newObjectURL = URL.createObjectURL(decrypted);
    console.log(newObjectURL);
    setObjectURL(newObjectURL);
  };

  const handleGenerateKeysNonce = React.useCallback(async () => {
    setNonceText('Work in progress...');

    const nonce = Buffer.from(
      (await client.crypto.generate_random_bytes({length: 24})).bytes,
      'base64',
    ).toString('hex');
    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();

    paramsRef.current = {...paramsRef.current, nonce, ourKeys, theirKeys};

    setNonceText(nonce);
  }, [setNonceText]);

  const handleGenerateRandomData = React.useCallback(async (type) => {
    const length = 30 * 1000 * 1000; // 30 MB

    setRandomDataText('Work in progress...');

    paramsRef.current.decrypted = (
      await client.crypto.generate_random_bytes({
        length,
        // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
        response_binary_type: type === 'string' ? 'base64' : 'blob',
      })
    ).bytes;

    setRandomDataText(`${type} ${length}`);
  }, []);

  const handleCryptoTest = React.useCallback(async () => {
    if (paramsRef.current.nonce === null) {
      console.log('Keys and nonce not generated yet');
      return;
    }
    if (paramsRef.current.decrypted === null) {
      console.log('Random data not generated yet');
      return;
    }

    setRequests((r) => r + 1);
    setCryptoText('Work in progress...');

    const {decrypted, ourKeys, theirKeys, nonce} = paramsRef.current;

    const start = performance.now();
    (
      await client.crypto.nacl_box({
        decrypted,
        secret: ourKeys.secret,
        their_public: theirKeys.public,
        nonce,
      })
    ).encrypted;
    const end = performance.now();
    const duration = Math.round(end - start);

    setRequests((r) => r - 1);
    setCryptoText(`${duration} ms`);
  }, [setCryptoText]);

  const handleCalculateHash = React.useCallback(async () => {
    const {decrypted} = paramsRef.current;
    if (decrypted === null) {
      console.log('Random data not generated yet');
      return;
    }

    setHashText('Work in progress...');

    const {hash} = await client.crypto.sha512({
      data: decrypted,
      // @ts-ignore // TODO: response_binary_type: 'base64' | 'blob' | 'as_params'
      response_binary_type: 'base64',
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
      <View style={styles.container}>
        <Button title="Check version" onPress={handleCheckVersion} />
        <Text>{versionText}</Text>
        <View style={styles.separator} />

        <Button title="Encode and decode image" onPress={handleEncodeDecode} />
        <Image source={{uri: objectURL}} style={styles.image} />
        <Text style={styles.objectURL}>{objectURL}</Text>
        <View style={styles.separator} />

        <Button
          title="Generate keys and nonce"
          onPress={handleGenerateKeysNonce}
        />
        <Text>{nonceText}</Text>
        <View style={styles.separator} />

        <View style={styles.horizontal}>
          <Button
            title="Random string"
            onPress={() => handleGenerateRandomData('string')}
          />
          <View style={styles.separator} />
          <Button
            title="Random blob"
            onPress={() => handleGenerateRandomData('blob')}
          />
        </View>
        <Text>{randomDataText}</Text>
        <View style={styles.separator} />

        <Button title="Start crypto stress test" onPress={handleCryptoTest} />
        <Text>{requests} running</Text>
        <Text>{cryptoText}</Text>
        <View style={styles.separator} />

        <Button title="Calculate hash" onPress={handleCalculateHash} />
        <Text style={styles.hash}>{hashText}</Text>
        <View style={styles.separator} />

        <Button title="Increment" onPress={handleIncrement} />
        <Text onPress={handleResetClicks}>{clicks} clicks</Text>
        <View style={styles.separator} />

        <Text>{reactNativeInfo}</Text>
        <Text>{now}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: 8,
    height: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  objectURL: {
    height: 40,
    marginHorizontal: 20,
  },
  hash: {
    height: 60,
    marginHorizontal: 20,
  },
  horizontal: {
    flexDirection: 'row',
  },
});
