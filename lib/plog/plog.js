"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var plog = function plog(message) {
  return function (data) {
    Promise.resolve(data).then(function (res) {
      return console.log("".concat(message, " "), res);
    });
    return data;
  };
};

var _default = plog;
exports["default"] = _default;