import { takeEvery, put, delay } from 'redux-saga/effects';
import { show } from '../action/alertModal.action';
import { SHOWMODAL_ASYNC } from '../const/alertModal.const';

function* show_async_fn() {
  yield delay(2000);
  yield put(show());
}

export default function* alertModalSaga() {
  yield takeEvery(SHOWMODAL_ASYNC, show_async_fn);
}
