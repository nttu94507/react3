import { all } from 'redux-saga/effects';
import contentSaga from '../sagas/content'


function* rootSaga() {
    yield all([
      contentSaga(),
    ]);
}

export default rootSaga