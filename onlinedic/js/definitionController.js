const { json } = require('body-parser');
const express = require('express')
const router = express.Router()

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'entries',
  port : '3306'
});



router.get('/:word', (req, res) => {
  const word = req.params.word;
  var query = `SELECT * FROM entries.entries e where e.word like '%${word}%'`;
  console.log(query);
  connection.query(`SELECT * FROM entries.entries e where e.word like '%${word}%'`, (error, results, fields) => {
    if (error) {
      debugger;
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
      return;
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send( JSON.stringify( results));
  });

})

// Export the router
module.exports = router