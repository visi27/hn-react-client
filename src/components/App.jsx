import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from './Search/index';
import Table from './Table/index';
import './App.css';
import Button from './Button/presenter';
import withLoading from '../hoc/withLoading';
import fetchResults from '../actions/result';

const ButtonWithLoading = withLoading(Button);

export class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div className="page">
        <span>HELLO</span>
        <div className="interactions">
          <Search> Search </Search>
        </div>

        <Table />

        <ButtonWithLoading>More Articles</ButtonWithLoading>
      </div>
    );
  }
}

App.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(fetchResults()),
  };
}

export default connect(null, mapDispatchToProps)(App);
