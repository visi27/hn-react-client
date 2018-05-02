import * as actionTypes from '../constants/actionTypes';
import conf from '../config';

export const receiveResults = results => ({
  type: actionTypes.RESULT_RECEIVE,
  results,
});

export function fetchData({ query = conf.DEFAULT_QUERY, page = 1 }) {
  return (dispatch) => {
    const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story&page=${page}`;
    // dispatch(itemsIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(receiveResults(items)))
      .catch(() => console.log('ERROR'));
  };
}

export const nextPage = () => (dispatch, getState) => {
  const curPage = Number.parseInt(getState().result.page, 10);
  const totPages = Number.parseInt(getState().result.nbPages, 10);

  if (curPage < totPages) {
    dispatch(fetchData({ page: curPage + 1 }));
  }
};

export const prevPage = () => (dispatch, getState) => {
  if (Number.parseInt(getState().result.page, 10) > 1) {
    dispatch(fetchData({ page: Number.parseInt(getState().result.page, 10) - 1 }));
  }
};

export const goToPage = page => (dispatch, getState) => {
  if (
    Number.parseInt(page, 10) < Number.parseInt(getState().result.nbPages, 10) &&
    Number.parseInt(page, 10) > 0
  ) {
    dispatch(fetchData({ page }));
  }
};
