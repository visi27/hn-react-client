import React from 'react';
import Button from '../Button/';
import PropTypes from 'prop-types';

const Search = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  onReset,
  children
}) => (
  <form onSubmit={onSearchSubmit}>
    {children}
    <input type="text" value={searchTerm} onChange={onSearchChange} />
    <Button onClick={onReset}>RESET</Button>
  </form>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Search;
