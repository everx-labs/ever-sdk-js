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

  const handleStart = async () => {
    const requestId = Math.ceil(Math.random() * 10000);

    console.log(`START ${requestId}`);
    setRequests((requests) => requests + 1);
    setText('Work in progress...');

    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();
    const decrypted = (
      await client.crypto.generate_random_bytes({length: 20000000})
    ).bytes;

    const start = performance.now();

    for (let i = 0; i < 3; i++) {
      const nonce = global.Buffer.from(
        (await client.crypto.generate_random_bytes({length: 24})).bytes,
        'base64',
      ).toString('hex');
      const encrypted = (
        await client.crypto.nacl_box({
          decrypted: decrypted,
          secret: ourKeys.secret,
          their_public: theirKeys.public,
          nonce,
        })
      ).encrypted;

      (
        await client.crypto.nacl_box_open({
          encrypted,
          secret: theirKeys.secret,
          their_public: ourKeys.public,
          nonce,
        })
      ).decrypted;
    }

    const end = performance.now();
    const duration = Math.round(end - start);

    setRequests((requests) => requests - 1);
    setText(`${duration} ms`);
    console.log(`END ${requestId} ${duration} ms`);
  };

  const handleIncrement = () => {
    setClicks((clicks) => clicks + 1);
  };

  return (
    <>
      <View style={styles.container}>
        <Button title="Start crypto stress test" onPress={handleStart} />
        <Text>{requests} running</Text>
        <Text>{text}</Text>
        <View style={{height: 20}}></View>
        <Button title="Increment" onPress={handleIncrement} />
        <Text>{clicks} clicks</Text>
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
});
