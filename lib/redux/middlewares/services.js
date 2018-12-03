(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "string-template", "./configs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const f = require("string-template");
    const configs_1 = require("./configs");
    exports.postLogin = ({ product = '', data }) => configs_1.request.post(f(configs_1.AUTHEN_URL, {
        product: product,
    }), data);
});
