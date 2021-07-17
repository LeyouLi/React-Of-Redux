import { takeEvery, put } from 'redux-saga/effects';
import { loadProduct, saveProduct } from '../actions/product.action';
import axios from 'axios';

// 请求 products list
function* queryProducts() {
  const { data } = yield axios.get('http://localhost:3005/goods	');
  yield put(saveProduct(data));
}

export default function* productSaga() {
  yield takeEvery(loadProduct, queryProducts);
}