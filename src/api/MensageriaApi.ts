import Trigger from '../model/Trigger';
import IOperacao from '../model/IOperacao';
import IEvento from '../model/IEvento';
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

    private getPipelineDeAcoes(clientId: String) : Array<Trigger> {
        let operacao =  <IOperacao>{};
        operacao.tipo = TIPO_OPERACAO.EQUALS;
        operacao.valor = 'true';

        let evento =  <IEvento>{
            id: 'sms',
            nome: 'Envio de SMS',
            descricao: 'Envia um sms para o numero 62 982081739'
        };
        let eventosRelacionados = [evento];
        let trigger = new Trigger({
            operacao: operacao,
            eventosRelacionados: eventosRelacionados
        });
        // Desativado pois não precisa salvar por enquanto
        /*trigger.save(function (err, data) {
            console.log(err);
            console.log(data);
        });*/ 
        return [trigger];
    }

    
}

export default MensageriaApi;