import * as actionTypes from'../constants/actionTypes';

export function setSearch(searchTerm) {
  return {
    type: actionTypes.SEARCH_SET,
    searchTerm
  }
}

export function submitSearch() {
  return {
    type: actionTypes.SEARCH_SUBMIT
  }
}

export function resetSearch() {
  return {
    type: actionTypes.SEARCH_RESET
  }
}