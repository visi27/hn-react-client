import * as actionTypes from '../constants/actionTypes';
import conf from '../config';

export const receiveResults = results => ({
  type: actionTypes.RESULT_RECEIVE,
  results,
});

export function fetchData(query = conf.DEFAULT_QUERY, page = 1) {
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
