import * as actionTypes from '../constants/actionTypes';
import conf from '../config';

const fetchResults = (searchTerm = conf.DEFAULT_QUERY, page = 0) => ({
  type: actionTypes.RESULT_FETCH,
  searchTerm,
  page,
});

export default fetchResults;
