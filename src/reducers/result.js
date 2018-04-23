import * as actionTypes from '../constants/actionTypes';
import conf from '../config';

const initialState = {
  hits: [],
  page: 0,
  nbPages: 0,
  query: conf.DEFAULT_QUERY,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESULT_RECEIVE:
      return {
        ...state,
        ...action.results,
      };
    case actionTypes.SEARCH_SET:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case actionTypes.SEARCH_RESET:
      return {
        ...state,
        searchTerm: conf.DEFAULT_QUERY,
      };
    default:
      return state;
  }
}
