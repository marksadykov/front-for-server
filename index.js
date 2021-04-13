import request, {config} from "./requests/fetch.js";

const sendButton = document?.getElementById('file');
sendButton?.addEventListener('change', (event) => {
    event.preventDefault();

    const body = new FormData()
    body.append('file', sendButton.files[0])
    body.append('filename', sendButton.files[0].name)

    const response = request('POST', config.upload, body)
    console.log('response', response);
});

const getFile = document?.getElementById('getFile');
getFile?.addEventListener('click', (event) => {
    event.preventDefault();
    const idFile = document?.getElementById('idFile');

    const response = request('GET', config.download, '', idFile.value)
    console.log('response', response);
});

