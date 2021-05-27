import request from '../utils/request';

export const regeditApi = (params:any) =>{
   return request.post('/blogs/registry',params)
}

export const verifyCode = () =>{
    return request.get('/blogs/randomCode')
}