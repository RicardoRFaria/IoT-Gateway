import Trigger from '../model/Trigger';
import OperacaoEquals from '../model/operacoes/OperacaoEquals';
import Evento from '../model/Evento';
import EventoApi from './EventoApi';

class MensageriaApi {

    private eventoApi: EventoApi;

    constructor() {
        this.eventoApi = new EventoApi();
    }

    public novaMensagem (clientId, conteudo): void {
        console.log('NOVA MENSAGEM NA API');
        let pipeline = this.getPipelineDeAcoes(clientId);
        if (pipeline === null || pipeline.length === 0) {
            console.log('Mensagem recebida de um client sem ações configuradas, cliend id: ' + clientId);
        }
        pipeline.forEach(trigger => {
            let prossegue = trigger.operacao.prossegue(conteudo);
            if (prossegue) {
                trigger.eventosRelacionados.forEach(eventoRelacionado => {
                    console.log('ID do evento relacionado');
                    console.log(eventoRelacionado.id)
                    console.log('Executa a acao');
                    this.eventoApi.executarEvento(eventoRelacionado);
                });
            }
        });

    }

    private getPipelineDeAcoes(clientId: String) : Array<Trigger> {
        let trigger = new Trigger();
        let operacaoEquals =  new OperacaoEquals('true');
        trigger.operacao = operacaoEquals;

        let evento = new Evento();
        evento.id = 'sms';
        evento.nome = 'Envio de SMS';
        evento.descricao = 'Envia um sms para o numero 62 982081739';
        trigger.eventosRelacionados.push(evento)
        return [trigger];
    }

    
}

export default MensageriaApi;