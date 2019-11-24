import express from 'express';
import routes from './routes';

// will called only one time
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // allow app receive json requests
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server; (old way)
export default new App().server;
