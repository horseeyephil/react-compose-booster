import React from 'react';

const quickText = (propKey, htmlTag) => props => {
  if(!props[propKey]) return null;
  return React.createElement(htmlTag, props, props[propKey]);
}

export default quickText;
