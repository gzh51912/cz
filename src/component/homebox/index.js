import React, { Component } from 'react'
import "./homebox.scss"
export default class HomeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homebox: props.homebox
        }
    }
    render() {
        let { homebox } = this.state;
        console.log(homebox);
        return <>

            {/* <section className="home-box">
                <aside className="floor-banner-wrap-inner ">
                    <figure className="floor-banner-cover"><img alt="广告位图片" className="floor-banner-poster" src="https://resource.smartisan.com/resource/75dbeffd6aa74796f6d3a81e764f534d.png?x-oss-process=image/resize,w_700/format,webp" lazy="loaded" /></figure></aside>
                <aside className=" flex-two" >
                    <section className="flex-item">
                        <figure className="item-cover">
                            <img alt="商品图片" src="https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_220/format,webp" lazy="loaded" /></figure>
                        <article className="item-title"><h3 >坚果 Pro 3</h3></article>
                        <article className="item-bottom-info">
                            <aside className="item-price">
                                <span className="yuan">¥</span>
                                <span >3399</span>
                                <span className="orignal">
                                    <span className="yuan">¥</span>3599</span></aside>
                            <aside class="item-promotion-tags"><span class="tag">限时特价</span></aside>
                        </article></section>
                </aside></section> */}
            {
                homebox.map((item) => {
                    return <section className="home-box" key={item.type}>
                        <aside className="floor-banner-wrap-inner ">
                            <figure className="floor-banner-cover"><img alt="广告位图片" className="floor-banner-poster" src={item.header.image} lazy="loaded" /></figure></aside><aside className={item.type === "goodsOneThree" ? "flex-three" : "flex-two"}>
                            {item.skuInfo.map((item) => {
                                return <section className="flex-item">
                                    <figure className="item-cover">
                                        <img alt="商品图片" src={item.images} lazy="loaded" /></figure>
                                    <article className="item-title"><h3 >{item.skuTitle}</h3></article>
                                    <article className="item-bottom-info">
                                        <aside className="item-price">
                                            <span className="yuan">¥</span>
                                            <span >{item.discountPrice === 0 ? item.originalPrice : item.discountPrice}</span>
                                            <del className="orignal">
                                                <del className="yuan">{item.discountPrice === 0 ? "" : "￥"}</del>{item.discountPrice === 0 ? "" : item.originalPrice}</del></aside>
                                        <aside class="item-promotion-tags"><span class="tag"></span></aside>
                                    </article></section>


                            })} </aside>
                    </section>
                })
            }
        </>


    }
}


