import React, { Component } from 'react'
import "./user.scss"
import Title from "@/component/title/index.js"
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                ["地址管理", "我的优惠券", "优先购买码"],
                ["零售门店", "以旧换新", "常见问题", "服务支持"],
                ["意外碎屏保修服务", "延长保修服务", "协议政策", "资质证照"]
            ],
            top: [
                {
                    title: "全部订单",
                    i: "iconfont icondingdan"
                },
                {
                    title: "待付款",
                    i: "iconfont icondaifukuan"
                },
                {
                    title: "待收货",
                    i: "iconfont icondaishouhuo"
                },
                {
                    title: "售后",
                    i: "iconfont iconshouhouguanli"
                }
            ]
        }
    }
    tz = (e) => {//跳转登录
        if (e.target.innerText.includes(sessionStorage.getItem("phone"))) {
            sessionStorage.clear();
            this.props.history.push("/")
        } else {
            this.props.history.push("/login");
            sessionStorage.setItem("path", this.props.location.pathname)
        }
    }
    shouldComponentUpdate(nextprops, nextstate) {//是否更新
        if (this.props !== nextprops || this.state !== nextstate) {
            return true
        } else {
            return false
        }
    }
    render() {
        return (
            <div className="big">
                <Title title="个人中心" />
                <div className="content">
                    <div className="box-userinfo " >
                        <div className="avatar" >
                            <img src="https://static.smartisanos.cn/account/asset/img/default-user-avatar.png" alt="" />
                        </div> <span onClick={this.tz}>{sessionStorage.getItem("phone") ? sessionStorage.getItem("phone") + "点击退出" : "登录/注册"} </span>
                        <i>></i></div>
                    <ul className=" menu-list-parallel ">
                        {
                            this.state.top.map((item) => {
                                return <li key={item.i}>
                                    < a href="#">
                                        <i className={item.i}></i><span >{item.title}</span></a> </li>
                            })
                        }
                    </ul>

                    {
                        this.state.list.map((item) => {
                            return <ul className=" menu-list-vertical" key={item}>
                                {item.map((item) => {
                                    return <li className
                                        ="arrow-right-icon" key={item}> <a href="#">{item} <i>></i></a> </li>
                                })}
                            </ul>
                        })
                    }
                </div>
            </div>
        )
    }
}
