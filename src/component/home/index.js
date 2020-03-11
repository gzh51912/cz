
import React, { Component } from 'react'
// import axios from "axios"
// import "./home.scss"
// 引入搜索框、轮播图
import Search from "@/component/search/index.js"
import Lb from "@/component/lb/index.js"
import HomeBox from "@/component/homebox/index.js"
import HomeList from "@/component/homelist/index.js"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lb: [],
            homebox: [],
        }
    }
    componentDidMount() {
        fetch("https://shopapi.smartisan.com/mobile/home").then((res) => res.json()).then((res) => {
            this.setState({
                lb: res.data[0].list,
                homebox: res.data.slice(1)
            })
        })
        // axios("https://shopapi.smartisan.com/mobile/home").then((res) => {
        //     console.log(res)
        //     this.setState({
        //         lb: res.data.data[0].list,
        //         homebox: res.data.data.slice(1)
        //     })
        // })

    }

    render() {
        let { lb, homebox } = this.state;
        // console.log(lb)
        return (
            <div style={{ "marginBottom": "80px" }}>
                <Search />
                {lb.length ? <Lb lb={lb} /> : ""}
                {homebox.length ? <HomeBox homebox={homebox} /> : ""}
                <HomeList />

            </div>
        )
    }
}
