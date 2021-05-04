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
  const [text, setText] = React.useState<string>('');

  const handlePress = async () => {
    const requestId = Math.ceil(Math.random() * 10000);

    console.log('START', requestId);
    setText('Work in progress...');

    const ourKeys = await client.crypto.nacl_box_keypair();
    const theirKeys = await client.crypto.nacl_box_keypair();
    const decrypted = (
      await client.crypto.generate_random_bytes({length: 10000})
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

    setText(`${end - start} ms`);
    console.log('END', requestId, `${end - start} ms`);
  };

  return (
    <View style={styles.container}>
      <Button title="Click me!" onPress={handlePress} />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
