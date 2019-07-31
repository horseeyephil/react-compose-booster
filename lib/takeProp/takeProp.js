"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var takeProp = function takeProp(propName, shouldMerge) {
  return function (Component) {
    return function (props) {
      return Component(shouldMerge ? Object.assign({}, props, props[propName]) : props[propName] || {});
    };
  };
};

var _default = takeProp;
exports["default"] = _default;