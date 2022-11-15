const { Router } = require('express')
const router = new Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = router


// id
// date -> created_at
// restock_id
// customer_name
// quantity
// type

// id
// date
// quantity