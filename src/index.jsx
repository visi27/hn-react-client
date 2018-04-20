import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from "react-router";
// import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import ConnectedApp from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/umd/popper';
import '../node_modules/bootstrap/js/dist/util';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './scss/index.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedApp />
    </div>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
