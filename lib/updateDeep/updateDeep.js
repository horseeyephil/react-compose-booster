"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function updateDeep(root, path, data) {
  var merge = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var keys = path.split('.');

  function updateLayer(layer) {
    var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (_typeof(layer) !== 'object' || Array.isArray(layer)) layer = undefined;
    var currentKey = keys[step];

    if (step === keys.length - 1) {
      var payload = merge ? Object.assign({}, layer[currentKey], data) : data;
      return Object.assign({}, layer, _defineProperty({}, currentKey, payload));
    }

    return Object.assign({}, layer, _defineProperty({}, currentKey, updateLayer(layer[currentKey], step + 1)));
  }

  return updateLayer(root);
}

var _default = updateDeep;
exports["default"] = _default;