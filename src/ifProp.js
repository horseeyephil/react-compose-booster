const ifProp = (propName, Option = null) => Component =>
  function renderedIf(props) {
    const Branch = Option ? Option(props) : null;
    return props[propName] ?  Component(props): Branch;
  };

export default ifProp;
