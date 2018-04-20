import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from '../components/Nav/';

import ConnectedApp from './App';
import DevTools from '../containers/DevTools';

const Root = ({ store, dev }) => {
  const appComponent = () => (
    <div>
      <ConnectedApp />
      {dev ? <DevTools /> : ''}
    </div>
  );
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={appComponent} />
            <Route exact path="/menu" component={Nav} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape({}),
  dev: PropTypes.bool,
};

Root.defaultProps = {
  store: {},
  dev: true,
};

export default Root;
