import { 
    takeLatest,
    takeEvery,
    put, 
    call, 
    cancel, 
    delay, 
    take, 
    fork } from '@redux-saga/core/effects';

import * as api from '../../api';

import type { addressState, actionAddressTypes, coordinates } from '../../types';

const SET_GEOLOCATION_COORDINATES = 'address/SET_GEOLOCATION_COORDINATES';
const FETCH_NAVIGATOR_ADDRESS = 'address/FETCH_NAVIGATOR_ADDRESS';
const REQUEST_NAVIGATOR_ADDRESS = 'address/REQUEST_NAVIGATOR_ADDRESS';
const FETCH_ADDRESS = 'address/FETCH_ADDRESS';
const REQUEST_ADDRESS = 'address/REQUEST_ADDRESS';
const SEARCH_ADDRESS = 'address/SEARCH_ADDRESSS';

const initialState: addressState = {
    addressInput: '',
    addresses: [],
    geolocation: {
        lat: 0,
        lon: 0
    },
    navigatorAddress: {
        street: '',
        city: '',
        country: ''
    }
};

export default function addressReducer(state = initialState, action: actionAddressTypes) {
    switch (action.type) {
        case SET_GEOLOCATION_COORDINATES:
            return {...state, geolocation: action.payload};
        case FETCH_NAVIGATOR_ADDRESS:
            return {...state, navigatorAddress: {
                street: action.payload.name,
                city: action.payload.locality,
                country: action.payload.country
            }};
        case SEARCH_ADDRESS:
            return {...state, addressInput: action.payload};
        case FETCH_ADDRESS:
            return {...state, addresses: action.payload};
        default: 
            return state;
    }
};

//actions

//navigator
export const takeGeolocation = (lat: number, lon: number) => ({
    type: SET_GEOLOCATION_COORDINATES,
    payload: {
        lat,
        lon
    }
});

export const takeNavigagtorAddress = () => ({
    type: REQUEST_NAVIGATOR_ADDRESS
});

//Address autocomplete
export const fillAddressInput = (text: string) => ({
    type: SEARCH_ADDRESS,
    payload: text
});

//fetch addresses
export const takeAddress = () => ({
    type: REQUEST_ADDRESS
});

//sagas

//navigator

function* putGeolocation(coordinates: coordinates){
    yield api.getGeolocation(coordinates);
};

export function* geolocationWatcher() {
    let setGeolocation: [];
    while (true) {
        const { payload } = yield take(SET_GEOLOCATION_COORDINATES);
        if (setGeolocation) {yield cancel(setGeolocation)}
        setGeolocation = yield fork(putGeolocation, payload);
    };
};

export function* navigatorAddressWatcher() {
    yield takeEvery(
        REQUEST_NAVIGATOR_ADDRESS,
        fillNavigatorAddress
    );
};

function* fillNavigatorAddress() {
    yield delay(500);
    const payload: string = yield call(api.fetchGeolocation);
    yield put({type:FETCH_NAVIGATOR_ADDRESS, payload});
};

//Address autocomplete
function* putAddressInput(endpoint: string) {
    yield api.getEndpoint(endpoint);
};

export function* addressInputWatcher() {
    let setEndpoint: [];
    while (true) {
        const { payload } = yield take(SEARCH_ADDRESS);
        if (setEndpoint) {yield cancel(setEndpoint)}
        setEndpoint = yield fork(putAddressInput, payload);
    };
};

//fetch addresses from API
export function* addressWatcher() {
    yield takeLatest(REQUEST_ADDRESS, fillAddress);
}; 

function* fillAddress() {
    yield delay(1000);
    const payload: [] = yield call(api.fetchAddress);
    yield put({type: FETCH_ADDRESS, payload});
};
