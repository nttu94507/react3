import React, { useState, useEffect } from "react"
import styles from "./index.scss"
import { useDispatch, useSelector } from "react-redux"
import { symbol } from "prop-types";
import { getCustomerBegin } from '../../action/customerlist';
import CustomerCard from "./CustomerCard";
import EditCustomer from "./EditCustomer";





const Customer = () => {
    const dispatch = useDispatch();
    const CustomerList = useSelector(state => state.customerReducer)
    // const [Customers,setCustomers] = useState();
    const [customerdisplay,setcustomerdisplay] = useState(0)


    const customerdialog = (display) => {
        switch (display) {
          case 0:
            setcustomerdisplay(1)
            return
          case 1:
            setcustomerdisplay(0)
            return
        }
      }

    useEffect(() => {
        dispatch(getCustomerBegin())
    }, [])

     

    // console.log(CustomerList)

    return (
        <div className={styles.customer}>
            <div className={styles.layerBg}>
                <div className={styles.customeroption}>
                    <div className={styles.item6}>
                        <input placeholder={"  搜尋客戶"} className={styles.searchBar} onChange={(e) => dispatch(searchProbeDataBegin(e.target.value))}></input>
                    </div>
                    <div className={styles.item3}>

                    </div>
                    <div className={styles.item3}>
                        <div onClick={() => {customerdialog(customerdisplay)}} className={styles.buttonDefault}>新增客戶 </div>
                    </div>
                </div>
                <div className={styles.customercontent}>
                    <CustomerCard customers={CustomerList.customerlist} />
                </div>
            </div>
            <div className={`${customerdisplay== 1? styles.layerFe:styles.hidden}`}>
                <EditCustomer btn={customerdialog} dis={customerdisplay} />
            </div>
        </div>

    )
}

export default Customer