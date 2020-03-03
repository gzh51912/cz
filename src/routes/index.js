import React from "react"
import Loadable from "react-loadable"

let Appliance = Loadable({
    loader: () => import("@/component/category/components/appliance"),
    loading: () => <div>loading....</div>
})
let Breath = Loadable({
    loader: () => import("@/component/category/components/breath"),
    loading: () => <div>loading....</div>
})
let Computer = Loadable({
    loader: () => import("@/component/category/components/computer"),
    loading: () => <div>loading....</div>
})
let Phones = Loadable({
    loader: () => import("@/component/category/components/phones"),
    loading: () => <div>loading....</div>
})
let Shoes = Loadable({
    loader: () => import("@/component/category/components/shoes"),
    loading: () => <div>loading....</div>
})
let Fittings = Loadable({
    loader: () => import("@/component/category/components/fittings"),
    loading: () => <div>loading....</div>
})
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
        path: "/category/phones",
        component: Phones,
        name: '手机数码'
    },
    {
        path: "/category/fittings",
        component: Fittings,
        name: '官方配件'
    },
    {
        path: "/category/shoes",
        component: Shoes,
        name: '鞋包服饰'
    },
    {
        path: "/category/breath",
        component: Breath,
        name: '畅呼吸'
    },
    {
        path: "/category/appliance",
        component: Appliance,
        name: '家用电器'
    },
    {
        path: "/category/computer",
        component: Computer,
        name: '电脑办公'
    },
]