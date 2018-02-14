const cassandra = require("cassandra-driver");
const express = require("express");
const ip = "127.0.0.1";
const space = "school";
var query = "";

var http = require('http');
const app = express()
app.set('port', 8080);

var server = http.createServer(app);
app.use(express.static('public'))
server.on('listening', onListening);
server.listen(8081);

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.get('/query', (req, res) => {
  let queryNmbr = req.query.query
  console.log(queryNmbr)
  let queryRes = ""
  switch(queryNmbr) {
    case "1":
      query = "SELECT name FROM companies WHERE number_of_products > 1 ALLOW FILTERING"
      break;
    case "2":
      query = "SELECT name FROM companies WHERE number_of_employees = 25 ALLOW FILTERING"
      break;
    case "3":
      query = "SELECT name FROM companies WHERE category_code = 'web' ALLOW FILTERING"
      break;
    case "4":
      query = "SELECT name FROM companies where twitter_username > 'A' and twitter_username < 'B' ALLOW FILTERING"
      break;
    case "5":
      query = "SELECT name FROM companies WHERE founded_year > 2004 AND total_money_raised = '$39.8M' ALLOW FILTERING"
      break;
  }


  const Client = new cassandra.Client({
    contactPoints: [ip],
    keyspace: space
  });

  Client.execute(query, function(err, result){
    console.log(result);
    res.json(result.rows);
  }); 
  
  
})

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

