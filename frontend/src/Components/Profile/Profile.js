"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
require("../../styles/app.css");
var index_1 = require("../../actions/index");
var mapStateToProps = function (state) {
    return { state: state };
};
function mapDispatchToProps(dispatch) {
    return {
        loginUser: function (user) { return dispatch(index_1.loginUser(user)); }
    };
}
var Profile = (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Profile.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "row" }));
    };
    return Profile;
}(react_1.Component));
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Profile);
//# sourceMappingURL=Profile.js.map