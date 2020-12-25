/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 *
 */
import entry from './entry';
import { TonClient } from '@tonclient/core';
import {libReactNative} from '@tonclient/lib-react-native';
import { AppRegistry } from 'react-native';
import App from './App';

entry();

TonClient.useBinaryLibrary(libReactNative);
AppRegistry.registerComponent('tests_runner', () => App);
