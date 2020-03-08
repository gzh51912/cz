import React from 'react'
import { Redirect } from 'react-router-dom'
// import Login from "@/component/login/index.js"
// import NoCart from "@/component/shop/index.js"
// import { connect } from "react-redux"
// import actionCreator from "@/component/shop/actionCreator.js"

// let mapState = (state) => state
// connect(mapState, actionCreator);

var HOC = (Com) => {
    return class extends React.Component {
        render() {
            let { pathname } = this.props.location;
            return (
                <div>
                    {sessionStorage.getItem("uid") ? <Com /> : <Redirect to={{ pathname: "/login", state: { pathname } }} exact />}
                </div>
            )
        }
    }
}
export default HOC;