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
    default:
      return state;
  }
}
