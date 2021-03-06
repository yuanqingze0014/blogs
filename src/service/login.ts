import request from '../utils/request';

export const loginApi = (params: any) => {
    return request.post('/blogs/login', params)
}

export const verifyCode = () => {
    return request.get('/blogs/randomCode')
}

export const regeditApi = (params: any) => {
    return request.post('/blogs/registry', params)
}
