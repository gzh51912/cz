import React, { Component } from 'react'
import "./detail.scss"
import Title from "@/component/title"
import Fh from '@/component/fh'
import Lb from "@/component/lb/index.js"
import { compose } from 'redux'
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ["商品", "详情", "参数", "推荐"],
            gl: 0,
            list: [],
            lb: []
        }
    }
    changeGl(index) {
        this.setState({
            gl: index//改变高亮
        })
    }
    componentDidMount() {
        fetch("https://shopapi.smartisan.com/product/skus?ids=100060901&with_stock=true&with_spu=true").then((res) => res.json()).then((res) => {
            this.setState({
                list: res.data.list,
            })
        })
    }
    render() {
        // console.log(this.state.list)
        let { title, gl } = this.state;
        return (
            <div id="detail">
                <Title title="商品" ><Fh {...this.props} /></Title>
                <div className="fix-header-tabbox box-line">
                    <ul className="box-border">
                        {
                            title.map((item, index) => {
                                return <li className={index === gl ? "box-line active" : "box-line"} key={item} onClick={this.changeGl.bind(this, index)} >  <span >{item}</span></li>

                            })
                        }
                    </ul> </div>
                {
                    this.state.list.length ?
                        this.state.list.map((item) => {
                            return <>
                                <Lb lb={item.shop_info.ali_images} />
                            </>
                        }) : ""
                }

            </div>
        )
    }
}
