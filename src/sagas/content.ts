import { call,put,takeEvery } from "redux-saga/effects";
import { FETCH_DATA_BEGIN ,fetchDataSuccess,FETCH_INIT_DATA_BEGIN,fetchInitDataSuccess,ADD_PROBE,postProbeDataSuccess} from "../action/probelist";
import {getContent} from '../api/content';
import { getProbe } from "../api/probe";

export function* fetchData() {
    const probe = yield call(getProbe);
    console.log(probe);
    yield put (fetchDataSuccess(probe?probe:{probeId:'none',owner:'none'}));
} 
export function* fetchInitData() {
    const probe = yield call(getProbe);
    console.log(probe);
    yield put (fetchInitDataSuccess(probe?probe:{probeId:'none',owner:'none'}));
}

export function* postProbeData() {
    const probe = yield call(postProbeData);
    yield put (postProbeDataSuccess(probe?probe:{probeId:'none',owner:'none'}));
} 

function* mySaga() {
    yield takeEvery(FETCH_DATA_BEGIN,fetchData)
    yield takeEvery(FETCH_INIT_DATA_BEGIN,fetchInitData)
    yield takeEvery(ADD_PROBE,postProbeData)
}

export default mySaga;