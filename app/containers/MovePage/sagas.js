import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { FETCH_LIST } from './constants';
import { fetchList } from './api';
import { fetchListSuccess, fetchListFailure } from './actions';

export function* fetchListWatcher() {
  yield* takeLatest(FETCH_LIST, function* () {
    try {
      const result = yield call(fetchList);
      yield put(fetchListSuccess(result));
    } catch (error) {
      const err = error.msg || error;
      yield put(fetchListFailure(err));
    }
  });
}

export default [
  fetchListWatcher,
];
