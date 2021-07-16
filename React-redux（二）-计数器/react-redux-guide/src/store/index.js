import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import counterSaga from './sagas/counter.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(counterSaga);