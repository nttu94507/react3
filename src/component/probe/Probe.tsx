import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchDataBegin } from '../../action/probelist'




const Probe =() =>{
    const {Id} = useParams();
    console.log(123);
    // const dispatch = useDispatch()
    // const data = useSelector(state=>state.data)
      return(
          <div>
            id: {Id} 
          </div>
      )
    }


 export default Probe