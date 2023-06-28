import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProbe } from "../../action/probelist";
import { fetchInitDataBegin, searchProbeDataBegin } from "../../action/probelist"
import CrearteProbe from "../Editprobe/editprobe";
import styles from "./index.scss"
import { local } from "../../url/url";
import { Link } from "react-router-dom";
import { take } from "redux-saga/effects";
import Editprobe from "../Editprobe/editprobe";
import { containeranalysis } from "googleapis/build/src/apis/containeranalysis";

// 'const removeProbe = (id: number, dispatch: any) => {

//   fetch(`http://${local}/api/Probe/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'content-type': 'application/json'
//     },
//   }).then((response) => {
//     dispatch(postProbeDataBegin())
//   })
// }'

const ProbeData = [
  {
    "id": 123,
    "probeId": 3345678,
    "statuscode": 1,
    "note": "",
    "harddiskdrive": "8GB",
    "type": "P110",
    "createdate": "2022-12-19"
  },
  {
    "id": 1234,
    "probeId": 13345678,
    "statuscode": 0,
    "note": "誠誠品",
    "harddiskdrive": "16GB",
    "type": "P360",
    "createdate": "2022-12-18"
  },
  {
    "id": 1234,
    "probeId": 13345678,
    "statuscode": 2,
    "note": "誠誠品",
    "harddiskdrive": "16GB",
    "type": "P560",
    "createdate": "2022-12-18"
  },
  {
    "id": 1234,
    "probeId": 13345678,
    "statuscode": 4,
    "note": "誠誠品",
    "harddiskdrive": "16GB",
    "type": "P220",
    "createdate": "2022-12-18"
  },
  {
    "id": 1234,
    "probeId": 13345678,
    "statuscode": 3,
    "note": "誠誠品",
    "harddiskdrive": "16GB",
    "type": "P110+",
    "createdate": "2022-12-18"
  },
  {
    "id": 1234,
    "probeId": 13345678,
    "statuscode": 5,
    "note": "誠誠品",
    "harddiskdrive": "16GB",
    "type": "P110+",
    "createdate": "2022-12-18"
  }
]

const Probe_list = (d) => {
  // console.log(d)
  if (d.data.length === 0) {
    return <tr><td></td><td><h1>暫無資料</h1></td><td></td></tr>
  } else {
    return d.data.map(task => {
      switch (task.statuscode) {
        case 0:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus0}`} title={task.note} >
              <Link to={`/detail/${task.id}`}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status0}`}>{task.status}</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 1:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus1}`} title={task.note} >
              <Link to={`/detail/${task.id}`}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status1}`}>{task.status}</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 2:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus2}`} title={task.note} >
              <Link to={`/detail/${task.id}`}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status2}`}>{task.status}</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 3:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus3}`} title={task.note} >
              <Link to={`/detail/${task.id}`}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status3}`}>{task.status}</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 4:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus4}`} title={task.note} >
              <Link to={`/detail/${task.id}`}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status4}`}>{task.status}</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 5:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus5}`} title={task.note} >
              <Link to={`/detail/${task.id}`}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status5}`}>{task.status}</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
      }
    })
  }
}


// const search = (key,data,action) => {
//     if (key!=""){
//       const items = ProbeData.filter(val=>{
//         console.log((val.statuscode+'').includes(key))
//           if ((val.statuscode+'').includes(key)){
//             return val
//           }else if (val.note.includes(key)){
//             return val
//           }else if (val.type.includes(key)){
//             return val
//           }else if (val.harddiskdrive.includes(key)){
//             return val
//           }else if ((val.probeId+'').includes(key)){
//             return val
//           }else if (val.createdate.includes(key)){
//             return val
//           }
//         // return JSON.stringify(val.statuscode)==key
//       })
//       action(items)
//     }else{
//       action(ProbeData)
//     }
//   }




const main = () => {
  const dispatch = useDispatch();
  const probelist = useSelector(state => state.probeReducer)
  const [display, setdisplay] = useState(0)
  // const [ProbeTestData, setProbeTestData] = useState(probelist) //測試資料

  // console.log(probelist)

  const addProbedialog = (display) => {
    switch (display) {
      case 0:
        setdisplay(1)
        return
      case 1:
        setdisplay(0)
        return
    }
  }
  useEffect(() => {
    dispatch(fetchInitDataBegin())
  }, [])



  return (
    <div className={styles.probe}>
      <div data-testid="probelistBlock" className={styles.probelistBlock}>
        <div className={styles.probelistItem}>
          <div className={styles.item6}>
            <input placeholder={"  搜尋Probe"} className={styles.searchBar} onChange={(e) => dispatch(searchProbeDataBegin(e.target.value))}></input>
            {/* 測試資料改這裡 */}
            <span className={styles.searchBar}>{`庫存數量: ${probelist.probelist.length}`}</span>
          </div>
          <div className={styles.item3}>
            {/* <button>全部設備</button>
            <button>P110</button> */}
          </div>
          <div className={styles.item3}>
            {/* <span>{`庫存數量: ${ProbeTestData.length}`}</span> */}
            <div onClick={() => addProbedialog(display)} className={styles.buttonDefault}>新增Probe </div>
          </div>
        </div>
        <div className={styles.probelistContent}>
          <div className={styles.probelists}>
            < Probe_list data={probelist.probelist} />
            {/* 測試資料改這裡 */}
          </div>
        </div>
      </div>
      <div id="dialog" className={`${styles.dialog} ${display == 1 ? "" : styles.hidden}`}>
        <Editprobe btn={addProbedialog} dis={display} />
      </div>
    </div>
  )
}

export default main