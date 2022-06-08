import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postProbeDataBegin } from "../../action/probelist";
import { local } from "../../url/url";
import { postProbeData } from "../../api/probe";
import { useParams } from "react-router-dom";
import {getProbeDataInfoBegin} from '../../action/probelist'

const postcreateprobe = (data:any, dispatch:any) => {
  if (data.probeId) {
    // console.log(JSON.stringify(data))
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
  }else{
    alert('資料為空');
  }
}

const probedata = (newprobe:any, harddisk:any, probetype:any, note:any) => {
  const probe = {
    probeId: newprobe,
    // owner: owner,
    harddisk: harddisk,
    probetype: probetype,
    note: note
  }
  return probe
}

const Editprobe = () => {
  const {id}=useParams();
  // if(id){
  //   console.log(id)
  //   const initdata =  Promise.resolve(getProbe(id))
  //    initdata.then(function(result){
  //     console.log(result)
  //     steNewprobe(result.probeId)
  //   })
  //   // console.log(res)
  // }
  if(id){
    useEffect(() => {
      dispatch(getProbeDataInfoBegin(id?id:''))
    },[])
  }


  const dispatch = useDispatch();
  const [newprobe, steNewprobe] = useState('');
  // const [owner, setOwner] = useState('');
  const [harddisk, setHarddisk] = useState(0);
  const [probetype, setProbetype] = useState(0);
  const [note, setNote] = useState('');

  // const {id}=useParams();

  // if(id){
  //   console.log(id+'useParams')
  //   const initdata =  Promise.resolve(postProbeData(id))
  //    initdata.then(function(result){
  //     console.log(result)
  //     result.map(info=>{
  //       steNewprobe(info.probeId)
  //       setHarddisk(info.postProbeData)
  //       setNote(info.note)
  //     })
  //   })
  // }


  return (
    <div >
      <div>probe ID : <input value={newprobe} onChange={(e) => { steNewprobe('42') }} /></div>
      <div>硬碟大小: {harddisk}<select name="harddisk" defaultValue={0} onChange={(e) => { setHarddisk(e.target.value) }} ><option value={0}>8GB</option><option value={1}>16GB</option></select></div>
      <div>機型: {probetype}<select name="type" defaultValue={0} onChange={(e) => { setProbetype(e.target.value) }} ><option value={0}>P110</option><option value={1}>P220</option></select></div>
      <div>備註:<input value={note} onChange={(e) => { setNote(e.target.value) }} /> </div>
      <button type="button" onClick={() => {
        const data = probedata(newprobe, harddisk, probetype, note)
        postcreateprobe(data, dispatch)
      }}>送出 Probe 資訊</button>
    </div>
  )
}

export default Editprobe
