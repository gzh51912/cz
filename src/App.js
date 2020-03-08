import React from 'react';
// import './App.css';
import "./iconfont.css"
import './App.scss';
import Detail from "@/component/detail/index.js"
import Login from "@/component/login/index.js"
import { routes, subRoutes } from "@/routes/index.js"
import { Toast } from 'antd-mobile';
// 作用：让不是路由切换的组件也是有路由切换的3个属性history/match/location
import { withRouter, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import NotFound from "./component/notfound"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }
  componentDidMount() {
    this.routeListen();//已挂载完毕就监听路由的变化
    this.changeTitle(this.props.location.pathname);
  }
  routeListen() {
    this.props.history.listen((location) => {
      // console.log(location);
      // 根据不同的location.pathname 更改导航栏的表填
      this.changeTitle(location.pathname)
    })
  }
  // 根据路由的变化改变标题栏的内容
  changeTitle(pathname) {
    // 一进来默认为true 
    this.setState({
      visible: true
    });
    switch (pathname) {
      case "/":
      case "/home": document.title = "首页"; break;
      case "/category": document.title = "分类"; break;
      case "/shop": document.title = "购物车"; break;
      case "/user": document.title = "个人中心"; break;
      // case "/detail": document.title = "详情页"; break;
      default:
        if (pathname.includes("/category/")) {
          document.title = "分类"
        }
        else if (pathname === "/detail") {
          document.title = "详情页"
          this.setState({
            visible: false
          })
        }
        else if (pathname === "/login") {
          document.title = "登录"
          this.setState({
            visible: false
          })
        } else {
          this.setState({
            visible: false
          })
        }
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          {/* 下面是为了有二级列表页的导航 */}
          {
            subRoutes.map((item) => {
              return <Route key={item.path} path={item.path} component={item.component} exact></Route>
            })
          }
          {
            routes.map((item) => {
              return <Route key={item.path} path={item.path} component={item.component}></Route>
            })
          }

          <Route path="/login" component={Login}></Route>
          <Redirect from="/" to="/home" exact ></Redirect>
          <Route path="/detail" component={Detail}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <ul className="footer" style={{ "display": this.state.visible ? "block" : "none" }}>
          {routes.map((item) => {
            return <li key={item.path}><NavLink to={item.path}><i className={item.i}></i><span>{item.name}</span></NavLink></li>
          })}
        </ul>


      </div>
    );
  }

}

export default withRouter(App);
