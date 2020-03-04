import React from "react"
import Loadable from "react-loadable"
let Home = Loadable({
    loader: () => import("@/component/home"),
    loading: () => <div>loading....</div>
})
let Category = Loadable({
    loader: () => import("@/component/category"),
    loading: () => <div>loading....</div>
})
let Shop = Loadable({
    loader: () => import("@/component/shop"),
    loading: () => <div>loading....</div>
})
let User = Loadable({
    loader: () => import("@/component/user"),
    loading: () => <div>loading....</div>
})
let List = Loadable({
    loader: () => import("@/component/list/index.js"),
    loading: () => <div>loading....</div>
})
export const routes = [
    {
        path: "/home",
        component: Home,
        i: "iconfont iconzhuye",
        name: "首页"
    },
    {
        path: "/category",
        component: Category,
        i: "iconfont iconfenlei",
        name: "分类"
    },
    {
        path: "/shop",
        component: Shop,
        i: "iconfont icongouwuche",
        name: "购物车"
    },
    {
        path: "/user",
        component: User,
        i: "iconfont icongerenzhongxin",
        name: "个人中心"
    },
]
export const subRoutes = [
    {
        path: "/category/list",
        component: List,
    },

]