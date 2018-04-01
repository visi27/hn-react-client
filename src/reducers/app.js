import * as actionTypes from "../constants/actionTypes";
import { AppConfig as conf } from "../config";

const initialState = {
  searchTerm: conf.DEFAULT_QUERY,
  currentPage: 0,
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_SET:
      return state;
    case actionTypes.CURRENT_PAGE_SET:
      return state;
    case actionTypes.LOADING_TOGGLE:
      return state;
    default:
      return state;
  }
}

