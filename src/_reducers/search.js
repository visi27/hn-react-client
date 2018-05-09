import algolia from '../_config/algolia';
import * as actionTypes from '../_constants/actionTypes';

const initialState = {
  searchTerm: algolia.DEFAULT_QUERY,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_SET:
      return {
        searchTerm: action.searchTerm,
      };
    case actionTypes.SEARCH_RESET:
      return {
        searchTerm: algolia.DEFAULT_QUERY,
      };
    default:
      return state;
  }
}
