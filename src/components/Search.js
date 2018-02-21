import React from 'react'
import Button from './Button'

const Search = ({ searchTerm, onSearchChange, onReset, children }) =>
    <form>
      {children}
      <input type="text" value={searchTerm} onChange={onSearchChange}/>
      <Button onClick={onReset} >RESET</Button>
    </form>

export default Search