"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var wrapWith = function wrapWith() {
  var Decoration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react["default"].Fragment;
  var propsByKey = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    for (var _len = arguments.length, Targets = new Array(_len), _key = 0; _key < _len; _key++) {
      Targets[_key] = arguments[_key];
    }

    return function WrappedProduct(props) {
      var wrapperProps = propsByKey ? props[propsByKey] : Object.assign({}, props, {
        children: undefined
      }); // suppress incoming children props for wrapper

      return _react["default"].createElement.apply(_react["default"], [Decoration, wrapperProps].concat(_toConsumableArray(Targets.map(function (EachChild) {
        return _react["default"].createElement(EachChild, props);
      }))));
    };
  };
};

var _default = wrapWith;
exports["default"] = _default;