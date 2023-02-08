import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postProbeDataBegin } from "../../action/probelist";
import { local } from "../../url/url";
import { useParams } from "react-router-dom";
import { getProbeDataInfoBegin } from '../../action/probelist'
import { useForm } from "react-hook-form";
import styles from "./index.scss";




const probedata = (newprobe: any, harddisk: any, probetype: any, note: any) => {
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
  const { btn, dis } = drop
  // const { id } = useParams();
  const { register, getValues,reset } = useForm();

  // if (id) {
  //   useEffect(() => {
  //     dispatch(getProbeDataInfoBegin(id ? id : ''))
  //   }, [])
  // }

  const postcreateprobe = (data: any, dispatch: any) => {
    // console.log(data);
    const probe = {
      probeId: data.probeId,
      harddisk: data.harddiskdrive,
      probetype: data.probetype,
      note: data.note
    }
    // console.log(probe);
    fetch('http://' + local + '/api/Probe/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      },
    }).then((response) => {
      btn(dis);
      reset();
      // return response;
    }).catch((err) => {
      // console.log('錯誤:', err);
    })
  }

  

  const dispatch = useDispatch();
  const probe = useSelector(state => state.probe[0])

  return (
    <div className={styles.editprobe}>
      <div className={`${styles.editlist} ${styles.editprobefontsize}`}>
        <p>新增 Probe</p>
      </div>
      <div className={styles.editlist}>
        <input {...register('probeId', { required: false })} placeholder={"  請輸入Probe ID"} />
      </div>
      <div className={styles.editlist}>
        <select {...register('harddiskdrive', { required: false })}>
          <option value={""}>請選擇容量大小</option>
          <option value={0}>8GB</option>
          <option value={1}>16GB</option>
        </select>
      </div>
      <div className={styles.editlist}>
        <select {...register('probetype', { required: false })}>
          <option value={""}>請選擇型號</option>
          <option value={0}>P110</option>
          <option value={1}>P120</option>
          <option value={2}>P220</option>
          <option value={3}>P360</option>
          <option value={4}>P560</option>
          <option value={5}>P110+(樹苺派4)</option>
        </select>
      </div>
      <div className={styles.editlist}>
        <input {...register('note', { required: false })} placeholder={"  請輸入備註"} />
      </div>
      <div className={`${styles.editlist} `}>
        <div className={styles.buttonDefault} onClick={() => {
          const value = getValues();
          postcreateprobe(value, dispatch);
        }} >
          確認送出
        </div>
        <div className={styles.buttonDefault} onClick={() => {
          btn(dis)
        }} >
          取消
        </div>
      </div>
    </div>
  )
}

export default Editprobe
