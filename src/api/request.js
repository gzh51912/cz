import axios from "./index"
export const getList = (id) => {
    //分页得接口
    return axios.get(`https://shopapi.smartisan.com/v1/search/goods-list?category_id=${id}&page=1&num=20&sort=sort&channel_id=1002&type=shop`)
}