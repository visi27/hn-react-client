import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Nav from '../Nav/index';
import Table from '../Table/index';
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
        <Nav />
        <main role="main" className="mt-3">
          <Table />
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
