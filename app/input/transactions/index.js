const { query } = require('express-validator')

const invalidIdMessage = 'restockId must be a valid integer id'
const invalidNameMessage = 'customerName must be a string'
const invalidTypeMessage = 'type must be either "deliver" or "pickup"'

module.exports = [
  query('restockId').isInt({ min: 1 }).withMessage(invalidIdMessage).optional(),
  query('customerName').isString().withMessage(invalidNameMessage).optional(),
  query('type').isIn(['deliver', 'pickup']).withMessage(invalidTypeMessage).optional()
]