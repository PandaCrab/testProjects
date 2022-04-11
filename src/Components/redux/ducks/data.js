import { takeEvery, call, select } from '@redux-saga/core/effects';

import { fetchPostData } from '../../../api';

const REQUEST_DATA = 'data/REQUEST_DATA';
const FILL_SHIPPING_DATA = 'data/FILL_SHIPPING_DATA';
const FILL_BILLING_DATA = 'data/FILL_BILLING_DATA';
const FILL_PAYMENT_DATA = 'data/FILL_PAYMENT_DATA';

const initialState = {
    personInfo: []
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FILL_SHIPPING_DATA:
            return { 
                ...state,
                shipping: action.payload
             };
        case FILL_BILLING_DATA:
            return {
                ...state,
                billing: action.payload
            };
        case FILL_PAYMENT_DATA:
            return {
                ...state,
                payment: action.payload
            };
        default: return state;
    }
};

export const sendData = () => {
    return {
        type: REQUEST_DATA
    };
};

export const fillShippingData = (info) => {
    return {
        type: FILL_SHIPPING_DATA,
        payload: info
    };
};

export const fillBillingData = (info) => {
    return {
        type: FILL_BILLING_DATA,
        payload: info
    };
};

export const fillPaymentData = (info) => {
    return {
        type: FILL_PAYMENT_DATA,
        payload: info
    };
};

const dataSelector = state => state.data

export function* dataWatcher() {
    yield takeEvery(REQUEST_DATA, postData);
};

function* postData() {
    const data = yield select(dataSelector);
    yield call(fetchPostData, data);
};
