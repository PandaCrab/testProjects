import { takeEvery, put, call, delay } from 'redux-saga/effects';

import * as api from '../../api';

const FETCH_ADDRESS = 'address/FETCH_ADDRESS';
const REQUEST_ADDRESS = 'address/REQUEST_ADDRESS';
const SEARCH_ADDRESS = 'address/SEARCH_ADDRESSS'

const initialState = {
    addressinput: '',
    addresses: []
};

export default function addressReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ADDRESS:
            return {...state, addressinput: action.payload};
        case FETCH_ADDRESS:
            return {...state, addresses: action.payload};
        default: 
            return state;
    }
};

export const fillAddressInput = text => ({
    type: SEARCH_ADDRESS,
    payload: text
});

export const putEndpoint = store => next => action => {
    if (action.type === SEARCH_ADDRESS) {
        api.getEndpoint(action.payload)
    }
    return next(action)
}

export const takeAddress = () => ({
    type: REQUEST_ADDRESS
});

export function* addressWatcher() {
    yield takeEvery(REQUEST_ADDRESS, fillAddress)
}; 

function* fillAddress() {
    yield delay(1000)
    const payload = yield call(api.fetchAddress);
    yield put({type: FETCH_ADDRESS, payload});
};
