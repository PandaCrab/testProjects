import { store } from './redux/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type coordinates = {
    lat: number,
    lon: number
}

export type endpoint = {
    value: string
}

export type addressState = {
    addressInput: string,
    addresses: any,
    geolocation: {
        lat: number,
        lon: number
    },
    navigatorAddress: any
}

export type postData = {
    name: string,
    phone: number,
    email: string,
    street: string,
    optional: string,
    city: string,
    country: string,
    zip: number,
    cardHolder: string,
    cardNum: number,
    date: number,
    code: number
};

export type addressAutocomplete = {
    street?: string,
    city?: string,
    country?: string
}
