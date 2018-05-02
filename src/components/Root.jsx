import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import ConnectedApp from './App';
import DevTools from '../containers/DevTools';

import Auth from '../services/Auth/Auth';
import Callback from './Callback';

const auth = new Auth();

const handleAuthentication = (nextState) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const Root = ({ store, dev }) => (
  <Provider store={store}>
    <ConnectedRouter history={createHistory()}>
      <div>
        {dev ? <Route path="/" component={DevTools} /> : ''}
        <Switch>
          <Route exact path="/" render={props => <ConnectedApp auth={auth} {...props} />} />
          <Route
            path="/callback"
            render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
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
