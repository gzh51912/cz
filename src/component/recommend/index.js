import React, { Component } from 'react'
import { connect } from "react-redux"
import actionCreators from "@/component/list/actionCreator"

let mapState = (state) => state;
@connect(mapState, actionCreators)
// 商品推荐的数据
class Recommend extends Component {
    componentDidMount() {
        this.props.getLists();
    }
    render() {
        let { list } = this.props.list;
        return (

            <section className="section-floor " >
                <div className="title-header box-line">
                    <div className="title-wrapper"> <h2 >相关推荐</h2> </div> </div>
                <div className="container" style={{ marginBottom: "80px" }}>
                    {
                        list.length ? list.map((item) => {
                            return <>
                                <div className="item-wrapper" key={item.skuId}><div className="product-box-item"> <a className="item-img box-border">
                                    <img alt="" src={item.images} />
                                    <span className="colorful-tag"> {item.tag} </span>  </a> <div className="item-content"> <h4 >{item.skuMobileTitle}</h4> <p >{item.skuMobileSubTitle}</p> <div className="good-price"><p className="price"> <i >¥</i> <span >{item.originalPrice}</span><del className="origin-price">
                                        <i >{item.discountPrice ? "¥" : ""}</i> <del >{item.discountPrice ? item.discountPrice : ""}</del> </del> </p> </div>  </div> </div>  </div>

                            </>
                        }) : ""
                    }
                </div>
            </section>
        )
    }
}
export default Recommend