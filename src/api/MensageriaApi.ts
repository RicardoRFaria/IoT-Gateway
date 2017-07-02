import Trigger from '../model/Trigger';
import Operacao from '../model/Operacao';
import Evento from '../model/Evento';
import TIPO_OPERACAO from '../model/TIPO_OPERACAO';
import EventoApi from './EventoApi';

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
            let prossegue = trigger.operacao.prossegue(conteudo);
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
        let trigger = new Trigger();
        let operacao =  new Operacao();
        operacao.tipo = TIPO_OPERACAO.EQUALS;
        operacao.valor = 'true';
        trigger.operacao = operacao;

        let evento = new Evento();
        evento.id = 'sms';
        evento.nome = 'Envio de SMS';
        evento.descricao = 'Envia um sms para o numero 62 982081739';
        trigger.eventosRelacionados.push(evento)
        return [trigger];
    }

    
}

export default MensageriaApi;