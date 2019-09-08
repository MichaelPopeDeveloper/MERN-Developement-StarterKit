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
var logo_svg_1 = require("../../logo.svg");
require("./../../styles/app.css");
var Private = (function (_super) {
    __extends(Private, _super);
    function Private() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Private.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement("header", { className: "App-header" },
                react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
                react_1["default"].createElement("h1", { className: "text-white" }, "Private Component"))));
    };
    return Private;
}(react_1.Component));
exports["default"] = Private;
//# sourceMappingURL=Private.js.map