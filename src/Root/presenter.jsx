import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import ConnectedApp from '../App';
import Login from '../Login';
import DevTools from '../_containers/DevTools';
import history from '../_helpers/history';
import PrivateRoute from '../_hoc/PrivateRoute';

const Root = ({ store, dev }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {dev ? <Route path="/" component={DevTools} /> : ''}
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={ConnectedApp} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}),
  dev: PropTypes.bool,
};

Root.defaultProps = {
  store: {},
  dev: true,
};

export default Root;
