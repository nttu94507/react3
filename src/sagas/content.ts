import { call,put,takeEvery } from "redux-saga/effects";
import { FETCH_DATA_BEGIN ,fetchDataSuccess,FETCH_INIT_DATA_BEGIN,fetchInitDataSuccess} from "../action/probelist";
import {getContent} from '../api/content';
import { getProbe } from "../api/probe";

export function* fetchData() {
    const data = yield call(getProbe);
    yield put (fetchDataSuccess(data?data:{probeId:'none',owner:'none'}));
} 
export function* fetchInitData() {
    const data = yield call(getProbe);
    yield put (fetchInitDataSuccess(data?data:{probeId:'none',owner:'none'}));
} 

function* mySaga() {
    yield takeEvery(FETCH_DATA_BEGIN,fetchData)
    yield takeEvery(FETCH_INIT_DATA_BEGIN,fetchInitData)
}

export default mySaga;