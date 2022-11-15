const { body } = require('express-validator')

const invalidIdMsg = 'restockId must be a valid integer id'
const invalidNameMsg = 'customerName must be a string'
const invalidTypeMsg = 'type must be either "deliver" or "pickup"'
const invalidQtyMsg = 'quantity must be a valid integer'

module.exports = [
  body('restockId').isInt({ min: 1 }).withMessage(invalidIdMsg),
  body('customerName').isString().withMessage(invalidNameMsg),
  body('type').isIn(['deliver', 'pickup']).withMessage(invalidTypeMsg),
  body('quantity').isInt({ min: 1 }).withMessage(invalidQtyMsg)
]