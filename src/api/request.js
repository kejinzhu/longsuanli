import Axios from 'axios';
import Qs from 'qs';
// import store from '@/store';

// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
let baseURL;
if (process.env.NODE_ENV === 'development') {
  baseURL = '/api';
} else {
  baseURL = 'http://api-sz-functest-dpool-cloud.qubtc.com/api';
}

const service = Axios.create({
  method: 'post',
  baseURL,
  // 允许在向服务器发送前，修改post请求数据
  transformRequest: [data => Qs.stringify(data)],
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  params: {},
  // 负责 `params` 序列化的函数
  paramsSerializer: params => Qs.stringify(params),
  data: {},
  timeout: 150000,
  withCredentials: true,
});

// service.interceptors.response.use(
//   (response) => {
//     if (response.data.status === '-1') {
//       // 没有登录
//       // console.log(window.location.href.indexOf('?from='));
//       // return;
//       if (window.location.href.indexOf('?from=') !== -1) {
//         const invite = window.location.href.split('?from=')[1];
//         // console.log(invite);
//         // return;
//         store.commit('user/LOGIN_OUT', `/registerPhone?from=${invite}`);
//       } else {
//         store.commit('user/LOGIN_OUT', '/login');
//       }
//     }
//     return response;
//   },
//   error => Promise.reject(error),
// );
export default service;
