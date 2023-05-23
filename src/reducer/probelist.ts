import React from "react";
import * as actions from '../action/probelist'
import {Iprobe} from '../interface/Iprobes'

const initProbes:Iprobe = {
    probelist: [
    ],
    probe:[
        
    ]
}


const probeReducer = (state = initProbes, action: any) => {
    switch (action.type) {
        case actions.ADD_PROBE:
            return {
                ...state,
                probelist: [
                    ...state.probelist,
                    action.payload.probe,
                ],
            }
        case actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                probelist: [
                    ...state.probelist,
                    ...action.payload.probe,
                ]
            }
        case actions.FETCG_INIT_DATA_SUCCESS:
            return {
                ...state,
                probelist: [
                      ...action.payload.probe,
                ]
            };
        case actions.SEARCH_PROBE_DATA_BEGIN_SUCCESS:
            return {
                ...state,
                probelist: [
                    ...action.payload.probe,
                ]
            };
        // case actions.GET_PROBE_DATA_INFO_SUCCESS:
        //     return {
        //        ...state,
        //        probe: [
        //             ...action.payload.probe,
        //         ]
        //     };
        default:
            return state;
    }

};


export default probeReducer