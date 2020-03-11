import { ADD, DELETE, CHECK, CLEAR, REDUCER, CHECKED, CHECKALL, INSERT } from "./actionType"

const initialState = {
    list: [],
}

export default (state = initialState, { type, list, index, trorfa, listId, listItem, uid }) => {
    switch (type) {
        //查询 购物车得数据
        case CHECK:
            var newState = JSON.parse(JSON.stringify(state));
            newState.list = list;
            // console.log(newState)
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
        // 点击全选和全不选
        case CHECKALL:
            var newState = JSON.parse(JSON.stringify(state));
            newState.list.data.forEach((item) => {
                item.checked = trorfa
            });
            return newState;
        //清空
        case CLEAR:
            var newState = JSON.parse(JSON.stringify(state));
            newState.list.data = [];
            return newState;
        //删除一条或者多条
        case DELETE:
            var newState = JSON.parse(JSON.stringify(state));
            // console.log(index);//index是个数组装的是listID
            if (index.length === 1) {
                newState.list.data = newState.list.data.filter((item) => item.listId !== index[0]);
            }
            else {
                index.forEach((itm) => {
                    newState.list.data = newState.list.data.filter((item) => item.listId !== itm);
                })
            }
            return newState;
        case INSERT:
            var newState = JSON.parse(JSON.stringify(state));
            let target = newState.list.data.findIndex((item, index, arr) => {
                return item.listId == listId
            })
            // console.log(target);
            if (target != -1) {
                newState.list.data[target].num += 1
            } else {
                newState.list.data.push({ ...listItem, uid: uid, num: 1, checked: false })
            }
            return newState;
        default:
            return state
    }
}
