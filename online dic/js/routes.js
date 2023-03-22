const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/Definition/get/:word', (req, res) => {
  res.send('Birds home page')
})


module.exports = router