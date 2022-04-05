import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProbe } from "../../action/probelist";
import { fetchInitDataBegin } from "../../action/probelist"
import styles from "./index.scss"

const removeProbe = probeId => {
  console.log(probeId)
}

const Probe_list = () => {
  const probes = useSelector(state => state.probelist)
  if (probes.length === 0) {
    return <tr><td></td><td><h1>暫無資料</h1></td><td></td></tr>
  } else {
    return probes.map(task => (
      <>
        <tr>
          <td>{task.probeId}</td>
          <td>{task.owner}</td>
          <td><div onClick={() => removeProbe(task.probeId)}>刪除</div><div onClick={() => removeProbe(task.probeId)}>修改</div></td>
        </tr>
      </>
    ))
  }
}


const ProbeList = () => {
  return (
    <table className={styles.probelists}>
      <tr>
        <th>Probe ID</th>
        <th>持有者</th>
        <th>操作</th>
      </tr>
      <Probe_list />
    </table>
  )
}

const probedata = (newprobe, customer) => {
  const probe = { probeId: newprobe, owner: customer }
  return probe
}



const main = () => {
  const dispatch = useDispatch();
  const probelist = useSelector(state => state.probelist)
  const [newprobe, steNewprobe] = useState('')
  const [customer, setCustomer] = useState('')

  useEffect(() => {
    dispatch(fetchInitDataBegin())
  }, [])


  return (
    <div data-testid="probelistBlock" className={styles.probelistBlock}>
      <span>{`庫存數量: ${probelist.length}`}</span>
      <div >
        <div>probe ID : <input value={newprobe} onChange={(e) => { steNewprobe(e.target.value) }} /></div>
        <div>客戶名稱: <input value={customer} onChange={(e) => { setCustomer(e.target.value) }} /></div>
        <button type="button" onClick={() => { dispatch(addProbe(probedata(newprobe, customer))) }}>新增Probe</button>
      </div>
      < ProbeList />
    </div>
  )
}

export default main