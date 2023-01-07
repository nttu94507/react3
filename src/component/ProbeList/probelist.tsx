import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProbe, postProbeDataBegin } from "../../action/probelist";
import { fetchInitDataBegin } from "../../action/probelist"
import CrearteProbe from "../Editprobe/editprobe";
import styles from "./index.scss"
import { local } from "../../url/url";
import { Link } from "react-router-dom";
import { take } from "redux-saga/effects";
import Editprobe from "../Editprobe/editprobe";

const removeProbe = (id: number, dispatch: any) => {

  fetch(`http://${local}/api/Probe/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
  }).then((response) => {
    dispatch(postProbeDataBegin())
  })
}

const ProbeTestData = [
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

// const addProbedialog = () => {
//   return (
//     <dialog className={styles.dialog}>
//       <Editprobe />
//     </dialog>
//   )
// }

const Probe_list = () => {
  if (ProbeTestData.length === 0) {
    return <tr><td></td><td><h1>暫無資料</h1></td><td></td></tr>
  } else {
    return ProbeTestData.map(task => {
      switch (task.statuscode) {
        case 0:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus0}`} title={task.note} >
              <Link to={'/detail/' + task.id}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status0}`}>出貨</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 1:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus1}`} title={task.note} >
              <Link to={'/detail/' + task.id}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status1}`}>在庫</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 2:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus2}`} title={task.note} >
              <Link to={'/detail/' + task.id}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status2}`}>預留</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 3:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus3}`} title={task.note} >
              <Link to={'/detail/' + task.id}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status3}`}>外借</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 4:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus4}`} title={task.note} >
              <Link to={'/detail/' + task.id}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status4}`}>故障</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
        case 5:
          return (
            < div className={`${styles.probeCard} ${styles.probeCardButtomStasus5}`} title={task.note} >
              <Link to={'/detail/' + task.id}>
                <div className={`${styles.probeCardStatus}`}>
                  <div className={styles.probeCardStatusLeft}>{task.type}</div>
                  {/* <ProbeCardStatus status={task.statuscode} /> */}
                  <div className={`${styles.probeCardStatusRight}`}>{task.createdate}</div>
                </div>
                <div className={styles.probeCardInfo}>
                  <div className={styles.probeCardInfoLeft}>{task.probeId}</div>
                  <div className={`${styles.probeCardInfoRight} ${styles.status5}`}>內借</div>
                  {/* <div className={styles.probeCardInfoRight}>{task.probeId}</div> */}
                </div>
              </Link>
            </div >
          )
      }
    })
  }
}


const ProbeList = () => {
  return (
    <table className={styles.probelists}>
      <tr >
        <th>Probe ID</th>
        {/* <th>持有者</th> */}
        <th>硬碟容量</th>
        <th>狀態</th>
        <th>型號</th>
        <th>操作</th>
      </tr>
      <Probe_list />
    </table>
  )
}





const main = () => {
  const dispatch = useDispatch();
  const probelist = useSelector(state => state.probelist)
  const [display, setdisplay] = useState(0)
  const [customer, setCustomer] = useState('')

  const addProbedialog =(display)=>{
    switch (display) {
      case 0:
        setdisplay(1)
        return
      case 1:
        setdisplay(0)
        return
    }
  }

  // useEffect(() => {
  //   dispatch(fetchInitDataBegin())
  // }, [])



  return (
    <div className={styles.probe}>
      <div data-testid="probelistBlock" className={styles.probelistBlock}>
        <div className={styles.probelistItem}>
          <div className={styles.item3}>
            <button>全部設備</button>
            <button>P110</button>
          </div>
          <div className={styles.item6}>
            <input placeholder={"  請輸入關鍵字"} className={styles.searchBar}></input>
          </div>
          <div className={styles.item3}>
            {/* <span>{`庫存數量: ${ProbeTestData.length}`}</span> */}
            <div onClick={()=>addProbedialog(display)}>新增Probe </div>
          </div>
        </div>
        <hr></hr>
        <span>{`庫存數量: ${ProbeTestData.length}`}</span>
        <div className={styles.probelists}>
          < Probe_list />
        </div>
      </div>
      <div id="dialog" className={`${styles.dialog} ${display==1?"":styles.hidden}`}>
        <Editprobe />
      </div>
    </div>
  )
}

export default main