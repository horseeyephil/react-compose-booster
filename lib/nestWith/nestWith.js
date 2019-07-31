"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _takeProp = _interopRequireDefault(require("../takeProp/takeProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var nestWith = function nestWith() {
  for (var _len = arguments.length, Decoration = new Array(_len), _key = 0; _key < _len; _key++) {
    Decoration[_key] = arguments[_key];
  }

  return function (Target) {
    var objectIsSupplied = _typeof(Decoration[0]) === 'object';

    if (objectIsSupplied) {
      var Children = Object.entries(Decoration[0]);
      return function ProductWithChildMappings(props) {
        return _react["default"].createElement.apply(_react["default"], [Target, props].concat(_toConsumableArray(Children.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              propKey = _ref2[0],
              Component = _ref2[1];

          return (0, _takeProp["default"])(propKey)(Component)(props);
        })), [props.children]));
      };
    }

    return function ProductWithChild(props) {
      var propsWithChildrenSuppressed = Object.assign({}, props, {
        children: undefined
      });
      return _react["default"].createElement.apply(_react["default"], [Target, props].concat(_toConsumableArray(Decoration.map(function (EachChild) {
        return EachChild(propsWithChildrenSuppressed);
      })), [props.children]));
    };
  };
};

var _default = nestWith;
exports["default"] = _default;