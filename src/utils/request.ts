import axios from "axios";
import NProgress from 'nprogress';
import { notification, message } from 'antd'
// import useStore from "../context/useStore";
import storage from '@/utils/storage.ts'
import { getCookie } from "./cookie";
// const {Test} = useStore()
const request = axios.create();
// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
request.defaults.timeout = 2500;
// setInterval(() => {
//   request.defaults.baseURL = JSON.parse(sessionStorage.getItem("url") as any);
// }, 1000);

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // config.headers['Authorization'] = storage.get("Authorization") : ''
    config.headers['Authorization'] = getCookie('Authorization') ? getCookie('Authorization') : '';
    // 在发送请求之前做些什么
    return config.data;
  },
  function (error) {
    // 对请求错误做些什么
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
      notification.warn({
        message: error.toString(),
      })
      message.warn('您的操作过于频繁')
      return Promise.resolve({ data: { code: undefined } });
    }
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request;
