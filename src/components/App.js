import React, { Component } from "react";
import Search from "./Search/index";
import Table from "./Table/index";
import "./App.css";
import Button from "./Button/";
import withLoading from "../hoc/withLoading";

import { AppConfig as conf } from "../config";

const ButtonWithLoading = withLoading(Button);

class App extends Component {
  render() {
    return (
      <div className="page">
        <span>HELLO</span>
        <div className="interactions">
          <Search> Search </Search>
        </div>

        <Table/>

        <ButtonWithLoading>
          More Articles
        </ButtonWithLoading>
      </div>
    );
  }
}

export default App;
