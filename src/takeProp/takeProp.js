const takeProp = (propName, shouldMerge) => Component => props => 
  Component(shouldMerge ? Object.assign({}, props, props[propName]) : props[propName] || {});

  export default takeProp;