import * as actionTypes from '../constants/actionTypes';
import { fetchData } from './result';

export const setSearch = searchTerm => ({
  type: actionTypes.SEARCH_SET,
  searchTerm,
});

export const submitSearch = () => (dispatch, getState) => {
  dispatch(fetchData({ query: getState().search.searchTerm, page: 1 }));
};

export const resetSearch = () => ({
  type: actionTypes.SEARCH_RESET,
});
