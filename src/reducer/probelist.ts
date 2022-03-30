import React from "react";
import * as actions from '../action/probelist'
import ProbeList from "../component/ProbeList";



const allprobes = {
    probelist:['234123325123', '2341werw23325123']
}

const initProbes = {
    probelist:[
    {probeId: '101094507',owner:'裕隆'},
    {probeId: '101094508',owner:'裕隆'},
    {probeId: '101094508',owner:'裕隆'}
    ]
}
    
const probeReducer = (state = initProbes, action:any) => {
    switch (action.type) {
        case actions.ADD_PROBE:
            return {
                ...state,
            probelist:[
                ...state.probelist,
            action.payload.probe,
        ],
        }
        case actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
            probelist:[
                ...state.probelist,
            ...action.payload.probe,
            ]
      };
        default:
            return state;
    }
    
  };


export default probeReducer