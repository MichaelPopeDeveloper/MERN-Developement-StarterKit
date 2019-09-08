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
var axios = require("axios");
require("../../styles/app.css");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var index_1 = require("../../actions/index");
var mapStateToProps = function (state) {
    return { state: state };
};
function mapDispatchToProps(dispatch) {
    return {
        loginUser: function (user) { return dispatch(index_1.loginUser(user)); }
    };
}
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.state = {
            username: '',
            email: '',
            password: '',
            errorMessage: ''
        };
        _this.login = _this.login.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
        _this.handleEmailChange = _this.handleEmailChange.bind(_this);
        _this.handlePaswordChange = _this.handlePaswordChange.bind(_this);
        return _this;
    }
    Login.prototype.login = function () {
        var _this = this;
        var _a = this.state, username = _a.username, password = _a.password;
        axios.post('/user/login', {
            username: username,
            password: password
        })
            .then(function (res) {
            console.log(res);
            _this.props.loginUser(res.data.user);
        })["catch"](function (err) { return console.log(err); });
    };
    Login.prototype.handleSubmit = function (event) {
        event.preventDefault();
        var _a = this.state, username = _a.username, email = _a.email, password = _a.password;
        this.login({ username: username, email: email, password: password });
    };
    Login.prototype.handleUsernameChange = function (event) {
        this.setState({ username: event.target.value });
    };
    Login.prototype.handleEmailChange = function (event) {
        this.setState({ email: event.target.value });
    };
    Login.prototype.handlePaswordChange = function (event) {
        this.setState({ password: event.target.value });
    };
    Login.prototype.render = function () {
        var _a = this.state, username = _a.username, password = _a.password;
        var user = this.props.state.user;
        if (user)
            return react_1["default"].createElement(react_router_dom_1.Redirect, { to: {
                    pathname: "/private",
                    state: { from: this.props.location }
                } });
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col d-flex flex-column justify-content-center align-items-center", style: { minHeight: '100vh' } },
                    react_1["default"].createElement("div", { style: { marginTop: '10vh' } }),
                    react_1["default"].createElement("h1", { className: "p-4 pb-0 mb-0" }, "Login"),
                    react_1["default"].createElement("h3", { className: "p-0 m-0 mb-3 text-secondary" }, this.state.errorMessage),
                    react_1["default"].createElement("form", { className: "shadow p-5", onSubmit: this.handleSubmit },
                        react_1["default"].createElement("p", null,
                            "Not a member? ",
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/signup" },
                                react_1["default"].createElement("span", { className: "text-secondary" }, "Sign Up"))),
                        react_1["default"].createElement("div", { "class": "form-group" },
                            react_1["default"].createElement("label", { "for": "exampleInputEmail1" }, "Username"),
                            react_1["default"].createElement("input", { value: username, onChange: this.handleUsernameChange, className: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp", placeholder: "Enter Username" })),
                        react_1["default"].createElement("div", { "class": "form-group" },
                            react_1["default"].createElement("label", { "for": "exampleInputPassword1" }, "Password"),
                            react_1["default"].createElement("input", { value: password, onChange: this.handlePaswordChange, type: "password", className: "form-control", id: "exampleInputPassword1", placeholder: "Password" })),
                        react_1["default"].createElement("button", { type: "submit", className: "btn btn-primary" }, "Login"))))));
    };
    return Login;
}(react_1.Component));
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login);
//# sourceMappingURL=Login.js.map