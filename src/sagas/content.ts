import { apply, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { FETCH_DATA_BEGIN, fetchDataSuccess, FETCH_INIT_DATA_BEGIN, fetchInitDataSuccess, ADD_PROBE, SEARCH_PROBE_DATA_BEGIN, searchProbeDataBeginSuccess,GET_PROBE_INFO_BEGIN,getProbeInfoSuccess } from "../action/probelist";
import { getContent } from '../api/content';
import { getProbe, getProbeInfo } from "../api/probe";
import { useSelector } from "react-redux";
import { local } from "../url/url";

export function* fetchData() {
    const probe = yield call(getProbe);
    yield put(fetchDataSuccess(probe ? probe : { probeId: 'none', owner: 'none' }));
}
export function* fetchInitData() {
    const probe = yield call(getProbe);

    yield put(fetchInitDataSuccess(probe ? probe : { probeId: 'none', owner: 'none' }));
}

export function* searchPrboeData(key) {

    if (key.payload.keyword != "") {

        const ApiResult = yield call(getProbe)

        const items = ApiResult.filter(val => {
            if ((val.statuscode + '').includes(key.payload.keyword)) {
                return val
            } else if (val.note.includes(key.payload.keyword)) {
                return val
            } else if ((val.type).includes(key.payload.keyword)) {
                return val
            } else if (val.harddiskdrive.includes(key.payload.keyword)) {
                return val
            } else if ((val.probeId + '').includes(key.payload.keyword)) {
                return val
            } else if (val.createdate.includes(key.payload.keyword)) {
                return val
            } else if (val.status.includes(key.payload.keyword)) {
                return val
            }
        })
        yield put(searchProbeDataBeginSuccess(items));
    } else {
        const result = yield call(getProbe)
        yield put(fetchInitDataSuccess(result));
    }
}

export function* fetchProbeData(key) {
    const keyword = key.payload.keyword;
    const probe = yield call(getProbeInfo,keyword);

    yield put(getProbeInfoSuccess(probe ? probe : { probeId: 'none', owner: 'none' }));
}


function* mySaga() {
    yield takeLatest(FETCH_DATA_BEGIN, fetchData)
    yield takeLatest(FETCH_INIT_DATA_BEGIN, fetchInitData)
    yield takeLatest(SEARCH_PROBE_DATA_BEGIN, searchPrboeData)
    yield takeLatest(GET_PROBE_INFO_BEGIN,fetchProbeData)
}

export default mySaga;