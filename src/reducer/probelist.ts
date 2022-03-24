import React from "react";
import * as actions from '../action/probelist'



const allprobes = {

    probelist:['234123325123',
        // Probename: '12341244323'
   
    '2341werw23325123'
        // Probename: '12341244323'
    ]
}


    
const probeReducer = (state = allprobes, action:any) => {
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
            data: action.payload.data,
      };
        default:
            return state;
    }
    
  };


export default probeReducer