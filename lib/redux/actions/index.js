(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../constants/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Types = require("../constants/index");
    exports.actionRequestLogin = (payload) => ({
        type: Types.REQUEST_LOGIN,
        payload,
    });
    exports.actionLogicSuccess = (payload) => ({
        type: Types.LOGIN_SUCCESS,
        payload,
    });
    exports.actionLoginFail = (payload) => ({
        type: Types.LOGIN_FAIL,
        payload,
    });
    exports.actionAuthenFail = () => ({
        type: Types.AUTHENTICATE_FAIL,
    });
    exports.actionAuthenSuccess = () => ({
        type: Types.AUTHENTICATE_SUCCESS,
    });
});
