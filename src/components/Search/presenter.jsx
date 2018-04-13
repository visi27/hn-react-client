import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button/resetButton';

class Search extends Component {
  componentDidMount() {
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  render() {
    const { children, searchTerm, onSearchChange } = this.props;

    return (
      <form onSubmit={e => e.preventDefault()}>
        {children}
        <input
          type="text"
          defaultValue={searchTerm}
          onChange={onSearchChange}
          ref={(input) => {
            this.textInput = input;
          }}
        />
        <Button>RESET</Button>
      </form>
    );
  }
}

Search.propTypes = {
  children: PropTypes.element.isRequired,
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
};

Search.defaultProps = {
  searchTerm: '',
};

export default Search;
