import { combineReducers } from "redux";
import result from "./result";
import cache from "./cache";
import error from "./error";
import app from "./app";

export default combineReducers({
  result,
  cache,
  error,
  app
});