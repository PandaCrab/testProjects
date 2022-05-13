import configureStore from 'redux-mock-store'

import addressReducer, {
    SET_GEOLOCATION_COORDINATES,
    FETCH_NAVIGATOR_ADDRESS,
    SEARCH_ADDRESS,
    FETCH_ADDRESS,
    takeGeolocation,
    fillAddressInput,
} from '../../../redux/ducks/address';

import { addressState } from '../../../types';

describe('Stuff reducer', () => {
    it('should have initial state', () => {
        const action: { type: string} = {type: 'dummy_action'};
        const initialState: addressState = {
            addressInput: '',
            addresses: [],
            geolocation: {
                lat: 0,
                lon: 0
            },
            navigatorAddress: null
        };
        expect(addressReducer(undefined, action)).toEqual(initialState);
    });

    it('should fill coordinates', () => {
        const action = {type: SET_GEOLOCATION_COORDINATES, payload: { lat: 21.2, lon: 22.1 }};
        const expectedState: addressState = {
            addressInput: '',
            addresses: [],
            geolocation: {
                lat: 21.2,
                lon: 22.1
            },
            navigatorAddress: null
        };

        expect(addressReducer(undefined, action)).toEqual(expectedState);
    });

    it('should fill address from navigator', () => {
        const action = {type:FETCH_NAVIGATOR_ADDRESS, payload: { 
            name: '7A heroes of Ukraine',
            locality: 'Lokhvits`a',
            country: 'Ukraine'
         }};
        const expectedState: addressState = {
            addressInput: '',
            addresses: [],
            geolocation: {
                lat: 0,
                lon: 0
            },
            navigatorAddress: {
            street: '7A heroes of Ukraine',
            city: 'Lokhvits`a',
            country: 'Ukraine'
            }
        };

        expect(addressReducer(undefined, action)).toEqual(expectedState);
    });

    it('should fill addressInput', () => {
        const action = {type:SEARCH_ADDRESS, payload: { text: '7A heroes of Ukraine' }};
        const expectedState: addressState = {
            addressInput: '7A heroes of Ukraine',
            addresses: [],
            geolocation: {
                lat: 0,
                lon: 0
            },
            navigatorAddress: null
        };

        expect(addressReducer(undefined, action)).toEqual(expectedState)
    });

    it('should fill addresses from autocomplete', () => {
        const action = {type:FETCH_ADDRESS, payload: { addresses: [{
                    properties: {
                        id: 12234,
                        name: '7a heros of Ukraine',
                        locality: 'Lokvyts`a',
                        country: 'Ukraine',
                        label: '7a heros of Ukraine, Lokhvitsy`a, Ukraine'
                    }
                },
                {
                    properties: {
                        id: 3552,
                        name: '35 Ivana Sirka',
                        locality: 'Sumy',
                        country: 'Ukraine',
                        label: '35 Ivana Sirka, Sumy, Ukraine'
                    }
                }
            ]}
        };
        const expectedState: addressState = {
            addressInput: '',
            addresses: [
                {
                    properties: {
                        id: 12234,
                        name: '7a heros of Ukraine',
                        locality: 'Lokvyts`a',
                        country: 'Ukraine',
                        label: '7a heros of Ukraine, Lokhvitsy`a, Ukraine'
                    }
                },
                {
                    properties: {
                        id: 3552,
                        name: '35 Ivana Sirka',
                        locality: 'Sumy',
                        country: 'Ukraine',
                        label: '35 Ivana Sirka, Sumy, Ukraine'
                    }
                }
            ],
            geolocation: {
                lat: 0,
                lon: 0
            },
            navigatorAddress: null
        };

        expect(addressReducer(undefined, action)).toEqual(expectedState);
    });
});

describe('Address actions', () => {
    const mockStore = configureStore();
    const store = mockStore();

    beforeEach(() => store.clearActions());

    it('should dispatch for coordinates action', () => {
        const expectedAction = [{
            type: SET_GEOLOCATION_COORDINATES,
            payload: {
                lat: 21.2,
                lon: 22.1
            }
        }];

        store.dispatch(takeGeolocation(21.2, 22.1));
        expect(store.getActions()).toEqual(expectedAction);
    });

    it('should dispatch capturing input change action', () => {
        const expectedAction = [{
            type: SEARCH_ADDRESS,
            payload: { text: 'kolotushkina' }
        }];

        store.dispatch(fillAddressInput('kolotushkina'));
        expect(store.getActions()).toEqual(expectedAction);
    });
});
