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
    const {
      children, searchTerm, onSearchChange, onSearchSubmit,
    } = this.props;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearchSubmit();
        }}
      >
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
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

Search.defaultProps = {
  searchTerm: '',
  children: 'Search',
};

export default Search;
