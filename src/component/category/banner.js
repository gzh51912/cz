import React, { Component } from 'react'
import "./banner.scss"
export default class Banner extends Component {
    render() {
        return <>
            {
                this.props.banner.length ? <section className="banner-wrap">
                    <div className="banner">
                        <div className="swiper-slide">
                            {this.props.banner.map((item, index) => {
                                return <img src={item.image} key={index} alt="banner" className="banner-img" />
                            })
                            }
                        </div></div></section> : ""
            }
        </>
    }
}
