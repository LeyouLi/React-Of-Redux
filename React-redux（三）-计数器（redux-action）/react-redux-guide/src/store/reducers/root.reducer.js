import { combineReducers } from 'redux';
import CounterReducer from './counter.reducer.js';
import AlertModalReducer from './alertModal.reducer';

export default combineReducers({
  counter: CounterReducer,
  alertModal: AlertModalReducer,
});