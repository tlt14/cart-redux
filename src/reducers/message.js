import * as messages from "../constants/Message";
import * as types from "../constants/ActionType";

var initialState =messages.MSG_WELCOME;
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default:
        return state;
    }
};
export default myReducer;
