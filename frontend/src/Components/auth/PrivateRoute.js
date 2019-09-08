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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var axios = require("axios");
var react_redux_1 = require("react-redux");
var index_1 = require("../../actions/index");
var mapStateToProps = function (state) {
    return { state: state };
};
function mapDispatchToProps(dispatch) {
    return {
        login: function (action) { return dispatch(index_1.loginUser(action)); }
    };
}
var PrivateRoute = (function (_super) {
    __extends(PrivateRoute, _super);
    function PrivateRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.authRender = function () {
            axios.get('/user')
                .then(function (result) {
                _this.props.login(result.data.user);
                console.log('props private', _this.props);
            })["catch"](function (error) { return error; });
        };
        _this.render = function () {
            var _a = _this.props, Component = _a.component, rest = __rest(_a, ["component"]);
            var user = _this.props.state.user;
            return (react_1["default"].createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) {
                    return user ? (react_1["default"].createElement(Component, __assign({}, props))) : (react_1["default"].createElement(react_router_dom_1.Redirect, { to: {
                            pathname: "/login",
                            state: { from: props.location }
                        } }));
                } })));
        };
        _this.state = {
            user: false,
            isLoaded: false
        };
        return _this;
    }
    PrivateRoute.prototype.componentWillMount = function () {
        this.authRender();
    };
    return PrivateRoute;
}(react_1.Component));
var PrivateRouteStateless = function (_a) {
    var Component = _a.component, auth = _a.auth, rest = __rest(_a, ["component", "auth"]);
    return (react_1["default"].createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) {
            return auth ? (react_1["default"].createElement(Component, __assign({}, props))) : (react_1["default"].createElement(react_router_dom_1.Redirect, { to: {
                    pathname: "/login",
                    state: { from: props.location }
                } }));
        } })));
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
//# sourceMappingURL=PrivateRoute.js.map