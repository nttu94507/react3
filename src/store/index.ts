import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todoReducer from '../reducer/todolist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
// import Customer from '../sagas/customer';
// import probeReducer from '../reducer/probelist';
// import customerReducer from '../reducer/customerlist';
import reducer from '../reducer/index';
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store