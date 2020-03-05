import React, { Component } from 'react'
// 商品推荐的数据
export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tj: []
        }
    }
    componentDidMount() {

        fetch("https://shopapi.smartisan.com/product/skus?ids=100060201,100060202,100061001,100060401,100060601,100061101,100061201,100062701,100063401,100061801,100059001,100052801,100023501,100059808,100059726,100059315,100059401,100059901,100061001&with_stock=true&with_spu=true").then((res) => res.json()).then((res) => {
            // console.log(res.data.list);
            this.setState({
                tj: res.data.list
            })
        })
    }
    render() {
        return (

            <section className="section-floor " >
                <div className="title-header box-line">
                    <div className="title-wrapper"> <h2 >相关推荐</h2> </div> </div>
                <div className="container" style={{ marginBottom: "80px" }}>
                    {
                        this.state.tj.length ? this.state.tj.map((item) => {
                            return <>
                                <div className="item-wrapper" key={item.id}><div className="product-box-item"> <a className="item-img box-border">
                                    <img alt="" src={item.shop_info.ali_image} />
                                    <span className="colorful-tag"> {item.tag} </span>  </a> <div className="item-content"> <h4 >{item.shop_info.title}</h4> <p >{item.shop_info.sub_title}</p> <div className="good-price"><p className="price"> <i >¥</i> <span >{item.price}</span></p> </div>  </div> </div>  </div>

                            </>
                        }) : ""
                    }
                </div>
            </section>
        )
    }
}
