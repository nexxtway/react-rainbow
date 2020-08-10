function processResponse(response) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json().then(data => ({
            status: response.status,
            data,
        }));
    }
    return response.json();
}

function makeRequest(config) {
    const { url, method, data } = config;
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return fetch(url, {
        method,
        body: JSON.stringify(data),
        headers,
    });
}

export default function submitMessage(data) {
    return makeRequest({
        url: `${process.env.REACT_APP_BASE_API_URL}/contactus`,
        method: 'POST',
        data,
    }).then(res => processResponse(res));
}
