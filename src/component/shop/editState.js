import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile';
import actionCreator from "./actionCreator"
import { connect } from "react-redux"
class EditState extends Component {
    render() {
        // console.log(this.props)
        return <>
            {
                this.props.dj === true ? this.props.cart.list.data.map((item) => {
                    return <> <div className="group" key={item.listId} style={{ display: this.props.dj === false ? "none" : "block" }}>
                        <div className="item">
                            <Checkbox>
                                <span className="checkbox-on m-blue-checkbox-new">
                                </span></Checkbox>
                            <div className="item-wrapper">
                                <div className="item-thumb">
                                    <img alt="" className="item-thumb-img" height="90" width="90" src={item.images} />  </div>
                                <div className="item-info-container">
                                    <div className="colorful-tag-container">
                                        <span className="colorful-tag red"> {item.tag} </span>  </div>
                                    <div className="item-info">
                                        <a className="title"> <h4>{item.skuMobileTitle}</h4> </a>
                                        <p className="item-attrs"> <span> <span>{item.skuMobileSubTitle}</span> </span> </p>
                                        <div className="item-price-container">
                                            <div className="discount-price">
                                                <p className="price"> <span><i>¥</i> <span>{item.originalPrice}</span></span>
                                                    <span className="sum smartisan-icon">  X{item.num}</span> </p> </div> </div> </div> </div> </div>    </div>   </div> </>
                }) : ""

            }





        </>
    }
}
let mapState = (state) => state;
export default connect(mapState, actionCreator)(EditState)