/**
 * @format
 */

import App from './App';
import {AppRegistry} from 'react-native';
import {TonClient} from '@eversdk/core';
import {name as appName} from './app.json';
import {libReactNativeJsi} from '@eversdk/lib-react-native-jsi';

// eslint-disable-next-line react-hooks/rules-of-hooks
TonClient.useBinaryLibrary(libReactNativeJsi);

AppRegistry.registerComponent(appName, () => App);
