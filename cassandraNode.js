const cassandra = require("cassandra-driver");

//factory function to create a client
const clientCassandra = (ip, space) => {
  const Client = new cassandra.Client({
    contactPoints: [ip],
    keyspace: space
  });

  const sendQuery = async (query) => {
    const result = await Client.execute(query);
    return result;
  }

  return {
    sendQuery: (query) => {return sendQuery(query);},
    closeConnection: () => {Client.shutdown();}
  }
}

async function start()
{
  const client = clientCassandra("127.0.0.1", "school");
  const result = await client.sendQuery("SELECT * FROM Lesson;");

  console.log(result);
  client.closeConnection();
}

start();
