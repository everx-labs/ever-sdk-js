import {TonClient} from '@ton-client/main';
import {reactNativeModule} from '@ton-client/react-native-module';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';

TonClient.useBinaryLibrary(reactNativeModule);
AppRegistry.registerComponent(appName, () => App);
