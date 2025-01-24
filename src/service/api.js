import axios from "axios";

const send = async ({method='', path='', data={}, access_token=''} = {}) => {

}

const getApi = ({path='', access_token=''} = {}) => {
    return send({method: 'GET', path, access_token})
}

const putApi = ({path='', data={}, access_token=''} = {}) => {
    return send({method: 'PUT', path, data, access_token})
}

const postApi = ({path='', data={}, access_token=''} = {}) => {
    return send({method: 'POST', path, data, access_token})
}

const delApi = ({path='', data={}, access_token=''} = {}) => {
    return send({method: 'DELETE', path, data, access_token})
}

export {
    getApi,
    putApi,
    postApi,
    delApi
}