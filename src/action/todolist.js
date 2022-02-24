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

const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  },
});

function* fetchData() {
    // 使用 data 接收請求的資料
    const data = yield call(
      () => fetch('https://httpbin.org/get')
        .then(response => response.json()),
    );
    yield put(fetchDataSuccess(data));
  }


function* mySaga() {
    yield takeEvery(FETCH_DATA_BEGIN, fetchData);
  }

  
export default mySaga;
