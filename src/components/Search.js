import React from "react";
import Button from "./Button";

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

export default Search;
