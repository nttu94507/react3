import { all } from 'redux-saga/effects';
import probelistSaga from '../sagas/content';
import customerSaga from '../sagas/customer'

function* rootSaga() {
  yield all([
    probelistSaga(),
    customerSaga(),
  ]);
}

export default rootSaga;