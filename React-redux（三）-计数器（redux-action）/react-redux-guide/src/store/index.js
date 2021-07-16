import { createStore, applyMiddleware } from 'redux';
import counterReducer from "./reducers/counter.reducer";

export const store = createStore(counterReducer, applyMiddleware());