"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var storage_1 = require("redux-persist/lib/storage");
var index_1 = require("../reducers/index");
var persistConfig = {
    key: 'root',
    storage: storage_1["default"]
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, index_1["default"]);
exports["default"] = (function () {
    var store = redux_1.createStore(persistedReducer);
    var persistor = redux_persist_1.persistStore(store);
    return { store: store, persistor: persistor };
});
//# sourceMappingURL=index.js.map