const deleteProp = (object, key) => {
  // if(!object.hasOwnProperty(key)) return

  const deletedProp = object[key]
  delete object[key]

  let output = { filteredParams: object }
  output[key] = deletedProp

  return output
}

module.exports = { deleteProp }