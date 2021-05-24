/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

declare var performance: any;

import * as React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

import {TonClient} from '@tonclient/core';
import buffer from 'buffer';

if (!global.Buffer) {
  global.Buffer = buffer.Buffer;
}

const client = new TonClient();

export default function App() {
  const [requests, setRequests] = React.useState<number>(0);
  const [text, setText] = React.useState<string>('');
  const [clicks, setClicks] = React.useState<number>(0);
  const [now, setNow] = React.useState(null);

  const pregeneratedRef = React.useRef(null);
  const nowRef = React.useRef(null);
  const cancelRef = React.useRef(null);

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

  React.useEffect(() => {
    (async () => {
      pregeneratedRef.current = {
        decrypted: (
          await client.crypto.generate_random_bytes({length: 30000000})
        ).bytes,
        nonce: global.Buffer.from(
          (await client.crypto.generate_random_bytes({length: 24})).bytes,
          'base64',
        ).toString('hex'),
        ourKeys: await client.crypto.nacl_box_keypair(),
        theirKeys: await client.crypto.nacl_box_keypair(),
      };
    })();
  }, []);

  const handleStart = async () => {
    if (pregeneratedRef.current === null) {
      console.log('Request params not generated yet');
      return;
    }

    const requestId = Math.ceil(Math.random() * 10000);

    console.log(`START ${requestId}`);
    setRequests((r) => r + 1);
    setText('Work in progress...');

    const {ourKeys, theirKeys, decrypted, nonce} = pregeneratedRef.current;

    const start = performance.now();
    const encrypted = (
      await client.crypto.nacl_box({
        decrypted: decrypted,
        secret: ourKeys.secret,
        their_public: theirKeys.public,
        nonce,
      })
    ).encrypted;
    console.log(`RESULT ${encrypted.slice(0, 16)}...`);
    const end = performance.now();
    const duration = Math.round(end - start);

    setRequests((r) => r - 1);
    setText(`${duration} ms`);
    console.log(`END ${requestId} ${duration} ms`);
  };

  const handleIncrement = () => {
    setClicks((c) => c + 1);
  };

  return (
    <>
      <View style={styles.container}>
        <Button title="Start crypto stress test" onPress={handleStart} />
        <Text>{requests} running</Text>
        <Text>{text}</Text>
        <View style={styles.separator} />
        <Button title="Increment" onPress={handleIncrement} />
        <Text>{clicks} clicks</Text>
        <View style={styles.separator} />
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
    height: 20,
  },
});
