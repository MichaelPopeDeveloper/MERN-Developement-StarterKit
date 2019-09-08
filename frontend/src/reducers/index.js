"use strict";
exports.__esModule = true;
var action_types_1 = require("../constants/action-types");
var initialState = {
    user: false
};
function rootReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === action_types_1.LOGIN_USER) {
        return Object.assign({}, state, {
            user: state.user = action.payload
        });
    }
    if (action.type === action_types_1.UPDATE_USER) {
        return Object.assign({}, state, {
            user: state.user = action.payload
        });
    }
    if (action.type === action_types_1.LOGOUT_USER) {
        return Object.assign({}, state, {
            user: state.user = action.payload
        });
    }
    return state;
}
exports["default"] = rootReducer;
//# sourceMappingURL=index.js.map