import React, { useState } from "react";
import styles from './index.scss';


const DashboardTestData = {
    P110: {
        total: 495,
        sold: 3
    },
    'P110+': {
        total: 495,
        sold: 350
    },
    P120: {
        total: 495,
        sold: 350
    },
    P220: {
        total: 495,
        sold: 350
    },
    P360: {
        total: 45,
        sold: 350
    },
    P560: {
        total: 495,
        sold: 350
    }

}

const StatusTestData = {
    externalLending: {
        Overtime: 3,
        P110: 21,
        "P110+": 1,
        P120: 3,
        P220: 7,
        P360: 3,
        P560: 18
    },
    internalBorrowing: {
        P110: 21,
        "P110+": 1,
        P120: 3,
        P220: 7,
        P360: 3,
        P560: 18
    },
    faulty: {
        P110: 21,
        "P110+": 1,
        P120: 3,
        P220: 7,
        P360: 3,
        P560: 18
    },
    reserve: {
        P110: 21,
        "P110+": 1,
        P120: 3,
        P220: 7,
        P360: 3,
        P560: 18
    }
}

const DashboardCard = (data: any) => {


    return Object.keys(data.data).map((num) => (
        <div className={styles.dashboardCard} >
            <div className={styles.dashboardCardTittle}>{num}</div>
            <div className={styles.dashboardCardContent}>
                <div className={styles.dashboardCardContenttotal}>/{data.data[num].total}</div>
                {
                    data.data[num].sold < 5
                        ? (<div className={styles.dashboardCardContentred5}>{data.data[num].sold}</div>)
                        : (<div className={styles.dashboardCardContentGold50}>{data.data[num].sold}</div>)

                }
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
                        <div className={styles.statusCardLeft}>
                            <div className={styles.statusCardLeftTitle}>外借</div>
                            <div className={styles.statusCardLeftEvent}>超時:{StatusTestData.externalLending.Overtime}</div>
                        </div>
                        {/* <div className={styles.statusCardMiddle}>
                        </div> */}
                        <div className={styles.statusCardRight}>
                            <div className={styles.statusCardRightTop}>{StatusTestData.externalLending.P220}</div>
                            <div className={styles.statusCardRightButtom}>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P110: {StatusTestData.externalLending.P110}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P110+: {StatusTestData.externalLending["P110+"]}</div>
                                </div>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P120: {StatusTestData.externalLending.P120}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P220: {StatusTestData.externalLending.P220}</div>
                                </div>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P360: {StatusTestData.externalLending.P360}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P560: {StatusTestData.externalLending.P560}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.statusCard} ${styles.antiquewhiteLight}`}>
                        <div className={styles.statusCardLeft}>
                            <div className={styles.statusCardLeftTitle}>內借</div>
                            <div className={styles.statusCardLeftEvent}>超時:{StatusTestData.externalLending.Overtime}</div>
                        </div>
                        {/* <div className={styles.statusCardMiddle}>
                        </div> */}
                        <div className={styles.statusCardRight}>
                            <div className={styles.statusCardRightTop}>{StatusTestData.externalLending.P220}</div>
                            <div className={styles.statusCardRightButtom}>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P110: {StatusTestData.externalLending.P110}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P110+: {StatusTestData.externalLending["P110+"]}</div>
                                </div>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P120: {StatusTestData.externalLending.P120}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P220: {StatusTestData.externalLending.P220}</div>
                                </div>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P360: {StatusTestData.externalLending.P360}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P560: {StatusTestData.externalLending.P560}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.verticalLine}> </div>
                <div className={styles.dashboardButtomRight}>
                    <div className={`${styles.statusCard} ${styles.redLight}`}>
                        <div className={styles.statusCardLeft}>
                            <div className={styles.statusCardLeftTitle}>故障</div>
                            <div className={styles.statusCardLeftEvent}>超時:{StatusTestData.externalLending.Overtime}</div>
                        </div>
                        {/* <div className={styles.statusCardMiddle}>
                        </div> */}
                        <div className={styles.statusCardRight}>
                            <div className={styles.statusCardRightTop}>{StatusTestData.externalLending.P220}</div>
                            <div className={styles.statusCardRightButtom}>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P110: {StatusTestData.externalLending.P110}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P110+: {StatusTestData.externalLending["P110+"]}</div>
                                </div>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P120: {StatusTestData.externalLending.P120}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P220: {StatusTestData.externalLending.P220}</div>
                                </div>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P360: {StatusTestData.externalLending.P360}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P560: {StatusTestData.externalLending.P560}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.statusCard} ${styles.greenLight}`}>
                        <div className={styles.statusCardLeft}>
                            <div className={styles.statusCardLeftTitle}>預留</div>
                            <div className={styles.statusCardLeftEvent}>超時:{StatusTestData.externalLending.Overtime}</div>
                        </div>
                        {/* <div className={styles.statusCardMiddle}>
                        </div> */}
                        <div className={styles.statusCardRight}>
                            <div className={styles.statusCardRightTop}>{StatusTestData.externalLending.P220}</div>
                            <div className={styles.statusCardRightButtom}>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P110: {StatusTestData.externalLending.P110}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P110+: {StatusTestData.externalLending["P110+"]}</div>
                                </div>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P120: {StatusTestData.externalLending.P120}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P220: {StatusTestData.externalLending.P220}</div>
                                </div>
                                <div className={styles.statusCardRightButtomDevices}>
                                    <div className={styles.statusCardRightButtomDevice}>P360: {StatusTestData.externalLending.P360}</div>
                                    <div className={styles.statusCardRightButtomDevice}>P560: {StatusTestData.externalLending.P560}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.dashboardMiddle}></div>
        </div>
    )
}

export default Dashboard