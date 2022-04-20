import { takeLatest, put, call, cancel, delay, take, fork } from 'redux-saga/effects';

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

// export const putEndpoint = store => next => action => {
//     if (action.type === SEARCH_ADDRESS) {
//         api.getEndpoint(action.payload)
//     }
//     return next(action)
// }
function* putAddressInput(endpoint) {
    yield delay(500);
    yield api.getEndpoint(endpoint);
};

export function* addressInputWatcher() {
    let setEndpoint;
    while (true) {
        const { payload } = yield take(SEARCH_ADDRESS);
        if (setEndpoint) yield cancel(setEndpoint)
        setEndpoint = yield fork(putAddressInput, payload)
    };
};

export const takeAddress = () => ({
    type: REQUEST_ADDRESS
});

export function* addressWatcher() {
    yield takeLatest(REQUEST_ADDRESS, fillAddress)
}; 

function* fillAddress() {
    yield delay(1000);
    const payload = yield call(api.fetchAddress);
    yield put({type: FETCH_ADDRESS, payload});
};
