import React, { Component } from 'react'
import "./category.scss"
// 引入搜索
import Search from "../search"
import Banner from "./banner"
import Second from "./second"
export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: [],
            tarIndex: 0,

        }
    }
    changeIndex(index) {
        this.setState({
            tarIndex: index
        })
    }
    componentDidMount() {
        fetch("https://shopapi.smartisan.com/mobile/classify").then((res) => res.json()).then((res) => {
            this.setState({
                left: res.data
            })
        })
    }
    render() {
        let { left, tarIndex } = this.state;
        return (
            <>
                <Search />
                <div className="main">
                    <ul className="left-wrap" >
                        {
                            left.map((item, index) => {
                                return <li key={item.classifyId} ><a onClick={this.changeIndex.bind(this, index)} className={index === tarIndex ? "active" : ""} >{item.classifyName}</a></li>
                            })
                        }
                    </ul>
                    <section className="right-wrap">
                        <section className="category-sub">
                            {
                                left[tarIndex] && left[tarIndex].banner ? <Banner banner={left[tarIndex].banner} /> : ""

                            }
                            {
                                left[tarIndex] && left[tarIndex].second ? <Second second={left[tarIndex].second} /> : ""
                            }
                        </section></section>
                </div>
            </>
        )
    }
}
