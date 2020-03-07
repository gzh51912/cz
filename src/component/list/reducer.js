import { GETID, SETID, GETGOODSLIST } from "./actionType"
const initialState = {
    id: "",
    list: []
}

export default (state = initialState, { type, id, list }) => {

    switch (type) {

        case SETID:
            var newState = JSON.parse(JSON.stringify(state));
            newState.id = id;
            return newState
        case GETID:
            var newState = JSON.parse(JSON.stringify(state));
            return newState
        case GETGOODSLIST:
            var newState = JSON.parse(JSON.stringify(state));
            newState.list = list;
            return newState;
        default:
            return state
    }
}
