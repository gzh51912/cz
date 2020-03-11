import React, { Component } from 'react'
import "./shop.scss"
import Title from "@/component/title/index.js"
import NoCart from "@/component/shop/noCart.js"
import Recommend from "@/component/recommend/index.js"
import { Checkbox } from 'antd-mobile';
import actionCreator from "./actionCreator"
import { connect } from "react-redux"
import EditState from './editState'
import FinishState from './finishState'
import { clear, del } from "@/api/request.js"
import HOC from "@/component/hoc/index.js"
// import store from "@/store/index.js"

let mapState = (state) => {
    return {
        list: state.cart.list.data,
        msg: state.cart.list.msg,
        allCount() { //总的数量
            var s = 0;
            state.cart.list.data.forEach((item) => {
                if (item.checked === true) {
                    s += item.num;
                }
            })
            return s;
        },
        total() {
            var money = 0;
            state.cart.list.data.forEach((item) => {
                if (item.checked === true) {
                    money += item.num * item.originalPrice;
                }
            })
            return money;
        },
        faqx() {
            return state.cart.list.data.every((item) => {
                return item.checked == true;
            })
        }
    }
}
@connect(mapState, actionCreator)
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dj: true,
        }
    }
    changedj = () => {
        this.setState({
            dj: !this.state.dj,
        });
    }
    shouldComponentUpdate(nextprops, nextstate) {//是否更新
        if (this.props.list !== nextprops.list || this.state !== nextstate) {
            return true
        } else {
            return false
        }
    }
    componentDidMount() {
        if (sessionStorage.getItem("uid")) {
            this.props.checkAtion(sessionStorage.getItem("uid"));
        }
    }
    checkAll = (e) => {
        e.persist();//访问e.target时处于异步操作中;解决掉警告
        this.props.checkAll(e.target.checked)
    }
    delete = (e) => {
        // 删一条删多条全删
        e.persist();
        if (e.target.innerText === "删除所选") {
            let result = this.props.list.every((item) => {
                return item.checked == true;//全部勾选即全删
            });
            //result为true 全删
            if (result === true) {
                clear(sessionStorage.getItem("uid")).then((res) => {
                    if (res.msg === "清空成功") {
                        this.props.clear()
                    }
                })
            } else if (result !== true) {
                //删一条或者删多条(给每个加上index,抛发动作要用到 过滤出勾选得)
                let resultA = []
                this.props.list.forEach((item, index) => {
                    if (item.checked == true) {
                        // 用数组去装这个索引
                        resultA.push(item.listId)
                        del(item.listId, item.uid).then((res) => {
                            // console.log(res)
                            if (res.msg === "删除成功") {
                                this.props.deleteAction(resultA);
                            }
                        })
                    }
                    console.log(resultA)
                })
            }
        }
    }
    render() {
        // console.log(this.props.list)
        return (<>
            <div className="big">
                <Title title="购物车" />
                <span className="dj" onClick={this.changedj}>{this.state.dj ? "编辑" : "完成"}</span>

                {/* 没有商品的时候显示nocart组件 */}
                {
                    this.props.msg === "有数据" ?
                        <>
                            {/* 编辑状态下的显示 */}
                            <div style={{ marginTop: "50px" }}>
                                {/* 显示编辑的时候显示 this.state.dj===true*/}
                                <EditState dj={this.state.dj} />
                                {/* 显示完成的时候显示 this.state.dj===false*/}
                                <FinishState dj={this.state.dj} />
                            </div>
                            {/* 推荐商品的组件 */}
                            <Recommend />
                            {/* 结算按钮 */}
                            <div className="bottom-bar">
                                <div className="select-info">
                                    <div className="checkbox-container">
                                        <div className="check-outer">
                                            <Checkbox onClick={this.checkAll} checked={this.props.faqx()}  >
                                                <span className="checkbox-on m-blue-checkbox-new">
                                                </span></Checkbox> </div>  </div>
                                    <span>已选 <i className="">{this.props.allCount()}</i> 件</span> </div>
                                {/* 点击的时候以下位置显示隐藏切换 */}
                                <div className="sum-info">
                                    <div className="desc" style={{ display: this.state.dj ? "block" : "none" }}>
                                        <p className="total-price">合计：<span><i>¥</i> <span>{this.props.total()}</span></span></p>
                                        <div className="delivery"> <article>应付总额不含运费</article> </div> </div>
                                    {/* 点击的时候这里 内容显示改变 有件数得时候背景是否高亮 */}
                                    <div className={this.state.dj ? this.props.total() ? "blue-btn" : "blue-btn btn-disabled" : this.props.total() ? "blue-btn edit-red" : "blue-btn btn-disabled"} onClick={this.delete}>{this.state.dj ? "现在结算" : "删除所选"}</div>  </div>

                            </div> </>
                        : <NoCart />
                }

            </div>

        </>)
    }
}
export default HOC(Shop);