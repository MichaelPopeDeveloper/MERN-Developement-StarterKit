"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
var react_redux_1 = require("react-redux");
var index_1 = require("./store/index");
var react_2 = require("redux-persist/integration/react");
var _a = index_1["default"](), store = _a.store, persistor = _a.persistor;
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store },
    react_1["default"].createElement(react_2.PersistGate, { loading: null, persistor: persistor },
        react_1["default"].createElement(App_1["default"], null))), document.getElementById('root'));
serviceWorker.unregister();
//# sourceMappingURL=index.js.map