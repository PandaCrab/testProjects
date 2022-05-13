import configureStore from 'redux-mock-store';
import { takeEvery } from 'redux-saga/effects';

import dataReducer, {
    FILL_SHIPPING_DATA,
    FILL_BILLING_DATA,
    FILL_PAYMENT_DATA,
    fillShippingData,
    fillPaymentData,
    fillBillingData,
    dataWatcher,
    postData
} from '../../../redux/ducks/data';

describe('data reducer', () => {
    it('should have initial state', () => {
        const action = { type: 'dummy_action', payload: {} };
        const initialState = {};

        expect(dataReducer(undefined, action)).toEqual(initialState);
    });

    it('should fill shipping data from submit', () => {
        const action = {type: FILL_SHIPPING_DATA, payload: {
            name: 'vasya',
            phone: '78005553535',
            street: 'kolotushkina',
            optional: '',
            city: 'laplandia',
            country: 'United States',
            zip: '223412'
        }};

        const expectedState = {
            shipping: {
                name: 'vasya',
                phone: '78005553535',
                street: 'kolotushkina',
                optional: '',
                city: 'laplandia',
                country: 'United States',
                zip: '223412'
            }
        };

        expect(dataReducer(undefined, action)).toEqual(expectedState);
    });

    it('should fill billing data from submit', () => {
        const action = {type: FILL_BILLING_DATA, payload: {
            name: 'vasya',
            email: 'kolotushkin@mulo.com',
            street: 'kolotushkina',
            optional: '',
            city: 'laplandia',
            country: 'United States',
            zip: '223412'
        }};

        const expectedState = {
            billing: {
                name: 'vasya',
                email: 'kolotushkin@mulo.com',
                street: 'kolotushkina',
                optional: '',
                city: 'laplandia',
                country: 'United States',
                zip: '223412'
            }
        };

        expect(dataReducer(undefined, action)).toEqual(expectedState);
    });

    it('should fill payment data from submit', () => {
        const action = {type: FILL_PAYMENT_DATA, payload: {
            cardHolder: 'vasya',
            cardNum: '7800009990099',
            date: '27/33',
            code: '321'
        }};

        const expectedState = {
            payment: {
                cardHolder: 'vasya',
                cardNum: '7800009990099',
                date: '27/33',
                code: '321'
            }
        };

        expect(dataReducer(undefined, action)).toEqual(expectedState);
    });
});

describe('Data actions', () => {
    const mockStore = configureStore();
    const store = mockStore();

    beforeEach(() => store.clearActions());

    const testData = {
        name: 'vasya',
        street: 'kolotushkina',
        city: 'laplandia',
        country: 'United States',
        zip: '223412'
    }

    it('should dispatch filling shipping action', () => {
        const expectedAction = [{
            type: FILL_SHIPPING_DATA,
            payload: testData
        }];

        store.dispatch(fillShippingData(testData));
        expect(store.getActions()).toEqual(expectedAction);
    });

    it('should dispatch filling billing action', () => {
        const expectedAction = [{
            type: FILL_BILLING_DATA,
            payload: testData
        }];

        store.dispatch(fillBillingData(testData));
        expect(store.getActions()).toEqual(expectedAction);
    });

    it('should dispatch filling payment action', () => {
        const expectedAction = [{
            type: FILL_PAYMENT_DATA,
            payload: testData
        }];

        store.dispatch(fillPaymentData(testData));
        expect(store.getActions()).toEqual(expectedAction);
    });
});

describe('Data sagas', () => {
    describe('dataWatcher', () => {
        const gen = dataWatcher();

        it('should wait for every REQUEST_DATA and call postData', () => {
            expect(gen.next().value)
                .toEqual(takeEvery('data/REQUEST_DATA', postData));
        });

        it('should be done on next iteration', () => {
            expect(gen.next().done).toBeTruthy();
        });
    });
});
