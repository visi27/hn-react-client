import React, { Component } from "react";
import Button from "../Button/";
import { connect } from "react-redux";
import { setSearch } from "../../actions/search";

class Search extends Component {
  componentDidMount() {
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  render() {
    const { children, searchTerm, onSearchChange } = this.props;

    return (
      <form>
        {children}
        <input type="text" onChange={onSearchChange} defaultValue={searchTerm}
               ref={(input) => {
                 this.textInput = input;
               }}/>
        <Button>RESET</Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  const { searchTerm } = state.app;

  return { searchTerm };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: (event) => dispatch(setSearch(event.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
