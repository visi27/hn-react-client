import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedApp from './App';
import DevTools from '../containers/DevTools';

const Root = ({ store, dev }) => (
  <Provider store={store}>
    <div>
      <ConnectedApp />
      {dev ? <DevTools /> : ''}
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}),
  dev: PropTypes.bool,
};

Root.defaultProps = {
  store: {},
  dev: false,
};

export default Root;
