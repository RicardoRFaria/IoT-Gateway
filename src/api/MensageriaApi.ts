import { } from '../model/HistoricoEventoSchema';
import EventoApi from './EventoApi';
import Trigger from '../model/Trigger';
import Dispositivo from '../model/Dispositivo';
import HistoricoMensagem from '../model/HistoricoMensagem';
import HistoricoEvento from '../model/HistoricoEvento';

import MotorDeOperacoes from '../acoes/MotorDeOperacoes';

const ID_CLIENT_WILDCARD = '*';

class MensageriaApi {

    private eventoApi: EventoApi;

    constructor() {
        this.eventoApi = new EventoApi();
    }

    public novaMensagem(clientId: String, conteudo: any): void {
        this.persistirMensagem(clientId, conteudo);
        this.getPipelineDeAcoes(clientId, conteudo);
    }

    private avaliarEExecutarPipelineDeAcoes(triggers: Array<Trigger>, clientId: String, conteudo: any) {
        let mensageriaApi = this;
        triggers.forEach(trigger => {
            if (MotorDeOperacoes.prossegue(trigger.operacao, conteudo)) {
                console.info('Evento atendido, prossegue.');
                HistoricoMensagem.find({idDispositivo: clientId}).sort( {data: -1} ).limit(2).exec(function (err, historicos: Array<HistoricoMensagem>) {
                    if (historicos == null || historicos.length === 0) {
                        mensageriaApi.executarTrigger(clientId, trigger);
                    } else if (historicos.length === 1) {
                        let ultimaExecucao = historicos[0];
                        if (!MotorDeOperacoes.prossegue(trigger.operacao, ultimaExecucao.valor, true)) {
                            mensageriaApi.executarTrigger(clientId, trigger);
                        } else {
                            console.log('Evento atendido recentemente, não será executado.');
                        }
                    } else {
                        let penultimaExecucao = historicos[1];
                        if (!MotorDeOperacoes.prossegue(trigger.operacao, penultimaExecucao.valor, true)) {
                            mensageriaApi.executarTrigger(clientId, trigger);
                        } else {
                            console.log('Evento atendido recentemente, não será executado.');
                        }
                    }
                });
            } else {
                console.info('Evento nao atendido, nenhuma ação será executada');
            }
        });
    }

    private executarTrigger(clientId: String, trigger: Trigger) {
        new HistoricoEvento({
            idDispositivo: clientId,
            nomeTrigger: trigger.nome,
            data: new Date()
        }).save();
        trigger.eventosRelacionados.forEach(eventoRelacionado => {
            console.log('ID do evento relacionado: ' + eventoRelacionado._id + '. Executa a acao.');
            this.eventoApi.executarEvento(eventoRelacionado);
        });
    }

    private getPipelineDeAcoes(clientId: String, conteudo: any): void {
        if (clientId === undefined) {
            console.error('MQTT Cliend ID recebido é undefined.');
            return;
        }
        console.info('Consultando dispositivos com MQTT Client ID: ' + clientId);
        let mensageriaApi = this;
        let consultaClientId = { $or: [{ mqttClientId: clientId }, { mqttClientId: ID_CLIENT_WILDCARD }], $and: [{ativo: true}] };
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
                Trigger.find({ _id: dispositivo.idTrigger }, function (err, triggers: Array<Trigger>) {
                    if (err) {
                        console.log('Erro ao carregar as triggers relacionadas ao cliente: ' + clientId + ', erro: ' + err);
                        return;
                    }
                    if (triggers === null || triggers.length === 0) {
                        console.log('Mensagem recebida de um client sem ações configuradas, cliend id: ' + clientId);
                        return;
                    }
                    console.log('Quantidade de trigger encontradas: ' + triggers.length);
                    mensageriaApi.avaliarEExecutarPipelineDeAcoes(triggers, clientId, conteudo);
                });
            });
        });
    }

    private persistirMensagem(clientId: String, conteudo: any) {
        new HistoricoMensagem({
            idDispositivo: clientId,
            valor: conteudo,
            data: new Date()
        }).save();
    }
}

export default MensageriaApi;
