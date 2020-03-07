import React, { Component } from 'react'
import "./second.scss"
import { withRouter } from "react-router-dom"

@withRouter
class Second extends Component {
    tz(id) {
        // console.log(id)
        this.props.history.push("/category/list");
        // sessionStorage.setItem("path", "/category");
    }
    render() {
        // console.log(this.props.second)
        return <>
            {
                this.props.second.length ? this.props.second.map((item) => {
                    return <section className="second-and-third-list" key={item.classifyId}>
                        <h1 >{item.classifyName}</h1>
                        <aside className="list-flex-wrap">
                            {
                                item.third.map((item) => {
                                    return <figure className="flex-item" key={item.classifyId} onClick={this.tz.bind(this, item.classifyId)}>
                                        <div className="img-cover">
                                            <img alt="-" src={item.image} lazy="loaded" />
                                        </div>
                                        <figcaption className="title text-ellipsis">{item.classifyName}</figcaption>
                                    </figure>
                                })
                            }

                        </aside></section>
                }) : ""
            }

        </>

    }
}
export default Second
