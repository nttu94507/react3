import { call,put,takeEvery } from 'redux-saga/effects';

export const ADD_PROBE = 'ADD_PROBE';

export const addProbe = probe => ({
    type: ADD_PROBE,
    payload: {
        probe,
    },
  });

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

 export const fetchDataSuccess = probe => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    probe,
  }
});

