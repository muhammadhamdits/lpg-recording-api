const { validationResult, matchedData } = require('express-validator')

module.exports = (validations) => {
  return async (req) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req)
    if(errors.array().length > 0) return { errors: errors.array() }
    
    return matchedData(req)
  }
}