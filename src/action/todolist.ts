import { call,put,takeEvery } from 'redux-saga/effects';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: {
      todo,
    },
  });

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';

export const fetchDataBegin = data => ({
  type: FETCH_DATA_BEGIN,
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

 export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  },
});

