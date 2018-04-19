import React, { Component } from 'react';
import Button from '../Button/';
import PropTypes from 'prop-types';

class Search extends Component {
  componentDidMount() {
    if(this.textInput) {
      this.textInput.focus();
    }
  }

  render () {
    const {searchTerm, onSearchChange, onSearchSubmit, onReset, children} = this.props;

    return (
      <form onSubmit={onSearchSubmit}>
        {children}
        <input type="text" value={searchTerm} onChange={onSearchChange}
               ref={(input) => {this.textInput = input;}}/>
        <Button onClick={onReset}>RESET</Button>
      </form>
    );
  }
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Search;
