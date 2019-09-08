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
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home/Home");
var Login_1 = require("./Login/Login");
var Signup_1 = require("./Signup/Signup");
var Private_1 = require("./Auth/Private");
var PrivateRoute_1 = require("./Auth/PrivateRoute");
var react_redux_1 = require("react-redux");
var index_1 = require("../actions/index");
var axios = require("axios");
var mapStateToProps = function (state) {
    return { state: state };
};
function mapDispatchToProps(dispatch) {
    return {
        logout: function (action) { return dispatch(index_1.logoutUser(action)); }
    };
}
var Routes = (function (_super) {
    __extends(Routes, _super);
    function Routes(props) {
        var _this = _super.call(this, props) || this;
        _this.auth = function () {
            axios.get('/user')
                .then(function (result) {
                if (result.status === 200)
                    return _this.props.login(false);
                return _this.setState({ user: result.data.user });
            })["catch"](function (error) { return _this.props.logout(false); });
        };
        _this.render = function () {
            return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: Login_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/signup", component: Signup_1["default"] }),
                react_1["default"].createElement(PrivateRoute_1["default"], { path: "/private", component: Private_1["default"] })));
        };
        _this.state = {
            user: false
        };
        return _this;
    }
    Routes.prototype.componentWillMount = function () {
        this.auth();
    };
    return Routes;
}(react_1.Component));
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Routes);
//# sourceMappingURL=Routes.js.map