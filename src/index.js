import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js'; // один раз

async function start() {
  await initMongoConnection();
  setupServer();
}

start();
