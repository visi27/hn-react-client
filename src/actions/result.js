import * as actionTypes from'../constants/actionTypes';
import { AppConfig as conf } from '../config'

export function fetchResults(searchTerm = conf.DEFAULT_QUERY, page = 0) {
  return {
    type: actionTypes.RESULT_FETCH,
    searchTerm,
    page
  }
}