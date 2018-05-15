import algolia from '../_config/algolia';
import * as actionTypes from '../_constants/actionTypes';

export const receiveResults = results => ({
  type: actionTypes.RESULT_RECEIVE,
  results,
});

export const fetchData = ({ query = algolia.DEFAULT_QUERY, page = 0 }) => (dispatch, getState) => {
  const path = getState().router.location.pathname;

  let baseUrl;
  switch (path) {
    case '/':
      baseUrl = `${algolia.PATH_BASE}search?tags=front_page`;
      break;
    case '/home':
      baseUrl = `${algolia.PATH_BASE}search?tags=front_page`;
      break;
    case '/latest':
      baseUrl = `${algolia.PATH_BASE}search_by_date?tags=story`;
      break;
    case '/ask':
      baseUrl = `${algolia.PATH_BASE}search?tags=ask_hn`;
      break;
    case '/show':
      baseUrl = `${algolia.PATH_BASE}search?tags=show_hn`;
      break;
    default:
      baseUrl = `${algolia.PATH_BASE}search?tags=search`;
      break;
  }

  const url = `${baseUrl}&query=${query}&page=${page}`;
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
