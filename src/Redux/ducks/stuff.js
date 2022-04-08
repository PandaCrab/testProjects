import { takeEvery, put, call } from 'redux-saga/effects';

import { fetchStuff } from '../../api';

const FETCH_STUFF = 'stuff/FETCH_STUFF';
const REQUEST_STUFF = 'stuff/REQUEST_STUFF';
const SHOW_LOADER = 'global/SHOW_LOADER';
const HIDE_LOADER = 'global/HIDE_LOADER';

const initialState = {
    stuff: [],
    loading: false
};

export default function stuffReducer (state = initialState, action) {
    switch ( action.type ) {
        case FETCH_STUFF: 
            return { ...state, stuff: action.payload };
        case SHOW_LOADER: 
            return {...state, loading: true};
        case HIDE_LOADER: 
            return {...state, loading: false};
        default: return state
    }
};

export const getStuff = () => ({
    type: REQUEST_STUFF
});

export function* stuffWatcher() {
    yield takeEvery(
        REQUEST_STUFF,
        fillStuff )
};

const showLoader = () => ({
    type: SHOW_LOADER
});

const hideLoader = () => ({
    type: HIDE_LOADER
});

function* fillStuff() {
    yield put(showLoader());
    const payload = yield call(fetchStuff);
    yield put({ type: FETCH_STUFF, payload });
    yield put(hideLoader());
};
