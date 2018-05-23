import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root/presenter';
import './_scss/index.scss';

// import { Router, Route, IndexRoute, browserHistory } from "react-router";
// import { syncHistoryWithStore } from "react-router-redux";
import configureStore from './_stores/configureStore.dev';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(<Root store={store} dev />, document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
