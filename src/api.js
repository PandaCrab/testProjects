const urlStuff = 'http://localhost:3004/products';
const urlInfo = 'http://localhost:3004/personInfo';
const addressApi = 'https://app.geocodeapi.io/api/v1/autocomplete?apikey=YOUR-API-KEY&text=666%20Fifth%20Ave&size=5'

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

export const fetchPostData = (data) => fetchFunc(urlInfo, "POST", data);

export const fetchStuff = async() => {
    try {
        const response = await fetchFunc(urlStuff, 'GET');
        const json = await response.json();
        return json;
    } catch(errors) {
        alert('Oops, something wrong')
    };
};

export const fetchAddress = async () => {
    try {
        const response = await fetchFunc(addressApi, 'GET')
        const json = await response.json()
        return json;
    } catch(errors) {
        alert('Sorry, seems somthing broken')
    }
}
