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
        className="form-inline my-2 my-lg-0"
        onSubmit={(e) => {
          e.preventDefault();
          onSearchSubmit();
        }}
      >
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          defaultValue={searchTerm}
          onChange={onSearchChange}
          ref={(input) => {
            this.textInput = input;
          }}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
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
