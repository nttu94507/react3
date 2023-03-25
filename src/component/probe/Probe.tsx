import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchDataBegin } from '../../action/probelist';
import styles from './index.scss';
import { local } from "../../url/url";
import { useForm } from "react-hook-form";
import { Input, Select } from "../Form/Form";


const getProbeInfo = (id, set) => {

  fetch(`http://${local}/api/Probe/${id}`, {
    method: 'get',
    headers: {
      'content-type': 'application/json'
    },
  }).then((response) => {
    // console.log(response.json())
    return response.json();
  }).then((data) => {
    set(data)
    // return data;
  })
}

// export const  Select = ({ register, options, name, ...rest}) => {
//   return (
//     <select {...register(name)} {...rest}>
//       {options.map(value => (
//         <option key={value} value={value}>
//           {value}
//         </option>
//       ))}
//     </select>
//   );
// }
const Probe = () => {
  const { Id } = useParams();
  const [probeInfo, setProbeInfo] = useState('')
  const { register, getValues, reset } = useForm();

  const getJSON = async (url) => {
    const response = await fetch(url, {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      },
    }).then((jsonData) => {
      // console.log(jsonData);
      // 要return 的話寫在這
      return jsonData.json()
        .then((json) => {
          setProbeInfo(json)
          // return json
        })

    }).catch((err) => {
      // console.log('錯誤:', err);
    })
  }


  useEffect(() => {
    getJSON(`http://${local}/api/Probe/${Id}`)
  }, [])


  useEffect(() => {
    console.log('test:',probeInfo)
  }, [probeInfo])


  return (
    <div className={styles.bg}>
      <div className={styles.probeblock}>
        <div className={`${styles.title} `}>
          <p>Probe資訊</p>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>Probe ID:</div>
          <div className={styles.proberight}>
            <Input name='probeId' register={register} val= {probeInfo['probeId']}/>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>狀態:</div>
          <div className={styles.proberight}>
            <Select register = {register} options={[{value:0,opttionName:'8GB'},{value:1,opttionName:'16GB'}]} name = 'status' select={probeInfo['statuscode']}/>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>硬碟:</div>
          <div className={styles.proberight}>
          <Select register = {register} options={[{value:0,opttionName:'8GB'},{value:1,opttionName:'16GB'}]} name = 'harddiskdrive' select={probeInfo['hddcode']}/>
            {/* <select {...register('harddiskdrive', { required: false })}>
              <option value={""} >請選擇容量大小</option>
              <option value={0} >8GB</option>
              <option value={1}>16GB</option>
            </select> */}
            {/* <input type='text' defaultValue={probeInfo['harddiskdrive']} /> */}
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>型號</div>
          <div className={styles.proberight}><input type='text' value={probeInfo['type']} /></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>登錄日期:</div>
          <div className={styles.proberight}><div>{probeInfo['createdate']} </div></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>備註</div>
          <div className={styles.proberight}><input type='text' defaultValue={probeInfo['note']} placeholder={probeInfo['harddiskdrive']} /></div>
        </div>
        {/* <input type='text' defaultValue='123'/> */}
      </div>
    </div>
  )
}


export default Probe