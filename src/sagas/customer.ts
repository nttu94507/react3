import { apply, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {ADD_CUSTOMER,GET_CUSTOMER_BEGIN,getCustomerSuccess} from '../action/customerlist';
// import { FETCH_DATA_BEGIN, fetchDataSuccess, FETCH_INIT_DATA_BEGIN, fetchInitDataSuccess, ADD_PROBE, SEARCH_PROBE_DATA_BEGIN, searchProbeDataBeginSuccess,GET_PROBE_INFO_BEGIN,getProbeInfoSuccess } from "../action/probelist";
// import { getContent } from '../api/content';
import {  getCustomer } from "../api/customer";
// import { useSelector } from "react-redux";
// import { local } from "../url/url";

export function* addCustomerData() {
    const probe = yield call(getProbe);
    yield put(fetchDataSuccess(probe ? probe : { probeId: 'none', owner: 'none' }));
}

export function* getCustomerData() {
    const customers = yield call(getCustomer);
    // console.log(customers)
    yield put(getCustomerSuccess(customers ? customers :{ probeId: 'none', owner: 'none' }));
}

function* mySaga() {
    yield takeLatest(ADD_CUSTOMER, addCustomerData)
    yield takeLatest(GET_CUSTOMER_BEGIN, getCustomerData)
    // yield takeLatest(SEARCH_PROBE_DATA_BEGIN, searchPrboeData)
    // yield takeLatest(GET_PROBE_INFO_BEGIN,fetchProbeData)
}

export default mySaga;