const takeProp = (propName, shouldMerge) => Component => props => 
  Component(shouldMerge ? {...props, ...props[propName]} : props[propName] || {});

  export default takeProp;