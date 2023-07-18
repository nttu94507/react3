import React from 'react';
import styles from "./index.scss"
import { local } from "../../../url/url";
import { useForm } from "react-hook-form";
import { DateInput, Input, Select, Textarea } from "../../Form/form";
import { useDispatch, useSelector } from 'react-redux';


const EditCustomer = (n) => {
    const { btn, dis } = n
    const { register, getValues, reset } = useForm();
    const customerInfo = useSelector(state => state.customerReducer.customerInfo[0])
    const dispatch = useDispatch();

    const postcreatecustomer = (data: any) => {

        fetch('http://' + local + '/api/customer/', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json'
          },
        }).then((response) => {
          btn(dis);
          reset();
          // return response;
        }).catch((err) => {
          console.log('錯誤:', err);
        })
      }

    return (
        <div className={styles.customerFrom}>
            <div className={`${styles.customerfromtitle}`}>
                <p>新增客戶</p>
            </div>
            <div className={`${styles.customerfromcontent}`}>
                <div className={`${styles.cell}`}>
                    <Input name='GUInumber' val={customerInfo?customerInfo['GUInumber']:'統一編號'} register={register} />
                </div>
                <div className={`${styles.cell}`}>
                    <Input name='Organization_Name' val={customerInfo?customerInfo['Organization_Name']:'公司名稱'} register={register} />
                </div>
                <div className={`${styles.cell}`}>
                    <Input name='Organization_Address' val={customerInfo?customerInfo['Organization_Address']:'公司地址'} register={register} />
                </div>
                {/* <Input name='contractPerson_Email' val='承辦Email' register={register} /> */}
                <div className={`${styles.cell}`}>
                    <Input name='contractPerson' val={customerInfo?customerInfo['contractPerson']:'承辦'} register={register} />
                </div>
                <div className={`${styles.cell}`}>
                    <Input name='contractPerson_Email' val={customerInfo?customerInfo['contractPerson_Email']:'承辦 Email'} register={register} />
                </div>
                <div className={`${styles.cell}`}>
                    <Input name='contractPerson_Phonenumber' val={customerInfo?customerInfo['contractPerson_Phonenumber']:'承辦電話'} register={register} />
                </div>
                <div className={`${styles.cell}`}>
                    <Select register={register} options={[{ value: 1, opttionName: '昱智(Jason)' }, { value: 2, opttionName: '悅嫻(Joy)' }]} name='FAEID' select={customerInfo ? customerInfo['FAEID'] : 1} />
                </div>
                <div className={`${styles.cell}`}>
                    <Select register={register} options={[{ value: 1, opttionName: '禎琳(Jenlin)' }, { value: 2, opttionName: '冠德(Wade)' }]} name='SalesID' select={customerInfo ? customerInfo['FAEID'] : 1} />
                </div>
                <div className={`${styles.cell}`}>
                    < Textarea name='note' val={customerInfo?customerInfo['note']:'備註'} register={register} />
                </div>
                {/* <Button func={btn,dis} val='x'/> */}
                <div className={`${styles.cell}`}>
                    <div onClick={() => { 
                        const value = getValues();
                        postcreatecustomer(value);
                        // console.log(value);
                    }} className={styles.editCustomerBtn}>送出</div>
                    <div onClick={() => { btn(dis),reset(); }} className={styles.editCustomerBtn}>取消</div>
                </div>
            </div>
        </div>
    )
}

export default EditCustomer;