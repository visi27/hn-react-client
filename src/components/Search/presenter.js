import React, { Component } from 'react';
import Button from '../Button';

class Search extends Component {
  componentDidMount () {
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  render () {
    const {children, searchTerm, onSearchChange} = this.props;

    return (
      <form onSubmit={e => e.preventDefault()}>
        {children}
        <input
          type="text"
          defaultValue={searchTerm}
          onChange={onSearchChange}
          ref={(input) => {this.textInput = input;}}
        />
        <Button>RESET</Button>
      </form>
    );
  }
}

export default Search;