"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var mikureq = /** @class */ (function () {
  function mikureq(baseURL, timeout) {
    if (timeout === void 0) {
      timeout = 10000;
    }
    this.instance = axios_1.default.create({
      baseURL: baseURL,
      timeout: timeout,
    });
  }
  mikureq.prototype.req = function (config) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.instance
        .request(config)
        .then(function (res) {
          resolve(res);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  };
  mikureq.prototype.get = function (config) {
    return this.req(__assign(__assign({}, config), { method: "get" }));
  };
  mikureq.prototype.post = function (config) {
    return this.req(__assign(__assign({}, config), { method: "post" }));
  };
  return mikureq;
})();
exports.default = mikureq;
//# sourceMappingURL=main.js.map
