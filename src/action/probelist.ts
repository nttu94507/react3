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

export const SEARCH_PROBE_DATA_BEGIN = 'SEARCH_PROBE_DATA_BEGIN';

export const searchProbeDataBegin = (keyword) =>({
  type: SEARCH_PROBE_DATA_BEGIN,
  payload: {
    keyword,
  }
})

export const SEARCH_PROBE_DATA_BEGIN_SUCCESS= 'SEARCH_PROBE_DATA_BEGIN_SUCCESS';

export const searchProbeDataBeginSuccess = probe =>({
  type: SEARCH_PROBE_DATA_BEGIN_SUCCESS,
  payload: {
    probe,
  }
})

export const FETCH_INIT_DATA_BEGIN = 'FETCG_INIT_DATA_BRGIN';
export const fetchInitDataBegin = () => ({
  type: FETCH_INIT_DATA_BEGIN, 
})



export const FETCG_INIT_DATA_SUCCESS = 'FETCG_INIT_DATA_SUCCESS';

 export const fetchInitDataSuccess = probe => ({
  type: FETCG_INIT_DATA_SUCCESS,
  payload: {
    probe,
  }
});



export const GET_PROBE_INFO_BEGIN = 'GET_PROBE_INFO_BEGIN';

 export const getProbeInfoBegin = (keyword) => ({
  type: GET_PROBE_INFO_BEGIN,
  payload: {
    keyword,
  }
});

export const GET_PROBE_INFO_SUCCESS = 'GET_PROBE_INFO_SUCCESS';

 export const getProbeInfoSuccess = (probe) => ({
  type: GET_PROBE_INFO_SUCCESS,
  payload: {
    probe,
  }
});

// export const POST_PROBE_DATA_BEGIN = 'POST_PROBE_DATA_BEGIN';

// export const postProbeDataBegin = () => ({
//   type: POST_PROBE_DATA_BEGIN, 
// })

// export const GET_PROBE_DATA_INFO_BEGIN = 'GET_PROBE_DATA_INFO_BEGIN';

// export const getProbeDataInfoBegin = (id:any) => ({
//   type: GET_PROBE_DATA_INFO_BEGIN,
//   id
  
// })

// export const GET_PROBE_DATA_INFO_SUCCESS = 'GET_PROBE_DATA_INFO_SUCCESS';

//  export const getProbeDataInfoSuccess = (probe:any) => ({
//   type: GET_PROBE_DATA_INFO_SUCCESS,
//   payload: {
//     probe,
//   }
// });

