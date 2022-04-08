export const fetchPostData = (data) => 
    fetch('https://624d3b89d71863d7a814e6c2.mockapi.io/shopping/info', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },       
        body: JSON.stringify(data)
    });

export const fetchStuff = async() => {
    const response = await fetch('https://624d3b89d71863d7a814e6c2.mockapi.io/shopping/stuff');
    const json = await response.json();
    return json[0].products;
};
