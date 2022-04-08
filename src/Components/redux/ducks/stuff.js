import { takeEvery, put, call } from 'redux-saga/effects';

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

export const getStuff = () => {
    return {
        type: REQUEST_STUFF
    };
};

export function* stuffWatcher() {
    yield takeEvery(
        REQUEST_STUFF,
        fillStuff )
};

const showLoader = () => {
    return {
        type: SHOW_LOADER
    };
};

const hideLoader = () => {
    return {
        type: HIDE_LOADER
    };
};

function* fillStuff() {
    yield put(showLoader());
    const payload = yield call(fetchStuff);
    yield put({ type: FETCH_STUFF, payload });
    yield put(hideLoader());
};

const fetchStuff = async() => {
    const response = await fetch('https://624d3b89d71863d7a814e6c2.mockapi.io/shopping/stuff');
    const json = await response.json();
    return json[0].products;
};
