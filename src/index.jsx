import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/js/dist/collapse';
import '../node_modules/bootstrap/js/dist/util';
import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/popper.js/dist/umd/popper';
import Root from './Root/presenter';
import './_scss/index.scss';
import configureStore from './_stores/configureStore.prod';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(<Root store={store} dev={false} />, document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
