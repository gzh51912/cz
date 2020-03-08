import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile';
import actionCreator from "./actionCreator"
import { connect } from "react-redux"
import { updateNum } from "@/api/request.js"
import { Toast } from 'antd-mobile';

class FinishState extends Component {
    //更新某商品得num
    changeNum = (index, max, num, listId, e) => {
        let { addAction: add, reducerAction: reducer } = this.props;
        e.persist();
        let uid = sessionStorage.getItem("uid") * 1;
        if (e.target.innerText === "+") {
            //加
            if (num < max) {
                updateNum(listId, uid, num * 1 + 1).then((res) => {
                    if (res.msg === "修改成功") {
                        add(index);
                    }
                })
            } else if (num === max) {
                Toast.info('已经是最大库存量了~', 2);
            }
        } else if (e.target.innerText === "-") {
            if (num > 1) {
                updateNum(listId, uid, num - 1).then((res) => {
                    if (res.msg === "修改成功") {
                        reducer(index);//抛发动作
                    }
                })
            } else if (num === 1) {
                Toast.info("不能再减了喔~", 1);
            }
        }
    }
    render() {
        // console.log(this.props);
        let { dj, cart, changeCheck } = this.props;
        return (
            <>
                {
                    dj === false ? cart.list.data.map((item, index) => {
                        return <div className="group" key={item.listId} style={{ display: dj === false ? "block" : "none" }}>
                            <div className="item">
                                <Checkbox onClick={changeCheck.bind(this, index)} checked={item.checked}>
                                    <span className="checkbox-on m-blue-checkbox-new">
                                    </span></Checkbox>
                                <div className="item-wrapper">
                                    <div className="item-thumb">
                                        <img alt="" className="item-thumb-img" height="90" width="90" src={item.images} />  </div>
                                    <div className="item-info-container">
                                        <div className="colorful-tag-container">
                                            <span className="colorful-tag red">{item.tag} </span>  </div>
                                        <div className="item-info">
                                            <a className="title"> <h4>{item.skuMobileTitle}</h4> </a>
                                            <p className="item-attrs"> <span> <span>{item.skuMobileSubTitle}</span> </span> </p>
                                            <div className="item-price-container">
                                                <div className="quantity-container">
                                                    <div className="quantity">
                                                        <span className={item.num > 1 ? "button disabled" : "button"} onClick={this.changeNum.bind(this, index, item.stockNum, item.num, item.listId)}>-</span>
                                                        <span className="num">{item.num}</span>
                                                        <span className="button  disabled" onClick={this.changeNum.bind(this, index, item.stockNum, item.num, item.listId)}>+</span>
                                                    </div>
                                                </div><div className="discount-price">
                                                    <p className="price"> <span><i>¥</i> <span>{item.originalPrice}</span></span> </p> </div> </div>
                                        </div> </div> </div>
                            </div>   </div>
                    }) : ""
                }
            </>
        )
    }
}
let mapState = (state) => state;
export default connect(mapState, actionCreator)(FinishState)