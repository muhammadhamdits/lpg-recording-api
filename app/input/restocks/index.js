const { query } = require('express-validator')

const invalidYearMessage = 'Year must be a number between 2022 and 2100'
const invalidMonthMessage = 'Month must be a number between 1 and 12'

module.exports = [
  query('year').isInt({ min: 2022, max: 2100 }).withMessage(invalidYearMessage).optional(),
  query('month').isInt({ min: 1, max: 12 }).withMessage(invalidMonthMessage).optional()
]