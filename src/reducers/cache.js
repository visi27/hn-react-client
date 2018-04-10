import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CACHE_SET:
      return setCache(state, action);
    default:
      return state;
  }
}

function setCache(state, action) {
  return state;
}
