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
            console.log('Cliente conectado com ID: ', client.id);
        });

        // Lançado quando um evento for recebido
        this.server.on('published', function (packet, client) {
            if (client === undefined) {
                return;
            }
            let payloadLimpo = packet.payload.toString().replace(/^\s+|\s+$/gm, '');
            console.log('Cliente enviou mensagem com o conteúdo: ', payloadLimpo);
            apiMensagem.novaMensagem(client.id, payloadLimpo);
        });

        this.server.on('ready', this.setup);

    }

    setup() {
        console.log('Mosca server esta online e rodando na porta ' + settings.port);
    }

}

export default new MqttServer();
