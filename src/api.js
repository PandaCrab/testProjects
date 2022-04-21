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

export const fetchPostData = (data) => fetchFunc(url+'/personInfo', "POST", data);

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
console.log(coordinates)

export const fetchGeolocation = async() => {
    try {
        const response = await fetchFunc(
            addressApi+`reverse?apikey=${apiKey}&point.lat=${coordinates.lat}&point.lon=${coordinates.lon}`,
            'GET'
        );
        const json = await response.json();
        console.log(json.features)
        return json.features[0].properties;
    } catch(errors) {
        alert(`Can't take geolocation`);
    };
};
//fetch by input
let endpoint = '';
export const getEndpoint = (addressInput) => {
    if (addressInput.length > 0) endpoint = addressInput
};
export const fetchAddress = async () => {
    try {
        const response = await fetchFunc(
            addressApi+`autocomplete?apikey=${apiKey}&text=${endpoint.replace(/\s/g, '%20')}&size=5`,
            'GET');
        const json = await response.json();
        return json.features;
    } catch(errors) {
        alert('Sorry, seems somthing broken')
    };
};
