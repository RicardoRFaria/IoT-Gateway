import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import MqttServer from './mqtt-server';
import DispositivoApi from './api/DispositivoApi';
import TriggerApi from './api/TriggerApi';
import MensageriaApi from './api/MensageriaApi';
import * as mongoose from 'mongoose';
import dbconfig from './config/mongoose';

// Creates and configures an ExpressJS web server.
class App {

  private express: express.Application;
  private dispositivoApi: DispositivoApi;
  private triggerApi: TriggerApi;
 
  constructor() {
    this.express = express();
    this.middleware();
    this.dispositivoApi = new DispositivoApi();
    this.triggerApi = new TriggerApi();
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
    let router = express.Router();
    

    router.get('/dispositivo/:id', this.dispositivoApi.get);
    router.delete('/dispositivo/:id', this.dispositivoApi.excluir);
    router.post('/dispositivo', this.dispositivoApi.salvar);
    router.put('/dispositivo', this.dispositivoApi.editar);
    router.get('/dispositivo', (req, res, next) => {
      this.dispositivoApi.listar(res);
    });

    router.get('/trigger/:id', this.triggerApi.get);
    router.delete('/trigger/:id', this.triggerApi.excluir);
    router.post('/trigger', this.triggerApi.salvar);
    router.put('/trigger', this.triggerApi.editar);
    router.get('/trigger', (req, res, next) => {
      this.triggerApi.listar(res);
    });

    this.express.use('/scripts/bootstrap/', express.static(__dirname + '/../../node_modules/bootstrap/dist/'));
    this.express.use('/scripts/angular/', express.static(__dirname + '/../../node_modules/angular/'));
    this.express.use('/scripts/angular-ui-router/', express.static(__dirname + '/../../node_modules/angular-ui-router/release'));
    this.express.use('/scripts/angular-ui-bootstrap/', express.static(__dirname + '/../../node_modules/angular-ui-bootstrap/dist/'));
    this.express.use('/scripts/ui-select/', express.static(__dirname + '/../../node_modules/ui-select/dist/'));
    this.express.use('/scripts/angular-sanitize/', express.static(__dirname + '/../../node_modules/angular-sanitize/'));
    this.express.use('/', express.static(__dirname + '/../../static'));
    this.express.use('/api', router);
  }

}

export default new App().express;