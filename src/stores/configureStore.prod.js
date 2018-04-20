import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers/index';
import * as appLocalStorage from '../modules/localStorage';

const logger = createLogger();

const enhancer = applyMiddleware(thunk, logger);

export default function configureStore() {
  const store = createStore(rootReducer, appLocalStorage.loadState(), enhancer);

  store.subscribe(throttle(() => {
    // Persist only user data, not the whole state
    appLocalStorage.persistState({ search: store.getState().search });
  }, 2000));

  return store;
}
