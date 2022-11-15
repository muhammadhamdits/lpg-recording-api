const Restock = require('../../models').Restock

const index = async (params) => {
  try {
    let restocks = await Restock.findAll()
    if(params.year) restocks = filterByYear(restocks, params.year)
    if(params.month) restocks = filterByMonth(restocks, params.month)

    return { data: restocks }
  } catch (error) {
    return { status: 500, data: error }
  }
}

const filterByYear = (restocks, year) => {
  return restocks.filter(restock => restock.date.getFullYear() === parseInt(year))
}

const filterByMonth = (restocks, month) => {
  return restocks.filter(restock => restock.date.getMonth() + 1 === parseInt(month))
}

module.exports = { index }