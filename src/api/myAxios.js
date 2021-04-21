import axios from 'axios'
import { message } from 'antd'
import qs from 'querystring'
import { BASE_URL } from '@/config';
import store from '@/redux/store'
import { deleteUserInfoAction } from '../redux/actions/login_action';



const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  // headers: { 'X-Custom-Header': 'foobar' }
});

instance.interceptors.request.use(config => {
  const { method, data } = config
  if (method === 'post') {
    // 如果后端对 post 请求的参数只做 urlencoded 解析，未做 json 解析
    if (data instanceof Object) {
      config.data = qs.stringify(data) // json 转 urlencoded
    }
  }
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  return response.data;
}, error => {
  if (error.response.status === 401) {
    message.error('身份已过期，请重新登录！', 1)
    store.dispatch(deleteUserInfoAction())
  } else {
    message.error(error.message, 1)
  }
  // return Promise.reject(error);
  return new Promise(() => { })  //中断 Promise
});

export default instance