import axios from "@/api/index.js"

// import Qs from 'qs'

//登录
export const login = (phone, password, keep) => {
    return axios.get("/users/login", { params: { phone, password, keep } })
}
//查询用户名是否存在
export const checkPhone = (phone) => {
    return axios.get("/users/checkname", { params: { phone } })
}
//注册
export const reg = (phone, password) => {
    return axios.post("/users/reg", { phone, password });

}
//获取二级例表的数据
export const getGoodsList = () => {
    return axios.get("/cart/getlist")
}

//查询某个用户购物车详情
export const getCartList = (uid) => {
    return axios.get("/cart/getgoods", { params: { uid } })
}

//增加商品
export const add = (uid, listId) => {
    return axios.get("/cart/add", { params: { uid, listId } })
}
//删除商品
export const del = (listId, uid) => {
    return axios.delete("/cart/del", { params: { listId, uid } })
}
//清空购物车
export const clear = (uid) => {
    return axios.delete("/cart/clear", { params: { uid } })
}
//修改数量
export const updateNum = (listId, uid, num) => {
    return axios.get("/cart/update", { params: { listId, uid, num } })
}