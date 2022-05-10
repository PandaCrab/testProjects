import type { data } from "./types";

const url = 'http://localhost:3004';
const apiKey = 'e2d9f960-bc78-11ec-a0da-bd0e50737306';
const addressApi = `https://app.geocodeapi.io/api/v1/`;

//Need write method to working correct
const fetchFunc = (url: string, method: string, data?: data) => {
    if (method === 'GET') return fetch(url)
    if (method === 'POST') fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
};

//fetch POST of personal info for billing to data
export const fetchPostData = (data: data) => fetchFunc(url+'/personInfo', "POST", data);

//fetch products in backet
export const fetchStuff = async() => {
    try {
        const response = await fetchFunc(url+'/products', 'GET');
        const json = await response.json();
        return json;
    } catch(errors) {
        console.log('Oops, something wrong');
    };
};

//fetch by coordinates
const coordinates: {lat: number, lon: number} = {
    lat: 0,
    lon: 0
};
export const getGeolocation = (geolocation: {lat: number, lon: number}) => {
    coordinates.lat = geolocation.lat;
    coordinates.lon = geolocation.lon;
};

export const fetchGeolocation: () => Promise<{}> = async() => {
    try {
        const response = await fetchFunc(
            addressApi+`reverse?apikey=${apiKey}&point.lat=${coordinates.lat}&point.lon=${coordinates.lon}&layers=address`,
            'GET'
        );
        const json = await response.json();
        return json.features[0].properties;
    } catch(errors) {
        console.log(`Can't take geolocation`);
    };
};

//fetch by input
const endpoint: {value: string} = {value: ''};
export const getEndpoint = (addressInput: string) => {
    if (addressInput.length > 0) {
        endpoint.value = addressInput;
    }
};

export const fetchAddress: () => Promise<{}> = async () => {
    try {
        const response = await fetchFunc(
            addressApi+`autocomplete?apikey=${apiKey}&text=${endpoint.value.replace(/\s/g, '%20')}&size=5`,
            'GET');
        const json = await response.json();
        return json.features;
    } catch(errors) {
        console.log('Sorry, seems somthing broken');
    };
};
