import listReducer from "@/component/list/reducer.js"
import cartReducer from "@/component/shop/reducer.js"
import { combineReducers } from "redux" //把好多模块合并到一个
let reducer = combineReducers({
    list: listReducer,
    cart: cartReducer
})
export default reducer