import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import MqttServer from './mqtt-server';
import ClientApi from './api/ClientApi';
import MensageriaApi from './api/MensageriaApi';
import * as mongoose from 'mongoose';
import dbconfig from './config/mongoose';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public clientApi: ClientApi;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.clientApi = new ClientApi();
    this.routes();
    MqttServer.init(new MensageriaApi());
    mongoose.connect(dbconfig.url, dbconfig.options, function (error) {
      if (error) {
        console.error('Falha ao se conectar com o mongodb', error);
      }
    });
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      this.clientApi.listar(res);
    });
    router.post('/', (req, res, next) => {
      this.clientApi.salvar(req, res);
    });
    router.put('/', (req, res, next) => {
      this.clientApi.editar(req, res);
    });
    this.express.use('/', router);
  }

}

export default new App().express;