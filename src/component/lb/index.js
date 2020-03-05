import React, { Component } from 'react'
import Swiper from 'swiper'
import "swiper/css/swiper.css"
import "./lb.scss"
export default class Lb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lb: props.lb
        }
    }

    componentDidMount() {
        // this.get()
        //说明数据变化了，异步数据回来
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: 1000,//可选选项，自动滑动

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                paginationClickable: true,
            },

        })
    }
    render() {
        // console.log(this.props.lb);
        let { lb } = this.state;
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {/* 主页的轮播图是[{}],详情页的轮播图是["",""] */}
                    {
                        lb.map((item, index) => {
                            return <div className="swiper-slide" key={index}><img src={item.image ? item.image : item} alt="" /></div>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
