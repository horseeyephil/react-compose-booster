import getNull from './getNull';

const ifProp = (propName, Option = getNull) => Component =>
  function RenderedIf(props) {
    const branch = (props[propName] && props[propName] != 0) ?  Component : Option;
    return branch(props);
  };

export default ifProp;
