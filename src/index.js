import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import store from "@/store/index.js"
import { Provider } from "react-redux"
// 为了能返回上一页
import { createBrowserHistory } from "history";//管理会话历史
const customHistory = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}><App /></Router></Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
