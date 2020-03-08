import React, { Component } from 'react'
import "./detail.scss"
import Title from "@/component/title"
import Fh from '@/component/fh'
import Lb from "@/component/lb/index.js"
import { Badge } from 'antd-mobile';
import Recommend from "@/component/recommend/index.js"
import { connect } from "react-redux"
// import actionCreators from "@/component/list/actionCreator"
import actionCreator from "@/component/shop/actionCreator"
import store from "@/store/index.js"
import { add } from "@/api/request.js"
import { Toast } from 'antd-mobile';

let mapState = (state) => {
    return {
        allCountA() { //总的数量
            var s = 0;
            if (!Array.isArray(state.cart.list)) {
                state.cart.list.data.forEach((item) => {
                    s += item.num;
                })
            }
            return s;
        },
    }
}
@connect(mapState, actionCreator)
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ["商品", "详情", "参数", "推荐"],
            gl: 0,//点击高亮
            list: [],//例表数据
            lb: [],//商品轮播图,
            count: 0
        }
    }

    changeGl(index) {
        this.setState({
            gl: index//改变高亮
        })
    }
    shouldComponentUpdate(nextprops, nextstate) {//是否更新
        if (this.props.cart !== nextprops.cart || this.state !== nextstate) {
            return true
        } else {
            return false
        }
    }
    componentDidMount() {
        let id = sessionStorage.getItem("tzId");
        fetch(`https://shopapi.smartisan.com/product/skus?ids=${id}&with_stock=true&with_spu=true`).then((res) => res.json()).then((res) => {
            this.setState({
                list: res.data.list,
            })
        })
        if (sessionStorage.getItem("uid")) {
            this.props.checkAtion(sessionStorage.getItem("uid"));
        }
        store.subscribe(() => {
            this.setState({
                count: this.props.allCountA()
            })
        })
    }
    tzcart = (e) => {
        e.persist();
        if (sessionStorage.getItem("uid")) {
            add(sessionStorage.getItem("uid"), sessionStorage.getItem("listId")).then((res) => {
                if (res.msg === "添加成功") {
                    if (e.target.innerText === "加入购物车") {
                        Toast.info('添加成功', 1);
                        window.location.href = "/detail"
                    } else {
                        this.props.history.push("/shop");
                    }
                } else {
                    Toast.info('添加失败', 1);
                }
            })
        } else {
            Toast.info('请先登录~', 1);
            sessionStorage.setItem("path", this.props.location.pathname);
            setTimeout(() => {
                this.props.history.push("/login");
            }, 1000);
        }
    }
    tz = () => {
        this.props.history.push("/shop")
    }
    render() {
        // console.log(this.props);
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
                                        <img src={item.shop_info.tpl_content.base.images.ali_mobile.url} alt="" /></div>
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
                    <Badge text={this.state.count}>
                        <span className="iconfont icongouwuche" onClick={this.tz}></span></Badge>
                    <li onClick={this.tzcart}><a>现在购买</a></li>
                    <li onClick={this.tzcart}><a className="highlight">加入购物车</a></li>
                </ul>

            </div>
        )
    }
}
export default Detail
