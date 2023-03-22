const express = require('express')
const app = express()

// Require the usersController
const definitionController = require('./definitionController')

// Use the usersController for all routes starting with '/users'
app.use('/definition', definitionController)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Define your other routes here
app.get('/', (req, res) => {
  res.send('server is running')
})

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})