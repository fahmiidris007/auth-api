require('dotenv').config();
const container = require('./Insfrastructures/container');
const createServer = require('./Insfrastructures/http/createServer');
 
const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`server start at ${server.info.uri}`);
};
 
start();