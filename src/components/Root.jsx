import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import ConnectedApp from './App';
import DevTools from '../containers/DevTools';

const Root = ({ store, dev }) => {
  const history = createHistory();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          {dev ? <Route path="/" component={DevTools} /> : ''}
          <Switch>
            <Route path="/" component={ConnectedApp} />
          </Switch>
        </div>
      </ConnectedRouter>
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
