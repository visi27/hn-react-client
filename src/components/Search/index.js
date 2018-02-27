import React from 'react';
import Index from '../Button/';

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
    <Index onClick={onReset}>RESET</Index>
  </form>
);

export default Search;
