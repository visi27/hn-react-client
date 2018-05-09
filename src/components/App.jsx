import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadMenu from '../_actions/menu';
import { fetchData } from '../_actions/result';
import './App.css';
import Nav from './Nav/index';
import Table from './Table/index';

export class App extends Component {
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

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(loadMenu());
    dispatch(fetchData({}));
  },
  onLocationChange() {
    dispatch(fetchData({}));
  },
});

export default connect(null, mapDispatchToProps)(App);
