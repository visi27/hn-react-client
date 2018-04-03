import React from "react";
import Button from "../Button";

const Search = ({ children, searchTerm, onSearchChange }) => (
  <form>
    {children}
    <input type="text" onChange={onSearchChange} defaultValue={searchTerm}
           ref={(input) => {
             this.textInput = input;
           }}/>
    <Button>RESET</Button>
  </form>
);

export default Search;