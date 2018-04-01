/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
//import { Router, Route, IndexRoute, browserHistory } from "react-router";
//import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import App from "./components/App";
import "./index.css";
import DevTools from "./containers/DevTools";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App/>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
