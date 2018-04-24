import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import result from './result';
import cache from './cache';
import error from './error';
import app from './app';
import search from './search';
import menu from './menu';

export default combineReducers({
  result,
  cache,
  error,
  app,
  search,
  menu,
  router: routerReducer,
});
