import React, { Component } from 'react'

export default class Homelist2 extends Component {

    render() {
        // console.log(this.props)
        return (
            <>
                {this.props.homelist.map((item) => {
                    return <section className="guess-like-item" key={item.skuId}>
                        <figure className="item-cover">
                            <img alt="商品图片" src={item.images} lazy="loaded" /></figure>
                        <article className="item-title"><h3 >{item.skuTitle}</h3></article>
                        <article className="item-bottom-info">
                            <aside className="item-price"><span className="yuan">¥</span><span >{item.discountPrice ? item.discountPrice : item.originalPrice}</span><del className="orignal"><del className="yuan">{item.discountPrice === 0 ? "" : "￥"}</del>{item.discountPrice === 0 ? "" : item.originalPrice}</del></aside>
                            {item.promotionList.length ? <aside className="item-promotion-tags"><span className="tag">{item.promotionList[0].tag}</span></aside> : null} </article></section>
                })}
            </>
        )
    }
}
