import React from 'react';
import ReactDOM from 'react-dom';

// import { Router, Route, IndexRoute, browserHistory } from "react-router";
// import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import ConnectedApp from './components/App';
import './index.css';
import DevTools from './containers/DevTools';
import registerServiceWorker from './registerServiceWorker';

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
