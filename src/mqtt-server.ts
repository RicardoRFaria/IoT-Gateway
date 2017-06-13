import * as mosca from 'mosca';
import settings from './config/mqtt-config';

class MqttServer {

    public server: any;

    public init() {
        this.server = new mosca.Server(settings);
        this.createEvents();
    }

    createEvents() {
        this.server.on('clientConnected', function (client) {
            console.log('client connected', client.id);
        });

        // fired when a message is received
        this.server.on('published', function (packet, client) {
            console.log('Published', packet.payload);
        });

        this.server.on('ready', this.setup);

    }

    setup() {
        console.log('Mosca server is up and running');
    }

}

export default new MqttServer();