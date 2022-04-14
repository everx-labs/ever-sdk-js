import entry from './entry';
import { TonClient } from '@eversdk/core';
import { libReactNative } from '@eversdk/lib-react-native';
import { AppRegistry } from 'react-native';
import App from './App';
entry();
import {name as appName} from './app.json';
TonClient.useBinaryLibrary(libReactNative);
AppRegistry.registerComponent(appName, () => App);
