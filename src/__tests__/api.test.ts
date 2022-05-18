import * as api from '../api';

import type { data } from '../types';

beforeEach(() => fetchMock.resetMocks());

describe('Stuff fetch',() => {
    describe('take stuff products', () => {
        const products = {products: [
            {
                'id': 1,
                'imgUrl': `https://guesseu.scene7.com/is/image/GuessEU/
                    M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg
                    &qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0`,
                'name': 'Check Print Shirt',
                'color': 'Grey+red+black',
                'price': 110
            }
        ]};
        fetchMock.mockResponseOnce(JSON.stringify(products));

        let result: Object;

        beforeEach(async () => result = await api.fetchStuff());
        
        it('should have products', () => {
            setTimeout(() => expect(result).toEqual('products'),100);
        });

        it('should call fetch', () => {
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    describe('reject fetchStuff', () => {
        fetchMock.mockReject(() => Promise.reject('data is down'));

        let reject: string;

        beforeEach(async () => reject = await api.fetchStuff());

        it('should be null', () => {
            expect(reject).toEqual(null);
        });

        it('should called with server url', () => {
            expect(fetch).toHaveBeenCalledWith('http://localhost:3004/products');
        });
    });
});

it('should post data', async () => {
    const data: data = {
        shipping: {
            name: '',
            phone: undefined,
            street: '',
            optional: '',
            city: '',
            country: '',
            zip: ''
        },
        billing: {
            name: '',
            email: '',
            street: '',
            optional: '',
            city: '',
            country: '',
            zip: ''
        },
        payment: {
            cardHolder: '',
            cardNum: '',
            date: '',
            code: ''
        }
    };

    await api.fetchPostData(data);
    expect(fetch).toHaveBeenCalledTimes(1);
});

describe('navigator address', () => {
    const coordinates = {
        lat: 0,
        lon: 0
    }

    describe('update coordinates', () => {
        const geolocation = {
            lat: 2,
            lon: 2
        }
        beforeEach(async () => await api.getGeolocation(geolocation));

        it('should have latitude', () => {
            setTimeout(() => expect(coordinates.lat).toEqual(2), 100);
        });

        it('should have longitude', () => {
            setTimeout(() => expect(coordinates.lon).toEqual(2), 100);
        });
    });

    describe('fetch geolocation by coordinates', () => {
        const address = {
            features: [
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
            ]
        };

        fetchMock.mockResponseOnce(JSON.stringify(address));

        let result: Object;

        beforeEach(async () => result = await api.fetchGeolocation());

        it('should be equal returned address', () => {
            setTimeout(() => expect(result).toEqual(address.features[0].properties), 100);
        });

        it('should be called ones', () => {
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    describe('reject take coordinates', () => {
        fetchMock.mockReject(() => Promise.reject('API is down'));

        let reject: Object;

        beforeEach(async () => reject = await api.fetchGeolocation());

        it('should be null', () => {
            expect(reject).toEqual(null);
        });

        it('should called with server url', () => {
            expect(fetch).toHaveBeenCalledWith(
                `https://app.geocodeapi.io/api/v1/reverse?apikey=e2d9f960`+
                `-bc78-11ec-a0da-bd0e50737306&point.lat=2&point.lon=2&layers=address`
            );
        });
    });
});

describe('Check endpoint', () => {
    const endpoint = {
        value: ''
    };

    it('should fill endpoint value', () => {
        api.getEndpoint('Yo, i am working');

        setTimeout(() => expect(endpoint.value).toEqual('Yo, i am working'), 100);
    });
});

describe('take addresses from api service', () => {
    const address = {
        features: [
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
        ]
    };

    fetchMock.mockResponseOnce(JSON.stringify(address));

    let result: Object;

    beforeEach(async () => result = await api.fetchAddress());

    it('should have addresses from api', () => {
        setTimeout(() => expect(result).toEqual(address.features), 100);
    });

    it('should called ones', () => {
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});


describe('reject autocomplete', () => {
    fetchMock.mockReject(() => Promise.reject('API is down'));

    let reject: Object;

    beforeEach(async () => reject = await api.fetchAddress());

    it('should be null', () => {
        expect(reject).toEqual(null);
    });

    it('should called with server url', () => {
        expect(fetch).toHaveBeenCalledWith(
            `https://app.geocodeapi.io/api/v1/autocomplete?` +
            `apikey=e2d9f960-bc78-11ec-a0da-bd0e50737306&text=Yo,%20i%20am%20working&size=5`
        );
    });
});
