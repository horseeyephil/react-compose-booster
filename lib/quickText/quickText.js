"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function quickText(propKey) {
  var htmlTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  var baseProps = arguments.length > 2 ? arguments[2] : undefined;
  return function (props) {
    if (!props[propKey]) return null;
    return _react["default"].createElement(htmlTag, Object.assign({}, baseProps, props), props[propKey]);
  };
}

var _default = quickText;
exports["default"] = _default;