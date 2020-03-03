
import React, { Component } from 'react'
// import "./home.scss"
// 引入搜索框、轮播图
import Search from "../search"
import Lb from "../lb"
import HomeBox from "@/component/homebox/index.js"
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
    }
    render() {
        let { lb, homebox } = this.state;
        // console.log(lb)
        return (
            <>
                <Search />
                {lb.length ? <Lb lb={lb} /> : ""}
                {homebox.length ? <HomeBox homebox={homebox} /> : ""}
            </>
        )
    }
}
