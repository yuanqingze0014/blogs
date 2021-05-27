import axios from 'axios';
import { notification, message } from 'antd'
import { getCookie } from "../utils/myCookie"
// import NProgress from 'nprogress';

const instance = axios.create({
  timeout: 1000,
  baseURL: 'http://192.168.1.73:7001/'
  // baseURL: process.env.NODE_ENV === 'production' ? 'https://exam.jasonandjay.com/' : 'http://120.53.2.185'
  // baseURL: 'https://exam.jasonandjay.com/'

})

instance.interceptors.request.use((request: any) => {
  // request.headers['authorization'] = window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : '';
  request.headers['authorization'] = getCookie('token') ? getCookie('token') : '';
  return request;
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response: any) => {
  // NProgress.done();
  if (response.data.code === 200) {
    return response;
  } else if (response.data.code === 500) {
    notification.warn({
      message: response.data.message,
    })
    return Promise.resolve({ data: { code: undefined } })
  } else {
    notification.warn(response.statusText)
    return Promise.resolve({ data: { code: undefined } })
  }
}, error => {

  if (error) {
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      message.warn('请检查网络再重新连接')
      return Promise.resolve({ data: { code: undefined } })
    } else if (error.response) {
      const code: number | undefined = error.response.status;

      switch (code) {
        case 401:
          // window.location.replace('#/Login');
          return Promise.reject('401 权限不够');
        case 404:
          // window.location.pathname = '#/NoFound';
          return Promise.reject('404 找不到页面');
        case 500:
          // window.location.pathname = `${encodeURI('#')}/NoServer`;
          return Promise.reject('500 服务器崩溃了');
        default:
          // window.location.pathname = '/NoServer';
          return Promise.reject('其他错误');
      }
    } else {
      // notification.warn({
      //   message: error.toString(),
      // })
      message.warn('您的操作过于频繁')
      return Promise.resolve({ data: { code: undefined } });
    }

  } else {
  }

})

export default instance