import * as actionTypes from '../constants/actionTypes';

const initialState = {
  currentPage: 0,
  isLoading: false,
};

export default function (state = initialState, action) {
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
