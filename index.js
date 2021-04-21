/**
 * @format
 */

 import React from 'react';
 import { AppRegistry } from 'react-native';
 import { Provider as PaperProvider } from 'react-native-paper';
import {App} from './App';
import {name as appName} from './app.json';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';

const UIprovider = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);
  

AppRegistry.registerComponent(appName, () => UIprovider);
