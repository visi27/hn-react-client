import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import loadMenu from '../actions/menu';
import { fetchData } from '../actions/result';
import Auth from '../services/Auth/Auth';
import './App.css';
import Button from './Button/presenter';
import Nav from './Nav/index';
import Table from './Table/index';

export class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  componentDidUpdate() {
    this.props.onLocationChange();
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.history.push('/logout');
  }

  render() {
    return (
      <div>
        <Route path="/" component={Nav} />
        {!this.props.auth.isAuthenticated() && (
          <Button bsStyle="primary" className="btn-margin invisible" onClick={this.login}>
            Log In
          </Button>
        )}
        {this.props.auth.isAuthenticated() && (
          <Button bsStyle="primary" className="btn-margin invisible" onClick={this.logout}>
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
  onLocationChange: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(Auth).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
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
