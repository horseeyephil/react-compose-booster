import React from 'react';

const wrapWith = (Decoration = React.Fragment, propsByKey) => (...Targets) =>
  function WrappedProduct(props) {

    const wrapperProps = propsByKey ? props[propsByKey] :
      Object.assign({}, props, { children: undefined }); // suppress incoming children props for wrapper

    return React.createElement(
      Decoration,
      wrapperProps,
      ...Targets.map(EachChild => React.createElement(EachChild, props))
    );
  };

 export default wrapWith;