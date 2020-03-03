import React from 'react'
import "./noCart.scss"
export default function noCart() {
    return (
        <div className="empty-container">
            <div className="container">
                <h3>购物车暂无商品</h3>
                <p>添加到购物车的商品将会显示在这里</p>
                <a className="buy-btn login">登录</a>
                <a className="buy-btn box-border">现在选购</a></div> </div>
    )
}
