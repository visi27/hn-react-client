import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/js/dist/collapse';
import '../node_modules/bootstrap/js/dist/util';
import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/popper.js/dist/umd/popper';
import Root from './components/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './scss/index.scss';
// import { Router, Route, IndexRoute, browserHistory } from "react-router";
// import { syncHistoryWithStore } from "react-router-redux";
import configureStore from './stores/configureStore.dev';

const store = configureStore();

ReactDOM.render(<Root store={store} dev />, document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
