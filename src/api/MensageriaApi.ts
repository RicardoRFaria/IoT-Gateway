import Trigger from '../model/Trigger';
import EventoApi from './EventoApi';
import Dispositivo from '../model/Dispositivo';

import MotorDeOperacoes from '../acoes/MotorDeOperacoes';

const ID_CLIENT_WILDCARD = '*';

class MensageriaApi {


    private eventoApi: EventoApi;

    constructor() {
        this.eventoApi = new EventoApi();
    }

    public novaMensagem(clientId, conteudo: any): void {
        this.getPipelineDeAcoes(clientId, conteudo);
    }

    private avaliarEExecutarPipelineDeAcoes(triggers: Array<Trigger>, conteudo: any) {
        triggers.forEach(trigger => {
            let prossegue = MotorDeOperacoes.prossegue(trigger.operacao, conteudo);
            if (prossegue) {
                console.info('Evento atendido, prossegue.');
                trigger.eventosRelacionados.forEach(eventoRelacionado => {
                    console.log('ID do evento relacionado');
                    console.log(eventoRelacionado.id)
                    console.log('Executa a acao');
                    this.eventoApi.executarEvento(eventoRelacionado);
                });
            } else {
                console.info('Evento nao atendido, nenhuma ação será executada');
            }
        });
    }

    private getPipelineDeAcoes(clientId: String, conteudo: any) : void {
        if (clientId === undefined) {
            console.error('MQTT Cliend ID recebido é undefined.');
            return;
        }
        console.info('Consultando dispositivos com MQTT Client ID: ' + clientId);
        let mensageriaApi = this;
        let consultaClientId = {$or:[ {'mqttClientId':clientId}, {'mqttClientId': ID_CLIENT_WILDCARD }]};
        Dispositivo.find(consultaClientId, function (err, dispositivos: Array<Dispositivo>) {
            if (err) {
                console.log('Erro ao carregar o client com MQTT ID: ' + clientId + ', erro: ' + err);
                return;
            }
            if (dispositivos === null || dispositivos.length === 0) {
                console.log('Nenhum dispositivo com MQTT ID: ' + clientId + ' foi encontrado.');
                return;
            }
            console.info('Encontrado ' + dispositivos.length + ' dispositivo para o MQTT ID:' + clientId);
            dispositivos.forEach(dispositivo => {
                console.info('Processando dispositivo com nome: ' + dispositivo.nome);
                Trigger.find({'_id': dispositivo.idTrigger}, function (err, triggers: Array<Trigger>) {
                    if (err) {
                        console.log('Erro ao carregar as triggers relacionadas ao cliente: ' + clientId + ', erro: ' + err);
                        return;
                    }
                    if (triggers === null || triggers.length === 0) {
                        console.log('Mensagem recebida de um client sem ações configuradas, cliend id: ' + clientId);
                        return;
                    }
                    mensageriaApi.avaliarEExecutarPipelineDeAcoes(triggers, conteudo)
                });

            });
        });

    }

    
}

export default MensageriaApi;