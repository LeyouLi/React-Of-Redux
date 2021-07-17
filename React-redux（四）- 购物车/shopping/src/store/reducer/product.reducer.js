import { handleActions as createReducer } from 'redux-actions';
import { saveProduct } from '../actions/product.action';

const initialState = [];

const handleSavaProduct = (state, action) => action.payload;

export default createReducer({
  [saveProduct]: handleSavaProduct,
}, initialState);