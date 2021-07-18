import { handleActions as createReducer } from 'redux-actions';
import { addProductToLocalCart, changeLocalProductNumber, deleteProductFromLocalCart, saveCart } from '../actions/cart.action';

const initialState = [];

const handleAddProductToLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const productId = action.payload.id;
  const hasProduct = newState.find(item => item.id === productId);
  if (hasProduct) {
    hasProduct.count = hasProduct.count + 1;
  } else {
    newState.push(action.payload);
  }
  return newState;
}

const handleSaveCart = (state, action) => action.payload;

const handleDeleteProductFromLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.splice(action.payload, 1);
  return newState;
}

const handleChangeLocalProductNumber = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const productId = action.payload.id;
  const hasProduct = newState.find(item => item.id === productId);
  hasProduct.count = action.payload.count;
  return newState;
}

export default createReducer({
  [addProductToLocalCart]: handleAddProductToLocalCart,
  [saveCart]: handleSaveCart,
  [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
  [changeLocalProductNumber]: handleChangeLocalProductNumber,
}, initialState);