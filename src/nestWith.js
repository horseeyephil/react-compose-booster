
import React from 'react';
import takeProp from './takeProp';

const nestWith = (...Decoration) => Target => {
  const objectIsSupplied = typeof Decoration[0] === 'object';

  if (objectIsSupplied) {
    const Children = Object.entries(Decoration[0]);
    return function ProductWithChildMappings(props) {
      return React.createElement(
        Target,
        props,
        ...Children.map(([propKey, Component]) => takeProp(propKey)(Component)(props)),
        props.children
      );
    };
  }

  return function ProductWithChild(props) {
    const propsWithChildrenSuppressed = Object.assign({},
      props, { children: undefined }
    );
    return React.createElement(
      Target,
      props,
      ...Decoration.map(EachChild => EachChild(propsWithChildrenSuppressed)),
      props.children
    );
  };
};

export default nestWith;
