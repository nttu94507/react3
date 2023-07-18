import React from "react";
import * as actions from '../action/customerlist';
import { Icustomers } from "../interface/Icustomers";

const initCustomers: Icustomers = {
    customerlist: [
    ],
    // probe:[
    // ],
    customerInfo:[
    ],
}

const customerReducer = (state = initCustomers, action: any) => {
    switch (action.type) {
        case actions.ADD_CUSTOMER:
            return {
                ...state,
                customerlist: [
                    ...state.customerlist,
                    action.payload.customer,
                ],
            }
        case actions.GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                customerlist: [
                    // ...state.customerlist,
                    ...action.payload.customers,
                ]
            }
        default:
            return state
    }
}

export default customerReducer;