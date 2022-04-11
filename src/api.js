const url = 'https://demo3147501.mockable.io';

const fetchFunc = (url, method, data) => {
    if (method === 'GET') return fetch(url);
    if (method === 'POST') fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
};

export const fetchPostData = (data) => fetchFunc(url, "POST", data);

export const fetchStuff = async() => {
    try {
        const response = await fetchFunc(url, 'GET');
        const json = await response.json();
        return json[0].products;
    } catch(errors) {
        alert('Oops, something wrong')
    }
};
