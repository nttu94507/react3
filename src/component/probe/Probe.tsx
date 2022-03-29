import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataBegin } from '../../action/probelist'




const Probe =() =>{
    const dispatch = useDispatch()
    const data = useSelector(state=>state.data)
      return(
        <div data-testid="contentBlock">
          <div data-testid="contentData">
            {data ? JSON.stringify(data):'暫無資料'}
          </div>
          <button  data-testid="fetchContentDataBtn" type='button' onClick={()=>{
            dispatch(fetchDataBegin())
          }}>
            獲得資料
          </button>
        </div>
      )
    }

}
 export default Probe