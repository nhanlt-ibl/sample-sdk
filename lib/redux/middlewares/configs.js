(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "axios"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const axios_1 = require("axios");
    exports.END_POINT = 'http://test-api.mocogateway.com/';
    exports.AUTHEN_URL = `auth/v1/{product}/token`;
    exports.request = axios_1.default.create({
        baseURL: exports.END_POINT,
        timeout: 20000,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${!!localStorage ? localStorage.get('access_token') : ''}`,
            platform: 'uk',
            lang: 'en',
        },
    });
});
