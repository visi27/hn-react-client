import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';

const logger = createLogger();

const enhancer = applyMiddleware(thunk, logger);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}