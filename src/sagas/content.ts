import { call,put,takeEvery } from "redux-saga/effects";
import { FETCH_DATA_BEGIN ,fetchDataSuccess,FETCH_INIT_DATA_BEGIN,fetchInitDataSuccess,ADD_PROBE,postProbeDataSuccess,POST_PROBE_DATA_BEGIN,GET_PROBE_DATA_INFO_BEGIN,getProbeDataInfoSuccess} from "../action/probelist";
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
export function* fetchDataAfterPostProbe() {
    const probe = yield call(getProbe);
    console.log(probe);
    yield put (postProbeDataSuccess(probe?probe:{probeId:'none',owner:'none'}));
}

export function* fetchProbeDataInfo(param:any) {
    console.log(param.id);
    const probe = yield call(getProbe,param.id);
    console.log(probe);
    yield put (getProbeDataInfoSuccess(probe?probe:{probeId:'none',owner:'none'}));
}

function* mySaga() {
    yield takeEvery(FETCH_DATA_BEGIN,fetchData)
    yield takeEvery(FETCH_INIT_DATA_BEGIN,fetchInitData)
    yield takeEvery(POST_PROBE_DATA_BEGIN,fetchDataAfterPostProbe)
    yield takeEvery(GET_PROBE_DATA_INFO_BEGIN,fetchProbeDataInfo)
}

export default mySaga;