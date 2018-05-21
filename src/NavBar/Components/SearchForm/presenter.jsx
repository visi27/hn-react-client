import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class SearchForm extends Component {
  componentDidMount() {
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  render() {
    const { searchTerm, onSearchChange, onSearchSubmit } = this.props;

    return (
      <form
        className="form-inline my-2 w-100"
        onSubmit={(e) => {
          e.preventDefault();
          onSearchSubmit();
          this.textInput.blur();
        }}
      >
        <input
          className="form-control mr-sm-4 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          defaultValue={searchTerm}
          onChange={onSearchChange}
          ref={(input) => {
            this.textInput = input;
          }}
        />
        <button className="btn btn-outline-secondary my-2 my-sm-0 mw-25" type="submit">
          Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  searchTerm: '',
};

export default SearchForm;
