import Trigger from '../model/Trigger';
import Operacao from '../model/Operacao';
import Evento from '../model/Evento';
import TIPO_OPERACAO from '../model/TIPO_OPERACAO';
import EventoApi from './EventoApi';

import MotorDeOperacoes from '../acoes/MotorDeOperacoes';

class MensageriaApi {

    private eventoApi: EventoApi;

    constructor() {
        this.eventoApi = new EventoApi();
    }

    public novaMensagem (clientId, conteudo): void {
        let pipeline = this.getPipelineDeAcoes(clientId);
        if (pipeline === null || pipeline.length === 0) {
            console.log('Mensagem recebida de um client sem ações configuradas, cliend id: ' + clientId);
        }
        pipeline.forEach(trigger => {
            console.log('TRIGGER')
            console.log(trigger);
            let prossegue = MotorDeOperacoes.prossegue(trigger, conteudo);
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

    private getPipelineDeAcoes(clientId: String) : Array<Trigger> {
        let operacao =  new Operacao({
            tipo: TIPO_OPERACAO.EQUALS,
            valor: 'true'
        });

        let evento = new Evento({
            id: 'sms',
            nome: 'Envio de SMS',
            descricao: 'Envia um sms para o numero 62 982081739'
        });
        let eventosRelacionados = [evento];
        let trigger = new Trigger({
            operacao: operacao,
            eventosRelacionados: eventosRelacionados
        });
        /*trigger.save(function (err, data) {
            console.log(err);
            console.log(data);
            console.log('Desorientação');
        });*/
        Trigger.create({
            operacao: operacao,
            eventosRelacionados: eventosRelacionados
        }, function (err, data) {
            console.log(err);
            console.log(data);
            console.log('Desorientação');
        });
        return [trigger];
    }

    
}

export default MensageriaApi;