"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getNull = _interopRequireDefault(require("../getNull/getNull"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var either = function either(testFn) {
  var Option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _getNull["default"];
  return function (Component) {
    return function MaybeRendered(props) {
      var branch = testFn(props) ? Component : Option;
      return branch(props);
    };
  };
};

var _default = either;
exports["default"] = _default;