import * as actionTypes from "../constants/actionTypes";
import { AppConfig as conf } from "../config";


const initialState = {
  searchTerm:  conf.DEFAULT_QUERY
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_SET:
      return {
        searchTerm: action.searchTerm
      };
    default:
      return state;
  }
}