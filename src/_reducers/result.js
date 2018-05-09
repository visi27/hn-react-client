import algolia from '../_config/algolia';
import * as actionTypes from '../_constants/actionTypes';

const initialState = {
  hits: [],
  page: 0,
  nbPages: 0,
  query: algolia.DEFAULT_QUERY,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESULT_RECEIVE:
      return {
        ...state,
        ...action.results,
      };
    default:
      return state;
  }
}
