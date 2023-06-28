import React from "react"
import styles from "./index.scss"

const CustomerCard = (customers) => {
    console.log(customers)
    if (customers.customers.length === 0) {
        return <tr><td></td><td><h1>暫無資料</h1></td><td></td></tr>
    } else {
        return customers.customers.map(task => {

            return(
                <div className={styles.card}>
                <div className={styles.cardupper}>
                    <div className={styles.carduppertittle}>{task.Organization_Name}</div>
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
            )
            
        })
    }
}
export default CustomerCard