import { call, put, takeEvery } from 'redux-saga/effects';

export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export const addCustomer = (customer) => ({
    type: ADD_CUSTOMER,
    payload: {
        customer,
    },
});

export const GET_CUSTOMER_BEGIN = 'GET_CUSTOMER_BEGIN';

export const getCustomerBegin=() => ({
    type: GET_CUSTOMER_BEGIN,
});

export const GET_CUSTOMER_SUCCESS = 'GET_CUSTOMER_SUCCESS';

export const getCustomerSuccess=(customers) => ({
    type: GET_CUSTOMER_SUCCESS,
    payload:{
        customers,
    }
});


