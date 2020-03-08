import { ADD, DELETE, CHECK, CLEAR, REDUCER, CHECKED, CHECKALL } from "./actionType"
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
    //修改单个选中状态
    changeCheck(index) {
        return {
            type: CHECKED,
            index
        }
    },
    //全选或者全不选
    checkAll(trorfa) {
        return {
            type: CHECKALL,
            trorfa
        }
    }



}