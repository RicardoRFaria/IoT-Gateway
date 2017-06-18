import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import MqttServer from './mqtt-server';
import * as ExpressHandlebars from 'express-handlebars';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.templateEngine();
    this.routes();
    MqttServer.init();
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
    /*router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });*/
    router.get('/', (req, res) => {
      res.render('home');
    });
    console.log(__dirname);
    this.express.use('/scripts/bootstrap/', express.static(__dirname + '/../../node_modules/bootstrap/dist/'));
    this.express.use('/', router);
  }

  private templateEngine() {
    this.express.engine('handlebars', ExpressHandlebars({defaultLayout: 'main'}));
    this.express.set('view engine', 'handlebars');
  }

}

export default new App().express;