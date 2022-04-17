import { takeEvery, put, call } from 'redux-saga/effects';

import { fetchAddress } from '../../api';

const FETCH_ADDRESS = 'address/FETCH_ADDRESS';
const REQUEST_ADDRESS = 'address/REQUEST_ADDRESS';

const initialState = [];

export default function addressReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ADDRESS:
            return action.payload;
        default: 
            return state;
    }
};

export const takeAddress = () => ({
    type: REQUEST_ADDRESS
});

export function* addressWatcher() {
    yield takeEvery(REQUEST_ADDRESS, fillAddress)
};

function* fillAddress() {
    const payload = call(fetchAddress);
    yield put({type: FETCH_ADDRESS, payload});
};
