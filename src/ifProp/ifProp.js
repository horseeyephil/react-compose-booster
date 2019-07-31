import getNull from '../getNull/getNull';

const ifProp = (propName, Option = getNull) => Component =>
  function RenderedIf(props) {
    const branch = props[propName] ?  Component : Option;
    return branch(props);
  };

export default ifProp;
