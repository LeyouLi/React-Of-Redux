import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from '../action/counter.action';
import { INCREMENT_ASYNC } from '../const/counter.const';

function* increment_async_fn() {
  yield delay(2000);
  yield put(increment(100));
}

export default function* counterSaga() {
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn);
}