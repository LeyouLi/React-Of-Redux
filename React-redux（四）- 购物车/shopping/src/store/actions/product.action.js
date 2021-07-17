import { createAction } from 'redux-actions';

// 请求 products list
export const loadProduct = createAction('load product');
// 保存 products list
export const saveProduct = createAction('save product');