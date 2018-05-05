import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import DevTools from '../containers/DevTools';
import Auth from '../services/Auth/Auth';
import ConnectedApp from './App';
import Callback from './Auth/Callback';

const history = createHistory();
const auth = new Auth(history);

const handleAuthentication = (nextState) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const Root = ({ store, dev }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {dev ? <Route path="/" component={DevTools} /> : ''}
        <Switch>
          <Route
            exact
            path="/callback"
            render={(props) => {
              handleAuthentication(props, auth);
              return <Callback {...props} />;
            }}
          />
          <Route
            exact
            path="/logout"
            render={(props) => {
              auth.logout();
              return <Callback {...props} />;
            }}
          />
          <Route path="/" render={props => <ConnectedApp auth={auth} {...props} />} />
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
