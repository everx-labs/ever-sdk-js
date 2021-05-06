/**
 * @format
 */

import App from './App';
import {AppRegistry} from 'react-native';
import {TonClient} from '@tonclient/core';
import {name as appName} from './app.json';
import {libReactNativeJsi} from '@tonclient/lib-react-native-jsi';

TonClient.useBinaryLibrary(libReactNativeJsi);

AppRegistry.registerComponent(appName, () => App);
