
import React from 'react';

const nestWith = (...Decoration) => Target =>
  function productWithChild(props) {
    return React.createElement(
      Target,
      props,
      ...Decoration.map(EachChild => React.createElement(EachChild, props)),
      props.children
    );
  };

export default nestWith;