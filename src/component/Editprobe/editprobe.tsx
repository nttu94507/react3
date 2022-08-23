import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postProbeDataBegin } from "../../action/probelist";
import { local } from "../../url/url";
import { useParams } from "react-router-dom";
import {getProbeDataInfoBegin} from '../../action/probelist'
import { useForm } from "react-hook-form";


const postcreateprobe = (data:any, dispatch:any) => {
  console.log(data);
  const probe = {
    probeId: data.ProbeId,
    // owner: owner,
    // harddisk: harddisk,
    // probetype: probetype,
    // note: note
  }
  console.log(probe);
  // if (data) {
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
  // }else{
  //   alert('資料為空');
  // }
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
  const {register ,getValues} = useForm();
  
  if(id){
    useEffect(() => {
      dispatch(getProbeDataInfoBegin(id?id:''))
    },[])
  }

  const dispatch = useDispatch();
  const probe = useSelector(state => state.probe[0])

  return (
    <>
      <div>
        <input {...register('ProbeId',{required:false})} />
      </div>
      <div>
        <select {...register('Storage',{required:false})}>
          <option value={""}>請選擇容量大小</option>
          <option value={0}>8GB</option>
          <option value={1}>16GB</option>
        </select>
      </div>
      <div>
        <select {...register('Probetype',{required:false})}>
          <option value={""}>請選擇型號</option>
          <option value={0}>P110</option>
          <option value={1}>P120</option>
        </select>
      </div>
      <div>
        <input {...register('note',{required:false})} />
      </div>
      
      <button type="button" onClick ={()=>{
        const value = getValues();
        postcreateprobe(value,dispatch);
        // console.log(value);
        }} >
        按
      </button>
    </>
    // <div >
    //   <div>probe ID : <input value={probe} onChange={(e) => { steNewprobe(e) }} /></div>
    //   <div>硬碟大小: {harddisk}<select name="harddisk" defaultValue={0} onChange={(e) => { setHarddisk(e.target.value) }} ><option value={0}>8GB</option><option value={1}>16GB</option></select></div>
    //   <div>機型: {probetype}<select name="type" defaultValue={0} onChange={(e) => { setProbetype(e.target.value) }} ><option value={0}>P110</option><option value={1}>P220</option></select></div>
    //   <div>備註:<input value={note} onChange={(e) => { setNote(e.target.value) }} /> </div>
    //   <button type="button" onClick={() => {
    //     const data = probedata(newprobe, harddisk, probetype, note)
    //     postcreateprobe(data, dispatch)
    //   }}>送出 Probe 資訊</button>
    // </div>
  )
}

export default Editprobe
