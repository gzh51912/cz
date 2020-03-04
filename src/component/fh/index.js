import React, { Component } from 'react'
import "./fh.scss"
export default class Fh extends Component {
    changBack = () => {
        //返回上一页
        if (sessionStorage.getItem("path")) {
            this.props.history.push(sessionStorage.getItem("path"));
            setTimeout(() => {
                sessionStorage.removeItem("path")
            }, 300);
        }
    }
    render() {
        return (
            <a className="nav-back" onClick={this.changBack}> 《 返回</a>
        )
    }
}
