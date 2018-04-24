import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table/index';
import './App.css';
import { fetchData } from '../actions/result';
import loadMenu from '../actions/menu';
import Nav from './Nav/index';

export class App extends Component {
  componentDidMount() {
    this.props.onLoad();
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
};

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(loadMenu());
    dispatch(fetchData());
  },
});

export default connect(null, mapDispatchToProps)(App);
