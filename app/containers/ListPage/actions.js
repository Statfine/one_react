/**
 * Created by sj on 2017/6/30.
 */
import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from './constants';

export function fetchList() {
  return {
    type: FETCH_LIST,
  };
}

export function fetchListSuccess(params) {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: params,
  };
}

export function fetchListFailure(params) {
  return {
    type: FETCH_LIST_FAILURE,
    payload: params,
  };
}
