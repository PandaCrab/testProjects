import { takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_STUFF, REQUEST_STUFF } from './modules/stuffReducer';
import { showLoader, hideLoader } from './modules/globalReducer';
import { REQUEST_DATA, dataSelector} from './modules/dataReducer';

export function* sagaWatcher() {
    yield takeEvery(
        REQUEST_STUFF,
        sagaWorker )
};

function* sagaWorker() {
    yield put(showLoader());
    const payload = yield call(getStuff);
    yield put({ type: FETCH_STUFF, payload });
    yield put(hideLoader());
};

export function* dataSender() {
    yield takeEvery(REQUEST_DATA, postData);
};

function* postData() {
    const data = yield select(dataSelector)
    yield call(sendData, data)
}

async function getStuff() {
    const response = await fetch('https://624d3b89d71863d7a814e6c2.mockapi.io/shopping/stuff');
    const json = await response.json();
    return json[0].products;
};

function sendData(data) {
    return fetch('https://624d3b89d71863d7a814e6c2.mockapi.io/shopping/info', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },       
        body: JSON.stringify(data)
    }).then(
            res => res.json()
        ).then(json => console.log(json))
};
