import React, { Component } from 'react'
import "./homelist.scss"
import Homelist2 from "./homelist2"
export default class Homelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homelist: [],
            pageTotal: 0,
            page: 0
        }
    }
    componentDidMount() {
        this.getData(1);
    }
    getData(page) {
        fetch(`https://shopapi.smartisan.com/mobile/skulist?page=${page}`).then((res) => res.json()).then((res) => {
            // console.log(res.data)
            if (this.state.page !== res.data.page) {
                this.setState({
                    homelist: res.data.skuInfo,
                    pageTotal: res.data.pageTotal,
                    page: res.data.page
                })
            }

        })
    }
    getDataAll() {
        let { pageTotal } = this.state;
        for (let i = 2; i <= pageTotal; i++) {
            this.getData(i);
        }
    }
    render() {
        let { homelist } = this.state;
        return (
            <div className="home-list">
                <article className="headline-wrap"><h3 >猜你喜欢</h3></article>
                <article className="guesslike-wrap clearfix">
                    {
                        homelist.length ? <Homelist2 homelist={homelist} /> : ""
                    }
                </article>

            </div>
        )
    }
}
