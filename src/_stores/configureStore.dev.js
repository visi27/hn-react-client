import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
/* eslint-disable import/no-extraneous-dependencies */
import { persistState } from 'redux-devtools';
import { createLogger } from 'redux-logger';
/* eslint-enable import/no-extraneous-dependencies */
import thunk from 'redux-thunk';
import DevTools from '../_containers/DevTools';
import rootReducer from '../_reducers/index';

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk, routerMiddleware(createHistory()), createLogger()),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey()),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../_reducers', () => {
      /* eslint-disable global-require */
      const nextReducer = require('../_reducers');
      /* eslint-enable global-require */
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
