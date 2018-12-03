(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.selectAuthen = (state) => state.authen.isAuthen;
    exports.selectAuthenProfile = (state) => state.authen.data;
    exports.selectAuthenState = (state) => state.authen;
});
