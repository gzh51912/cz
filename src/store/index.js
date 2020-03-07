import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer"//总的reducer
import thunk from "redux-thunk"//处理异步的数据
let store = createStore(reducer, applyMiddleware(thunk));
export default store;