import * as mosca from 'mosca';
import settings from './config/mqtt-config';
import MensageriaApi from './api/MensageriaApi';

class MqttServer {

    public server: any;

    public init(apiMensagem: MensageriaApi) {
        this.server = new mosca.Server(settings);
        this.createEvents(apiMensagem);
    }

    createEvents(apiMensagem: MensageriaApi) {
        this.server.on('clientConnected', function (client) {
            console.log('client connected', client.id);
        });

        // Lançado quando um evento for recebido
        this.server.on('published', function (packet, client) {
            if (client === undefined) {
                return;
            }
            console.log('Published', packet.payload.toString());
            apiMensagem.novaMensagem(client.id, packet.payload.toString());
        });

        this.server.on('ready', this.setup);

    }

    setup() {
        console.log('Mosca server esta online e rodando na porta ' + settings.port);
    }

}

export default new MqttServer();
