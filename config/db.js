var mysql      = require('mysql');
var connection = mysql.createPool({
    connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'node_test_db'
});

module.exports = {connection};