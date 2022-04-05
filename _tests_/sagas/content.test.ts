import {put,call} from 'redux-saga/effects';
import { fetchDataSuccess } from '../../src/action/probelist';
import { fetchData } from '../../src/sagas/content';
import { getProbe } from '../../src/api/probe';

describe('todolist sagas',()=>{
    test('FetchData_Execute_ApiFlow',()=>{
        const generator = fetchData();

        const callGetDataApi = generator.next().value;
        expect(callGetDataApi).toEqual(call(getProbe));

        const successGetData = generator.next('mockResponse').value;
        expect(successGetData).toEqual(put(fetchDataSuccess('mockResponse')))

        const victoryGetData = generator.next().done;
        expect (victoryGetData).toEqual(true);
    })
})