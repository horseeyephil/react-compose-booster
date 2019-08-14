"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var plog = function plog() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (data) {
    Promise.resolve(data).then(function (res) {
      return console.log("".concat(message, " "), res);
    });
    return data;
  };
};

var _default = plog;
exports["default"] = _default;