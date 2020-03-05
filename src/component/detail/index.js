import React, { Component } from 'react'
import "./detail.scss"
import Title from "@/component/title"
import Fh from '@/component/fh'
import Lb from "@/component/lb/index.js"
import { Badge } from 'antd-mobile';
import Recommend from "@/component/recommend/index.js"
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ["商品", "详情", "参数", "推荐"],
            gl: 0,
            list: [],
            lb: [],
            shopname: "",
            tj: []
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
        });
        fetch("https://shopapi.smartisan.com/product/skus?ids=100060201,100060202,100061001,100060401,100060601,100061101,100061201,100062701,100063401,100061801,100059001,100052801,100023501,100059808,100059726,100059315,100059401,100059901,100061001&with_stock=true&with_spu=true").then((res) => res.json()).then((res) => {
            // console.log(res.data.list);
            this.setState({
                tj: res.data.list
            })
        })
    }
    render() {
        // console.log(this.state.list)
        let { title, gl } = this.state;
        return (
            <div id="detail">
                {/* 标题 */}
                <Title title="商品" ><Fh {...this.props} /></Title>
                {/* 点击切换楼层效果 */}
                <div className="fix-header-tabbox box-line">
                    <ul className="box-border">
                        {
                            title.map((item, index) => {
                                return <li className={index === gl ? "box-line active" : "box-line"} key={item} onClick={this.changeGl.bind(this, index)} >  <span >{item}</span></li>
                            })
                        }
                    </ul> </div>
                {/* 商品信息 */}
                {
                    this.state.list.length ?
                        this.state.list.map((item, index) => {
                            return <div key={index}>
                                <Lb lb={item.shop_info.ali_images} />

                                <section className="section-floor ">
                                    <div className="item-titlebox ">
                                        <div className="title-content">
                                            <h4>{item.spu.name}</h4>
                                            <p>{item.shop_info.sub_title}</p>
                                            <div className="price"><i>¥</i> <span>{item.price}</span></div>
                                            <div className="price"> <div className="postage-price">满 99 元包邮</div> </div>   </div> </div>

                                    <section className="activities-wrapper clearfix">
                                        <div className="activities">
                                            <span className="activities-title">优惠信息</span>
                                            <div className="activities-list">
                                                <article className="activities-item link-item">
                                                    <figure className="tag-wrapper">
                                                        <span className="tag tag-red">满减</span></figure> <label >
                                                        <font className="special-num-words">满 98 减 19 元；满 147 减 38 元；满 245 减 66 元</font>
                                                        <a href="#"><i className="arrow">》</i></a> </label>  </article>   </div> </div> </section>
                                </section>
                                <section className="section-floor item-content">
                                    <div className="item-box-column "> <h6>已选版本</h6>
                                        <div className="item-box">
                                            <p> <span className="attr-name">颜色：</span>
                                                <span className="attr-value">白色 </span> </p>  <p> <span className="attr-name">数量：</span><span className="attr-value">1</span></p> <i className="arrow">》</i> </div> </div>

                                </section>
                                <section className="section-floor ">
                                    <div className="title-header box-line"> <div className="title-wrapper"> <h2 >商品详情</h2> </div> </div>
                                    <div className="img">
                                        <img src={item.shop_info.tpl_content.base.images.ali.url[0]} alt="" /></div>
                                </section>

                            </div>
                        }) : ""
                }
                {/* 参数 */}
                <section className="section-floor item-content">
                    <div className="title-header box-line"> <div className="title-wrapper"> <h2 >服务说明</h2> </div> </div> <div className="item-box-column box-line service-note"> <ul ><li className="return-policy">7 天无理由退货</li><li className="exchange-policy">15 天质量问题换货</li> </ul> </div> </section>
                {/* 推荐 */}
                <Recommend />
                {/* 加购立即购买 */}
                <ul className="footer">
                    <Badge text='1'>
                        <span className="iconfont icongouwuche"></span></Badge>
                    <li><a>现在购买</a></li>
                    <li><a className="highlight">加入购物车</a></li>
                </ul>

            </div>
        )
    }
}
