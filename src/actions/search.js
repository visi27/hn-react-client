import * as actionTypes from '../constants/actionTypes';

export const setSearch = searchTerm => ({
  type: actionTypes.SEARCH_SET,
  searchTerm,
});

export const submitSearch = () => ({
  type: actionTypes.SEARCH_SUBMIT,
});

export const resetSearch = () => ({
  type: actionTypes.SEARCH_RESET,
});
