import React from 'react';

function quickText(propKey, htmlTag = 'span', baseProps) {
  return function(props) {
    if(!props[propKey]) return null;
    return React.createElement(htmlTag, Object.assign({}, baseProps, props), props[propKey]);
  };
}

export default quickText;
