import Trigger from '../model/Trigger';
import EventoApi from './EventoApi';

import MotorDeOperacoes from '../acoes/MotorDeOperacoes';

class MensageriaApi {

    private eventoApi: EventoApi;

    constructor() {
        this.eventoApi = new EventoApi();
    }

    public novaMensagem (clientId, conteudo: any): void {
        console.log('NOVA MENSAGEM');
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
        let mensageriaApi = this;
        Trigger.find({}, function (err, triggers: Array<Trigger>) {
            if (err) {
                console.log('Erro ao carregar as triggers relacionadas ao cliente: ' + clientId + ', erro: ' + err);
            }
            if (triggers === null || triggers.length === 0) {
                console.log('Mensagem recebida de um client sem ações configuradas, cliend id: ' + clientId);
            }
            mensageriaApi.avaliarEExecutarPipelineDeAcoes(triggers, conteudo)
        });
    }

    
}

export default MensageriaApi;