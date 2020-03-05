import React, { Component } from 'react'
import "./shop.scss"
import Title from "@/component/title/index.js"
import NoCart from "@/component/shop/noCart.js"
import Recommend from "@/component/recommend/index.js"
import { Checkbox } from 'antd-mobile';
export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dj: true,
        }
    }
    changedj = () => {
        // e.persist();//访问e.target时处于异步操作中;解决掉警告
        this.setState({
            dj: !this.state.dj,
        });


    }
    render() {
        // console.log(this.state.dj)
        return (
            <div className="big">
                <Title title="购物车" />
                <span className="dj" onClick={this.changedj}>{this.state.dj ? "编辑" : "完成"}</span>

                {/* 没有商品的时候显示nocart组件 */}
                {/* <NoCart /> */}
                {/* 编辑状态下的显示 */}
                <div style={{ marginTop: "50px" }}>
                    {/* 显示编辑的时候显示 */}
                    <div className="group">
                        <div className="item">
                            <Checkbox>
                                <span className="checkbox-on m-blue-checkbox-new">
                                </span></Checkbox>
                            <div className="item-wrapper">
                                <div className="item-thumb">
                                    <img alt="" className="item-thumb-img" height="90" width="90" src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_180/format,webp" />  </div>
                                <div className="item-info-container">
                                    <div className="colorful-tag-container">
                                        <span className="colorful-tag red"> 限时优惠 </span>  </div>
                                    <div className="item-info">
                                        <a className="title"> <h4>坚果 QuickCharge 4+ 快速充电器</h4> </a>
                                        <p className="item-attrs"> <span> <span>白色</span> </span> </p>

                                        <div className="item-price-container">
                                            <div className="discount-price">
                                                <p className="price"> <span><i>¥</i> <span>49.00</span></span>
                                                    <span className="sum smartisan-icon">  X 1</span> </p> </div> </div> </div> </div> </div>    </div>   </div>
                    {/* 显示完成的时候显示 */}
                    <div className="group">
                        <div className="item">
                            <Checkbox>
                                <span className="checkbox-on m-blue-checkbox-new">
                                </span></Checkbox>
                            <div className="item-wrapper">
                                <div className="item-thumb">
                                    <img alt="" className="item-thumb-img" height="90" width="90" src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_180/format,webp" />  </div>
                                <div className="item-info-container">
                                    <div className="colorful-tag-container">
                                        <span className="colorful-tag red"> 限时优惠 </span>  </div>
                                    <div className="item-info">
                                        <a className="title"> <h4>坚果 QuickCharge 4+ 快速充电器</h4> </a>
                                        <p className="item-attrs"> <span> <span>白色</span> </span> </p>

                                        <div className="item-price-container"><div className="quantity-container"> <div className="quantity"> <span className="button ">-</span> <span className="num">3</span> <span className="button  disabled">+</span> </div>  </div><div className="discount-price"> <p className="price"> <span><i>¥</i> <span>49.00</span></span> </p> </div> </div>




                                    </div> </div> </div>    </div>   </div></div>

                {/* 推荐商品的组件 */}
                <Recommend />
                {/* 结算按钮 */}
                <div className="bottom-bar">
                    <div className="select-info">
                        <div className="checkbox-container">
                            <div className="check-outer">
                                <Checkbox>
                                    <span className="checkbox-on m-blue-checkbox-new">
                                    </span></Checkbox> </div>  </div>
                        <span>已选 <i className="">2</i> 件</span> </div>
                    {/* 点击的时候以下位置显示隐藏切换 */}
                    <div className="sum-info">
                        <div className="desc" style={{ display: this.state.dj ? "block" : "none" }}>
                            <p className="total-price">合计：<span><i>¥</i> <span>228.00</span></span></p>
                            <div className="delivery"> <article>应付总额不含运费</article> </div> </div>
                        {/* 点击的时候这里 内容显示改变 背景是否高亮 */}
                        <div className={this.state.dj ? "blue-btn" : "blue-btn edit-red"}>{this.state.dj ? "现在结算" : "删除所选"}</div>  </div> </div>
            </div>
        )
    }
}
