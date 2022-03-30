import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProbe } from "../../action/probelist";
import {fetchInitDataBegin} from "../../action/probelist"

const Probe_list=()=>{
  const probes = useSelector(state => state.probelist)
  return probes.map(task=>(
    <div>
      {probes.indexOf(task)+1}{task.probeId}{task.owner}
    </div>


  )

  )
}


const ProbeList =()=>{
  return(
    <div>
      <Probe_list/>
    </div>
  )
}

const probedata = (newprobe,customer) =>{
  // console.log(newprobe)
  // console.log(customer)
  const probe = {probeId: newprobe,owner: customer}
  return probe
}



const main =()=>{
    const dispatch = useDispatch();
    const probelist = useSelector(state=>state.probelist)    
    const [newprobe,steNewprobe] = useState('')
    const [customer,setCustomer] = useState('')

    useEffect(()=>{
      dispatch(fetchInitDataBegin())
    },[])


    return ( 
    <div data-testid="todolistBlock">
        <span>{`庫存數量: ${probelist.length}`}</span>
        <div>
          <div>probe ID : <input value={newprobe}  onChange={(e)=>{ steNewprobe (e.target.value) }}/></div>
          <div>客戶名稱: <input value={customer}  onChange={(e)=>{ setCustomer (e.target.value) }}/></div>
          <button type="button" onClick={()=>{dispatch(addProbe(probedata(newprobe,customer)))}}>新增Probe</button>
        </div>
        < ProbeList/>
    </div>
  
    )
}

export default main