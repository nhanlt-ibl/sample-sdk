(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./services", "../constants/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const services_1 = require("./services");
    const Types = require("../constants/index");
    exports.default = (store) => (next) => (action) => {
        if (action.type === Types.REQUEST_LOGIN) {
            next(action);
            const { product, data } = action.payload;
            services_1.postLogin(action.payload)
                .then(res => {
                return store.dispatch({ type: Types.LOGIN_SUCCESS });
            })
                .catch(err => {
                return store.dispatch({ type: Types.LOGIN_FAIL });
            });
        }
    };
});
