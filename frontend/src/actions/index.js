"use strict";
exports.__esModule = true;
var action_types_1 = require("../constants/action-types");
function loginUser(payload) {
    return { type: action_types_1.LOGIN_USER, payload: payload };
}
exports.loginUser = loginUser;
;
function updateUser(payload) {
    return { type: action_types_1.UPDATE_USER, payload: payload };
}
exports.updateUser = updateUser;
;
function logoutUser(payload) {
    return { type: action_types_1.LOGOUT_USER, payload: payload };
}
exports.logoutUser = logoutUser;
;
//# sourceMappingURL=index.js.map