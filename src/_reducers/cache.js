import * as actionTypes from '../_constants/actionTypes';

const initialState = {};

function setCache(state) {
  return state;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CACHE_SET:
      return setCache(state, action);
    default:
      return state;
  }
}
