import React, { Component } from 'react'
import Title from "@/component/title"
import Fh from '@/component/fh'
import "./list.scss"
// import { getList } from "@/api/request.js"
class List extends Component {

    componentDidMount() {
        let { id } = this.props.location.state;
        // getList(id).then((res) => {
        //     console.log(res)
        // })????????????????????????????????????????
    }
    render() {
        // console.log(this.props.location.state)
        return (
            <>
                <Title title="商品列表" ><Fh {...this.props} /></Title>
                <ul className="overview-content">
                    <li className="box-line">
                        <img alt="" src="https://resource.smartisan.com/resource/de1274f4c70fe3768417bb0454320089.png?x-oss-process=image/resize,w_252/format,webp" />

                        <div className="item-content">
                            <h5>smartisan  颈挂蓝牙耳机</h5>
                            <p>（坚果礼遇  女神价到）精选配件 限时直降</p>
                            <p className="price">
                                <i >¥</i> <span >179.00</span>
                                <span className="origin-price">
                                    <i >¥</i> <span >199.00</span> </span> </p> </div>
                    </li>
                </ul>
            </>
        )
    }
}
export default List