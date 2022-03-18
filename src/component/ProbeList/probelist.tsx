import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProbe } from "../../action/probelist";

const Probe_list=()=>{
  const probes = useSelector(state => state.probelist)
  return probes.map(task=>(
    <div>
      {task}
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



const main =()=>{
    const dispatch = useDispatch();
    const probelist = useSelector(state=>state.probelist)    
    const [newprobe,steNewprobe] = useState({id:0,})

    return ( 
    <div data-testid="todolistBlock">
        <span>{`庫存數量: ${probelist.length}`}</span>
        <div>
          <input value={newprobe['id']}  onChange={(e)=>{ steNewprobe ({id:e.target.value}) }}/>
          {/* <input value={newprobe[1]}  onChange={(e)=>{ steNewprobe ({id:e.target.value}) }}/> */}


            <input value={newprobe['id']} />
          {/* <input value={newprobe['probename']}  /> */}
          <button type="button" onClick={()=>{dispatch(addProbe(newprobe))}}>新增待辦事項</button>
        </div>
        < ProbeList/>
    </div>
  
    )
}

export default main