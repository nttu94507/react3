import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postProbeDataBegin } from "../../action/probelist";
import { local } from "../../url/url";
import { useParams } from "react-router-dom";
import {getProbeDataInfoBegin} from '../../action/probelist'
import { useForm } from "react-hook-form";
import styles from "./index.scss";


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

const Editprobe = (drop) => {
  const {btn,dis} = drop
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
    <div className={styles.editprobe}>
      <div className={`${styles.editlist} ${styles.editprobefontsize}`}>
        <p>新增 Probe</p>
      </div>
      <div className={styles.editlist}>
       {/* <div>Probe ID </div> */}
        <input {...register('ProbeId',{required:false})} placeholder={"  請輸入Probe ID"}/>
      </div>
      <div className={styles.editlist}>
        {/* <div>容量大小</div> */}
        <select {...register('Storage',{required:false})}>
          <option value={""}>請選擇容量大小</option>
          <option value={0}>8GB</option>
          <option value={1}>16GB</option>
        </select>
      </div>
      <div className={styles.editlist}>
        {/* <div>設備型號</div> */}
        <select {...register('Probetype',{required:false})}>
          <option value={""}>請選擇型號</option>
          <option value={0}>P110</option>
          <option value={1}>P120</option>
          <option value={2}>P220</option>
          <option value={3}>P360</option>
          <option value={4}>P560</option>
          <option value={4}>P110+(樹苺派4)</option>
        </select>
      </div>
      <div className={styles.editlist}>
        {/* <div>備註</div> */}
        <input {...register('note',{required:false})} placeholder={"  請輸入備註"}/>
      </div>
      <div className={`${styles.editlist} `}>
        <div className={styles.buttonDefault} onClick ={()=>{
          const value = getValues();
          postcreateprobe(value,dispatch);
          // console.log(value);
          }} >
          確認送出
        </div>
        <div className={styles.buttonDefault} onClick ={()=>{
          btn(dis)
          // const value = getValues();
          // postcreateprobe(value,dispatch);
          // console.log(value);
          }} >
          取消
        </div>
      </div>
    </div>
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
