import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from "react-router";
// import { syncHistoryWithStore } from "react-router-redux";

import configureStore from './stores/configureStore.prod';
import Root from './components/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Auth from './services/Auth/Auth';

import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/popper.js/dist/umd/popper';
import '../node_modules/bootstrap/js/dist/util';
import '../node_modules/bootstrap/js/dist/collapse';
import './scss/index.scss';

const store = configureStore();
const auth = new Auth(store);

ReactDOM.render(<Root store={store} auth={auth} dev={false} />, document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
