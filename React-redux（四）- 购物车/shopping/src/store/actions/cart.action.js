import { createAction } from 'redux-actions';

// 向服务器端发送请求，将商品添加至购物车中
export const addProductToCart = createAction('addProductToCart');
// 将需要添加的商品添加到本地购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart');

// 向服务端发送请求，获取购物车数据
export const localCart = createAction('localCart');
// 将服务端返回的购物车数据存储在本地购物车中
export const saveCart = createAction('saveCart');

// 向服务端发送请求，删除商品
export const deleteProductFromCart = createAction('deleteProductFromCart');
// 删除本地购物车中的商品
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart');

// 向服务端发送请求，更改购物车中商品数量
export const changeServiceProductNumber = createAction('changeServiceProductNumber');
// 更新本地购物车中商品数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber');
