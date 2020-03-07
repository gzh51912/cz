import { ADD, DELETE, UPDATE, CHECK, CLEAR, REDUCER, CHECKED } from "./actionType"
import { getCartList } from "@/api/request"


export default {
    //增加
    addAction(index) {
        // console.log(index)
        return {
            type: ADD,
            index
        }
    },
    //减少
    reducerAction(index) {
        return {
            type: REDUCER,
            index
        }
    },
    //删除
    deleteAction(index) {
        return {
            type: DELETE,
            index
        }
    },
    //修改
    updateAction(index, num) {
        return {
            type: UPDATE,
            index,
            num
        }
    },

    //查询 购物车得数据
    checkAtion(uid) {
        return (dispatch) => {
            getCartList(uid).then((res) => {//异步获取数据
                // console.log(res)
                dispatch({
                    type: CHECK,
                    list: res
                })
            })
        }
    },
    //清空
    clear() {
        return {
            type: CLEAR
        }
    },
    changeCheck(index) {
        return {
            type: CHECKED,
            index
        }
    }



}