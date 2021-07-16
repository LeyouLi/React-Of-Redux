import { handleActions as createReducer } from 'redux-actions';
import { increment_action, decrement_action } from '../action/counter.action';

const initialState = {
  count: 0,
}

const handleIncrement = (state, action) => ({ count: state.count + action.payload });
const handleDecrement = (state, action) => ({ count: state.count - action.payload });

export default createReducer({
  [increment_action]: handleIncrement,
  [decrement_action]: handleDecrement,
}, initialState);

