import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/index';
import ResultsView from '../ResultsView/index';
import './style.css';

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  componentDidUpdate() {
    this.props.onLocationChange();
  }

  render() {
    return (
      <div>
        <Route path="/" component={Nav} />
        <main role="main" className="mt-3">
          <ResultsView />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default App;
