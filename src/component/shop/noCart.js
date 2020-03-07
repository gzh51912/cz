
import "./noCart.scss"
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class noCart extends Component {
    tz = () => {
        this.props.history.push("/category");
    }
    render() {
        return (
            <div className="empty-container">
                <div className="container">
                    <h3>购物车暂无商品</h3>
                    <p>添加到购物车的商品将会显示在这里</p>
                    {
                        sessionStorage.getItem("uid") ? "" : <a className="buy-btn login">登录</a>
                    }
                    <a className="buy-btn box-border" onClick={this.tz}>现在选购</a></div> </div>
        )
    }

}
export default withRouter(noCart)