import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProbe, postProbeDataBegin } from "../../action/probelist";
import { fetchInitDataBegin } from "../../action/probelist"
import CrearteProbe from "../Editprobe/editprobe";
import styles from "./index.scss"
import { local } from "../../url/url";
import { Link } from "react-router-dom"; 
import { take } from "redux-saga/effects";

const removeProbe = (id:number,dispatch:any) => {
  
  fetch(`http://${local}/api/Probe/${id}`,{
    method:'DELETE',
    headers: {
      'content-type': 'application/json'
    },
  }).then((response)=> {
    dispatch(postProbeDataBegin())
  })
}

const ProbeTestData = [
  {
    "id":123,
    "probeId": 3345678,
    "status": "在庫",
    "note":"",
    "harddiskdrive":"8GB",
    "type":"P110"
  },
  {
    "id":1234,
    "probeId": 13345678,
    "status": "出貨",
    "note":"誠誠品",
    "harddiskdrive":"16GB",
    "type":"P110"
  }
]

const Probe_list = () => {
  // const probes = useSelector(state => state.probelist)
  // const dispatch = useDispatch()
  if (ProbeTestData.length === 0) {
    return <tr><td></td><td><h1>暫無資料</h1></td><td></td></tr>
  } else {
    // return ProbeTestData.map(task => (
    //   <>
    //     <tr>
    //       <td>{task.probeId}</td>
    //       <td>{task.harddiskdrive}</td>
    //       <td>{task.status}</td>
    //       <td>{task.type}</td>
    //       <td><div onClick={() => removeProbe(task.id,dispatch)}>刪除</div><div><Link to={"/probe/"+task.id} data-testid="probelistLink">修改</Link></div></td>
    //     </tr>
    //   </>
    // ))
    return ProbeTestData.map(task =>(
      <div className={styles.probeBlock} title={task.note}>
        <Link to={'/detail/'+task.id}>
          <div>probe ID : {task.probeId}</div>
        </Link>
      </div>
    ))
  }
}


const ProbeList = () => {
  return (
    <table className={styles.probelists}>
      <tr >
        <th>Probe ID</th>
        {/* <th>持有者</th> */}
        <th>硬碟容量</th>
        <th>狀態</th>
        <th>型號</th>
        <th>操作</th>
      </tr>
      <Probe_list />
    </table>
  )
}





const main = () => {
  const dispatch = useDispatch();
  const probelist = useSelector(state => state.probelist)
  const [newprobe, steNewprobe] = useState('')
  const [customer, setCustomer] = useState('')

  useEffect(() => {
    dispatch(fetchInitDataBegin())
  }, [])

  // const myBtnSend = () =>{
  //   console.log("[Test] btn");
  // }

  return (
    <div data-testid="probelistBlock" className={styles.probelistBlock}>
      <div className={styles.probelistItem}>
        <div className={styles.item3}>
          <button>全部設備</button>
          <button>P110</button>
        </div>
        <div className={styles.item6}>
          <input placeholder={"  請輸入關鍵字"} className={styles.searchBar}></input>
        </div>
        <div className={styles.item3}>
          <span>{`庫存數量: ${probelist.length}`}</span>
        </div>
      </div>
      <hr></hr>
      <div className={styles.probelists}>
        < Probe_list />
        < Probe_list />
        < Probe_list />
        < Probe_list />
      </div>
    </div>
  )
}

export default main