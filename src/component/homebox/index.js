import React, { Component } from 'react'
import "./homebox.scss"
export default class HomeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homebox: props.homebox,
            tag: false//显示类名为flwx-two例表里的限时抢购字样
        }
    }
    render() {
        let { homebox, tag } = this.state;
        // console.log(homebox);
        return <>
            {
                homebox.map((item, index) => {
                    return <section className="home-box" key={index}>
                        <aside className="floor-banner-wrap-inner ">
                            <figure className="floor-banner-cover"><img alt="广告位图片" className="floor-banner-poster" src={item.header.image} lazy="loaded" /></figure></aside><aside className={item.type === "goodsOneThree" ? "flex-three" : "flex-two"} {...item.type === "goodsOneTwo" ? tag = true : tag = false} >
                            {item.skuInfo.map((item) => {
                                return <section className="flex-item" key={item.skuId}>
                                    <figure className="item-cover">
                                        <img alt="商品图片" src={item.images} lazy="loaded" /></figure>
                                    <article className="item-title"><h3 >{item.skuTitle}</h3></article>
                                    <article className="item-bottom-info">
                                        <aside className="item-price">
                                            <span className="yuan">¥</span>
                                            <span >{item.discountPrice === 0 ? item.originalPrice : item.discountPrice}</span>
                                            <del className="orignal">
                                                <del className="yuan">{item.discountPrice === 0 ? "" : "￥"}</del>{item.discountPrice === 0 ? "" : item.originalPrice}</del></aside>
                                        {item.promotionList.length && tag === true ? <aside className="item-promotion-tags"><span className="tag">{"限时抢购"}</span></aside> : null}
                                    </article></section>
                            })} </aside>
                    </section>
                })
            }
        </>


    }
}


