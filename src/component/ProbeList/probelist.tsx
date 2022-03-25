import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProbe } from "../../action/probelist";

const Probe_list=()=>{
  const probes = useSelector(state => state.probelist)
  return probes.map(task=>(
    <div>
      {task.probeId}{task.customer}
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
  console.log(newprobe)
  console.log(customer)
  const probe = {probeId: newprobe,customer: customer}
  return probe
}



const main =()=>{
    const dispatch = useDispatch();
    const probelist = useSelector(state=>state.probelist)    
    const [newprobe,steNewprobe] = useState('')
    const [customer,setCustomer] = useState('')


    return ( 
    <div data-testid="todolistBlock">
        <span>{`庫存數量: ${probelist.length}`}</span>
        <div>
          <div>probe ID : <input value={newprobe}  onChange={(e)=>{ steNewprobe (e.target.value) }}/></div>
          <div>客戶名稱: <input value={customer}  onChange={(e)=>{ setCustomer (e.target.value) }}/></div>
          {/* <input value={newprobe[1]}  onChange={(e)=>{ steNewprobe ({id:e.target.value}) }}/> */}
          <button type="button" onClick={()=>{dispatch(addProbe(probedata(newprobe,customer)))}}>新增Probe</button>
        </div>
        < ProbeList/>
    </div>
  
    )
}

export default main