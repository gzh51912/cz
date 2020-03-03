import React, { Component } from 'react'
import "../../iconfont.css"
import "./search.scss"

export default class Search extends Component {
    render() {
        return (
            <section className="poss search-bar-wrap">
                <section className="search-bar">
                    <i className="iconfont iconsousuo"></i>
                    <aside className="search-val">请输入搜索关键字</aside>
                </section>
            </section>

        )
    }
}
