import * as actionTypes from "../constants/actionTypes";

const initialState = {
  hits: [],
  page: 0,
  nbPages: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESULT_SET:
      return setResult(state, action);
    default:
      return state;
  }
}

function setResult(state, action) {
  return state;
}