const cassandra = require("cassandra-driver");
const express = require("express");
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
  if(queryNmbr == 1){
    // do a query 
    queryRes = "Query 1";
  }else if(queryNmbr == 2){
    queryRes = "Query 2";
  }
  else{
    queryRes = "Another one";
  }
  res.send("Query send with results: " + queryRes);
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

//factory function to create a client
// const clientCassandra = (ip, space) => {
//   const Client = new cassandra.Client({
//     contactPoints: [ip],
//     keyspace: space
//   });

//   const sendQuery = async (query) => {
//     const result = await Client.execute(query);
//     return result;
//   }

//   return {
//     sendQuery: (query) => {return sendQuery(query);},
//     closeConnection: () => {Client.shutdown();}
//   }
// }

// async function start()
// {
//   const client = clientCassandra("127.0.0.1", "school");
//   const result = await client.sendQuery("SELECT * FROM Lesson;");

//   console.log(result);
//   client.closeConnection();
// }

// start();
