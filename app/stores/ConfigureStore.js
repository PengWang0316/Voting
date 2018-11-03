import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage as storage } from 'react-native';

import rootReducer from '../reducers/Index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

/** Creating the store for Redux
  * @param {object} initailState is the object that contains the initail states.
  * @returns {object} Return the store object for Redux.
*/
export default function configureStore(initailState) {
  const store = createStore(persistedReducer, initailState, composeEnhancers(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return { store, persistor };
}
