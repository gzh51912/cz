import React, { Component } from 'react'
import Title from "@/component/title"
import Fh from '@/component/fh'
import actionCreator from "./actionCreator"
import { connect } from "react-redux"
import "./list.scss"
let mapState = (state) => state;
@connect(mapState, actionCreator)
class List extends Component {
    shouldComponentUpdate(nextprops, nextstate) {//是否更新
        if (this.props.list.list !== nextprops.list.list) {
            return true
        } else {
            return false
        }
    }
    componentDidMount() {
        this.props.getLists()//发动作获取例表数据
    }
    tzxq(id, listId) {
        this.props.history.push({ pathname: "/detail" });
        // this.props.setId(id);
        sessionStorage.setItem("tzId", id)
        sessionStorage.setItem("listId", listId)
    }
    render() {
        let { list } = this.props.list;
        return (
            <>
                <Title title="商品列表" ><Fh {...this.props} /></Title>
                <ul className="overview-content">
                    {
                        list.length ? list.map((item) => {
                            return <li className="box-line" key={item.skuId} onClick={this.tzxq.bind(this, item.skuId, item.listId)}>
                                <img alt="" src={item.images} />

                                <div className="item-content">
                                    <h5>{item.skuMobileTitle}</h5>
                                    <p>{item.skuMobileSubTitle}</p>
                                    <p className="price">
                                        <i >¥</i> <span >{item.originalPrice ? item.originalPrice : item.discountPrice}</span>
                                        <del className="origin-price">
                                            <i >{item.discountPrice ? "¥" : ""}</i> <del >{item.discountPrice ? item.discountPrice : ""}</del> </del> </p> </div>
                            </li>
                        }) : ""
                    }
                </ul>
            </>
        )
    }
}
export default List