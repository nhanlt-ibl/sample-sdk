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
    const initState = {
        isFetching: false,
        isFetched: false,
        isAuthen: false,
        data: {},
        error: {},
    };
    exports.authen = (state = initState, action) => {
        switch (action.type) {
            case Types.REQUEST_LOGIN: {
                return Object.assign({}, state, { isFetching: true });
            }
            case Types.LOGIN_SUCCESS: {
                return Object.assign({}, state, { isFetching: false, isFetched: true, isAuthen: true, data: action.payload });
            }
            case Types.LOGIN_FAIL: {
                return Object.assign({}, state, { isFetching: false, isFetched: false, error: action.payload });
            }
            case Types.AUTHENTICATE_FAIL: {
                return Object.assign({}, initState);
            }
            case Types.AUTHENTICATE_SUCCESS: {
                return Object.assign({}, state, { isAuthen: true });
            }
        }
        return state;
    };
});
