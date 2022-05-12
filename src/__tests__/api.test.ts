import * as api from '../api';

import type { data } from '../types';

beforeEach(() => fetchMock.resetMocks());

describe('Stuff fetch',() => {
    it('should take stuff products', async () => {
        const products = {products: [
            {
                "id": 1,
                "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                "name": "Check Print Shirt",
                "color": "Grey+red+black",
                "price": 110
            }
        ]};
        fetchMock.mockResponseOnce(JSON.stringify(products));

        const result = await api.fetchStuff();
        expect(result).toEqual(products);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should show error, when reject', async () => {
        fetchMock.mockReject(() => Promise.reject('data is down'));

        const reject = await api.fetchStuff();

        expect(reject).toEqual('Oops, something wrong');
        expect(fetch).toHaveBeenCalledWith('http://localhost:3004/products')
    });
});

it('should post data', async () => {
    const data: data = {
        shipping: {
            name: '',
            phone: undefined,
            email: '',
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
            cardNum: 0,
            date: 0,
            code: 0
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

    it('should update coordinates', async () => {
        const geolocation = {
            lat: 2,
            lon: 2
        }
        api.getGeolocation(geolocation);

        setTimeout(() => {
            expect(coordinates.lat).toEqual(2);
            expect(coordinates.lon).toEqual(2)}, 100);
    });

    it('should fetch geolocation by coordinates', async () => {
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

        const result = await api.fetchGeolocation();
        expect(result).toEqual(address.features[0].properties);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should show error, when reject', async () => {
        fetchMock.mockReject(() => Promise.reject('API is down'));

        const reject = await api.fetchGeolocation();

        expect(reject).toEqual(`Can't take geolocation`);
        expect(fetch).toHaveBeenCalledWith(
            'https://app.geocodeapi.io/api/v1/reverse?apikey=e2d9f960-bc78-11ec-a0da-bd0e50737306&point.lat=2&point.lon=2&layers=address'
            );
    });
});

describe('autocomplete', () => {
    const endpoint = {
        value: ''
    };

    it('should fill endpoint value', () => {
        api.getEndpoint('Yo, i am working');

        setTimeout(() => expect(endpoint.value).toEqual('Yo, i am working'), 100);
    });

    it('should take addresses from api service', async () => {
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

        const result = await api.fetchAddress();
        expect(result).toEqual(address.features);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should show error, when reject', async () => {
        fetchMock.mockReject(() => Promise.reject('API is down'));

        const reject = await api.fetchAddress();

        expect(reject).toEqual(`Sorry, seems somthing broken`);
        expect(fetch).toHaveBeenCalledWith(
            'https://app.geocodeapi.io/api/v1/autocomplete?apikey=e2d9f960-bc78-11ec-a0da-bd0e50737306&text=Yo,%20i%20am%20working&size=5'
            );
    });
});
