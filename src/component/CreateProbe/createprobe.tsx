import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { postProbeDataBegin } from "../../action/probelist";
import { local } from "../../url/url";
import { put } from "redux-saga/effects";

const postcreateprobe = (data,dispatch) => {
  
  console.log(JSON.stringify(data))
  fetch('http://' + local + '/api/Probe/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
  }).then((response) => {
    dispatch(postProbeDataBegin());
    return response;
  })
}

const probedata = (newprobe, harddisk, probetype, note) => {
  const probe = {
    probeId: newprobe,
    // owner: owner,
    harddisk: harddisk,
    probetype: probetype,
    note: note
  }
  return probe
}

const CrearteProbe = ({clickBtn}) => {
  const dispatch = useDispatch();
  const [newprobe, steNewprobe] = useState('');
  // const [owner, setOwner] = useState('');
  const [harddisk, setHarddisk] = useState(0);
  const [probetype, setProbetype] = useState(0);
  const [note, setNote] = useState('');


  return (
    <div >
      <div>probe ID : <input value={newprobe} onChange={(e) => { steNewprobe(e.target.value) }} /></div>
      {/* <div>客戶名稱: <input value={owner} onChange={(e) => { setOwner(e.target.value) }} /></div> */}
      <div>硬碟大小: {harddisk}<select name="harddisk" defaultValue={0} onChange={(e) => { setHarddisk(e.target.value) }} ><option value={0}>8GB</option><option value={1}>16GB</option></select></div>
      <div>機型: {probetype}<select name="type" defaultValue={0} onChange={(e) => { setProbetype(e.target.value) }} ><option value={0}>P110</option><option value={1}>P220</option></select></div>
      <div>備註:<input value={note} onChange={(e) => { setNote(e.target.value) }} /> </div>
      <button type="button" onClick={() => {
        // clickBtn();
        const data = probedata(newprobe, harddisk, probetype, note)
        postcreateprobe(data,dispatch)
      }}>新增Probe</button>
    </div>
  )
}

export default CrearteProbe