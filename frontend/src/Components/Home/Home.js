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
var Login_1 = require("../Login/Login");
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
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement(Login_1["default"], null)));
    };
    return Home;
}(react_1.Component));
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Home);
//# sourceMappingURL=Home.js.map