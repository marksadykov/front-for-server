export const config = {
    url: 'http://localhost:8080',
    upload: '/upload',
    download: '/download'
}

function query (method, body) {
    if (method === 'GET') {
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    }
    if (method === 'POST') {
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: body
        }
    }
}

export default async function request(method, type, body = '', param = '') {
    const endPoint = (type === config.upload) ? config.upload : config.download;
    const id = (param === '') ? '' : `/${param}`;

    let response = await fetch(config.url + endPoint + id, query(method, body));
    return await response.json();
}

