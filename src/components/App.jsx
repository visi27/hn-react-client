import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Table from './Table/index';
import './App.css';
import { fetchData } from '../actions/result';
import loadMenu from '../actions/menu';
import Nav from './Nav/index';
import Auth from '../services/Auth/Auth';
import Button from './Button/presenter';

export class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.props.onLoad();
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    return (
      <div>
        <Route path="/" component={Nav} />
        {!this.props.auth.isAuthenticated() && (
          <Button bsStyle="primary" className="btn-margin" onClick={this.login}>
            Log In
          </Button>
        )}
        {this.props.auth.isAuthenticated() && (
          <Button bsStyle="primary" className="btn-margin" onClick={this.logout}>
            Log Out
          </Button>
        )}
        <main role="main" className="mt-3">
          <Table />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  onLoad: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(Auth).isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(loadMenu());
    dispatch(fetchData({}));
  },
});

export default connect(null, mapDispatchToProps)(App);
