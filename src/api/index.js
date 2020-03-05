import axios from 'axios';

var service = axios.create({
    baseURL: '/hd',  //所有的请求都会 带上 /api
    "content-type": "application/json",
    timeout: 5000
})
// //请求拦截器
service.interceptors.request.use((config) => {
    // if (sessionStorage.getItem("token")) {
    //     config.headers["token"] = sessionStorage.getItem("token");
    // }//登录完后再次访问要在请求头带上token


    return config;
})
// //响应拦截器
service.interceptors.response.use((res) => {
    res.addHeader("Access-Control-Allow-Origin", "*");
    // if (res.data.status === -1) {//token验证失败跳转到登录页面
    //     window.location.href = "/login"
    // }
    return res
})

export default service;