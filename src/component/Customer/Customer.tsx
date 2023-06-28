import React, { useState, useEffect } from "react"
import styles from "./index.scss"
import { useDispatch, useSelector } from "react-redux"
import { symbol } from "prop-types";
import {getCustomerBegin}from '../../action/customerlist';
 


const Customer = () => {
    const dispatch = useDispatch();
    const CustomerList = useSelector(state => state.customerlist)
    // const [Customers,setCustomers] = useState();

    useEffect(() => {
        dispatch(getCustomerBegin())
    })


    return (
        <div className={styles.customer}>
            <div className={styles.customeroption}>
                <div className={styles.item6}>
                    <input placeholder={"  搜尋客戶"} className={styles.searchBar} onChange={(e) => dispatch(searchProbeDataBegin(e.target.value))}></input>
                </div>
                <div className={styles.item3}>

                </div>
                <div className={styles.item3}>
                    <div onClick={() => addProbedialog(display)} className={styles.buttonDefault}>新增客戶 </div>
                </div>
            </div>
            <div className={styles.customercontent}>
                <div className={styles.customerLists}>
                    <div className={styles.card}>
                        <div className={styles.cardupper}>
                            <div className={styles.carduppertittle}>松下產業</div>
                            <div className={styles.cardupperstatus}>
                                <div className={styles.cardupperstatusborder}>保固中</div>
                            </div>
                        </div>
                        <div className={styles.cardbuttom}>
                            <div className={styles.cardbuttomitem}>到期日: 2024/06/15</div>
                            <div className={styles.cardbuttomitem}>承辦: 朝壽</div>
                            <div className={styles.cardbuttomitem}>業務: 禎琳</div>
                            <div className={styles.cardbuttomitem}>FAE: Jason</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardupper}>
                            <div className={styles.carduppertittle}>松下產業</div>
                            <div className={styles.cardupperstatus}>
                                <div className={styles.cardupperstatusborder}>保固中</div>
                            </div>
                        </div>
                        <div className={styles.cardbuttom}>
                            <div className={styles.cardbuttomitem}>到期日: 2024/06/15</div>
                            <div className={styles.cardbuttomitem}>承辦: 朝壽</div>
                            <div className={styles.cardbuttomitem}>業務: 禎琳</div>
                            <div className={styles.cardbuttomitem}>FAE: Jason</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardupper}>
                            <div className={styles.carduppertittle}>松下產業</div>
                            <div className={styles.cardupperstatus}>
                                <div className={styles.cardupperstatusborder}>保固中</div>
                            </div>
                        </div>
                        <div className={styles.cardbuttom}>
                            <div className={styles.cardbuttomitem}>到期日: 2024/06/15</div>
                            <div className={styles.cardbuttomitem}>承辦: 朝壽</div>
                            <div className={styles.cardbuttomitem}>業務: 禎琳</div>
                            <div className={styles.cardbuttomitem}>FAE: Jason</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardupper}>
                            <div className={styles.carduppertittle}>松下產業</div>
                            <div className={styles.cardupperstatus}>
                                <div className={styles.cardupperstatusborder}>保固中</div>
                            </div>
                        </div>
                        <div className={styles.cardbuttom}>
                            <div className={styles.cardbuttomitem}>到期日: 2024/06/15</div>
                            <div className={styles.cardbuttomitem}>承辦: 朝壽</div>
                            <div className={styles.cardbuttomitem}>業務: 禎琳</div>
                            <div className={styles.cardbuttomitem}>FAE: Jason</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardupper}>
                            <div className={styles.carduppertittle}>松下產業</div>
                            <div className={styles.cardupperstatus}>
                                <div className={styles.cardupperstatusborder}>保固中</div>
                            </div>
                        </div>
                        <div className={styles.cardbuttom}>
                            <div className={styles.cardbuttomitem}>到期日: 2024/06/15</div>
                            <div className={styles.cardbuttomitem}>承辦: 朝壽</div>
                            <div className={styles.cardbuttomitem}>業務: 禎琳</div>
                            <div className={styles.cardbuttomitem}>FAE: Jason</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardupper}>
                            <div className={styles.carduppertittle}>松下產業</div>
                            <div className={styles.cardupperstatus}>
                                <div className={styles.cardupperstatusborder}>保固中</div>
                            </div>
                        </div>
                        <div className={styles.cardbuttom}>
                            <div className={styles.cardbuttomitem}>到期日: 2024/06/15</div>
                            <div className={styles.cardbuttomitem}>承辦: 朝壽</div>
                            <div className={styles.cardbuttomitem}>業務: 禎琳</div>
                            <div className={styles.cardbuttomitem}>FAE: Jason</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardupper}>
                            <div className={styles.carduppertittle}>松下產業</div>
                            <div className={styles.cardupperstatus}>
                                <div className={styles.cardupperstatusborder}>保固中</div>
                            </div>
                        </div>
                        <div className={styles.cardbuttom}>
                            <div className={styles.cardbuttomitem}>到期日: 2024/06/15</div>
                            <div className={styles.cardbuttomitem}>承辦: 朝壽</div>
                            <div className={styles.cardbuttomitem}>業務: 禎琳</div>
                            <div className={styles.cardbuttomitem}>FAE: Jason</div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardupper}>
                            <div className={styles.carduppertittle}>松下產業</div>
                            <div className={styles.cardupperstatus}>
                                <div className={styles.cardupperstatusborder}>保固中</div>
                            </div>
                        </div>
                        <div className={styles.cardbuttom}>
                            <div className={styles.cardbuttomitem}>到期日: 2024/06/15</div>
                            <div className={styles.cardbuttomitem}>承辦: 朝壽</div>
                            <div className={styles.cardbuttomitem}>業務: 禎琳</div>
                            <div className={styles.cardbuttomitem}>FAE: Jason</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Customer