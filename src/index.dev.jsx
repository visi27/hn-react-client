import React from 'react';
import ReactDOM from 'react-dom';

// import { Router, Route, IndexRoute, browserHistory } from "react-router";
// import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore.dev';
import ConnectedApp from './components/App';
import './index.css';
import DevTools from './containers/DevTools';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/popper.js/dist/umd/popper';
import '../node_modules/bootstrap/js/dist/util';
import '../node_modules/bootstrap/js/dist/collapse';
import './scss/index.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedApp />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
