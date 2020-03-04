import React, { Component } from 'react'
import "./title.scss"
export default class Title extends Component {
    render() {
        return (

            <div className="title-bar">
                {this.props.children}
                <h1>{this.props.title}</h1>
            </div>

        )
    }
}
