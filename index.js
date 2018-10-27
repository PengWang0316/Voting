/** @format */
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import App from './app/App';
import configureStore from './app/stores/ConfigureStore';
import { name as appName } from './app.json';

const { store, persistor } = configureStore();
const AppContainer = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
