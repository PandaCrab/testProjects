const url = 'http://localhost:3004';
const apiKey = 'e2d9f960-bc78-11ec-a0da-bd0e50737306';
const addressApi = `https://app.geocodeapi.io/api/v1/`;

//Need write method to working correct
const fetchFunc = (url, method, data) => {
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
export const fetchPostData = (data) => fetchFunc(url+'/personInfo', "POST", data);

//fetch products in backet
export const fetchStuff = async() => {
    try {
        const response = await fetchFunc(url+'/products', 'GET');
        const json = await response.json();
        return json;
    } catch(errors) {
        alert('Oops, something wrong')
    };
};

//fetch by coordinates
let coordinates;
export const getGeolocation = (geolocation) => {
    coordinates = geolocation
};

export const fetchGeolocation = async() => {
    try {
        const response = await fetchFunc(
            addressApi+`reverse?apikey=${apiKey}&point.lat=${coordinates.lat}&point.lon=${coordinates.lon}&layers=address`,
            'GET'
        );
        const json = await response.json();
        return json.features[0].properties;
    } catch(errors) {
        alert(`Can't take geolocation`);
    };
};

//fetch by input
const endpoint = {};
export const getEndpoint = (addressInput) => {
    if (addressInput.length > 0) {
        endpoint.value = addressInput
    }
};

export const fetchAddress = async () => {
    try {
        const response = await fetchFunc(
            addressApi+`autocomplete?apikey=${apiKey}&text=${endpoint.value.replace(/\s/g, '%20')}&size=5`,
            'GET');
        const json = await response.json();
        return json.features;
    } catch(errors) {
        alert('Sorry, seems somthing broken')
    };
};
