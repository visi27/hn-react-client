import React from 'react';
import ReactDOM from 'react-dom';
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
