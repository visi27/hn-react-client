import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
/* eslint-disable import/no-extraneous-dependencies */
import { persistState } from 'redux-devtools';
import throttle from 'lodash/throttle';
/* eslint-enable import/no-extraneous-dependencies */
import thunk from 'redux-thunk';

import * as appLocalStorage from '../modules/localStorage';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers/index';

const logger = createLogger();

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk, logger),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey()),
);

export default function configureStore() {
  const store = createStore(rootReducer, appLocalStorage.loadState(), enhancer);

  store.subscribe(throttle(() => {
    // Persist only user data, not the whole state
    appLocalStorage.persistState({ search: store.getState().search });
  }, 2000));

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('../reducers');
      /* eslint-enable global-require */
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
