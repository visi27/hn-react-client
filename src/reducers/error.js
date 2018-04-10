import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ERROR_SET:
      return action.error;
    case actionTypes.ERROR_CLEAR:
      return {};
    default:
      return state;
  }
}
