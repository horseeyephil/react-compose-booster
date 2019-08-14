function updateDeep(root, path, data, merge = false){
  const keys = path.split('.')

  function updateLayer(layer, step = 0){
    if(typeof layer !== 'object' || Array.isArray(layer)) layer = undefined
    const currentKey = keys[step]

    if(step === keys.length-1) {
      const payload = merge ? Object.assign({}, layer[currentKey], data) : data
      return Object.assign({}, layer, { [currentKey]: payload })
    }
    
    return Object.assign({}, layer, { [currentKey] : updateLayer(layer[currentKey], step+1)})
  }

  return updateLayer(root);
}

export default updateDeep;