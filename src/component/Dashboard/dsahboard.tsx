import React, { useState } from "react";
import styles from './index.scss';


const DashboardTestData = {
    p110: {
        total: 495,
        sold: 350
    },
    'p110+': {
        total: 495,
        sold: 350
    },
    p120: {
        total: 495,
        sold: 350
    },
    p220: {
        total: 495,
        sold: 350
    },
    p360: {
        total: 45,
        sold: 350
    },
    p560: {
        total: 495,
        sold: 350
    }

}

const DashboardCard = (data: any) => {
    return Object.keys(data.data).map((num) => (
        <div className={styles.dashboardCard} >
            <div className={styles.dashboardCardTittle}>{num}</div>
            <div className={styles.dashboardCardContent}>
                <div className={styles.dashboardCardContenttotal}>/{data.data[num].total}</div>
                <div className={styles.dashboardCardContentGold50}>{data.data[num].sold}</div>
            </div>
        </div>
    ));
}



const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardTop}>
                <DashboardCard data={DashboardTestData} />
            </div>
            <div className={styles.dashboardButtom}>
                <div className={styles.dashboardButtomLeft}>
                    <div className={`${styles.statusCard} ${styles.yellowLight}`}>
                        <div className={styles.statusCardLeft}>外借</div>
                        <div className={styles.statusCardRight}>
                            <div>超時:</div>
                        </div>
                    </div>
                    <div className={`${styles.statusCard} ${styles.antiquewhiteLight}`}>
                        <div className={styles.statusCardLeft}>內借</div>
                        <div className={styles.statusCardRight}>
                            <div>超時:</div>
                        </div>
                    </div>
                </div>
                <div className={styles.verticalLine}> </div>
                <div className={styles.dashboardButtomRight}>
                    <div className={`${styles.statusCard} ${styles.redLight}`}>
                        <div className={styles.statusCardLeft}>故障</div>
                        <div className={styles.statusCardRight}>
                            <div>超時:</div>
                        </div>
                    </div>
                    <div className={`${styles.statusCard} ${styles.greenLight}`}>
                        <div className={styles.statusCardLeft}>預留</div>
                        <div className={styles.statusCardRight}>
                            <div>超時:</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.dashboardMiddle}></div>
        </div>
    )
}

export default Dashboard