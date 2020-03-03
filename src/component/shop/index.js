import React, { Component } from 'react'
import "./shop.scss"
import Title from "@/component/title/index.js"
import NoCart from "@/component/shop/noCart.js"
export default class Shop extends Component {
    render() {
        return (
            <div className="big">
                <Title title="购物车" />
                <NoCart />
            </div>
        )
    }
}
