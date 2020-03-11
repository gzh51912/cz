import React from 'react'
import { Redirect } from 'react-router-dom'


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