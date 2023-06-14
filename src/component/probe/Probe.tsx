import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchDataBegin, getProbeInfoBegin } from '../../action/probelist';
import styles from './index.scss';
import { local } from "../../url/url";
import { useForm } from "react-hook-form";
import { Input, Select } from "../Form/form";
import { Link } from "react-router-dom";


// const getProbeInfo = (id, set) => {

//   fetch(`http://${local}/api/Probe/${id}`, {
//     method: 'get',
//     headers: {
//       'content-type': 'application/json'
//     },
//   }).then((response) => {
//     // console.log(response.json())
//     return response.json();
//   }).then((data) => {
//     set(data)
//     // return data;
//   })
// }

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
  // const [probeInfo, setProbeInfo] = useState('')
  const probeInfo = useSelector(state => state.probeInfo[0])
  const dispatch = useDispatch();
  const { register, getValues, reset } = useForm();

  useEffect(() => {
    dispatch(getProbeInfoBegin(Id))
  }, [])

  return (
    <div className={styles.bg}>
      <div className={styles.probeblock}>
        <div className={styles.cell}>
          <div></div>
          <div className={`${styles.title} `}>
            <p>Probe資訊</p>
          </div>
          <Link to={`/probelist`}>X</Link>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>Probe ID:</div>
          <div className={styles.proberight}>
            <div>{probeInfo ? <Input name='probeId' register={register} val={probeInfo ? probeInfo['probeId'] : ''} /> : <defaultInput name='probeId' register={register} val={probeInfo ? probeInfo['probeId'] : ''} />}</div>
            {/* <Input name='probeId' register={register} val={probeInfo ? probeInfo['probeId'] : ''} /> */}
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>型號</div>
          <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['type'] : ''} /></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>硬碟:</div>
          <div className={styles.proberight}>
            <Select register={register} options={[{ value: 0, opttionName: '8GB' }, { value: 1, opttionName: '16GB' }]} name='harddiskdrive' select={probeInfo ? probeInfo['hddcode'] : 0} />
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>狀態:</div>
          <div className={styles.proberight}>
            <Select register={register} options={[{ value: 0, opttionName: '出貨' }, { value: 1, opttionName: '庫存' }, { value: 2, opttionName: '預留' }, { value: 3, opttionName: '借測' }, { value: 4, opttionName: '故障' }, { value: 5, opttionName: '內借' }]} name='status' select={probeInfo ? probeInfo['statuscode'] : 0} />
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>持有者</div>
          <div className={styles.proberight}>
            <Input name='ownerName' register={register} val={probeInfo ? probeInfo['ownerName'] : ''} />
          </div>
          {/* <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['ownerName'] : ''} /></div> */}
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>備註</div>
          <div className={styles.proberight}><input type='text' Value={probeInfo ? probeInfo['note'] : ''} placeholder={probeInfo ? probeInfo['note'] : ''} /></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>單價</div>
          <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['price'] : ''} placeholder={probeInfo ? probeInfo['price'] : ''} /><div></div></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>製造日期:</div>
          <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['manufacture'] : ''} /></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>進貨日期:</div>
          <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['createdate'] : ''} /></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>last updated</div>
          <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['lastupdate'] : ''} /></div>
        </div>
      </div>
    </div>
  )
}


export default Probe