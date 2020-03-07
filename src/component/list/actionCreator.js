import { GETID, SETID, GETGOODSLIST } from "./actionType"
import { getGoodsList } from "@/api/request"
export default {
    getId() {
        return {
            type: GETID
        }
    },
    setId(id) {
        return {
            type: SETID,
            id
        }
    },
    getLists() {
        return (dispatch) => {
            getGoodsList().then((res) => {
                // console.log(res)
                dispatch({
                    type: GETGOODSLIST,
                    list: res
                })
            })
        }
    }


}