import React from 'react';
import Button from '../Button';

const Search = ({children, searchTerm, onSearchChange}) => {
  let textInput = null;
  return (
    <form>
      {children}
      <input type="text" onChange={onSearchChange} defaultValue={searchTerm}
             ref={(input) => {
               textInput = input;
             }}/>
      <Button>RESET</Button>
    </form>
  );
};

export default Search;