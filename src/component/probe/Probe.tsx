import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { fetchDataBegin, getProbeInfoBegin } from '../../action/probelist';
import styles from './index.scss';
import { local } from "../../url/url";
import { useForm } from "react-hook-form";
import { Input, Select,Textarea } from "../Form/form";
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
            <div className={styles.hidden}>{probeInfo ? <Input name='id' register={register} val={probeInfo ? probeInfo['id'] : ''} /> : ''}</div>
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
          <div className={styles.probeleft}>狀態</div>
          <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['status'] : ''} /></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>持有者</div>
          <div className={styles.proberight}>
            <Input name='ownerName' register={register} val={probeInfo ? probeInfo['ownerName'] : ''} />
          </div>
          {/* <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['ownerName'] : ''} /></div> */}
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
          <div className={styles.probeleft}>最後更新:</div>
          <div className={styles.proberight}><input type='text' value={probeInfo ? probeInfo['lastupdate'] : ''} /></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.probeleft}>備註</div>
          <div className={styles.proberight}>
  
            <Textarea name='note' register={register} val={probeInfo ? probeInfo['note'] : ''} />
          </div>
          {/* <div className={styles.proberight}><input type='text' name='note' defaultValue={probeInfo ? probeInfo['note'] : ''} placeholder={probeInfo ? probeInfo['note'] : ''} /></div> */}
        </div>
        <div className={`${styles.cell} ${styles.justifyCenter} `}>
          <div className={styles.buttonDefault} onClick={() => {
            const data = getValues();
            console.log(data);
            fetch(`http://${local}/api/Probe/update`, {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'content-type': 'application/json'
              },
            }).then((response) => {
              alert('修改完成');
              console.log(response.json())
            }).catch((err) => {
              alert('修改失敗')
            })
          }}>確認修改</div>
        </div>
      </div>
    </div >
  )
}


export default Probe