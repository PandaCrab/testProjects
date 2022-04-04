import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_STUFF, REQUEST_STUFF } from './modules/stuffReducer';
import { showLoader, hideLoader } from './modules/globalReducer';
import { POST_DATA } from './modules/dataReducer';
import { personInfo } from '../Components/data';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_STUFF, sagaWorker)
};

function* sagaWorker() {
    yield put(showLoader());
    const payload = yield call(getStuff);
    yield put({ type: FETCH_STUFF, payload });
    yield put(hideLoader());
};

async function getStuff() {
    const response = await fetch('https://demo3147501.mockable.io/');
    const json = await response.json();
    return json.products;
};
