import { ADD, DELETE, UPDATE, CHECK, CLEAR, REDUCER, CHECKED } from "./actionType"

const initialState = {
    list: [],
}

export default (state = initialState, { type, list, index }) => {
    switch (type) {
        //查询 购物车得数据
        case CHECK:
            var newState = JSON.parse(JSON.stringify(state));
            newState.list = list;
            newState.list.data.forEach((item) => item.checked = false);
            // console.log(newState)
            return newState
        //增加
        case ADD:
            var newState = JSON.parse(JSON.stringify(state));
            newState.list.data[index].num += 1;
            return newState;
        //减少
        case REDUCER:
            var newState = JSON.parse(JSON.stringify(state));
            if (newState.list.data[index].num > 1) {
                newState.list.data[index].num -= 1;
            }
            return newState;
        //单个选中
        case CHECKED:
            var newState = JSON.parse(JSON.stringify(state));
            newState.list.data[index].checked = !newState.list.data[index].checked;
            // console.log(newState)
            return newState
        default:
            return state
    }
}
