import React, { Component } from 'react'
import { Route, Switch, NavLink, Redirect } from "react-router-dom"
import "./category.scss"
// import Appliance from "./components/appliance"
// import Breath from "./components/breath"
// import Computer from "./components/computer"
// import Phones from "./components/phones"
// import Shoes from "./components/shoes"
// import Fittings from "./components/fittings"
import { subRoutes } from "@/routes/index.js"
// 引入搜索
import Search from "../search"
export default class Category extends Component {

    render() {
        return (
            <>
                <Search />
                <div className="main">
                    <ul className="left-wrap" >
                        {
                            subRoutes.map((item) => {
                                return <li key={item.path}>   <NavLink to={item.path}>{item.name}</NavLink></li>
                            })
                        }
                    </ul>
                    <main className="right-wrap">
                        <Switch>
                            {
                                subRoutes.map((item) => {
                                    return <Route path={item.path} component={item.component} key={
                                        item.name
                                    }></Route>
                                })
                            }
                            <Redirect from="/category" to="/category/phones" exact></Redirect>
                        </Switch>
                    </main>
                </div>
            </>
        )
    }
}
