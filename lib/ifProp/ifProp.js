"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getNull = _interopRequireDefault(require("../getNull/getNull"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ifProp = function ifProp(propName) {
  var Option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _getNull["default"];
  return function (Component) {
    return function RenderedIf(props) {
      var branch = props[propName] ? Component : Option;
      return branch(props);
    };
  };
};

var _default = ifProp;
exports["default"] = _default;