import React from 'react';

 const wrapWith = (Decoration = React.Fragment) => (...Targets) =>
  function WrappedProduct(props) {
    return React.createElement(
      Decoration,
      props,
      ...Targets.map(EachChild => React.createElement(EachChild, props))
    );
  };

 export default wrapWith;