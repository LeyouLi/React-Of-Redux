import { createStore } from 'redux';
import rootReducer from './reducer/root.reducer';

export const store = createStore(rootReducer);