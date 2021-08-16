import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todoReducer from '../reducer/todolist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store