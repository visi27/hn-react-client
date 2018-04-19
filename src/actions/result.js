import * as actionTypes from '../constants/actionTypes';
import conf from '../config';

export default function fetchResults(searchTerm = conf.DEFAULT_QUERY, page = 0) {
  return {
    type: actionTypes.RESULT_FETCH,
    searchTerm,
    page,
  };
}
