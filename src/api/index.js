import axios from 'axios';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var service = axios.create({
    baseURL: "http://47.115.17.150:2020",  //所有的请求都会 带上 /api
    "Content-Type": "application/x-www-form-urlencoded",
    "content-type": "application/json",


    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
    // timeout: 5000
})
// //请求拦截器
service.interceptors.request.use((config) => {
    // if (sessionStorage.getItem("token")) {
    //     config.headers["token"] = sessionStorage.getItem("token");
    // }
    //登录完后再次访问要在请求头带上token


    return config;
})
// //响应拦截器
service.interceptors.response.use((res) => {
    // if (res.data.status === -1) {//token验证失败跳转到登录页面
    //     window.location.href = "/login"
    // }

    return res.data
})

export default service;