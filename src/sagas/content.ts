import { call,put,takeEvery } from "redux-saga/effects";
import { FETCH_DATA_BEGIN ,fetchDataSuccess} from "../action/probelist";
import {getContent} from '../api/content';
import {getProbe}  from "../api/probe";

export function* fetchData() {
    const data = yield call(getProbe);
    yield put (fetchDataSuccess(data?data:{probeId:'none',owner:'none'}));
} 

function* mySaga() {
    yield takeEvery(FETCH_DATA_BEGIN,fetchData)
}

export default mySaga;