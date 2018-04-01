import React, { Component } from 'react';
import Button from '../Button/';

class Search extends Component {
  componentDidMount() {
    if(this.textInput) {
      this.textInput.focus();
    }
  }

  render () {
    const {children} = this.props;

    return (
      <form>
        {children}
        <input type="text" ref={(input) => {this.textInput = input;}}/>
        <Button>RESET</Button>
      </form>
    );
  }
}

export default Search;
